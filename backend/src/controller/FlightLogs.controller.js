import FlightLogData from "../model/masterdatabase/Flightlogs.model.js"

export const PostFlightLogs = async(req,res)=>{
    try {
        const flightLog = new FlightLogData(req.body);
        await flightLog.save();
        res.status(201).json({ message: "Flight Log created successfully", flightLog });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    
    } 

export const Getflightlogs = async(req,res)=>{
    try {
        const logdata = await FlightLogData.find();

        if(logdata.length===0){
            return res.status(200).json([]);
        }
        return res.status(200).json(logdata);


    } catch (error) {
        console.error("Error get flight log:", error);
        res.status(500).json({ error: error.message });
    }
} 

export const Deleteflightlogs = async(req,res)=>{
    try {
        const{id}=req.params;
        const dlddata = await FlightLogData.findByIdAndDelete(id);
        if (!dlddata) {
            return res.status(404).json({ message: "Flight log not found" });
        }
        res.status(200).json({ message: "Flight log deleted successfully", dlddata });
    } catch (error) {
        console.error("Error deleting flight log:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const UpdateFlightLog = async (req, res) => {
    try {
        const { id } = req.params; // Get the flight log ID from request parameters
        const updatedFlightLog = await FlightLogData.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedFlightLog) {
            return res.status(404).json({ message: "Flight Log not found" });
        }

        res.status(200).json({ message: "Flight Log updated successfully", updatedFlightLog });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const EditFlightLog = async (req, res) => {
    try {
        const { id } = req.params; // Get flight log ID
        const flightLog = await FlightLogData.findById(id);

        if (!flightLog) {
            return res.status(404).json({ message: "Flight Log not found" });
        }

        res.status(200).json({ flightLog });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


