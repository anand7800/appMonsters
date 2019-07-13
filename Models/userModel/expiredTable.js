var mongoose = require('mongoose')
var expiredTable = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'login'
    },
    productId: {
        type: Array,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '1m'
    },

})
module.exports = mongoose.model("expiredTable", expiredTable, "expiredTable")