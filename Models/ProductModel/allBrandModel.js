var mongoose = require("mongoose")
var brandListing = mongoose.Schema({
    //! LEVEL common in brand

    brandName: { 
        type:String,
        // lowercase:true
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
        default:"INACTIVE",
        uppercase:true
    }
})
module.exports = mongoose.model('allbrand', brandListing, 'allbrand')