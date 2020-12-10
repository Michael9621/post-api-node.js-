//require app.js

const app = require('./app')

//starting server on port 3000
const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`)
})