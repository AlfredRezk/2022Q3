const {body} = require('express-validator');
const User = require('../models/User')

exports.loginValidation = (req, res)=>{
    return [
        body('username')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide username Field')
        .isAlphanumeric()
        .withMessage('Username should be Alphanumeric')
        .isLength({min:5, max:15})
        .withMessage('Username should have min 5 characters and max 15 characters'), 
        body('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide password Field')
        .isAlphanumeric()
        .withMessage('Password should be Alphanumeric')
        .isLength({min:8})
        .withMessage('Username should have min 8 characters'), 
    ]

}


exports.signupValidation = (req, res)=>{
    return [
        body('username')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide username Field')
        .isAlphanumeric()
        .withMessage('Username should be Alphanumeric')
        .isLength({min:5, max:15})
        .withMessage('Username should have min 5 characters and max 15 characters')
        .custom((value)=>{
            return User.findOne({username: value})
            .then(userDoc=>{
                if(userDoc){
                    return Promise.reject('Username is already taken ')
                }
            })
        }), 


        body('email')
        .trim()
        .normalizeEmail()
        .not().isEmpty()
        .withMessage('Please provide Email Field')
        .isEmail()
        .withMessage('Email is formated correctly !')
        .custom((value)=>{
            return User.findOne({email: value}).then(userDoc=>{
                if(userDoc){
                    return Promise.reject('Email is already used!')

                }
            })
        }), 

        body('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide password Field')
        .isAlphanumeric()
        .withMessage('Password should be Alphanumeric')
        .isLength({min:8})
        .withMessage('Password should have min 8 characters'), 

        body('password2').custom((value, {req})=>{
            if(value !== req.body.password){
                throw new Error('Password Not Matching')
            }else return true
        })

    ]

}