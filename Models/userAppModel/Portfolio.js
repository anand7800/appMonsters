//portfolio.js

var mongoose = require("mongoose")
var portfolio = mongoose.Schema({

    appName: String,
    thumbnail: String,
    discription: String,
    applink: String
}, { timestamps: true })
module.exports = mongoose.model('portfolio', portfolio, 'portfolio')