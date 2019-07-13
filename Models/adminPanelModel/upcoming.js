var mongoose = require("mongoose")
var upcoming = mongoose.Schema({
    description: {
        type: String,
    },
    file: {
        type: String,
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE",
        uppercase: true
    }

}, { timestamps: true })
module.exports = mongoose.model('upcoming', upcoming, 'upcoming')