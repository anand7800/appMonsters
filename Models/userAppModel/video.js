var mongoose = require("mongoose")
var video = mongoose.Schema({

    videoFile: {
        type: String,
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE",
        uppercase: true
    }
}, { timestamps: true })
module.exports = mongoose.model('video', video, 'video')