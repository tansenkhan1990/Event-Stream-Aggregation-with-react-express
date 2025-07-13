// export default router;
import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { getDashboard } from '../controllers/dashboardController';
import { handleLogout } from '../controllers/authController.js';

const router = express.Router();
router.get('/dashboard', authMiddleware, getDashboard);
router.post('/logout', authMiddleware, handleLogout);
export default router;
