import aircraftdata from "../model/aircraft.model.js"
import ManufactureModel from '../model/menufauture.model.js';
import Atadatamodel from '../model/ata.model.js'
import primarymodeldatas from "../model/primary.modal.js";
import modeldatas from "../model/modelname.model.js";
import airframedp from "../model/AirFrame.model.js";
import licensedbs from "../model/license.model.js";
import CityDBs from "../model/city.model.js";
import placedata from "../model/place.model.js";
export const postaircraftdata = async(req,res)=>{
    try {
        const {
            regno,
            category,
            owner,
            hourtype,
            operator,
            manufacture,
            model,
            serialno,
            maintananceservice,
            warrantystartdate,
            warrantyenddate,
                    aircraftunderwarranty,
                    singleSector,
                    multipleSector,
                    airborneTimeEntry,
                    emptywt1,
                    grosspayload1,
                    takeoffwt1,
                    landwt1,
                    allupwt1,
                    taxiwt1,
                    zerofuelwt1,
                    fuelcap1,
                    emptywt2,
                    grosspayload2,
                    takeoffwt2,
                    landwt2,
                    allupwt2,
                    taxiwt2,
                    zerofuelwt2,
                    fuelcap2,
                    asondat,
                    tablehours,
                    tablemanufacturingdate,
                    tablelandings,
                    aircraftnotinuse,
                    aircraftreadonly,
                    flightlogunderutc,
                    notinusedate,
                    readonlydate,

        } = req.body
        
        const newpostaircraftdata = new aircraftdata({
        regno,
        category,
        owner,
        hourtype,
        operator,
        manufacture,
        model,
        serialno,
        maintananceservice,
        warrantystartdate,
        warrantyenddate,
        aircraftunderwarranty,
        singleSector,
                    multipleSector,
                    airborneTimeEntry,
                    emptywt1,
                    grosspayload1,
                    takeoffwt1,
                    landwt1,
                    allupwt1,
                    taxiwt1,
                    zerofuelwt1,
                    fuelcap1,
                    emptywt2,
                    grosspayload2,
                    takeoffwt2,
                    landwt2,
                    allupwt2,
                    taxiwt2,
                    zerofuelwt2,
                    fuelcap2,
                    asondat,
                    tablehours,
                    tablemanufacturingdate,
                    tablelandings,
                    aircraftnotinuse,
                    aircraftreadonly,
                    flightlogunderutc,
                    notinusedate,
                    readonlydate,


        })
        if(newpostaircraftdata){

            await newpostaircraftdata.save();
            return res.status(200).json(newpostaircraftdata)

        }
  

        
    } catch (error) {
        console.log(`error in aircraftform post ${error}`)
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
    }

}


