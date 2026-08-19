import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  residentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  doctorName: { type: String },
  specialty: { type: String },
  date: { type: Date, required: true },
  time: { type: String },
  location: { type: String },
  type: { type: String, enum: ['checkup', 'physio', 'dental', 'eye', 'other'], default: 'checkup' },
  status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], default: 'scheduled' },
  notes: { type: String },
}, { timestamps: true });

export default mongoose.model('Appointment', appointmentSchema);
