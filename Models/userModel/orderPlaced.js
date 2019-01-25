var mongoose = require('mongoose')
var orderPlaced = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'login'
    },
    orderPlacedDescription: [{
        sellerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'login'
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'brandDescription'
        },
        varianceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'variance'
        },
        orderId: {
            type: String,
            default: null,
        },
        addressId: {
            type: mongoose.Schema.Types.ObjectId,
            default: null,
        },
        transactionId: {
            type: String,
            default: null
        },
        productQuantity: {
            type: String,
            default: "1"
        },
        estimateTax: {
            type: String,
            default: "17"
        },
        deliveryCharges: {
            type: String,
            default: "50"
        },
        totalAmountPaid:{
            type:String,
            default:""

        },
        orderPayment: {
            type: String,
            enum: ["COD", "ONLINE", "ADDTOCART", "PENDING"],
            default: "PENDING",
            upperCase: true
        },
        orderStatus: {
            type: String,
            enum: ["PENDING", "PLACED", "DISPATCH", "REJECTED", "INPROGRESS", "DELIVERED","ORDERSHIPPED,CANCELLED"],
            default: "PENDING",
            upperCase: true
        },
        feedbackAdded: {
            type: Boolean,
            default: false
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }

    }]
})
module.exports = mongoose.model("orderPlaced", orderPlaced, "orderPlaced")