const router = require('express').Router();
const userController = require('../controller/userController')


router.get('/',userController.getUserData);


module.exports = router;