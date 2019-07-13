var mongoose = require("mongoose")
var aboutUs = mongoose.Schema({

    aboutUs: {
        type: String,
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "INACTIVE",
        uppercase: true
    }
})
module.exports = mongoose.model('aboutUs', aboutUs, 'aboutUs')