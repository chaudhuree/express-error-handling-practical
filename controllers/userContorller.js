const ErrorHandler = require('../utils/errorHandelers')
const User = require('../model/user')

const userController = async (req, res, next) => {
  try {
    // const user = await User.findOne({ email: "chaudhuree@gmail.com" });
    // if (user) {
    //   return next(new ErrorHandler(401, 'user already exists'))
    // }
    await User.create({ name: "sohan", email: "sohan@gmail.com" })

    res.status(200).json({ success: true, message: 'user created successfully' })
  } catch (error) {
    next(new ErrorHandler(500,error.message))
  }

}

module.exports = userController