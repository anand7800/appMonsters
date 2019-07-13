var mongoose = require("mongoose")
var team = mongoose.Schema({

    name: {
        type: String,
    },
    designation: {
        type: String,
    },
    picture: {
        type: String,
    },
    desc: {
        type: String,
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE",
        uppercase: true
    }
}, { timestamps: true })
module.exports = mongoose.model('team', team, 'team')