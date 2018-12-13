const mongoose = require('mongoose')
var variance = mongoose.Schema({

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brandDescription'
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'login'
    },
    variants: [{
        color: String,
        price: String,
        SKU: String,
        inventory: String,
        size: String,
        material: String,
        quantity:String,
        image: {
            type:Array,
            default:[]
        },
        extra: String,
        status: {
        type: String,
        default: 'ACTIVE',
        enum: ["ACTIVE", "INACTIVE"]
    }
    }],
    sellingPrice: {
        type: String,
        default: null
    },
    inventorySKU: {
        type: String,
        default: null
    },
    costItem: {
        type: String,
        default: null
    },
    weight: {
        type: String,
        default: null
    },
    productType: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model('variance', variance, 'variance')