const {Router} = require('express');
const { getLogin, getRegister, getReset, postLogin, postRegister, getLogout , postReset} = require('../controllers/auth');
const { loginValidation, signupValidation } = require('../validation/auth');
const router = Router();

router.get('/login', getLogin);
router.post('/login', loginValidation(),  postLogin)
router.get('/register', getRegister)
router.post('/register',signupValidation(),  postRegister)
router.get('/reset', getReset);
router.post('/reset', postReset)
router.get('/logout', getLogout)



module.exports = router;