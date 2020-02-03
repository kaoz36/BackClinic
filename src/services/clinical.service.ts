import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClinicalI } from 'src/interfaces/clinical.interface';

@Injectable()
export class ClinicalService {

    constructor(@InjectModel('Clinical') private readonly clinicalModel: Model<ClinicalI>) {}

    async showAllClinicals(): Promise<ClinicalI[]> {
        return await this.clinicalModel.find();
    }

    async findClinicalById(idClinical: string): Promise<ClinicalI> {
        return await this.clinicalModel.findOne( { _id: idClinical } );
    }

    async createClinical(clinical: ClinicalI): Promise<ClinicalI> {
        const newClinical = new this.clinicalModel(clinical);
        return await newClinical.save();
    }

    async updateClinical(idClinical: string, clinical: ClinicalI): Promise<ClinicalI> {
        return await this.clinicalModel.findByIdAndUpdate(idClinical, clinical);
    }

    async deleteClinical(idClinical: string ): Promise<ClinicalI> {
        return await this.clinicalModel.findByIdAndRemove(idClinical);
    }
    
}
