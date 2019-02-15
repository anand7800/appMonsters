let app = require('express')(),
    // server = require('https').Server(app),
    bodyParser = require('body-parser'),
    express = require('express'),
    cors = require('cors'),
    // http = require('http').Server(app),
    path = require('path'),
    util = require('./Utilities/util'),
    config = require("./Utilities/config").config,
    mongoConnect = require('./Utilities/mongooseConfig'),
    morgan = require("morgan"),
    async = require('async'),
    waterfall = require('async-waterfall'),
    request = require('request'),
    commonfunction = require('./commonFile/commonFunction'),
    _ = require('lodash');

let fs = require("fs");
// var optionsa = {
//     key: fs.readFileSync(path.join(__dirname, 'certificate') + '/mobenture.key').toString(),
//     cert: fs.readFileSync(path.join(__dirname, 'certificate') + '/mobenture.crt').toString()
// };
// options = {
//     key: fs.readFileSync('/var/www/html/visionpro/certi/mobenture.key').toString(),
//     cert: fs.readFileSync('/var/www/html/visionpro/certi/mobenture.crt').toString(),
// }
var server = require('http').Server(app)

var chatHistory = require('./Models/userModel/chatHistory');
var Room = require('./Models/userModel/room.js');
var User = require('./Models/userModel/chatUser.js');
var urlMedia = require('./Models/userModel/chatUrl.js');

// var io = require('socket.io')(http);
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/views'));
// app.set('view engine', 'ejs');

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"))
// app.get('/', (req, res) => {
//     res.send("server is running")
// })
// app.use(express.static(__dirname + '/views'));
// app.set('view engine', 'ejs');

/* 
var dotenv = require('dotenv/config');
console.log("ssdsds",process.env.superKey) 
*/
//!userRoutes
var userRoutes = require('./Routes/userRoutes/userPanelRoutes')
var adminRoute = require('./Routes/adminRoute/adminRoutes')
var productRoutes=require('./Routes/productRoute/productRoutes')
app.use('/user', userRoutes)
app.use('/admin', adminRoute)
app.use('/vendor', productRoutes)

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
});


