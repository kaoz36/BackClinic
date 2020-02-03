import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MeasureSchema = new Schema({
    gender: { type: String, enum: ['MALE', 'FEMALE'] },
    height: String,
    weight: String,
    bmi: String,
    bodyFat: String,
    complete: Boolean
});