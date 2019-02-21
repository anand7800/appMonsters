const async = require('async')
const userModel = require('../../Models/userModel/userPanelModel')
let util = require('../../Utilities/util')
const commonFunction = require('../../commonFile/commonFunction')
log = console.log
const mongoose = require('mongoose')
//!signup 
signup = (data, callback) => {
    obj = data
    if (!obj) {
        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        userModel.find({ email: obj.email }, (err, found) => {
            console.log(err, found)
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                return
            }
            else if (found.length > 0) {
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.USER_EXISTS[data.lang] })
                return
            }
            else {
                var user = new userModel({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    password: util.encryptData(data.password),
                    email: data.email,
                    phone: data.phone,
                    countryCode: data.countryCode,
                    userType: data.userType ? data.userType : "user"
                })
                user.save((err, succ) => {
                    log("ksdf")

                    log(err, succ)
                    if (err) {
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                        return
                    }
                    else if (!succ) {
                        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.USER_NOT_FOUND[data.lang] })
                        return
                    }
                    else {
                        var result = {
                            "_id": succ._id,
                            "firstName": succ.firstName,
                            "lastName": succ.lastName,
                            "email": succ.email,
                            "image": succ.image,
                            "addressAdded": succ.isAddressAdded,
                            "phone": succ.phone,
                            "countryCode": succ.countryCode,
                            "paymentAdded": succ.paymentAdded,
                            "address": succ.address,
                            "paymentMethod": succ.paymentMethod,

                        }


                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.REGISTRATION_DONE[data.lang], "result": result, "accessToken": commonFunction.jwtEncode(succ._id) })
                        return
                    }
                })
            }
        })
    }
}
//!login
login = (data, callback) => {
    log("login api is hitted", data)
    obj = data
    var update = {
        lastLogin: Date.now()
    };
    var query = { email: obj.email, userType: data.userType }
    if (!data) {
        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        userModel.findOneAndUpdate(query, update).select('firstName paymentAdded isAddressAdded password  lastName email phone address image paymentMethod isBussinessAdded countryCode').exec((err, succ) => {
            // console.log(err, succ)
            console.log('2222222222222222222', succ)
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                return
            }
            else if (succ == null) {
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.USER_NOT_FOUND[data.lang] })
                return
            }
            else {
                var hash = util.encryptData(data.password)
                if (succ.password == hash) {
                    result = {
                        "_id": succ._id,
                        "firstName": succ.firstName,
                        "lastName": succ.lastName,
                        "email": succ.email,
                        "image": succ.image,
                        "addressAdded": succ.isAddressAdded,
                        "phone": succ.phone,
                        "countryCode": succ.countryCode ? succ.countryCode : "",
                        "paymentAdded": succ.paymentAdded,
                        "address": succ.address,
                        "paymentMethod": succ.paymentMethod,
                        // "countryCode": succ.countryCode,
                        "isBussinessAdded": succ.isBussinessAdded
                    }
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.LOGIN_SUCCESS[data.lang], "result": result, "accessToken": commonFunction.jwtEncode(succ._id) })
                    // commonFunction.android_notification("fdUDE4j000M:APA91bEkgqRGHyIqHEYhhpbYA3n2mxYohNh1RIOEUvQRlBFp1SCYUS6cwOTtAdNZ2RbwwgL4CcYyzLDCz0Geh6iVjeOEioKKq0JgRgKJB9GAEilLX5pLAo1NUly8ofZnIVQYMBuIwXcR", "msg", "chatType", "title", "sendorId", "senderName", "type")
                    if (succ.deviceType == 2) {
                        commonFunction.IOS_NOTIFICATION(succ.deviceToken, "Login Successfully", "Login", "WAKI", "sendorId", "senderName", "Login")
                    }
                    else if (succ.deviceType == 1) {
                        commonFunction.android_notification(succ.deviceToken, "Login Successfully", "Login", "WAKI", "sendorId", "senderName", "Login")
                    }
                }
                else {
                    callback({ "statusCode": util.statusCode.BAD_REQUEST, "statusMessage": util.statusMessage.INCORRECT_CREDENTIALS[data.lang] })
                }
            }
        })
    }
}

