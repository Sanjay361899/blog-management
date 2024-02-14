const express=require("express")
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_management");
const app=express()
app.listen(2000,()=>{
    console.log("Server is running");
})