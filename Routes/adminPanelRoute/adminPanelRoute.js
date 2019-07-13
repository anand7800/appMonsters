var adminRouter = require("express").Router()
var adminHandler = require('../../Services/adminPanelServices/adminPanelService')
const authHandler = require('../../middleware/verifyToken')


// upload image by base64
adminRouter.post('/addAboutUs', (req, res) => {
    adminHandler.addAboutUs(req.body, (data) => {
        res.send(data)
    })
})
adminRouter.get('/getAboutUs', (req, res) => {
    adminHandler.getAboutUs(req.query, (data) => {
        res.send(data)
    })
})
//admin login adminPanelRoutes
adminRouter.post('/adminLogin', (req, res) => {
    adminHandler.adminLogin(req.body, (data) => {
        res.send(data)
    })
})

module.exports = adminRouter