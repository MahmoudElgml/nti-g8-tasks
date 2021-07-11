require('dotenv').config()
require('../db/connection')
const stuRoute= require('../routes/student.route')
const express = require('express')
const app =express()
app.use(express.json())
app.use(stuRoute)
const port = process.env.PORT || 3000
app.get("/hi",(req,res)=>{
    res.send("hello")
    console.log("get working properly")
})  
app.listen(port,res=>res = console.log(`listening to port ${port}`))