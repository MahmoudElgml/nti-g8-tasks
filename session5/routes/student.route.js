const stuctrlr =require('../controllers/student.controller')
const express =require('express')
const app=express.Router()


app.post("/add",stuctrlr.add)

module.exports = app