import mongoose from 'mongoose';

const vitalSchema = new mongoose.Schema({
  residentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['bpm', 'bp', 'temp', 'spo2', 'weight'], required: true },
  value: { type: String, required: true },
  unit: { type: String },
  status: { type: String, enum: ['normal', 'warning', 'critical'], default: 'normal' },
  recordedBy: { type: String },
  recordedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Vital', vitalSchema);
