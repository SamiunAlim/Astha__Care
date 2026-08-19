import Activity from '../models/Activity.js';

export const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({ residentId: req.params.residentId }).sort({ date: -1 });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createActivity = async (req, res) => {
  try {
    const activity = await Activity.create({ residentId: req.params.residentId, ...req.body });
    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
