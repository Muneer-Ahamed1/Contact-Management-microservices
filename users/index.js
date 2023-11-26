const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("welcaome to user")
})
app.listen(8082,()=>{
    console.log("server listening to 8082")
})