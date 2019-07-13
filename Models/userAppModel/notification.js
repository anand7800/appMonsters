var mongoose = require("mongoose")
var notification = mongoose.Schema({

    title: {
        type: String
    },
    sender: {
        type: String
    },
    body: {
        type: String
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE",
        uppercase: true
    }


}, { timestamps: true })
module.exports = mongoose.model('notificationList', notification, 'notificationList');