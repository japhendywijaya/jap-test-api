const fs = require('fs')
const Router = require('express').Router()

Router.use('/tests', require('./testRoute'))
Router.use('/', (req,res,next)=>{
    fs.readFile('./misc/info.txt', 'utf8', (err, data)=>{
        if(err)
            next(err)
        else{
            res.format({
                'text/plain': function () {
                  res.send(data)
                }
            })
        }
    })

})


module.exports = Router