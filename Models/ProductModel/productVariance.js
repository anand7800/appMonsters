const mongoose = require('mongoose')
var variance = mongoose.Schema({

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productDescription'
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'login'
    },
    variants: [{
        
        color: {
            type: String,
            uppercase:true,
            default: null
        
        },
        price: {
            type: String,
            default: null
        },
        SKU: {
            type: String,
            default: null
        },
        inventory: {
            type: String,
            default: null
        },
        size: {
            type: String,
            uppercase:true,
            default: null
        },
        material: {
            type: String,
            uppercase:true,
            default: null
        },
        quantity: {
            type: String,
            default: null
        },
        image: {
            type: Array,
            default: []
        },
        status: {
            type: String,
            default: 'ACTIVE',
            enum: ["ACTIVE", "INACTIVE"]
        }
    }]

        // extra: {
        //     type: String,
        //     default: null
        // },
        // sellingPrice: {
        //     type: String,
        //     default: null
        // },
        // inventorySKU: {
        //     type: String,
        //     default: null
        // },
        // costItem: {
        //     type: String,
        //     default: null
        // },
        // weight: {
        //     type: String,
        //     default: null
        // },
        // productType: {
        //     type: String,
        //     default: null
        // },
})

module.exports = mongoose.model('productvariance', variance, 'productvariance')