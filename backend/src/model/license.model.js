import mongoose from "mongoose";
import { Schema } from "mongoose";

const licensedb = new Schema({
    PilotName :{
        type:String
    },
    LicenseNo:{
        type:Number
    }
},{timestamps:true})

const licensedbs = mongoose.model("license",licensedb)

export default licensedbs