import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  residentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, enum: ['meal', 'health', 'recreation', 'therapy', 'routine', 'other'], default: 'other' },
  date: { type: Date, default: Date.now },
  time: { type: String },
  duration: { type: String },
  staffName: { type: String },
}, { timestamps: true });

export default mongoose.model('Activity', activitySchema);
