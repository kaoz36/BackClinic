import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserDto } from 'src/dto/user-dto';
import { UsersService } from 'src/services/users.service';
import { UserI } from 'src/interfaces/user.interface';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @Get()
    showAllUsers(): Promise<UserI[]> {
        return this.userService.showAllUsers();
    }

    @Get(':id')
    findUserById(@Param('id') idUser: string): Promise<UserI> {
        return this.userService.findUserById(idUser);
    }

    @Post()
    createUser(@Body() userDto: UserDto): Promise<UserI> {
        return this.userService.createUser(userDto);
    }

    @Put(':id') 
    updateUser(@Param('id') idUser: string, @Body() userDto: UserDto): Promise<UserI> {
        return this.userService.updateUser(idUser, userDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') idUser: string): Promise<UserI> {
        return this.userService.deleteUser(idUser);
    }

}
