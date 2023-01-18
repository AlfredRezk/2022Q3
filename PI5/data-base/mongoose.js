const mongoose = require('mongoose');
const dbUrl = 'mongodb+srv://alfred:12345@cluster0.mb0zl7k.mongodb.net/myBlog';


// Define the post schema 
const postSchema  = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    likes: {
        type: Number, 
        default:0
    },
    body: {
        type: String, 
        required: true, 
    }, 
    date: {
        type: Date, 
        default:Date.now
    }, 
    comments: [{type: String}] 
})

// custom methods
postSchema.methods.hello = function (){
    return `Hello world`
}

// validation
postSchema.path('title').validate(function (){
    return this.title.length>=3
}, 'Title should be more than 3 characters ')

const Post = mongoose.model('Post', postSchema)



mongoose.connect(dbUrl).then(()=>{
    console.log('Connected to db');
    const post = new Post({title:'New post', body:'some text'});
    console.log(post.hello())
    post.save().then(()=>{
        console.log('Post saved');

        
    }).catch(err=>{
        console.log(err);
    })
})

