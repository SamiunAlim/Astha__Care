import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  day: { type: String, required: true },
  meal: { type: String, enum: ['breakfast', 'lunch', 'dinner', 'snack'], required: true },
  time: String,
  items: [{ type: String }],
  calories: Number,
  dietaryType: { type: String, enum: ['veg', 'non-veg', 'salt-free', 'sugar-free', 'other'], default: 'other' },
  notes: String,
}, { timestamps: true });

export default mongoose.model('Menu', menuSchema);
