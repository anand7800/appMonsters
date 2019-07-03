const webRouter = require('express').Router();
const webHandler = require('../../Services/webService/webServicesPanel');
const commonFuntion = require('../../commonFile/commonFunction');
const authHandler = require('../../middleware/verifyToken');


/* view sales of product main page of vendor */
webRouter.post('/dashboardGraph', (req, res) => {
        webHandler.dashboardGraph(req.body, req.headers, (data) => {
            res.send(data)
        })
    })
    //most viwer in app and web as well
webRouter.get('/viewerGraph', (req, res) => {
    webHandler.viewerGraph(req.query, req.headers, (data) => {
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
webRouter.post('/checkoutOrder', authHandler.verifyToken, (req, res) => {
    webHandler.checkoutOrder(req.body, req.headers, (data) => {
        res.send(data)
    })
})
webRouter.post('/verifyPayment', authHandler.verifyToken, (req, res) => {
    webHandler.verifyPayment(req.body, req.headers, (data) => {
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

//deleteCart  
webRouter.post('/deleteCart', authHandler.verifyToken, (req, res) => {
        webHandler.deleteCart(req.body, req.headers, (data) => {
            res.send(data)
        })
    })
    // api for increase stock in list of add to cart
webRouter.post('/increaseStockOnCartList', authHandler.verifyToken, (req, res) => {
    webHandler.increaseStockOnCartList(req.body, req.headers, (data) => {
        res.send(data)
    })
})

// addTowishList  
webRouter.post('/addToWishList', authHandler.verifyToken, (req, res) => {
        webHandler.addToWishList(req.body, req.headers, (data) => {
            res.send(data)
        })
    })
    //deleteWishItem  
webRouter.post('/deleteWishItem', authHandler.verifyToken, (req, res) => {
    webHandler.deleteWishItem(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//updateImage
webRouter.post('/updateProfile', authHandler.verifyToken, (req, res) => {
    webHandler.updateProfile(req.body, req.headers, (data) => {
        res.send(data)
    })
})


//!forgotPassword
webRouter.post('/forgotPassword', (req, res) => {
    webHandler.forgotPassword(req.body, (data) => {
        res.send(data)
    })
})
module.exports = webRouter;