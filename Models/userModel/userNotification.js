var mongoose = require('mongoose')
var notification = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'login'
    },

    notification: [{
        
        notificationTitle: String,
        notificationMessage: String,
        notificationType:String,
        createAt:{
            type:Date,
            default:Date.now()
        }
    }],
    createAt: {
        type: Date,
        default:Date.now()
    }

}, {
        timestamps: true
    })
module.exports = mongoose.model("notification", notification, "notification")