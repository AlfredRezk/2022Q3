const {Router} = require('express');
const { postLogin, postRegister} = require('../controllers/auth');
const { loginValidation, signupValidation } = require('../validation/auth');
const router = Router();

router.post('/login', loginValidation(),  postLogin)
router.post('/register',signupValidation(),  postRegister)

module.exports = router;