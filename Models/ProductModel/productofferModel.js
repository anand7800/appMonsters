const mongoose = require("mongoose")
const varianceOffer = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'login'
    },
    offerName: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    offerType: {
        type: String,
        default: null
    },
    image: {
        type: [],
        default: null
    },
    value: {
        type: String,
        default: null
    },
    minimumRequirement: {
        type: String,
        default: null
    },
    applicableOn: {
        type: [],
        default: null
    }
}, {
        timestamps: true
    })
module.exports = mongoose.model('productOffer', varianceOffer, 'productOffer')