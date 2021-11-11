import dotenv from 'dotenv';
import express from 'express'
import connectToDatabase from './config/db.js'
import {bootcampRoutes} from './routes/index.js' 
import {errorHandler} from './middleware/index.js'
dotenv.config()


const app = express();
//mongodb connection
connectToDatabase()
//middleware 
app.use(express.json());


//Routes 
app.use('/api/v1/bootcamps', bootcampRoutes);


//Error Handler
app.use(errorHandler);


//running the server
app.listen(process.env.PORT, ()=>console.log(`running on port ${process.env.PORT}`));
