const express = require('express');
const router = express.Router();
const Post = require('../models/post.schema')

router.post('/', (req, res)=>{
    let newPost = req.body
    console.log('newPost is:', newPost);
    
    let post = new Post(newPost)
    console.log('the new post is:', post);
    post.save().then(()=>{
        console.log('sending status');
        res.sendStatus(201)
    }).catch((error)=>{
        console.log('error sending POST:', error);
        res.sendStatus(500)
    })
})

router.get('/', (req, res)=>{
    Post.find().then((data)=>{
        console.log('got stuff back from mongo:', data);
        res.send(data);
    }).catch((error)=>{
        console.log('error from Mongo:', error);
        res.sendStatus(500);
    })
})


module.exports = router;