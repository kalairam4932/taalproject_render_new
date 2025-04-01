import express from 'express';
import {postaircraftdata,getpostaircraftdata,Manufacturedata,getManufacturedata,postATA,getata,postprimarymodel,modeldatapost,postairframe,getprimary,getmodelname,getairframe,getmodeldata,updatemodelname,dldmodelname,getairframedata,updateairframe,dldairframe,delata,delprimary,ataupdateid,updateata,getprimaryid,updateprimary,postlincense,postcity,getcity,postplaces,getlicences,getplaces,dldlicences,getidlicences,updatelicences,dldManufacturedata,deleteplaces,deletecity,getmanufacture,updatemanufacture,updateplaces,getplacesdata,updatecitydata,getcitydata} from '../controller/aircraft_form_controller.js'
const router = express.Router();

router.post('/postaircraftdata',postaircraftdata)

router.get('/',getpostaircraftdata)

router.get('/getata',getata)
router.post('/postATA',postATA)

router.post('/postprimarymodel',postprimarymodel)
router.post('/modeldatapost',modeldatapost)
router.post('/postairframe',postairframe)
router.get('/getprimary',getprimary)
router.get('/getmodelname',getmodelname)
router.get('/getairframe',getairframe)


//action routers 


router.get('/getmodeldata/:id',getmodeldata)
router.put('/updatemodelname/:id',updatemodelname)
router.delete('/dldmodelname/:id',dldmodelname)

router.get('/getairframedata/:id',getairframedata)
router.put('/updateairframe/:id',updateairframe)
router.delete('/dldairframe/:id',dldairframe)




router.delete('/delata/:id',delata)

//primary
router.delete('/delprimary/:id',delprimary)

//getatabyid
router.get('/ataupdateid/:id',ataupdateid)

//updateatabyid
router.put('/updateata/:id',updateata)

//getprimary
router.get('/getprimaryid/:id',getprimaryid)
 
//updateprimary
router.put('/updateprimary/:id',updateprimary)

//  








// router in License Master
router.post('/license',postlincense)
router.get('/getlicences',getlicences)
router.delete('/dldlicences/:id',dldlicences)
router.get('/getidlicences/:id',getidlicences)
router.put('/updatelicences/:id',updatelicences)


// master manufacture
router.post('/Manufacturedata',Manufacturedata)
router.get('/getManufacturedata',getManufacturedata)
router.delete('/dldManufacturedata/:id',dldManufacturedata)



// master in places
router.get('/getplaces',getplaces)
router.post('/postplaces', postplaces); 
router.delete('/deleteplaces/:id', deleteplaces); 
router.get('/getplacesdata/:id',getplacesdata)
router.put('/updateplaces/:id',updateplaces)


//city master 
router.post('/postcity',postcity)
router.get('/getcity',getcity)
router.delete('/deletecity/:id',deletecity)
router.get('/getcitydata/:id',getcitydata)
router.put('/updatecitydata/:id',updatecitydata)

//manufacture master
router.get('/getmanufacture/:id',getmanufacture)
router.put('/updatemanufacture/:id',updatemanufacture)


export default  router