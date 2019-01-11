var mongoose = require("mongoose")
var businessDetail = mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'login'
    },
        businessName: String,//!mobile / TV /  ,
        phone: Number,
        email: String,
        sellingProduct: Array,
        streetAddress: Array,
        cityName: Array,
        isBusinessDetail : {
            type : String,
            default: false
        }
}, {
        timestamps: true
    })
module.exports = mongoose.model('businessDetail', businessDetail, 'businessDetail')