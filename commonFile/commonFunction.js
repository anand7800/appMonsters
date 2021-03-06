const bcrypt = require('bcryptjs')
const mailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const config = require('../config/config.dev')
const config_json = require('../config/config')
const cloudinary = require('cloudinary')
const async = require('async')
let speakEasy = require('speakeasy');
var NodeGeocoder = require('node-geocoder');
var crypto = require('crypto');
const twilio = require("twilio");
const orderid = require('order-id')('WAKITECHUGO');
var algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';
var FCM = require('fcm-push');
let transporter;
cloudinary.config({
    cloud_name: "dc3nuj9ka",
    /* live "sumit9211" */
    api_key: "137659364596292",
    /* 885582783668825 */
    /* live 868525178894725 */
    api_secret: "V1ko7pP4SPwbv9lsvWa1AiyVd3I" /* 0dT6FoxdcGb7UjTKtUGQbAVdOJI */ /* live  MM9hrN2Uvrz0oMfN5SwxaYOdaIc */
});
let secret = speakEasy.generateSecret({
    length: 20
});
let salt = bcrypt.genSaltSync(10);
let webURL = require('../Utilities/config').config
    // console.log(webURL.web__url.host)
    // nodemailer.createTestAccount((err, account) => { 
    //     if (err) {
    //         console.log("Account could not be created", err)
    //     }
    //     transporter = nodemailer.createTransport({
    //         host: account.smtp.host,
    //         port: account.smtp.port,
    //         secure: account.smtp.secure,
    //         auth: {
    //             user: account.user,
    //             pass: account.pass
    //         }
    //     })
    // })
    // var groomer_schema = require('../dbSchema/groomerModel/signup_groomer')
    // var customer_schema = require('../dbSchema/customerModel/signupSchema')
