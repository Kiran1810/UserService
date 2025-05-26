const express = require('express');

const { UserController } = require('../../controllers');
const{UserMiddlewares} = require('../../middlewares');
const router = express.Router();

router.post('/SignUp',UserMiddlewares.validateAuthRequest,
UserController.SignUp);
router.post('/SignIn',UserMiddlewares.validateAuthRequest,
UserController.Signin);
module.exports = router;