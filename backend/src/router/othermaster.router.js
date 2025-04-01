import express from "express";
const router = express.Router();
import { POSTSERVICES,GETSERVICES } from "../controller/othermaster.controller.js";


router.post('/POSTSERVICES',POSTSERVICES)
router.get('/GETSERVICES',GETSERVICES)

export default router;

