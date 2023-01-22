const User = require('../models/User');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const salt = 12;


// create a transporter 
const transporter = nodemailer.createTransport({
    service:'gmail', 
    auth:{
        user:'cubekingsland@gmail.com',
        pass:'kumhaakklpgweiki'
    }
})

exports.getLogin = (req, res)=>{
    res.render('auth/login', {docTitle:'Login Page'})
}

exports.postLogin = async(req, res)=>{
    // parse from the form 
    const {password, username} = req.body;
    // check if the user exist in myt db or not 
    const user = await User.findOne({username:username})
    if(!user){
        req.flash('error', 'Invalid email or password')
        return res.redirect('/login')
    }
    // check the password is correct 
    const match = await bcrypt.compare(password, user.password)
    if(match){

        req.session.isLoggedIn = true;
        req.session.user = user;
        // Store user session in DB 
        await req.session.save();
        req.flash('success', 'Logged In Successfully !')
        return res.redirect('/')
    }
    req.flash('error', 'Invalid email or password')
    return res.redirect('/login')
    
}

exports.getRegister = (req, res)=>{
    res.render('auth/register', {docTitle:'Register Page'})
}

exports.postRegister= async(req, res)=>{

    // parse the form 
    const {email, password, username, password2} = req.body;
    // Make sure username is not taken 
    let userData = await User.find({username: username})
    if(userData.length>0){
        req.flash('error', 'Username is taken try another username');
        return res.redirect('/register');
    }
    // Make sure email is not taken 
    userData = await User.find({email: email})
    if(userData.length>0){
        req.flash('error', 'Email been used for a different account ');
        return res.redirect('/register');
    }

    // Hash the password and store the user info in the db 
    const hash = await bcrypt.hash(password, salt);

    // Create a new user 
    const user = new User({password: hash, username, email})
    // store the user in DB 
    await user.save();
    req.flash('success', 'User created Successfully !');
    res.redirect('/login');
    const info = await transporter.sendMail({
        to:email, 
        from:'cubekingsland@gmail.com', 
        subject:'Thank you for signing with Us',
        html: `<h1> Welcome to our App you successfully signed up !</h1>`
    })

    console.log(info);
}


exports.getLogout = async (req, res)=>{
    await req.session.destroy();
    res.redirect('/')
}

exports.getReset = (req, res)=>{
    res.render('auth/reset', {docTitle:'Reset Page'})
}

exports.postReset = async(req, res)=>{
    // get the entered user email 
    const email = req.body.email;

    // create a token use the crypto library
    const token = crypto.randomBytes(32).toString('hex');

    // Find the user by his email 
    const user = await User.findOne({email: email})
    if(!user){
        req.flash('error', 'No account with this email')
        return res.redirect('/reset');
    }

    user.resetToken = token; 
    user.resetTokenExpiration = Date.now()+3600000  //current time + 1hr

    // save the user in db 
    await user.save();
    req.flash('success', 'Check your email!')
    res.redirect('/');
    const info = await transporter.sendMail({
        to:email, 
        from:'cubekingsland@gmail.com', 
        subject:'Password Reset',
        html: `
        <p> Your request a password Reset</p>
        <p> Click the link <a href="https://localhost:500/reset/${token}">Reset Link </a> to reset your password</p>
`
    })

    console.log(info);
}