const express= require("express");
const app=express();
const cors= require("cors");
const bodyParser = require('body-parser');
const mongoose= require("mongoose");
const errMiddleWare = require("./middlewares/errorMiddleware");

app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/home",async (req, res, next)=>{ 
    try {
        console.log("My home Page");
     throw new Error("this is homeee page error!");
     res.send("OKKK Home");
    } catch (error) {
        next(error)
    }     
       
    
})


app.get("/about", async(req, res, next)=>{
       try {
             console.log("About page Data!");
             throw new Error()
             res.status(200).send("About Page running");
       } catch (error) {
            next(error)
       }
})


app.get("/service", async(req, res)=>{
       try {
            res.status(200).send("This is Services Pge")
       } catch (error) {
         console.log(error);
       }
})







app.use(errMiddleWare);

const Port=8000;
app.listen(Port, ()=>{
    console.log(`server run on  port ${Port}`);
})