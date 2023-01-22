const router = require('express').Router();
const {isAuth} = require('../middlewares/isAuth')
const { getAbout, getCreate, getHome, getNotFound, postCreate, getDetails , getEdit,  getDelete, postEdit, postDelete, getExport} = require('../controllers/cubes');

router.get('/', getHome);
router.get('/about', getAbout);
router.get('/create', isAuth,  getCreate);
router.post('/create',isAuth,  postCreate);
router.get('/details/:id', getDetails);
router.get('/edit/:cubeId', isAuth,  getEdit);
router.post('/edit/:cubeId', isAuth, postEdit);
router.get('/delete/:cubeId', isAuth, getDelete);
router.post('/delete/:cubeId', isAuth, postDelete);
router.get('/export', getExport)






module.exports = router;