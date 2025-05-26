const express = require('express');
//const { AuthRequestMiddlewares } = require('../../middlewares');
const { InfoController } = require('../../controllers');
const UserRoutes=require('./user-routes');


const router = express.Router();
router.use('/Users',UserRoutes)




router.get('/info', InfoController.info);

module.exports = router;