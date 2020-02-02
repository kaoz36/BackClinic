import { UserDto } from "./user-dto";
import { ClinicalDto } from "./clinical-dto";
import { DiseaseHistoryDto } from "./disease-history-dto";
import { MeasureDto } from "./measure-dto";

export class PatientDto extends UserDto {
    readonly clinical: ClinicalDto;
    readonly clinicRegistration: string;
    readonly diseases: DiseaseHistoryDto[];
    readonly measures: MeasureDto;
}