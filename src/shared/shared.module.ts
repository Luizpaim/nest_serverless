import { Module } from '@nestjs/common'
import { DynamoDbModule } from './infra/database/dynamoDb/dynamodb.module'

@Module({
    imports: [DynamoDbModule],
})
export class SharedModule {}
