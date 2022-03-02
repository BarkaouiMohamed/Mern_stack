const express = require('express')
const dotenv = require('dotenv').config() // that will allow us to have a .env file with our variables in it 
const {
    errorHandler
} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000 // the port which we want our server to run on 
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
// app.get('/api/goals',(req, res)=> res.send('Get goals'))
app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)
app.listen(port, () => console.log(` server started on port ${port}`)) // which generate the output  