/* ***************************socket start *************************
***************************socket start *************************
***************************socket start ************************* */
var io = require('socket.io')(server);
var sockets = {};
var onlineUsers = {};
io.sockets.on('connection', function (socket) {

    console.log("\x1b[31m", "Congratulation connection has been established");

    socket.on('initChat', function (data) {
        console.log(data)
        var decodeId;
        commonfunction.jwtDecode(data.userId, async (err, userId) => {
            if (err) throw err
            else {
                decodeId = userId
            }
        })
        console.log('decodeuser id======>>>', decodeId)
        User.findOne({
            userId: decodeId   //!data.userId
        }).populate({ path: 'userId' }).exec(function (err, result) {
            console.log("result data of init chat--->" + result);
            if (result == null || result == "" || result == undefined) {
                console.log("######")
                var user = new User({ userId: decodeId });
                user.save(function (err) {
                    if (err) return err;
                })
            } else {
                console.log("update selection")
                User.update({
                    userId: decodeId
                }, {
                        $set: {
                            deviceToken: result.userId.deviceToken ? result.userId.deviceToken : "",
                            profilePic: result.userId.image ? result.userId.image : "",
                            // profilePicFull: result.profilePicFull,
                            deviceType: result.userId.deviceType ? result.userId.deviceType : "",
                            userName: result.userId.firstName ? result.userId.firstName : ""
                        }
                    }, function (err, results) {
                        if (err) return err;
                        //console.log("initChat>>>>", results);

                    });

                if (!(decodeId in onlineUsers)) {
                    onlineUsers[decodeId] = {
                        socketId: [socket.id],
                        userId: decodeId,
                        userName: result.userId.firstName,
                        status: "online"

                    };
                } else {
                    onlineUsers[decodeId].socketId.push(socket.id)
                }
            }
        })
        let temp = {
            userId: decodeId
        }
        sockets[socket.id] = {
            data: temp,
            socket: socket
        };
        // console.log("sockets", sockets);
        // if (!(decodeId in onlineUsers)) {
        //     onlineUsers[decodeId] = {
        //         socketId: [socket.id],
        //         userId: decodeId,
        //         userName: data.userName,
        //         status: "online"

        //     };
        // } else {
        //     onlineUsers[decodeId].socketId.push(socket.id)
        // }
        console.log("sockets1111111111111============>", sockets);
        console.log("onlineUsers", onlineUsers);
        //onlineUsers[data.userId]= {socketId:[socket.id],userId:data.userId, userName: data.userName, status:"online"};
        socket.broadcast.emit('userIsOnline', { userId: decodeId })
        // socket.emit('initChat',{userId:decodeId})
    })


    ///////////////////////////////////////////////////////////////////////////////////////////////////


    socket.on('logout', function (data) {
        console.log("initChat created....." + JSON.stringify(data));
        User.findOne({
            userId: data.userId
        }, function (err, result) {
            // console.log("result data of init chat--->"+result);
            if (result == null || result == "" || result == undefined) {
                var user = new User(data);
                user.save(function (err) {
                    if (err) return err;
                })
            } else {
                User.update({
                    userId: data.userId
                }, {
                        $set: {
                            deviceToken: null,
                        }
                    }, function (err, results) {
                        if (err) return err;
                        // console.log("logout>>>>", results);

                    });
            }
        })

        //onlineUsers[data.userId]= {socketId:[socket.id],userId:data.userId, userName: data.userName, status:"online"};

        //console.log('Online Users---->' + JSON.stringify(onlineUsers));

    })


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //!----------------------------------------User Status---------------------------------------------------------------//
    socket.on('userStatus', function (data) { //userId and status
        console.log("userStatus  data---- ", JSON.stringify(data));
        if (onlineUsers[data.userId] == undefined) {
            console.log("user is offline");
        } else {
            var members = [];
            onlineUsers[data.userId].status = data.status;
            socket.broadcast.emit(data.userId + " is " + data.status);
            console.log("User status----", JSON.stringify(onlineUsers[data.userId]));
        }
    });


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //!---------------------------------------------Online User ----------------------------------------------------------//
    socket.on('isOnline', function (data) { //userId and receiverId
        //console.log("isOnline data-------" + JSON.stringify(data));
        var userStatus;
        if (onlineUsers[data.receiverId] == undefined) {
            userStatus = "Offline";
        } else {
            userStatus = onlineUsers[data.receiverId].status;
        }

        if (onlineUsers[data.userId] == undefined) {
            //console.log("sender is offline")

        } else {
            sockets[onlineUsers[data.userId].socketId].socket.emit('onlineStatus', userStatus);
        }
    });


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //!---------------------------- Send Message -------------------------------------------------//  

    socket.on('sendmessage', function (data) {
        console.log("data entry is ==============================>", data);
        let senderId
        commonfunction.jwtDecode(data.senderId, async (err, decodeSenderID) => {
            // console.log(err, decodeSenderID)
            if (err) throw err
            else {
                senderId = decodeSenderID
            }
        })
        // console.log('senderidsenderidsenderidsenderid', senderId)
        var receiveImage = "";
        var timeStamp = new Date().getTime();
        var utcDate = new Date().getTime();
        var participants = [data.receiverId, senderId/* data.senderId */]

        var query = {
            activeUsers: {
                $all: participants
            }
        }
        waterfall([
            function (callback) {
                User.findOne({
                    userId: data.receiverId
                }, (err, user) => {
                    //console.log("new user", user)
                    if (!user == null) {
                        new User({
                            userId: data.receiverId,
                            userName: data.receiverName,
                            profilePic: data.receiverProfilePic,
                            profilePicFull: data.recieverprofilePicFull,
                            blockedUsers: []
                        }).save((err, success) => {
                            //console.log("user saved", success, err)
                            callback()
                        })
                    }
                    else
                        callback()
                })
            },
            function (callback) {
                Room.findOne(query, function (err, result) {
                    // console.log("active user====>>" + JSON.stringify(result))
                    if (result == null || result == "" || result == undefined) {
                        var addParticipents = []

                        for (var i = 0; i < participants.length; i++) {
                            addParticipents.push({
                                userId: participants[i]
                            })
                        }
                        var room = new Room({
                            activeUsers: participants,
                            participants: addParticipents,
                            chatType: "single"
                        });
                        room.save(function (err, roomResult) {
                            //console.log("Room saved",roomResult);
                            if (err) {
                                //console.log("Something went wrong in room creation", err)
                            } else {
                                //console.log("New created roomId is"+roomResult._id)
                                callback(null, roomResult._id)
                            }
                        })
                    } else {
                        //console.log("existing roomID "+result._id)
                        callback(null, result._id)
                    }
                })
            },
            function (roomId1, callback) {
                // console.log('roomroomroomroomroom', roomId1)
                // console.log("callback=========>", data["media"], typeof data);
                User.find({
                    userId: {
                        $in: [data.receiverId, senderId/* data.senderId */]
                    }
                }, function (err, result) {
                    // console.log("results===>", result);

                    //console.log("data", result[0].blockedUsers.indexOf(data.senderId), result[1].blockedUsers.indexOf(data.receiverId),result[0].userId,data.receiverId)
                    if (result[0].userId == data.receiverId) {
                        if (result[0].blockedUsers.indexOf(senderId) >= 0 || result[1].blockedUsers.indexOf(data.receiverId) >= 0) { } else {

                            var roomId = roomId1
                            //console.log("======>>>Room id is",roomId);
                            //console.log("data for chat history1111111111111>>>", data)
                            if (onlineUsers[senderId] && onlineUsers[data.receiverId]) {
                                if (onlineUsers[senderId].receiverId == data.receiverId && onlineUsers[data.receiverId].receiverId == senderId)
                                    data.status = "READ";
                            }

                            // uploadImage1(data.media, (err, result) => {
                            //   data.media = result;
                            // receiveImage = result;
                            var saveChat = new chatHistory(data);
                            saveChat.roomId = roomId,
                                saveChat.senderId = senderId
                            // console.log("SAVE CHAT IS============>", saveChat);
                            // User.findOneAndUpdate({$in:})
                            //pull functionality
                            User.findOneAndUpdate({ userId: senderId }, { $pull: { deletedUsers: data.receiverId } }, { new: true }, (error, res) => {
                                if (error) {//console.log("Something went wromg.")
                                }

                                else {
                                    saveChat.save(function (err, result) {
                                        if (err) {
                                            //console.log("Something went wrong in chat history saving", err)
                                        } else {
                                            // console.log("Chat History saved successfully====================", result);
                                        }
                                    })
                                }
                            });
                            // })socket

                            // saveChat.save(function (err, result) {
                            //         if (err) {
                            //           console.log("Something went wrong in chat history saving", err)
                            //         } else {
                            //           console.log("Chat History saved successfully",result);
                            //         }
                            //       })
                            callback(null, roomId)
                        }
                    } else {
                        // if (result[1].blockedUsers.indexOf(data.senderId) >= 0 || result[0].blockedUsers.indexOf(data.receiverId) >= 0) { } else {

                        var roomId = roomId1
                        //console.log("======>>>Room id is",roomId);
                        //console.log("data for chat history22222222222222222>>>", data)
                        if (onlineUsers[senderId] && onlineUsers[data.receiverId]) {
                            if (onlineUsers[senderId].receiverId == data.receiverId && onlineUsers[data.receiverId].receiverId == data.senderId)
                                data.status = "READ";
                        }
                        // uploadImage1(data.media, (err, result) => {
                        //   data.media = result;
                        // receiveImage = result;
                        var saveChat = new chatHistory(data);
                        saveChat.roomId = roomId
                        saveChat.senderId = senderId

                        // console.log("SAVE CHAT IS============>", saveChat);
                        User.findOneAndUpdate({ userId: senderId }, { $pull: { deletedUsers: data.receiverId } }, { new: true }, (error, res) => {
                            if (error) {  //console.log("Something went wromg.")
                            }
                            else {
                                saveChat.save(function (err, result) {
                                    if (err) {
                                        console.log("Something went wrong in chat history saving", err)
                                    } else {
                                        console.log("chat history saved successfully");
                                    }
                                })
                            }
                        })
                        // })
                        // saveChat.save(function (err, result) {
                        //           if (err) {
                        //             console.log("Something went wrong in chat history saving", err)
                        //           } else {
                        //             console.log("chat history saved successfully",result);
                        //           }
                        //         })
                        callback(null, roomId)
                        // }
                    }
                })
            },
            function (roomId, callback) {
                async.parallel([
                    function (callback1) {
                        chatHistory.find({
                            receiverId: data.receiverId,
                            status: "SENT"
                        }).count().exec()
                            .then((result) => {
                                callback1(null, result)
                            })
                            .catch((failed) => {
                                callback1(failed)
                            })
                    }
                    // function (callback1) {
                    //     var username = "eventadmindriven";
                    //     var password = "@1!2@3#QWER#";
                    //     var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

                    //     //var url = 'http://ec2-52-74-93-103.ap-southeast-1.compute.amazonaws.com//PROJECTS/EventDriven/trunk/api_v3_3/version_v3_3/getUnreadNotificationCount';

                    //     var url = 'http://wishalerts.com/api_v3_3/version_v3_3/getUnreadNotificationCount';
                    //     request.post({
                    //         url: url,
                    //         headers: {
                    //             "Authorization": auth
                    //         },
                    //         json: {

                    //             "userID": data.receiverId

                    //         }

                    //     }, function (error, response, body) {  //console.log("request",body," ",error,"++++++","Response",response);
                    //         //console.log("body is "+JSON.stringify(body));
                    //         callback1(null, body.unreadCount)
                    //     });
                    // }

                ],
                    // optional callback
                    function (err, results) {
                        var type = data.messageType;
                        // if(type=="IMAGE"){
                        // uploadImage1(data.media, (err, success) => {
                        //   if (success)
                        //     x = success;

                        // }

                        // else if(type=="VIDEO"){
                        //   uploadVideo(data.media,(err,success)=>{
                        //     if(success)
                        //       x=success;
                        //     })
                        //   }
                        // console.log(results);
                        var badgeCount = parseInt(results[0]) + parseInt(results[1]);
                        // console.log("Her Data Is==================>", data);
                        var requireData = {
                            messageType: data.messageType,
                            message: data.message,
                            senderId: senderId,
                            senderImage: data.senderImage,
                            receiverImage: data.receiverImage,
                            media: data.media,
                            senderName: data.senderName,
                            receiverName: data.receiverName,
                            isEncrypted: true,
                            timeStamp: utcDate,
                            // currentTime: data.currentTime,
                            badgeCount: badgeCount,
                            // pic_url: data.media ? data.media : ""
                            //pic_url:"http://ec2-52-74-93-103.ap-southeast-1.compute.amazonaws.com/PROJECTS/EventDriven/trunk/sites/default/files/chat-1525093255.jpg"
                        }
                        // socket.emit("sendmessage")

                        // console.log("HERE in DATA =====>", onlineUsers[data.receiverId], sockets[onlineUsers[data.receiverId]]);
                        console.log("************************************", onlineUsers)
                        // console.log('@@@@@@@@@@@@@@@@@@@@@@@',onlineUsers[data.receiverId])
                        // console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%', sockets)
                        // console.log(onlineUsers)
                        // socket.emit('sendmessage', requireData)
                        // sockets[onlineUsers[senderId].socketId].socket.emit("sendmessage", {
                        //     requireData
                        // });
                        let temp = {
                            message: data.message,
                            senderId: senderId,
                            receiverId: data.receiverId,
                            timeStamp: utcDate,
                        }
                        console.log(" userSENT DATA", temp)

                        socket.emit('sendmessage', { "to": sockets.id, 'code': '200', "result": temp })

                        if (onlineUsers[data.receiverId] && sockets[onlineUsers[data.receiverId].socketId]) {
                            // console.log("HERE in DATA =====>$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4", onlineUsers[data.receiverId], sockets[onlineUsers[data.receiverId].socketId]);
                            // console.log("E#$#$#$#$#$", sockets)
                            let temp = {
                                message: data.message,
                                receiverId: data.receiverId,
                                senderId: senderId,
                                timeStamp: utcDate,
                            }


                            console.log("ONLINE user ", temp)
                            sockets[onlineUsers[data.receiverId].socketId].socket.emit("sendmessage", {
                                'code': '200', 'result': temp
                            });
                            // sockets[onlineUsers[data.receiverId].socketId].socket.emit("receivemessage", {
                            //     requireData
                            // });


                        }


                        // if(onlineUsers[data.senderId] == undefined){
                        //   console.log("sender is offline");
                        // }
                        // else{
                        //   sockets[onlineUsers[data.senderId].socketId].socket.emit("receivemessage",{requireData});
                        //      }
                        // console.log("utc data==>", utcDate)
                        //console.log("onlineUsers===============" + JSON.stringify(onlineUsers))
                        //if (onlineUsers[data.receiverId] == undefined || onlineUsers[data.receiverId].status == "Away" ) {

                        //    console.log("receiver is offline>>>>" + data.receiverId)
                        //  sockets[onlineUsers[data.receiverId].socketId].socket.emit("receivemessage",{requireData} );
                        // !For notification  
                        // requireData.message= notify.decryptMessage(requireData.message) 
                        // User.findOne({
                        //   userId: data.receiverId
                        // }, (err, result) => {
                        //   if (result) {
                        //     if (result.deviceType == 'iOS') {
                        //       if (result && result.deviceToken != null) {
                        //         notify.iosPush(result.deviceToken, requireData, notify.options1);
                        //         notify.iosPush(result.deviceToken, requireData, notify.options2)
                        //         notify.iosPush(result.deviceToken, requireData, notify.devOptions)
                        //       }
                        //   }
                        //   }
                        // })

                        // });
                        //  console.log("DAta", data);
                    })
            }

        ])
    })


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //------------------------------------------ on Disconnect -------------------------------------------------------------//                              
    socket.on('disconnect', function (data) {
        console.log("$%^&^%@#$%^&#$%^&*&%^&$%^&^$%^&^%^&$%&%^&$%")
        var socketId = socket.id;
        //console.log("socket id in disconnected--" , sockets);
        //console.log("socket id in disconnect111111111111111111--" + sockets[socketId]);

        if (sockets[socketId] != undefined) {
            console.log("data", sockets[socketId].data.userId)

            delete onlineUsers[sockets[socketId].data.userId];
            //onlineUsers[sockets[socketId].data.userId].socketId.pop(socket.id)
            //console.log(" users deleted" + JSON.stringify(onlineUsers));
        } else {
            console.log("not deleted-----");
        }
        // console.log('Disconnected userId is ', sockets)
        // console.log('connection disconnected---->' + socketId);
        console.log("online user------------------------->>>", onlineUsers)
    })


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /* socket.on('isread', function(data){ chatRoomId, 
         
     })*/
    //------------------------------------------ Read Message -------------------------------------------------------------//  
    socket.on('readMessage', function (data) { //need chatRoomId, lastmsgId, senderId, receiverId
        // console.log("readMessage DATa????", data);
        var query = {
            $or: [{
                $and: [{
                    senderId: data.senderId
                }, {
                    receiverId: data.receiverId
                }]
            }, {
                $and: [{
                    senderId: data.receiverId
                }, {
                    receiverId: data.senderId
                }]
            }]
        }
        Room.findOne(query, function (err, result) {
            if (result == null || result == "" || result == undefined) {
                //console.log("users doesnot exist")
            } else {
                Model = generateTableName(result.chatRoomId);
                Model.update({
                    lastmsgId: {
                        $lte: data.lastmsgId
                    },
                    receiverId: data.receiverId
                }, {
                        $set: {
                            status: 'READ'
                        }
                    }, {
                        multi: true
                    }, function (err, result) {

                        // console.log("Messages above last Message ID  " + data.lastmsgId + " has been read by the Receiver " + data.receiverId);
                    })

                if (onlineUsers[data.senderId] == undefined) {
                    // console.log("sender is offline");

                } else {
                    sockets[onlineUsers[data.senderId].socketId].socket.emit("messageRead", data);
                }
            }
        })
    })


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    socket.on('currentlyChatting', (data) => {
        if (onlineUsers[data.senderId])
            onlineUsers[data.senderId].receiverId = data.receiverId;
        //console.log("currently chatting", data);
    })


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //-------------------------Typing ------------------------//

    socket.on('typing', (data) => {
        if (onlineUsers[data.receiverId]) {

            sockets[onlineUsers[data.receiverId].socketId].socket.emit("userIsTyping", { userId: data.senderId, status: data.status })
        }
    })


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //---------------------------------------------Rev --chatting with current user-- Rev-------------------------------//

    socket.on('currentlyChattingReverse', (data) => {
        //console.log("currently chatting reverse", data);
        if (onlineUsers[data.senderId])
            delete onlineUsers[data.senderId].receiverId;

    })


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    socket.on('blockUser', function (data) {
        //console.log("block user is called")
        if (data.status == 'block') {
            User.findOneAndUpdate({
                userId: data.userId
            }, {
                    $push: {
                        blockedUsers: data.blockedUserId
                    }
                }, {
                    new: true
                }, (error, success) => {
                    //console.log("Error and success========>", error, "=======================", success)
                    if (error) {
                        //console.log("Error in blockuser=======>", error)
                    }
                    else {
                        //console.log("Blocked user============>", success);
                    }
                })
        } else if (data.status == 'unblock') {
            User.findOneAndUpdate({
                userId: data.userId
            }, {
                    $pull: {
                        blockedUsers: data.blockedUserId
                    }
                }, {
                    new: true
                }, (error, success) => {
                    // console.log("error and success===>", error, "==================", success)
                    if (error) {
                        //console.log("Error in unblockuser==>", error)
                    }
                    else {
                        // console.log("Unblocked user==============>", success);
                    }
                })
        }
    })

})

