import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import path from "path"
import dbconnection from './db/dbconnection.js';
import aircraft from './router/aircarft.router.js'
import flightlog from './router/flightlog.router.js'
import assembly from './router/assembly.router.js'
import ENGINEROUTER from './router/engine.router.js'
import othermaster from './router/othermaster.router.js'
import authenticated from './router/auth.router.js'
dotenv.config();
const port = process.env.PORT || 4000
const app = express();
const __dirname = path.resolve();

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Authentication  Router
app.use('/api/auth' , authenticated)


// router for aircarft 
app.use('/api/aircraft',aircraft)
app.use('/api/flightlog',flightlog)
app.use('/api/assembly',assembly)
app.use('/api/Engine',ENGINEROUTER)
app.use('/api/master/',othermaster)

if(process.env.NODE_ENV === "Production"){
    app.use(express.static(path.join(__dirname,"/frontend/build")))
}

app.listen(port,'0.0.0.0',()=>{
    console.log(`port running in ${port} `)
    dbconnection();
})
