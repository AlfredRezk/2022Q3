const express = require('express');
const { engine } = require('express-handlebars');
const cubeRoutes = require('./routes/cubes');
const accessoryRoutes = require('./routes/accessory')
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const app = express();

// Enviroment variables 
dotenv.config({path:'./config/config.env'});
const port = process.env.PORT || 8080;
// connect to DB 
connectDB()

// Setup the view engine
app.engine('hbs', engine({extname: '.hbs'}))
app.set('view engine', 'hbs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(cubeRoutes);
app.use(accessoryRoutes);

app.listen(port, console.log(`Server running on port ${port}`.yellow.underline));

