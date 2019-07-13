const async = require('async')
let util = require('../../Utilities/util')
const aboutUsModel = require('../../Models/adminPanelModel/aboutUs'); /* about us model */
const deviceTokenModel = require('../../Models/userAppModel/deviceToken'); /* device token  model */
const caseStudyModel = require('../../Models/adminPanelModel/caseStudy'); /* device token  model */
const adminModel = require('../../Models/adminPanelModel/adminPanelUserModel'); /* adminuser  model */
const cultureModel = require('../../Models/adminPanelModel/cultureModel'); /* device token  model */
const commonFunction = require('../../commonFile/commonFunction')
const teamModel = require('../../Models/adminPanelModel/team'); /* device token  model */
const treadingModel = require('../../Models/adminPanelModel/treading'); /* device token  model */
const upcomingModel = require('../../Models/adminPanelModel/treading'); /* device token  model */
const notificationModel = require('../../Models/userAppModel/notification'); /* device token  model */
const portfolioModel = require('../../Models/userAppModel/Portfolio'); /* device token  model */


const commonAPI = require('../../commonFile/commonApi')
const mongoose = require('mongoose')
const waterfall = require('async-waterfall');
const _ = require('lodash');
var multiparty = require('multiparty');
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
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
        else {

            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
        }
    })
}
getAboutUs = (data, callback) => {

    aboutUsModel.findOne({ _id: '5d295ef565d7891abeba8c12' }).exec((err, result) => {
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
        else {

            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY['en'], "result": result })
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
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
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
                    callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
                else if (result.length == 0)
                    callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
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
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.notifyMsg.SEND_NOTIFICATION_DONE['en'] })
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
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
                    else if (!result)
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
                    else {
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
                    }
                })
            })
        } else {
            callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": "Please provide us PDF Format file" })
            return
        }
    });
}

editCaseStudy = (data, callback) => {
    var form = new multiparty.Form({ autoFiles: true, maxFilesSize: 10832325 })
    form.parse(data, function(err, fields, files) {
        console.log(err, fields, files)
        if (files.pdf[0].originalFilename.slice(files.pdf[0].originalFilename.length - 3) == "pdf") {
            commonFunction.upload_image(files.pdf, (err, result) => {
                let query = {
                    _id: fields._id[0]
                }
                let update = {
                    caseStudy: fields.caseStudy[0],
                    file_id: result,
                    // _id:_id
                }

                caseStudyModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
                    if (err)
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
                    else if (!result)
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
                    else {
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
                    }
                })
            })
        } else {
            callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": "Please provide us PDF Format file" })
            return
        }
    });
}

deleteCaseStudy = (data, callback) => {
        console.log(data)
        let query = {
            _id: data._id
        }
        let update = {
            $set: {
                status: data.status
            }
        }

        caseStudyModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
            if (err)
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
            else if (!result)
                callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
            }
        })
    }
    /* culture start */



addculture = (data, callback) => {
    var form = new multiparty.Form({ maxFilesSize: 100 * 1024 * 1024 })
    form.parse(data, function(err, fields, files) {
        console.log(err, fields, files)
        if (true) {
            commonFunction.upload_image(files.file, (err, result) => {
                let query = {
                    // caseStudy: fields.caseStudy[0],
                    file: result,
                    description: fields.description[0],
                    fileType: fields.fileType[0]
                }
                console.log(query)

                let culture = new cultureModel(query)
                culture.save((err, result) => {
                    if (err)
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[fields.lang[0]], "error": err })
                    else if (!result)
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[fields.lang[0]] })
                    else {
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED[fields.lang[0]], "result": result })
                    }
                })
            })
        } else {
            callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": "Please provide us PDF Format file" })
            return
        }
    });
}

editCulture = (data, callback) => {

    var form = new multiparty.Form({ autoFiles: true, maxFilesSize: 10832325 })
    form.parse(data, function(err, fields, files) {
        if (true) {
            commonFunction.upload_image(files.file, (err, result) => {

                let query = {
                    _id: fields._id[0]
                }
                let update = {
                    file: result,
                    description: fields.description[0],
                }
                cultureModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
                    if (err)
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
                    else if (!result)
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
                    else {
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
                    }
                })
            })
        } else {
            callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": "Please provide us PDF Format file" })
            return
        }
    });
}
deleteCulture = (data, callback) => {
        console.log(data)
        let query = {
            _id: data._id
        }
        let update = {
            $set: {
                status: data.status
            }
        }
        cultureModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
            if (err)
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
            else if (!result)
                callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
            }
        })
    }
    /* culture end */

