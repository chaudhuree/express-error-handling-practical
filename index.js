const express=require('express')
const app = express()
const userRouter=require('./routes/User')
const Error=require('./middlewares/Error')

// import connectDB and use connect
const {connectDB} = require('./config/database')
connectDB()

app.use('/users',userRouter)





// imp: 
// custom error  handlers
app.use(Error)

app.listen(5000,()=> console.log('listening on port 5000'))