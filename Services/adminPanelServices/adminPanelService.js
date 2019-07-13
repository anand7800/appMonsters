const async = require('async')
let util = require('../../Utilities/util')
const aboutUsModel = require('../../Models/adminPanelModel/aboutUs'); /* about us model */
const deviceTokenModel = require('../../Models/userAppModel/deviceToken'); /* device token  model */
const caseStudyModel = require('../../Models/adminPanelModel/caseStudy'); /* device token  model */

const commonFunction = require('../../commonFile/commonFunction')
const commonAPI = require('../../commonFile/commonApi')
const mongoose = require('mongoose')
const waterfall = require('async-waterfall');
const _ = require('lodash');
var multiparty = require('multiparty');


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

    aboutUsModel.findOne({ _id: '5d295ef565d7891abeba8c12' }).exec((err, result) => {
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
        else {

            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
        }
    })
}

updateAboutUs = (data, callback) => {

    let query = {
        _id: '5d295ef565d7891abeba8c12'
    }
    let update = {
        $set: {
            aboutUs: data.aboutUs
        }
    }
    aboutUsModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED[data.lang], "result": result })
        }
    })
}

pushNotification = (data, callback) => {
    let query = {
        deviceType: data.deviceType
    }
    async.waterfall([
        function(cb) {
            deviceTokenModel.find(query, { token: 1 }).exec((err, result) => {
                if (err) {
                    cb(null)
                } else {
                    cb(null, result)
                }
            })
        },
        function(device, cb) {
            if (device.length > 0 && query.deviceType == 0) { /* android notification */

                device.forEach(element => {
                    console.log(element);
                    let temp = {
                        msg: data.msg,
                        type: data.type,
                        title: data.title,
                    }
                    commonFunction.android_notification(element.token, temp.msg, temp.title, temp.type)
                });
            } else if (device.length > 0 && query.deviceType == 1) { /* IOS notification */

                device.forEach(element => {
                    console.log(element);
                    let temp = {
                        msg: data.msg,
                        type: data.type,
                        title: data.title,
                    }
                    commonFunction.IOS_NOTIFICATION(element.token, temp.msg, temp.title, 1, temp.type)
                });
            }
            cb(null)
        }
    ], (err, response) => {
        if (query.deviceType == 2) {
            deviceTokenModel.find({}).exec((err, result) => {
                if (err)
                    callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                else if (result.length == 0)
                    callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
                else {
                    result.forEach(element => {
                        if (element.deviceType == 0) {
                            let temp = {
                                msg: data.msg,
                                type: data.type,
                                title: data.title,
                            }
                            commonFunction.android_notification(element.token, temp.msg, temp.title, temp.type)
                        } else {
                            let temp = {
                                msg: data.msg,
                                type: data.type,
                                title: data.title,
                            }
                            commonFunction.IOS_NOTIFICATION(element.token, temp.msg, temp.title, 1, temp.type)
                        }
                    })
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.notifyMsg.SEND_NOTIFICATION_DONE[data.lang] })
                }
            })

        }
    })
}
addCaseStudy = (data, callback) => {

    var form = new multiparty.Form({ autoFiles: true, maxFilesSize: 10832325 })
    form.parse(data, function(err, fields, files) {

        console.log(files.pdf[0].originalFilename.slice(files.pdf[0].originalFilename.length - 3))
        if (files.pdf[0].originalFilename.slice(files.pdf[0].originalFilename.length - 3) == "pdf") {
            commonFunction.upload_image(files.pdf, (err, result) => {

                let query = {
                    caseStudy: fields.caseStudy[0],
                    file_id: result
                }
                console.log(query)

                let caseStudy = new caseStudyModel(query)
                caseStudy.save((err, result) => {
                    if (err)
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                    else if (!result)
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
                    else {
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED[data.lang], "result": result })
                    }
                })
            })
        } else {
            callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": "Please provide us PDF Format file" })
            return
        }
    });
}
module.exports = {
    addAboutUs,
    getAboutUs,
    updateAboutUs,
    pushNotification,
    addCaseStudy
}