const express = require("express");
const apiRoutes = express.Router();
const authentication = require("../middlewares/authentication");




const userRoutes = require("./user");
const rolRoutes = require("./rol");
const taskRoutes = require("./task");

apiRoutes.use('/user', authentication, userRoutes);
apiRoutes.use('/rol', authentication, rolRoutes);
apiRoutes.use('/task', authentication, taskRoutes);

module.exports = apiRoutes;