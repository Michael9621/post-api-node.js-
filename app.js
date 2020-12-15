const express = require('express')

const app = express() //initialize app with express

const mongoose = require("mongoose")

//create posts schema
const PostsSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    desc: {
        type: String
    }
})

let Posts = mongoose.model('posts', PostsSchema)

//create a vase route with a response
app.get('/', (req,res) => {
    res.send('server running')
})

//route to get posts
app.get('/getPosts', async (req, res) => {
    const posts = await Posts.find()
    res.json(posts)
})

module.exports = app