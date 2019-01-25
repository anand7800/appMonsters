var mongoose = require("mongoose");
var category = mongoose.Schema({
    //!level 1 
    //!electronic tv men women 
    categoryName: {
        type: String
    },
    icons: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    serialNumber: {
        type: String,
        default: 1
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        uppercase: true,
        default: "ACTIVE"
    }
}, { timestamps: true })
module.exports = mongoose.model('productcategory', category, 'productcategory')