var mongoose = require("mongoose")
var productcategoryListing = mongoose.Schema({
    //! LEVEL 3

    categoryModel: { //! men                    //!LEVEL 1
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productcategory'
    },
    subCategory: { //! clothing                //!LEVEL 2
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productsubCategory'
    },
    productcategoryName: {
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
        default: "ACTIVE"
    }

},{timestamps:true})
module.exports = mongoose.model('productcategory1', productcategoryListing, 'productcategory1')