const express = require('express')
const router = express.Router() // TO CREATE DIFFERENT ROUTES

//import the controller file for functions
const postController =  require('../Controllers/PostController')

//create a Base route with a response
router.get('/', postController.baseRoute)

//create
router.post('/create', postController.createPost)

//route to get posts
router.get('/getPosts', postController.getPosts)

// read one
router.get('/getPost/:id', postController.getSinglePost);

// update
router.put('/post/:id/update', postController.updatePost);

// delete
router.delete('/delete/:id', postController.deletePost);

module.exports = router
