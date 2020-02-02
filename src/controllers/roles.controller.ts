import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RolesService } from 'src/services/roles.service';
import { RolI } from 'src/interfaces/rol.interface';
import { RolDto } from 'src/dto/rol-dto';


@Controller('roles')
export class RolesController {

    constructor(private readonly rolService: RolesService) {}

    @Get()
    showAllRoles(): Promise<RolI[]> {
        return this.rolService.showAllRoles();
    }

    @Get(':id')
    findRolById(@Param('id') idRol: string): Promise<RolI> {
        return this.rolService.findRolById(idRol);
    }
    
    @Post()
    createRol(@Body() rolDto: RolDto): Promise<RolI> {
        return this.rolService.createRol(rolDto);
    }
}
