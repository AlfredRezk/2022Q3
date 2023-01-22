const {Router} = require('express');
const { getLogin, getRegister, getReset, postLogin, postRegister, getLogout , postReset} = require('../controllers/auth');
const router = Router();

router.get('/login', getLogin);
router.post('/login', postLogin)
router.get('/register', getRegister)
router.post('/register', postRegister)
router.get('/reset', getReset);
router.post('/reset', postReset)
router.get('/logout', getLogout)



module.exports = router;