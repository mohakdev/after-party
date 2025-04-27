import config from './config.js';
import express from 'express';
import authRouter from "./routes/auth.js";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors(
    {
        origin: '*', // Allow requests from this origin
    }
)); // Enable CORS for all routes
mongoose.connect(config.dbConnection);

app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.status(200);
    res.send("Hello world");
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});