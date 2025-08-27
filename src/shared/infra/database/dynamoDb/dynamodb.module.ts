import { Module } from '@nestjs/common'
import { DynamoDbService } from './dynamodb.service'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'

@Module({
    providers: [
        {
            provide: 'DYNAMO_CLIENT',
            useFactory: () => {
                const isTest =
                    process.env.NODE_ENV === 'test' ||
                    process.env.JEST_WORKER_ID !== undefined ||
                    process.env.CI === 'true'

                if (isTest) {
                    return {
                        send: jest.fn().mockResolvedValue({
                            TableNames: ['test-table-1', 'test-table-2'],
                        }),
                    }
                }

                return new DynamoDBClient({
                    region:
                        process.env.APP_AWS_REGION ||
                        process.env.AWS_REGION ||
                        'sa-east-1',
                })
            },
        },
        DynamoDbService,
    ],
    exports: [DynamoDbService, 'DYNAMO_CLIENT'],
})
export class DynamoDbModule {}
