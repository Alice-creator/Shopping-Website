const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')
router.get('/profile', userController.getInfo)
module.exports = router