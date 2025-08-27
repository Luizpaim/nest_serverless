import { Module } from '@nestjs/common'
import { SharedModule } from './shared/shared.module'
import { RolesModule } from './modules/roles/roles.module'

@Module({
    imports: [SharedModule, RolesModule],
})
export class AppModule {}
