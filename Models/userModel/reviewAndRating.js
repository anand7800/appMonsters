var mongoose = require("mongoose")
var reviewAndRating = mongoose.Schema({
    //!level5 
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'login'
    },
    reviewAndRating: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'login'
        },
        productId: {
            type: String,
        },
        rating: {
            type: String,
            default: null
        },
        review: {
            type: String
        },
        status: {
            type: String,
            enum: ['ACTIVE', 'INACTIVE'],
            uppercase:true,
            default: 'ACTIVE'
        },
        createAt: {
            type: Date,
            default: Date.now()
        }
    }],
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    }
}, {
        timestamps: true
    })
module.exports = mongoose.model('reviewAndRating', reviewAndRating, 'reviewAndRating')