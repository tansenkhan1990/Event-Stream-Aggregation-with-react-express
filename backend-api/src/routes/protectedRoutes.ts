import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/dashboard', authMiddleware, (req, res) => {
  res.json({ message: `Welcome, ${req.user?.name}` });
});

router.post('/logout', authMiddleware, (req, res) => {
  res.clearCookie('session_token');
  res.json({ message: 'Logout successful' });
});

export default router;
