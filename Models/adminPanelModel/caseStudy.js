var mongoose = require("mongoose")
var caseStudy = mongoose.Schema({

    caseStudy: {
        type: String,
    },
    file_id: {
        type: String,
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE",
        uppercase: true
    }
}, { timestamps: true })
module.exports = mongoose.model('caseStudy', caseStudy, 'caseStudy')