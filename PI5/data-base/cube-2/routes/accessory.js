const router = require('express').Router();
const {getAttach, getCreate, postAttach, postCreate} = require('../controllers/accessory')

router.get('/create/accessory', getCreate);
router.post('/create/accessory', postCreate);
router.get('/attach/accessory/:cubeId', getAttach);
router.post('/attach/accessory/:cubeId', postAttach);

module.exports = router;