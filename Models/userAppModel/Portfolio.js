var mongoose = require("mongoose")
var portfolio = mongoose.Schema({

    appName: {
        type: String
    },
    thumbNail: {
        type: String
    },
    disciption: {
        type: String
    },
    applink: {
        type: String
    }
}, { timestamps: true })
module.exports = mongoose.model('portfolio', portfolio, 'portfolio');