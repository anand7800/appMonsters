var mongoose = require("mongoose")
var tokenModel = mongoose.Schema({

    token: {
        type: String,
    },
    deviceType: {
        type: Number,
        enum: [0, 1],
        default: 0,
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE",
        uppercase: true
    }
}, { timestamps: true })
module.exports = mongoose.model('tokenModel', tokenModel, 'tokenModel')