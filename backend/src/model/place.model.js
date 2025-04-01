import mongoose, { Schema } from "mongoose";
const placesdb = new Schema ({

    place:{
        type:String
    },
    city:{
        type: String
    }

})

const placedata = mongoose.model("place",placesdb);
export default placedata;