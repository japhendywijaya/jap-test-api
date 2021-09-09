require('dotenv').config()

const express = require('express')


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('morgan')('combined'))
app.use(require('cors')())

app.use(require('./route'))

module.exports = app