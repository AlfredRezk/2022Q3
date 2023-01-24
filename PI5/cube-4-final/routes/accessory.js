const router = require('express').Router();
const {getAttach, getCreate, postAttach, postCreate} = require('../controllers/accessory')

const {isAuth} = require('../middlewares/isAuth');

router.get('/create/accessory', isAuth,  getCreate);
router.post('/create/accessory', isAuth, postCreate);
router.get('/attach/accessory/:cubeId', isAuth, getAttach);
router.post('/attach/accessory/:cubeId', isAuth, postAttach);

module.exports = router;