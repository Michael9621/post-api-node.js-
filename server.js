const mongoose = require('mongoose')

require('dotenv').config({ path: '.env'})

//database connection
mongoose.connect(process.env.DATABASE,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  );

mongoose.Promise = global.Promise; // tell mongoose to use es6 promises

mongoose.connection.on('error', (err) => {
    console.log(`Database connection error -> ${err.message} `)
})

//require our models here so that it can be accessed throughout the application
require('./Models/Posts')

//require app.js
const app = require('./app')

//starting server on port 3000
const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`)
})