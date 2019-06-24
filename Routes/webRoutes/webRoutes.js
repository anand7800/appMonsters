const webRouter = require('express').Router();
const webHandler = require('../../Services/webService/webServicesPanel');
const commonFuntion = require('../../commonFile/commonFunction');
const authHandler = require('../../middleware/verifyToken');


/* view sales of product main page of vendor */
webRouter.post('/dashboardGraph', (req, res) => {
    webHandler.dashboardGraph(req.body,req.headers, (data) => {
        res.send(data)
    })
})
//most viwer in app and web as well
webRouter.get('/viewerGraph', (req, res) => {
    webHandler.viewerGraph(req.query,req.headers, (data) => {
        res.send(data)
    })
})

/* filter on website while click caegory product */
webRouter.post('/filterWeb', (req, res) => {
    webHandler.filterWeb(req.body, (data) => {
        res.send(data)
    })
})

module.exports = webRouter;