const Cube = require('../models/Cube');
const {parse} = require('json2csv')
const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');


exports.getHome = asyncHandler(async(req, res, next) => {
  // Get all cubes 
  let cubes = await Cube.find({}).lean();
  // check the search
  if(req.query.search){
    cubes  = cubes.filter(cube => cube.name.toLocaleLowerCase().includes(req.query.search.toLocaleLowerCase()))
  }
  if(req.query.from){
    cubes = cubes.filter(cube=> cube.level >= req.query.from)
  }

  if(req.query.to){
    cubes = cubes.filter(cube=> cube.level <= req.query.to)
  }
  
  res.render('index', {cubes, docTitle:'Home Page'})
})

exports.getAbout = (req, res)=>{
  res.render('about', {docTitle:'About Page'})
}

exports.getCreate = (req, res)=>{
  res.render('create', {docTitle:'Create Cube'})
}

exports.postCreate = asyncHandler(async(req, res, next) => {
  const { name, description, imageUrl, level } = req.body;


  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.render('create', {
      docTitle:'Create Cube', 
      errorMessage: errors.array()[0].msg,
      name, description, imageUrl, level
  })
  }

  const cube = new Cube({description, imageUrl, level, name, creatorId:req.user._id});
  await cube.save();
  res.redirect('/');

})

exports.getDetails = asyncHandler(async(req, res, next) => {
  const id = req.params.id;
  const cube = await Cube.findById(id).lean().populate('accessories');
  // Authorization 
  let owner = false; 
  if(req.user){
    owner = req.user._id.toString() === cube.creatorId
  }

  res.render('details', {cube, docTitle:'Details', accessories: cube.accessories, owner})

})


exports.getEdit = asyncHandler(async(req, res, next)=>{
  // parse the cube id from the url
  const cubeId = req.params.cubeId;
  // fetch the cube info from the DB
  const cube = await Cube.findById(cubeId).lean();
  res.render('create', {docTitle:'Edit cube', cube, editMode: true})
})

exports.postEdit = asyncHandler(async(req, res, next)=>{
  // parse the cube id from the url
    const cubeId = req.params.cubeId;
  // fetch the cube info from the DB
  const cube = await Cube.findById(cubeId);
  cube.name = req.body.name;
  cube.description  = req.body.description;
  cube.level = req.body.level;
  cube.imageUrl = req.body.imageUrl;

  // save it to db with all updates 
  await cube.save()
  req.flash('success', 'Cube edited Successfully !')
  res.redirect('/')
})

exports.getDelete = asyncHandler(async(req, res, next)=>{
  // parse the cube id from the url
    const cubeId = req.params.cubeId;
  // fetch the cube info from the DB
  const cube = await Cube.findById(cubeId).lean();
  res.render('delete', {docTitle:'Delete cube', cube})
})

exports.postDelete = asyncHandler(async(req, res, next)=>{
  // parse the cube id from the url
  const cubeId = req.params.cubeId;
  await Cube.findByIdAndDelete(cubeId);

  req.flash('success', 'Cube deleted Successfully !')
  res.redirect('/')
})

exports.getExport = asyncHandler(async(req, res, next)=>{
  const cubes = await Cube.find({})
  const fields = ['name', 'description', 'imageUrl', 'level'];
  const csv = parse(cubes, {fields:fields})
  res.attachment('List.csv');
  res.status(200).send(csv);
})


exports.getNotFound = (req, res) => {
  res.status(404);
  res.render('404');
}