//!social login
socialLogin = (data, callback) => {
    console.log('request', data)
    obj = data
    query = {
        'social.socialId': data.socialId,
        "social.socialType": data.socialType,
        "firstName": data.firstName,
        "lastName": data.lastName,
        "email": data.email,
        "phone": data.phone,
        "countryCode": data.countryCode
    }
    var update = {
        lastLogin: Date.now()
    };
    if (!obj) {
        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        userModel.find({ email: data.email }, (err, found) => {
            console.log(err, found)
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                return
            }
            else if (found.length > 0) {
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.USER_EXISTS[data.lang] })
                return
            }
            else {
                var user = new userModel(query)
                user.save((err, succ) => {
                    log(err, succ)
                    if (err) {
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[obj.lang], result: err })
                        return
                    }
                    else if (!succ) {
                        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_UPDATE[obj.lang] })
                        return
                    }
                    else {
                        result = {
                            "_id": succ._id,
                            "firstName": succ.firstName,
                            "lastName": succ.lastName,
                            "email": succ.email,
                            "image": succ.image,
                            "addressAdded": succ.isAddressAdded,
                            "phone": succ.phone,
                            "countryCode": succ.countryCode,
                            "paymentAdded": succ.paymentAdded,
                            "address": succ.address,
                            "paymentMethod": succ.paymentMethod

                        }
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.LOGIN_SUCCESS[obj.lang], "result": result, "accessToken": commonFunction.jwtEncode(succ.id) })
                        return
                    }
                })
            }
        })
    }
}
//!check social login
checkSocialProfile = (obj, callback) => {
    log(obj)
    if (!obj) {
        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        let query = {
            "social.socialId": obj.socialId
        }
        userModel.findOne(query, (err, succ) => {
            log(err, succ)
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[obj.lang] })
                return
            }
            else if (!succ) {
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.USER_NOT_FOUND[obj.lang] })
                return
            }
            else {
                result = {
                    "_id": succ._id,
                    "firstName": succ.firstName,
                    "lastName": succ.lastName,
                    "email": succ.email,
                    "image": succ.image,
                    "addressAdded": succ.isAddressAdded,
                    "phone": succ.phone,
                    "countryCode": succ.countryCode,
                    "paymentAdded": succ.paymentAdded,
                    "address": succ.address,
                    "paymentMethod": succ.paymentMethod

                }
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.LOGIN_SUCCESS[obj.lang], "result": result, "accessToken": commonFunction.jwtEncode(succ._id) })
                return
            }

        })
    }
}

//!update device token
updateDeviceToken = (data, headers, callback) => {
    log(data)
    obj = data
    query = {}
    commonFunction.jwtDecode(headers.accesstoken, (err, token) => {
        query = {
            _id: token
        }
    })
    if (!obj) {
        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        userModel.findOneAndUpdate(query, { $set: { deviceToken: data.deviceToken, deviceType: data.deviceType } }, { new: true }, (err, result) => {
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[obj.lang] })
                return
            }
            else if (!result) {
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.USER_NOT_FOUND[obj.lang] })
                return
            }
            else {

                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.DEVICE_tOKEN_UPDATE[obj.lang] })
                return
            }

        })
    }
}

//!add address of user
addAddress = (data, headers, callback) => {
    // log(data,headers)
    update = {
        $push: { address: data },
        isAddressAdded: true
    }
    if (!data) {
        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        var query = {}
        commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
            log(err, result)
            query = { _id: result }
        })
        userModel.findOneAndUpdate(query, update, { new: true }, (err, succ) => {
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                return
            }
            else if (!succ) {
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.USER_NOT_FOUND[data.lang] })
                return
            }
            else {
                result = {
                    "_id": succ._id,
                    "firstName": succ.firstName,
                    "lastName": succ.lastName,
                    "email": succ.email,
                    "image": succ.image,
                    "addressAdded": succ.isAddressAdded,
                    "phone": succ.phone,
                    "paymentAdded": succ.paymentAdded,
                    "address": succ.address,
                    "paymentMethod": succ.paymentMethod,
                    "countryCode": succ.countryCode
                }
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.ADDRESS_ADD[data.lang], "result": result, "accessToken": commonFunction.jwtEncode(succ._id) })
                return
            }
        })
    }
}

