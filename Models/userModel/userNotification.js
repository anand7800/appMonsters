var mongoose = require('mongoose')
var notification = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'login'
    },

    notification: [{
        info:{
            type:mongoose.Schema.Types.ObjectId
        },
        notificationTitle: String,
        notificationMessage: String,
        notificationType:{
            type:String,
            enum:['PLACED','DELIVERIED','REJECTED','CANCELLED','DISPATCH','INACTIVE'],
            default:"PLACED"
        },
        createAt:{
            type:Date,
            default:Date.now()
        }
    }]
}, {
        timestamps: true
    })
module.exports = mongoose.model("notification", notification, "notification")