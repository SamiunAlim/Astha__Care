import express from 'express';
import { getTasks, createTask, updateTask } from '../controllers/taskController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();
router.get('/:residentId', protect, authorize('family', 'resident'), getTasks);
router.post('/:residentId', protect, authorize('family', 'resident'), createTask);
router.patch('/:id', protect, authorize('family', 'resident'), updateTask);
export default router;
