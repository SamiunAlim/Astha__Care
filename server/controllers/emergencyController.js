import Emergency from '../models/Emergency.js';

export const createEmergency = async (req, res) => {
  try {
    const residentId = req.user.role === 'resident' ? req.user.id : req.user.residentId;
    if (!residentId) return res.status(400).json({ message: 'No resident is linked to this account' });
    const emergency = await Emergency.create({ residentId, requestedBy: req.user.id, note: req.body.note || '' });
    res.status(201).json(emergency);
  } catch (error) { res.status(400).json({ message: error.message }); }
};
