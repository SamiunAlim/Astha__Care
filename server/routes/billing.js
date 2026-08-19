import express from 'express';
import { getBillings, getBillingById, payBilling } from '../controllers/billingController.js';
import { protect, authorize, canAccessResident } from '../middleware/auth.js';

const router = express.Router();
router.get('/:residentId', protect, authorize('family', 'resident'), canAccessResident, getBillings);
router.get('/detail/:id', protect, getBillingById);
router.patch('/pay/:id', protect, authorize('family', 'resident'), payBilling);
export default router;
