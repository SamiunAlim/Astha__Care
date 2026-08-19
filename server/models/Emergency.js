import mongoose from 'mongoose';

const emergencySchema = new mongoose.Schema({
  residentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['open', 'acknowledged', 'resolved'], default: 'open' },
  note: String,
}, { timestamps: true });

export default mongoose.model('Emergency', emergencySchema);
