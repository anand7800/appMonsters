const async = require('async')
const subCategoryModelL2 = require('../../Models/ProductModel/subcategoryModel')
const categoryModelL1 = require('../../Models/ProductModel/categoryModel')

// const categoryBrandModelL3 = require('../../Models/userModel/productCategory')
// const productCategoryModel = require('../../Models/userModel/productCategory')
const categoryBrandModelL3 = require('../../Models/ProductModel/productCategory')
const productCategoryModel = require('../../Models/ProductModel/productCategory')
//!
// const brandDescriptionL4 = require('../../Models/userModel/brandDescription')
const brandDescriptionL4 = require('../../Models/ProductModel/productModel')

// const topOffersL6 = require('../../Models/userModel/topOffers')
const topOffersL6 = require('../../Models/ProductModel/productofferModel')


const reviewAndRatingL5 = require('../../Models/userModel/reviewAndRating')
//!newModel
const reviewRatingModel = require('../../Models/ProductModel/reviewRatingModel')
// const orderModel = require('../../Models/userModel/userOrder')
const orderModel = require('../../Models/ProductModel/bagModel')

const wishListModel = require('../../Models/ProductModel/wishModel')
// const placeOrderModel = require('../../Models/userModel/orderPlaced')
const placeOrderModel = require('../../Models/ProductModel/orderPlaceModel')

const userModel = require('../../Models/userModel/userPanelModel')
// const brandListModel = require('../../Models/userModel/brandListing')
const brandListModel = require('../../Models/ProductModel/allBrandModel')

const businessDetails1 = require('../../Models/userModel/businessDetail')
const physicalStores = require('../../Models/userModel/addPhysicalStore')
const varianceModel = require('../../Models/ProductModel/productVariance')

const notificationModel = require('../../Models/userModel/userNotification')
let util = require('../../Utilities/util')
const commonFunction = require('../../commonFile/commonFunction')
const commonAPI = require('../../commonFile/commonApi')
const mongoose = require('mongoose')
const waterfall = require('async-waterfall');
const _ = require('lodash');
var qr = require('qr-image');

