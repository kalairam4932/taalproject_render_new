import mongoose, { Schema } from "mongoose";
const CityDB = new Schema ({

    cityName:{
        type:String
    }

})

const CityDBs = mongoose.model("CityDB",CityDB);
export default CityDBs;