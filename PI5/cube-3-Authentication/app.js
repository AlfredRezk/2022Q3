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

// Custom middlewares 
app.use(strategy);
app.use(flashConfig);


app.use((req, res, next)=>{
    res.locals.isAuthenticated = req.session.isLoggedIn
      res.locals.errorMessage = req.flash('error');
      res.locals.successMessage = req.flash('success');
      console.log(res.locals);
      next()

  })
// Local routes

app.use(cubeRoutes);
app.use(accessoryRoutes);
app.use(authRoutes)

app.listen(port, console.log(`Server running on port ${port}`.yellow.underline));

