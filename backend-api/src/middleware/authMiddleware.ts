import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.session_token;

  // 🔐 Validate session and roles here
  if (token !== 'valid-session') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  req.user = { name: 'Tansen' }; // 📌 Placeholder for parsed user
  next();
};
