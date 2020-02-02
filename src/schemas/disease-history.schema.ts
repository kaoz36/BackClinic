import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DiseaseHistorySchema = new Schema({
    diseaseName: String,
    diseaseStatus: String,
    duration: Number,
    complete: Boolean 
});
