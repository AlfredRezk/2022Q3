const Cube  = require('../models/Cube');
const Accessory = require('../models/Accessory');

exports.getCreate = (req, res)=>{
    res.render('createAccessory', {docTitle:"Create Accessory"})
}

exports.postCreate = async(req, res)=>{
    const {name, description, imageUrl} = req.body;
    // create a new Accessory 
    const accessory = new Accessory({name, description, imageUrl});
    await accessory.save()
    res.redirect('/')
}

exports.getAttach = async(req, res)=>{
    const cube = await Cube.findById(req.params.cubeId).lean().populate('accessories')
    const accessories = await Accessory.find({}).lean().where('_id').nin(cube.accessories)

    res.render('attachAccessory', {cube,accessories, docTitle:'Attach Accessory' })
}

exports.postAttach =async(req, res)=>{
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

}