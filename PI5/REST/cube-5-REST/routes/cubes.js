const router = require('express').Router();
const {isAuth} = require('../middlewares/isAuth')
const { getCubes, postCube, getCube, putCube, deleteCube} = require('../controllers/cubes');

router.get('/', getCubes);
router.post('/',isAuth, postCube);
router.get('/:id', getCube);
router.put('/:id', isAuth,putCube);
router.delete('/:id', isAuth, deleteCube);

module.exports = router;