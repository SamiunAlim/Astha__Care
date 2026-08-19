import express from 'express';
import { getAppointments, createAppointment, updateAppointment } from '../controllers/appointmentController.js';
import { protect, authorize, canAccessResident } from '../middleware/auth.js';

const router = express.Router();
router.get('/:residentId', protect, authorize('family', 'resident'), canAccessResident, getAppointments);
router.post('/:residentId', protect, authorize('family', 'resident'), canAccessResident, createAppointment);
router.patch('/:id', protect, authorize('family', 'resident'), updateAppointment);
export default router;
