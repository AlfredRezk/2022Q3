const express = require('express');
const cubeRoutes = require('./routes/cubes');
const accessoryRoutes = require('./routes/accessory')
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const logger = require('morgan');
const { getExport } = require('./controllers/cubes');
const app = express();

// Enviroment variables 
dotenv.config({path:'./config/config.env'});
const port = process.env.PORT || 8080;
// connect to DB 
connectDB()

app.use(express.json());

app.use(logger('dev'))


// Local routes
app.use('/api/cubes', cubeRoutes);
app.get('/api/export', getExport)
app.use('/api/accessory', accessoryRoutes);
app.use('/api/auth', authRoutes)

// load page not found 
app.use((req, res)=>{
    res.status(404).json({success: false, message:'Error: resources is not found !'})
})


//express error handler middleware 
app.use((error, req, res, next)=>{
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({success: false, error: message})
})

app.listen(port, console.log(`Server running on port ${port}`.yellow.underline));

