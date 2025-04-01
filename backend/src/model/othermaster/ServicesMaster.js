import mongoose, { Schema } from "mongoose";
const serviceschema = new Schema ({

    servicestype:{
        type:String
    }

})

const servicedbs = mongoose.model("servicedb",serviceschema);
export default servicedbs;