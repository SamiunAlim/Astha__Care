import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  residentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  scheduledAt: Date,
  status: { type: String, enum: ['pending', 'in_progress', 'completed', 'cancelled'], default: 'pending' },
  category: { type: String, enum: ['routine', 'health', 'meal', 'therapy', 'other'], default: 'routine' },
  assignedTo: String,
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);
