const express = require('express')
const router= express.Router()
const userController = require('../controllers/userContorller')

router.get('/',userController )

module.exports=router