addTeam = (data, callback) => {
    var form = new multiparty.Form({ maxFilesSize: 100 * 1024 * 1024 })
    form.parse(data, function(err, fields, files) {
        console.log(err, fields, files)
        if (true) {
            commonFunction.upload_image(files.file, (err, result) => {
                let query = {
                    // caseStudy: fields.caseStudy[0],
                    picture: result,
                    name: fields.name[0],
                    designation: fields.designation[0],
                    desc: fields.desc[0],
                }
                console.log(query)

                let team = new teamModel(query)
                team.save((err, result) => {
                    if (err)
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
                    else if (!result)
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
                    else {
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
                    }
                })
            })
        } else {
            callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": "Please provide us PDF Format file" })
            return
        }
    });
}


editTeam = (data, callback) => {
    var form = new multiparty.Form({ autoFiles: true, maxFilesSize: 10832325 })
    form.parse(data, function(err, fields, files) {
        if (true) {
            commonFunction.upload_image(files.file, (err, image) => {


                let query = {
                    _id: fields._id[0]
                }
                teamModel.findOne(query).exec((err, result) => {

                    console.log(fields)


                    let update = {
                        picture: image ? image : result.image,
                        name: fields.name ? fields.name[0] : result.name,
                        designation: fields.designation ? fields.designation[0] : result.designation,
                        desc: fields.desc ? fields.desc[0] : result.desc,
                    }

                    teamModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
                        if (err)
                            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
                        else if (!result)
                            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
                        else {
                            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
                        }
                    })
                })
            })
        } else {
            callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": "Please provide us PDF Format file" })
            return
        }
    });
}


deleteTeam = (data, callback) => {
    console.log(data)
    let query = {
        _id: data._id
    }
    let update = {
        $set: {
            status: data.status
        }
    }
    teamModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
        }
    })
}


addTreading = (data, callback) => {
    var form = new multiparty.Form({ maxFilesSize: 100 * 1024 * 1024 })
    form.parse(data, function(err, fields, files) {
        console.log(err, fields, files)
        if (true) {
            commonFunction.upload_image(files.file, (err, result) => {
                let query = {
                    file: result,
                    description: fields.description[0],
                }
                let treading = new treadingModel(query)
                treading.save((err, result) => {
                    if (err)
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
                    else if (!result)
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
                    else {
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
                    }
                })
            })
        } else {
            callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": "Please provide us PDF Format file" })
            return
        }
    });
}

editTreading = (data, callback) => {
    var form = new multiparty.Form({ autoFiles: true, maxFilesSize: 10832325 })
    form.parse(data, function(err, fields, files) {
        if (true) {
            commonFunction.upload_image(files.file, (err, image) => {


                let query = {
                    _id: fields._id[0]
                }
                treadingModel.findOne(query).exec((err, result) => {

                    console.log(fields)


                    let update = {
                        file: image ? image : result.file,
                        // name: fields.name ? fields.name[0] : result.name,
                        description: fields.description ? fields.description[0] : result.description,

                    }

                    teamModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
                        if (err)
                            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
                        else if (!result)
                            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
                        else {
                            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
                        }
                    })
                })
            })
        } else {
            callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": "Please provide us PDF Format file" })
            return
        }
    });
}

deleteTreading = (data, callback) => {
    console.log(data)
    let query = {
        _id: data._id
    }
    let update = {
        $set: {
            status: data.status
        }
    }
    treadingModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
        }
    })
}



addUpcoming = (data, callback) => {
    var form = new multiparty.Form({ maxFilesSize: 100 * 1024 * 1024 })
    form.parse(data, function(err, fields, files) {
        console.log(err, fields, files)
        if (true) {
            commonFunction.upload_image(files.file, (err, result) => {
                let query = {
                    file: result,
                    description: fields.description[0],
                }
                let add = new upcomingModel(query)
                add.save((err, result) => {
                    if (err)
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
                    else if (!result)
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
                    else {
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
                    }
                })
            })
        } else {
            callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": "Please provide us PDF Format file" })
            return
        }
    });
}

editUpcoming = (data, callback) => {
    var form = new multiparty.Form({ autoFiles: true, maxFilesSize: 10832325 })
    form.parse(data, function(err, fields, files) {
        if (true) {
            commonFunction.upload_image(files.file, (err, image) => {


                let query = {
                    _id: fields._id[0]
                }
                upcomingModel.findOne(query).exec((err, result) => {

                    console.log(fields)


                    let update = {
                        file: image ? image : result.file,
                        description: fields.description ? fields.description[0] : result.description,

                    }

                    upcomingModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
                        if (err)
                            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
                        else if (!result)
                            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
                        else {
                            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
                        }
                    })
                })
            })
        } else {
            callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": "Please provide us PDF Format file" })
            return
        }
    });
}

