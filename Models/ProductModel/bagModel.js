var mongoose = require('mongoose')
var bagList = mongoose.Schema({

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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'productDescription'
        },
        varianceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'productvariance'
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
        totalAmountPaid: {
            type: String,
            default: ""
        },
        orderStatus: {
            type: String,
            enum: ["PENDING", "PLACED", "DISPATCH", "ADDTOCART", "WISHLIST"],
            default: "PENDING",
            upperCase: true
        },
        color: {
            type: String,
            upppercase: true,
            default:""
        },
        size: {
            type: String,
            upppercase: true,
            default:""

        },
        material: {
            type: String,
            upppercase: true,
            default:""
        },
        createAt: {
            type: Date,
            default: Date.now()
        }

    }]
})
module.exports = mongoose.model("baglist", bagList, "baglist")