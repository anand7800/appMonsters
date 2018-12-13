var mongoose = require("mongoose")
var subCategory = mongoose.Schema({
    //! LEVEL 2 
    categoryModel: { //! electronic                          //!LEVEL 1
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    subCategories: [{
        subCategoryName: String,//!mobile / TV /  ,
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
            upperCase: true,
            default: "INACTIVE"
        }
    }]
}, {
        timestamps: true
    })
module.exports = mongoose.model('subCategory', subCategory, 'subCategory')