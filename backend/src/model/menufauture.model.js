import mongoose, { Schema } from "mongoose";

const menufacture = new Schema({

    manufactureName:{
        type: String
    },


},{timestamps:true})

const menufacturedata = mongoose.model("menufacture",menufacture);
export default menufacturedata;