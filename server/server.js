import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import authRoutes from './routes/auth.js';
import vitalRoutes from './routes/vitals.js';
import billingRoutes from './routes/billing.js';
import appointmentRoutes from './routes/appointments.js';
import medicationRoutes from './routes/medications.js';
import activityRoutes from './routes/activities.js';
import taskRoutes from './routes/tasks.js';
import menuRoutes from './routes/menus.js';
import emergencyRoutes from './routes/emergency.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/vitals', vitalRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/menus', menuRoutes);
app.use('/api/emergency', emergencyRoutes)

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Aastha Care API is running', message: 'Aastha Care API is running' });
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`\n✅ Aastha Care Server running on http://localhost:${PORT}`);
  console.log(`📋 Health Check: http://localhost:${PORT}/api/health\n`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ Port ${PORT} is already in use!`);
    console.error(`👉 Change PORT in server/.env and restart\n`);
    process.exit(1);
  }
});