//! send otp
getOtp = (data, callback) => {
    log(data)
    if (!data) {
        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        console.log(typeof commonFunction.getOTP())
        var otp = commonFunction.getOTP()
        commonFunction.sendSMS(otp, data.phone, async (err, sent) => {
            console.log(err, sent)
            if (err) {
                callback({ "statusCode": util.statusCode.BAD_REQUEST, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
            }
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.InvalidPhoneNuber[data.lang], 'result': otp })
            }
        })
        // callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.OTP[data.lang], 'result': "123456" })
    }
}
//! forgot Password of user
forgotPassword = (data, callback) => {
    console.log("---------->>>", data)
    obj = data
    if (!obj) {
        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        userModel.find({ email: obj.email }, (err, found) => {
            // console.log(err, found)
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                return
            }
            else if (!found.length > 0) {
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.EMAIL_NOT_REGISTERED[data.lang] })
                return
            }
            else {
                query = {
                    email: data.email
                }
                var forgotToken = commonFunction.generateToken();
                var update = {
                    "forgotToken": forgotToken
                }
                userModel.findOneAndUpdate(query, update, { new: true }, (err, succ) => {
                    if (err) {
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                    }
                })
                commonFunction.sendMail(data.email, "FORGOT PASSWORD LINK", forgotToken, (err, res) => {
                    log("WWWWWWWw", err, res)
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.EMAIL_SENT[data.lang] })
                });

            }
        })
    }
}

//! verifyForgotLink
verifyForgotLink = (data, callback) => {
    log("######", data)
    var criteria = {
        // email: data.email,
        forgotToken: data.forgotToken

    }
    userModel.find(criteria, (err, result) => {
        log(err, "ambuj")
        log(result, "pppp")
        if (result) {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "email": data.email })
        }
        else {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        }
    })
}

//! update forgot password
updateForgotPassword = (data, headers, callback) => {
    console.log(data, "f2323232323f")
    obj = data
    query = {
        forgotToken: data.email
    }
    update = {
        password: util.encryptData(data.password),
        forgotToken: null
    }
    // commonFunction.jwtDecode(headers.accesstoken, (err, token) => {
    //     query = {
    //         _id: token
    //     }
    // })
    console.log(obj, "eeee")
    if (!obj) {
        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        userModel.findOneAndUpdate(query, update, { new: true }, (err, result) => {
            log(result, "aaaaaa")
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[obj.lang] })
                return
            }
            /*  else if (!result) {
                 callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.USER_NOT_FOUND[obj.lang] })
                 return
             } */
            else if (result) {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PASSWORD_UPDATED.en })
                return
            }
            else {
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": "links is expired" })
            }

        })
    }
}

//!add payment method of user
addPaymentMethod = (data, headers, callback) => {
    update = {
        $push: { paymentMethod: data },
        paymentAdded: true
    }
    if (!data) {
        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        var query = {}
        commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
            log(err, result)
            query = { _id: result }
        })
        userModel.findOneAndUpdate(query, update, { new: true }, (err, succ) => {
            log("asklfklasjfasdfjasdl", err, succ)
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                return
            }
            else if (!succ) {
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.USER_NOT_FOUND[data.lang] })
                return
            }
            else {
                result = {
                    "_id": succ._id,
                    "firstName": succ.firstName,
                    "lastName": succ.lastName,
                    "email": succ.email,
                    "image": succ.image,
                    "addressAdded": succ.isAddressAdded,
                    "phone": succ.phone,
                    "countryCode": succ.countryCode,
                    "paymentAdded": succ.paymentAdded,
                    "address": succ.address,
                    "paymentMethod": succ.paymentMethod
                }
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PAYMENT_ADD[data.lang], "result": result, "accessToken": commonFunction.jwtEncode(succ._id) })
                return
            }
        })
    }
}
//!getAddressList
getAddressList = (req, callback) => {
    log("getAddressList")

    var userId
    commonFunction.jwtDecode(req.headers.accesstoken, (err, jwtId) => {

        if (jwtId) {
            userId = jwtId
        }
        else {
            throw err
        }
    })
    userModel.findOne({ _id: userId }, (err, result) => {
        log(err, result)
        if (result) {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.getAddressSuccessfully[req.query.lang], "result": result.address, "accessToken": commonFunction.jwtEncode(result._id) })
        }
        else {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[req.query.lang], "error": err })
        }
    })
}

