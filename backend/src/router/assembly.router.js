import express from 'express';
import { CreateAssembly, getAssembly, getAssemblyByID, updateAssembly, deleteAssembly } from '../controller/assemblyController.js'
const router = express.Router();

router.post('/createAssembly', CreateAssembly);
router.get('/getAssembly', getAssembly);
router.get('/getAssembly/:id', getAssemblyByID);
router.put('/updateAssembly/:id', updateAssembly);
router.delete('/deleteAssembly/:id', deleteAssembly);

export default router;


