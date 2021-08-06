const express=require("express")
const mongoose =require("mongoose")
const cors =require('cors')
const feedBackRoute= require("./Route/FeedBack")
const app=express()

//connect dataBase
 mongoose.connect("mongodb://localhost/pytfeedback",{ useNewUrlParser: true,useUnifiedTopology: true })

//init midiileware

app.use(express.json({extended:false}))

//cross origin
 app.use(cors())

//Define Route 
app.use("/feedback",feedBackRoute)

app.listen(4000,(err,data)=>{
  console.log("working")
})