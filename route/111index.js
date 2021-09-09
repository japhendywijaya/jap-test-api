const Router = require('express').Router()


Router.use('/tests', require('./testRoute'))
//comment

module.exports = Router