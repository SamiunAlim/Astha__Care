import express from 'express';
import { getActivities, createActivity } from '../controllers/activityController.js';
import { protect, authorize, canAccessResident } from '../middleware/auth.js';

const router = express.Router();
router.get('/:residentId', protect, authorize('family', 'resident'), canAccessResident, getActivities);
router.post('/:residentId', protect, authorize('family', 'resident'), canAccessResident, createActivity);
export default router;
