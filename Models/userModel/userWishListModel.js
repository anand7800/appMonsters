var mongoose = require('mongoose')
var wishList = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'login'
    },
    wishListDescription: [{
        productId: {
            type: String,
            default: ""
        },
        productQuantity:{
            type:String,
            default:"1"
        },
       /*  orderPayment: {
            type: String,
            enum: ["COD", "ONLINE", "ADDTOCART","PENDING"],
            default:"PENDING",
            upperCase:true
        }, */
        orderStatus:{
            type:String,
            enum:["PENDING","PLACED","DISPATCH","ADDTOCART","WISHLIST"],
            default:"PENDING",
            upperCase:true
        }
    }]
})
module.exports=mongoose.model("wishList",wishList,"wishList")