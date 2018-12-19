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
    },
    status:{
        type:String,
        enum: ["ACTIVE", "INACTIVE"],
        default:"ACTIVE",
        upperCase:true
    }
})
module.exports = mongoose.model('brandListing', brandListing, 'brandListing')