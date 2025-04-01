import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();


const databaseconnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGODBURL)
        console.log("database connected ")
    } catch (error) {
        
        console.log(`database connection error ${error}`)

        
    }

}

export default databaseconnection;