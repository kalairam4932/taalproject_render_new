import mongoose, { Schema } from "mongoose";

const ata = new Schema({

    ataName:{
        type: String
    },
    atacode:{
        type: String
    },


},{timestamps:true})

const atadata = mongoose.model("ata",ata);
export default atadata;