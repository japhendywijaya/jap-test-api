const Router = require('express').Router()
const {TestController} = require('../controller/')

Router.get('/test', TestController.test)
Router.get('/', TestController.list)

Router.post('/postRequest', TestController.postRequest)

module.exports = Router