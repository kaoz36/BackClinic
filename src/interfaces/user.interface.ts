import { RolI } from "./rol.interface";

export interface UserI {
    email: string;
    password: string;
    firsname: string;
    lastname: string;
    age: number;
    gender: { type: String, enum: ['MALE', 'FEMALE'] };
    roles: RolI;
}