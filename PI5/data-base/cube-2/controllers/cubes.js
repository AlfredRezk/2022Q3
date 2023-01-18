
const Cube = require('../models/Cube');

exports.getHome = async (req, res) => {
  const cubes = await Cube.find({}).lean();
  res.render('index', {cubes, docTitle:'Home Page'})
}

exports.getAbout = (req, res)=>{
  res.render('about', {docTitle:'About Page'})
}

exports.getCreate = (req, res)=>{
  res.render('create', {docTitle:'Create Cube'})
}

exports.postCreate = async(req, res) => {
  const { name, description, imageUrl, level } = req.body;
  const cube = new Cube({description, imageUrl, level, name});
  await cube.save();
  res.redirect('/');

}

exports.getDetails = async(req, res) => {

  const id = req.params.id;
  const cube = await Cube.findById(id).lean().populate('accessories');
  console.log(cube);
  res.render('details', {cube, docTitle:'Details', accessories: cube.accessories})

}

exports.getNotFound = (req, res) => {
  res.status(404);
  res.render('404');
  
}
