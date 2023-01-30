const express = require('express');
const cors = require('cors');
const app = express();


let posts = [
    {
        _id: 1, 
        title: 'Post 1', 
        body:'Post 1 body'
    }, 

    {
        _id:2, 
        title: 'Post 2', 
        body:'Post 2 body'
    }, 

    {
        _id: 3, 
        title: 'Post 3', 
        body:'Post 3 body'
    }, 

    {
        _id: 4, 
        title: 'Post 4', 
        body:'Post 4 body'
    }, 
]

// middleware - parse json data
app.use(express.json())


// custom middleware 
// app.use((req, res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, PUT, OPTIONS')
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
//     next();
// })

app.use(cors());

// GET : get all posts 
app.get('/api/posts', (req, res)=>{
    res.status(200).json({
        success:true, 
        message: 'Get all posts - successfully!', 
        data: posts
    })
})


// Get: A post by its id 
app.get('/api/posts/:id', (req, res)=>{

    const postId = req.params.id;
    const post = posts.find(p=> p._id === Number(postId))
    console.log(post)
    if(post)
        res.status(200).json({
            success:true, 
            message: `Get post with id = ${postId} - successfull`, 
            data: post
        })
    else 
        res.status(404).json({
            success:false,
            error:`Post not found with id ${postId}`
        })
})


// Create a new Post 
app.post('/api/posts', (req, res)=>{
    const post = req.body;
    post._id = Date.now()
    posts.push(post)
    res.status(201).json({
        success:true, 
        message:'Post created successfully', 
        data: post
    })
})


// Delete Post 
app.delete('/api/posts/:id', (req, res)=>{
    const id = req.params.id;
    posts = posts.filter(p=> p._id !==Number(id));
    res.status(200).json({
        success: true, 
        message: 'Post deleted',
        data: posts
    })
})


app.put('/api/posts/:id', (req, res)=>{
    const id = req.params.id;
    const post = req.body;

    const index = posts.findIndex(p=> p._id ===Number(id))
    posts[index] = post;
    posts[index]._id = id;

    res.status(200).json({
        success: true, 
        message: 'Post updated', 
        data: posts
    })
})

app.listen(8080, console.log('Server is running on Port 8080'))