import servicedbs from "../model/othermaster/ServicesMaster.js";

export const POSTSERVICES = async(req,res)=>{
    try {
        const SERVICESMASTER = new servicedbs(req.body);
        if(SERVICESMASTER){
            await SERVICESMASTER.save();
            return res.status(200).json(SERVICESMASTER);
        }

    } catch (error) {
        console.error("Error occured Services Master:", error);
        return res.status(500).json({ error: error.message });
    }
}



export const GETSERVICES = async(req,res)=>{
    try {

        const ALLDATA = await servicedbs.find();

        if(ALLDATA){
            return res.status(200).json(ALLDATA)
        }
        
    } catch (error) {
        console.error("Error occured GETSERVICES:", error);
        return res.status(500).json({ error: error.message });
    }

}