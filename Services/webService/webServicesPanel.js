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
const paytabs = require('paytabs_api'),
    configJson = require('../../config/config'),
    productService = require('../productService/productService'),
    adminService = require('../adminServices/adminServices');

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
    } else {
        callback({
            "statusCode": util.statusCode.PARAMETER_IS_MISSING,
            "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang]
        })
        return
    }
    async.waterfall([
        function(cb) {
            let query = [{
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
        let month_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        if (response.length > 0) {
            response.forEach(element => {
                let temp = {
                    createdAt: new Date(element._id.createdAt).getMonth() + 1,
                    amountPaid: parseInt(element._id.totalAmountPaid == '' ? 0 : element._id.totalAmountPaid)
                }
                orderList.push(temp)
            });
            //Lopp
            month_array.forEach(ele => {
                let amount = 0;
                orderList.forEach(ele1 => {
                    if (ele == ele1.createdAt) {
                        amount = amount + ele1.amountPaid
                    } else {
                        amount = amount
                    }
                })
                mainArr.push(amount)
            })
        }
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], value: mainArr, month: month })
            // callback(orderList)
    })
}

viewerGraph = (data, header, callback) => {
    let userId;
    let android = [],
        IOS = [],
        WEB = []
    if (header.accesstoken) {

        commonFunction.jwtDecode(header.accesstoken, (err, decodeId) => {
            console.log(err, decodeId)
            if (err) throw err
            else {
                userId = decodeId
            }
        })
    } else {
        callback({
            "statusCode": util.statusCode.PARAMETER_IS_MISSING,
            "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang]
        })
        return
    }
    let query = {
        sellerId: mongoose.Types.ObjectId(userId)
    }
    productModel.find(query, { viewBydevice: 1 }).exec((err, response) => {
        if (err || response.length == 0) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        } else {

            response.forEach(element => {
                element.viewBydevice.filter(viewer => {

                    if (viewer == 1)
                        android.push(viewer)
                    else if (viewer == 2)
                        IOS.push(viewer)
                    else if (viewer == 3)
                        WEB.push(viewer)
                })
            })

            let result = {
                IOS: IOS.length,
                android: android.length,
                WEB: WEB.length
            }

            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
        }
    })
}
filterWeb = (data, callback) => {
    console.log("incoming data ===>", data)
    async.parallel({
        getProduct: (cb) => {
            let query = {

                $and: [{
                        $or: [
                            { brandId: { $in: data.brandId } },
                            { subCategory: { $in: data.categoryId } },
                        ]
                    },
                    { status: 'ACTIVE' }
                ]
            }
            productModel.find(query).populate('varianceId brandId').exec((err, result) => {
                console.log(err, result)
                cb(null, result)
            })
        }

    }, (err, response) => {
        let mainArray = [];
        if (response.getProduct.length > 0) {
            response.getProduct.forEach(element => {
                let temp = {
                    "description": element.description,
                    "image": element.varianceId.variants.length > 0 ? element.varianceId.variants[0].image : element.image,
                    "_id": element._id,
                    "brand": element.brandId.brandName,
                    "productName": element.productName,
                    "price": element.varianceId.variants.length > 0 ? element.varianceId.variants[0].price : element.price,
                    "status": element.status
                }
                mainArray.push(temp)
            })
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], result: mainArray })
            return
        } else {
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang], result: [] })
            return
        }
    })
}


