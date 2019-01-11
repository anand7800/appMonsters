var mongoose = require("mongoose");
var category = mongoose.Schema({
    //!level 1 
    categories: {                   //!electronic tv men women 
        categoryName: {
            type: String,
            uppercase: false
        },
        icons: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        serialNumber:{
            type: String,
            default: 1
        },
        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"],
            upperCase: true,
            default: "ACTIVE"
        }
    }
})
module.exports = mongoose.model('category', category, 'category')