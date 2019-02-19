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
        type: Number,
        default: null
    },
    minimumRequirement: {
        type: String,
        default: null
    },
    applicableOn: {
        type: [],
        default: null
    },
    applicableType: {
        type: String,
        default: null
    },
    startDate: {
        type: Date,
        default: Date.now()
    },
    endDate: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        uppercase: true,
        default:'ACTIVE'
    }
})
module.exports = mongoose.model('productOffer', varianceOffer, 'productOffer')