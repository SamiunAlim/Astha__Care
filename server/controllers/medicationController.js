import Medication from '../models/Medication.js';

export const getMedications = async (req, res) => {
  try {
    const meds = await Medication.find({ residentId: req.params.residentId });
    res.json(meds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logMedication = async (req, res) => {
  try {
    const med = await Medication.findById(req.params.id);
    if (med) {
      const allowed = req.user.role === 'resident'
        ? String(med.residentId) === String(req.user.id)
        : String(med.residentId) === String(req.user.residentId);
      if (!allowed) return res.status(403).json({ message: 'You cannot update this medication' });
      med.logs.push({ takenAt: new Date(), status: req.body.status, notes: req.body.notes });
      await med.save();
      res.json(med);
    } else {
      res.status(404).json({ message: 'Medication not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
