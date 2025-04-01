import mongoose, { Schema } from "mongoose";

const airframe = new Schema({
    Installedon : {
        type : String
    },
    ATAChapter : {
        type : String
    },
    Manufacturer : {
        type : String
    },
    Model : {
        type : String
    },
    SerialNo : {
        type : String
    },

    Position : {
        type : String
    },
    InstallationRemark : {
        type : String
    },

    WorkOrderNo : {
        type : String
    },
    LicenseNo : {
        type : String
    },
    Place : {
        type : String
    },

    Note : {
        type : String
    },
    RevisionNo:{
        type : String
    },
    BookNo:{
        type : String
    },
    SourceDoc :{
        type : String
    },
    PageNo :{
        type : String
    }

})


const airframedata = mongoose.model("aireframe",airframe)
export default airframedata;