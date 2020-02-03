import { UserDto } from "./user-dto";
import { PatientDto } from "./patient-dto";

export class ClinicalDto {
    readonly user: UserDto;
    readonly patients: PatientDto[];
}