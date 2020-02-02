import { UserDto } from "./user-dto";
import { PatientDto } from "./patient-dto";

export class ClinicalDto extends UserDto {
    readonly patients: PatientDto[];
}