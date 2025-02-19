

const errorMiddleware = (err, req, res, next)=>{
       err.message=err.message || "Internal server error!";
       err.status= err.status || 500;
       res.status(err.status).json({msg:err.message});
}

module.exports= errorMiddleware;