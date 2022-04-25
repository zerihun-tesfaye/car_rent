import appError from '../helpers/appError.js'



 // to send error to the 
function SendError(err,res){
    res.status(err.statusCode).json({
      status: err.status,
        message: err.message,
        error: err,
        stack: err.stack,
      });
}
//middleware to catch global error
export function catchGlobalError(err, req, res, next){
    err.statusCode = err.statusCode || 500
    err.status = err.status || "Error"
    SendError(err,res)
}
// middleware for the controller 
export function catchAsync(fn){
    return (req,res,next)=>fn(req,res,next).catch(next)
}
// middleware error for url not found
export function catchUnregisteredUrl(req, res, next) {
    return next(
      new appError(`can't find ${req.originalUrl} on this server`, 404)
    );
  }