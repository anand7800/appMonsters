var mongoose = require("mongoose")
var subCategory = mongoose.Schema({

    categoryModel: {                   //!LEVEL 1
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productcategory'
    },
    subCategoryName: {
        type:String,
        default:null
    },
    icons: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        uppercase: true,
        default: "INACTIVE"
    }
}, {
        timestamps: true
    })
module.exports = mongoose.model('productsubCategory', subCategory, 'productsubCategory')