import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    email: String,
    password: String,
    firsname: String,
    lastname: String,
    age: Number,
    gender: { type: String, enum: ['MALE', 'FEMALE']},
    rol: { type: Schema.ObjectId, ref: 'Rol' }
});