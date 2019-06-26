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
/* checkout for website  */
webRouter.post('/checkoutOrder',authHandler.verifyToken, (req, res) => {
    webHandler.checkoutOrder(req.body,req.headers, (data) => {
        res.send(data)
    })
})
webRouter.post('/verifyPayment',authHandler.verifyToken, (req, res) => {
    webHandler.verifyPayment(req.body,req.headers, (data) => {
        res.send(data)
    })
})
webRouter.post('/placeOrder', authHandler.verifyToken, (req, res) => {
    webHandler.placeOrder(req.body, req.headers, (data) => {
        res.send(data)
    })
})
webRouter.post('/showFilter', (req, res) => {
    webHandler.showFilter(req.body, req.headers, (data) => {
        res.send(data)
    })
})
module.exports = webRouter;