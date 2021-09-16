const Router = require('express').Router()
const {TestController} = require('../controller/')

Router.get('/test', TestController.test)
Router.get('/getPayloadOnly/:postPayloadId', TestController.getPayloadOnly )
Router.get('/', TestController.list)

Router.post('/postRequest', TestController.postRequest)
Router.post('/postRequestStringPayload', TestController.postRequestStringPayload)

module.exports = Router