const orderModel = require('../Models/userModel/userOrder')
const brandDescriptionL4 = require('../Models/userModel/brandDescription')
const categoryBrandModelL3 = require('../Models/userModel/productCategory')
const placeOrderModel = require('../Models/userModel/orderPlaced')
const wishListModel = require('../Models/userModel/userWishListModel')
const expriedModel = require('../Models/userModel/expiredTable')
const categoryModelL1 = require('../Models/userModel/categoryModel')
const topOffersL6 = require('../Models/userModel/topOffers')
const subCategoryModelL2 = require('../Models/userModel/subCategoryModel')
const reviewAndRatingL5 = require('../Models/userModel/reviewAndRating')
var brandListModel = require('../Models/userModel/brandListing')

var async = require('async')



//!deleteCart
deleteCart = (userId, productId) => {
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
},

    //!productProduct
    findProduct = (_id, cb) => {
        brandDescriptionL4.findOne({ "brandDesc._id": _id }, { "brandDesc.$": 1 }).exec((err, result) => {
            // log("#########33", err, result)
            if (err) cb(null)
            else cb(null, result)
        })
    },

    //!findBrand
    findBrand = (_id, cb) => {
        brandDescriptionL4.findOne({ "brandDesc._id": _id }).exec((err, result) => {
            categoryBrandModelL3.findOne({ 'categoriesBrand._id': result.categoryBrand }, { "categoriesBrand.$": 1 }).exec((err, result2) => {
                if (err) cb(null)
                else cb(null, result2)
            })
        })
    },


    //!reviewAndRating
    reviewAndRating = (_id, cb) => {
        brandDescriptionL4.findOne({ "brandDesc._id": _id }, { "brandDesc.$": 1 }, (err, result) => {
            // log(result.brandDesc[0]._id)
            productId = result.brandDesc[0]._id
            reviewAndRatingL5.aggregate([
                {
                    $project: {
                        reviewAndRating: {
                            $filter: {
                                input: "$reviewAndRating",
                                as: "item",
                                cond: { $eq: ["$$item.productId", productId.toString()] }
                            }
                        }
                    }
                }
            ]).exec((err, result) => {
                if (err) cb(null)
                else cb(null, result)
            })
        })
    },
    //!orderPlace populate

    populateAddress = (data, cb) => {
        placeOrderModel.findById(data, { userId: 1 }).populate({ 'path': 'userId', 'select': 'address' }).exec((err, result) => {
            // console.log("%%%%%%%%%%%%%%%%%%%%",err,result.userId.address)
            if (err) cb(null)
            else cb(null, result.userId.address)
        })
    },

    //!delete form wishlist
    deleteWist = (userId, productId) => {
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
    },

    //!expried Model
    insertProductToExpiredModel = (userId, productId, cb) => {
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
    },
    //!toppicksmobile
    mobile = (callback) => {
        console.log("function called")
        subCategoryModelL2.find({ 'subCategories.subCategoryName': "Mobile" }, { 'subCategories.$': 1 }).exec((err, result) => {
            // console.log("#@@@@@@@@@@@@@@@@@@@@",err, JSON.stringify(result) ,"###############")
            if (err) callback(null)

            else if (result.length > 0) {
                brandDescriptionL4.find({ subCategory: result[0].subCategories[0]._id }).populate({ 'path': 'brandDesc.brandId', 'select': 'brandName' }).lean().exec((err, res) => {
                    // console.log("product description",JSON.stringify(res))
                    if (err) callback(null)
                    else {

                        callback(null, res)
                    }
                })
            }
        })
    },
    //!top Picks in brands
    topBrands = (cb) => {
        brandListModel.find({}).exec((err, result) => {
            // log(result)
            cb(null, result)
        })
    },
    //!top Picks in category
    category = (cb) => {
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
    },
    //!trending
    trending = (cb) => {
        categoryModelL1.findOne({ $or: [{ 'categories.categoryName': "Women Fashion" }, { 'categories.categoryName': "Men Fashion" }] }, { new: true }).exec((err, result) => {
            // console.log("@@@@@@@@@@@2",result)
            if (result) {
                brandDescriptionL4.find({ categoryModel: result._id }).populate({ 'path': 'brandDesc.brandId', 'select': 'brandName' }).exec((err, result2) => {
                    // log("trending", err, JSON.stringify(result2))
                    cb(null, result2)
                })
            }
            else cb(null)
            // cb(null,result)
        })
    },
    //!top Offer
    offers = (cb) => {
        topOffersL6.find({ 'topOffers.status': "ACTIVE" }).select({ 'topOffers.topOfferName': 1, '_id': 1, 'topOffers.offerImage': 1, 'topOffers.description': 1 }).exec((err, result) => {
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
    },
    //! promoted deals
    promotedDeals = (cb) => {
        topOffersL6.find({}).sort({
            $natural: -1
        }).limit(1).exec((err, result) => {
            // log(result)
            cb(null, result)
        })
    },

    //!
    findBrandListBysubcatory = (subCategoryId, cb) => {
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
    },

    //!similar Product
    getSimilarProductlist = (productId, cb) => {
        brandDescriptionL4.findOne({ "brandDesc._id": productId }).lean().exec((err, result1) => {
            // console.log("result",result1)
            // console.log("result===>>",JSON.stringify(result1.brandId),'end ')
            //   console.log("common api",err, result2.categoriesBrand[0]._id)
            brandDescriptionL4.findOne({ brandId: result1.brandId }).populate({ path: 'brandDesc.brandId', select: 'brandName' }).lean().exec((err, result3) => {
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

placeOrder = (userId, data, addressId, orderPayment, orderId, callback) => {
    console.log("@@@@@@@@@2", userId, data, addressId, orderPayment, orderId)
    placeOrderModel.findOne({ userId: userId }, (err, userFind) => {
        if (err) {
            callback(null)
        }
        else if (userFind) {
            console.log("user is find")
            query = { userId: userId },
                update = {
                    $push: {
                        orderPlacedDescription: {
                            productId: data.productId,
                            varianceId:data.varianceId,
                            orderPayment: orderPayment ? orderPayment : "COD",
                            orderStatus: "PLACED",
                            productQuantity: data.productQuantity ? data.productQuantity : 1,
                            orderId: orderId,
                            transactionId: "1234567890",
                            addressId: addressId ? addressId : "null",
                            deliveryCharges: "50",
                            estimateTax: "17"
                        }
                    }
                }
            console.log(update)
            placeOrderModel.findOneAndUpdate(query, update, { new: true, lean: true }, (err, orderPlaced) => {
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
                    varianceId:data.varianceId,
                    orderPayment: orderPayment ? orderPayment : "COD",
                    orderStatus: "PLACED",
                    productQuantity: data.productQuantity ? data.productQuantity : 1,
                    orderId: orderId,
                    addressId: addressId ? addressId : "null"
                }
            }
            placeOrderModel.create(query, (err, result) => {
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

productCategory = (callback) => {
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
    productCategory

}