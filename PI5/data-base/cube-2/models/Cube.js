const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
  name:{
    type: String, 
    required: [true, 'Cube name is required']
  }, 
  description:{
    type: String, 
    required:[true, 'Cube description is required'], 
    maxLength:[200, 'description maximum characters are 200 characters']
  }, 
  imageUrl: {
    type: String,
    required:[true, 'Cube image is required'], 
    match:[/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'invalid url'] 
  }, 
  level: {
    type: Number,
    require:true, 
    min: 1, 
    max:6,
  }, 
  accessories:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Accessory'
  }]
})

// cubeSchema.path('imageUrl').validate(function(){
//   let pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
//   return pattern.test(this.imageUrl);
// }, 'Invalid Url')


 module.exports= mongoose.model('Cube', cubeSchema)