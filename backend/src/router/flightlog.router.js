import express from "express";
const router = express.Router();
import {PostFlightLogs,Getflightlogs,Deleteflightlogs,UpdateFlightLog,EditFlightLog} from "../controller/FlightLogs.controller.js"



router.post('/postflightlogs',PostFlightLogs)
router.get('/Getflightlogs',Getflightlogs)
router.delete('/Deleteflightlogs/:id',Deleteflightlogs)
router.get('/Editflightlogs/:id', EditFlightLog); // Get a single flight log by ID (for editing)
router.put('/Updateflightlogs/:id', UpdateFlightLog); 



export default router