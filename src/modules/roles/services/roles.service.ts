import {
    Injectable,
    NotFoundException,
    ConflictException,
} from '@nestjs/common'
import { RolesRepository } from '../repository/roles.repository'
import { CreateRoleDto } from '../dto/create-role.dto'
import { UpdateRoleDto } from '../dto/update-role.dto'
import { Role } from '../schemas/role.schema'

@Injectable()
export class RolesService {
    constructor(private readonly rolesRepository: RolesRepository) {}

    async create(createRoleDto: CreateRoleDto): Promise<Role> {
        const existingRoles = await this.rolesRepository.findByName(
            createRoleDto.name
        )
        if (existingRoles.items.length > 0) {
            throw new ConflictException(
                `Role with name '${createRoleDto.name}' already exists`
            )
        }

        return this.rolesRepository.create(createRoleDto)
    }

    async findAll(options?: {
        limit?: number
        lastEvaluatedKey?: Record<string, unknown>
    }): Promise<{ items: Role[]; lastEvaluatedKey?: Record<string, unknown> }> {
        return this.rolesRepository.findAll(options)
    }

    async findById(id: string): Promise<Role> {
        const role = await this.rolesRepository.findById(id)
        if (!role) {
            throw new NotFoundException(`Role with id ${id} not found`)
        }
        return role
    }

    async findActiveRoles(): Promise<Role[]> {
        const result = await this.rolesRepository.findActiveRoles()
        return result.items
    }

    async update(id: string, updateRoleDto: UpdateRoleDto): Promise<Role> {
        await this.findById(id)

        if (updateRoleDto.name) {
            const existingRoles = await this.rolesRepository.findByName(
                updateRoleDto.name
            )
            const conflictingRole = existingRoles.items.find(
                role => role.id !== id
            )
            if (conflictingRole) {
                throw new ConflictException(
                    `Role with name '${updateRoleDto.name}' already exists`
                )
            }
        }

        return this.rolesRepository.update(id, updateRoleDto)
    }

    async delete(id: string): Promise<void> {
        const deleted = await this.rolesRepository.delete(id)
        if (!deleted) {
            throw new NotFoundException(`Role with id ${id} not found`)
        }
    }

    async deactivate(id: string): Promise<Role> {
        return this.rolesRepository.deactivate(id)
    }

    async activate(id: string): Promise<Role> {
        return this.rolesRepository.activate(id)
    }
}
