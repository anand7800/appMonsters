var appRouter = require("express").Router();
var adminHandler = require('../../Services/userAppServices/userAppService');
const authHandler = require('../../middleware/verifyToken');


//Save device token 
appRouter.post('/updateDeviceToken', (req, res) => {
    adminHandler.updateDeviceToken(req.body, (data) => {
        res.send(data)
    })
})

appRouter.get('/getCulture', (req, res) => {
    adminHandler.getCulture(req.body, (data) => {
        res.send(data)
    })
})
appRouter.get('/getTeam', (req, res) => {
    adminHandler.getTeam(req.body, (data) => {
        res.send(data)
    })
})
appRouter.get('/caseStudy', (req, res) => {
        adminHandler.getCaseStudy(req.body, (data) => {
            res.send(data)
        })
    })
    //routes useraapp
appRouter.post('/portfolio', (req, res) => {
    adminHandler.portfolio(req.body, (data) => {
        res.send(data)
    })
})

appRouter.get('/getPortfolio', (req, res) => {
    adminHandler.getPortfolio(req.body, (data) => {
        res.send(data)
    })
})


appRouter.get('/getNotification', (req, res) => {
    adminHandler.getNotification(req.body, (data) => {
        res.send(data)
    })
})

appRouter.get('/getVideo', (req, res) => {
    adminHandler.getVideo(req.body, (data) => {
        res.send(data)
    })
})
module.exports = appRouter