//! add Top Offers
addTopOffers = (data, callback) => {
    if (!data) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {

        async.parallel({
            exist: (cb) => {
                topOffersL6.findOne({ 'topOffers.topOfferName': data.topOfferName }, (err, exist) => {
                    if (err) cb(null)
                    else if (!exist) cb(null)
                    else cb(null, exist)
                })
            },

            uploadImage: (cb) => {
                commonFunction.uploadImg(data.offerImage, (err, image) => {
                    // log(err, image)
                    if (err) cb(null)
                    else if (!image) cb(null)
                    else cb(null, image)
                })
            }

        }, (err, response) => {
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
            }
            else if (response.exist) {
                callback({ "statusCode": util.statusCode.ALREADY_EXIST, "statusMessage": util.statusMessage.ALREADY_EXIST[data.lang] })
            }
            else {
                query = {
                    'topOffers.topOfferName': data.topOfferName,
                    'topOffers.offerImage': response.uploadImage,
                    'topOffers.description': data.description,
                    'topOffers.status': "ACTIVE"
                }
                topOffersL6.create(query, (err, result) => {
                    // log(err, result)
                    if (err)
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                    else if (!result)
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
                    else {
                        subCategoryModelL2.create({ categoryModel: result._id })
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.OFFERS_ADDED[data.lang], "result": result })
                    }
                })
            }
        })
    }
}
//! brand Nam//!upload image
uploadImage = (data, callback) => {
    log("called")
    commonFunction.uploadImg(data.image, (err, result) => {
        log(err, result)
        callback(result)
    })
}
//! business Details
businessDetails = (data, headers, callback) => {
    log("businessDetails")
    if (!data || !headers.accesstoken) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        async.parallel({
            exist: (cb) => {
                businessDetails1.findOne({ 'businessName': data.businessName }, (err, exist) => {
                    if (err) cb(null)
                    else if (!exist) cb(null)
                    else {
                        cb(null, exist)
                    }
                })
            },
        }, (err, response) => {
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
            }
            else if (response.exist) {
                callback({ "statusCode": util.statusCode.ALREADY_EXIST, "statusMessage": util.statusMessage.ALREADY_EXIST[data.lang] })
            }
            else {
                var userId
                commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
                    log(err, result)
                    userId = result
                })
                // console.log(userId, "lkod")
                let query = {
                    'userId': userId,
                    'businessName': data.businessName,
                    'phone': data.phone,
                    'email': data.email,
                    'sellingProduct': data.sellingProduct,
                    'streetAddress': data.streetAddress,
                    'cityName': data.cityName
                }
                businessDetails1.create(query, (err, result) => {
                    if (err)
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                    else if (!result)
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
                    else {

                        userModel.findOneAndUpdate({ _id: userId }, { $set: { isBussinessAdded: true } }).exec((err, succcc) => {
                            console.log(err, succcc)
                        })
                        // subCategoryModelL2.create({ categoryModel: result._id })
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.BUSINESS_DETAILS_ADDEDD[data.lang], "result": result })
                    }
                })
            }
        })
    }
}
//!checkoutOrder
checkoutOrder = (data, headers, callback) => {
    console.log('api is hitted')
    var userId
    var orderId = commonFunction.generateOrderId(6)
    commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
        userId = result
    })
    async.parallel({
        checkoutOrder: (cb) => {
            orderModel.findOne({ userId: userId }, (err, result) => {
                async.forEachOf(result.orderDescription, (value, key, callback) => {
                    commonAPI.placeOrder(userId, value, data.addressId, data.orderPayment, orderId, (err, result) => {
                        if (err) callback(null)
                        else callback(null, result)
                    })
                }, (err, result) => {
                    if (err) cb(null)
                    else {
                        cb(null, result)
                    }
                })
            })
        }
    }, (err, response) => {
        orderModel.findOneAndRemove({ userId: userId }, (err, result) => {
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
            }
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.ORDER_PLACED[data.lang] })
            }
        })
    })
}
//!add brand list
addBrand = (data, callback) => {
    console.log('add product')
    let query = {
        brandName: data.brandName,
        status: data.status ? data.status : "ACTIVE"
    }
    async.waterfall([
        (cb) => {
            if (data.brandImage) {
                commonFunction.uploadImg(data.brandImage, (err, image) => {
                    log("######33", err, image)
                    if (err) cb("null")
                    else if (!image) cb("null")
                    else cb(null, image)
                })
            } else {
                console.log("else contio")
                cb("null")
            }
        },
        function (image, cb) {
            console.log(')----------->>>>)))', image)
            brandListModel.find(query).exec((err, find) => {
                console.log(find)
                if (err || find.length > 0) {

                    cb(null, find)
                }
                else {
                    brandListModel.create({ brandName: data.brandName, icon: image, status: "ACTIVE" }, (err, succ) => {
                        cb(null, succ)
                    })
                }
            })
        }
    ], (err, result) => {
        console.log(err, result)
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": "add data successfully", "result": result })
    })
    /*  brandListModel.find(query).exec((err, find) => {
         if (err) {
             callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY })
         }
         else if (find.length > 0) {
             callback({ "statusCode": util.statusCode.ALREADY_EXIST, "statusMessage": util.statusMessage.ALREADY_EXIST })
         }
         else {
             brandListModel.create(query, (err, succ) => {
                 callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": "add data successfully", "result": succ })
             })
         }
     }) */

}
//!get brand list
getBrandList = (callback) => {
    // console.log('dasdf  ')
    brandListModel.find({ status: "ACTIVE" }, { status: 0 }).exec(async (err, succ) => {
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": "brand list", "result": succ })

    })
}
//!getproductList of an vendor
getProductList = (data, headers, callback) => {
    console.log('api is running', headers)
    var result = []
    var sellerId
    commonFunction.jwtDecode(headers.accesstoken, (err, decodeSellerId) => {
        if (err) throw err
        else {
            sellerId = decodeSellerId
        }
    })
    // console.log("seller id", sellerId)

    async.parallel({
        getProduct: (cb) => {
            brandDescriptionL4.find({ 'sellerId': sellerId }).populate({ path: 'brandId', select: { 'brandName': 1 } }).populate({ path: 'varianceId' }).exec((err, success) => {
                if (err) cb(null)
                else if (success.length > 0) {
                    async.forEachOf(success, async (value, key, cb) => {
                        await async.parallel({
                            getProductCategoryName: async (cb) => {
                                if (value.productCategoryId) {
                                    await productCategoryModel.findById({ '_id': value.productCategoryId }).exec(async (err, productCategoryName) => {
                                        // console.log("-----------------?>>>", productCategoryName)
                                        if (err) cb(null)
                                        else {
                                            cb(null, productCategoryName.productcategoryName)
                                        }
                                    })
                                }
                                else {
                                    cb(null, "")
                                }
                            }

                        }, (err, response) => {
                            temp = {
                                _id: value._id,
                                product: value.productName,
                                brand: value.brandId.brandName,
                                image: value.image[0],
                                description: value.description,
                                color: value.color,
                                status: value.status,
                                price: value.price,
                                getProductCategoryName: response.getProductCategoryName,
                                inventorySKU: value.inventorySKU,
                                quantity: value.quantity,
                                unitSold: "PENDING STATUS"
                            }
                            result.push(temp)
                            cb()
                        })
                    }, (err, response) => {
                        cb(null, result)
                    })
                }
                else {
                    cb(null)
                }
            })
        },
        getBrandofVendor: (cb) => {
            brandDescriptionL4.find({ 'sellerId': sellerId }).distinct('brandId').exec((err, result) => {
                if (err) cb(null)
                else cb(null, result)
            })
        },

        getcategoryofVendor: (cb) => {
            brandDescriptionL4.find({ 'sellerId': sellerId }).distinct('productCategoryId').exec((err, result) => {
                if (err) cb(null)
                else cb(null, result)
            })
        }







    }, (err, response) => {
        // console.log(err, response)
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': response })
    })







}
//!getBrand
getBrand = (data, callback) => {
    brandListModel.findOne({ _id: data.brandId }, { __v: 0 }).exec((err, result) => {
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
        }
    })
}
//!delete brand
deleteBrand = (data, callback) => {
    brandListModel.findOneAndUpdate({ _id: data.brandId }, { $set: { status: "INACTIVE" } }, { __v: 0, new: true }).exec((err, result) => {
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
        }
    })
}
//update brand
// updateBrand = (data, callback) => {
//     update = {
//         $set: {
//             brandName: data.brandName,
//             image: data.brandImage,
//             icon: data.brandIcon
//         }
//     }
//     brandListModel.findByIdAndUpdate({ _id: data.brandId }, update, { __v: 0, new: true }).exec((err, result) => {
//         if (err) {
//             callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
//         }
//         else {
//             callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
//         }
//     })
// }
//!vendor list for adminPanel
getUserList = (data, callback) => {
    console.log("getVendorList")
    let query = {
        $and: [
            // { status: 'active' },
            { userType: data.userType }
        ]
    }
    userModel.find(query, { firstName: 1, lastName: 1, image: 1, status: 1, email: 1, phone: 1 }).exec((err, result) => {
        if (err)
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], err: err })
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': result })
        }
    })
}
//!create vendor
createVendor = (data, callback) => {
    // console.log('create  vendor', data)
    // data.email.toLowerCase()
    if (!data.email || !data.password || !data.profilePic) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    var password = commonFunction.generatePassword()
    async.parallel({
        uploadImage: (cb) => {
            commonFunction.uploadImg(data.profilePic, (err, image) => {
                log(err, image)
                if (err) cb(null)
                else if (!image) cb(null)
                else cb(null, image)
            })
        },
        password: (cb) => {

            cb(null, util.encryptData(data.password))
        },
        checkuser: (cb) => {
            userModel.findOne({ $and: [{ email: data.email.toLowerCase() }] }).exec((err, result) => {
                console.log('===>', err, result)
                if (err || result == null)
                    cb(null)
                else if (result) {
                    callback({ "statusCode": util.statusCode.ALREADY_EXIST, "statusMessage": util.statusMessage.ALREADY_EXIST[data.lang] })
                    return
                }
            })
        }

    }, (err, response) => {
        var user = new userModel({
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            password: response.password,
            userType: "vendor",
            phone: data.phone,
            address: { addresses: data.address, lat: data.lat, lng: data.lng },
            image: response.uploadImage,
            storeType: data.storeType,
            countryCode: data.countryCode,
            // status: data.status ? data.status : 'inactive'

        })
        user.save((err, save) => {
            console.log(err, save)
            if (err) {
                callback({ "statusCode": util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG[data.lang] })
            }

            else if (save) {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.EMAIL_SENT[data.lang], 'result': save })
                commonFunction.sendMailTest(data.email, "WAKI", data.password, (err, mailsent) => {
                    console.log(err, mailsent)
                })
            }
        })
    })
}
//!delete vendor
deleteVendor = (data, callback) => {
    console.log("incoming data", data)
    userModel.findOneAndUpdate({ _id: mongoose.Types.ObjectId(data._id) }, { $set: { status: data.status } }, { new: true }).exec((err, result) => {
        console.log(err, result)
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })

        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.DELETE_VENDOR[data.lang], 'result': result })
        }
    })
}
//!changeOrderStatus
changeOrderStatus = (data, callback) => {
    console.log("change order Status", data)
    let query = {
        $and: [
            {
                'orderPlacedDescription.orderId': data.orderId.substring(3)
            }
        ]
    }
    update = {
        $set: {
            'orderPlacedDescription.$.orderStatus': data.status
        }
    }
    placeOrderModel.findOneAndUpdate(query, update, { new: true }, async (err, result) => {
        console.log(err, result)
        // commonAPI.changeNotification(data, (err, result) => {
        // })
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.STATUS_UPDATED[data.lang], 'result': result })
    })
}
//!getQrcode
getQrCode = (data, callback) => {
    console.log("ddaaaa", data)
    var code = qr.image(new Date().toString(), { type: 'svg' });
    // res.type('svg');
    // code.pipe(res);
    console.log(JSON.stringify(code))
}
//!DashBoard api
dashBoard = (data, callback) => {
    console.log("#####################" + data)
    async.auto({
        getUser: (cb) => {
            userModel.find({ userType: 'user' }).count().exec().then(async (result) => {
                // console.log("result", result)
                cb(null, result)
            })
        },
        getvendor: (cb) => {
            userModel.find({ userType: 'vendor' }).count().exec().then(async (result) => {
                // console.log("result", result)
                cb(null, result)
            })
        },
        totalOrder: (cb) => {
            placeOrderModel.find({}).exec().then(async (result) => {
                // console.log("result", result)
                var placeOrder = 0, cancelOrder = 0
                var sum = 0
                result.forEach(element => {
                    // console.log("lenght ", element.orderPlacedDescription.length)
                    // sum=sum+element.orderPlaced.length
                    element.orderPlacedDescription.forEach(checkStatus => {
                        // console.log("checktstatus",checkStatus)
                        if (checkStatus.orderStatus == 'PLACED') {
                            placeOrder++

                        }
                        if (checkStatus.orderStatus == 'CANCELLED') {

                            cancelOrder++
                        }
                        // console.log(cancelOrder)
                    });
                })
                var temp = {
                    "placeOrder": placeOrder,
                    "cancelOrder": cancelOrder,
                    "totalOrder": placeOrder + cancelOrder
                }
                console.log(temp)
                console.log("222", placeOrder, cancelOrder)
                cb(null, temp)
            })
        }

    }, (err, response) => {
        let res = {}
        console.log(err, response)
        res.totalVendor = response.getvendor
        res.totalUser = response.getUser
        res.orderDetail = response.totalOrder
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': res })
    })
}
//!GETUSERINFO
getUserinfo = (data, callback) => {
    console.log(data.userId)
    async.parallel({
        getUser: (cb) => {
            commonAPI.getUserDetail(data.userId, (err, success) => {
                if (err) cb(null)
                else if (success) {
                    cb(null, success)
                }
                else {
                    cb(null)
                }

            })
        },
        getPlaceOrder: (cb) => {
            placeOrderModel.findOne({ userId: mongoose.Types.ObjectId(data.userId) }).exec((err, result) => {
                console.log(err, result)
                var placeOrder = 0, cancelOrder = 0
                if (err) throw err
                else if (result) {
                    result.orderPlacedDescription.forEach(element => {
                        if (element.orderStatus == "PLACED") {
                            placeOrder++
                        }
                        else if (element.orderStatus == 'CANCELLED') {
                            cancelOrder++
                        }
                    })

                    var temp = {
                        'placeOrder': placeOrder,
                        'cancelOrder': cancelOrder
                    }
                    // console.log(placeOrder,cancelOrder)

                    cb(null, temp)
                }
                else {
                    cb(null)
                }

            })
        }
    }, (err, response) => {
        // console.log(response)
        res = {}
        res.userDetail = response.getUser
        res.order = response.getPlaceOrder ? response.getPlaceOrder : null
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': res })

    })
}
//!getAllVariant
getAllVariant = (data, callback) => {
    console.log('data,heddddddddddddaders', data)
    var res = []
    brandDescriptionL4.findOne({ '_id': data.productId }).populate({ path: 'varianceId' }).exec((err, result) => {
        // console.log("=============>>>",err,result)
        if (err) throw err
        else if (result && result.varianceId) {
            result.varianceId.variants.forEach(element => {
                // console.log(element)
                var temp = {
                    _id: result._id,
                    productName: result.productName,
                    inventorySKU: element.varianceId == null ? element.inventorySKU : element.varianceId.variants[0].SKU,
                    unitSold: "PENDING",
                    quantity: element.inventory,
                    image: element.image[0],
                    varianceId: element._id
                }
                res.push(temp)
            })
            console.log(res)



            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': res })
        }
        else
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang] })
    })
}
//!update stock
updateVarianceStock = (data, callback) => {

    console.log("data", data.varianceId, data.stock)

    varianceModel.findOneAndUpdate({ 'variants._id': data.varianceId }, { $set: { 'variants.$.quantity': data.stock } }, { new: true }).exec((err, success) => {

        if (err) throw err
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.STATUS_UPDATED[data.lang] })

        }
    })
}
//!editcategory
editCategory = (data, callback) => {
    console.log('incoming data', data)
    if (!data.categoryId || !data.categoryName) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    }
    else {
        let query = {
            _id: data.categoryId
        }
        let update = {
            $set: {
                'categoryName': data.categoryName
            }
        }
        categoryModelL1.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
            console.log(err, result)
            if (err) throw err
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.STATUS_UPDATED[data.lang], 'result': result })
            }
        })
    }
}
//!vendor order Status api // saturday
vendorOrderStatus = (data, header, callback) => {
    console.log("vendororderList", data, header)
    var userId
    commonFunction.jwtDecode(header.accesstoken, (err, result) => {
        userId = result
    })
    //!
    placeOrderModel.aggregate([{
        $unwind: '$orderPlacedDescription'
    }, {
        $match: {
            // 'orderPlacedDescription.sellerId': mongoose.Types.ObjectId(userId)
            $and: [
                { 'orderPlacedDescription.sellerId': mongoose.Types.ObjectId(userId) },
                { 'orderPlacedDescription.orderStatus': data.status },

            ]
        }
    }
    ], (err, result) => {
        // console.log(err, result)
        if (result.length == 0) {
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang] })
        }
        else {
            var demo = []
            async.forEachOf(result, (value, key, cb) => {
                brandDescriptionL4.findOne({ '_id': mongoose.Types.ObjectId(value.orderPlacedDescription.productId) }).populate({ path: 'brandId' }).exec((err, productDetail) => {
                    // console.log('############', err, productDetail)
                    userModel.findById({ _id: value.userId }, { firstName: 1, address: 1 }).exec((err, userInfo) => {
                        temp = {
                            customerName: userInfo.firstName,
                            customerAddress: "delhi",
                            productDetail: productDetail.productName,
                            quantity: value.orderPlacedDescription.productQuantity,
                            productImage: productDetail.image[0],
                            status: value.orderPlacedDescription.orderStatus,
                            orderId: value.orderPlacedDescription.orderId,
                            paymentStatus: value.orderPlacedDescription.orderPayment,
                            totalAmountPaid: value.orderPlacedDescription.totalAmountPaid + value.orderPlacedDescription.deliveryCharges + value.orderPlacedDescription.estimateTax,
                            createdAt: value.orderPlacedDescription.createdAt,


                        }
                        demo.push(temp)
                        cb()
                    })
                })
            }, (err, response) => {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': demo })
            })
        }
        // callback(result)
    })
}
deleteCategory = (data, callback) => {
    console.log("data", data)
    let query = {
        _id: data.categoryId,
    }
    let update = {
        $set: {
            status: data.status
        }
    }
    categoryModelL1.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
        }
        else {

            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': result })
        }
    })
}
//deleteSubCategory
deleteSubCategory = (data, callback) => {
    console.log("data", data)
    query = {
        _id: data.subCategoryId,
    }
    update = {
        $set: {
            status: data.status.toUpperCase()
        }
    }
    subCategoryModelL2.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': result })
        }
    })
}
//deleteSubCategory
deleteProductCategory = (data, callback) => {
    console.log("data", data)
    if (data.productCategoryId || data.status) {
        query = {
            _id: data.productCategoryId
        }
        update = {
            $set: {
                status: data.status.toUpperCase()
            }
        }
        productCategoryModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
            console.log("err,result", err, result)
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
            }
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': result })
            }
        })
    }
    else {
        console.log("asdfasfdasfadf")
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    }
}
changeProductStatus = (data, callback) => {
    console.log("data is ", data)
    if (!data.productId || !data.status) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    }
    else {
        brandDescriptionL4.findOneAndUpdate({ _id: data.productId }, { $set: { status: data.status.toUpperCase() } }, { new: true }).exec((err, result) => {

            if (err)
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': result })
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.STATUS_UPDATED[data.lang], 'result': result })
            }
        })
    }
}

