import mongoose from 'mongoose';

const InspectionSchema = new mongoose.Schema({
  InspType: { type: String, required: false },
  monitorType: { type: String, required: false },
  ATAChapter: { type: String, required: false },
  reference: { type: String, required: false },
  description: { type: String },
  doneon: { type: Date, required: false },
  WorkOrderNo: { type: String, required: false },
  LicenseNo: { type: String, required: false },
  Place: { type: String, required: false },
  actualManHours: { type: String },
  remarks: { type: String },
  RevisionNo: { type: String },
  pageNo: { type: String },
  BookNo: { type: String },
  sourceDoc: { type: String },
  airframeFrequency: { type: String },
  airframeElapsedValue: { type: String },
  airframeRemaining: { type: String },
  Remainingdays:{
    type: String
  },
  extensionDate: { type: Date },
  extensionRemark: { type: String },
  applicable: { type: Boolean, default: false }
}, { timestamps: true });

const Inspection  = mongoose.model('Inspection', InspectionSchema);

export default Inspection;
