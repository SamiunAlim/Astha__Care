import express from 'express';
import { getVitals, createVital } from '../controllers/vitalController.js';
import { protect, authorize, canAccessResident } from '../middleware/auth.js';

const router = express.Router();
router.get('/:residentId', protect, authorize('family', 'resident'), canAccessResident, getVitals);
router.post('/:residentId', protect, authorize('family', 'resident'), canAccessResident, createVital);
export default router;
