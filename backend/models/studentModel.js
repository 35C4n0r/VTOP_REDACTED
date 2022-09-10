import mongoose from "mongoose";

const {Schema, model} = mongoose;

const studentSchema = new Schema({
    RegistrationID: String,
    Name: String,
    Username: String,
    Password: String,
});

export const studentModel = model('student', studentSchema)