//change review status

changeReviewStatus = (data, callback) => {
    console.log("incoming data ", data)
    if (!data.reviewId) {
        return
    }
    else {
        let query = {
            $or: [
                { '_id': data.reviewId }

            ]
        }
        let update = {
            $set: {
                'status': data.status.toUpperCase()
            }
        }
        reviewRatingModel.update(query, update, { new: true }).exec((err, success) => {
            if (err) throw err
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.STATUS_UPDATED[data.lang], 'result': success })
            }
        })
        // )
    }
}
/* 

changeReviewStatus = (data, callback) => {
    console.log("incoming data ", data)
    if (!data.reviewId) {
        return
    }
    else {
        let query = {
            $or: [
                { 'reviewAndRating._id': data.reviewId }

            ]
        }
        let update = {
            $set: {
                'reviewAndRating.$.status': data.status.toUpperCase()
            }
        }
        reviewAndRatingL5.update(query, update, { new: true }).exec((err, success) => {
            if (err) throw err
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.STATUS_UPDATED[data.lang], 'result': success })
            }
        })
        // )
    }
} */
//allProduct count
countProduct = (data, callback) => {
    console.log('count api ', data)
    async.auto({
        allProduct: (cb) => {
            brandDescriptionL4.find({}).count().exec((err, allProduct) => {
                if (err || !allProduct)
                    cb(null)
                else
                    cb(null, allProduct)
            })
        },
        activeProduct: (cb) => {
            brandDescriptionL4.find({ status: 'ACTIVE' }).count().exec((err, active) => {
                if (err || !active)
                    cb(null)
                else
                    cb(null, active)
            })
        },
        rejectProduct: (cb) => {
            brandDescriptionL4.find({ status: 'REJECTED' }).count().exec((err, REJECTED) => {
                if (err || !REJECTED)
                    cb(null)
                else
                    cb(null, REJECTED)
            })
        },
        inactiveProduct: (cb) => {
            brandDescriptionL4.find({ status: 'INACTIVE' }).count().exec((err, INACTIVE) => {
                if (err || !INACTIVE)
                    cb(null, 0)
                else
                    cb(null, INACTIVE)
            })
        }
    }, (err, response) => {
        console.log('----', err, response)
        const res = {}
        res.totalProduct = response.allProduct
        res.activeProduct = response.activeProduct
        res.rejectProduct = response.rejectProduct
        res.inactiveProduct = response.inactiveProduct

        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.STATUS_UPDATED[data.lang], 'result': res })

    })
}


