const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash')
const cubeRoutes = require('./routes/cubes');
const accessoryRoutes = require('./routes/accessory')
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const strategy = require('./middlewares/strategy');
const flashConfig = require('./middlewares/flashConfig');
const logger = require('morgan')
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


// set up the session sotrage in DB 
const store = new MongoDBStore({
    uri: process.env.MONGO_URL,
    collection:"sessions",
    expires: 60*60*1000
})

app.use(session({
    store: store, 
    resave:false, 
    saveUninitialized:false, 
    secret:process.env.SESSION_SECRET
}))

app.use(flash())
app.use(logger('dev'))

// Custom middlewares 
app.use(strategy);
app.use(flashConfig);


// Local routes

app.use(cubeRoutes);
app.use(accessoryRoutes);
app.use(authRoutes)

// load page not found 
app.use((req, res)=>{
    res.render('404');
})


//express error handler middleware 
app.use((error, req, res, next)=>{
    res.render('500', {error})
})

app.listen(port, console.log(`Server running on port ${port}`.yellow.underline));

