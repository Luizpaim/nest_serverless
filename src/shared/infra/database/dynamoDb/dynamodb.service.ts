import { Injectable, Inject, Logger, OnModuleInit } from '@nestjs/common'
import {
    DynamoDBDocumentClient,
    GetCommand,
    PutCommand,
    QueryCommand,
    DeleteCommand,
    ScanCommand,
} from '@aws-sdk/lib-dynamodb'
import {
    DynamoDBClient,
    CreateTableCommand,
    DescribeTableCommand,
    CreateTableCommandInput,
} from '@aws-sdk/client-dynamodb'
import { randomUUID } from 'crypto'

export interface TableConfig {
    name: string
    primaryKey: string
    sortKey?: string
}

@Injectable()
export class DynamoDbService implements OnModuleInit {
    private readonly logger = new Logger(DynamoDbService.name)
    private readonly docClient: DynamoDBDocumentClient
    private readonly tables: Record<string, TableConfig> = {
        roles: {
            name: `${process.env.APP_ENVIRONMENT || 'dev'}-${process.env.DYNAMODB_TABLE_ROLES || 'roles'}`,
            primaryKey: 'id',
        },
    }

    constructor(
        @Inject('DYNAMO_CLIENT') private readonly client: DynamoDBClient
    ) {
        this.docClient = DynamoDBDocumentClient.from(client)
    }

    async onModuleInit() {
        if (this.isTestEnvironment()) {
            this.logger.log(
                'Test environment - skipping DynamoDB initialization'
            )
            return
        }

        this.logger.log('Initializing DynamoDB tables...')

        try {
            for (const config of Object.values(this.tables)) {
                await this.ensureTableExists(config)
            }
            this.logger.log('DynamoDB initialization complete')
        } catch (error) {
            this.logger.warn(
                'DynamoDB initialization failed, continuing without tables:',
                error.message
            )
            // Continue sem falhar a aplicação se não conseguir conectar no DynamoDB
        }
    }

    private isTestEnvironment(): boolean {
        return (
            process.env.NODE_ENV === 'test' ||
            process.env.JEST_WORKER_ID !== undefined ||
            process.env.CI === 'true'
        )
    }

    private async ensureTableExists(config: TableConfig): Promise<void> {
        try {
            await this.client.send(
                new DescribeTableCommand({ TableName: config.name })
            )
            this.logger.log(`Table ${config.name} already exists`)
        } catch (error) {
            if (error.name === 'ResourceNotFoundException') {
                await this.createTable(config)
            } else {
                throw error
            }
        }
    }

    private async createTable(config: TableConfig): Promise<void> {
        this.logger.log(`Creating table ${config.name}...`)

        const params: CreateTableCommandInput = {
            TableName: config.name,
            AttributeDefinitions: [
                { AttributeName: config.primaryKey, AttributeType: 'S' },
            ],
            KeySchema: [{ AttributeName: config.primaryKey, KeyType: 'HASH' }],
            BillingMode: 'PAY_PER_REQUEST',
        }

        if (config.sortKey) {
            params.AttributeDefinitions?.push({
                AttributeName: config.sortKey,
                AttributeType: 'S',
            })
            params.KeySchema?.push({
                AttributeName: config.sortKey,
                KeyType: 'RANGE',
            })
        }

        await this.client.send(new CreateTableCommand(params))
        this.logger.log(`Table ${config.name} created successfully`)
    }

    // ===== CRUD METHODS =====

    async create<T extends Record<string, unknown>>(
        tableName: string,
        item: T
    ): Promise<T & { id: string; createdAt: string; updatedAt: string }> {
        const now = new Date().toISOString()
        const itemWithMeta = {
            ...item,
            id: (item.id as string) || randomUUID(),
            createdAt: now,
            updatedAt: now,
        }

        await this.docClient.send(
            new PutCommand({
                TableName: this.getTableName(tableName),
                Item: itemWithMeta,
                ConditionExpression: 'attribute_not_exists(id)',
            })
        )

        return itemWithMeta
    }

    async findById<T = Record<string, unknown>>(
        tableName: string,
        id: string
    ): Promise<T | null> {
        const result = await this.docClient.send(
            new GetCommand({
                TableName: this.getTableName(tableName),
                Key: { id },
            })
        )

        return result.Item ? (result.Item as T) : null
    }

    async findAll<T = Record<string, unknown>>(
        tableName: string,
        options?: {
            limit?: number
            lastEvaluatedKey?: Record<string, unknown>
        }
    ): Promise<{ items: T[]; lastEvaluatedKey?: Record<string, unknown> }> {
        const result = await this.docClient.send(
            new ScanCommand({
                TableName: this.getTableName(tableName),
                Limit: options?.limit,
                ExclusiveStartKey: options?.lastEvaluatedKey,
            })
        )

        return {
            items: (result.Items as T[]) || [],
            lastEvaluatedKey: result.LastEvaluatedKey,
        }
    }

    async update<T extends Record<string, unknown>>(
        tableName: string,
        id: string,
        updates: Partial<T>
    ): Promise<T & { id: string; updatedAt: string }> {
        // Get existing item first
        const existing = await this.findById<T>(tableName, id)
        if (!existing) {
            throw new Error(`Item with id ${id} not found`)
        }

        const updatedItem = {
            ...existing,
            ...updates,
            id, // Ensure id is preserved
            updatedAt: new Date().toISOString(),
        }

        await this.docClient.send(
            new PutCommand({
                TableName: this.getTableName(tableName),
                Item: updatedItem,
            })
        )

        return updatedItem as T & { id: string; updatedAt: string }
    }

    async delete(tableName: string, id: string): Promise<boolean> {
        try {
            await this.docClient.send(
                new DeleteCommand({
                    TableName: this.getTableName(tableName),
                    Key: { id },
                    ConditionExpression: 'attribute_exists(id)',
                })
            )
            return true
        } catch (error) {
            if (error.name === 'ConditionalCheckFailedException') {
                return false // Item didn't exist
            }
            throw error
        }
    }

    async query<T = Record<string, unknown>>(
        tableName: string,
        keyCondition: string,
        options?: {
            filterExpression?: string
            expressionAttributeNames?: Record<string, string>
            expressionAttributeValues?: Record<string, unknown>
            limit?: number
        }
    ): Promise<{ items: T[]; lastEvaluatedKey?: Record<string, unknown> }> {
        const result = await this.docClient.send(
            new QueryCommand({
                TableName: this.getTableName(tableName),
                KeyConditionExpression: keyCondition,
                FilterExpression: options?.filterExpression,
                ExpressionAttributeNames: options?.expressionAttributeNames,
                ExpressionAttributeValues: options?.expressionAttributeValues,
                Limit: options?.limit,
            })
        )

        return {
            items: (result.Items as T[]) || [],
            lastEvaluatedKey: result.LastEvaluatedKey,
        }
    }

    private getTableName(tableName: string): string {
        const tableConfig = this.tables[tableName]
        if (!tableConfig) {
            throw new Error(`Table configuration for ${tableName} not found`)
        }
        return tableConfig.name
    }
}
