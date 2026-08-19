import express from 'express';
import { createEmergency } from '../controllers/emergencyController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();
router.post('/', protect, authorize('family', 'resident'), createEmergency);
export default router;
