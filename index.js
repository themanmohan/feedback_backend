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
const port=process.env.port || 80const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port,(err,data)=>{
  console.log("working")
})
