require('dotenv').config();
const express = require('express')
const connectDB = require('./config/db')

const app = express();
//mongodb connection
connectDB()
//middleware 




//running the server
app.listen(process.env.PORT, ()=>console.log(`running on port ${process.env.PORT}`));
kjsdb