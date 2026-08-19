import Task from '../models/Task.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ residentId: req.params.residentId }).sort({ scheduledAt: 1, createdAt: -1 });
    res.json(tasks);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const createTask = async (req, res) => {
  try {
    const task = await Task.create({ residentId: req.params.residentId, ...req.body });
    res.status(201).json(task);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    const allowed = req.user.role === 'resident'
      ? String(task.residentId) === String(req.user.id)
      : String(task.residentId) === String(req.user.residentId);
    if (!allowed) return res.status(403).json({ message: 'You cannot update this task' });
    Object.assign(task, req.body);
    await task.save();
    res.json(task);
  } catch (error) { res.status(400).json({ message: error.message }); }
};
