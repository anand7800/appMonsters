var async = require('async')
var userModel = require('../../Models/userModel/userPanelModel')
let util = require('../../Utilities/util')
var commonFunction = require('../../commonFile/commonFunction')
log = console.log
 
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
                    userType: data.userType?data.userType:"user"
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
    log("login api is hitted")
    obj = data
    var update = {
        lastLogin: Date.now()
    };
    var query = { email: obj.email }
    if (!data) {
        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        userModel.findOneAndUpdate(query, update).select('firstName paymentAdded isAddressAdded password  lastName email phone address image paymentMethod').exec((err, succ) => {
            // console.log(err, succ)
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
                        "countryCode": succ.countryCode,
                        "paymentAdded": succ.paymentAdded,
                        "address": succ.address,
                        "paymentMethod": succ.paymentMethod,
                        "countryCode": succ.countryCode
                    }
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.LOGIN_SUCCESS[data.lang], "result": result, "accessToken": commonFunction.jwtEncode(succ._id) })
                }
                else {
                    callback({ "statusCode": util.statusCode.BAD_REQUEST, "statusMessage": util.statusMessage.INCORRECT_PASSWORD[data.lang] })
                }
            }
        })
    }
}

//!social login
socialLogin = (data, callback) => {
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
                    log(succ)
                    if (err) {
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[obj.lang] })
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
        query = {
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
        userModel.findOneAndUpdate(query, { deviceToken: data }, { new: true }, (err, result) => {
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
                    "countryCode":succ.countryCode
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
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.OTP[data.lang], 'result': '123456' })
    }
}
//! forgot Password of user
forgotPassword = (data, callback) => {
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
},
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
checkEmail=(data,callback)=>{
    console.log("api is called")
    userModel.find({email:data.email},(err,found)=>{
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        }
        else if (!found.length>0) {
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang] })
        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.USER_EXISTS[data.lang] })
        }
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
        checkEmail
}