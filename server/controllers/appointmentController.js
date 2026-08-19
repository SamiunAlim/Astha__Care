import Appointment from '../models/Appointment.js';

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ residentId: req.params.residentId }).sort({ date: 1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createAppointment = async (req, res) => {
  try {
    const appt = await Appointment.create({ residentId: req.params.residentId, ...req.body });
    res.status(201).json(appt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAppointment = async (req, res) => {
  try {
    const appt = await Appointment.findById(req.params.id);
    if (!appt) return res.status(404).json({ message: 'Appointment not found' });
    const allowed = req.user.role === 'resident'
      ? String(appt.residentId) === String(req.user.id)
      : String(appt.residentId) === String(req.user.residentId);
    if (!allowed) return res.status(403).json({ message: 'You cannot update this appointment' });
    Object.assign(appt, req.body);
    await appt.save();
    res.json(appt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
