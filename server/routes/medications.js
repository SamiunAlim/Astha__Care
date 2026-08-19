import express from 'express';
import { getMedications, logMedication } from '../controllers/medicationController.js';
import { protect, authorize, canAccessResident } from '../middleware/auth.js';

const router = express.Router();
router.get('/:residentId', protect, authorize('family', 'resident'), canAccessResident, getMedications);
router.post('/log/:id', protect, authorize('family', 'resident'), logMedication);
export default router;
