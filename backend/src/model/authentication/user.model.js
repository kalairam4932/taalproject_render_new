import mongoose, { Schema } from "mongoose";

const userschema = new Schema({
    username:{
        type : String,
        required : true,
        unique : true,

    
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    fullname:{
        type : String,
        require : true
    },
    password:{
        type : String,
        required : true,
        minLength : 8
    }
},{timestamps:true})

const User = mongoose.model("user",userschema);

export default User;