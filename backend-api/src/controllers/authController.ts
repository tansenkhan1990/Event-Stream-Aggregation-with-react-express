import { Request, Response } from 'express';
import { login } from '../services/authService.js';

export const handleLogin = (req: Request, res: Response) => {
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
};

export const handleLogout = (req: Request, res: Response) => {
  res.clearCookie('session_token');
  res.json({ message: 'Logout successful' });
};
