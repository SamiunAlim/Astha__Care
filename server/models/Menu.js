import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bengaliMeal: { type: String }, // যেমন: সকালের নাস্তা, দুপুরের খাবার, বিকেলের নাস্তা, রাতের খাবার
  day: { type: String, default: 'Everyday' },
  meal: { type: String, enum: ['breakfast', 'lunch', 'dinner', 'snack'], required: true },
  time: String,
  items: [{ type: String }],
  calories: Number,
  protein: String,
  carbs: String,
  fat: String,
  dietaryType: { type: String, default: 'সাধারণ খাবার' },
  status: { type: String, default: 'তৈরি আছে' },
  image: { type: String },
  description: String,
  notes: String,
}, { timestamps: true });

export default mongoose.model('Menu', menuSchema);
