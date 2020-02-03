import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { RolesService } from 'src/services/roles.service';
import { RolI } from 'src/interfaces/rol.interface';
import { RolDto } from 'src/dto/rol-dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('roles')
export class RolesController {

    constructor(private readonly rolService: RolesService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    showAllRoles(): Promise<RolI[]> {
        return this.rolService.showAllRoles();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    findRolById(@Param('id') idRol: string): Promise<RolI> {
        return this.rolService.findRolById(idRol);
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Post()
    createRol(@Body() rolDto: RolDto): Promise<RolI> {
        return this.rolService.createRol(rolDto);
    }
}
