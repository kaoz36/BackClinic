import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RolSchema = new Schema({
    name: String,
    admin: Boolean,
    patient: Boolean,
    clinical: Boolean
});
