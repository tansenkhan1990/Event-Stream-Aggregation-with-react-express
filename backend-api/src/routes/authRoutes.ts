import express from 'express';
import { login } from '../services/authService';

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const token = login(email, password);

  if (!token) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.cookie('session_token', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
  });

  res.json({ message: 'Login successful' });
});

export default router;
