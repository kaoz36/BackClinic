import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ClinicalSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'User' },
    patients: [{ type: Schema.ObjectId, ref: 'Patient' }],
});
