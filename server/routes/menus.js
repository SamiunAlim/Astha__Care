import express from 'express';
import { getMenus, createMenu } from '../controllers/menuController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();
router.get('/', protect, authorize('family', 'resident'), getMenus);
router.post('/', protect, authorize('family'), createMenu);
export default router;
