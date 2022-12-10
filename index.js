const express=require('express')
const app = express()

// custom error handler class
class ErrorHandler extends Error{
  constructor(statusCode,message) {
    super(message)
    this.statusCode=statusCode
  }
  
}

app.get('/', (req, res,next) => {

  return next(new ErrorHandler(404,'unauthorized'))

})


// com:
// custom error  handlers

app.use((err, req, res, next) => {
  err.statusCode=err.statusCode||500
  err.message=err.message || 'internal server error'

  res.status(err.statusCode).json({message:err.message})
})

app.listen(5000,()=> console.log('listening on port 5000'))