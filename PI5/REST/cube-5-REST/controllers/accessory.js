const Cube  = require('../models/Cube');
const Accessory = require('../models/Accessory');
const asyncHandler = require('express-async-handler')

exports.create = asyncHandler(async(req, res, next)=>{
    const {name, description, imageUrl} = req.body;
    // create a new Accessory 
    const accessory = new Accessory({name, description, imageUrl});
    const savedAccessoy = await accessory.save()
    res.status(201).json({success: true, data: savedAccessoy})
})

exports.allAccessories = asyncHandler(async(req, res, next)=>{
    const accessories = await Accessory.find({})

    res.status(200).json({success: true, data: accessories})
})


exports.attach =asyncHandler(async(req, res, next)=>{
    console.log(req.params.cubeId)

    // Find the cube we want to attach the accessoty to it 
    const cube = await Cube.findById(req.params.cubeId);
    // get its accessories - add the new accessory to them 
    console.log(cube);
    cube.accessories.push(req.body.accessory);
    // save to db 
    await cube.save()

    let accessory = await Accessory.findById(req.body.accessory)
    accessory.cubes.push(req.params.cubeId);
    await accessory.save();

    res.status(200).json({success: true, message: `Accessory ${accessory.name} attached to cube ${cube.name}`})

})