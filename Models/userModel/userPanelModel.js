var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate');
var util = require('../../Utilities/util')
var login = mongoose.Schema({
    email: {
        type: String,
        require: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
        require: false,
        default: ""
    },
    lastName: {
        type: String,
        require: false,
        default: ""
    },
    userType: {
        type: String,
        enum: ['user', 'vendor', "admin"],
        default: 'user',
        upperCase: true
    },
    phone: {
        type: Number,
        default: 0
    },
    countryCode: {
        type: String,
        default: "+91"
    },
    isAddressAdded: {
        type: Boolean,
        default: false
    },
    paymentAdded: {
        type: Boolean,
        default: false
    },

    /* location: {
           coordinates: {
               type: [Number],
               default: [0, 0]
           },
           address: [{
               state: String,
               house_no: String,
               address_type: String
           }]
       }, */
    address: [{
        addresses: String,
        houseNo: String,
        addressType: String,
        lat: String,
        lng: String,
        fullName: String,
        contactNumber: String,
        countryCode: {
            type: String,
            default: "+91"
        },
    }],
    paymentMethod: [{
        cardHolderName: String,
        cardNumber: String,
        cardType: String,
        cvv: String,
        expireDate: String,
    }],
    social: {
        socialId: String,
        socialType: String
    },
    image: {
        type: String,
        default: ""
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },

    deviceToken: String,
    deviceType: Number,
    // },
    forgotToken: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['block', 'active', "admin"],
        default: 'active',
        upperCase: true
    }
}, {
        timestamps: true
    })
login.plugin(mongoosePaginate);
login = mongoose.model('login', login, 'login')
module.exports = login

function init() {
    login.findOne({}, (error, success) => {
        if (error) {
            console.log(error)
        }
        else {
            if (success == null) {
                new login({
                    email: "test@gmail.com",
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
