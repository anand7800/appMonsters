var mongoose = require("mongoose")
var brandDescription = mongoose.Schema({
    //!LEVEL 4

    categoryModel: { //! electronic                        //!LEVEL 1
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },

    subCategory: { //! MOBILE / TV / COMPUTER              //!LEVEL 2
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory'
    },

    productCategoryId: {      //!touch screen               //!LEVEL 3
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productcategoryListing'
    },

    // brandId:{                //!MI SAMSUNG SONG 
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'brandListing'
    // },
    brandDesc: [{         
        sellerId: {       
            type: mongoose.Schema.Types.ObjectId,
            ref: 'login'
        },
        productName: String,
        price: String,
        color: String,
        description: String,
        image: [],
        brandId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'brandListing'
        },
        varianceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'variance',
            default:null
        },
        tag: [],
        specifications: [{
        }],
        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"],
            upperCase: true,
            default: "ACTIVE"
        }
    }]
})
module.exports = mongoose.model('brandDescription', brandDescription, 'brandDescription')