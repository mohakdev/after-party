//Dependencies
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//Import Files
import config from './config.js';
//Routers
import authRouter from "./routes/auth.js";
import partyRouter from "./routes/party.js";

const app = express();

//Enabling important dependencies
dotenv.config();
app.use(express.json());
app.use(cors(
    {
        origin: '*', // Allow requests from this origin
    }
)); // Enable CORS for all routes
mongoose.connect(config.dbConnection);

//Routes
app.use('/auth', authRouter);
app.use('/party', partyRouter);

app.get('/', (req, res) => {
    res.status(200);
    console.log("Headers:", req.headers);
    res.send("Hello world");
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});