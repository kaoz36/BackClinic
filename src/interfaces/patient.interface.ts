import { MeasureI } from "./measure.interface";
import { DiseaseHistoryI } from "./disease-history.interface";
import { ClinicalI } from "./clinical.interface";
import { UserI } from "./user.interface";

export interface PatientI extends UserI {
    clinical: ClinicalI;
    clinicRegistration: string;
    diseases: DiseaseHistoryI[];
    measures: MeasureI;
}