const express = require('express')
const path = require('path')
const app = express()


app.use(express.static('public'))  // public folder la irukuratha use panrathukku


const mongoose = require('./src/mongoDB/db')   

// Mongoose Models
const bus = require('./src/model/booking')

//middleware for post 
app.use(express.json())                    
//router
const route = require('./src/routers/busRouter')

app.use(route)

app.get('/s',(req,res)=>{
    res.send("Home Page")
})

app.listen(8000,()=>{
    console.log("This is connected to port 8000")
})