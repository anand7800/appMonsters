// const orderModel = require('../Models/userModel/userOrder')
const orderModel = require('../Models/ProductModel/bagModel')
const placeOrderModel = require('../Models/ProductModel/orderPlaceModel')

const brandDescriptionL4 = require('../Models/ProductModel/productModel')
const categoryBrandModelL3 = require('../Models/ProductModel/productCategory')
// const placeOrderModel = require('../Models/ProductModel/orderPlaceModel')
const wishListModel = require('../Models/ProductModel/wishModel')
const expriedModel = require('../Models/userModel/expiredTable')
const categoryModelL1 = require('../Models/ProductModel/categoryModel')
const topOffersL6 = require('../Models/userModel/topOffers')
const subCategoryModelL2 = require('../Models/ProductModel/subcategoryModel')
const reviewAndRatingL5 = require('../Models/userModel/reviewAndRating')
//!newModel
const reviewRatingModel = require('../Models/ProductModel/reviewRatingModel')
var brandListModel = require('../Models/ProductModel/allBrandModel')
const userModel = require('../Models/userModel/userPanelModel')
const commonFunction = require('../commonFile/commonFunction')
var async = require('async')
var mongoose = require('mongoose')
const notificationModel = require('../Models/userModel/userNotification')

//!deleteCart
deleteCart = async (userId, productId) => {
    console.log("delete mei aya hua data ", userId, productId)
    orderModel.findOne({ userId: userId }, (err, userFound) => {
        if (err) {
            throw err
        }
        else if (userFound) {
            query = { userId: userId },
                update = {
                    $pull: {
                        orderDescription: {
                            productId: productId
                        }
                    }
                }
            orderModel.find({ $and: [query, { 'orderDescription.productId': productId }] }, { 'orderDescription.$': 1 }).exec((err, findId) => {
                if (err) throw err
                else if (findId.length > 0) {
                    orderModel.update({ _id: findId[0]._id }, update, { new: true }).exec((err, deleted) => {
                        if (err) throw err

                        else {
                            console.log("cart is empty", err, deleted)
                            return
                        }
                    })
                }
            })
        }
        else {
            return
        }
    })
}

//!productProduct
findProduct = async (_id, cb) => {
    brandDescriptionL4.findOne({ "_id": _id }).exec((err, result) => {
        // log("#########33", err, result)
        if (err) cb(null)
        else cb(null, result)
    })
}

//!findBrand
findBrand = async (_id, cb) => {
    brandListModel.findOne({ _id: _id }).exec((err, res) => {
        if (err) cb(null)
        else cb(null, res)
    })
}



//!orderPlace populate
populateAddress = async (data, cb) => {
    placeOrderModel.findById(data, { userId: 1 }).populate({ 'path': 'userId', 'select': 'address' }).exec((err, result) => {
        // console.log("%%%%%%%%%%%%%%%%%%%%",err,result.userId.address)
        if (err) cb(null)
        else cb(null, result.userId.address)
    })
}

//!delete form wishlist
deleteWist = async (userId, productId) => {
    wishListModel.findOne({ userId: userId }, (err, userFound) => {
        if (err) {
            throw err
        }
        else if (userFound) {
            query = { userId: userId },
                update = {
                    $pull: {
                        wishListDescription: {
                            productId: productId
                        }
                    }
                }
            wishListModel.find({ $and: [query, { 'wishListDescription.productId': productId }] }, { 'wishListDescription.$': 1 }).exec((err, findId) => {
                if (err) throw err
                else if (findId.length > 0) {
                    orderModel.update({ _id: findId[0]._id }, update, { new: true }).exec((err, deleted) => {
                        if (err) throw err

                        else {
                            return
                        }
                    })
                }
            })
        }
        else {
            return
        }
    })
    return
}

