const Cube = require('../models/Cube');
const {parse} = require('json2csv')
const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');


exports.getCubes = asyncHandler(async(req, res, next) => {
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
  
  res.status(200).json({success: true, data: cubes})
})

exports.postCube = asyncHandler(async(req, res, next) => {
  const { name, description, imageUrl, level } = req.body;

  const cube = new Cube({description, imageUrl, level, name, creatorId:req.userId});
  const savedCube = await cube.save();
  res.status(201).json({success:true, data: savedCube, message: 'Cube successully created !'});

})


exports.getCube = asyncHandler(async(req, res, next) => {
  const id = req.params.id;
  const cube = await Cube.findById(id).lean().populate('accessories');


if(cube){
  res.status(200).json({success: true, data: cube})
}else{
  const error = new Error('Cube not found');
  error.statusCode = 422
  throw error;
}

})


exports.putCube = asyncHandler(async(req, res, next)=>{
  // parse the cube id from the url
    const cubeId = req.params.id;
  // fetch the cube info from the DB
  const cube = await Cube.findById(cubeId);
  cube.name = req.body.name;
  cube.description  = req.body.description;
  cube.level = req.body.level;
  cube.imageUrl = req.body.imageUrl;

  let owner;
  if(req.userId){
    owner = req.userId ===cube.creatorId
  }

  if(!owner){
    const error = new Error('Not Authorized');
    error.statusCode = 401;
    throw error; 
  }

  // save it to db with all updates 
  const updatedCube = await cube.save()
  res.status(200).json({
    message: 'Cube updated Successfully!', 
    success: true, 
    data: updatedCube
  })
})



exports.deleteCube = asyncHandler(async(req, res, next)=>{
  // parse the cube id from the url
  const cubeId = req.params.id;
  const cube = await Cube.findById(cubeId);


  
  let owner;
  if(req.userId){
    owner = req.userId ===cube.creatorId
  }

  if(!owner){
    const error = new Error('Not Authorized');
    error.statusCode = 401;
    throw error; 
  }

  await Cube.findByIdAndDelete(cubeId);
  res.status(200).json({success: true, message: 'Cube deleted !'})

  

})

exports.getExport = asyncHandler(async(req, res, next)=>{
  console.log('Export');
  const cubes = await Cube.find({})

  const fields = ['name', 'description', 'imageUrl', 'level'];
  const csv = parse(cubes, {fields:fields})
  res.attachment('List.csv');
  res.status(200).send(csv);
})
