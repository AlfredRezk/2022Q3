const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
  name:{
    type: String, 
    required: [true, 'Accessory name is required']
  }, 
  description:{
    type: String, 
    required:[true, 'Accessory description is required'], 
    maxLength:[200, 'description maximum characters are 200 characters']
  }, 
  imageUrl: {
    type: String,
    required:[true, 'Accessory image is required'], 
    match:[/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'invalid url'] 
  }, 
  cubes:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Cube'
  }]
})


 module.exports= mongoose.model('Accessory', accessorySchema)