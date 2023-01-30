const router = require('express').Router();
const { create, attach, allAccessories} = require('../controllers/accessory')

const {isAuth} = require('../middlewares/isAuth');


router.get('/', allAccessories)
router.post('/', isAuth, create);
router.post('/:cubeId', isAuth, attach);


module.exports = router;