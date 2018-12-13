var mongoose = require("mongoose")
var physicalStore = mongoose.Schema({

    businessName: String,
    address: String,
    building_shopNo: String,
    location: { type: Object, trim: true, default: null },
}, {
        timestamps: true
    }) 
module.exports = mongoose.model('physicalStore', physicalStore, 'physicalStore')