const webRouter = require('express').Router();
const webHandler = require('../../Services/webService/webServicesPanel');
const commonFuntion = require('../../commonFile/commonFunction');
const authHandler = require('../../middleware/verifyToken');


//!signUp
webRouter.post('/dashboardGraph', (req, res) => {
    webHandler.dashboardGraph(req.body,req.headers, (data) => {
        res.send(data)
    })
})



module.exports = webRouter;