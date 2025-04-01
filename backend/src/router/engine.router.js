import express from 'express'
import {postRHENGINEDATA,getRHENGINEDATA,dldRHENGINEDATA,DisplayRHENGINEDATA,postLHENGINEDATA,getLHENGINEDATA,dldLHENGINEDATA,DisplayLHENGINEDATA} from '../controller/engine.controller.js'
const router = express.Router();


// RH ENGINE ROUTER
router.post('/postRHENGINEDATA',postRHENGINEDATA)
router.get('/getRHENGINEDATA',getRHENGINEDATA)
router.delete('/dldRHENGINEDATA/:id',dldRHENGINEDATA)
router.get('/DisplayRHENGINEDATA/:id',DisplayRHENGINEDATA)

//LH ENGINE 
router.post('/postLHENGINEDATA',postLHENGINEDATA)
router.get('/getLHENGINEDATA',getLHENGINEDATA)
router.delete('/dldLHENGINEDATA/:id',dldLHENGINEDATA)
router.get('/DisplayLHENGINEDATA/:id',DisplayLHENGINEDATA)





export default router