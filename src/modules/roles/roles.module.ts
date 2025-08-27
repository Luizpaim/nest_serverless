import { Module } from '@nestjs/common'
import { RolesService } from './services/roles.service'
import { RolesController } from './controllers/roles.controller'
import { RolesRepository } from './repository/roles.repository'
import { DynamoDbModule } from '../../shared/infra/database/dynamoDb/dynamodb.module'

@Module({
    imports: [DynamoDbModule],
    controllers: [RolesController],
    providers: [RolesService, RolesRepository],
    exports: [RolesService, RolesRepository],
})
export class RolesModule {}
