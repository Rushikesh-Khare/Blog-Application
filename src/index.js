<<<<<<< HEAD
const express =require('express')
const bodyParser=require('body-parser')
const mongoose= require('mongoose')
const route= require('./route')
const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', route)
mongoose.connect("mongodb+srv://gauravpandeyidforfunctionup:XvjHpLyNrIONLzb1@cluster0.a7th0vg.mongodb.net/blogging-site-mini-project?retryWrites=true&w=majority",{useNewUrlParser:true}).then(()=>console.log("momgodb has connected")).catch((err)=>console.log(err))
app.listen(process.env.PORT||3000 , function(){
    console.log("the server has started on the port:", process.env.PORT||3000)
=======
const express =require('express')
const bodyParser=require('body-parser')
const mongoose= require('mongoose')
const route= require('./route')
const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', route)
mongoose.connect("mongodb+srv://gauravpandeyidforfunctionup:XvjHpLyNrIONLzb1@cluster0.a7th0vg.mongodb.net/blogging-site-mini-project?retryWrites=true&w=majority",{useNewUrlParser:true}).then(()=>console.log("momgodb has connected")).catch((err)=>console.log(err))
app.listen(process.env.PORT||3000 , function(){
    console.log("the server has started on the port:", process.env.PORT||3000)
>>>>>>> 09107f12193f999f7b66b1417d080d1f4ee31e90
})