//editcategory
editSubCategory = (data, callback) => {
    console.log('incoming data', data)
    if (!data.subCategoryId || !data.categoryId) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    }
    else {
        let query = {
            _id: data.subCategoryId
        }
        let update = {
            $set: {
                'categoryModel': data.categoryId,
                'subCategoryName': data.subCategoryName
            }
        }
        subCategoryModelL2.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
            console.log(err, result)
            if (err) throw err
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.STATUS_UPDATED[data.lang], 'result': result })
            }
        })
    }
}

//getcategorybyId
getCategoryById = (data, callback) => {
    if (data.categoryId) {
        categoryModelL1.findById({ _id: data.categoryId }).exec((err, result) => {
            if (err || !result)
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], 'result': result })
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': result })

            }
        })
    }
    else {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    }
}

//getcategorybyId
getBrandById = (data, callback) => {
    if (data.brandId) {
        brandListModel.findById({ _id: data.brandId }).exec((err, result) => {
            if (err || !result)
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], 'result': result })
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': result })

            }
        })
    }
    else {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    }
}

//getcategorybyId
getSubcategoryById = (data, callback) => {
    if (data.subCategoryId) {
        subCategoryModelL2.findById({ _id: data.subCategoryId }).exec((err, result) => {
            if (err || !result)
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], 'result': result })
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': result })

            }
        })
    }
    else {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    }
}

