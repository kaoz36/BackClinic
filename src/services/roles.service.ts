import { Injectable } from '@nestjs/common';
import { RolI } from 'src/interfaces/rol.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RolesService {

    constructor(@InjectModel('Rol') private readonly rolModel: Model<RolI>) {}

    async showAllRoles(): Promise<RolI[]> {
        return await this.rolModel.find();
    }

    async findRolById(idRol: string): Promise<RolI> {
        return await this.rolModel.findOne( { _id: idRol } );
    }

    async createRol(rol: RolI): Promise<RolI> {
        const newRol = new this.rolModel(rol);
        return await newRol.save();
    }

    async modifyRol(idRol: string, rol: RolI): Promise<RolI> {
        return await this.rolModel.findByIdAndUpdate(idRol, rol);
    }

    async deleteRol(idRol: string): Promise<RolI> {
        return await this.rolModel.findByIdAndRemove(idRol);
    }

}
