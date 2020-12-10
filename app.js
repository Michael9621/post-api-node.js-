const express = require('express')

const app = express() //initialize app with express

//create a vase route with a response
app.get('/', (req,res) => {
    res.send('server running')
})

module.exports = app