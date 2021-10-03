const fs = require('fs')
const Router = require('express').Router()

Router.use('/tests', require('./testRoute'))
Router.use('/', (req,res,next)=>{
    fs.readFile('./misc/info.html', 'utf8', (err, data)=>{
        if(err)
            next(err)
        else{
            res.setHeader('Content-type', 'text/html')
            res.send(data)
        }
    })

})


module.exports = Router