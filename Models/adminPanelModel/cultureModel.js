var mongoose = require("mongoose")
var culture = mongoose.Schema({


    file: String,
    description: String,
    fileType: String,
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE",
        uppercase: true
    }

}, { timestamps: true })
module.exports = mongoose.model('culture', culture, 'culture')