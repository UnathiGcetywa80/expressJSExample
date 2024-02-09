import express from 'express'
// const express = require 'express'

//create an express app
const app = express()
const port = +process.env.PORT || 4000

//Router
app.get('/', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg:'You`re home'
    })

})
app.all('*', (req, res)=>{
    res.json({
        status: 404,
        msg: '404 page'
    })
})

 app.listen(port)
