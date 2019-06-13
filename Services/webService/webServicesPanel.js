const categoryModelL1 = require('../../Models/ProductModel/categoryModel')
const subCategoryModelL2 = require('../../Models/ProductModel/subcategoryModel')
const productCategoryModelL3 = require('../../Models/ProductModel/productCategory')
const brandModel = require('../../Models/ProductModel/allBrandModel')
const productModel = require('../../Models/ProductModel/productModel')
const varianceModel = require('../../Models/ProductModel/productVariance')
// const orderModel = require('../../Models/userModel/userOrder')
// const placeOrderModel = require('../../Models/userModel/orderPlaced')
const userModel = require('../../Models/userModel/userPanelModel')
const productOffer = require('../../Models/ProductModel/productofferModel')
const bagModel = require('../../Models/ProductModel/bagModel')
const wishModel = require('../../Models/ProductModel/wishModel')
const orderPlaced = require('../../Models/ProductModel/orderPlaceModel')
const physicalStores = require('../../Models/userModel/addPhysicalStore')
const userBusinessDetails = require('../../Models/userModel/businessDetail')

const reviewAndRatingL5 = require('../../Models/userModel/reviewAndRating')
//!newModel

//chat model
var chatHistory = require('../../Models/userModel/chatHistory');
var Room = require('../../Models/userModel/room.js');
var User = require('../../Models/userModel/chatUser.js');
var urlMedia = require('../../Models/userModel/chatUrl.js');

//
const reviewRatingModel = require('../../Models/ProductModel/reviewRatingModel')
const notificationModel = require('../../Models/userModel/userNotification')
const moment = require('moment')

const async = require('async')
let util = require('../../Utilities/util')
const commonFunction = require('../../commonFile/commonFunction')
const commonAPI = require('../../commonFile/commonApi')
const mongoose = require('mongoose')
const waterfall = require('async-waterfall');
const _ = require('lodash');
var qr = require('qr-image');
const today = moment().startOf('day')
var Promise = require('promise');

/* ************************************
*************api's start here***********************
************************************ */


dashboardGraph = (data, header, callback) => {

    console.log(data);

    let userId 
    if (header.accesstoken) {

        commonFunction.jwtDecode(header.accesstoken, (err, decodeId) => {
            if (err) throw err
            else {
                userId = decodeId
            }
        })
    }
    else {
        callback({
            "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang]
        })
        return
    }
    async.waterfall([
        function (cb) {
            let query = [
                {
                    $unwind: '$orderPlacedDescription'
                }, {
                    $match: {
                        // 'orderPlacedDescription.sellerId': mongoose.Types.ObjectId(userId)
                        $or: [
                            { 'orderPlacedDescription.sellerId': mongoose.Types.ObjectId(userId) }
                        ]
                    },
                    // { $sort: { 'orderPlacedDescription.createdAt': -1 } }
                },
                {
                    $group: {
                        _id: "$orderPlacedDescription"

                    }
                }
            ]
            orderPlaced.aggregate(query).exec((err, response) => {

                cb(null, response)
            })
        },

    ], (err, response) => {
        let mainArr = []
        console.log(err, response)
        let orderList = []
        let month_array=[1,2,3,4,5,6,7,8,9,10,11,12]
        var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        
        if (response.length > 0) {
            response.forEach(element => {
                let temp = {
                    createdAt: new Date(element._id.createdAt).getMonth()+1,
                    amountPaid: parseInt(element._id.totalAmountPaid == '' ? 0 : element._id.totalAmountPaid)
                }
                orderList.push(temp)
            });
            //Lopp
            month_array.forEach(ele =>{
            let amount = 0;
                orderList.forEach(ele1 =>{
                    if(ele == ele1.createdAt){
                           amount = amount + ele1.amountPaid
                    }
                    else{
                        amount = amount
                     }
                }) 
                mainArr.push(amount)
            })
        }
        callback({"statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang],value:mainArr,month:month})
        // callback(orderList)
    })
}



module.exports = {
    dashboardGraph,

}