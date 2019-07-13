var mongoose = require("mongoose")
var adminUser = mongoose.Schema({

    email: {
        type: String,
        require: true,
        lowercase: true,
        trim: true,
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true
    },
    password : {
        type : String,
        required: 'Email address is required'
    }
})
module.exports = mongoose.model('adminUser', adminUser, 'adminUser')