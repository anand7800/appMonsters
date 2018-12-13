var mongoose = require("mongoose")
var topOffer = mongoose.Schema({
    //! LEVEL 2 
    subCategoryModel: { //! electronic                          //!LEVEL 1
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory'
    },
    topOffers: {
        topOfferName: String,//!mobile / TV /  ,
        offerImage: [{
            type: String,
            default: ""
        }],
        description: {
            type: String,
            default: ""
        },
        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"],
            upperCase: true,
            default: "INACTIVE"
        }
    }
}, {
        timestamps: true
    })
module.exports = mongoose.model('topOffer', topOffer, 'topOffer')