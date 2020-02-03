import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PatientSchema = new Schema({
    clinical: { type: Schema.ObjectId, ref: 'Clinical' },
    clinicRegistration: String,
    diseases: [{ type: Schema.ObjectId, ref: 'DiseaseHistory' }],
    measures: { type: Schema.ObjectId, ref: 'Measure' },
});
