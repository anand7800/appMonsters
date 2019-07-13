const async = require('async')
let util = require('../../Utilities/util')
const aboutUsModel = require('../../Models/adminPanelModel/aboutUs')
const adminModel = require('../../Models/adminPanelModel/adminUserModel');
const commonFunction = require('../../commonFile/commonFunction')
const commonAPI = require('../../commonFile/commonApi')
const mongoose = require('mongoose')
const waterfall = require('async-waterfall');
const _ = require('lodash');
const md5 = require('md5');
 


addAboutUs = (data, callback) => {
    console.log(data)
        /* query  */
    let query = {
        aboutUs: data.aboutUs
    }
    console.log(query)
    var aboutUs = new aboutUsModel(query)
    aboutUs.save(query, (err, result) => {
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
        else {

            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED[data.lang], "result": result })
        }
    })
}
getAboutUs = (data, callback) => {

    aboutUsModel.findOne({}).exec((err, result) => {
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
        else {

            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
        }
    })
}
//admin login
adminLogin = (data, callback) => {
    let {email, password} = data;
    if(!data.email || !data.password){
        callback({ "statusCode": util.statusCode.BAD_REQUEST, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return;
    }
    passwod = md5(password);
    adminModel.findOne({email,password}).exec((err, result)=>{
        if (err)
        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.INCORRECT_CREDENTIALS[data.lang] })
        else
            callback({"statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.LOGIN_SUCCESS[data.lang]})
    })
}

module.exports = {
    addAboutUs,
    getAboutUs,
    adminLogin
}