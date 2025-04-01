import mongoose, { Schema } from "mongoose";

const modeldb = new Schema({
    ModelName :{
        type: String
    },
    Manufacturer :{
        type: String
    },
    primary_modal :{
        type: String
    }
},{timestamps:true})

const modeldata = mongoose.model("modeldb",modeldb)
export default modeldata