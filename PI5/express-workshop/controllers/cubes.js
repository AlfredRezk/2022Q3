
const Cube = require('../models/cube');




exports.getHome = async (req, res) => {
  const cubes = await Cube.fetchCubes();
  res.render('index', {cubes, docTitle:'Home Page'})

}

exports.getAbout = (req, res)=>{
  res.render('about', {docTitle:'About Page'})
}

exports.getCreate = (req, res)=>{
  res.render('create', {docTitle:'Create Cube'})
}

exports.postCreate = (req, res) => {
  const { name, description, imageUrl, level } = req.body;
  const cube = new Cube(name, description, imageUrl, level);
  cube.save();
  res.redirect('/');

}

exports.getDetails = async(req, res) => {

  const id = req.params.id;
  const cube = await Cube.findById(id);
  console.log(cube);
  res.render('details', {cube, docTitle:'Details'})

}

exports.getNotFound = (req, res) => {
  res.status(404);
  res.render('404');
  
}
