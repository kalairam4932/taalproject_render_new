import mongoose, { Schema } from "mongoose";

const flightlogdb = new Schema(
  {
    date: { type: String },  // Changed `data` → `date`
    Logno: {
      first: { type: String },
      second: { type: String },
    },
    attachfiles: [{ type: String }],  // Updated to array
    pageno: { type: Number },  // Ensure it's a Number
    flightno: { type: Number },  // Ensure it's a Number
    pilotcmt: { type: String },
    copilot: { type: String },
    classification: { type: String },
    departure: {
      place: { type: String },
      date: { type: String },
      time: { type: String },  // Changed `Time` → `time`
    },
    arrival: {
      place: { type: String },
      date: { type: String },
      time: { type: String },  // Changed `Time` → `time`
    },
    HOBBS: {
      blocktime: { type: String },
      airborntime: { type: String },
      groundruntime1: { type: String },  // Updated to match React
      groundruntime2: { type: String },  // Updated to match React
      totaltime: { type: String },
    },
    airframeperiod: [
      {
        model: { type: String },  // Added
        serialno: { type: String },  // Added
        hours: { type: String },
        finalhours: { type: String },  // Added
        landing: { type: String },
        finallanding: { type: String },  // Added
      },
    ],
    engineperiod: [
      {
        model: { type: String },  // Added
        serialno: { type: String },  // Added
        hours: { type: String },
        finalhours: { type: String },  // Added
        cycle: { type: String },
        finalcycles: { type: String },  // Added
      },
    ],
    airconditionperiod: [
      {
        model: { type: String },  // Added
        serialno: { type: String },  // Added
        hours: { type: String },
        finalhours: { type: String },  // Added
      },
    ],
    remark: { type: String },
    fileattachments: [{ file: { type: String } }],
  },
  { timestamps: true }
);

const FlightLogData = mongoose.model("FlightLogs", flightlogdb);
export default FlightLogData;
