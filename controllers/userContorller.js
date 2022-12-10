const ErrorHandler = require('../utils/errorHandelers')

const userController = (req, res, next) => {
  const isExist = true
  if (isExist) {
    return next(new ErrorHandler(401, 'user already exists'))
  }

  res.status(200).json({ success: true, message: 'user created successfully' })

}

module.exports = userController