import { User } from '../../services/types';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
