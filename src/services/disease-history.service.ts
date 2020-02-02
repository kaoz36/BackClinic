import { Injectable } from '@nestjs/common';
import { DiseaseHistoryI } from 'src/interfaces/disease-history.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DiseaseHistoryService {

    constructor(@InjectModel('DiseaseHistory') private readonly diseaseHistoryModel: Model<DiseaseHistoryI>) {}

    async showAllDiseaseHistory(): Promise<DiseaseHistoryI[]> {
        return await this.diseaseHistoryModel.find();
    }

    async findDiseaseHistoryById(idDiseaseHistory: string): Promise<DiseaseHistoryI> {
        return await this.diseaseHistoryModel.findOne( { _id: idDiseaseHistory } );
    }

    async createDiseaseHistory(diseaseHistory: DiseaseHistoryI): Promise<DiseaseHistoryI> {
        const newDiseaseHistory = new this.diseaseHistoryModel(diseaseHistory);
        return await newDiseaseHistory.save();
    }

    async modifyDiseaseHistory(idDiseaseHistory: string, diseaseHistory: DiseaseHistoryI): Promise<DiseaseHistoryI> {
        return await this.diseaseHistoryModel.findByIdAndUpdate(idDiseaseHistory, diseaseHistory);
    }

    async deleteDiseaseHistory(idDiseaseHistory: string): Promise<DiseaseHistoryI> {
        return await this.diseaseHistoryModel.findByIdAndRemove(idDiseaseHistory);
    }

}
