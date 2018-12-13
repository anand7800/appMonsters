var mongoose = require("mongoose")
var productcategoryListing = mongoose.Schema({
    //! LEVEL 3

    categoryModel: { //! men                    //!LEVEL 1
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    subCategory: { //! clothing                //!LEVEL 2
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory'
    },
    // brandId:{     //! t shirt  and shirt
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'brandListing'
    // }, 
    productcategory: [{ //! SAMSUNG SONY
        productcategoryName:{
            type:String,
            default:null
        },
        // brandId:{
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:'brandListing'
        // },
        image: {
            type: String,
            default: null
        },     
        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"],
            upperCase: true,
            default: "ACTIVE"
        }
    }]
})
module.exports = mongoose.model('productcategoryListing', productcategoryListing, 'productcategoryListing')