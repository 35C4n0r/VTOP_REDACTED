import mongoose from "mongoose";

const {Schema, model} = mongoose;

const facultySchema = new Schema({
    EmployeeID: String,
    Name: String,
    Username: String,
    Password: String,
});

export const facultyModel = model('faculty', facultySchema);