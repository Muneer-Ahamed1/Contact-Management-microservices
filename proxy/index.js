const express=require("express")
const cors=require("cors");
const proxy = require("express-http-proxy");
const app=express();
app.use(cors());

app.use("/api/contacts",proxy("http://localhost:8081"));
app.use("/api/users",proxy("http://localhost:8082"));
app.listen(8080,()=>{
    console.log('Server is running on port 8080');
})
