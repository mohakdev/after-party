import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    jwtKey: process.env.JWT_SECRET || 'JOPabciupo',
    dbConnection: process.env.MONGO_CONNECTION_STRING
};

export default config;