//!getPaymentMethodList
getPaymentMethodList = (req, callback) => {
    log("getPaymentMethodList")
    var userId
    commonFunction.jwtDecode(req.headers.accesstoken, (err, jwtId) => {
        if (jwtId) {
            userId = jwtId
        }
        else {
            throw err
        }
    })
    userModel.findOne({ _id: userId }, (err, result) => {
        log(err, result)
        if (result) {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.GET_PAYMENT_LIST[req.query.lang], "result": result.paymentMethod, "accessToken": commonFunction.jwtEncode(result._id) })
        }
        else {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[req.query.lang], "error": err })
        }
    })
}
//!resetPassword
resetPassword = (query, body, callback) => {
    log("reset password", query, body)
    var userId
    update = {
        $set: {
            password: util.encryptData(body.password)
        }
    }
    commonFunction.jwtDecode(query.userId, (err, jwtId) => {
        log("jwt", err, jwtId)
        if (jwtId) {
            userId = jwtId
        }
        else {
            throw err
        }
    })
    log("@@@@", userId)
    userModel.findOneAndUpdate({ email: userId }, update, { new: true }, (err, success) => {
        console.log("fausjkhdfasdf", err, success)
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[query.lang], "error": err })
        }
        else if (!success) {
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[query.lang] })
        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PASSWORD_CHANGED[query.lang], "result": success })
        }
    })
}

//!email exist 
checkEmail = (data, callback) => {
    console.log("api is called", data)
    userModel.findOne({ email: data.email, userType: data.userType }, (err, found) => {
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        }
        else if (!found) {
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang] })
        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.USER_EXISTS[data.lang] })
        }
    })
}
//!changepassword
changePassword = (data, headers, callback) => {
    console.log("change password screen", data, headers)
    async.waterfall([
        function (cb) {
            commonFunction.jwtDecode(headers.accesstoken, (err, jwtId) => {
                console.log(err, jwtId)
                if (jwtId) {
                    cb(null, jwtId)
                } else {
                    cb(null, err)
                }
            })
        },
        function (jwtId, cb) {
            console.log("################", jwtId)
            if (jwtId == undefined) {
                callback({ "statusCode": util.statusCode.BAD_REQUEST, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
                return
            }
            else {
                userModel.findOne({ _id: mongoose.Types.ObjectId(jwtId) }).exec((err, result) => {
                    if (err) {
                        cb(null)
                    }
                    else if (result.password) {
                        cb(null, jwtId, result.password)
                    }
                    else {
                        callback({ "statusCode": util.statusCode.BAD_REQUEST, "statusMessage": util.statusMessage.USER_LOGIN_SOCIAL[data.lang] })
                        return
                    }
                })
            }
        },
        function (jwtId, password, cb) {
            var oldpassword = util.encryptData(data.oldPassword)
            if (oldpassword == password) {
                cb(null, jwtId)
            }
            else {
                callback({ "statusCode": util.statusCode.BAD_REQUEST, "statusMessage": util.statusMessage.INCORRECT_OLD_PASSWORD[data.lang] })
                return
            }
        },
        function (jwtId, cb) {
            console.log("########", jwtId, data.newPassword)
            var newpassword = util.encryptData(data.newPassword)
            console.log("33333333333333333333")
            userModel.findOneAndUpdate({ _id: mongoose.Types.ObjectId(jwtId) }, { $set: { password: newpassword } }, { new: true }).exec((err, changePassword) => {
                // console.log("err,password", err, changePassword)
                if (err) cb(null)
                else cb(null, changePassword)
            })
        }
    ], (err, result) => {
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PASSWORD_CHANGED[data.lang] })
        }
    })
}

