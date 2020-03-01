// Express
const express = require('express')
const app = express()
const port = 3000

// Routes
const enterprises = require('./enterprises/router')

app.use('/enterprises', enterprises)

// Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
