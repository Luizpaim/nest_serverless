import { Injectable } from '@nestjs/common'
import { DynamoDbService } from '../../../shared/infra/database/dynamoDb/dynamodb.service'
import { Role } from '../schemas/role.schema'
import { CreateRoleDto } from '../dto/create-role.dto'
import { UpdateRoleDto } from '../dto/update-role.dto'

@Injectable()
export class RolesRepository {
    private readonly tableName = 'roles'

    constructor(private readonly dynamoService: DynamoDbService) {}

    async create(createRoleDto: CreateRoleDto): Promise<Role> {
        const roleData = {
            name: createRoleDto.name,
            description: createRoleDto.description,
            permissions: createRoleDto.permissions || [],
            isActive:
                createRoleDto.isActive !== undefined
                    ? createRoleDto.isActive
                    : true,
        }

        const result = await this.dynamoService.create<Role>(
            this.tableName,
            roleData as Role
        )
        return result
    }

    async findAll(options?: {
        limit?: number
        lastEvaluatedKey?: Record<string, unknown>
    }): Promise<{ items: Role[]; lastEvaluatedKey?: Record<string, unknown> }> {
        return this.dynamoService.findAll<Role>(this.tableName, options)
    }

    async findById(id: string): Promise<Role | null> {
        return this.dynamoService.findById<Role>(this.tableName, id)
    }

    async findByName(name: string): Promise<{ items: Role[] }> {
        const result = await this.dynamoService.findAll<Role>(
            this.tableName,
            {}
        )

        const filteredItems = result.items.filter(role => role.name === name)

        return {
            items: filteredItems,
        }
    }

    async findActiveRoles(): Promise<{ items: Role[] }> {
        return this.dynamoService
            .findAll<Role>(this.tableName, {})
            .then(result => ({
                items: result.items.filter(role => role.isActive),
            }))
    }

    async update(id: string, updateRoleDto: UpdateRoleDto): Promise<Role> {
        const result = await this.dynamoService.update<Role>(
            this.tableName,
            id,
            updateRoleDto
        )
        return result
    }

    async delete(id: string): Promise<boolean> {
        return this.dynamoService.delete(this.tableName, id)
    }

    async deactivate(id: string): Promise<Role> {
        return this.update(id, { isActive: false })
    }

    async activate(id: string): Promise<Role> {
        return this.update(id, { isActive: true })
    }
}
