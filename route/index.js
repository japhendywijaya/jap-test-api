const Router = require('express').Router()



Router.use('/tests', require('./testRoute'))
Router.use('/', (req,res)=>{
    res.status(200).json({
        info: `
        <POST> {{host}}/tests/postRequest => POST something\n
        <GET> {{host}}/tests => List everything\n
        <GET> {{host}}/tests/test => Test Connection\n
    
        `
    })
})


module.exports = Router