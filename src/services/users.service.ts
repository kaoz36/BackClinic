import { Injectable } from '@nestjs/common';
import { UserI } from 'src/interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export type User = any;

@Injectable()
export class UsersService {

    private readonly users: User[];

    constructor(@InjectModel('User') private readonly userModel: Model<UserI>) {
        this.users = [
            {
              userId: 1,
              username: 'john',
              password: 'changeme',
            },
            {
              userId: 2,
              username: 'chris',
              password: 'secret',
            },
            {
              userId: 3,
              username: 'maria',
              password: 'guess',
            },
        ];
    }

    async showAllUsers(): Promise<UserI[]> {
        return await this.userModel.find();
    }

    async findUserById(idUser: string): Promise<UserI> {
        return await this.userModel.findOne( { _id: idUser } );
    }

    async createUser(user: UserI): Promise<UserI> {
        const newUser = new this.userModel(user);
        return await newUser.save();
    }

    async updateUser(idUser: string, user: UserI): Promise<UserI> {
        return await this.userModel.findByIdAndUpdate(idUser, user);
    }

    async deleteUser(idUser: string ): Promise<UserI> {
        return await this.userModel.findByIdAndRemove(idUser);
    }

    async findOne(username: string): Promise<User | undefined> {
        // return this.userModel.findOne({ name: username });
        return this.users.find(user => user.username === username);
      }

}
