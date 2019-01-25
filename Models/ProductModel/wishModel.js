var mongoose = require('mongoose')
var wishList = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'login'
    },
    wishListDescription: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'productDescription'
        },
        productQuantity: {
            type: String,
            default: "1"
        },
        size: {
            type: String,
            default: "",
            uppercase: true
        },
        color: {
            type: String,
            default: "",
            uppercase: true
        },
         material: {
            type: String,
            default: "",
            uppercase: true
        },
        /*  orderPayment: {
             type: String,
             enum: ["COD", "ONLINE", "ADDTOCART","PENDING"],
             default:"PENDING",
             upperCase:true
         }, */
        orderStatus: {
            type: String,
            enum: ["PENDING", "PLACED", "DISPATCH", "ADDTOCART", "WISHLIST"],
            default: "PENDING",
            uppercase: true
        },
        createAt: {
            type: Date,
            default: Date.now()
        }
    }]
})
module.exports = mongoose.model("wishModel", wishList, "wishModel")