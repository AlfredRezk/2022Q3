const User = require('../models/User');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const asyncHandler = require('express-async-handler')
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken')

const salt = 12;


// create a transporter 
const transporter = nodemailer.createTransport({
    service:'gmail', 
    auth:{
        user:'cubekingsland@gmail.com',
        pass:'kumhaakklpgweiki'
    }
})

exports.postLogin = asyncHandler(async(req, res, next)=>{
    // parse from the JSON
    const {password, username} = req.body;

    // check for validation Errors
    const errors = validationResult(req);
    // if there are errors
    if(!errors.isEmpty()){
       const error = new Error('Validation Faild');
       error.statusCode = 422
       throw error;
    }

    // check if the user exist in myt db or not 
    const user = await User.findOne({username:username})
    if(!user){
        const error = new Error('A username could not be found');
        error.statusCode = 401;
        throw error;
    }
    // check the password is correct 
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        const error = new Error('wrong Password');
        error.statusCode = 401;
        throw error;
    }

    // login the user 
    const token = jwt.sign(
            {email: user.email, userId: user._id.toString()},
            process.env.JWT_SECRET, 
            {expiresIn:'1h'} 
        )
    
    res.status(200).json({success: true, message:'Loggedin Successfuly!', token: token})
    
})


exports.postRegister= asyncHandler(async(req, res, next)=>{

    // parse the json
    const {email, password, username, password2} = req.body;

    const errors = validationResult(req);
        // if there are errors
        if(!errors.isEmpty()){
            const error = new Error('Validation Error');
            error.statusCode = 422;
            throw error;
        }

    // Create a new user 
    const user = new User({password, username, email})
    // store the user in DB 
    const savedUser = await user.save();

    res.status(201).json({
        success: true, 
        userId: savedUser._id,
        message: 'User created Successfully!'
    }); 

    const info = await transporter.sendMail({
        to:email, 
        from:'cubekingsland@gmail.com', 
        subject:'Thank you for signing with Us',
        html: `<h1> Welcome to our App you successfully signed up !</h1>`
    })

    console.log(info);
})