/* ***************************socket end *************************
***************************socket end *************************
***************************socket end ************************* */

/* ***************************Helper Functions *************************
***************************Helper Functions *************************
***************************Helper Functions ************************* */


app.post('/uploadMedia', function (req, res) {
    console.log("#$#$#$#$")
    let form = new multiparty.Form({ maxFilesSize: 100 * 1024 * 1024 }); //setting max size of image to 10MB
    form.parse(req, (err, fields, files) => {
        if (err) { console.log("err", err); }

        else {
            console.log("fields==>", fields);
            console.log("forms==>", files);
            let curso = new urlMedia();
            var c = files.Media[0].path;
            cloudinary.v2.uploader.upload(files.Media[0].path, { resource_type: "auto" }, (err, result) => {
                if (err) return res.status(500).send({ message: 'Error' });
                curso.media = result.secure_url;
                curso.save((err, cursoSaved) => {
                    if (err) {
                        return res.status(500).send({ message: 'Error' });
                    }
                    if (!cursoSaved) return res.status(404).send({ message: 'Empty' });
                    return res.status(200).send({ curso: cursoSaved });
                });
            })
        }
    })
})


//!chat history 
app.post('/ChatHistory', function (req, res) {

    //need receiverId, senderId, pageNumber

    let senderId
    commonfunction.jwtDecode(req.body.senderId, async (err, decodeSenderId) => {
        if (err) throw err
        else {
            senderId = decodeSenderId
        }
    })
    console.log("@@@@@@@@@@@@@", senderId)
    var query = {
        $or: [{
            $and: [{
                senderId: senderId
            }, {
                receiverId: req.body.receiverId
            }]
        }, {
            $and: [{
                senderId: req.body.receiverId
            }, {
                receiverId: senderId
            }]
        }]
    }
    chatHistory.update(query, {
        $set: {
            status: 'READ'
        }
    }, {
            multi: true
        }, function (err, result) {
            if (err) return res.send({
                responseCode: 500,
                responseMessage: "Something went wrong."
            })
            else {
                var query = {
                    $or: [{
                        $and: [{
                            senderId: senderId
                        }, {
                            receiverId: req.body.receiverId
                        }, {
                            hidden: {
                                $ne: senderId
                            }
                        }]
                    }, {
                        $and: [{
                            receiverId: senderId
                        }, {
                            senderId: req.body.receiverId
                        }, {
                            hidden: {
                                $ne: senderId
                            }
                        }]
                    }]
                }
                //console.log(JSON.stringify(query))
                chatHistory.paginate(query, {
                    sort: {
                        time: -1
                    },
                    page: req.body.pageNumber || 1,
                    limit: 1000
                }).then(function (result) {
                    console.log("chat history result=======>" + JSON.stringify(result))
                    let temp = []
                    async.forEachOf(result.docs, (value, key, callback) => {
                        console.log(value)
                        let r = {
                            senderId: value.senderId,
                            receiverId: value.receiverId,
                            message: value.message,
                            status: value.status,
                            timeStamp: value.timeStamp
                        }
                        temp.push(r)
                        callback()
                    }, (err, createResposne) => {
                        res.send({
                            statusCode: 200,
                            statusMessage: "Data Found successfully.",
                            chatResult: temp,
                            total: result.total,
                            limit: result.limit,
                            page: result.page,
                            pages: result.pages
                        });
                    })
                    // res.send({
                    //     responseCode: 200,
                    //     responseMessage: "Data Found successfully.",
                    //     chatResult: r,
                    //     total:result.total,
                    //     limit:result.limit,
                    //     page:result.page,
                    //     pages:result.pages
                    // });
                })
            }
        })
})
//!delete message
app.post('/deleteMessage', function (req, res) {
    //console.log("req.body: ", req.body)
    chatHistory.findByIdAndUpdate(req.body.messageId, {
        $push: {
            hidden: req.body.userId
        }
    }, {
            new: true
        })
        .then((success) => {
            //console.log("delete message success ",success)
            return res.send({
                responseCode: 200,
                responseMessage: "Successfully deleted."
            })
        })
        .catch((error) => {
            //console.log("delete message error ",error)
            res.send({
                responseCode: 500,
                responseMessage: "Something went wrong."
            })
        })
})

