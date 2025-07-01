

//  name: Ronald Kiefer
//  date: June 21, 2025 Saturday 6:00 PM
//  description: This is the server file for the Daron MP4 app version 1.3 backend.


import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import videoRoutes from './routes/videoRoutes.js';

dotenv.config();



const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', videoRoutes);


const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Welcome to the Daron MP4 App Version 1.3 Backend!');
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




