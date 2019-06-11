const webRouter = require('express').Router();
const webHandler = require('../../Services/webService/webServicesPanel');
const commonFuntion = require('../../commonFile/commonFunction');
const authHandler = require('../../middleware/verifyToken');


//!signUp
webRouter.post('/dashboardGraph', (req, res) => {
    webHandler.signup(req.body, (data) => {
        res.send(data)
    })
})