//!expried Model
insertProductToExpiredModel = async (userId, productId, cb) => {
    expriedModel.findOne({ userId: userId }).exec((err, findData => {
        if (err) throw err
        else if (findData) {
            expriedModel.findOneAndUpdate({ userId: userId }, { $push: { productId: productId } }, { new: true }, (err, updated) => {
                if (err) throw err
                else {
                    return
                }
            })
        }
        else {
            query = {
                userId: userId,
                productId: [productId]
            }
            new expriedModel(query).save((err, save) => {
                if (err) throw err
                else return
            })
        }
    }))
}
//!toppicksmobile
mobile = async (callback) => {
    console.log("function called")
    subCategoryModelL2.find({ 'subCategories.subCategoryName': "Mobile" }, { 'subCategories.$': 1 }).exec((err, result) => {
        // console.log("#@@@@@@@@@@@@@@@@@@@@",err, JSON.stringify(result) ,"###############")
        if (err) callback(null)

        else if (result.length > 0) {
            brandDescriptionL4.find({ subCategory: result[0].subCategories[0]._id, 'brandDesc.$.status': 'ACTIVE' }).populate({ 'path': 'brandDesc.brandId', 'select': 'brandName' }).populate({ path: 'brandDesc.varianceId' }).lean().exec((err, res) => {
                // console.log("product description",JSON.stringify(res))
                if (err) callback(null)
                else {

                    callback(null, res)
                }
            })
        }
    })
}
//!top Picks in brands
topBrands = async (cb) => {
    brandListModel.find({ status: "ACTIVE" }).exec((err, result) => {
        // log(result)
        cb(null, result)
    })
}
//!top Picks in category
category = async (cb) => {
    categoryModelL1.find({ 'categories.status': "ACTIVE" }, null, { sort: { 'categories.serialNumber': 1 } }).select({ 'categories.categoryName': 1, '_id': 1, 'categories.icons': 1, 'categories.image': 1 }).exec((err, result) => {
        if (err) {
            cb(null)
        }
        else if (!result) {
            cb(null)
        }
        else {
            temp = []
            async.forEachOf(result, function (item, key, callback) {
                data = {
                    "_id": item._id,
                    "categoryName": item.categories.categoryName,
                    "image": item.categories.image,
                    "icons": item.categories.icons,
                }
                temp.push(data)
                callback();
            }, function (err) {
                if (err) {
                    cb(null)
                }
                else {
                    cb(null, temp)
                }
            });
        }
    })
}
//!trending
trending = async (cb) => {
    categoryModelL1.findOne({ $or: [{ 'categories.categoryName': "Women Fashion" }, { 'categories.categoryName': "Men Fashion" }] }, { new: true }).exec((err, result) => {
        // console.log("@@@@@@@@@@@2",result)
        if (result) {
            brandDescriptionL4.find({ categoryModel: result._id }).populate({ 'path': 'brandDesc.brandId', 'select': 'brandName' }).populate({ path: 'brandDesc.varianceId' }).lean().exec((err, result2) => {
                // log("trending", err, JSON.stringify(result2))
                cb(null, result2)
            })
        }
        else cb(null)
        // cb(null,result)
    })
}
//!top Offer
offers = async (cb) => {
    topOffersL6.find({ 'topOffers.status': "ACTIVE" }).select({ 'topOffers.topOfferName': 1, '_id': 1, 'topOffers.offerImage': 1, 'topOffers.description': 1 }).exec((err, result) => {

        // console.log("@#$%&^%$#$", err, result)
        if (err) {
            cb(null)
        }
        else if (!result) {
            cb(null)
        }
        else {
            var temp = []
            async.forEachOf(result, function (item, key, callback) {
                data = {
                    "_id": item._id,
                    "topOfferName": item.topOffers.topOfferName,
                    "offerImage": item.topOffers.offerImage,
                    "description": item.topOffers.description,
                }
                temp.push(data)
                callback();
            }, function (err) {
                if (err) {
                    cb(null)
                }
                else {
                    cb(null, temp)
                }
            });
        }
    })
}
//! promoted deals
promotedDeals = async (cb) => {
    topOffersL6.find({}).sort({
        $natural: -1
    }).limit(1).exec((err, result) => {
        // log(result)
        cb(null, result)
    })
}

//!
findBrandListBysubcatory = async (subCategoryId, cb) => {
    // console.log('subCategoryId',subCategoryId)
    categoryBrandModelL3.find({ subCategory: subCategoryId }).exec((err, result) => {
        // console.log(err, result[0].categoriesBrand)
        console.log(err, result)
        if (err || result[0].categoriesBrand < 0) {

            cb(null)
        }
        else {
            // console.log(result)
            cb(null, result)
        }
    })
}

