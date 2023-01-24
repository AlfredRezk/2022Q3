const Cube  = require('../models/Cube');
const Accessory = require('../models/Accessory');
const asyncHandler = require('express-async-handler')

exports.getCreate = (req, res)=>{
    res.render('createAccessory', {docTitle:"Create Accessory"})
}

exports.postCreate = asyncHandler(async(req, res, next)=>{
    const {name, description, imageUrl} = req.body;
    // create a new Accessory 
    const accessory = new Accessory({name, description, imageUrl});
    await accessory.save()
    res.redirect('/')
})

exports.getAttach = asyncHandler(async(req, res, next)=>{
    const cube = await Cube.findById(req.params.cubeId).lean().populate('accessories')
    const accessories = await Accessory.find({}).lean().where('_id').nin(cube.accessories)

    res.render('attachAccessory', {cube,accessories, docTitle:'Attach Accessory' })
})

exports.postAttach =asyncHandler(async(req, res, next)=>{
    console.log(req.params)
    // Find the cube we want to attach the accessoty to it 
    const cube = await Cube.findById(req.params.cubeId);
    // get its accessories - add the new accessory to them 
    cube.accessories.push(req.body.accessory);
    // save to db 
    await cube.save()

    let accessory = await Accessory.findById(req.body.accessory)
    accessory.cubes.push(req.params.cubeId);
    await accessory.save();

    res.redirect(`/details/${req.params.cubeId}`)

})