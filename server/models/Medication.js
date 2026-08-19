import mongoose from 'mongoose';

const medicationSchema = new mongoose.Schema({
  residentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  dosage: { type: String },
  frequency: { type: String },
  timeOfDay: [{ type: String }],
  instructions: { type: String },
  prescribedBy: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  status: { type: String, enum: ['active', 'completed', 'discontinued'], default: 'active' },
  logs: [{ takenAt: Date, status: { type: String, enum: ['taken', 'missed', 'skipped'] }, notes: String }],
}, { timestamps: true });

export default mongoose.model('Medication', medicationSchema);
