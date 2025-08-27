import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
    HttpCode,
    HttpStatus,
} from '@nestjs/common'
import { RolesService } from './roles.service'
import { CreateRoleDto } from './dto/create-role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Post()
    create(@Body() createRoleDto: CreateRoleDto) {
        return this.rolesService.create(createRoleDto)
    }

    @Get('test')
    async test(): Promise<{ message: string }> {
        return { message: 'API funcionando perfeitamente!' }
    }

    @Get()
    findAll(
        @Query('limit') limit?: number,
        @Query('lastEvaluatedKey') lastEvaluatedKey?: string
    ) {
        const options = {
            limit: limit ? Number(limit) : undefined,
            lastEvaluatedKey: lastEvaluatedKey
                ? JSON.parse(lastEvaluatedKey)
                : undefined,
        }
        return this.rolesService.findAll(options)
    }

    @Get('active')
    findActiveRoles() {
        return this.rolesService.findActiveRoles()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.rolesService.findById(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
        return this.rolesService.update(id, updateRoleDto)
    }

    @Patch(':id/deactivate')
    deactivate(@Param('id') id: string) {
        return this.rolesService.deactivate(id)
    }

    @Patch(':id/activate')
    activate(@Param('id') id: string) {
        return this.rolesService.activate(id)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return this.rolesService.delete(id)
    }
}
