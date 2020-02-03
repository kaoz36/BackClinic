import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { UserDto } from 'src/dto/user-dto';
import { UsersService } from 'src/services/users.service';
import { UserI } from 'src/interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    showAllUsers(): Promise<UserI[]> {
        return this.userService.showAllUsers();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    findUserById(@Param('id') idUser: string): Promise<UserI> {
        return this.userService.findUserById(idUser);
    }

    @Post()
    createUser(@Body() userDto: UserDto): Promise<UserI> {
        return this.userService.createUser(userDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id') 
    updateUser(@Param('id') idUser: string, @Body() userDto: UserDto): Promise<UserI> {
        return this.userService.updateUser(idUser, userDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteUser(@Param('id') idUser: string): Promise<UserI> {
        return this.userService.deleteUser(idUser);
    }

}
