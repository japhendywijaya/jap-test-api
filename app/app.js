require('dotenv').config()

const express = require('express')

const port = process.env.PORT || 7000
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('morgan')('combined'))
app.use(require('cors')())

app.use(require('./route'))

//triggered
app.listen(port, ()=>{
    console.log('Server listening on port', port)
})