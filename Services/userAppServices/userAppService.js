const async = require('async');
let util = require('../../Utilities/util');
const deviceTokenModel = require('../../Models/userAppModel/deviceToken'); /* device token  model */
const commonFunction = require('../../commonFile/commonFunction');
log = console.log;
const mongoose = require('mongoose');
const paytabs = require('paytabs_api');

/* update device token  start */
updateDeviceToken = (data, callback) => {
        console.log(data)
        if (!data.deviceToken) {
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
module.exports = {
    updateDeviceToken
}