import mongoose from 'mongoose';

const billingSchema = new mongoose.Schema({
  residentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  invoiceNumber: { type: String, required: true },
  month: { type: String, required: true },
  year: { type: Number, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: '৳' },
  dueDate: { type: Date },
  status: { type: String, enum: ['paid', 'pending', 'overdue'], default: 'pending' },
  items: [{ description: String, amount: Number }],
  paidAt: { type: Date },
}, { timestamps: true });

export default mongoose.model('Billing', billingSchema);