//!delete all message
app.post('/deleteAllMessages', function (req, res) {
    //console.log("multipple chat delete request",req.body)
    chatHistory.update({
        roomId: req.body.roomId
    }, {
            $push: {
                hidden: req.body.userId
            }
        }, {
            multi: true
        }, (error, success) => {
            if (error) {
                //console.log("muerrorr===>", error)
                res.send({
                    responseCode: 500,
                    responseMessage: "Something went wrong."
                })
            } else {
                //console.log("success====>", success)
                res.send({
                    responseCode: 200,
                    responseMessage: "Successfully deleted."
                })
            }
        })
})

app.post('/blockUser', function (req, res) {
    //console.log(req.body)
    User.findOneAndUpdate({
        userId: req.body.userId
    }, {
            $push: {
                blockedUsers: req.body.blockedUserId
            }
        }, {
            new: true
        }, (error, success) => {
            //console.log("error and success=========>", error, "================", success)
            if (error)
                res.send({
                    responseCode: 500,
                    responseMessage: "Something went wrong."
                })
            else
                res.send({
                    responseCode: 200,
                    responseMessage: "User is successfully blocked."
                })
        })
})



app.post('/unblockUser', function (req, res) {
    //console.log(req.body)
    User.findOneAndUpdate({
        userId: req.body.userId
    }, {
            $pull: {
                blockedUsers: req.body.blockedUserId
            }
        }, {
            new: true
        }, (error, success) => {
            if (error)
                res.send({
                    responseCode: 500,
                    responseMessage: "Something went wrong."
                })
            else
                res.send({
                    responseCode: 200,
                    responseMessage: "User is successfully unblocked."
                })
        })
})


