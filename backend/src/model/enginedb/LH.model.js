import mongoose, { model, Schema } from "mongoose";

const LHENGINEschema = new Schema({
    Installedon:{
        type:String
    },
    ATAChapter:{
        type:String
    },
    manufacturer:{
        type:String
    },
    Model:{
        type:String
    },
    SerialNo:{
        type:String
    },
    Position:{
        type:String
    },
    InstallationRemark:{
        type:String
    },
    WorkOrderNo:{
        type:String
    },
    Place:{
        type:String
    },
    LicenseNo:{
        type:String
    },
    Note:{
        type:String
    },
    RevisionNo:{
        type:String
    },
    BookNo:{
        type:String
    },
    firsttable:{
        Hours:String,
        Date:String,
        Landing:String
    },
    secondtable:{
        Hours:String,
        Date:String,
        Landing:String
    },
    SourceDoc:{
        type:String
    },
    PageNo:{
        type:String
    }




},{ timestamps: true })

const LHENGINEdata = mongoose.model("lhenginedb",LHENGINEschema)
export default LHENGINEdata