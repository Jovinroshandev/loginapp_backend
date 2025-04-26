const express = require("express")
const cors = require("cors")
const app = express()
const users = [
    {name:"jovin",password:"123abc"}
]
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.post("/",function(req,res){
    const {name,password} = req.body;
    const userFound = users.find((user)=> user.name === name && user.password === password)
    if (userFound){
        res.send(true)
    }
    else{
        res.send(false)
    }
})
app.post('/signup',function(req,res){
    const {name,password} = req.body
    const userExists = users.find((user)=>user.name === name && user.password === password)
    if(userExists){
        res.send(false)
    }
    else{
        users.push({name,password})
        res.send(true)
    }
})
app.listen(5000,function(){
    console.log("Backend Server Started..")
})