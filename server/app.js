const express= require("express");
const app=express();
const cors= require("cors");
const bodyParser = require('body-parser');
const mongoose= require("mongoose");
const fileUpload= require("./middlewares/uploadingMiddleware");
app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/myhome",fileUpload,  (req, res)=>{
     console.log("File Image data save in Mongo DB");
     console.log(req.filename);
     res.send("OKKK");
})
const Port=8000;
app.listen(Port, ()=>{
    console.log(`server run on  port ${Port}`);
})