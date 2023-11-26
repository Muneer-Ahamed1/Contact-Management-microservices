const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("welcaome to contact")
})
app.listen(8081,()=>{
    console.log("server listening to 8081")
})