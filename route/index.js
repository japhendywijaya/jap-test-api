const Router = require('express').Router()



Router.use('/tests', require('./testRoute'))
Router.use('/', (req,res)=>{
    res.send(`
    <POST> {{host}}/tests/postRequest => POST something\n
    <GET> {{host}}/tests => List everything\n
    <GET> {{host}}/tests/test => Test Connection\n

    `)
})


module.exports = Router