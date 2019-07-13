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
adminRouter.post('/updateAboutUs', (req, res) => {
    adminHandler.updateAboutUs(req.body, (data) => {
        res.send(data)
    })
})

adminRouter.post('/pushNotification', (req, res) => {
    adminHandler.pushNotification(req.body, (data) => {
        res.send(data)
    })
})
adminRouter.post('/addCaseStudy', (req, res) => {
    adminHandler.addCaseStudy(req, (data) => {
        res.send(data)
    })
})
adminRouter.post('/editCaseStudy', (req, res) => {
    adminHandler.editCaseStudy(req, (data) => {
        res.send(data)
    })
})
adminRouter.post('/deleteCaseStudy', (req, res) => {
    adminHandler.deleteCaseStudy(req.body, (data) => {
        res.send(data)
    })
})

adminRouter.post('/addCulture', (req, res) => {
    adminHandler.addculture(req, (data) => {
        res.send(data)
    })
})
adminRouter.post('/editCulture', (req, res) => {
    adminHandler.editCulture(req, (data) => {
        res.send(data)
    })
})

adminRouter.post('/deleteCulture', (req, res) => {
    adminHandler.deleteCulture(req.body, (data) => {
        res.send(data)
    })
})

adminRouter.post('/addTeam', (req, res) => {
    adminHandler.addTeam(req, (data) => {
        res.send(data)
    })
})

adminRouter.post('/editTeam', (req, res) => {
    adminHandler.editTeam(req, (data) => {
        res.send(data)
    })
})
adminRouter.post('/deleteTeam', (req, res) => {
    adminHandler.deleteTeam(req.body, (data) => {
        res.send(data)
    })
})



adminRouter.post('/addTreading', (req, res) => {
    adminHandler.addTreading(req, (data) => {
        res.send(data)
    })
})

adminRouter.post('/editTreading', (req, res) => {
    adminHandler.editTreading(req, (data) => {
        res.send(data)
    })
})
adminRouter.post('/deleteTreading', (req, res) => {
    adminHandler.deleteTreading(req.body, (data) => {
        res.send(data)
    })
})


adminRouter.post('/addUpcoming', (req, res) => {
    adminHandler.addUpcoming(req, (data) => {
        res.send(data)
    })
})

adminRouter.post('/editTreading', (req, res) => {
    adminHandler.editTreading(req, (data) => {
        res.send(data)
    })
})
adminRouter.post('/deleteUpcoming', (req, res) => {
    adminHandler.deleteUpcoming(req.body, (data) => {
        res.send(data)
    })
})

adminRouter.post('/createNotification', (req, res) => {
    adminHandler.createNotification(req.body, (data) => {
        res.send(data)
    })
})

/* anand api */
adminRouter.post('/adminLogin', (req, res) => {
    adminHandler.adminLogin(req.body, (data) => {
        res.send(data)
    })
})

adminRouter.post('/addPortfolio', (req, res) => {
    adminHandler.addPortfolio(req, (data) => {
        res.send(data)
    })
})
adminRouter.post('/updatePortfolio', (req, res) => {
    adminHandler.updatePortfolio(req, (data) => {
        res.send(data)
    })
})
adminRouter.post('/deletePortfolio', (req, res) => {
    adminHandler.deletePortfolio(req.body, (data) => {
        res.send(data)
    })
})
adminRouter.get('/getPortfolio', (req, res) => {
        adminHandler.getPortfolio(req.body, (data) => {
            res.send(data)
        })
    })
    /* anand api */

module.exports = adminRouter;