//!edit profile
editProfile = (data, headers, callback) => {
    console.log("edit profile", data, headers)
    if (!data.image && !data.firstName) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    async.waterfall([
        function (cb) {
            commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
                console.log(err, result)
                if (err)
                    callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                else cb(null, result)
            })
        }
    ], (err, result) => {

        let query = {
            _id: result
        }
        let update = {
            $set: {
                firstName: data.firstName,
                // lastName: data.lastName,
                image: data.image
            }
        }
        userModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
            console.log(err, result)
        })
    })
}
//!reset api new for angular

reset = (data, callback) => {
    console.log(data)
    query = {
        email: data.email
    }
    update = {
        password: util.encryptData(data.newPassword),
        forgotToken: null
    }
    userModel.findOneAndUpdate(query, update, { new: true }, (err, reset) => {
        // console.log(err,reset)
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PASSWORD_CHANGED[data.lang] })
        }
    })
}
//! api for angular verify token
verifyLink = (data, callback) => {
    log("######", data)
    var criteria = {
        $and: [{
            email: data.email
        }, {
            forgotToken: data.forgotToken
        }]
    }
    userModel.find(criteria, (err, result) => {
        log(err, "ambuj")
        log(result, "pppp")
        if (result.length > 0) {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "email": data.email })
        }
        else {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
        }
    })
}

//! UPDATE IMAGE
updateProfile = (data, headers, callback) => {
    console.log("api hitted ")
    var userId
    commonFunction.jwtDecode(headers.accesstoken, (err, decodeId) => {
        // console.log("^^^^", err, decodeId)
        if (err) throw err
        else {
            userId = decodeId
        }
    })

    async.parallel({
        uploadImage: (cb) => {
            commonFunction.uploadImg(data.image, (err, image) => {
                console.log(err, image)
                if (err) cb(null)
                else if (!image) cb(null)
                else cb(null, image)
            })
        },
        getUser: (cb) => {
            userModel.findOne({ _id: userId }).exec((err, userinfo) => {
                // console.log(err, userinfo)
                if (err) cb(null)
                else if (!userinfo) cb(null)
                else cb(null, userinfo)
            })
        }
    }, (err, response) => {
        console.log("######", err, response)
        if (response.uploadImage) {
            console.log('33')
        }
        let query = {
            _id: userId
        }
        let update = {
            $set: {
                image: response.uploadImage ? response.uploadImage : response.getUser.image,
                firstName: data.firstName ? data.firstName : response.getuser.firstName
            }
        }
        console.log('@@@@@@@@@@@@@@@2', query, update)
        userModel.findOneAndUpdate(query, update, { new: true }).exec((err, success) => {

            console.log(err, success)

            if (success) {
                result = {
                    "_id": success._id,
                    "firstName": success.firstName,
                    "lastName": success.lastName,
                    "email": success.email,
                    "image": success.image,
                    "addressAdded": success.isAddressAdded,
                    "phone": success.phone,
                    "countryCode": success.countryCode,
                    "paymentAdded": success.paymentAdded,
                    "address": success.address,
                    "paymentMethod": success.paymentMethod,
                    "countryCode": success.countryCode,
                    "isBussinessAdded": success.isBussinessAdded
                }
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PROFILE_UPDATE[data.lang], "result": result, "accessToken": commonFunction.jwtEncode(success._id) })
            } else {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
            }
        })
    })
}

getUserInfo = (data, headers, callback) => {
    // console.log("incoming data", data.firstName)
    async.waterfall([
        function (cb) {
            commonFunction.jwtDecode(headers.accesstoken, (err, decodeId) => {
                if (err || !decodeId)
                    cb(null)
                else
                    cb(null, decodeId)

            })
        },
        function (decodeId, cb) {

            userModel.findOne({ _id: decodeId }).exec((err, success) => {
                if (err || !success)
                    cb(null)
                else
                    cb(null, success)
            })
        }

    ], (err, response) => {

        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
        else
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': response })
    })
}

/* ***************************************
******************************************
*****************editpaymentmethod********
******************************************/

