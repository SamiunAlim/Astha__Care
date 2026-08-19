import Vital from '../models/Vital.js';

export const getVitals = async (req, res) => {
  try {
    const { residentId } = req.params;
    const vitals = await Vital.find({ residentId }).sort({ recordedAt: -1 });
    res.json(vitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createVital = async (req, res) => {
  try {
    const vital = await Vital.create({ residentId: req.params.residentId, ...req.body });
    res.status(201).json(vital);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
