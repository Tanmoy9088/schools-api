import express from 'express';
import dotenv from 'dotenv';
import schoolRoutes from './routes/schoolRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', schoolRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
