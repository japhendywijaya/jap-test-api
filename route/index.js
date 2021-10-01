const Router = require('express').Router()



Router.use('/tests', require('./testRoute'))
Router.use('/', (req,res)=>{
    res.send(`
    <POST> {{host}}/tests/postRequest => POST something
    <GET> {{host}}/tests => List everything
    <GET> {{host}}/tests/test => Test Connection

    `)
})


module.exports = Router