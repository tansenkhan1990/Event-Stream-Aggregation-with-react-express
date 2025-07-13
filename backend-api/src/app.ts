import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes';
import protectedRoutes from './routes/protectedRoutes';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', protectedRoutes);

export default app;