getProductCategoryList = (data, callback) => {
    if (data.status) {
        productCategoryModel.find({ status: data.status }).populate('subCategory').populate('categoryModel').exec((err, result) => {
            if (err || !result)
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': result })
            }
        })
    }
    else {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    }
}

//getcategorybyId
getProductCategoryById = (data, callback) => {
    if (data.productCategoryId) {
        productCategoryModel.findById({ _id: data.productCategoryId }).exec((err, result) => {
            if (err || !result)
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], 'result': result })
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': result })

            }
        })
    }
    else {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    }
}

//editcategory
editProductCategory = (data, callback) => {
    console.log('incoming data', data)
    if (!data) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    }
    else {
        async.parallel({
            uploadImage: (cb) => {
                commonFunction.uploadImg(data.image, (err, image) => {
                    log(err, image)
                    if (err) cb(null)
                    else if (!image) cb(null)
                    else cb(null, image)
                })
            },
            getCategory: (cb) => {
                subCategoryModelL2.findOne({ _id: data.subCategoryId }).exec((err, result) => {
                    log(err, result)
                    if (err) cb(null)
                    else if (!result) cb(null)
                    else cb(null, result)
                })
            },
            getProductCategory: (cb) => {
                productCategoryModel.findOne({ _id: data.productCategoryId }).exec((err, result) => {
                    log(err, result)
                    if (err) cb(null)
                    else if (!result) cb(null)
                    else cb(null, result)
                })
            }
        }, (err, response) => {
            console.log('response ==>', response)
            let query = {
                _id: data.productCategoryId
            }
            let update = {
                $set: {
                    subCategory: data.subCategoryId ? data.subCategoryId : response.getProductCategory.subCategory,
                    categoryModel: response.getProductCategory.categoryModel,
                    productcategoryName: data.productCategoryName ? data.productCategoryName : response.getProductCategory.productcategoryName,
                    image: response.uploadImage ? response.uploadImage : response.getProductCategory.image,
                    status: data.status ? data.status : response.getProductCategory.status
                }
            }
            productCategoryModel.findOneAndUpdate(query, update, { new: true }).exec((err, result) => {
                console.log(err, result)
                if (err) throw err
                else {
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.STATUS_UPDATED[data.lang], 'result': result })
                }
            })
        })
    }
}