/////////////////////////////////////////////////////////////////////////////
checkoutOrder = (data, headers, callback) => {
    console.log('api is hitted', data)
    var userId
    var orderId = commonFunction.generateOrderId(6)
    commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
        userId = result
    })

    listOfAddCart(data, headers, (bagList) => {
        orderData = []
        if (bagList.result.inStockBag == false) {
            callback({ "statusCode": util.statusCode.OUT_OF_STOCK, "statusMessage": util.statusMessage.OUT_OF_STOCK[data.lang], result: bagList.result })
            return
        } else {
            async.parallel({
                checkoutOrder: (cb) => {
                    bagModel.findOne({ userId: userId }, (err, result) => {
                        async.forEachOf(result.orderDescription, async(value, key, callback) => {
                            orderPlaced.findOne({ userId: userId }, async(err, userFind) => {

                                var userFind = await checkOrderTableEmpty({ userId: userId })

                                if (err) {
                                    callback(null)
                                } else if (userFind) {
                                    let obj = {
                                        "_id": value.productId,
                                        "color": value.color,
                                        "material": value.material,
                                        "size": value.size
                                    }

                                    var function_result = await getVarianceData(obj)


                                    let temp = {
                                        varianceId: function_result.variants[0]._id,
                                        stock: (parseInt(function_result.variants[0].quantity) - parseInt(value.productQuantity)).toString(),
                                        lang: "en"
                                    }

                                    if (data.orderPayment == 'COD') {
                                        var updatevariance = await updateStock(temp)

                                        orderPlaced.findOneAndUpdate({ userId: userId }, {
                                            $push: {
                                                orderPlacedDescription: {
                                                    sellerId: value.sellerId,
                                                    productId: value.productId,
                                                    orderPayment: data.orderPayment ? data.orderPayment : "PENDING",
                                                    orderStatus: "PLACED",
                                                    productQuantity: value.productQuantity ? value.productQuantity : 1,
                                                    orderId: orderId,
                                                    transactionId: null,
                                                    addressId: data.addressId ? data.addressId : "null",
                                                    deliveryCharges: value.deliveryCharges ? value.deliveryCharges : "00",
                                                    estimateTax: value.estimateTax ? value.estimateTax : "00",
                                                    color: value.color,
                                                    size: value.size,
                                                    material: value.material,
                                                    totalAmountPaid: value.totalAmountPaid

                                                }
                                            }
                                        }, { new: true, lean: true }, (err, orderPlaced) => {
                                            if (err) {
                                                callback(null)
                                            } else if (orderPlaced) {
                                                callback(null, orderPlaced)
                                            } else {
                                                callback(null)
                                            }
                                        })
                                    } else {
                                        orderPlaced.findOneAndUpdate({ userId: userId }, {
                                            $push: {
                                                orderPlacedDescription: {
                                                    sellerId: value.sellerId,
                                                    productId: value.productId,
                                                    orderPayment: data.orderPayment ? data.orderPayment : "PENDING",
                                                    orderStatus: "PLACED",
                                                    productQuantity: value.productQuantity ? value.productQuantity : 1,
                                                    orderId: orderId,
                                                    transactionId: null,
                                                    addressId: data.addressId ? data.addressId : "null",
                                                    deliveryCharges: value.deliveryCharges ? value.deliveryCharges : "00",
                                                    estimateTax: value.estimateTax ? value.estimateTax : "00",
                                                    color: value.color,
                                                    size: value.size,
                                                    material: value.material,
                                                    totalAmountPaid: value.totalAmountPaid

                                                }
                                            }
                                        }, { new: true, lean: true }, (err, orderPlaced) => {
                                            if (err) {
                                                callback(null)
                                            } else if (orderPlaced) {
                                                callback(null, orderPlaced)
                                            } else {
                                                callback(null)
                                            }
                                        })
                                    }
                                } else {
                                    /*not found */
                                    let obj = {
                                        "_id": value.productId,
                                        "color": value.color,
                                        "material": value.material,
                                        "size": value.size
                                    }
                                    var function_result = await getVarianceData(obj)
                                    let temp = {
                                        varianceId: function_result.variants[0]._id,
                                        stock: (parseInt(function_result.variants[0].quantity) - parseInt(value.productQuantity)).toString(),
                                        lang: "en"
                                    }
                                    if (data.orderPayment == 'COD') {
                                        var updatevariance = await updateStock(temp)
                                        var ele = {
                                            sellerId: value.sellerId,
                                            productId: value.productId,
                                            orderPayment: data.orderPayment ? data.orderPayment : "PENDING",
                                            orderStatus: "PLACED",
                                            productQuantity: value.productQuantity ? value.productQuantity : 1,
                                            orderId: orderId,
                                            transactionId: null,
                                            addressId: data.addressId ? data.addressId : "null",
                                            deliveryCharges: value.deliveryCharges ? value.deliveryCharges : "00",
                                            estimateTax: value.estimateTax ? value.estimateTax : "00",
                                            color: value.color,
                                            size: value.size,
                                            material: value.material,
                                            totalAmountPaid: value.totalAmountPaid
                                        }
                                        orderData.push(ele)

                                        callback(null)

                                    } else {
                                        var ele = {
                                            sellerId: value.sellerId,
                                            productId: value.productId,
                                            orderPayment: data.orderPayment ? data.orderPayment : "PENDING",
                                            orderStatus: "PLACED",
                                            productQuantity: value.productQuantity ? value.productQuantity : 1,
                                            orderId: orderId,
                                            transactionId: null,
                                            addressId: data.addressId ? data.addressId : "null",
                                            deliveryCharges: value.deliveryCharges ? value.deliveryCharges : "00",
                                            estimateTax: value.estimateTax ? value.estimateTax : "00",
                                            color: value.color,
                                            size: value.size,
                                            material: value.material,
                                            totalAmountPaid: value.totalAmountPaid
                                        }
                                        orderData.push(ele)

                                        callback(null)
                                    }
                                }
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

                if (orderData.length > 0) {
                    let res = {
                        userId: userId,
                        orderPlacedDescription: orderData
                    }
                    console.log('=====outtttttttttttttt======>>', res)
                    var place = new orderPlaced(res)
                    place.save(res, (err, result) => {
                        console.log("new account", err, result)
                    })
                }
                if (data.orderPayment == "COD") {
                    bagModel.findOneAndRemove({ userId: userId }, (err, result) => {
                        if (err) {
                            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                        } else {
                            console.log("---------delete bag------->>>", result)
                        }
                    })
                    callback({
                        "statusCode": util.statusCode.EVERYTHING_IS_OK,
                        "statusMessage": util.statusMessage.ORDER_PLACED[data.lang],
                        "orderId": 'ORD' + orderId,
                        "orderPayment": data.orderPayment
                    })
                } else if (data.totalAmountPaid && data.orderPayment == 'PENDING') {
                    paytabs.createPayPage({
                        'merchant_email': configJson.payTabs.email,
                        'secret_key': configJson.payTabs.secret_key,
                        'currency': 'SAR', //change this to the required currency
                        'amount': data.totalAmountPaid, //change this to the required amount
                        'site_url': 'www.techugo.com', //change this to reflect your site
                        'title': 'Order for Shoes', //Change this to reflect your order title
                        'quantity': 1, //Quantity of the product
                        'unit_price': data.totalAmountPaid, //Quantity * price must be equal to amount
                        'products_per_title': 'Shoes', //Change this to your products
                        'return_url': 'https://waki.store/shop/payment', //This should be your callback url
                        // 'return_url':'localhost:4200/payment',
                        'cc_first_name': 'Samy', //Customer First Name
                        'cc_last_name': 'Saad', //Customer Last Name
                        'cc_phone_number': '00973', //Country code
                        'phone_number': '12332323', //Customer Phone
                        'billing_address': 'Address', //Billing Address
                        'city': 'Manama', //Billing City
                        'state': 'Manama', //Billing State
                        'postal_code': '1234', //Postal Code
                        'country': 'BHR', //Iso 3 country code
                        'email': 'sumit@yopmail.com', //Customer Email
                        'ip_customer': '192.101.101.101', //Pass customer IP here
                        'ip_merchant': '192.101.101.101', //Change this to your server IP
                        'address_shipping': 'Shipping', //Shipping Address
                        'city_shipping': 'Manama', //Shipping City
                        'state_shipping': 'Manama', //Shipping State
                        'postal_code_shipping': '973',
                        'country_shipping': 'BHR',
                        'other_charges': 0, //Other chargs can be here
                        'reference_no': 1234, //Pass the order id on your system for your reference
                        'msg_lang': 'en', //The language for the response
                        'cms_with_version': 'Nodejs Lib v1', //Feel free to change this
                    }, createPayPage);

                    function createPayPage(result) {

                        //Redirect your merchant to the payment link
                        callback({
                            "statusCode": util.statusCode.EVERYTHING_IS_OK,
                            "statusMessage": util.statusMessage.ORDER_PLACED[data.lang],
                            "orderId": 'ORD' + orderId,
                            "orderPayment": data.orderPayment,
                            "Payment": result
                        })
                        return
                    }
                }
            })
        }
    })
}

verifyPayment = (data, headers, callback) => {
    if (!data.pId) {
        callback({
            "statusCode": util.statusCode.PARAMETER_IS_MISSING,
            "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang]
        })
        return
    }
    paytabs.verifyPayment({
        'merchant_email': configJson.payTabs.email,
        'secret_key': configJson.payTabs.secret_key,
        'payment_reference': data.pId
    }, verifyPayment);

    function verifyPayment(result) {
        console.log("verfiy payment--->", result)
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PAYMENT_DONE[data.lang], result: result })
        return
        // productService.orderPayment(data,headers,(err,result)=>{
        //     console.log("orderpayment status",err,result)
        // })
    }

}

/********************************************************************
 **************************placeOrder*************************
 ***********************************************************************/
placeOrder = (data, headers, callback) => {
    log("placeOrder", data, headers.accesstoken)
    var userId;
    var orderId = commonFunction.generateOrderId(6);
    var orderPayment = data.orderPayment.toUpperCase();
    commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
        if (result) userId = result
        else callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })

    })
    if (!data.productId || !userId) {
        callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    } else {
        async.parallel({
            getProdctdetail: (cb) => {
                let query = {
                    "productId": mongoose.Types.ObjectId(data.productId),
                    "variants": {
                        "$elemMatch": {
                            "$and": [{
                                    "color": data.color.toUpperCase(),
                                },
                                {
                                    "size": data.size.toUpperCase(),
                                },
                                {
                                    "material": data.material.toUpperCase(),
                                }
                            ]
                        }
                    }
                }
                varianceModel.findOne(query, { 'variants.$': 1 }).exec((err, result) => {
                    if (err) cb(null)
                    else cb(null, result)
                })
            }
        }, (err, response) => {
            orderPlaced.findOne({ userId: userId }, (err, userFind) => {
                if (err) {
                    callback({ statusCode: util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                } else if (userFind) {
                    query = { userId: userId },
                        update = {
                            $push: {
                                orderPlacedDescription: {
                                    sellerId: data.sellerId,
                                    productId: data.productId,
                                    // varianceId: data.varianceId ? data.varianceId : null,
                                    orderPayment: orderPayment ? orderPayment : "PENDING",
                                    orderStatus: "PLACED",
                                    productQuantity: data.productQuantity ? data.productQuantity : 1,
                                    orderId: orderId,
                                    transactionId: null,
                                    addressId: data.addressId ? data.addressId : "null",
                                    deliveryCharges: data.deliveryCharges ? data.deliveryCharges : "00",
                                    estimateTax: data.estimateTax ? data.estimateTax : "00",
                                    // totalAmountPaid: data.totalAmountPaid ? data.totalAmountPaid : "00",
                                    color: data.color,
                                    size: data.size,
                                    material: data.material,
                                    totalAmountPaid: response.getProdctdetail.variants[0].price
                                }
                            }
                        }
                        // console.log("req", query)
                    orderPlaced.findOneAndUpdate(query, update, { new: true, lean: true }, (err, orderPlaced) => {
                        log("---------->>>>>", err, orderPlaced)
                        if (err) {
                            callback({ statusCode: util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                        } else if (orderPlaced) {
                            let notifyData = {
                                msg: util.statusMessage.ORDER_PLACED[data.lang],
                                productId: data.productId,
                                orderId: "ORD" + orderId,
                                title: util.statusMessage.TITLE.PLACED[data.lang],
                                type: util.statusMessage.type.PLACED[data.lang],
                                // orderId: orderId
                            }
                            if (orderPayment == 'COD') {
                                commonAPI.notify(notifyData, userId, (err, result) => {
                                    // console.log("1659.....notifyAPI", err, result)
                                })
                                callback({
                                    statusCode: util.statusCode.EVERYTHING_IS_OK,
                                    "statusMessage": util.statusMessage.ORDER_PLACED[data.lang],
                                    "orderId": notifyData.orderId,
                                    "orderPayment": orderPayment
                                })
                            } else if (orderPayment == 'PENDING' && data.totalAmount) {
                                paytabs.createPayPage({
                                    'merchant_email': configJson.payTabs.email,
                                    'secret_key': configJson.payTabs.secret_key,
                                    'currency': 'SAR', //change this to the required currency
                                    'amount': data.totalAmount, //change this to the required amount
                                    'site_url': 'www.techugo.com', //change this to reflect your site
                                    'title': 'Order for Shoes', //Change this to reflect your order title
                                    'quantity': 1, //Quantity of the product
                                    'unit_price': data.totalAmount, //Quantity * price must be equal to amount
                                    'products_per_title': 'Shoes', //Change this to your products
                                    'return_url': 'https://waki.store/shop/payment', //This should be your callback url
                                    // 'return_url':'localhost:4200/payment',
                                    'cc_first_name': 'Samy', //Customer First Name
                                    'cc_last_name': 'Saad', //Customer Last Name
                                    'cc_phone_number': '00973', //Country code
                                    'phone_number': '12332323', //Customer Phone
                                    'billing_address': 'Address', //Billing Address
                                    'city': 'Manama', //Billing City
                                    'state': 'Manama', //Billing State
                                    'postal_code': '1234', //Postal Code
                                    'country': 'BHR', //Iso 3 country code
                                    'email': 'sumit@yopmail.com', //Customer Email
                                    'ip_customer': '192.101.101.101', //Pass customer IP here
                                    'ip_merchant': '192.101.101.101', //Change this to your server IP
                                    'address_shipping': 'Shipping', //Shipping Address
                                    'city_shipping': 'Manama', //Shipping City
                                    'state_shipping': 'Manama', //Shipping State
                                    'postal_code_shipping': '973',
                                    'country_shipping': 'BHR',
                                    'other_charges': 0, //Other chargs can be here
                                    'reference_no': 1234, //Pass the order id on your system for your reference
                                    'msg_lang': 'en', //The language for the response
                                    'cms_with_version': 'Nodejs Lib v1', //Feel free to change this
                                }, createPayPage);

                                function createPayPage(result) {

                                    //Redirect your merchant to the payment link
                                    callback({
                                        "statusCode": util.statusCode.EVERYTHING_IS_OK,
                                        "statusMessage": util.statusMessage.ORDER_PLACED[data.lang],
                                        "orderId": 'ORD' + orderId,
                                        "orderPayment": data.orderPayment,
                                        "Payment": result
                                    })
                                    return
                                }
                            }
                        } else {
                            callback({ statusCode: util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG[data.lang] })
                        }
                    })
                } else {
                    log('not exist')
                    let query = {
                        userId: userId,
                        orderPlacedDescription: {
                            productId: data.productId,
                            sellerId: data.sellerId,
                            // varianceId: data.varianceId ? data.varianceId : null,
                            orderPayment: data.orderPayment ? data.orderPayment : "PENDING",
                            orderStatus: "PENDING",
                            productQuantity: data.productQuantity ? data.productQuantity : 1,
                            orderId: orderId,
                            addressId: data.addressId ? data.addressId : "null",
                            // totalAmountPaid: data.price ? data.price : "00",
                            color: data.color,
                            size: data.size,
                            material: data.material,
                            totalAmountPaid: response.getProdctdetail.variants[0].price
                        }
                    }
                    orderPlaced.create(query, (err, result) => {
                        console.log('++++++++++++++>>>>>>', err, result)
                        if (err) {
                            callback({ statusCode: util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                        } else if (result) {
                            res = {}
                            res.result = result
                            temp = {}
                            temp.length = 1
                                //! delete in addtocart
                            commonAPI.deleteCart(userId, data.productId)
                                //!
                            let notifyData = {
                                msg: util.statusMessage.ORDER_PLACED[data.lang],
                                productId: data.productId,
                                orderId: "ORD" + orderId,
                                title: util.statusMessage.TITLE.PLACED[data.lang],
                                type: util.statusMessage.type.PLACED[data.lang],
                            }
                            if (orderPayment == 'COD') {
                                commonAPI.notify(notifyData, userId, (err, result) => {
                                    // console.log("1666...notifyAPI", err, result)
                                })
                                callback({
                                    statusCode: util.statusCode.EVERYTHING_IS_OK,
                                    "statusMessage": util.statusMessage.ORDER_PLACED[data.lang],
                                    "orderId": notifyData.orderId,
                                    "orderPayment": orderPayment
                                })
                            } else {
                                paytabs.createPayPage({
                                    'merchant_email': configJson.payTabs.email,
                                    'secret_key': configJson.payTabs.secret_key,
                                    'currency': 'SAR', //change this to the required currency
                                    'amount': data.totalAmount, //change this to the required amount
                                    'site_url': 'www.techugo.com', //change this to reflect your site
                                    'title': 'Order for Shoes', //Change this to reflect your order title
                                    'quantity': 1, //Quantity of the product
                                    'unit_price': data.totalAmount, //Quantity * price must be equal to amount
                                    'products_per_title': 'Shoes', //Change this to your products
                                    'return_url': 'https://waki.store/shop/payment', //This should be your callback url
                                    // 'return_url':'localhost:4200/payment',
                                    'cc_first_name': 'Samy', //Customer First Name
                                    'cc_last_name': 'Saad', //Customer Last Name
                                    'cc_phone_number': '00973', //Country code
                                    'phone_number': '12332323', //Customer Phone
                                    'billing_address': 'Address', //Billing Address
                                    'city': 'Manama', //Billing City
                                    'state': 'Manama', //Billing State
                                    'postal_code': '1234', //Postal Code
                                    'country': 'BHR', //Iso 3 country code
                                    'email': 'sumit@yopmail.com', //Customer Email
                                    'ip_customer': '192.101.101.101', //Pass customer IP here
                                    'ip_merchant': '192.101.101.101', //Change this to your server IP
                                    'address_shipping': 'Shipping', //Shipping Address
                                    'city_shipping': 'Manama', //Shipping City
                                    'state_shipping': 'Manama', //Shipping State
                                    'postal_code_shipping': '973',
                                    'country_shipping': 'BHR',
                                    'other_charges': 0, //Other chargs can be here
                                    'reference_no': 1234, //Pass the order id on your system for your reference
                                    'msg_lang': 'en', //The language for the response
                                    'cms_with_version': 'Nodejs Lib v1', //Feel free to change this
                                }, createPayPage);

                                function createPayPage(result) {

                                    //Redirect your merchant to the payment link
                                    callback({
                                        "statusCode": util.statusCode.EVERYTHING_IS_OK,
                                        "statusMessage": util.statusMessage.ORDER_PLACED[data.lang],
                                        "orderId": 'ORD' + orderId,
                                        "orderPayment": data.orderPayment,
                                        "Payment": result
                                    })
                                    return
                                }
                            }
                        } else {
                            callback({ statusCode: util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG[data.lang] })
                        }
                    })
                }
                //!!! delete in addtocart
                commonAPI.deleteCart(userId, data.productId)
                let temp = {
                        varianceId: response.getProdctdetail.variants[0]._id,
                        stock: (parseInt(response.getProdctdetail.variants[0].quantity) - parseInt(data.productQuantity)).toString(),
                        lang: "en"
                    }
                    /* decreament quantity on main model */
                if (orderPayment == 'COD') {
                    adminService.updateVarianceStock(temp, (err, response) => {
                        console.log(err, response)
                    })
                }
            })
        })
    }
}

/* show filter  */
showFilter = (data, header, callback) => {
    console.log("=-Incoming data >>>", data, header)
    async.parallel({
        getbrand: (cb) => {
            productModel.find({ subCategory: data.subCategory, status: "ACTIVE" }).select('brandId').populate({ path: 'brandId' }).exec((err, response) => {

                cb(null, response)
            })
        },
        getCategory: (cb) => {
            productCategoryModelL3.find({ subCategory: data.subCategory, status: "ACTIVE" }).populate('subCategory').exec((err, response) => {
                cb(null, response)
            })
        }

    }, (err, response) => {
        let brand = [],
            category = [];
        response.getbrand.forEach(element => {

            brand.push(element.brandId)
        })
        response.getCategory.forEach(element => {

            category.push(element)

        })

        brand = _.unionBy(brand, '_id')
        category = _.unionBy(category, '_id')
        callback({
            statusCode: util.statusCode.EVERYTHING_IS_OK,
            "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang],
            result: { brand: brand, category: category }
        })
    })
}
deleteCart = (data, headers, callback) => {
        log("delete cart or remove", data)
        var userId;
        commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
            if (result) userId = result
            else callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
            return
        })
        if (!data.productId)
            callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        else {
            bagModel.findOne({ userId: userId }, (err, userFound) => {
                if (err) {
                    callback({ statusCode: util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                } else if (userFound) {
                    query = { userId: userId },

                        bagModel.find({
                            $and: [
                                { userId: userId },
                                { 'orderDescription.productId': data.productId },
                                { 'orderDescription.size': data.size },
                                { 'orderDescription.material': data.material },
                                { 'orderDescription.color': data.color }
                            ]
                        }, { 'orderDescription.$': 1 }).exec((err, findId) => {
                            console.log("=====>>", err, JSON.stringify(findId))
                                // return
                            if (err) {
                                callback({ statusCode: util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                            } else if (findId.length > 0) {
                                let update = {
                                    $pull: {
                                        orderDescription: {
                                            _id: findId[0].orderDescription[0]._id

                                        }
                                    }
                                }
                                bagModel.update({ _id: findId[0]._id }, update, { new: true }).exec((err, deleted) => {
                                    if (err) {
                                        callback({ statusCode: util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                                    } else {
                                        callback({ statusCode: util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PRODUCT_DELETE_CART[data.lang] })
                                    }
                                })
                            } else {
                                callback({ statusCode: util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PRODUCT_NOT_FOUND[data.lang] });
                            }
                        })
                } else {
                    callback({ statusCode: util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": "user not exists" });
                }
            })
        }
    }
    /* duplicate api for increase quantity  */

increaseStockOnCartList = (data, header, callback) => {
    log("increaseStockOnCartList", data, header.accesstoken)
    var userId
    commonFunction.jwtDecode(header.accesstoken, (err, token) => {
        if (err) callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        else userId = token
    })

    if (!header.accesstoken || !data.productId || !data.productQuantity) {
        return callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    }
    let query = {
        $and: [{
                userId: userId
            },
            {
                'orderDescription.productId': data.productId,
                'orderDescription.size': data.size,
                'orderDescription.color': data.color,
                'orderDescription.material': data.material,


            }
        ]
    }
    let update = {
        $set: {
            'orderDescription.$.productQuantity': data.productQuantity
        }
    }
    bagModel.findOneAndUpdate(query, update, { new: true }).exec((err, updated) => {
        console.log("============>>>>>>>", err, updated)
    })
    async.parallel({
        bagDetails: (cb) => {
            bagModel.findOne({ userId: mongoose.Types.ObjectId(userId) }).populate({ path: 'userId' }).populate({
                path: 'orderDescription.productId',
                populate: [{
                        path: 'varianceId',
                    },
                    {
                        path: 'brandId',
                    }
                ],
            }, ).lean().exec((err, result) => {
                if (err || !result) {
                    let res = {}
                    callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.LIST_EMPTY[data.lang], 'result': res })
                } else {
                    cb(null, result)
                }
            })
        }
    }, (err, response) => {
        // console.log(response.bagDetails.userId)
        var address = response.bagDetails.userId.address
        var payment = response.bagDetails.userId.paymentMethod
        var main = []
        var totalPrice = 0
        async.forEachOf(response.bagDetails.orderDescription, async(value, key, callback) => {
            // await commonAPI.findBrand(value.productId.brandId, async (err, brandName) => {
            await varianceModel.findOne({
                "productId": mongoose.Types.ObjectId(value.productId._id),
                "variants": {
                    "$elemMatch": {
                        "$and": [{
                                "color": value.color.toUpperCase(),
                            },
                            {
                                "size": value.size.toUpperCase(),
                            },
                            {
                                "material": value.material.toUpperCase(),
                            }
                        ]
                    }
                }
            }, { 'variants.$': 1 }).lean().exec(async(err, varianceValue) => {


                console.log(parseFloat(varianceValue.variants[0].quantity) > parseFloat(value.productQuantity))


                temp = {
                    brand: value.productId.brandId.brandName,
                    // orderId: value.orderId,
                    productId: value.productId._id,
                    productName: value.productId.productName,
                    color: value.color ? value.color : "",
                    size: value.size ? value.size : "",
                    material: value.material ? value.material : "",
                    price: varianceValue.variants[0].price, //!
                    productQuantity: value.productQuantity,
                    image: varianceValue.variants[0].image, //!
                    description: value.productId.description,
                    specifications: value.productId.specifications,
                    inStock: parseFloat(varianceValue.variants[0].quantity) >= parseFloat(value.productQuantity) ? true : false,
                    inStockQuantity: parseInt(varianceValue.variants[0].quantity)
                }
                totalPrice = totalPrice + (parseInt(varianceValue.variants[0].price) * parseInt(value.productQuantity))
                await main.push(temp)
                    // console.log("###############",JSON.stringify(query))
                callback()
            })

            // })
        }, (err, responses => {
            res = {}
            res.productDetail = main
            res.bagDetails = {
                productPrice: totalPrice.toString(),
                estimateTax: "0",
                deliveryCharges: "0",
                bagTotal: (totalPrice + 0 + 0).toString(),
                productQuantity: response.bagDetails.orderDescription.length,
            }
            res.address = address
            res.payment = payment
            if (main.length == 0) {

                // delete res.productDetail
                // delete res.bagDetails
                // delete res.address
                // delete res.payment
            }
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.list_of_wishList[data.lang], "result": res })
        }))
    })
}

/********************************************************************
 **************************addtowishlist*************************
 ***********************************************************************/
addToWishList = (data, headers, callback) => {
        log("addToWishList", data)
        var userId;
        commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
            if (result) userId = result
            else callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
            return
        })
        if (!data.productId)
            callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        else {

            let temp = {
                color: data.color.toUpperCase(),
                material: data.material.toUpperCase(),
                size: data.size.toUpperCase()
            }
            wishModel.findOne({ userId: userId }, (err, result) => {
                if (err) throw err
                else if (result) {
                    query = { userId: userId },
                        update = {
                            $push: {
                                wishListDescription: {
                                    productId: data.productId,
                                    // orderPayment: "PENDING",
                                    orderStatus: "WISHLIST",
                                    productQuantity: data.productQuantity ? data.productQuantity : 1,
                                    size: data.size,
                                    color: data.color,
                                    material: data.material
                                }
                            }
                        }
                    wishModel.find({ $and: [{ userId: userId }, { 'wishListDescription.productId': data.productId }, { 'wishListDescription.size': temp.size }, { 'wishListDescription.color': temp.color }, { 'wishListDescription.material': temp.material }] }, { 'wishListDescription.$': 1 }).exec((err, findOrder) => {
                        if (err) throw err
                        else if (findOrder.length > 0) {
                            callback({ statusCode: util.statusCode.ALREADY_EXIST, "statusMessage": util.statusMessage.WISHLIST_PRODUCT_ALREADY_EXIST[data.lang] })
                            return
                        } else {
                            wishModel.findOneAndUpdate(query, update, { new: true, lean: true }, (err, result) => {
                                if (result) {
                                    temp = {}
                                        // log("lenght", result.wishListDescription.length)
                                    temp.length = result.wishListDescription.length
                                    callback({ statusCode: util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.ADD_TO_WISHLIST[data.lang], "result": result })
                                } else {
                                    callback({ statusCode: util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG[data.lang], "result": result })
                                }
                            })
                        }
                    })
                } else {
                    log('not exist')
                    query = {
                        userId: userId,
                        wishListDescription: {
                            productId: data.productId,
                            // orderPayment: "PENDING",
                            orderStatus: "WISHLIST",
                            productQuantity: data.productQuantity ? data.productQuantity : 1,
                            size: data.size,
                            color: data.color,
                            material: data.material
                        }
                    }
                    wishModel.create(query, (err, result) => {
                        if (result) {
                            res = {}
                            res.result = result
                            temp = {}
                            temp.length = 1
                            callback({ statusCode: util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.ADD_TO_WISHLIST[data.lang] })
                        } else {
                            callback({ statusCode: util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG[data.lang] })
                        }
                    })
                }
            })
        }
    }
    /********************************************************************
     **************************deleteWishItem*************************
     **********************************************************************/

deleteWishItem = (data, headers, callback) => {
    log("deleteWishItem", data, headers.accesstoken)
    var userId
    commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
        if (result) userId = result
        else callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    })
    if (!data._id)
        callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang], error: "_id key is missing " })
    else {
        wishModel.findOne({ userId: userId }, (err, result) => {
            if (err) throw err
            else if (result) {
                query = { userId: userId },
                    update = {
                        $pull: {
                            wishListDescription: {
                                _id: data._id,
                                // productId: data.productId,
                                // orderPayment: "PENDING",
                                // orderStatus: "WISHLIST",
                                // productQuantity: data.productQuantity ? data.productQuantity : 1
                            }
                        }
                    }
                wishModel.findOneAndUpdate(query, update, { new: true, lean: true }, (err, result) => {
                    log("orderModel==============>", err, result)
                    if (result) {
                        temp = {}
                        log("lenght", result.wishListDescription.length)
                        temp.length = result.wishListDescription.length
                        callback({ statusCode: util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PRODUCT_DELETE_WISHLIST[data.lang] })
                    } else {
                        callback({ statusCode: util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG[data.lang], "result": result })
                    }
                })
            }
        })
    }
}

/* update profile //website  */
updateProfile = (data, headers, callback) => {
        console.log("api hitted ")
        var userId
        commonFunction.jwtDecode(headers.accesstoken, (err, decodeId) => {
            // console.log("^^^^", err, decodeId)
            if (err) throw err
            else {
                userId = decodeId
            }
        })

        async.parallel({
            uploadImage: (cb) => {
                commonFunction.uploadImg(data.image, (err, image) => {
                    console.log(err, image)
                    if (err) cb(null)
                    else if (!image) cb(null)
                    else cb(null, image)
                })
            },
            getUser: (cb) => {
                userModel.findOne({ _id: userId }).exec((err, userinfo) => {
                    // console.log(err, userinfo)
                    if (err) cb(null)
                    else if (!userinfo) cb(null)
                    else cb(null, userinfo)
                })
            }
        }, (err, response) => {
            console.log("######", err, response)
            if (response.uploadImage) {
                console.log('33')
            }
            let query = {
                _id: userId
            }
            let update = {
                $set: {
                    image: response.uploadImage ? response.uploadImage : response.getUser.image,
                    firstName: data.firstName ? data.firstName : response.getuser.firstName,
                    phone: data.phone ? data.phone : response.getuser.phone
                }
            }
            console.log('@@@@@@@@@@@@@@@2', query, update)
            userModel.findOneAndUpdate(query, update, { new: true }).exec((err, success) => {
                console.log(err, success)
                if (success) {
                    result = {
                        "_id": success._id,
                        "firstName": success.firstName,
                        "lastName": success.lastName,
                        "email": success.email,
                        "image": success.image,
                        "addressAdded": success.isAddressAdded,
                        "phone": success.phone,
                        "countryCode": success.countryCode,
                        "paymentAdded": success.paymentAdded,
                        "address": success.address,
                        "paymentMethod": success.paymentMethod,
                        "countryCode": success.countryCode,
                        "isBussinessAdded": success.isBussinessAdded
                    }
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PROFILE_UPDATE[data.lang], "result": result, "accessToken": commonFunction.jwtEncode(success._id) })
                } else {
                    callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                }
            })
        })
    }
    // forgot Password of user website 
