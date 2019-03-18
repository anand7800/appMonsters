const userRouter = require('express').Router();
const userHandler = require('../../Services/userServices/userServicesPanel');
const commonFuntion = require('../../commonFile/commonFunction');
const authHandler = require('../../middleware/verifyToken');


//!signUp
userRouter.post('/signUp', (req, res) => {
    userHandler.signup(req.body, (data) => {
        res.send(data)
    })
})

//!login
userRouter.post('/login', (req, res) => {
    userHandler.login(req.body, (data) => {
        res.send(data)
    })
})

//!socialLogin
userRouter.post('/socialLogin', (req, res) => {
    userHandler.socialLogin(req.body, (data) => {
        res.send(data)
    })
})

//!checkSocialProfile
userRouter.post('/checkSocialProfile', (req, res) => {
    userHandler.checkSocialProfile(req.body, (data) => {
        res.send(data)
    })
})

//!updateDeviceToken
userRouter.post('/updateDeviceToken', authHandler.verifyToken, (req, res) => {
    userHandler.updateDeviceToken(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!addAddress
userRouter.post('/addAddress', authHandler.verifyToken, (req, res) => {
    userHandler.addAddress(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!getOtp
userRouter.post('/getOtp', (req, res) => {
    userHandler.getOtp(req.body, (data) => {
        res.send(data)
    })
})

//!forgotPassword
userRouter.post('/forgotPassword', (req, res) => {
    userHandler.forgotPassword(req.body, (data) => {
        res.send(data)
    })
})

//! verifyForgotLink
userRouter.get('/verifyForgotLink', (req, res) => {
    userHandler.verifyForgotLink(req.query, (data) => {
        if (data.statusCode == 200) {
            console.log(data.statusCode)
            var userData = {
                status: "success",
                msg: "Please update your password here.",
                email: data.email
            }
        }
        else {
            var userData = {
                status: "failure",
                msg: data.statusMessage
            }
        }
        res.render('forgot_password', userData);
    })
})

//!addPayment
userRouter.post('/addPayment', authHandler.verifyToken, (req, res) => {
    userHandler.addPaymentMethod(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!get address list
userRouter.get('/getAddressList', authHandler.verifyToken, (req, res) => {
    userHandler.getAddressList(req, (data) => {
        res.send(data)
    })
})

//!getPaymentMethodList
userRouter.get('/getPaymentMethodList', authHandler.verifyToken, (req, res) => {
    userHandler.getPaymentMethodList(req, (data) => {
        res.send(data)
    })
})
//!resetPassword
userRouter.post('/resetPassword', (req, res) => {
    userHandler.resetPassword(req.query, req.body, (data) => {
        res.send(data)
    })
})

//!addPayment
userRouter.post('/updateForgotPassword', (req, res) => {
    userHandler.updateForgotPassword(req.body, req.headers, (data) => {
        if (data.statusCode == 200) {
            res.end("200");
        } else if (data.statusCode == 404) {
            res.end("404");
        }
    })
})

//!checkEmail
userRouter.post('/checkEmail', (req, res) => {
    userHandler.checkEmail(req.body, (data) => {
        res.send(data)
    })
})
//!checkEmail
userRouter.post('/changePassword', authHandler.verifyToken, (req, res) => {
    userHandler.changePassword(req.body, req.headers, (data) => {
        res.send(data)
    })
})
//!editProfile
userRouter.post('/editProfile', authHandler.verifyToken, (req, res) => {
    userHandler.editProfile(req.body, req.headers, (data) => {
        res.send(data)
    })
})
//!reset
userRouter.post('/reset', (req, res) => {
    userHandler.reset(req.body, (data) => {
        res.send(data)
    })
})
//!verifyLink
userRouter.post('/verifyLink', (req, res) => {
    userHandler.verifyLink(req.body, (data) => {
        res.send(data)
    })
})

//!updateImage
userRouter.post('/updateProfile', authHandler.verifyToken, (req, res) => {
    userHandler.updateProfile(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!getUserInfo
userRouter.post('/getUserInfo', authHandler.verifyToken, (req, res) => {
    userHandler.getUserInfo(req.body, req.headers, (data) => {
        res.send(data)
    })
})

userRouter.post('/editPaymentMethod', (req, res) => {
    userHandler.editPaymentMethod(req.body, req.headers, (data) => {
        res.send(data)
    })
})
userRouter.post('/deletePayment', (req, res) => {
    userHandler.deletePayment(req.body, req.headers, (data) => {
        res.send(data)
    })
})

userRouter.post('/editAddress', (req, res) => {
    userHandler.editAddress(req.body, req.headers, (data) => {
        res.send(data)
    })
})

userRouter.post('/deleteAddress', (req, res) => {
    userHandler.deleteAddress(req.body, req.headers, (data) => {
        res.send(data)
    })
})
// decodeToken
userRouter.post('/decodeToken', (req, res) => {
    userHandler.decodeToken(req.body, (data) => {
        res.send(data)
    })
})
module.exports = userRouter