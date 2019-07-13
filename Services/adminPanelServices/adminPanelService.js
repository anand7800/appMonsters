const async = require('async')
let util = require('../../Utilities/util')
const aboutUsModel = require('../../Models/adminPanelModel/aboutUs')
const commonFunction = require('../../commonFile/commonFunction')
const commonAPI = require('../../commonFile/commonApi')
const mongoose = require('mongoose')
const waterfall = require('async-waterfall');
const _ = require('lodash');


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

module.exports = {
    addAboutUs,
    getAboutUs
}