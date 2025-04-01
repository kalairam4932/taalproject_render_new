import mongoose, { Schema } from "mongoose";

const primarymodel = new Schema({
    PrimaryModelName :{
        type: String
    }
},{timestamps:true})

const primarymodeldata = mongoose.model("primarymodel",primarymodel)
export default primarymodeldata