//!similar Product
getSimilarProductlist = async (productId, cb) => {
    brandDescriptionL4.findOne({ "_id": productId }).lean().exec((err, result1) => {
        brandDescriptionL4.find({ brandId: result1.brandId }).populate({ path: 'brandId', select: 'brandName' }).lean().exec((err, result3) => {
            // console.log("errAnd result",err, result3)
            if (err || !result3) {

                cb(null)
            }
            else {
                // console.log(result3)
                cb(null, result3)
            }
        })
    })

}
//!placeOrder
placeOrder = async (userId, data, addressId, orderPayment, orderId, callback) => {
    console.log("@@@@@@@@@2", userId, data, addressId, orderPayment, orderId)
    placeOrderModel.findOne({ userId: userId }, (err, userFind) => {
        if (err) {
            callback(null)
        }
        else if (userFind) {
            console.log("user is find")
            placeOrderModel.findOneAndUpdate({ userId: userId }, {
                $push: {
                    orderPlacedDescription: {
                        sellerId: data.sellerId,
                        productId: data.productId,
                        // varianceId: data.varianceId,
                        orderPayment: orderPayment ? orderPayment : "COD",
                        orderStatus: "PLACED",
                        productQuantity: data.productQuantity ? data.productQuantity : 1,
                        orderId: orderId,
                        transactionId: "1234567890",
                        addressId: addressId ? addressId : "null",
                        deliveryCharges: "50",
                        estimateTax: "17",
                        totalAmountPaid: data.totalAmountPaid ? data.totalAmountPaid : "0000"

                    }
                }
            }, { new: true, lean: true }, (err, orderPlaced) => {
                if (err) {
                    callback(null)
                }
                else if (orderPlaced) {
                    callback(null, orderPlaced)
                }
                else {
                    callback(null)
                }
            })
        }
        else {
            log('not exist')
            let query = {
                userId: userId,
                orderPlacedDescription: {
                    productId: data.productId,
                    varianceId: data.varianceId,
                    orderPayment: orderPayment ? orderPayment : "COD",
                    orderStatus: "PLACED",
                    productQuantity: data.productQuantity ? data.productQuantity : 1,
                    orderId: orderId,
                    addressId: addressId ? addressId : "null",
                    totalAmountPaid: data.totalAmountPaid ? data.totalAmountPaid : "234"
                }
            }
            var place = new placeOrderModel(query)
            place.save(query, (err, result) => {
                if (err) {
                    callback(null)
                }
                else if (result) {
                    callback(null, result)
                }
                else {
                    callback(null)
                }
            })
        }
        // //!!! delete in addtocart
        // commonAPI.deleteCart(userId, productId)
        // //!
    })
}


//!trending Fashion
// Trending = (callback) => {
//     console.log("function called")
//     subCategoryModelL2.find({ 'subCategories.subCategoryName': "Mobile" }, { 'subCategories.$': 1 }).exec((err, result) => {
//         // console.log("#@@@@@@@@@@@@@@@@@@@@",err, JSON.stringify(result) ,"###############")
//         if (err) callback(null)

//         else if (result.length > 0) {
//             brandDescriptionL4.find({ subCategory: result[0].subCategories[0]._id }).populate({'path':'brandDesc.brandId' ,'select':'brandName'}).lean().exec((err, res) => {
//                 console.log("product description",JSON.stringify(res))
//                 if (err) callback(null)
//                 else {

//                     callback(null, res)
//                 }
//             })
//         }
//     })
// },
//! productCategory
productCategory = async (callback) => {
    categoryBrandModelL3.find({}).lean().select({}).exec((err, result) => {
        console.log("*&^%$#@#$%^Y&U*(*&^%$%^&*", err, result)
        if (err) {
            callback(null)
        }
        else {
            callback(null, result)
        }
    })
}

//!change status for place order 


changeFeedBackStatus = async (orderId, productId, reviewId) => {
    console.log("============>>", reviewId)
    var order = orderId.replace("ORD", "")
    let query = { $and: [{ 'orderPlacedDescription.orderId': order }, { 'orderPlacedDescription.productId': productId }] }
    var update = { $set: { 'orderPlacedDescription.$.feedbackAdded': true, 'orderPlacedDescription.$.reviewRatingId': reviewId } }
    placeOrderModel.findOneAndUpdate(query, update, { new: true }).lean().exec((err, succ) => {
        if (err) throw err
        else return succ
    })
}

//!reviewAndRating
// reviewAndRating = async (_id, cb) => {
//     // brandDescriptionL4.findOne({ "brandDesc._id": _id }, { "brandDesc.$": 1 }, (err, result) => {
//     //     // log(result.brandDesc[0]._id)
//     // productId = result.brandDesc[0]._id
//     // var a = _id.toString()
//     reviewAndRatingL5.aggregate([
//         {
//             $project: {
//                 reviewAndRating: {
//                     $filter: {
//                         input: "$reviewAndRating",
//                         as: "item",
//                         cond: {
//                             $and: [
//                                 { $eq: ["$$item.productId", mongoose.Types.ObjectId(_id)] },
//                                 { $eq: ["$$item.status", "ACTIVE"] }
//                             ]
//                         }
//                     }
//                 }
//             }
//         }