export const getpostaircraftdata = async(req,res)=>{
    try {
        const alldata = await aircraftdata.find();

        if(alldata.length===0){
            return res.status(200).json([]);
        }

        res.status(200).json(alldata)
        
    } catch (error) {
        console.log(`error in get function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
    }
}


export const dldaircraftdata  = async(req,res)=>{
    try {
        const { id } = req.params;

        // Check if model exists
        const model = await aircraftdata.findById(id);
        if (!model) {
            return res.status(404).json({ message: "Model not found" });
        }

        // Delete model
        await aircraftdata.findByIdAndDelete(id);
        res.status(200).json({ message: "Model deleted successfully" });

    } catch (error) {
        console.error("Error deleting model:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getaircraftdata = async(req,res)=>{
    try {

        const{id} = req.params;
        const modeldata = await aircraftdata.findById({_id:id})
        if(!modeldata){
            return res.status(404).json({error:"aircraftdata is unavailable "})

        }

        return res.status(200).json(modeldata)


        
    } catch (error) {
        console.log(`Error in aircraftdata function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
        
    }

} 

export const Manufacturedata = async (req, res) => {
    try {
        const { manufactureName } = req.body; // Renamed for clarity

        // Validate required field
        if (!manufactureName) {
            return res.status(400).json({ error: "Manufacture name is required" });
        }

        // Create a new document
        const newManufactureData = new ManufactureModel({
            manufactureName
        });

        // Save to database
        await newManufactureData.save();

        return res.status(201).json({
            message: "Manufacture data saved successfully",
            data: newManufactureData
        });

    } catch (error) {
        console.error(`Error in Manufacturedata post function: ${error}`);
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
};


export const getManufacturedata  = async(req,res)=>{
    try {
        const alldata = await ManufactureModel.find();

        if(alldata.length===0){
            return res.status(200).json([]);
        }

        res.status(200).json(alldata)
    } catch (error) {
        console.log(`error in getManufacturedata function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
        
    }

}

export const postATA = async(req,res)=>{

   try {
        const{ataName,ataCode}= req.body;

        const newatadata = new Atadatamodel({
            ataName,
            atacode:ataCode
        })
        
        if(newatadata){
            await newatadata.save();
            return res.status(200).json(newatadata)
            

        }
    
   } catch (error) {
    console.log(`error in postata function ${error}`);
    return res.status(500).json({
        error: "Internal Server ERROR"
    })
    
   }
}

export const getata = async(req,res)=>{
    try {
        const alldatas = await Atadatamodel.find();

        if(alldatas.length===0){
            return res.status(200).json([]);
        }

        res.status(200).json(alldatas)
    } catch (error) {
        console.log(`error in getManufacturedata function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
        
    }
}

export const getprimary = async(req,res)=>{
    try {
        const alldatas = await primarymodeldatas.find();

        if(alldatas.length===0){
            return res.status(200).json([]);
        }

        res.status(200).json(alldatas)
    } catch (error) {
        console.log(`error in getprimary function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
        
    }
}

export const getmodelname = async(req,res)=>{
    try {
        const alldatas = await modeldatas.find();

        if(alldatas.length===0){
            return res.status(200).json([]);
        }

        res.status(200).json(alldatas)
    } catch (error) {
        console.log(`error in getmodelname function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
        
    }
}


export const getairframe = async(req,res)=>{
    try {
        const alldatas = await airframedp.find();

        if(alldatas.length===0){
            return res.status(200).json([]);
        }

        res.status(200).json(alldatas)
    } catch (error) {
        console.log(`error in getairframe function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
        
    }
}


export const postprimarymodel = async(req,res)=>{
    try {
        const {primaryModelName} = req.body;
        
        const newpostprimarymodel = new primarymodeldatas({
            PrimaryModelName : primaryModelName


        })

        if(newpostprimarymodel){
            await newpostprimarymodel.save();
            return res.status(200).json(newpostprimarymodel);
        }
        
    } catch (error) {

        console.log(`Error in postprimarymodel function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
        
    }

}


export const modeldatapost = async (req,res)=>{
    try {
        const{modelName,manufacturer,primaryModel}= req.body;
        const newmodeldata = new modeldatas({
            ModelName :modelName,
            Manufacturer : manufacturer,
            primary_modal:primaryModel

        })
        if(newmodeldata){
            await newmodeldata.save();
            return res.status(200).json(newmodeldata)
        }
    } catch (error) {
        console.log(`Error in postmodelname function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
    }
}


export const postairframe = async(req,res)=>{
    try {
        const {Installedon,ATAChapter,Manufacturer,Model,SerialNo,Position,InstallationRemark,WorkOrderNo,LicenseNo,Place,Note,RevisionNo,BookNo,SourceDoc,PageNo} = req.body

        const newairframedata = new airframedp({
            Installedon,ATAChapter,Manufacturer,Model,SerialNo,Position,InstallationRemark,WorkOrderNo,LicenseNo,Place,Note,RevisionNo,BookNo,SourceDoc,PageNo
        })
        console.log(newairframedata)
        if(newairframedata){
           await newairframedata.save();
           return res.status(200).json(newairframedata)
        }
    } catch (error) {
        console.log(`Error in newairframedata function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
    }

}






// action functions 


export const getmodeldata = async(req,res)=>{
    try {

        const{id} = req.params;
        const modeldata = await modeldatas.findById({_id:id})
        if(!modeldata){
            return res.status(404).json({error:"modeldataname is unavailable "})

        }

        return res.status(200).json(modeldata)


        
    } catch (error) {
        console.log(`Error in getmodeldata function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
        
    }

} 

export const updatemodelname = async(req,res)=>{
    try {
        const { id } = req.params;
        const updateData = req.body;
    
        
        const allowedFields = ["ModelName", "Manufacturer", "primary_modal"];
    
      
        const filteredData = Object.keys(updateData)
          .filter((key) => allowedFields.includes(key) && updateData[key] !== undefined && updateData[key] !== null)
          .reduce((obj, key) => {
            obj[key] = updateData[key];
            return obj;
          }, {});
    
     
        if (Object.keys(filteredData).length === 0) {
          return res.status(400).json({ message: "No valid fields to update" });
        }
    
  
        const updatedModel = await modeldatas.findByIdAndUpdate(id, filteredData, { new: true });
    
        if (!updatedModel) {
          return res.status(404).json({ message: "Model not found" });
        }
    
        res.json({ message: "Model updated successfully!", updatedModel });
      } catch (error) {
        console.error("Error updating model:", error);
        res.status(500).json({ message: "Server error" });
      }

}

export const dldmodelname  = async(req,res)=>{
    try {
        const { id } = req.params;

        // Check if model exists
        const model = await modeldatas.findById(id);
        if (!model) {
            return res.status(404).json({ message: "Model not found" });
        }

        // Delete model
        await modeldatas.findByIdAndDelete(id);
        res.status(200).json({ message: "Model deleted successfully" });

    } catch (error) {
        console.error("Error deleting model:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const dldairframe = async(req,res)=>{
    try {
        const { id } = req.params;

        // Check if model exists
        const model = await airframedp.findById(id);
        if (!model) {
            return res.status(404).json({ message: "Model not found" });
        }

        // Delete model
        await airframedp.findByIdAndDelete(id);
        res.status(200).json({ message: "Model deleted successfully" });
        
    } catch (error) {
        console.error("Error deleting model:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


export const getairframedata =async(req,res)=>{
    try {
        const { id } = req.params;
        const data = await airframedp.findById(id); 
        if (!data) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}



export const updateairframe = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const allowedFields = ["Installedon", "ATAChapter", "Manufacturer","Model","SerialNo"];
        const filteredData = Object.keys(updatedData)
          .filter((key) => allowedFields.includes(key) && updatedData[key] !== undefined && updatedData[key] !== null)
          .reduce((obj, key) => {
            obj[key] = updatedData[key];
            return obj;
          }, {});

          if (Object.keys(filteredData).length === 0) {
            return res.status(400).json({ message: "No valid fields to update" });
          }

          const updatedairframe = await airframedp.findByIdAndUpdate(id, filteredData, { new: true });
    
          if (!updatedairframe) {
            return res.status(404).json({ message: "Model not found" });
          }
      
          res.json({ message: "Model updated successfully!", updatedairframe });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};



// syed 08-03
//dleata
export const delata  = async(req,res)=>{
    try {
        const { id } = req.params;

        // Check if model exists
        const model = await Atadatamodel.findById(id);
        if (!model) {
            return res.status(404).json({ message: "Model not found" });
        }

        // Delete model
        await Atadatamodel.findByIdAndDelete(id);
        res.status(200).json({ message: "Model deleted successfully" });

    } catch (error) {
        console.error("Error deleting model:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//dlepri
export const delprimary  = async(req,res)=>{
    try {
        const { id } = req.params;

        // Check if model exists
        const model = await primarymodeldatas.findById(id);
        if (!model) {
            return res.status(404).json({ message: "Model not found" });
        }

        // Delete model
        await primarymodeldatas.findByIdAndDelete(id);
        res.status(200).json({ message: "Model deleted successfully" });

    } catch (error) {
        console.error("Error deleting model:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

//atagetid
export const ataupdateid= async (req,res) => {
    try{
    const {id}=req.params;
    const ataid= id;
    const ataupdatedata = await Atadatamodel.findById({_id:ataid});
    if(!ataupdatedata){
        return res.status(404).json({ message: "Model not found" });
    }
    return  res.status(200).json(ataupdatedata);
    }catch (error){
      console.error("Error ATA Update Model",error);
     return res.status(500).json({message:"Internal server error"});
    }
}

//updateata
export const updateata = async(req,res)=>{
    try {
        const { id } = req.params;
        const updateata = req.body;
    
        
        const allowedFields = ["ataName", "ataCode"];
    
      
        const filteredData = Object.keys(updateata)
          .filter((key) => allowedFields.includes(key) && updateata[key] !== undefined && updateata[key] !== null)
          .reduce((obj, key) => {
            obj[key] = updateata[key];
            return obj;
          }, {});
    
     
        if (Object.keys(filteredData).length === 0) {
          return res.status(400).json({ message: "No valid fields to update" });
        }
    
  
        const updatedModel = await Atadatamodel.findByIdAndUpdate(id, filteredData, { new: true });
    
        if (!updatedModel) {
          return res.status(404).json({ message: "Model not found" });
        }
    
        res.json({ message: "Model updated successfully!", updatedModel });
      } catch (error) {
        console.error("Error updating model:", error);
        res.status(500).json({ message: "Server error" });
      }

}

//getprimaryid
export const getprimaryid= async (req,res) => {
    try{
    const {id}=req.params;
    const primaryid= id;
    const  getprimaryid= await primarymodeldatas.findById({_id:primaryid});
    if(!getprimaryid){
        
        return res.status(404).json({ message: "Model not found" });
    }
    return  res.status(200).json(getprimaryid);
    }catch (error){
      console.error("Error Primary Update Model",error);
     return res.status(500).json({message:"Internal server error"});
    }
}

//updateprimary
export const updateprimary = async(req,res)=>{
    try {
        const { id } = req.params;
        const updateprimary = req.body;
    
        
        const allowedFields = ["PrimaryModelName"];
    
      
        const filteredData = Object.keys(updateprimary)
          .filter((key) => allowedFields.includes(key) && updateprimary[key] !== undefined && updateprimary[key] !== null)
          .reduce((obj, key) => {
            obj[key] = updateprimary[key];
            return obj;
          }, {});
    
     
        if (Object.keys(filteredData).length === 0) {
          return res.status(400).json({ message: "No valid fields to update" });
        }
    
  
        const updateprimarymodel = await primarymodeldatas.findByIdAndUpdate(id, filteredData, { new: true });
    
        if (!updateprimarymodel) {
          return res.status(404).json({ message: "Model not found" });
        }
    
        res.json({ message: "Model updated successfully!", updateprimarymodel });
      } catch (error) {
        console.error("Error updating model:", error);
        res.status(500).json({ message: "Server error" });
      }

}
// syed 08-03




export const postcity = async(req,res)=>{
    try {
         const{cityName}= req.body;
         const newcitydata = new CityDBs({
               cityName
         })
         if(newcitydata){
             await newcitydata.save();
             res.status(200).json(newcitydata) 
         }
    } catch (error) {
     console.log(`error in postata function ${error}`);
     return res.status(500).json({
         error: "Internal Server ERROR"
     })
     
    }
 }
//getcity
 export const getcity = async(req,res)=>{
    try {
        const allcity = await CityDBs.find();
        if(allcity.length===0){
            return res.status(200).json([]);
        }
        res.status(200).json(allcity)
    } catch (error) {
        console.log(`error in get function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
    }
}





export const postplaces = async(req,res)=>{
    try {
         const{place,city}= req.body;
         const newplacesdata = new placedata({
            place,
            city
         })
         if(newplacesdata){
             await newplacesdata.save();
             res.status(200).json(newplacesdata) 
         }
    } catch (error) {
     console.log(`error in postata function ${error}`);
     return res.status(500).json({
         error: "Internal Server ERROR"
     })
     
    }
 }


 

 export const getplaces = async(req,res)=>{
    try {
        const allcity = await placedata.find();
        if(allcity.length===0){
            return res.status(200).json([]);
        }
        res.status(200).json(allcity)
    } catch (error) {
        console.log(`error in get function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
    }
}


// lincense master function 

export const postlincense = async(req,res)=>{
    try {
        const{PilotName,LicenseNo} = req.body;
        const newlicense = new licensedbs({
            PilotName,
            LicenseNo

        })
        await newlicense.save();
        res.status(200).json({"message":"data submited"})
    } catch (error) {
        console.error("Error postlincense model:", error);
        res.status(500).json({ message: "Server error" });
    }

}

export const getlicences = async(req,res)=>{
    try {
        const allcity = await licensedbs.find();
        if(allcity.length===0){
            return res.status(200).json([]);
        }
        res.status(200).json(allcity)
    } catch (error) {
        console.log(`error in get function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
    }
}

export const dldlicences  = async(req,res)=>{
    try {
        const { id } = req.params;

        // Check if model exists
        const model = await licensedbs.findById(id);
        if (!model) {
            return res.status(404).json({ message: "Model not found" });
        }

        // Delete model
        await licensedbs.findByIdAndDelete(id);
        res.status(200).json({ message: "Model deleted successfully" });

    } catch (error) {
        console.error("Error deleting model:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}




export const getidlicences= async (req,res) => {
    try{
    const {id}=req.params;
    const licenseid= id;
    const  getlicenseid= await licensedbs.findById({_id:licenseid});
    if(!getlicenseid){
        
        return res.status(404).json({ message: "Model not found" });
    }
    return  res.status(200).json(getlicenseid);
    }catch (error){
      console.error("Error Primary Update Model",error);
     return res.status(500).json({message:"Internal server error"});
    }
}



export const updatelicences = async (req, res) => {
    try {
      const { id } = req.params;
      const updateprimary = req.body;
  
      const allowedFields = ["PilotName", "LicenseNo"]; 
  
      const filteredData = {};
      allowedFields.forEach((field) => {
        if (updateprimary[field] !== undefined && updateprimary[field] !== null) {
          filteredData[field] = updateprimary[field];
        }
      });
  
      if (Object.keys(filteredData).length === 0) {
        return res.status(400).json({ message: "No valid fields to update" });
      }
  
      const updateprimarymodel = await licensedbs.findByIdAndUpdate(id, filteredData, { new: true });
  
      if (!updateprimarymodel) {
        return res.status(404).json({ message: "Model not found" });
      }
  
      res.json({ message: "Licences updated successfully!", });
    } catch (error) {
      console.error("Error Licences update model:", error);
      res.status(500).json({ message: "Server error" });
    }
  };
  


// manufracture controller

export const getmanufacture= async (req,res) => {
    try{
    const {id}=req.params;
    const licenseid= id;
    const  getlicenseid= await ManufactureModel.findById({_id:licenseid});
    if(!getlicenseid){
        
        return res.status(404).json({ message: "Model not found" });
    }
    return  res.status(200).json(getlicenseid);
    }catch (error){
      console.error("Error Primary Update Model",error);
     return res.status(500).json({message:"Internal server error"});
    }
}

export const updatemanufacture = async (req, res) => {
    try {
      const { id } = req.params;
      const updateprimary = req.body;
  
      const allowedFields = ["manufactureName"]; 
  
      const filteredData = {};
      allowedFields.forEach((field) => {
        if (updateprimary[field] !== undefined && updateprimary[field] !== null) {
          filteredData[field] = updateprimary[field];
        }
      });
  
      if (Object.keys(filteredData).length === 0) {
        return res.status(400).json({ message: "No valid fields to update" });
      }
  
      const updateprimarymodel = await ManufactureModel.findByIdAndUpdate(id, filteredData, { new: true });
  
      if (!updateprimarymodel) {
        return res.status(404).json({ message: "Model not found" });
      }
  
      res.json({ message: "manufacture updated successfully!", });
    } catch (error) {
      console.error("Error manufacture update model:", error);
      res.status(500).json({ message: "Server error" });
    }
  };

export const dldManufacturedata  = async(req,res)=>{
    try {
        const { id } = req.params;

        // Check if model exists
        const model = await ManufactureModel.findById(id);
        if (!model) {
            return res.status(404).json({ message: "Model not found" });
        }

        // Delete model
        await ManufactureModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Model deleted successfully" });

    } catch (error) {
        console.error("Error deleting model:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}




// places master controller 



export const deleteplaces  = async(req,res)=>{
    try {
        const { id } = req.params;

        // Check if model exists
        const model = await placedata.findById(id);
        if (!model) {
            return res.status(404).json({ message: "Model not found" });
        }

        // Delete model
        await placedata.findByIdAndDelete(id);
        res.status(200).json({ message: "Model deleted successfully" });

    } catch (error) {
        console.error("Error deleting model:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getplacesdata= async (req,res) => {
    try{
    const {id}=req.params;
    const licenseid= id;
    const  getlicenseid= await placedata.findById({_id:licenseid});
    if(!getlicenseid){
        
        return res.status(404).json({ message: "Model not found" });
    }
    return  res.status(200).json(getlicenseid);
    }catch (error){
      console.error("Error placedata Update Model",error);
     return res.status(500).json({message:"Internal server error"});
    }
}

export const updateplaces = async (req, res) => {
    try {
      const { id } = req.params;
      const updateprimary = req.body;
  
      const allowedFields = ["place","city"]; 
  
      const filteredData = {};
      allowedFields.forEach((field) => {
        if (updateprimary[field] !== undefined && updateprimary[field] !== null) {
          filteredData[field] = updateprimary[field];
        }
      });
  
      if (Object.keys(filteredData).length === 0) {
        return res.status(400).json({ message: "No valid fields to update" });
      }
  
      const updateprimarymodel = await placedata.findByIdAndUpdate(id, filteredData, { new: true });
  
      if (!updateprimarymodel) {
        return res.status(404).json({ message: "Model not found" });
      }
  
      res.json({ message: "placedata updated successfully!", });
    } catch (error) {
      console.error("Error placedata update model:", error);
      res.status(500).json({ message: "Server error" });
    }
  };




// Deletecity 

export const deletecity  = async(req,res)=>{
    try {
        const { id } = req.params;

        // Check if model exists
        const model = await CityDBs.findById(id);
        if (!model) {
            return res.status(404).json({ message: "Model not found" });
        }

        // Delete model
        await CityDBs.findByIdAndDelete(id);
        res.status(200).json({ message: "Model deleted successfully" });

    } catch (error) {
        console.error("Error deleting model:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


export const getcitydata= async (req,res) => {
    try{
    const {id}=req.params;
    const licenseid= id;
    const  getlicenseid= await CityDBs.findById({_id:licenseid});
    if(!getlicenseid){
        
        return res.status(404).json({ message: "Model not found" });
    }
    return  res.status(200).json(getlicenseid);
    }catch (error){
      console.error("Error placedata Update Model",error);
     return res.status(500).json({message:"Internal server error"});
    }
}


export const updatecitydata = async (req, res) => {
    try {
      const { id } = req.params;
      const updateprimary = req.body;
  
      const allowedFields = ["cityName"]; 
  
      const filteredData = {};
      allowedFields.forEach((field) => {
        if (updateprimary[field] !== undefined && updateprimary[field] !== null) {
          filteredData[field] = updateprimary[field];
        }
      });
  
      if (Object.keys(filteredData).length === 0) {
        return res.status(400).json({ message: "No valid fields to update" });
      }
  
      const updateprimarymodel = await CityDBs.findByIdAndUpdate(id, filteredData, { new: true });
  
      if (!updateprimarymodel) {
        return res.status(404).json({ message: "Model not found" });
      }
  
      res.json({ message: "placedata updated successfully!", });
    } catch (error) {
      console.error("Error placedata update model:", error);
      res.status(500).json({ message: "Server error" });
    }
  };
