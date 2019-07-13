//admin user model in new file
var mongoose = require("mongoose");
var util = require('../../Utilities/util');
var admin = mongoose.Schema({

    email: {
        type: String,
        require: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    token: String,
    password: {
        type: String,
        required: 'Email address is required'
    }
})
admin = mongoose.model('admin', admin, 'admin');

module.exports = admin;


function init() {
    admin.findOne({}, (error, success) => {
        if (error) {
            console.log(error)
        } else {
            if (success == null) {
                new admin({
                    email: "admin@techugo.com",
                    password: util.encryptData("Techugo@123"),
                    userType: "admin"
                }).save((error, success) => {
                    console.log("Successfully login ", error, success)
                })
            }
        }
    })
}
init();