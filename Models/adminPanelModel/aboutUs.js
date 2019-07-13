var mongoose = require("mongoose")
var aboutUs = mongoose.Schema({

    aboutUs: {
        type: String,
    },

    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE",
        uppercase: true
    }
}, { timestamps: true })
module.exports = mongoose.model('aboutUs', aboutUs, 'aboutUs')