app.post('/deleteUser', (req, res) => {
    //console.log("User delete request"+JSON.stringify(req.body))
    waterfall([
        (callback) => {
            User.findOneAndUpdate({
                userId: req.body.userId
            }, {
                    $push: {
                        deletedUsers: req.body.deleteUserId
                    }
                }, {
                    new: true
                }, (error, result) => {
                    if (error)
                        callback(error);
                    else
                        callback(null, result)
                });
        },
        (res, callback) => {
            chatHistory.update({
                roomId: req.body.roomId
            }, {
                    $push: {
                        hidden: req.body.userId
                    }
                }, {
                    multi: true
                })
                .exec((success) => {
                    //console.log("delete message success ",success)
                    //   return res.send({
                    //   responseCode: 200,
                    //   responseMessage: "Successfully deleted."
                    // })
                    callback(null, success)
                }, (error) => {
                    //console.log("delete message error ",error)
                    //   res.send({
                    //   responseCode: 500,
                    //   responseMessage: "Something went wrong."
                    // })
                    callback(error)
                });
        }
    ], (error, results) => {
        if (error)
            res.send({ responseCode: 500, responseMessage: "Something went wrong." })
        else
            res.send({ responseCode: 200, responseMessage: "User deleted successfully." })
    })

})


app.post('/userConversationList', function (req, res) {
    var userId = req.body.userId;

    console.log("eeeeee", req.body.userId)
    User.findOne({
        userId: userId
    }, (findError, findSuccess) => {
        console.log("error" + JSON.stringify(findError))
        console.log("success" + JSON.stringify(findSuccess))
        if (findError)
            res.send(findError);
        else {
            if (findSuccess) {
                req.body.pattern = req.body.pattern ? req.body.pattern : '';
                Room.find({ 'participants.userId': { $in: [req.body.userId] } }, { _id: 0, chatType: 0, createdAt: 0, status: 0, participants: 0, __v: 0 }, (error, result1) => {
                    // console.log("###############",error,result1)
                    if (error)
                        console.log(error)
                    else if (result1.length == 0)
                        res.send({ result: result1 })
                    else {
                        let usersIds = [];
                        usersIds = result1.map(x => {
                            if (x.activeUsers[0] == req.body.userId)
                                return x.activeUsers[1]
                            else
                                return x.activeUsers[0]
                        })
                        // console.log("final result", usersIds)
                        User.find({ $or: [{ userName: { $regex: req.body.pattern, $options: 'i' } }, { userId: { $in: usersIds } }] }).sort({ userId: -1 }).exec(async (err, result) => {
                            // console.log("result====>>>",err,result)


                            if (err)
                                console.log(err)
                            else if (result.length == 0) {
                                res.send({ responseCode: 200, responseMessage: "No user found.", result: result })
                            }
                            else {

                                if (err) {
                                    return res.send(err);
                                }
                                else if (result.length == 0) {
                                    return res.send({ responseCode: 400, responseMessage: "No users found" })
                                }
                                else {
                                    // console.log("result==>", result, "++++++++++++")
                                    var userList = [],
                                        counter = 0,
                                        len = result.length;
                                    //console.log("result====>",result)
                                    _.each(result, async function (sq) {
                                        var query = {
                                            $and: [{
                                                $or: [{
                                                    senderId: userId
                                                }, {
                                                    receiverId: userId
                                                }]
                                            }, {
                                                $or: [{
                                                    senderId: sq.userId
                                                }, {
                                                    receiverId: sq.userId
                                                }]
                                            },
                                            { hidden: { $nin: [sq.userId] } }
                                            ]
                                        };
                                        chatHistory.findOne(query).sort({
                                            time: -1
                                        }).exec(async function (err, chatResult) {
                                            console.log("chat result", chatResult)
                                            if (err) {
                                                res.send({
                                                    responseCode: 401,
                                                    responseMessage: 'Something went wrong',
                                                    err: err
                                                });
                                            } else {
                                                //  console.log("userId==>",sq.userId)
                                                // query.$and.push({ 
                                                //   status: "SENT"
                                                // })
                                                var unreadMessages = 0;
                                                chatHistory.find({
                                                    $and: [{
                                                        senderId: sq.userId
                                                    }, {
                                                        receiverId: userId
                                                    }],
                                                    status: "READ"
                                                }).count().exec().then(async (result) => {
                                                    // console.log("result===============================>", result);
                                                    unreadMessages = result;
                                                    if (chatResult && userId != sq.userId) {
                                                        let isBlock = false;
                                                        let isOnline = false;
                                                        //console.log(findSuccess, "find success")
                                                        // console.log(findSuccess.blockedUsers,"-----------",findSuccess.blockedUsers.indexOf(sq.userId),"----------",sq.userId)
                                                        if (findSuccess.blockedUsers && findSuccess.blockedUsers.indexOf(sq.userId) < 0) { isBlock = false }
                                                        else { isBlock = true }
                                                        //  console.log(chatResult);
                                                        // console.log("blocked===>",sq.blockedUsers.indexOf(userId))
                                                        //console.log("online check===>",onlineUsers[sq.userId],"-------",onlineUsers) findSuccess.deletedUsers.indexOf(sq.userId) < 0 &&
                                                        if (onlineUsers[sq.userId]) { isOnline = true; }
                                                        //cons;ole.log("chatresult===>", JSON.stringify(chatResult));
                                                        let indx = chatResult.hidden.findIndex(x => x == chatResult.senderId);
                                                        //console.log("delete users "+findSuccess.deletedUsers.indexOf(sq.userId))
                                                        if (findSuccess.deletedUsers.indexOf(sq.userId) < 0 && sq.blockedUsers.indexOf(userId) < 0) {
                                                            await userList.push({
                                                                participant_id: sq.userId,
                                                                userName: sq.userName,
                                                                profilePic: sq.profilePic,
                                                                profilePicFull: sq.profilePicFull,
                                                                message_type: indx > -1 ? '' : chatResult.messageType,
                                                                isEncrypted: chatResult.isEncrypted,
                                                                isBlock: isBlock,
                                                                lastMsg: indx > -1 ? '' : chatResult.message,
                                                                roomId: chatResult.roomId,
                                                                time: parseInt(chatResult.timeStamp),
                                                                isOnline: isOnline,
                                                                unreadMessages: unreadMessages
                                                            });
                                                        }
                                                        // console.log("naveen====>>>",userList)
                                                    }
                                                    if (++counter == len) {
                                                        let pageNumber = req.body.pageNumber == 1 ? 1 : req.body.pageNumber;
                                                        let maxResult = 2;
                                                        let start = (pageNumber * maxResult) - maxResult;
                                                        let end = pageNumber * maxResult;
                                                        let totalPage = Math.ceil(userList.length / maxResult)
                                                        // console.log("start======>>>" + start + "  end=======>>>>" + end + "  page number is" + pageNumber)
                                                        console.log("SDFGSFGSDFG", userList)
                                                        res.send({
                                                            statusCode: 200,
                                                            statusMessage: 'list found',
                                                            result: userList
                                                        });
                                                        // res.send(userList)  
                                                        userList.sort(function (a, b) {
                                                            // console.log(typeof(a.time))
                                                            console.log("########", a, b)
                                                            return new Date((a.time).toString()).getTime() - new Date((b.time).toString()).getTime();
                                                            // return new Date((a.timeStamp)).getTime() - new Date((b.timeStamp)).getTime();
                                                        });

                                                        userList.reverse();

                                                        var dataList = userList.slice(start, end);

                                                        console.log("datalist after======>>>", dataList)


                                                        if (req.body.pattern) {
                                                            dataList.sort(function (a, b) {
                                                                var textA = a.userName.toUpperCase();
                                                                var textB = b.userName.toUpperCase();
                                                                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                                                            });
                                                        }
                                                        //else

                                                        //console.log("datalist lenght"+dataList.length)
                                                        var data = {
                                                            data: dataList,
                                                            pageNumber: pageNumber,
                                                            totalPage: totalPage
                                                        }
                                                        console.log("chatlist", dataList)
                                                        // res.send({
                                                        //     responseCode: 200,
                                                        //     responseMessage: 'list found',
                                                        //     result: data
                                                        // });
                                                    }
                                                }).catch((failed) => {
                                                    console.log("failed", failed)
                                                });
                                            }
                                        })
                                    });
                                    await console.log("@@@@@@@", userList)
                                }
                            }
                        })
                    }
                })

            } else
                res.send({
                    responseCode: 400,
                    responseMessage: "User Not Found"
                });
        }
    })
});

app.post('/userStatus', (req, res) => {
    if (onlineUsers[req.body.userId])
        res.send({ responseCode: 200, responseMessage: 'User is online' })
    else
        res.send({ responseCode: 201, responseMessage: 'User is offline' })
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



app.post('/totalUnreadMessageCount', (req, res) => {
    var userId = req.body.userId;
    var unreadMessages = 0;
    chatHistory.find({
        receiverId: userId,
        status: "SENT"
    }).count().exec()
        .then((result) => {
            res.send({
                responseCode: 200,
                responseMessage: 'Total Unread Message',
                result: result
            });
        })
        .catch((failed) => {
            res.send({
                responseCode: 500,
                responseMessage: 'Unexpected Error',
            });
        })
})

/* ***************************Helper Functions *************************
***************************Helper Functions *************************
***************************Helper Functions ************************* */

server.listen(config.NODE_SERVER_PORT.port, function () {
    console.log('app listening on port:' + config.NODE_SERVER_PORT.port + (new Date));
});
