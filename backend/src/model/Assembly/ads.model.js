import mongoose from 'mongoose';

const AdsSchema = new mongoose.Schema({
    DirectiveType: { type: String, required: false },
    DirectiveNo: { type: String, required: false },
  ATAChapter: { type: String, required: false },
  reference: { type: String, required: false },
  description: { type: String },
  Note:{type:String},
  Compliance:{type:String},
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

const ads  = mongoose.model('AssemblyDirectiveStatus', AdsSchema);

export default ads;
