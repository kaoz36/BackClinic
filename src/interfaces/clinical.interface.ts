import { UserI } from "./user.interface";
import { PatientI } from "./patient.interface";

export interface ClinicalI extends UserI {
    patients: PatientI;
}