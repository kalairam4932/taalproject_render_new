import Inspection from "../model/Assembly/assembly.model.js";


export const CreateAssembly = async(req,res) => {
    try{
        const assembly = await Inspection(req.body);
        await assembly.save();
        res.status(201).json({message: 'Assembly saved successfully', assembly: assembly});
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

export const getAssembly = async (req, res) => { 
    try {
        const inspections = await Inspection.find();
        res.status(200).json(inspections);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getAssemblyByID = async(req,res) => {
    try {
        const inspection = await Inspection.findById(req.params.id);
        if (!inspection) return res.status(404).json({ message: 'Inspection not found' });
        res.status(200).json(inspection);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const updateAssembly  =async (req, res) => { 
    try {
        const updatedInspection = await Inspection.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedInspection) return res.status(404).json({ message: 'Inspection not found' });
        res.status(200).json({ message: 'Inspection updated successfully', updatedInspection });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const deleteAssembly = async (req, res) => {
    try {
        const deletedInspection = await Inspection.findByIdAndDelete(req.params.id);
        if (!deletedInspection) return res.status(404).json({ message: 'Inspection not found' });
        res.status(200).json({ message: 'Inspection deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
