var appRouter = require("express").Router();
var adminHandler = require('../../Services/userAppServices/userAppService');
const authHandler = require('../../middleware/verifyToken');


//Save device token 
appRouter.post('/updateDeviceToken', (req, res) => {
    adminHandler.updateDeviceToken(req.body, (data) => {
        res.send(data)
    })
})


module.exports = appRouter