deleteUpcoming = (data, callback) => {
    console.log(data)
    let query = {
        _id: data._id
    }
    let update = {
        $set: {
            status: data.status
        }
    }
    upcomingModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
        }
    })
}


createNotification = (data, callback) => {


    let query = {
        title: data.title,
        sender: data.sender,
        body: data.body
    }
    let add = new notificationModel(query)
    add.save((err, result) => {
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE['en'] })
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED['en'], "result": result })
        }
    })
}




/* anand start */
//login services

adminLogin = (data, callback) => {
        let { email, password } = data;
        if (!data.email || !data.password) {
            callback({ "statusCode": util.statusCode.BAD_REQUEST, "statusMessage": util.statusMessage.PARAMS_MISSING['en'] })
            return;
        }
        let token = commonFunction.jwtEncode(email)
        password = util.encryptData(data.password)
        console.log(email, token, password)
        adminModel.findOneAndUpdate({ email, password }, { token }).exec((err, result) => {
            if (err)
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY['en'], "error": err })
            else if (!result)
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.INCORRECT_CREDENTIALS['en'] })
            else {
                result.token = token;
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.LOGIN_SUCCESS['en'], "result": result })
            }
        })
    }
    //adminpannelservices
addPortfolio = (data, callback) => {
    var form = new multiparty.Form({ autoFiles: true, maxFilesSize: 10832325 })
    form.parse(data, function(err, fields, files) {
        // console.log(fields,"------",files)
        // return;

        // console.log(files.pdf[0].originalFilename.slice(files.pdf[0].originalFilename.length - 3))
        commonFunction.upload_image(files.thumbnail, (err, result) => {
            //console.log("---------",result,"--------------")
            let query = {
                appName: fields.appName[0],
                thumbnail: result,
                discription: fields.discription[0],
                applink: fields.applink[0]
            }
            console.log(query)

            let portfolio = new portfolioModel(query)
            portfolio.save((err, result) => {
                console.log("aaaaaaaa", result, "aaaaaaaaaaa")
                if (err)
                    callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                else if (!result)
                    callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
                else {
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED[data.lang], "result": result })
                }
            })
        })
    });
}


updatePortfolio = (data, callback) => {
    var form = new multiparty.Form({ autoFiles: true, maxFilesSize: 10832325 })
    form.parse(data, function(err, fields, files) {
        // console.log(fields,"------",files)
        // return;

        // console.log(files.pdf[0].originalFilename.slice(files.pdf[0].originalFilename.length - 3))
        commonFunction.upload_image(files.thumbnail, (err, result) => {
            //console.log("---------",result,"--------------")
            let query = {
                appName: fields.appName[0],
                thumbnail: result,
                discription: fields.discription[0],
                applink: fields.applink[0]
            }
            console.log(query)

            portfolioModel.findOneAndUpdate({ _id: fields._id[0] }, query, (err, result) => {
                console.log("aaaaaaaa", result, "aaaaaaaaaaa")
                if (err)
                    callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                else if (!result)
                    callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
                else {
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED[data.lang], "result": result })
                }
            })
        })
    });
}

deletePortfolio = (data, callback) => {
    portfolioModel.findOneAndDelete({ _id: data._id }, (err, result) => {
        console.log("aaaaaaaa", result, "aaaaaaaaaaa")
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED[data.lang], "result": result })
        }
    })
}

getPortfolio = (data, callback) => {
    portfolioModel.find({}, (err, result) => {
        console.log("aaaaaaaa", result, "aaaaaaaaaaa")
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        else if (!result)
            callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.UPDATED[data.lang], "result": result })
        }
    })
}


module.exports = {
    addAboutUs,
    getAboutUs,
    updateAboutUs,
    pushNotification,
    addCaseStudy,
    editCaseStudy,
    deleteCaseStudy,
    adminLogin,
    addculture,
    editCulture,
    deleteCulture,
    addTeam,
    editTeam,
    deleteTeam,
    addTreading,
    editTreading,
    deleteTreading,
    addUpcoming,
    editUpcoming,
    deleteUpcoming,
    createNotification,
    addPortfolio,
    updatePortfolio,
    deletePortfolio,
    getPortfolio
}