var mongoose = require('mongoose')
var orderList = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'login'
    },

    orderDescription: [{
        sellerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'login'
        },
        productId: {
           type:mongoose.Schema.Types.ObjectId,
           ref:'brandDescription'
        },
        varianceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'variance'
        },
        productQuantity: {
            type: String,
            default: "1"
        },
        orderPayment: {
            type: String,
            enum: ["PENDING", "COD", "ONLINE"],
            default: "PENDING",
            upperCase: true
        },
        orderStatus: {
            type: String,
            enum: ["PENDING", "PLACED", "DISPATCH", "ADDTOCART", "WISHLIST"],
            default: "PENDING",
            upperCase: true
        }

    }]
})
module.exports = mongoose.model("orderList", orderList, "orderList")