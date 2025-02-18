const uplodeImage=(req, res, next)=>{
     console.log("Here is my file uploded to photo folder");
     req.filename="myimage.jpg";
     next();
}
module.exports=uplodeImage;