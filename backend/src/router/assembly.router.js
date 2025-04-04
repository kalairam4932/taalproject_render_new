import express from 'express';
import { CreateAssembly, getAssembly, getAssemblyByID, updateAssembly, deleteAssembly ,Postads,getads,deleteAsd} from '../controller/assemblyController.js'
const router = express.Router();
// asi
router.post('/createAssembly', CreateAssembly);
router.get('/getAssembly', getAssembly);
router.get('/getAssembly/:id', getAssemblyByID);
router.put('/updateAssembly/:id', updateAssembly);
router.delete('/deleteAssembly/:id', deleteAssembly);

//asd 
router.post('/Postads', Postads);
router.get('/getads', getads);
router.delete('/deleteAsd/:id', deleteAsd);



export default router;