forgotPassword = (data, callback) => {
    console.log("---------->>>", data)
    obj = data
    if (!obj) {
        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    } else {
        userModel.find({ email: obj.email }, (err, found) => {
            // console.log(err, found)
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                return
            } else if (!found.length > 0) {
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.EMAIL_NOT_REGISTERED[data.lang] })
                return
            } else {
                query = {
                    email: data.email
                }
                var forgotToken = commonFunction.generateToken();
                var update = {
                    "forgotToken": forgotToken
                }
                userModel.findOneAndUpdate(query, update, { new: true }, (err, succ) => {
                    if (err) {
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                    }
                })
                commonFunction.sendMailforwebsite(data.email, "FORGOT PASSWORD LINK", forgotToken, (err, res) => {
                    log("WWWWWWWw", err, res)
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.EMAIL_SENT[data.lang] })
                });

            }
        })
    }
}
module.exports = {
    dashboardGraph,
    viewerGraph,
    filterWeb,
    checkoutOrder,
    verifyPayment,
    placeOrder,
    showFilter,
    deleteCart,
    increaseStockOnCartList,
    addToWishList,
    deleteWishItem,
    updateProfile,
    forgotPassword
}





async function getVarianceData(data) {
    temp = {
            color: data.color.toUpperCase(),
            size: data.size.toUpperCase(),
            material: data.material.toUpperCase(),
        }
        // console.log(temp)
    query1 = {
        "productId": mongoose.Types.ObjectId(data._id),
        "variants": {
            "$elemMatch": {
                // "closed": false,
                "$and": [{
                        "color": temp.color,
                    },
                    {
                        "size": temp.size,
                    },
                    {
                        "material": temp.material,
                    }
                ]
            }
        }
    }
    return new Promise((resolve, reject) => {
        varianceModel.findOne(query1, { 'variants.$': 1 }).populate({ path: 'productId' }).populate({ path: 'sellerId' }).lean().exec((err6, dbData6) => {
            if (err6) reject(err6)
            resolve(dbData6)
        })
    })
}


async function updateStock(data) {
    return new Promise((resolve, reject) => {
        varianceModel.findOneAndUpdate({ 'variants._id': data.varianceId }, { $set: { 'variants.$.quantity': data.stock } }, { new: true }).exec((err, success) => {
            console.log('-===update stock success>>>', err, success)
            if (err) reject(err)
            resolve(success)
        })
    })
}



async function checkOrderTableEmpty(data) {
    return new Promise((resolve, reject) => {
        orderPlaced.findOne({ userId: data.userId }).exec((err, success) => {
            console.log(err, success)
            if (err) reject(err)
            resolve(success)
        })
    })
}