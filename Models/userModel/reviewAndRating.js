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
        }
    }]
})
module.exports = mongoose.model('reviewAndRating', reviewAndRating, 'reviewAndRating')