var mongoose = require("mongoose")
var brandListing = mongoose.Schema({
    //! LEVEL common in brand

    brandName: { 
        type:String,
    },
    image:{
        type:String,
        default:""
    },
    icon:{
        type:String,
        default:""
    }
})
module.exports = mongoose.model('brandListing', brandListing, 'brandListing')