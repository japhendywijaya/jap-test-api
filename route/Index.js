const Router = require('express').Router()


Router.use('/tests', require('./testRoute'))


module.exports = Router