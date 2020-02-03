import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PatientI } from 'src/interfaces/patient.interface';

@Injectable()
export class PatientsService {

    constructor(@InjectModel('Patient') private readonly patientModel: Model<PatientI>) {}

    async showAllPatients(): Promise<PatientI[]> {
        return await this.patientModel.find();
    }

    async findPatientById(idPatient: string): Promise<PatientI> {
        return await this.patientModel.findOne( { _id: idPatient } );
    }

    async createPatient(patient: PatientI): Promise<PatientI> {
        const newPatient = new this.patientModel(patient);
        return await newPatient.save();
    }

    async updatePatient(idPatient: string, patient: PatientI): Promise<PatientI> {
        return await this.patientModel.findByIdAndUpdate(idPatient, patient);
    }

    async deletePatient(idPatient: string ): Promise<PatientI> {
        return await this.patientModel.findByIdAndRemove(idPatient);
    }

}
