const Error=(err, req, res, next) => {
  err.statusCode=err.statusCode||500
  err.message=err.message || 'internal server error'
console.log({err});
  if(err.code=== 11000){
    err.statusCode=400,
    err.message="Duplicate key error"
  }

  res.status(err.statusCode).json({statuscode:err.statusCode,message:err.message})
}
module.exports =Error