// {
//     $unwind: '$reviewAndRating'
// }, {
//     $match: {
//         // 'orderPlacedDescription.sellerId': mongoose.Types.ObjectId(userId)
//         $or: [
//             { 'reviewAndRating.productId': mongoose.Types.ObjectId(_id) },
//             { 'reviewAndRating.status': "ACTIVE"}
//         ]
//     },
//     // { $sort: { 'orderPlacedDescription.createdAt': -1 } }
// }
//     ])/* reviewAndRatingL5.find({reviewAndRating: {$elemMatch: {productId: _id } } }).populate({path: 'reviewAndRating.userId',select:'firstName lastName image'}) */.exec((err, result) => {

//         console.log("result",err, JSON.stringify(result))
//         if (err || result.length < 0) cb(null)
//         else cb(null, result)
//     })
//     // })
// }

reviewAndRating = (_id, cb) => {
    console.log("adfasfasdfasdf", _id)
    // brandDescriptionL4.findOne({ "brandDesc._id": _id }, { "brandDesc.$": 1 }, (err, result) => {
    //     // log(result.brandDesc[0]._id)
    // productId = result.brandDesc[0]._id
    // var a = _id.toString()
    reviewRatingModel.find({ productId: mongoose.Types.ObjectId(_id) }).populate({ path: 'userId', select: 'firstName lastName image' }).exec((err, result) => {

        // console.log("result", err, JSON.stringify(result))
        if (err || !result) cb(null)
        else cb(null, result)
    })
    // })
}

//getReview user
getUsername = async (user, cb) => {
    userModel.findOne({ _id: user }, { firstName: 1, lastName: 1, image: 1 }).exec((err, result) => {
        // console.log("%#$%#$%#$%#$%#$%$%%#%#%#$%#$",result)

        if (err) cb(null)
        else cb(null, result)
    })

}
//getUserDetail
getUserDetail = async (userId, cb) => {
    userModel.findOne({ _id: userId }).exec((err, result) => {
        // console.log("%#$%#$%#$%#$%#$%$%%#%#%#$%#$",result)
        if (err || !result) cb(null)
        else cb(null, result)
    })
}
//send notification
notify = (data, userId, cb) => {
    getUserDetail(userId, (err, result) => {

        if (result.deviceType == 2) {
            commonFunction.IOS_NOTIFICATION(result.deviceToken, data.msg, data.title, data.orderId, data.type, "1")
        }
        else if (result.deviceType == 1) {
            commonFunction.android_notification(result.deviceToken, data.msg, data.title, data.orderId, data.type)
        }
        let query = {
            userId: mongoose.Types.ObjectId(userId)
        }
        let update = {
            $push: {
                notification: {
                    info: data.productId,
                    orderId: data.orderId,
                    notificationTitle: data.title,
                    notificationMessage: data.msg,
                    notificationType: data.type,
                }
            }
        }
        notificationModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
            console.log(err, result)
            if (err) cb(null)
            else if (result) {
                console.log("update")
                cb(null, result)
            }
            else {
                console.log("notupdate")
                let createNew = {
                    userId: userId,
                    notification: {
                        info: data.productId ? data.productId : "",
                        orderId: data.orderId ? data.orderId : '',
                        notificationTitle: data.title,
                        notificationMessage: data.msg,
                        notificationType: data.type
                    }
                }
                notificationModel.create(createNew, (err, create) => {
                    console.log(err, create)
                    cb(null, create)

                })
            }
        })
    })
}

//change statue notifcaition
changeNotification = (data, callback) => {
    console.log("data", data)

    query = {
        $and: [
            { userId: "5bfbb0bbfd72a14b693fa9a0" },
            { 'notification.orderId': 'ORDZ1LIQZ' }
        ]
    }
    update = {
        $set: {
            notification: { info: "efjghfgdh" },
            notification: { orderId: "efjghfgdh" },
            notification: { notificationMessage: "efjghfgdh" },
            notification: { notificationTitle: "efjghfgdh" },
            notification: { notificationType: "12345678" },

        }
    }
    notificationModel.findOneAndUpdate(query, update, { multi: true, new: true }).exec((err, success) => {
        console.log("common api", err, success)
        callback(null, success)
    })
}

module.exports = {
    deleteCart,
    findProduct,
    findBrand,
    reviewAndRating,
    populateAddress,
    deleteWist,
    insertProductToExpiredModel,
    mobile,
    topBrands,
    category,
    trending,
    offers,
    promotedDeals,
    findBrandListBysubcatory,
    getSimilarProductlist,
    placeOrder,
    productCategory,
    changeFeedBackStatus,
    getUsername,
    getUserDetail,
    notify,
    changeNotification

}