import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MeasureI } from 'src/interfaces/measure.interface';

@Injectable()
export class MeasuresService {

    constructor(@InjectModel('Measure') private readonly measureModel: Model<MeasureI>) {}

    async showAllMeasures(): Promise<MeasureI[]> {
        return await this.measureModel.find();
    }

    async findMeasureById(idMeasure: string): Promise<MeasureI> {
        return await this.measureModel.findOne( { _id: idMeasure } );
    }

    async createMeasure(measure: MeasureI): Promise<MeasureI> {
        const newMeasure = new this.measureModel(measure);
        return await newMeasure.save();
    }

    async updateMeasure(idMeasure: string, measure: MeasureI): Promise<MeasureI> {
        return await this.measureModel.findByIdAndUpdate(idMeasure, measure);
    }

    async deleteMeasure(idMeasure: string ): Promise<MeasureI> {
        return await this.measureModel.findByIdAndRemove(idMeasure);
    }
    
}
