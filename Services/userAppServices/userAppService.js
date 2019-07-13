const async = require('async');
let util = require('../../Utilities/util');
const deviceTokenModel = require('../../Models/userAppModel/deviceToken'); /* device token  model */
const commonFunction = require('../../commonFile/commonFunction');
log = console.log;
const mongoose = require('mongoose');
const paytabs = require('paytabs_api');
const cultureModel = require('../../Models/adminPanelModel/cultureModel'); /* device token  model */
const teamModel = require('../../Models/adminPanelModel/team'); /* device token  model */
const caseStudyModel = require('../../Models/adminPanelModel/caseStudy'); /* device token  model */
const portfolioModel = require('../../Models/userAppModel/Portfolio'); /* device token  model */

const NotificationModel = require('../../Models/userAppModel/notification'); /* device token  model */

/* update device token  start */
updateDeviceToken = (data, callback) => {

        if (!data.deviceToken || !data.deviceType) {
            callback({
                "statusCode": util.statusCode.PARAMETER_IS_MISSING,
                "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang]
            })
            return;
        } else {
            let query = {
                token: data.deviceToken,
                deviceType: data.deviceType
            }
            let deviceToken = new deviceTokenModel(query)
            deviceToken.save((err, result) => {
                if (err)
                    callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                else if (!result)
                    callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
                else {
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
                }
            })
        }
    }
    /* update device token  end */



getCulture = (data, callback) => {
    cultureModel.find({ status: "ACTIVE" }).exec((err, result) => {
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
        }
    })
}


getTeam = (data, callback) => {
    teamModel.find({ status: "ACTIVE" }).exec((err, result) => {
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
        }
    })
}

getCaseStudy = (data, callback) => {
    caseStudyModel.find({ status: "ACTIVE" }).exec((err, result) => {
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
        }
    })
}










portfolio = (data, callback) => {
    let { appName, thumbnial, applink, discription, key, _id } = data
    async.auoto({

        vallidation: (cb) => {
            if (key != 0 || key != 1 || key != 2) {
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })

            }
        },
        operations: (cb) => {
            switch (key) {

                case 0:
                    {
                        commonFunction.uploadImg(data.thumbnial, (err, thumbnial) => {
                            console.log(err, thumbnial)
                            if (err) cb(null)
                            else if (!thumbnial) cb(null)
                            else {
                                portfolioModel.upadte({ _id }, { appName, thumbnial, discription, applink }, (err, result) => {
                                    if (err)
                                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                                    else {
                                        cb(null, { "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PRODUCT_FOUND, "result": result })
                                    }
                                })
                            }
                        })
                        break;
                    }
                    //delete data
                case 1:
                    {
                        portfolioModel.deleteOne({ _id }, (err, result) => {
                            if (err)
                                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                            else {
                                cb(null, { "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PRODUCT_FOUND, "result": result })
                            }
                        })
                        break;
                    }
                    //add data
                case 2:
                    {
                        portfolioModel.create({ appName, thumbnial, discription, applink }, (err, result) => {
                            if (err)
                                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                            else {
                                cb(null, { "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PRODUCT_FOUND, "result": result })
                            }
                        })
                        break;

                    }
            }
        }

    }, (err, result) => {
        callback(result);
    })
}


getPortfolio = (data, callback) => {
    async.auoto({
        operations: (cb) => {
            portfolioModel.find({}, (err, result) => {
                if (err)
                    callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                else if (!result)
                    callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang], "error": err })
                else {
                    cb(null, { "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PRODUCT_FOUND, "result": result })
                }
            })
        }
    }, (err, result) => {
        callback(result);
    })
}

getNotification = (data, callback) => {
    NotificationModel.find({ status: "ACTIVE" }).exec((err, result) => {
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
        }
    })
}

module.exports = {
    updateDeviceToken,
    getCulture,
    getTeam,
    getCaseStudy,
    portfolio,
    getPortfolio,
    getNotification
}