module.exports = {

    responseHandler: (res, responseCode, responseMessage, data, token) => {
        res.send({
            responseCode: responseCode,
            responseMessage: responseMessage,
            data: data,
            token: token
        })
    },
    createHash: (password, callback) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (err)
                callback(err, null)
            else
                callback(null, hash)
        })
    },
    compareHash: (password, storedHash, callback) => {
        bcrypt.compare(password, storedHash, (err, result) => {
            if (err)
                callback(null)
            else
                callback(null, result)
        })
    },
    jwtDecode: (token, callback) => {
        console.log("jwt")
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                callback(null)
                console.log(err)
            } else {
                callback(null, decoded.id)
            }
        })
    },

    jwtEncode: (auth) => {
        console.log("token generate")
        var token = jwt.sign({ id: auth }, config.secret, {})
        return token;
    },
    imageUploadToCloudinary: (imageB64, callback) => {
        // console.log(imageB64)
        return cloudinary.uploader.upload(imageB64, (result) => {
            //  console.log("fddfdfgfg", result);
            callback(null, result.url);
        })
    },
    //function to upload image
    uploadImg: (base64, callback) => {
        cloudinary.uploader.upload(base64, (result1) => {
            // console.log("err,result",err,result1)
            if (result1.url) {
                callback(null, result1.url)
            } else {
                callback(true, null);
            }
        })
    },
    uploadMultipleImages: (imagesB64, callback) => {
        let a = [];
        // console.log("uploadMultipleImages",imagesB64);
        async.eachSeries(imagesB64, (item, callbackNextIteratn) => {
                module.exports.uploadImg(item, (err, url) => {
                    if (err) callback(null)
                    else {
                        a.push(url);
                        //console.log("#############",a);
                        // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&", url)
                        callbackNextIteratn();
                        // console.log("%%%%%%%%%%%",a);
                    }
                })
            }, (err) => {
                // console.log("aaaaaassasdsssssssssss",a)
                console.log("Done with async loop")
                callback(null, a);

            })
            // console.log("----------result of multi image uploader--------->>>", a);
    },

    generateOTP: (callback) => {
        let secret = speakEasy.generateSecret({
            length: 20
        });
        console.log("secret======>>>>>>" + JSON.stringify(secret))
            // let token = speakEasy.totp({
            //     secret: secret.base32,
            //     encoding: 'base32'
            // })   
        let token = 123456;
        callback(token, secret);
    },

    sendText: (number, otp, callback) => {
        console.log(number, "====>>>", typeof(number))
        client.messages
            .create({
                to: number,
                from: "+19513192317",
                // from: "+19783064180", 
                // from: "+14132695276", 
                body: 'Your one-time password for Tap Culture is' + otp,
            })
            .then((message) => {
                console.log("space", message.sid)
                callback(message.sid);
            }, (err) => {
                console.log(err);
                callback(null);
            });
    },

    verifyOTP: (otp, secret, callback) => {
        let tokenValidates = speakEasy.totp.verify({
            secret: secret,
            encoding: 'base32',
            token: otp,
            window: 10 //implies that 10==5 min @default step=30s
                // step: 1
        });
        console.log("tokenValidates", tokenValidates)
        callback(tokenValidates);
    },

    generateToken: () => {
        return Date.now() + Math.floor(Math.random() * 99999) + 1000;
    },

    getLatLong: (place, callback) => {
        let fn, temp;
        var options = {
            provider: 'google',
            // Optional depending on the providers
            // httpAdapter: 'https', // Default
            apiKey: 'AIzaSyB959XY2RqlTkZNYuNRp1EU_YiA3KjS71Q' // for Mapquest, OpenCage, Google Premier
                // formatter: null         // 'gpx', 'string', ...
        };
        var geocoder = NodeGeocoder(options);
        // fn = () => {
        geocoder.geocode(place, function(err, result) {
            // console.log(err, result);
            if (result) {
                console.log(result)
                callback(result[0].latitude, result[0].longitude)
            }
        });
        // }
        // if(fn()){
        //     console.log("if",temp)
        //     callback(temp[0].latitude, temp[0].longitude)
        // }else{
        //     console.log("else")
        //     fn();
        // }
    },

    getPlace: (place, callback) => {
        console.log("place callback------------>", place)
        console.log(place[0])
        var para = {
            lat: place[1],
            lon: place[0]
        }
        console.log(para)
        let fn, temp;
        var options = {
            provider: 'google',
            // Optional depending on the providers
            // httpAdapter: 'https', // Default
            apiKey: 'AIzaSyB959XY2RqlTkZNYuNRp1EU_YiA3KjS71Q' // for Mapquest, OpenCage, Google Premier
                // formatter: null         // 'gpx', 'string', ...
        };
        var geocoder = NodeGeocoder(options);
        // fn = () => {
        geocoder.reverse(para, function(err, result) {
            console.log("place is ---------->>", result)

            if (result) {
                callback(result)
            }
        });

    },
    // //encrypted


    //nodemailer
    sendMail: (email, subject, text, callback) => {
        var html = //"Hi user,<br><br>Please follow the link to recover the password.<a target='_blank' href='http://13.126.131.184:4001/user/verifyForgotLink?email={{email}}&forgot_token={{forgot_token}}'>Recover Password</a><br><br>Thanks,<br>Team Qouch Potato."

            `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,500">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
        <style type="text/css">
        
        body {	font-family: 'Roboto', sans-serif;	font-size: 16px;	font-weight: 300;	color: #888;	line-height: 30px;	margin: 0 auto;	position: relative;}
        .main {	width: 320px;	margin: 40px auto;	background: #282B3B;	padding: 10px;}
        .logo {	text-align: left;	margin-bottom: 30px;	margin-top: 20px;	width: 100%;	}
        .logo a {	color: #e1e1e1;	font-size: 22px;	display: block;	line-height: 18px;	text-decoration: none;}
        .content {	background: #fff;	padding: 30px;			text-align: center;}
        .content h2 {	font-size: 22px;	color: #282B3B;	margin: 0;	padding: 0;}
        .content a.email_logo {	margin-bottom: 10px;	display: inline-block;	margin-top: 10px;}
        .content p.body_text {	margin-bottom: 10px;	display: inline-block;	margin-top: 10px;	font-size: 14px;	color: #282B3B;	line-height: 20px;	font-weight: 500;}
        .content p.body_text a.just_click {	font-size: 14px;	color: #282B3B;	line-height: 20px;	font-weight: 500;	text-decoration: none;}
        .content .confirm_btn a {	text-decoration: none;	font-size: 14px;	color: #fff;	background: #F7921A;	border: 1px solid #8b847e;
            padding: 5px 30px;	margin-top: 5px;	display: inline-block;	border-radius: 5px;}
        .content p.about_text {	margin-bottom: 0px;	display: inline-block;	margin-top: 60px;	font-size: 16px;	color: #656565;	line-height: 20px;	font-weight: 400;}
        .content p.about_text a {	text-decoration: underline;	color: #656565;}
        footer {	margin: 0 auto;	text-align: center;	width: 100%;	display: inline-block;}
        footer p {	color: #e1e1e1;	font-size: 10px;	line-height: 20px;	padding: 20px 80px;	margin-bottom: 0}
        footer p span {	font-size: 16px;	position: relative;	top: 2px;}
        </style>
        </head>
        
        <body>
        <div class="main">
          <div class="logo"> <a href="" >WAKI</a> </div>
          <div class="content">
            <table width="100%" border="0" align="center">
              <tbody width="100%">
                <tr>
                  <td><h2>Almost Done</h2></td>
                </tr>
                <tr>
                  <td><a class="email_logo" href=href=""><img alt="" src="/img/BMCT_Icon_Emails.png"></a></td>
                </tr>
                <tr>
                  <td><p class="body_text">To proceed further <br />
                       <br />
                      </p></td>
                </tr>
                <tr>
                  <td><p class="body_text"><a href="" class="just_click"> YOUR EMAIL VERIFY LINK :</a> </p></td>
                </tr>
                <tr>
                  <td class="confirm_btn"><a href="${webURL.web__url.host}/resetPassword?email=${email}&forgotToken=${text}" >verify link</a></td>
                </tr>
                <tr>
                  <td><p></p></td>
                </tr>
              </tbody>
            </table>
          </div>
          <footer>
            <p>2018 <span>©</span> WAKI <br />
              All rights reserved</p>
          </footer>
        </div>
        </body>
        </html>
        `
        const mailBody = {
            from: "<do_not_reply@gmail.com>",
            to: email,
            subject: subject,
            html: html
                // html: "<p>Your verification code is " + text + "</p>"
        };
        mailer.createTransport({
            service: 'gmail',
            auth: {
                user: config_json.nodemailer.user,
                pass: config_json.nodemailer.pass
            },
            port: 587,
            host: 'smtp.gmail.com'

        }).sendMail(mailBody, callback)
    },


    sendMailforwebsite: (email, subject, text, callback) => {
        var html = `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,500">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
        <style type="text/css">
        
        body {	font-family: 'Roboto', sans-serif;	font-size: 16px;	font-weight: 300;	color: #888;	line-height: 30px;	margin: 0 auto;	position: relative;}
        .main {	width: 320px;	margin: 40px auto;	background: #282B3B;	padding: 10px;}
        .logo {	text-align: left;	margin-bottom: 30px;	margin-top: 20px;	width: 100%;	}
        .logo a {	color: #e1e1e1;	font-size: 22px;	display: block;	line-height: 18px;	text-decoration: none;}
        .content {	background: #fff;	padding: 30px;			text-align: center;}
        .content h2 {	font-size: 22px;	color: #282B3B;	margin: 0;	padding: 0;}
        .content a.email_logo {	margin-bottom: 10px;	display: inline-block;	margin-top: 10px;}
        .content p.body_text {	margin-bottom: 10px;	display: inline-block;	margin-top: 10px;	font-size: 14px;	color: #282B3B;	line-height: 20px;	font-weight: 500;}
        .content p.body_text a.just_click {	font-size: 14px;	color: #282B3B;	line-height: 20px;	font-weight: 500;	text-decoration: none;}
        .content .confirm_btn a {	text-decoration: none;	font-size: 14px;	color: #fff;	background: #F7921A;	border: 1px solid #8b847e;
            padding: 5px 30px;	margin-top: 5px;	display: inline-block;	border-radius: 5px;}
        .content p.about_text {	margin-bottom: 0px;	display: inline-block;	margin-top: 60px;	font-size: 16px;	color: #656565;	line-height: 20px;	font-weight: 400;}
        .content p.about_text a {	text-decoration: underline;	color: #656565;}
        footer {	margin: 0 auto;	text-align: center;	width: 100%;	display: inline-block;}
        footer p {	color: #e1e1e1;	font-size: 10px;	line-height: 20px;	padding: 20px 80px;	margin-bottom: 0}
        footer p span {	font-size: 16px;	position: relative;	top: 2px;}
        </style>
        </head>
        
        <body>
        <div class="main">
          <div class="logo"> <a href="" >WAKI</a> </div>
          <div class="content">
            <table width="100%" border="0" align="center">
              <tbody width="100%">
                <tr>
                  <td><h2>Almost Done</h2></td>
                </tr>
                <tr>
                  <td><a class="email_logo" href=href=""><img alt="" src="/img/BMCT_Icon_Emails.png"></a></td>
                </tr>
                <tr>
                  <td><p class="body_text">To proceed further <br />
                       <br />
                      </p></td>
                </tr>
                <tr>
                  <td><p class="body_text"><a href="" class="just_click"> YOUR EMAIL VERIFY LINK :</a> </p></td>
                </tr>
                <tr>
                  <td class="confirm_btn"><a href="${webURL.website_url.host}/resetPassword?email=${email}&forgotToken=${text}" >verify link</a></td>
                </tr>
                <tr>
                  <td><p></p></td>
                </tr>
              </tbody>
            </table>
          </div>
          <footer>
            <p>2018 <span>©</span> WAKI <br />
              All rights reserved</p>
          </footer>
        </div>
        </body>
        </html>
        `
        const mailBody = {
            from: "<do_not_reply@gmail.com>",
            to: email,
            subject: subject,
            html: html
                // html: "<p>Your verification code is " + text + "</p>"
        };
        mailer.createTransport({
            service: 'gmail',
            auth: {
                user: config_json.nodemailer.user,
                pass: config_json.nodemailer.pass
            },
            port: 587,
            host: 'smtp.gmail.com'

        }).sendMail(mailBody, callback)
    },

    //nodemailer
    sendMailTest: (email, subject, text, callback) => {
        var html = `<p>Welcome to WAKI!</p><br><p>Thanks for choosing WAKI. Your Vendor panel login credentials are as follows:-</p><br><h3>Email :"  ${email}  "</h3><h3>Password :"${text} "</h3><br>Regards<br>WAKI Team.`
        const mailBody = {
            from: "<do_not_reply@gmail.com>",
            to: email,
            subject: subject,
            // html: html
            html: html
        };

        mailer.createTransport({
            service: 'GMAIL',
            auth: {
                user: config_json.nodemailer.user,
                pass: config_json.nodemailer.pass
            },
            port: 587,
            host: 'smtp.gmail.com'

        }).sendMail(mailBody, callback)
    },

    sendSMS: (message, number, callback) => {
        console.log("@@@@@@@@@", config_json.twilio.sid)
        console.log("#$4$$$", typeof number)
        let client = new twilio(config_json.twilio.sid, config_json.twilio.auth_token);
        client.messages.create({
                body: `Your Verification One time Password is ${message}`,
                to: "+91" + number, // Text this number
                from: config_json.twilio.number // From a valid Twilio number
            })
            .then((message) => {
                callback(null, message.sid);
            })
            .catch((response) => {
                callback(response);
            })
    },

    getOTP: () => {
        var val = Math.floor(100000 + Math.random() * 900000);
        console.log("value==>>", val);
        return val;
    },

    generateOrderId: (length) => {
        var random = Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
        // random.toUpperCase()
        return random.toUpperCase()
    },

    upload_image: async(req, res) => {
        // res_promises will be an array of promises
        let res_promises = req.files.map(file => new Promise((resolve, reject) => {
                cloudinary.v2.uploader.upload(file.path, { use_filename: true, unique_filename: false }, function(error, result) {
                    if (error) reject(error)
                    else resolve(result.public_id)
                })
            }))
            // Promise.all will fire when all promises are resolved 
        Promise.all(res_promises)
            .then(result => res.json({ 'response': upload }))
            .catch((error) => { /*  handle error */ })
    },

    genOrderId: () => {
        console.log("generate order id", orderid.generate())
        return orderid.generate()
    },


    //!android notification
    "android_notification": function(deviceToken, msg, title, orderId, type) {
        console.log("module calledANDROID")
        var serverKey = "AAAAoBcORhQ:APA91bGfm_qj7PaZQfjiqKNJ76A4vFlx4W-rSy6jciyskt80ykuJxZqePZ5s6S1rcMUFHLeGFkqtJqXusZXDtfGv7lO8kHMpNjlWkypJBPqNr0Uozm6Ay5rQTia8pnm37DtUs2LWt4hP"
        console.log("title====>", title)
        var fcm = new FCM(serverKey);
        var message = {
            to: deviceToken,
            "data": {
                "title": title,
                "type": type,
                "msg": msg,
                "orderId": 'ORD' + orderId
            },

        };
        console.log("android_notification message===>", message);
        fcm.send(message, function(err, response) {
            if (err) {
                console.log("Something has gone wrong!");
                //res.send({responseCode:500,responseMessage:"success"});
                console.log("errror" + err);
            } else {
                //res.send({responseCode:200,responseMessage:"success"});
                console.log("Successfully sent with response: " + response);
            }
        });

    },
    // !IOS_NOTIFICATION
    "IOS_NOTIFICATION": function(deviceToken, msg, title, orderId, type, badge) {
        console.log("module calledIOS")
        var serverKey = "AAAAoBcORhQ:APA91bGfm_qj7PaZQfjiqKNJ76A4vFlx4W-rSy6jciyskt80ykuJxZqePZ5s6S1rcMUFHLeGFkqtJqXusZXDtfGv7lO8kHMpNjlWkypJBPqNr0Uozm6Ay5rQTia8pnm37DtUs2LWt4hP"
        console.log("title====>", title)
        var fcm = new FCM(serverKey);
        var message = {
            "to": deviceToken,
            "notification": { "title": title, "body": msg, badge: badge, "type": type, "orderId": "ORD" + orderId },
            "priority": "high"
        };

        console.log("IOS_NOTIFICATION message===>", message);
        fcm.send(message, function(err, response) {
            if (err) {
                console.log("Something has gone wrong!");
                //res.send({responseCode:500,responseMessage:"success"});
                console.log("errror" + err);
            } else {
                //res.send({responseCode:200,responseMessage:"success"});
                console.log("Successfully sent with response: " + response);
            }
        });
    },
    generatePassword: () => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    },

    find_duplicate_in_array: (arra1) => {
        var object = {};
        var result = [];

        arra1.forEach(function(item) {
            if (!object[item])
                object[item] = 0;
            object[item] += 1;
        })

        for (var prop in object) {
            if (object[prop] >= 2) {
                result.push(prop);
            }
        }

        return result;

    },
    remove_duplicate_value: (names) => {
        let unique = {};
        names.forEach(function(i) {
            if (!unique[i]) {
                unique[i] = true;
            }
        });
        return Object.keys(unique);
    },

    getSum: (total, num) => {
            return total + num;
        }
        // console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

}