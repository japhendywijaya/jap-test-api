const {postPayloads} = require('../models')

class TestController{
    static test(req,res,next){
        res.status(200).json({
            message: 'API Connected'
        })
    }


    static postRequest(req,res,next){
        postPayloads.create({
            payload: JSON.stringify(req.body, null)
        })
        .then(result=>{
            res.status(200).json({ message: 'PostRequest success' })
        })
        .catch(err=>{
            res.status(400).json({
                err: err,
                message: err.message
            })
            // next(err)
        })
    }

    static postRequestStringPayload(req,res,next){
        postPayloads.create({
            payload: req.body.payload
        })
        .then(result=>{
            res.status(200).json({ message: 'postRequestStringPayload success' })
        })
        .catch(err=>{
            next(err)
        })
    }


    static getPayloadOnly(req,res,next){
        postPayloads.findOne({
            where: {
                id: req.params.postPayloadId
            }
        })
        .then(result=>{
            res.send(result.payload)
        })
        .catch(err=>{
            next(err)
        })

    }


    static list(req,res,next){
        postPayloads.findAll({
            where: {},
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 200
        })
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(err=>{
            next(err)
        })
    }
    

    static postFormDataRequest(req,res,next){
        res.status(200).json({
            body: JSON.parse(req.body)
        })
    }

    static deleteAll(req,res,next){
        postPayloads.destroy()
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = TestController