editPaymentMethod = (data, headers, callback) => {
    // console.log('------->', data)
    // let userId = '5c657188f7f89745e14fda4a'
    if (!data.paymentId || !headers.accessoken) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang], })
        return
    }

    var userId
    commonFunction.jwtDecode(headers.accesstoken, (err, decodeId) => {
        // console.log("^^^^", err, decodeId)
        if (err) throw err
        else {
            userId = decodeId
        }
    })
    let query = {
        $and: [
            { _id: userId, },
            { 'paymentMethod._id': data.paymentId }
        ]

    }


    async.waterfall([

        function (cb) {
            userModel.findOne({ _id: userId, 'paymentMethod._id': data.paymentId }, { 'paymentMethod.$': 1 }).exec((err, result) => {
                // console.log(err, result)
                if (err || !result) cb(null)
                else cb(null, result)
            })
        },
        function (result, cb) {
            console.log('===>>>', result.paymentMethod[0].expireDate)
            let update = {
                $set: {
                    'paymentMethod.$.status': data.status ? data.status : result.paymentMethod[0].status,
                    'paymentMethod.$.expireDate': data.expireDate ? data.expireDate : result.paymentMethod[0].expireDate,
                    'paymentMethod.$.cvv': data.cvv ? data.cvv : result.paymentMethod[0].cvv,
                    'paymentMethod.$.cardType': data.cardType ? data.cardType : result.paymentMethod[0].cardType,
                    'paymentMethod.$.cardNumber': data.cardNumber ? data.cardNumber : result.paymentMethod[0].cardNumber,
                    'paymentMethod.$.cardHolderName': data.cardHolderName ? data.cardHolderName : result.paymentMethod[0].cardHolderName,

                }
            }
            userModel.findOneAndUpdate(query, update, { new: true }).exec((err, update) => {
                // console.log(err, update)
                if (err || !update) cb(null)
                else cb(null, update)

            })
        }

    ], (err, response) => {
        // console.log("resposne ", err, response)
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.EDIT_PAYMENT[data.lang]})
    })
}


deletePayment = (data, headers, callback) => {
    console.log(data)
    
    if (!data.paymentId || !headers.accessoken) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang], })
        return
    }

    // var userId='5c657188f7f89745e14fda4a'
    let userId

    commonFunction.jwtDecode(headers.accesstoken, (err, decodeId) => {
        if (err) throw err
        else {
            userId = decodeId
        }
    })
    let query = {
        $and: [ 
            { _id: userId, },
            { 'paymentMethod._id': data.paymentId }
        ]

    }


    async.waterfall([

        function (cb) {
            userModel.findOne({ _id: userId, 'paymentMethod._id': data.paymentId }, { 'paymentMethod.$': 1 }).exec((err, result) => {
                // console.log(err, result)
                if (err || !result) cb(null)
                else cb(null, result)
            })
        },
        function (result, cb) {
            console.log('===>>>', result.paymentMethod[0].expireDate)
            let update = {
                $set: {
                    'paymentMethod.$.status': data.status ? data.status : result.paymentMethod[0].status
                }
            }
            userModel.findOneAndUpdate(query, update, { new: true }).exec((err, update) => {
                // console.log(err, update)
                if (err || !update) cb(null)
                else cb(null, update)

            })
        }

    ], (err, succ) => {
        // console.log("resposne ", err, response)

        result = {
            "_id": succ._id,
            "firstName": succ.firstName,
            "lastName": succ.lastName,
            "email": succ.email,
            "image": succ.image,
            "addressAdded": succ.isAddressAdded,
            "phone": succ.phone,
            "paymentAdded": succ.paymentAdded,
            "address": succ.address,
            "paymentMethod": succ.paymentMethod,
            "countryCode": succ.countryCode
        }
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.DELET_PAYMENT[data.lang],'result':result })
    })


}
module.exports = {
    signup,
    login,
    socialLogin,
    checkSocialProfile,
    updateDeviceToken,
    addAddress,
    getOtp,
    forgotPassword,
    addPaymentMethod,
    getAddressList,
    getPaymentMethodList,
    verifyForgotLink,
    updateForgotPassword,
    checkEmail,
    changePassword,
    editProfile,
    //! this is for angular 
    reset,
    verifyLink,
    updateProfile,
    getUserInfo,
    editPaymentMethod,
    deletePayment
}