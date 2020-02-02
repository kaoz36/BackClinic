import { RolDto } from "./rol-dto";

export class UserDto {
    readonly email: string;
    readonly password: string;
    readonly firsname: string;
    readonly lastname: string;
    readonly age: number;
    readonly gender: { type: String, enum: ['MALE', 'FEMALE']};
    readonly roles: RolDto;
}