// Express
const express = require('express')
const app = express()
const port = 3000

const enterpriseControllers = require('./controllers/enterpriseController')

// Routes
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/enterprises', enterpriseControllers.getEnterprises)
app.get('/enterprises/:id', enterpriseControllers.getEnterprise)

// Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