//createVendor
createStaff = (data, headers, callback) => {

    let userId;
    if (!headers.accesstoken) {
        console.log("asdfasfa")
        callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        commonFunction.jwtDecode(headers.accesstoken, (err, token) => {
            console.log(token)
            if (err) callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
            else userId = token
        })
    }
    if (!data.image && !data.email) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    var password = commonFunction.generatePassword();
    async.parallel({
        uploadImage: (cb) => {
            commonFunction.uploadImg(data.profilePic, (err, image) => {
                log(err, image)
                if (err) cb(null)
                else if (!image) cb(null)
                else cb(null, image)
            })
        },
        password: (cb) => {

            cb(null, util.encryptData(password))
        },
        checkuser: (cb) => {
            userModel.findOne({ $and: [{ email: data.email.toLowerCase() }] }).exec((err, result) => {
                console.log('===>', err, result)
                if (err || result == null)
                    cb(null)
                else if (result) {
                    callback({ "statusCode": util.statusCode.ALREADY_EXIST, "statusMessage": util.statusMessage.ALREADY_EXIST[data.lang] })
                    return
                }
            })
        }

    }, (err, response) => {
        let user = new userModel({
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            password: response.password,
            userType: data.userType ? data.userType : 'staff',
            phone: data.phone,
            // address: { addresses: data.address, lat: data.lat, lng: data.lng },
            // image: response.uploadImage,
            // storeType: data.storeType,
            countryCode: data.countryCode,
            status: data.status ? data.status : 'active',
            parentId: userId

        })
        user.save((err, save) => {
            console.log(err, save)
            if (err) {
                callback({ "statusCode": util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG[data.lang], "err": err })
            }
            else if (save) {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.EMAIL_SENT[data.lang], 'result': save })
                commonFunction.sendMailTest(data.email, "WAKI STORE", password, (err, mailsent) => {
                    console.log(err, mailsent)
                })
            }
        })
    })
}
module.exports = {
    addTopOffers,
    uploadImage,
    addBrand,
    getBrandList,
    businessDetails,
    getProductList,
    getBrand,
    deleteBrand,
    // updateBrand,
    getUserList,
    createVendor,
    deleteVendor,
    changeOrderStatus,
    dashBoard,
    getUserinfo,
    getAllVariant,
    updateVarianceStock,
    editCategory,
    vendorOrderStatus,
    deleteCategory,
    deleteSubCategory,
    changeProductStatus,
    changeReviewStatus,
    countProduct,
    editSubCategory,
    getCategoryById,
    getBrandById,
    getSubcategoryById,
    getProductCategoryList,
    deleteProductCategory,
    getProductCategoryById,
    editProductCategory,
    createStaff
}