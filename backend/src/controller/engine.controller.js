import RHENGINEdata from "../model/enginedb/RH.model.js";
import LHENGINEdata from "../model/enginedb/LH.model.js";
export const postRHENGINEDATA = async(req,res)=>{
    try {
        const NEWRHENGINE = new RHENGINEdata(req.body);
        if(NEWRHENGINE){
            await NEWRHENGINE.save();
            return res.status(200).json(NEWRHENGINE);
        }

    } catch (error) {
        console.error("Error occured postRHENGINEDATA:", error);
        return res.status(500).json({ error: error.message });
    }
}

export const getRHENGINEDATA = async(req,res)=>{
    try {

        const ALLDATA = await RHENGINEdata.find();

        if(ALLDATA){
            return res.status(200).json(ALLDATA)
        }
        
    } catch (error) {
        console.error("Error occured getRHENGINEDATA:", error);
        return res.status(500).json({ error: error.message });
    }

}

export const dldRHENGINEDATA = async(req,res)=>{
    try {
        const{id}= req.params;

        const DLEDATA = await RHENGINEdata.findByIdAndDelete(id);
        if(DLEDATA){
            res.status(200).json({message:"Data Deleted "})
        }

    } catch (error) {
        console.error("Error occured dldRHENGINEDATA:", error);
        return res.status(500).json({ error: error.message });
        
    }
}

export const DisplayRHENGINEDATA = async (req,res) => {
    try{
    const {id} = req.params;
    const rhengine= id;
    const  GETRHENGINEDATAID= await RHENGINEdata.findById({_id:rhengine});
    if(!GETRHENGINEDATAID){
        
        return res.status(404).json({ message: "Model not found" });
    }
    return  res.status(200).json(GETRHENGINEDATAID);
    }catch (error){
      console.error("Error GETRHENGINEDATAID  Model",error);
     return res.status(500).json({message:"Internal server error"});
    }
}





// LH ENGINE logics ........

export const postLHENGINEDATA = async(req,res)=>{
    try {
        const NEWLHENGINE = new LHENGINEdata(req.body);
        if(NEWLHENGINE){
            await NEWLHENGINE.save();
            return res.status(200).json(NEWLHENGINE);
        }

    } catch (error) {
        console.error("Error occured postLHENGINEDATA:", error);
        return res.status(500).json({ error: error.message });
    }
} 



export const getLHENGINEDATA = async(req,res)=>{
    try {

        const ALLDATA = await LHENGINEdata.find();

        if(ALLDATA){
            return res.status(200).json(ALLDATA)
        }
        
    } catch (error) {
        console.error("Error occured getLHENGINEDATA:", error);
        return res.status(500).json({ error: error.message });
    }

}




export const dldLHENGINEDATA = async(req,res)=>{
    try {
        const{id}= req.params;

        const DLEDATA = await LHENGINEdata.findByIdAndDelete(id);
        if(DLEDATA){
            res.status(200).json({message:"Data Deleted "})
        }

    } catch (error) {
        console.error("Error occured dldRHENGINEDATA:", error);
        return res.status(500).json({ error: error.message });
        
    }
}


export const DisplayLHENGINEDATA = async (req,res) => {
    try{
    const {id} = req.params;
    const rhengine= id;
    const  GETLHENGINEDATAID= await LHENGINEdata.findById({_id:rhengine});
    if(!GETLHENGINEDATAID){
        
        return res.status(404).json({ message: "Model not found" });
    }
    return  res.status(200).json(GETLHENGINEDATAID);
    }catch (error){
      console.error("Error GETLHENGINEDATAID  Model",error);
     return res.status(500).json({message:"Internal server error"});
    }
}