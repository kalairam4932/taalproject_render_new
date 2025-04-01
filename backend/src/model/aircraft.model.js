import mongoose, { Schema } from "mongoose";

const aircraft = new Schema({

    regno:{
        type: String
    },
    category:{
        type:String
    },
    owner:{
        type:String
    },
    hourtype:{
        type:String
    },
    operator:{
        type:String
    },
    manufacture:{
        type:String
    },
    model:{
        type:String
    },
    serialno:{
        type:String
    },
    maintananceservice:{
        type:String
    },
    warrantystartdate:{
        type:String
    },warrantyenddate :{
        type:String
    },aircraftunderwarranty :{
        type:Boolean
    },
    singleSector :{
        type:Boolean
    },
    multipleSector :{
        type:Boolean

    },
    airborneTimeEntry :{
        type:Boolean
    },
    emptywt1:{
        type:String
        
    },
    grosspayload1:{
        type:String
    },
    takeoffwt1:{
        type:String
    },
    landwt1 :{
        type:String
    },
    allupwt1 :{
        type:String
    },
    taxiwt1 :{
        type:String
    },zerofuelwt1:{
        type:String
    },fuelcap1 :{
        type:String
    },
    emptywt2 :{
        type:String
    },grosspayload2 :{
        type:String
    },takeoffwt2 :{
        type:String
    },landwt2 :{
        type:String
    },allupwt2:{
        type:String
    },taxiwt2 :{
        type:String
    },zerofuelwt2 :{
        type:String
    },fuelcap2 :{
        type:String
    },asondate :{
        type:String
    },tablehours :{
        type:String
    },tablemanufacturingdate :{
        type:String
    },tablelandings :{
        type:String
    },aircraftnotinuse :{
        type:Boolean
    },aircraftreadonly :{
        type:Boolean
    },flightlogunderutc :{
        type:Boolean
    },notinusedate :{
        type:String
    },readonlydate: {
        type:String
    }
},{timestamps:true})

const aircraftdata = mongoose.model("aircraft",aircraft);
export default aircraftdata;