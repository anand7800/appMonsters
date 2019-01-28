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
const reviewAndRatingL5 = require('../../Models/userModel/reviewAndRating')
const notificationModel = require('../../Models/userModel/userNotification')

const async = require('async')
let util = require('../../Utilities/util')
const commonFunction = require('../../commonFile/commonFunction')
const commonAPI = require('../../commonFile/commonApi')
const mongoose = require('mongoose')
const waterfall = require('async-waterfall');
const _ = require('lodash');
var qr = require('qr-image');

/* ************************************
*************add category***********************
************************************ */

addCategory = (data, callback) => {
    log("addCategory")
    if (!data) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        async.parallel({
            exist: (cb) => {
                categoryModelL1.findOne({ categoryName: data.categoryName }, (err, exist) => {
                    if (err) cb(null)
                    else if (!exist) cb(null)
                    else {
                        cb(null, exist)
                    }
                })
            },
            uploadIcons: (cb) => {
                commonFunction.uploadImg(data.icons, (err, icons) => {
                    if (err) cb(null)
                    else if (!icons) cb(null)
                    else cb(null, icons)
                })
            },
            uploadImage: (cb) => {
                commonFunction.uploadImg(data.image, (err, image) => {
                    if (err) cb(null)
                    else if (!image) cb(null)
                    else cb(null, image)
                })
            },
            findLength: (cb) => {
                categoryModelL1.find().count().exec((err, result) => {
                    log(err, result)
                    if (err) cb(null)
                    else if (!result) cb(null)
                    else cb(null, result)
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
                log(response.findLength)
                query = {
                    'categoryName': data.categoryName,
                    'icons': response.uploadIcons ? response.uploadIcons : "",
                    'image': response.uploadImage ? response.uploadImage : "",
                    'status': "ACTIVE",
                    'serialNumber': response.findLength
                }
                categoryModelL1.create(query, (err, result) => {
                    if (err)
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                    else if (!result)
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
                    else {
                        // subCategoryModelL2.create({ categoryModel: result._id })
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.CATEGORY_ADDED[data.lang], "result": result })
                    }
                })
            }
        })
    }
}

/* ************************************
*************add Subcategory***********************
************************************ */
addSubCategory = (data, callback) => {
    if (!data || !data._id) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        query1 = { _id: data._id }
        categoryModelL1.findById(query1, (err, exist) => {
            log(err, exist)
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
            }
            else if (!exist) {
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.USER_NOT_FOUND[data.lang] })
            }
            else {

                async.parallel({
                    uploadIcons: (cb) => {
                        commonFunction.uploadImg(data.icons, (err, icons) => {
                            log(err, icons)
                            if (err) cb(null)
                            else if (!icons) cb(null)
                            else cb(null, icons)
                        })
                    }, uploadImage: (cb) => {
                        commonFunction.uploadImg(data.image, (err, image) => {
                            log(err, image)
                            if (err) cb(null)
                            else if (!image) cb(null)
                            else cb(null, image)
                        })
                    }
                }, (err, response) => {
                    log("asdfasdfas", exist._id)
                    query2 = {
                        categoryModel: exist._id,
                        subCategoryName: data.subCategoryName,
                        icons: response.uploadIcons,
                        image: response.uploadImage,
                        status: data.status
                    }

                    subCategoryModelL2.create(query2, (err, update) => {
                        if (err) {
                            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                        }
                        else if (!update) {
                            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
                        }
                        else {

                            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.REGISTRATION_DONE[data.lang], "result": update })

                        }
                    })
                })
            }
        })
    }
}

/* ************************************
*************getCategorylist***********************
************************************ */

getCategoryList = (data, callback) => {
    log(data.lang)
    categoryModelL1.find({ 'status': "ACTIVE" }, null, { sort: { 'serialNumber': 1 } }).select({ 'categoryName': 1, '_id': 1, 'icons': 1, 'image': 1 }).exec((err, result) => {
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        }
        else if (!result) {
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.USER_NOT_FOUND[data.lang] })
        }
        else {
            temp = []
            async.forEachOf(result, function (item, key, callback) {
                data = {
                    "_id": item._id,
                    "categoryName": item.categoryName,
                    "image": item.image,
                    "icons": item.icons,
                }
                temp.push(data)
                callback();
            }, function (err) {
                if (err) {
                    callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                }
                else {
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.categoriesList_found[data.lang], "result": temp })
                }
            });
        }
    })
}

/* ************************************
*************addProductCategory***********************
************************************ */
addProductCategory = (data, callback) => {
    log("api is hitted of addProduct")
    if (!data && !data.subCategoryId && !data.categoryModel) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
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
            }
        }, (err, response) => {
            log(err, response.uploadImage)
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
            }
            else {
                query = {
                    subCategory: data.subCategoryId,
                    categoryModel: data.categoryModel,
                    productcategoryName: data.productcategoryName,
                    image: response.uploadImage,
                }
                productCategoryModelL3.create(query, (err, result) => {
                    if (err) {
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                    }
                    else if (!result) {
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
                    }
                    else {
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.categoriesList_found[data.lang], "result": result })
                    }
                })
            }
        })
    }
}

/* ************************************
*************addBrandDescription*******
************************************ */

addProduct = (data, header, callback) => {
    // log("api is hitted addBrandDescription",data,header)
    var sellerId = data.sellerId
    // commonFunction.jwtDecode(header.accesstoken, (err, userId1) => {
    //     if (err) throw err
    //     else {
    //         sellerId = userId1
    //     }
    // })
    if (!data && !header.accesstoken && !data.subCategoryId && !data.productCategoryId && !data.productName && !data.categoryId && !data.variants) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        async.parallel({
            uploadImage: (cb) => {

                commonFunction.uploadMultipleImages(data.image, (err, image) => {
                    log(err, image)
                    if (err) cb(null)
                    else if (!image) cb(null)
                    else cb(null, image)
                })

            }
        }, (err, response) => {
            query = {
                categoryModel: data.categoryId,
                subCategory: data.subCategoryId,
                productCategoryId: data.productCategoryId,
                // brandDesc: {
                brandId: data.brandId,
                sellerId: sellerId,
                productName: data.productName,
                sellingPrice: data.sellingPrice,
                summary: data.summary,
                color: data.color,
                size: data.size,
                material: data.material,
                description: data.description,
                image: response.uploadImage,
                specifications: data.specifications,
                tag: data.tag,
                productType: data.productType,
                tryImage: null,
                qrCode: data.qrCode,
                inventorySKU: data.inventorySKU,
                weight: data.weight,
                quantity: data.quantity,
                costItem: data.costItem,
                status: data.status
            }

            // }

            var product = new productModel(query)
            product.save((err, result) => {
                if (err) {
                    callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                }
                else if (!result) {
                    callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang] })

                }
                else {
                    varianceModel.create({
                        productId: result._id,
                        sellerId: sellerId,
                        variants: data.variants
                    }, (err, succ) => {
                        productModel.findByIdAndUpdate({ _id: result._id }, { $set: { varianceId: succ._id } }, { new: true }).exec((err, saveVariance) => {
                        })
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.categoriesList_found[data.lang], "result": succ })
                    })

                }
            })
        })
    }
}
/* *******************************************************************
**************************addbrand************************************
***********************************************************************/
addBrand = (data, callback) => {
    console.log('add brand', data)
    let query = {
        brandName: data.brandName.toLowerCase(),
        status: data.status
    }
    async.waterfall([
        function (cb) {
            if (data.brandImage) {
                commonFunction.uploadImg(data.brandImage, (err, image) => {
                    log("######33", err, image)
                    if (err) cb("null")
                    else if (!image) cb("null")
                    else cb(null, image)
                })
            } else {
                cb(null, "")
            }
        },
        function (image, cb) {
            brandModel.find(query).exec((err, find) => {
                if (err || find.length > 0) {
                    cb(null, find)
                }
                else {
                    brandModel.create({ brandName: data.brandName, icon: image }, (err, succ) => {
                        cb(null, succ)
                    })
                }
            })
        }
    ], (err, result) => {

        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": "add data successfully", "result": result })
    })

}
/* *******************************************************************
**************************homeScreenApi*******************************
***********************************************************************/
homeScreenApi = (query, callback) => {
    async.parallel({
        topPicksInMobile1: (cb) => {
            subCategoryModelL2.findOne({ 'subCategoryName': "Mobiles" }).exec((err, result) => {
                // console.log("#@@@@@@@@@@@@@@@@@@@@", err, JSON.stringify(result), "###############")
                if (err || !result) cb(null)

                else if (result) {
                    productModel.find({ subCategory: result._id, 'status': 'ACTIVE' }).populate({ 'path': 'brandId', 'select': 'brandName' }).populate({ path: 'varianceId' }).lean().exec((err, res) => {
                        // console.log("product description", err, JSON.stringify(res))
                        if (err) cb(null)
                        else {

                            cb(null, res)
                        }
                    })
                }
            })
        },
        brand: (cb) => {
            brandModel.find({ status: "ACTIVE" }).exec((err, result) => {
                // console.log(result)
                cb(null, result)
            })
        },
        category: (cb) => {
            productCategoryModelL3.count().exec(function (err, count) {
                var random = Math.floor(Math.random() * count);
                productCategoryModelL3.find().skip(random).limit(10).exec(
                    function (err, result) {
                        console.log('#######33', err, result)
                        if (err) {
                            cb(null)
                        }
                        else {
                            cb(null, result)
                        }
                    });
            });
        },
        trendingFashion: (cb) => {
            var trending = []
            categoryModelL1.find({ $or: [{ 'categoryName': "Men Fashion" }, { 'categoryName': "Women Fashion" }] }).exec((err, result) => {
                // console.log("@@@@@@@@@@@2", result)
                if (result) {
                    async.forEachOf(result, (element, key, callback) => {
                        productModel.findOne({ categoryModel: element._id }).populate({ 'path': 'brandId', 'select': 'brandName' }).populate({ path: 'varianceId' }).lean().exec((err, result2) => {
                            // log("trending", err, JSON.stringify(result2))
                            if (result2)
                                trending.push(result2)
                            // cb(null, result2)
                            callback()
                        })
                    }, (err, response) => {

                        // console.log('trending===>>', trending)
                        cb(null, trending)

                    });

                }
                else cb(null)
                // cb(null,result)
            })
        },
        topOffer: (cb) => {
            commonAPI.offers((err, response) => {
                // console.log(err,response)
                cb(null, response)
            })
        },
        topPromotedDeals: (cb) => {
            commonAPI.promotedDeals((err, response) => {
                cb(null, response)
            })
        }
    }, (err, response) => {
        // console.log('$$$$$$$$$$$$$$$4', response.trendingFashion)
        let res1 = {};
        topPicksInMobile = [];
        brand = [];
        categories = [];
        trendingFashion = [];
        topOffer = [];
        topPromotedDeals = [];
        async.forEachOf(response.topPicksInMobile1, (item, key, callback) => {
            // async.forEachOf(item.brandDesc, (item, key, callback) => {
            //     console.log("###", item.varianceId.variants[0].price)
            data = {
                _id: item._id,
                type: "topPicks",
                brand: item.brandId.brandName,
                productName: item.productName,
                //!change
                price: item.varianceId.variants[0].price ? item.varianceId.variants[0].price : 000,
                //!end
                color: item.color,
                description: item.description,
                image: item.varianceId.variants[item.varianceId.variants.length - 1].image[0],
                specifications: item.specifications,
                status: item.status
            }
            topPicksInMobile.push(data)
            // })
            callback()
        }, (err, result) => {
            // log(err, result)
        })
        // log("@@@@@", item1)
        response.brand.forEach(element => {
            data = {
                _id: element._id,
                // status: element.status,
                image: element.image,
                icons: element.icon,
                brand: element.brandName,
                type: "brand"
            }
            brand.push(data)
        });

        async.forEachOf(response.category, (item, key, callback) => {
            // item.type = "category"
            // console.log("*******************", item)
            // item.forEach(element => {
            let temp = {
                _id: item._id,
                categoryName: item.productcategoryName,
                image: item.image ? item.image : "",
                status: item.status,
                type: 'category'
            }
            // item.type = "category",

            categories.push(temp)
            // })
            // categories.push(item.)
        }, (err, result) => {
        })
        async.forEachOf(response.trendingFashion, (element, key, callback) => {

            // trendingFashion.push(item.brandDesc)
            // item.forEach(element => {
            let data = {
                _id: element._id,
                type: "topPicks",
                brand: element.brandId.brandName,
                productName: element.productName,
                //!change 
                price: element.varianceId.variants[0].price ? element.varianceId.variants[0].price : 000,
                //!end
                color: element.color,
                description: element.description,
                image: element.varianceId.variants[element.varianceId.variants.length - 1].image[0],
                specifications: element.specifications,
                status: element.status
            }
            trendingFashion.push(data)
            // })
        }, (err, result) => {
        })
        async.forEachOf(response.topPromotedDeals, (item1, key, callback) => {
            data = {
                _id: item1._id,
                type: "promotedDeal",
                status: item1.topOffers.status,
                promotedDealName: item1.topOffers.topOfferName,
                description: item1.topOffers.description,
                promotedDealImage: item1.topOffers.offerImage[0],
            }
            topPromotedDeals.push(data)
            callback()

        }, (err, result) => {
        })
        async.forEachOf(response.topOffer, (item, key, callback) => {
            data = {
                type: "deal",
                _id: item._id,
                description: item.description,
                dealImage: item.offerImage[0],
                topDealName: item.topOfferName
            }
            topOffer.push(data)
        }, (err, result) => {
            // log(err, result)
        })
        res1['Top Deals'] = topOffer;
        res1['Top Promoted Deals'] = topPromotedDeals;

        res1['Category'] = categories;//!done

        res1['Top Picks in Mobile'] = topPicksInMobile; //!done
        res1['Brand'] = brand;//!done
        orderedKey = ['Top Deals', 'Top Promoted Deals', 'Category', 'Top Picks in Mobile', 'Brand', 'Top Picks in Fashion']
        res1['Top Picks in Fashion'] = trendingFashion;//!done
        // log(query)
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.HOMESCREEN_API[query.lang], "result": res1, 'orderedKey': orderedKey });
    }), (err) => {
        callback(err);
    }
}

/* *******************************************************************
**************************OpenSubCategory*******************************
***********************************************************************/
OpenSubCategory = (data, callback) => {
    log('incoming data', data)
    var res = []
    subCategoryModelL2.find({ categoryModel: data.categoryId }).exec((err, succ) => {
        // console.log(JSON.stringify(succ))

        async.forEachOf(succ, (value, key, callback) => {
            console.log('value', value)
            productCategoryModelL3.find({ subCategory: value._id }).exec((err, findData) => {
                // console.log("&^%$#@", err, findData)
                if (findData.length > 0) {

                    let product = []
                    findData.forEach(demo => {
                        // console.log("eeeeeeeeeeeeeeeeeeeeeeee", e)
                        t = {
                            _id: demo._id,
                            status: demo.status,
                            productcategoryName: demo.productcategoryName,
                            image: demo.image ? demo.image : ""
                        }
                        product.push(t)
                    })
                    let temp = {
                        _id: value._id,
                        subCategoryName: value.subCategoryName,
                        productcategory: product
                    }
                    res.push(temp)
                    callback()
                }
                else {
                    let temp = {
                        _id: value._id,
                        subCategoryName: value.subCategoryName,
                        productcategory: []
                    }
                    res.push(temp)
                    callback()
                }
            })

        }, (err, success) => {


            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.LIST_ORDER[data.lang], "result": res })
        })
    })
}
/* *******************************************************************
**************************categoryProductList*******************************
***********************************************************************/
categoryProductList = (data, callback) => {
    console.log("asdf")
    console.log("api is hitted", data)
    var response = []
    var parkar = Object
    if (data.productListType == 'brand') {
        productModel.find({
            brandId: mongoose.Types.ObjectId(data.productCategoryId)
        }).populate({ path: 'brandId' }).exec((err, productDetail) => {

            if (err) {
                throw err
            }
            else if (productDetail.length > 0) {
                productDetail.forEach(element => {
                    // console.log("asdfasdfasdfasdf" + element.brandDesc._id)
                    promise = new Promise((resolve, reject) => {
                        varianceModel.findOne({ productId: element._id }).exec((err2, data2) => {
                            // console.log("#@#########@#@#@#@#@#@#", err2, data2)
                            if (err2) { reject(err2) }
                            // console.log(data2)
                            resolve(data2)
                        })
                    })
                    if (element) {
                        // console.log('---------->>', element.brandDesc)
                        let temp = {
                            description: element.description,
                            image: element.image,
                            specifications: element.specifications,
                            _id: element._id,
                            brand: element.brandId.brandName,
                            productName: element.productName,
                            price: element.sellingPrice,
                        }
                        response.push(temp)
                    }
                })
                callback({
                    'statusCode': util.statusCode.EVERYTHING_IS_OK, 'statusMessage': util.statusMessage.SUBCATORY_FOUND[data.lang], 'result': response
                })
            }
            else {
                res = []
                callback({
                    'statusCode': util.statusCode.NOT_FOUND, 'statusMessage': util.statusMessage.NOT_FOUND[data.lang], 'result': res
                })
            }
        })
    }
    else {
        productModel.find({ productCategoryId: data.productCategoryId }).populate({ path: 'brandId', select: 'brandName' }).exec((err, productDetail) => {
            console.log("err,product", err, productDetail)
            if (err) {
                throw err
            }
            else if (productDetail.length > 0) {
                productDetail.forEach(element => {
                    let temp = {
                        description: element.description,
                        image: element.image,
                        specifications: element.specifications,
                        _id: element._id,
                        brand: element.brandId.brandName,
                        productName: element.productName,
                        price: element.sellingPrice,
                        status: element.status
                    }
                    response.push(temp)
                })
                callback({
                    'statusCode': util.statusCode.EVERYTHING_IS_OK, 'statusMessage': util.statusMessage.SUBCATORY_FOUND[data.lang], 'result': response
                })
            }
            else {
                res = []
                callback({
                    'statusCode': util.statusCode.NOT_FOUND, 'statusMessage': util.statusMessage.NOT_FOUND[data.lang], 'result': res
                })
            }
        })
    }
}

/* *******************************************************************
**************************searchProduct*******************************
***********************************************************************/

searchProduct = (data, callback) => {
    console.log('---------------?>>>', data.searchKeyword.trim())
    var temp = []
    var value = new RegExp(data.searchKeyword.trim(), 'i');

    async.waterfall([

        //!function 1
        function (callback) {
            brandModel.findOne({ brandName: value }, { _id: 1 }, (err, brandId) => {
                // console.log("$$$$$$$$$$$$$$", err, brandId)
                if (err)
                    callback(null)
                else {
                    callback(null, brandId)
                }
            })
        },
        function (brandId, callback) {
            // varianceModel.find(
            //     {
            //         $or: [
            //             { 'variants.color': { $regex: value } },
            //             { 'variants.size': { $regex: value } },
            //             { 'variants.color': { $in: [value] } },
            //             // { 'brandId': mongoose.Types.ObjectId(brandId._id) },

            //         ]
            //     }
            // ).exec((err, res) => {
            //     console.log(err, JSON.stringify(res))
            // })
            callback(null, brandId)
        },
        //!function 2
        function (brandId, callback) {

            // console.log(brandId)
            if (brandId == null) {
                productModel.find({
                    $or: [
                        { 'productName': { $regex: value } },
                        { 'color': { $regex: value } },
                        { 'tag': { $in: [value] } },
                        // { 'brandId': mongoose.Types.ObjectId(brandId._id) },

                    ]
                }).populate({ path: 'subCategory' }).populate({ path: 'brandId' }).populate({ path: 'varianceId' }).exec((err, result) => {
                    if (err) callback(null)
                    else callback(null, result)
                })
            }
            else {
                productModel.find({
                    $or: [
                        { 'productName': { $regex: value } },
                        { 'color': { $regex: value } },
                        { 'tag': { $in: [value] } },
                        { 'brandId': mongoose.Types.ObjectId(brandId._id) },
                    ]
                }).populate({ path: 'subCategory' }).populate({ path: 'brandId' }).populate({ path: 'varianceId' }).exec((err, result) => {
                    if (err) callback(null)
                    else callback(null, result)
                })
            }
        }
    ], (err, result) => {
        var productDetail = []
        // console.log("#################3", JSON.stringify(result))
        result.forEach(element => {
            // console.log('*************',result)
            let temp = {
                _id: element._id,
                productName: element.productName,
                categoryModel: element.categoryModel,
                subCategory: element.subCategory._id,
                productCategoryId: element.productCategoryId,
                brandId: element.brandId._id,
                brandName: element.brandId.brandName,
                description: element.description,
                price: element.varianceId.variants[0].price,
                image: element.varianceId.variants[0].image,
                specifications: element.specifications
            }
            productDetail.push(temp)

        })



        /*  })
         brandDescriptionL4.aggregate([{
             $unwind: '$brandDesc'
         }, {
             $match: {
                 $or: [
                     { 'brandDesc.productName': { $regex: value } },
                     { 'brandDesc.color': { $regex: value } },
                     { 'brandDesc.tag': { $in: [value] } },
                 ]
             }
         }
         ], (err, result) => { */
        async.forEachOf(result, (value, key, cb) => {
            // console.log(value)
            subCategoryModelL2.findOne({ '_id': value.subCategory }, (err, categoryResult) => {
                console.log(err, "------------>>", err, categoryResult)
                subData = {
                    subCategoryName: categoryResult.subCategoryName,
                    _id: categoryResult._id
                }
                temp.push(subData)
                cb()
            })
        }, (err, success) => {
            res = {}
            let demo = []
            function search(nameKey, myArray) {
                for (var i = 0; i < myArray.length; i++) {
                    if (myArray[i].subCategoryName === nameKey) {
                        return myArray[i];
                    }
                }
            }
            temp.forEach(element => {
                let test = search(element.subCategoryName, demo)
                if (test == undefined) {
                    demo.push(element)
                }
            })
            res.productData = productDetail
            res.subCategory = demo
            callback({ 'statusCode': util.statusCode.EVERYTHING_IS_OK, 'statusMessage': util.statusMessage.PRODUCT_FOUND[data.lang], 'result': res })
        })

    })
}


/* *******************************************************************
**************************filters*******************************
***********************************************************************/

filters = (data, callback) => {
    function search(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            // console.log(myArray)
            if (myArray[i].name === nameKey) {
                // console.log("asd")
                return myArray[i];
            }
        }
    }
    var color = []
    async.parallel({
        brandList: (cb) => {
            brandModel.find({ status: "ACTIVE" }, { brandName: 1, _id: 1 }).lean().exec((err, succ) => {
                if (err)
                    cb(null)
                else {
                    brandArray = []
                    succ.forEach(element => {
                        let temp = {
                            _id: element._id,
                            name: element.brandName
                        }
                        brandArray.push(temp)
                    })
                    cb(null, brandArray)
                }
            })
        },
        colorList: (cb) => {
            // brandDescriptionL4.find({}, { 'brandDesc.color': 1, 'brandDesc._id': 1 }).exec((err, succ) => {
            //     // console.log(err, JSON.stringify(succ))
            //     /* function search(nameKey, myArray) {
            //         for (var i = 0; i < myArray.length; i++) {
            //             // console.log(myArray)
            //             if (myArray[i].color === nameKey) {
            //                 // console.log("asd")
            //                 return myArray[i];
            //             }
            //         }
            //     } */
            //     if (err)
            //         cb(null)
            //     else {
            //         succ.forEach(element => {
            //             element.brandDesc.forEach(inner => {
            //                 // console.log(inner)
            //                 let temp = search(inner.color, color)
            //                 console.log('aa is ',temp)

            //                 if (temp == undefined) {
            //                     let co = {
            //                         _id: inner._id,
            //                         name: inner.color
            //                     }
            //                     color.push(co)
            //                 }
            //             })
            //         })
            //         // console.log('color',color)
            //         // _.uniq(color,name)
            //         cb(null, color)
            //     }
            // })

            varianceModel.find({}, { 'variants.color': 1, 'variants._id': 1 }).exec((err, succ) => {
                // console.log(succ)
                let dataa = []
                // console.log(err, JSON.stringify(succ))
                succ.forEach(element => {
                    element.variants.forEach(inner => {
                        // console.log('------->>',inner.color)
                        // var non_duplidated_data=_.uniq(inner)
                        // dataa.push(inner.color)
                        let a = search(inner.color, dataa)
                        if (a == undefined) {
                            let co = {
                                _id: inner._id,
                                name: inner.color
                            }
                            dataa.push(co)
                        }
                    })
                    console.log('+++++++++++++++++', dataa)
                })
                cb(null, dataa)
                // var data = [{'name': 'Amir', 'surname': 'Rahnama'}, {'name': 'Amir', 'surname': 'Stevens'}];
                // var non_duplidated_data = _.uniq(data, 'name');
                //     // console.log(non_duplidated_data)
                // console.log("==>>",JSON.stringify(dataa))
                //         var non_duplidated_data=_.uniq(dataa)
                //         console.log(non_duplidated_data)

            })
        }
    }, (err, response) => {
        var value = data.subCategoryId;
        var Price = {
            "_id": "1",
            "name": "Price",
            "sub_filter": [{
                "name": "500-1000",
                "_id": "1"
            },
            {
                "name": "1500-10000",
                "_id": "2"
            },
            {
                "name": "15000-25000",
                "_id": "3"

            },
            {
                "name": "25000-500000",
                "_id": "4"

            }]
        }

        var Brands = {
            "_id": "2",
            "name": "Brands",
            "sub_filter": response.brandList
        }
        var Colors = {
            "_id": "3",
            "name": "Colors",
            "sub_filter": response.colorList
        }
        var Size = {
            "_id": "4",
            "name": "Sizes",
            "sub_filter": [
                {
                    "name": "XL",
                    "_id": "1"
                },
                {
                    "name": "S",
                    "_id": "2"
                },
                {
                    "name": "M",
                    "_id": "3"
                },
                {
                    "name": "L",
                    "_id": "4"
                },
                {
                    "name": "XL",
                    "_id": "5"
                },
                {
                    "name": "XXL",
                    "_id": "6"
                }]

        }
        var res = []

        // res[0] = Price;
        res[0] = Brands;
        res[1] = Colors;

        var res1 = []

        // res1[0] = Price;
        res1[0] = Brands;
        res1[1] = Colors;
        res1[2] = Size;

        subCategoryModelL2.findOne({ '_id': data.subCategoryId }).populate({ path: 'categoryModel', select: 'categories.categoryName' }).exec((err, subCategoryName) => {
            // console.log("$$$$$$$$$$$$$$", err, subCategoryName.categoryModel.categories.categoryName)

            if (err) throw err

            else if (subCategoryName) {
                // })
                if (subCategoryName.categoryModel.categoryName == 'Electronic') {
                    callback({
                        'statusCode': util.statusCode.EVERYTHING_IS_OK, 'statusMessage': util.statusMessage.FILTER_LIST[data.lang], 'result': res
                    })
                }

                else {
                    callback({
                        'statusCode': util.statusCode.EVERYTHING_IS_OK, 'statusMessage': util.statusMessage.FILTER_LIST[data.lang], 'result': res1
                    })
                }
            }
            else {
                callback({
                    'statusCode': util.statusCode.EVERYTHING_IS_OK, 'statusMessage': util.statusMessage.FILTER_LIST[data.lang], 'result': res
                })
            }
        })
    })
}

/* *******************************************************************
**************************getSubCategory*******************************
***********************************************************************/
getSubCategory = (data, callback) => {
    console.log("asdf")
    subCategoryModelL2.find({ categoryModel: data.categoryModel }).select({ 'subCategories': 1, '_id': 0, 'subCategoryName': 1, '_id': 1 }).exec((err, succ) => {
        if (err) {
            throw err
        }
        else if (!succ.length > 0) {
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang] })
        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": succ })
        }
    })
}

/* *******************************************************************
**************************getProductCategoryName***********************
***********************************************************************/
getProductCategoryName = (data, callback) => {
    console.log('getProductCategoryName')
    query = {
        subCategory: data.subCategoryId
    }
    productCategoryModelL3.find(query).select({ '_id': 1, 'productcategoryName': 1 }).exec((error, success) => {
        console.log(error, JSON.stringify(success))
        if (success.length > 0) {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": success })
        }
        else {
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang] })
        }
    })
}
/* *******************************************************************
**************************productDetails***********************
***********************************************************************/

productDetails = (data, callback) => {
    log('hitted productDetail api ios', data)
    if (!data) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    productModel.findOne({ _id: data._id }).exec((err, check) => {
        if (err || !check || check == null) {
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PRODUCT_NOT_FOUND[data.lang] })
            return
        }
        else {
            // })

            async.parallel({
                findProduct: (cb) => {
                    productModel.findById({ "_id": data._id, }).populate({ 'path': 'brandId', 'select': 'brandName' }).populate({ path: 'varianceId' }).populate({ path: 'sellerId' }).exec((err, result) => {
                        console.log("44444444444444444444444444444444", err, result)
                        if (err || !result || result == null) {

                            cb(null)
                        }
                        else {
                            cb(null, result)
                        }
                    })
                },

                reviewAndRating: (cb) => {
                    commonAPI.reviewAndRating(data._id, async (err, result) => {
                        // console.log('=========', err, result)
                        if (err && !result.length > 0) {
                            cb(null)
                        }
                        else {
                            rating = [];
                            // console.log("start")
                            result.forEach(element => {
                                // console.log("check review and rating", element.reviewAndRating)
                                if (element.reviewAndRating.length > 0) {
                                    async.forEachOf(element.reviewAndRating, async (value, key, back) => {
                                        await commonAPI.getUsername(value.userId, async (err, userDetail) => {

                                            if (await userDetail) {
                                                // await console.log(userDetail)
                                                console.log("middle")
                                                temp = {
                                                    reviewId: value._id,
                                                    firstName: userDetail.firstName,
                                                    lastName: userDetail.lastName,
                                                    image: userDetail.image,
                                                    review: value.review,
                                                    rating: value.rating
                                                }
                                                await rating.push(temp)
                                            }

                                            back()
                                        })
                                        console.log("ASFDFFFFFF")

                                    }, (err, result) => {
                                        console.log(rating)
                                        // cb(null, rating)

                                    })
                                }
                                // cb(null,rating)
                            })
                            console.log("end")
                            cb(null, rating)
                        }
                    })
                },
                getSimilarProduct: (cb) => {
                    productModel.findOne({ "_id": data._id }).lean().exec((err, result1) => {
                        productModel.find({
                            $or: [
                                // { brandId: result1.brandId },
                                { productCategoryId: result1.productCategoryId },

                            ]
                        }).populate({ path: 'brandId', select: 'brandName' }).populate({ path: "varianceId" }).lean().exec((err, result3) => {
                            // console.log("errAnd result", err, result3)
                            if (err || !result3) {
                                cb(null)
                            }
                            else {
                                var similarProduct = []
                                result3.forEach(element => {
                                    if (element._id != data._id) {
                                        let temp = {
                                            _id: element._id,
                                            description: element.description,
                                            price: element.varianceId.variants[0].price,
                                            productName: element.productName,
                                            // sellerId: element.sellerId,
                                            brand: element.brandId.brandName,
                                            // specifications: element.specifications,
                                            image: element.image,
                                        }
                                        similarProduct.push(temp)
                                    }
                                })
                                // console.log(result3)
                                cb(null, similarProduct)
                            }
                        })
                    })

                }

            }, (err, response) => {
                console.log('------------>>', err, response)
                if (response) {
                    // console.log("sadfsadfasfsadfdfasdf", response)
                    res = {}
                    var ratingAndReview = []
                    // console.log(response.findProduct.brandDesc[0].varianceId)
                    if (response.findProduct.varianceId == null) {
                        // console.log("variant not inserted")
                        data = {
                            _id: response.findProduct._id,
                            brand: response.findProduct.brandId.brandName,
                            productName: response.findProduct.productName,
                            price: response.findProduct.price,
                            color: response.findProduct.color,
                            description: response.findProduct.description,
                            image: response.findProduct.image,
                            specifications: response.findProduct.specifications[0],
                            productTry: response.findProduct.productTry,
                            tryImage: response.findProduct.tryImage ? response.findProduct.tryImage : "",
                            inStock: test.quantity > 0 ? true : false,
                            variants: {},
                            color: [],
                            material: [],
                            size: []
                        }
                        res.product = data

                    }
                    else if (response.findProduct.varianceId != null) {
                        var b = []
                        var color = []
                        var material = []
                        var size = []
                        // var test2;
                        response.findProduct.varianceId.variants.forEach(test => {
                            color.push(test.color)
                            material.push(test.material)
                            size.push(test.size)
                            // console.log(test.color.toUpperCase())
                            data = {
                                _id: response.findProduct._id,
                                brand: response.findProduct.brandId.brandName,
                                productName: response.findProduct.productName,
                                // price: response.findProduct.price,
                                description: response.findProduct.description,
                                specifications: response.findProduct.specifications[0],
                                productTry: response.findProduct.productTry,
                                inStock: test.quantity > 0 ? true : false,
                                tryImage: response.findProduct.tryImage ? response.findProduct.tryImage : "",
                                price: test.price ? test.price : '',
                                image: test.image ? test.image : [],
                                colors: [...new Set(color)].reverse().map(function (x) { return x.toUpperCase() }),
                                material: [...new Set(material)].reverse().map(function (x) { return x.toUpperCase() }),
                                size: [...new Set(size)].reverse().map(function (x) { return x.toUpperCase() })
                            }
                            res.product = data
                            // })
                        })
                    }
                    sellerInfo = {
                        _id: response.findProduct.sellerId._id,
                        sellerName: response.findProduct.sellerId.firstName,
                        selllerImage: response.findProduct.sellerId.image ? response.findProduct.image : "",
                        selllerRating: "3"
                    }
                    res.sellerInfo = sellerInfo
                    res.reviewAndRating = response.reviewAndRating
                    res.similarProduct = response.getSimilarProduct
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.USER_FOUND[data.lang], "result": res });
                }
                else {
                    console.log("###############errrorr#####################################3")
                    callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PRODUCT_NOT_FOUND })
                }
            })
        }
    })
}

/* *******************************************************************
**************************addVariance***********************
***********************************************************************/
addVariance = (data, callback) => {
    console.log('add variance')
    let variance = new varianceModel({
        productId: data.productId,
        sellingPrice: data.sellingPrice,
        inventorySKU: data.inventorySKU,
        costItem: data.costItem,
        weight: data.weight,
        productType: data.productType,
        variants: data.variants
    })
    varianceModel.save((err, saveVariance) => {
        console.log("saveVariance", err, saveVariance)
        brandDescriptionL4.findOneAndUpdate({ 'brandDesc._id': data.productId }, { $set: { 'varianceId': saveVariance._id } }).exec((err, result) => {
            console.log("findoneandUpdate", err, result)
        })
        callback(saveVariance)
    })
}

/* *******************************************************************
**************************getVariance***********************
***********************************************************************/
getVariance = (data, callback) => {
    console.log('get variance', data)
    // var color = [data.color.toLowerCase()], material = [data.material.toLowerCase()], size = [data.size.toLowerCase()];
    temp = {
        color: data.color.toLowerCase(),
        size: data.size.toLowerCase(),
        material: data.material.toLowerCase(),
    }
    // console.log(temp)
    query1 = {
        "productId": mongoose.Types.ObjectId(data._id),
        "variants": {
            "$elemMatch": {
                // "closed": false,
                "$and": [
                    {
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

    async.parallel({

        varianceDetail: (cb) => {
            varianceModel.findOne(query1, { 'variants.$': 1 }).populate({ path: 'productId' }).populate({ path: 'sellerId' }).lean().exec((err, result) => {
                // console.log(err, JSON.stringify(result))
                if (err || !result) {
                    callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang], })
                    return
                }
                else {
                    cb(null, result)
                }
            })
        },

        getSimilarProduct: (cb) => {
            productModel.findOne({ "_id": data._id }).lean().exec((err, result1) => {
                if (err) throw err
                productModel.find({
                    $or: [
                        { brandId: result1.brandId },
                        { productCategoryId: result1.productCategoryId },

                    ]
                }).populate({ path: 'brandId', select: 'brandName' }).populate({ path: "varianceId" }).lean().exec((err, result3) => {
                    // console.log("errAnd result", err, result3)
                    if (err || !result3) {

                        cb(null)
                    }
                    else {
                        var similarProduct = []
                        result3.forEach(element => {
                            if (element._id != data._id) {
                                let temp = {
                                    _id: element._id,
                                    description: element.description,
                                    price: element.varianceId.variants[0].price,
                                    productName: element.productName,
                                    // sellerId: element.sellerId,
                                    brand: element.brandId.brandName,
                                    // specifications: element.specifications,
                                    image: element.image,
                                }
                                similarProduct.push(temp)
                            }
                        })
                        // console.log(result3)
                        cb(null, similarProduct)
                    }
                })
            })
        },

        reviewAndRating: (cb) => {
            commonAPI.reviewAndRating(data._id, async (err, result) => {
                // console.log('=========', err, result)
                if (err && !result.length > 0) {
                    cb(null)
                }
                else {
                    rating = [];
                    // console.log("start")
                    result.forEach(element => {
                        console.log("check review and rating", element.reviewAndRating)
                        if (element.reviewAndRating.length > 0) {
                            async.forEachOf(element.reviewAndRating, async (value, key, back) => {
                                await commonAPI.getUsername(value.userId, async (err, userDetail) => {

                                    if (await userDetail) {
                                        // await console.log(userDetail)
                                        console.log("middle")

                                        temp = {
                                            firstName: userDetail.firstName,
                                            lastName: userDetail.lastName,
                                            image: userDetail.image,
                                            review: value.review,
                                            rating: value.rating
                                        }
                                        await rating.push(temp)
                                    }

                                    back()
                                })
                                console.log("ASFDFFFFFF")

                            }, (err, result) => {
                                console.log(rating)
                                // cb(null, rating)

                            })
                        }
                        // cb(null,rating)
                    })
                    console.log("end")
                    cb(null, rating)
                }
            })
        },


    }, (err, response) => {
        res = {}
        var color = [data.color], material = [data.material], size = [data.size]
        // console.log('@@@@@@@@@@@@2', err, response.varianceDetail)
        // callback(response.varianceDetail)



        varianceModel.findById({ _id: response.varianceDetail._id }).exec((err, combination) => {
            if (err || !combination) throw err
            else {
                combination.variants.forEach(element => {
                    // console.log('====>', element)
                    color.push(element.color.toUpperCase())
                    material.push(element.material.toUpperCase())
                    size.push(element.size.toUpperCase())

                })

                console.log(_.uniq(color))

                var temp = {
                    _id: response.varianceDetail.productId._id,
                    brand: response.varianceDetail.productId.brandId.brandName,
                    productName: response.varianceDetail.productId.productName,
                    // price: response.findProduct.price,
                    description: response.varianceDetail.productId.description,
                    specifications: response.varianceDetail.productId.specifications[0],
                    productTry: response.varianceDetail.productId.productTry,
                    inStock: response.varianceDetail.variants[0].quantity > 0 ? true : false,
                    price: response.varianceDetail.variants[0].price,
                    image: response.varianceDetail.variants[0].image ? response.varianceDetail.variants[0].image : [],
                    // variants: {
                    //     _id: test._id,
                    //     color: test.color.toUpperCase(),
                    //     material: test.material.toUpperCase(),
                    //     image: test.image ? test.image : [],
                    //     size: test.size.toUpperCase(),
                    //     price: test.price ? test.price : ''
                    // },
                    // colors: [data.color],
                    // material: [data.material],
                    // size: [data.size]
                    colors: _.uniq(color),
                    size: _.uniq(size),
                    material: _.uniq(material)
                }
                res.product = temp
                res.sellerInfo = {
                    _id: response.varianceDetail.sellerId._id,
                    sellerName: response.varianceDetail.sellerId.firstName,
                    selllerImage: response.varianceDetail.sellerId.image ? response.findProduct.image : "",
                    selllerRating: "3"
                }
                res.reviewAndRating = response.reviewAndRating
                res.similarProduct = response.getSimilarProduct
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": res })

            }
        })

    })
}
/* *******************************************************************
**************************getBrand***********************
***********************************************************************/
getBrand = (data, callback) => {
    brandModel.findOne({ _id: data.brandId }, { __v: 0 }).exec((err, result) => {
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
        }
    })
}

/* *******************************************************************
**************************deleteBrand***********************
***********************************************************************/
//!delete brand
deleteBrand = (data, callback) => {
    brandModel.findOneAndUpdate({ _id: data.brandId }, { $set: { status: "INACTIVE" } }, { __v: 0, new: true }).exec((err, result) => {
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
        }
    })
}

/* *******************************************************************
**************************updateBrand***********************
***********************************************************************/
updateBrand = (data, callback) => {
    update = {
        $set: {
            brandName: data.brandName,
            image: data.brandImage,
            icon: data.brandIcon
        }
    }
    brandModel.findByIdAndUpdate({ _id: data.brandId }, update, { __v: 0, new: true }).exec((err, result) => {
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
        }
    })
}


/* *******************************************************************
**************************vendorOrderList***********************
***********************************************************************/
vendorOrderList = (header, callback) => {
    console.log("vendororderList", header)
    var userId
    commonFunction.jwtDecode(header.accesstoken, (err, result) => {
        userId = result
    })
    //!
    orderPlaced.aggregate([{
        $unwind: '$orderPlacedDescription'
    }, {
        $match: {
            // 'orderPlacedDescription.sellerId': mongoose.Types.ObjectId(userId)
            $or: [
                { 'orderPlacedDescription.sellerId': mongoose.Types.ObjectId(userId) },
            ]
        },
        // { $sort: { 'orderPlacedDescription.createdAt': -1 } }
    }
    ], (err, result) => {
        // console.log(err, result)
        var demo = []
        async.forEachOf(result, (value, key, cb) => {
            productModel.findOne({ '_id': mongoose.Types.ObjectId(value.orderPlacedDescription.productId) }).populate({ path: 'brandId' }).exec((err, productDetail) => {
                console.log('############', err, productDetail)
                userModel.findById({ _id: value.userId }, { firstName: 1, address: 1 }).exec((err, userInfo) => {
                    console.log("---------->>", err, userInfo.firstName)
                    let temp = {
                        customerName: userInfo.firstName,
                        customerAddress: "delhi",
                        productDetail: productDetail.productName,
                        quantity: value.orderPlacedDescription.productQuantity,
                        productImage: productDetail.image[0],
                        status: value.orderPlacedDescription.orderStatus,
                        orderId: value.orderPlacedDescription.orderId,
                        createdAt: value.orderPlacedDescription.createdAt,
                        paymentStatus: value.orderPlacedDescription.orderPayment,
                        totalAmountPaid: value.orderPlacedDescription.totalAmountPaid + value.orderPlacedDescription.deliveryCharges + value.orderPlacedDescription.estimateTax
                    }
                    demo.push(temp)
                    console.log(demo)
                    cb()
                })
            })
        }, (err, response) => {
            console.log('@@@@@@@@@@@2', demo)
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY.en, 'result': demo })
        })
        // callback(result)
    })
}

/********************************************************************
**************************getSubCategoryList***********************
***********************************************************************/
getSubCategoryList = (query, callback) => {
    console.log("get subcategory list ", query)
    subCategoryModelL2.find({ status: 'ACTIVE' }, { 'subCategoryName': 1, 'image': 1, categoryModel: 1 }).populate({ path: 'categoryModel' }).exec((err, result) => {
        // console.log(err, result)
        demo = []
        async.forEachOf(result, (value, key, cb) => {
            // console.log("@@@@@2",value)
            // value.subCategories.forEach(element => {
            //     console.log("@@@@@2", element)
            // })
            temp = {
                _id: value._id,
                categoryName: value.categoryModel.categoryName,
                subCategoryName: value.subCategoryName,
                image: value.image
            }
            demo.push(temp)

            // })
            cb()
        })
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[query.lang], 'result': demo })
    })
}

/********************************************************************
**************************orderDetail***********************
***********************************************************************/
orderDetail = (data, callback) => {
    let query = {
        'orderPlacedDescription.orderId': data.orderId.substring(3)
    }
    async.parallel({
        getOrderDetails: (cb) => {
            orderPlaced.findOne(query, { 'orderPlacedDescription.$': 1 }).populate({ path: 'userId' }).populate({ path: 'orderPlacedDescription.productId' }).exec((err, result) => {
                if (err || !result || !result.orderPlacedDescription.length) {
                    res = {}
                    callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.ORDER_EMPTY[data.lang], 'result': res })
                }
                else {
                    cb(null, result)
                }
            })
        }
    }, (err, response) => {
        var main = []
        async.forEachOf(response.getOrderDetails.orderPlacedDescription, (value, key, callback) => {
            brandModel.findOne(value.productId.brandId, (err, brand) => {
                varianceModel.findOne({
                    "productId": mongoose.Types.ObjectId(value.productId._id),
                    "variants": {
                        "$elemMatch": {
                            // "closed": false,
                            "$and": [
                                {
                                    "color": value.color.toLowerCase(),
                                },
                                {
                                    "size": value.size.toLowerCase(),
                                },
                                {
                                    "material": value.material.toLowerCase(),
                                }
                            ]
                        }
                    }
                }, { 'variants.$': 1 }).exec((err, getVariance) => {
                    response.getOrderDetails.userId.address.forEach(element => {
                        if (element._id.toString() == value.addressId.toString()) {
                            temp = {
                                brand: brand.brandName,
                                orderId: "ORD" + value.orderId,
                                transactionId: value.transactionId,
                                productId: value.productId._id,
                                productName: value.productId.productName,
                                color: getVariance.variants[0].color,
                                price: getVariance.variants[0].price,
                                productQuantity: getVariance.variants[0].quantity,
                                image: getVariance.variants[0].image,
                                orderStatus: value.orderStatus,
                                feedbackAdded: value.feedbackAdded,
                                description: value.productId.description,
                                orderDate: value.createdAt,
                                orderPayment: value.orderPayment,
                                deliveryAddress: element,
                                estimateTax: value.estimateTax ? value.estimateTax : '17',
                                deliveryCharges: value.deliveryCharges ? value.deliveryCharges : "50",
                                totalAmountPaid: (17 + 50 + parseInt(value.totalAmountPaid)).toString()
                            }
                            main.push(temp)
                        }
                        callback()
                    })
                })
            })
        }, (err, successfully) => {
            var res = {}
            res.productDetail = main
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.LIST_ORDER[data.lang], "result": main[0] })

        })
    })
}
/********************************************************************
**************************getAllVariant***********************
***********************************************************************/

getAllVariant = (data, callback) => {
    console.log('data,headers', data)
    var res = []
    productModel.findOne({ '_id': data.productId }).populate({ path: 'varianceId' }).exec((err, result) => {
        // console.log("=============>>>",err,result)
        if (err) throw err
        else if (result && result.varianceId) {
            result.varianceId.variants.forEach(element => {
                // console.log(element)
                var temp = {
                    _id: result._id,
                    productName: result.productName,
                    inventorySKU: element.SKU,
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

/********************************************************************
**************************searchVendorOrder******************************
***********************************************************************/

searchVendorOrder = (data, header, callback) => {
    // console.log("vendororderList", data, header)

    console.log('---------------?>>>', data.searchKeyword.trim())
    var value = new RegExp(data.searchKeyword.trim(), 'i');
    var key = new RegExp(data.searchKeyword.trim(), 'i')
    var userId
    commonFunction.jwtDecode(header.accesstoken, (err, result) => {
        userId = result
    })
    console.log("##################################", value)
    orderPlaced.aggregate([{
        $unwind: '$orderPlacedDescription'
    }, {
        $match: {
            $and: [
                { 'orderPlacedDescription.sellerId': mongoose.Types.ObjectId(userId) },
                {
                    $or: [
                        { 'orderPlacedDescription.orderId': { $regex: key } },
                        { 'orderPlacedDescription.totalAmountPaid': { $regex: value } },
                        // { 'brandDesc.tag': { $in: [value] } },
                        // { 'brandDesc.brandId': mongoose.Types.ObjectId(brandId._id) },

                    ]
                }]
        }
    }
    ], (err, result) => {
        // console.log(err)
        // callback({ 'result': result, 'err': err })
        if (result.length == 0) {
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang], })
            return
        }
        var successfully = []
        async.auto({
            search: async (cb) => {
                async.forEachOf(result, (element, key, go) => {
                    // result.forEach(element => {
                    async.waterfall([
                        function (callback) {
                            userModel.findOne({ _id: element.userId }, { firstName: 1 }).exec(async (err, userInfo) => {
                                if (err)
                                    callback(null)
                                else {
                                    callback(null, userInfo)
                                }
                            })
                        },
                        function (userInfo, callback) {
                            // console.log("varianceid", element.orderPlacedDescription.varianceId)
                            varianceModel.findOne({ 'variants._id': element.orderPlacedDescription.varianceId }, { 'variants.$': 1 }).exec((err, variance) => {
                                // console.log('=====>>', err, variance)
                                callback(null, userInfo, variance)
                            })
                        },
                        function (userInfo, variance, callback) {
                            // console.log("&&&&&&&&&&&&&&&&&&&&7", userInfo, variance)

                            productModel.findOne({ '_id': element.orderPlacedDescription.productId }).exec(async (err, productDetail) => {
                                // console.log("ee333",err, 'productDetail',productDetail,'userinfo',userInfo, 'variance',variance)
                                let temp = {
                                    customerName: userInfo.firstName,
                                    customerAddress: "delhi",
                                    productDetail: productDetail.productName,
                                    quantity: element.orderPlacedDescription.productQuantity,
                                    productImage: productDetail.image[0],
                                    status: element.orderPlacedDescription.orderStatus,
                                    orderId: element.orderPlacedDescription.orderId,
                                    paymentStatus: element.orderPlacedDescription.orderPayment,
                                    totalAmountPaid: element.orderPlacedDescription.totalAmountPaid + element.orderPlacedDescription.deliveryCharges + element.orderPlacedDescription.estimateTax,
                                    createdAt: element.orderPlacedDescription.createdAt,
                                }
                                // var a=[].push(temp)
                                callback(null, temp)
                                go()
                            })
                        }

                    ], async (err, response) => {
                        // console.log("waterfall", err, response)
                        successfully.push(response)
                    })
                    // })

                }, (err, responseEach) => {
                    console.log("((((((((((((((((((((((((((((9", err, responseEach)
                    console.log("3333", successfully)
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': successfully })
                })

                // console.log("3333", successfully)
                cb(null, successfully)
            }
        }, (err, response) => {
            console.log("finall", successfully, response)
        })



    })
}

/********************************************************************
**************************inActiveProductList*************************
***********************************************************************/
inActiveProductList = (data, callback) => {
    console.log("get product listddsss", data)

    if (!data.status == "all" || data.status == "active" || data.status == "inactive" || data.status == 'rejected') {
        // console.log("status in", data.status)
        productModel.find({
            $and: [{ status: data.status.toUpperCase() }]
        }).populate({ path: 'varianceId' }).populate({ path: 'sellerId' }).exec((err, response) => {
            console.log(err, JSON.stringify(response))
            if (response.length > 0) {
                var res = []
                async.forEachOf(response, (value, key, callback) => {
                    let temp = {
                        productId: value._id,
                        productName: value.productName,
                        productStatus: value.status,
                        productPrice: value.price,
                        sellerName: value.sellerId.firstName,
                        image: value.image,
                        price: value.sellingPrice,
                        quantity: value.quantity,
                        variant: value.varianceId.variants ? value.varianceId.variants : null
                    }
                    res.push(temp)

                    callback()

                }, (err, finallyy) => {
                    // console.log(err, finallyy)

                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': res })
                })
            }
            else {
                let res = []
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang], 'result': res })
            }

        })
    }
    else {
        console.log("status out", data.status)
        productModel.find({}).populate({ path: 'varianceId' }).populate({ path: 'sellerId' }).exec((err, response) => {
            // console.log(err, JSON.stringify(response))
            if (response.length > 0) {
                var res = []
                async.forEachOf(response, (value, key, callback) => {
                    let temp = {
                        productId: value._id,
                        productName: value.productName,
                        productStatus: value.status,
                        productPrice: value.price,
                        sellerName: value.sellerId.firstName,
                        image: value.image,
                        price: value.sellingPrice,
                        quantity: value.quantity,
                        variant: value.varianceId.variants ? value.varianceId.variants : null
                    }
                    res.push(temp)

                    callback()

                }, (err, finallyy) => {
                    // console.log(err, finallyy)

                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': res })
                })
            }
            else {
                let res = []
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang], 'result': res })
            }
        })
    }
}
/********************************************************************
**************************addVendoroffer*************************
***********************************************************************/
addVendoroffer = (data, callback) => {

    if (!data.offerName || !data.image || !data.description || !data.offerType || !data.value || !data.applicableOn) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    }
    else {
        async.parallel({
            exist: (cb) => {
                varianceOffer.findOne({ offerName: data.offerName })
                    .exec((err, exist) => {
                        if (err) cb(null)
                        else if (!exist) cb(null)
                        else cb(null, exist)
                    })
            },

            uploadImage: (cb) => {
                commonFunction.uploadMultipleImages(data.offerImage, (err, image) => {
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
                    userId: mongoose.Types.ObjectId(userId),
                    offerName: data.offerName,
                    description: data.description,
                    offerType: data.offerType,
                    image: response.uploadImage,
                    value: data.value,
                    applicableOn: data.applicableOn
                }
                let variance = new productOffer(query)
                variance.create(query, (err, result) => {
                    // log(err, result)
                    if (err)
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                    else if (!result)
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
                    else {
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.OFFERS_ADDED[data.lang], "result": result })
                    }
                })
            }
        })
    }
}
/********************************************************************
**************************addToCart*************************
***********************************************************************/
addToCart = (data, headers, callback) => {
    log("addToCart", data)
    var userId;
    commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
        if (result) userId = result
        else callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    })
    if (!data.productId || !userId)
        callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    else {
        bagModel.findOne({ userId: userId }, (err, result) => {
            if (err) throw err
            else if (result) {
                query = { userId: userId },
                    update = {
                        $push: {
                            orderDescription: {
                                productId: data.productId,
                                // varianceId: data.varianceId,
                                sellerId: data.sellerId,
                                orderPayment: "PENDING",
                                orderStatus: "ADDTOCART",
                                productQuantity: data.productQuantity ? data.productQuantity : 1,
                                color: data.color,
                                size: data.size,
                                material: data.material,
                                sellerId: data.sellerId,
                                //totalAmountPaid: data.totalAmountPaid ? data.totalAmountPaid : "234"
                            }
                        }
                    }
                bagModel.find({ $and: [{ userId: userId }, { 'orderDescription.varianceId': data.varianceId }, { 'orderDescription.productId': data.productId }] }, { 'orderDescription.$': 1 }).exec((err, findOrder) => {
                    if (err) throw err
                    else if (findOrder.length > 0) {
                        callback({ statusCode: util.statusCode.ALREADY_EXIST, "statusMessage": util.statusMessage.BAG_PRODUCT_ALREADY_EXIST[data.lang] })
                        return
                    }
                    else {
                        bagModel.findOneAndUpdate(query, update, { new: true, lean: true }, (err, result) => {
                            if (result) {
                                temp = {}
                                temp.length = result.orderDescription.length

                                //!delete from wishist
                                commonAPI.deleteWist(userId, data.productId)
                                //!end
                                callback({ statusCode: util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.ADD_TO_CART[data.lang], "result": temp })
                            }
                            else {
                                callback({ statusCode: util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG[data.lang], "result": result })
                            }
                        })
                    }
                })
            }
            else {
                log('not exist')
                query = {
                    userId: userId,
                    orderDescription: {
                        productId: data.productId,
                        // varianceId: data.varianceId,
                        orderPayment: "PENDING",
                        orderStatus: "ADDTOCART",
                        productQuantity: data.productQuantity ? data.productQuantity : 1,
                        totalAmountPaid: data.totalAmountPaid ? data.totalAmountPaid : "234",
                        sellerId: data.sellerId,
                        color: data.color,
                        size: data.size,
                        material: data.material,

                    }
                }
                console.log("==>>", query)
                bagModel.create(query, (err, result) => {
                    log(err, result)
                    if (result) {
                        res = {}
                        res.result = result
                        temp = {}
                        temp.length = 1
                        callback({ statusCode: util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.ADD_TO_CART[data.lang], "result": temp })
                    }
                    else {
                        callback({ statusCode: util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG[data.lang], "result": result })
                    }
                })
            }
        })
    }
}
/********************************************************************
**************************addToCart*************************
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
                wishModel.find({ $and: [{ userId: userId }, { 'wishListDescription.productId': data.productId }] }, { 'wishListDescription.$': 1 }).exec((err, findOrder) => {
                    if (err) throw err
                    else if (findOrder.length > 0) {
                        callback({ statusCode: util.statusCode.ALREADY_EXIST, "statusMessage": util.statusMessage.WISHLIST_PRODUCT_ALREADY_EXIST[data.lang] })
                        return
                    }
                    else {
                        wishModel.findOneAndUpdate(query, update, { new: true, lean: true }, (err, result) => {
                            if (result) {
                                temp = {}
                                // log("lenght", result.wishListDescription.length)
                                temp.length = result.wishListDescription.length
                                callback({ statusCode: util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.ADD_TO_WISHLIST[data.lang], "result": result })
                            }
                            else {
                                callback({ statusCode: util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG[data.lang], "result": result })
                            }
                        })
                    }
                })
            }
            else {
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
                    }
                    else {
                        callback({ statusCode: util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG[data.lang] })
                    }
                })
            }
        })
    }
}
/********************************************************************
**************************addReviewAndRating*************************
***********************************************************************/
addReviewAndRating = (header, data, callback) => {
    log('addReviewAndRating', data)
    var userId
    if (!data.productId) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        commonFunction.jwtDecode(header.accesstoken, (err, userId1) => {
            if (err) throw err
            else {
                userId = userId1
            }
        })
        update = {
            $push: {
                reviewAndRating: {
                    productId: data.productId,
                    rating: data.rating,
                    review: data.review,
                    userId: userId
                }
            }
        }
        reviewAndRatingL5.find({ userId: userId }).exec((err, result) => {
            // console.log("adjdadjaskld", err, result)
            if (err) throw err
            else if (result.length > 0) {

                reviewAndRatingL5.findOneAndUpdate({ userId: userId }, update, { new: true }, (err, result) => {
                    // log(err, result)
                    if (err) throw err
                    else {
                        commonAPI.changeFeedBackStatus(data.orderId, data.productId)
                        callback({ statusCode: util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.Review_saved_successfully[data.lang], 'result': result })
                    }
                })
            }
            else {
                commonAPI.changeFeedBackStatus(data.orderId, data.productId)
                let query = {
                    userId: userId,
                    reviewAndRating: {
                        productId: data.productId,
                        rating: data.rating,
                        review: data.review,
                        userId: userId
                    }
                }

                reviewAndRatingL5.create(query, (err, succ) => {
                    callback({ statusCode: util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.Review_saved_successfully[data.lang], 'result': succ })
                })
            }
        })
    }
}
/********************************************************************
**************************addReviewAndRating*************************
***********************************************************************/
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
            }
            else if (userFound) {
                query = { userId: userId },
                    update = {
                        $pull: {
                            orderDescription: {
                                productId: data.productId
                            }
                        }
                    }
                bagModel.find({ $and: [query, { 'orderDescription.productId': data.productId }] }, { 'orderDescription.$': 1 }).exec((err, findId) => {
                    if (err) {
                        callback({ statusCode: util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                    }
                    else if (findId.length > 0) {
                        bagModel.update({ _id: findId[0]._id }, update, { new: true }).exec((err, deleted) => {
                            if (err) {
                                callback({ statusCode: util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                            }
                            else {
                                callback({ statusCode: util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.PRODUCT_DELETE_CART[data.lang] })
                            }
                        })
                    }
                    else {
                        callback({ statusCode: util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.PRODUCT_NOT_FOUND[data.lang] });
                    }
                })
            }
            else {
                callback({ statusCode: util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": "user not exists" });
            }
        })
    }
}
/********************************************************************
**************************placeOrder*************************
***********************************************************************/
placeOrder = (data, headers, callback) => {
    log("placeOrder", data, headers.accesstoken)
    var userId;
    var orderId = commonFunction.generateOrderId(6)
    var orderPayment = data.orderPayment.toUpperCase()
    commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
        if (result) userId = result
        else callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        // returnvarianceId
    })
    if (!data.productId || !userId)
        callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    else {
        async.parallel({
            getProdctdetail: (cb) => {
                let query = {
                    "productId": mongoose.Types.ObjectId(data.productId),
                    "variants": {
                        "$elemMatch": {
                            "$and": [
                                {
                                    "color": data.color.toLowerCase(),
                                },
                                {
                                    "size": data.size.toLowerCase(),
                                },
                                {
                                    "material": data.material.toLowerCase(),
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
                }
                else if (userFind) {
                    query = { userId: userId },
                        update = {
                            $push: {
                                orderPlacedDescription: {
                                    sellerId: data.sellerId,
                                    productId: data.productId,
                                    // varianceId: data.varianceId ? data.varianceId : null,
                                    orderPayment: orderPayment ? orderPayment : "COD",
                                    orderStatus: "PLACED",
                                    productQuantity: data.productQuantity ? data.productQuantity : 1,
                                    orderId: orderId,
                                    transactionId: "1234567890",
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
                        log(err, orderPlaced)
                        if (err) {
                            callback({ statusCode: util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                        }
                        else if (orderPlaced) {
                            let notifyData = {
                                msg: util.statusMessage.ORDER_PLACED[data.lang],
                                productId: data.productId,
                                orderId: "ORD" + orderId,
                                title: util.statusMessage.TITLE.PLACED[data.lang],
                                type: util.statusMessage.type.PLACED[data.lang],
                                orderId: orderId
                            }
                            commonAPI.notify(notifyData, userId, (err, result) => {
                                console.log("1659.....notifyAPI", err, result)
                            })
                            callback({ statusCode: util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.ORDER_PLACED[data.lang] })
                        }
                        else {
                            callback({ statusCode: util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG[data.lang] })
                        }
                    })
                }
                else {
                    log('not exist')
                    let query = {
                        userId: userId,
                        orderPlacedDescription: {
                            productId: data.productId,
                            sellerId: data.sellerId,
                            // varianceId: data.varianceId ? data.varianceId : null,
                            orderPayment: data.orderPayment ? data.orderPayment : "COD",
                            orderStatus: "PLACED",
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
                        if (err) {
                            callback({ statusCode: util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                        }
                        else if (result) {
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
                            commonAPI.notify(notifyData, userId, (err, result) => {
                                console.log("1666...notifyAPI", err, result)
                            })
                            callback({ statusCode: util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.ORDER_PLACED[data.lang] })
                        }
                        else {
                            callback({ statusCode: util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG[data.lang] })
                        }
                    })
                }
                //!!! delete in addtocart
                commonAPI.deleteCart(userId, data.productId)
                //!
            })



        })

        // let condition = { 'orderDescription.productId': data.productId }
        // let update = { '$set': { 'orderDescription.$': { orderStatus: "PLACED" } } }
        //!placeorder
    }
}
/********************************************************************
**************************addReviewAndRating*************************
***********************************************************************/
addReviewAndRating = (header, data, callback) => {
    log('addReviewAndRating', data)
    var userId;
    if (!data.productId) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        commonFunction.jwtDecode(header.accesstoken, (err, userId1) => {
            if (err) throw err
            else {
                userId = userId1
            }
        })
        update = {
            $push: {
                reviewAndRating: {
                    productId: data.productId,
                    rating: data.rating,
                    review: data.review,
                    userId: userId
                }
            }
        }
        reviewAndRatingL5.find({ userId: userId }).exec((err, result) => {
            // console.log("adjdadjaskld", err, result)
            if (err) throw err
            else if (result.length > 0) {

                reviewAndRatingL5.findOneAndUpdate({ userId: userId }, update, { new: true }, (err, result) => {
                    // log(err, result)
                    if (err) throw err
                    else {
                        commonAPI.changeFeedBackStatus(data.orderId, data.productId)
                        callback({ statusCode: util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.Review_saved_successfully[data.lang], 'result': result })
                    }
                })
            }
            else {
                commonAPI.changeFeedBackStatus(data.orderId, data.productId)
                let query = {
                    userId: userId,
                    reviewAndRating: {
                        productId: data.productId,
                        rating: data.rating,
                        review: data.review,
                        userId: userId
                    }
                }

                reviewAndRatingL5.create(query, (err, succ) => {
                    callback({ statusCode: util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.Review_saved_successfully[data.lang], 'result': succ })
                })
            }
        })
    }
}
/********************************************************************
**************************applyFilter*************************
***********************************************************************/
applyFilter = (data, callback) => {
    console.log('call filter api -==>', data)
    // console.log('call filter api -==>', typeof data.Price)
    var dataManage = {}
    // console.log(JSON.parse(data.Colors))
    if (data.Colors && data.Sizes && data.Brands && data.Price) {
        dataManage = {
            Sizes: JSON.parse(data.Sizes),
            Colors: JSON.parse(data.Colors),
            Brands: JSON.parse(data.Brands),
            Price: JSON.parse(data.Price)
        }
    }
    else if (data.Brands && data.Colors) {
        dataManage = {
            // Colors: JSON.parse(data.Colors),
            Colors: JSON.parse(data.Colors),
            Brands: JSON.parse(data.Brands)
        }
    }
    else if (data.Brands && data.Sizes) {
        dataManage = {
            Sizes: JSON.parse(data.Sizes),
            // Colors: JSON.parse(data.Colors),
            Brands: JSON.parse(data.Brands)
        }
    }
    else if (data.Colors && data.Sizes) {
        dataManage = {
            Sizes: JSON.parse(data.Sizes),
            Colors: JSON.parse(data.Colors),
            // Brands: JSON.parse(data.Brands)
        }
    }
    else if (data.Price && data.Sizes) {
        dataManage = {
            Sizes: JSON.parse(data.Sizes),
            Price: JSON.parse(data.Price),
            // Brands: JSON.parse(data.Brands)
        }
    }
    else if (data.Price && data.Colors) {
        dataManage = {
            Colors: JSON.parse(data.Colors),
            Price: JSON.parse(data.Price),
            // Brands: JSON.parse(data.Brands)
        }
    }
    else if (data.Colors && data.Sizes && data.Brands) {
        dataManage = {
            Sizes: JSON.parse(data.Sizes),
            Colors: JSON.parse(data.Colors),
            Brands: JSON.parse(data.Brands)
        }
    }
    else if (data.Price && data.Sizes && data.Brands) {
        dataManage = {
            Sizes: JSON.parse(data.Sizes),
            Price: JSON.parse(data.Price),
            Brands: JSON.parse(data.Brands)
        }
    }
    else if (data.Colors && data.Price && data.Brands) {
        dataManage = {
            Colors: JSON.parse(data.Colors),
            Price: JSON.parse(data.Price),
            Brands: JSON.parse(data.Brands)
        }
    }
    else if (data.Colors) {
        dataManage = {
            Colors: JSON.parse(data.Colors),
            // Price: JSON.parse(data.Price),
            // Brands: JSON.parse(data.Brands)
        }
    }
    else if (data.Price) {
        dataManage = {
            // Colors: JSON.parse(data.Colors),
            Price: JSON.parse(data.Price),
            // Brands: JSON.parse(data.Brands)
        }
    }
    else if (data.Colors) {
        dataManage = {
            Colors: JSON.parse(data.Colors),
            // Price: JSON.parse(data.Price),
            // Brands: JSON.parse(data.Brands)
        }
    }
    else if (data.Brands) {
        dataManage = {
            // Brands: JSON.parse(data.Colors),
            // Price: JSON.parse(data.Price),
            Brands: JSON.parse(data.Brands)
        }
    }
    console.log('data parse ', dataManage)
/*     var query = {
        "variants": {
            "$elemMatch": {
                // "closed": false,
                "$or": [
                    {
                        "color": { $in: dataManage.Colors },
                    }
                ]
            }
        }
    }

 */    query1 = {
        $and: [
            {
                $or: [
                    { 'variants.color': { $in: dataManage.Colors ? dataManage.Colors : [] } },
                    { 'variants.size': { $in: dataManage.Sizes ? dataManage.Sizes : [] } }
                ]
            },
            { 'variants.price': { $lt: data.Price } }
        ]
    }
    console.log("######", query1)
    /*  query3 = [{
         $unwind: '$brandDescd'
     }, {
         $match: { 'brandDesc.brandId': { $in: data.brand } }
     }
     ] */
    async.series({
        getColor: (cb) => {
            let a = []
            let B = []
            varianceModel.find(query1).exec((err, succ) => {
                console.log("3456789", err, succ)
                succ.forEach(emp => {

                    a.push(emp.productId.toString())
                    B.push(emp.productId)
                })
                // console.log('==============>>',B)
                // console.log('777777777777777', B[0])
                console.log(typeof a[0], _.uniq(a))
                cb(null, _.uniq(a))
            })
        },
        getBrand: (cb) => {
            let a = []
            brandModel.find({ brandName: { $in: dataManage.Brands } }).exec((err, succ) => {
                console.log("branddetaidl", err, JSON.stringify(succ))
                succ.forEach(element => {
                    a.push(element._id)
                })
                // console.log('6666666666y',a)
                let query3 = [/* {
                    $unwind: '$brandDesc'
                }, */ {
                        $match: { 'brandId': { $in: a } }
                    }
                ]
                b = []
                productModel.aggregate(query3).exec((err, result) => {
                    console.log("$$$$$$$$$4", err, JSON.stringify(result))
                    result.forEach(element => {
                        b.push(element._id.toString())
                    })
                    cb(null, b)
                })
            })
        }

    }, (err, response) => {

        let productArray = _.union(response.getColor, response.getBrand)
        let objectIdArray = productArray.map(s => mongoose.Types.ObjectId(s));
        console.log(objectIdArray)
        // let query4 = [{
        //     $unwind: '$brandDesc'
        // }, {
        //     $match: {
        //         $and: [
        //             {
        //                 'brandDesc._id': {
        //                     $in: objectIdArray
        //                 }
        //             },
        //             { 'subCategory': mongoose.Types.ObjectId(data.subCategoryId) }
        //         ]
        //     }
        // }
        // ]

        query4 = {

            $and: [
                {
                    '_id': {
                        $in: objectIdArray
                    }
                },
                { 'subCategory': mongoose.Types.ObjectId(data.subCategoryId) }
            ]

        }
        productModel.find(query4).populate({ path: 'varianceId' }).exec((err, success) => {
            var successfully = []
            if (err) {
                throw err
            }
            success.forEach(element => {
                let temp = {
                    _id: element._id,
                    productName: element.productName,
                    categoryModel: element.categoryModel,
                    subCategory: element.subCategory._id,
                    productCategoryId: element.productCategoryId,
                    brandId: element.brandId._id,
                    brandName: element.brandId.brandName,
                    description: element.description,
                    price: element.varianceId.variants[0].price,
                    image: element.varianceId.variants[0].image,
                    specifications: element.specifications
                }
                successfully.push(temp)
            })

            // console.log(err, success)
            res = {}
            res.productData = successfully
            res.subCategory = []
            console.log(success.length)
            if (!success.length > 0) {
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOW_PRODUCT_AVAILABLE[data.lang] })
            }
            else { callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': res }) }
        })
    })
}
/********************************************************************
**************************compareProduct*************************
***********************************************************************/
compareProduct = (data, callback) => {
    console.log("data is compare product", data)

    async.parallel({
        findProduct1: (cb) => {
            productModel.findOne({ "_id": data.productId1 }).populate({ 'path': 'brandId', 'select': 'brandName' }).populate({ path: 'varianceId' }).exec((err, result) => {
                cb(null, result)
            })
        },
        findProduct2: (cb) => {
            productModel.findOne({ "_id": data.productId2 }).populate({ 'path': 'brandId', 'select': 'brandName' }).populate({ path: 'varianceId' }).exec((err, result) => {
                cb(null, result)
            })
        },
        reviewAndRating1: (cb) => {
            commonAPI.reviewAndRating(data.productId1, async (err, result) => {
                console.log("%5555555555555555", err, (result))
                if (err && !result.length > 0) {
                    cb(null)
                }
                else {
                    // console.log("@@@@",result)
                    let rating = []
                    result.forEach(openArray => {
                        // if(openArray.reviewAndRating)
                        openArray.reviewAndRating.forEach(innerArray => {

                            rating.push(parseInt(innerArray.rating))
                        })
                    })
                    // console.log(rating)
                    let sum = 0
                    rating.forEach(element => {
                        sum = sum + element
                    })
                    console.log(sum / rating.length)
                    sum = sum / rating.length

                    cb(null, sum.toString())
                }
            })
        },
        reviewAndRating2: (cb) => {
            commonAPI.reviewAndRating(data.productId2, async (err, result) => {
                console.log("%5555555555555555", err, (result))
                if (err && !result.length > 0) {
                    cb(null)
                }
                else {
                    // console.log("@@@@",result)
                    let rating = []
                    result.forEach(openArray => {
                        // if(openArray.reviewAndRating)
                        openArray.reviewAndRating.forEach(innerArray => {

                            rating.push(parseInt(innerArray.rating))
                        })
                    })
                    // console.log(rating)
                    let sum = 0
                    rating.forEach(element => {
                        sum = sum + element
                    })
                    // console.log(sum / rating.length)
                    sum = sum / rating.length

                    cb(null, sum.toString())
                }
            })
        },
        productSubcategory1: (cb) => {
            productModel.findOne({ "_id": data.productId1 }).select({ 'subCategory': 1 }).exec((err, result) => {
                subCategoryModelL2.findOne({ '_id': result.subCategory }).select({ 'subCategoryName': 1 }).exec((err, result) => {
                    // console.log(err, result)
                    cb(null, result)
                })
            })
        },
    }, (err, result) => {
        res = []

        product1 = {
            _id: result.findProduct1._id,
            description: result.findProduct1.description,
            price: result.findProduct1.varianceId.variants[0].price,
            productName: result.findProduct1.productName,
            brand: result.findProduct1.brandId.brandName,
            image: result.findProduct1.varianceId.variants[0].image[0],
            reviewAndRating: result.reviewAndRating1,
            subCategoryName: result.productSubcategory1.subCategoryName
        }
        product2 = {
            _id: result.findProduct2._id,
            description: result.findProduct2.description,
            price: result.findProduct2.varianceId.variants[0].price,
            productName: result.findProduct2.productName,
            brand: result.findProduct2.brandId.brandName,
            image: result.findProduct2.varianceId.variants[0].image[0],
            reviewAndRating: result.reviewAndRating2,
            subCategoryName: result.productSubcategory1.subCategoryName

        }
        res.push(product1)
        res.push(product2)
        // callback(result.findProduct1)
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.COMPARE_SCREEN[data.lang], 'result': res })
    })
}
/********************************************************************
**************************compareProduct*************************
***********************************************************************/
checkoutOrder = (data, headers, callback) => {
    console.log('api is hitted', data)

    var userId = "5c47f56e9e685b28c9fc7bc5"

    var orderId = commonFunction.generateOrderId(6)
    // commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
    //     userId = result
    // })
    async.parallel({
        checkoutOrder: (cb) => {
            bagModel.findOne({ userId: userId }, (err, result) => {
                async.forEachOf(result.orderDescription, (value, key, callback) => {
                    console.log("value ,453534535345", value)
                    orderPlaced.findOne({ userId: userId }, (err, userFind) => {
                        if (err) {
                            callback(null)
                        }
                        else if (userFind) {
                            console.log("user is find")
                            orderPlaced.findOneAndUpdate({ userId: userId }, {
                                $push: {
                                    orderPlacedDescription: {
                                        sellerId: value.sellerId,
                                        productId: value.productId,
                                        // varianceId: data.varianceId ? data.varianceId : null,
                                        orderPayment: data.orderPayment ? data.orderPayment : "COD",
                                        orderStatus: "PLACED",
                                        productQuantity: value.productQuantity ? value.productQuantity : 1,
                                        orderId: orderId,
                                        transactionId: "1234567890",
                                        addressId: data.addressId ? data.addressId : "null",
                                        deliveryCharges: value.deliveryCharges ? value.deliveryCharges : "00",
                                        estimateTax: value.estimateTax ? value.estimateTax : "00",
                                        // totalAmountPaid: data.totalAmountPaid ? data.totalAmountPaid : "00",
                                        color: value.color,
                                        size: value.size,
                                        material: value.material,
                                        totalAmountPaid: value.totalAmountPaid

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
                                    sellerId: value.sellerId,
                                    productId: value.productId,
                                    // varianceId: data.varianceId ? data.varianceId : null,
                                    orderPayment: data.orderPayment ? orderPayment : "COD",
                                    orderStatus: "PLACED",
                                    productQuantity: value.productQuantity ? value.productQuantity : 1,
                                    orderId: orderId,
                                    transactionId: "1234567890",
                                    addressId: data.addressId ? data.addressId : "null",
                                    deliveryCharges: value.deliveryCharges ? value.deliveryCharges : "00",
                                    estimateTax: value.estimateTax ? value.estimateTax : "00",
                                    // totalAmountPaid: data.totalAmountPaid ? data.totalAmountPaid : "00",
                                    color: value.color,
                                    size: value.size,
                                    material: value.material,
                                    totalAmountPaid: value.totalAmountPaid
                                }
                            }
                            var place = new orderPlaced(query)
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
                }, (err, result) => {
                    if (err) cb(null)
                    else {
                        cb(null, result)
                    }
                })
            })
        }
    }, (err, response) => {
        bagModel.findOneAndRemove({ userId: userId }, (err, result) => {
            if (err) {
                callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
            }
            else {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.ORDER_PLACED[data.lang] })
            }
        })
    })
}
/********************************************************************
**************************wishList*************************
***********************************************************************/
wishList = (data, headers, callback) => {
    log("wishList")
    var userId
    commonFunction.jwtDecode(headers.accesstoken, (err, token) => {
        if (err) callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        else userId = token
    })
    async.parallel({
        getWishProduct: (cb) => {
            wishModel.findOne({ userId: mongoose.Types.ObjectId(userId) }).populate({ path: 'wishListDescription.productId' }).lean().exec((err, result) => {
                if (err || !result) {
                    let res = []
                    callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.WISHLIST_EMPTY[data.lang], 'result': res })
                }
                else {
                    cb(null, result)
                }
            })
        }
    }, (err, response) => {
        var main = []
        async.forEachOf(response.getWishProduct.wishListDescription, (value, key, callback) => {

            commonAPI.findBrand(value.productId.brandId, async (err, brandName) => {
                varianceModel.findOne({
                    "productId": mongoose.Types.ObjectId(value.productId._id),
                    "variants": {
                        "$elemMatch": {
                            // "closed": false,
                            "$and": [
                                {
                                    "color": value.color.toLowerCase(),
                                },
                                {
                                    "size": value.size.toLowerCase(),
                                },
                                {
                                    "material": value.material.toLowerCase(),
                                }
                            ]
                        }
                    }
                }).exec((err, varianceValue) => {
                    console.log("result", err, varianceValue)
                    temp = {
                        productId: value.productId._id,
                        brand: brandName.brandName,
                        productName: value.productId.productName,
                        color: value.color,
                        price: varianceValue.variants[0].price,
                        productQuantity: varianceValue.variants[0].quantity,
                        image: varianceValue.variants[0].image,
                        description: value.productId.description,
                        specifications: value.productId.specifications
                    }
                    main.push(temp)
                    callback()
                })
            })
        }, (err, response => {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.list_of_wishList[data.lang], "result": main })
        }))
    })
}
/********************************************************************
**************************deleteWishItem*************************
**********************************************************************/

deleteWishItem = (data, headers, callback) => {
    log("addToWishList")
    var userId
    commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
        if (result) userId = result
        else callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    })
    if (!data.productId)
        callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    else {
        wishModel.findOne({ userId: userId }, (err, result) => {
            if (err) throw err
            else if (result) {
                query = { userId: userId },
                    update = {
                        $pull: {
                            wishListDescription: {
                                productId: data.productId,
                                // orderPayment: "PENDING",
                                orderStatus: "WISHLIST",
                                productQuantity: data.productQuantity ? data.productQuantity : 1
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
                    }
                    else {
                        callback({ statusCode: util.statusCode.SOMETHING_WENT_WRONG, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG[data.lang], "result": result })
                    }
                })
            }
        })
    }
}
/********************************************************************
**************************physicalStore*************************
***********************************************************************/
physicalStore = (data, headers, callback) => {
    var userId
    log("addCategory", data)
    commonFunction.jwtDecode(headers.accesstoken, (err, token) => {
        if (err) callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        else userId = token
    })
    if (!data) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        async.parallel({
            exist: (cb) => {
                physicalStores.findOne({ 'businessName': data.businessName }, (err, exist) => {
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
                let query = {
                    'userId': userId,
                    'businessName': data.businessName,
                    'address': data.address,
                    'building_shopNo': data.building_shopNo,
                    "location": { type: "Point", coordinates: [data.lat, data.lng] }
                }
                const physical = new physicalStores(query)
                physical.save(query, (err, result) => {
                    if (err)
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                    else if (!result)
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
                    else {
                        subCategoryModelL2.create({ categoryModel: result._id })
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.ADD_PHYSICALSTORE[data.lang] })
                    }
                })
            }
        })
    }
}
/********************************************************************
**************************listOfAddCart*************************
***********************************************************************/

listOfAddCart = (data, headers, callback) => {
    log("list of cart")
    var userId
    commonFunction.jwtDecode(headers.accesstoken, (err, token) => {
        if (err) callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        else userId = token
    })
    async.parallel({
        bagDetails: (cb) => {
            bagModel.findOne({ userId: mongoose.Types.ObjectId(userId) }).populate({ path: 'userId' }).populate({ path: 'orderDescription.productId' }).lean().exec((err, result) => {


                if (err || !result) {
                    let res = {}
                    callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.LIST_EMPTY[data.lang], 'result': res })
                }
                else {
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
        async.forEachOf(response.bagDetails.orderDescription, async (value, key, callback) => {
            await commonAPI.findBrand(value.productId.brandId, async (err, brandName) => {
                await varianceModel.findOne({
                    "productId": mongoose.Types.ObjectId(value.productId._id),
                    "variants": {
                        "$elemMatch": {
                            "$and": [
                                {
                                    "color": value.color.toLowerCase(),
                                },
                                {
                                    "size": value.size.toLowerCase(),
                                },
                                {
                                    "material": value.material.toLowerCase(),
                                }
                            ]
                        }
                    }
                }, { 'variants.$': 1 }).lean().exec(async (err, varianceValue) => {
                    console.log("result", err, varianceValue)
                    temp = {
                        brand: brandName.brandName,
                        orderId: value._id,
                        productId: value.productId._id,
                        productName: value.productId.productName,
                        color: value.color,//!
                        price: varianceValue.variants[0].price,//!
                        productQuantity: varianceValue.variants[0].quantity,
                        image: varianceValue.variants[0].image,//!
                        description: value.productId.description,
                        specifications: value.productId.specifications
                    }
                    totalPrice = totalPrice + parseInt(varianceValue.variants[0].price)
                    await main.push(temp)
                    // console.log("###############",JSON.stringify(query))
                    callback()
                })

            })
        }, (err, responses => {

            res = {}
            res.productDetail = main
            res.bagDetails = {
                productPrice: totalPrice.toString(),
                estimateTax: "17",
                deliveryCharges: "50",
                bagTotal: (totalPrice + 17 + 50).toString(),
                productQuantity: response.bagDetails.orderDescription.length,
            }
            res.address = address
            res.payment = payment
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.list_of_wishList[data.lang], "result": res })
        }))
    })

}

/**************************orderList*************************
***********************************************************************/
//!orderList
orderList = (data, headers, callback) => {
    log("list of ORDER", data)
    var userId
    if (data.userId)
        userId = data.userId
    else {
        commonFunction.jwtDecode(headers.accesstoken, (err, token) => {
            console.log(token)
            if (err) callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
            else userId = token
        })
    }

    async.parallel({
        getOrderDetails: (cb) => {
            orderPlaced.findOne({ userId: userId }).populate({ path: 'userId' }).populate({ path: 'orderPlacedDescription.productId' }).exec((err, result) => {
                if (err || !result || !result.orderPlacedDescription.length) {
                    res = {}
                    callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.ORDER_EMPTY[data.lang], 'result': res })
                }
                else {
                    cb(null, result)
                }
            })
        }
    }, (err, response) => {
        var main = []
        async.forEachOf(response.getOrderDetails.orderPlacedDescription, (value, key, cb) => {
            brandModel.findOne(value.productId.brandId, (err, brand) => {
                varianceModel.findOne({
                    "productId": mongoose.Types.ObjectId(value.productId._id),
                    "variants": {
                        "$elemMatch": {
                            // "closed": false,
                            "$and": [
                                {
                                    "color": value.color.toLowerCase(),
                                },
                                {
                                    "size": value.size.toLowerCase(),
                                },
                                {
                                    "material": value.material.toLowerCase(),
                                }
                            ]
                        }
                    }
                }, { 'variants.$': 1 }).exec((err, getVariance) => {
                    response.getOrderDetails.userId.address.forEach(element => {
                        if (element._id.toString() == value.addressId.toString()) {

                            // console.log('asdfasfd')
                            temp = {
                                brand: brand.brandName,
                                orderId: "ORD" + value.orderId,
                                transactionId: value.transactionId,
                                productId: value.productId._id,
                                productName: value.productId.productName,
                                color: getVariance.variants[0].color,
                                price: getVariance.variants[0].price,
                                productQuantity: getVariance.variants[0].quantity,
                                image: getVariance.variants[0].image,
                                orderStatus: value.orderStatus,
                                feedbackAdded: value.feedbackAdded,
                                description: value.productId.description,
                                orderDate: value.createdAt,
                                orderPayment: value.orderPayment,
                                deliveryAddress: element,
                                estimateTax: value.estimateTax ? value.estimateTax : '17',
                                deliveryCharges: value.deliveryCharges ? value.deliveryCharges : "50",
                                totalAmountPaid: (17 + 50 + parseInt(value.price)).toString()
                                // specifications: agreResult[0].brandDesc[0].specifications
                            }
                            // console.log("#@@@@@@@@@@@2", temp)
                            main.push(temp)
                        }
                        cb()
                    })
                })
            })
        }, (err, successfully) => {
            var res = {}
            res.productDetail = main
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.LIST_ORDER[data.lang], "result": res })

        })





    })

}

/**************************getNotification*************************
***********************************************************************/

getNotification = (data, header, callback) => {
    console.log("5c46c292070fa144119a1cd4")

    let decodeUserId
    commonFunction.jwtDecode(header.accesstoken, (err, decodeId) => {
        if (err) throw err
        else {
            decodeUserId = decodeId
        }
    })

    async.parallel({
        getNotificationList: (cb) => {
            notificationModel.findOne({ userId: decodeUserId }).sort({ 'notification.createAt': '-1' }).exec((err, result) => {
                console.log("asdf", err, result)
                if (err || !result) {
                    console.log("#%$@%$%#$%#$")
                    let res = []
                    callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang], 'result': res })
                }
                else {
                    cb(null, result)
                }
            })
        }
    }, (err, response) => {
        let res = []
        response.getNotificationList.notification.forEach(element => {
            let temp = {
                productId: element.info,
                title: element.notificationTitle,
                orderId: element.orderId ? element.orderId : "",
                message: element.notificationMessage,
                notificationType: element.notificationType,
                createAt: element.createAt,
            }

            res.push(temp)
        })
        if (response.getNotificationList) {
            console.log('2345678')
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.NOTIFICATION_SCREEN[data.lang], 'result': res })
        }
    })
}


fuckApi = async (data, callback) => {
    console.log("fuck api", data)
    var e = data.push
    let final = []


    var result = []
    e.forEach(element => {
        result.push({
            [element.varianceKey]: element.varianceValue
        })

    });

    // console.log("result===>>", JSON.stringify(result))
    let test = result
    let w = []
    for (let index = 0; index < test.length; index++) {
        var s = Object.keys(test[index])[0]
        c = ''
        for (let j = 0; j < test[index][s].length; j++) {
            c = c + test[index][s][j].value + ","

        }
        a = [c]
        w.push({
            [s]: c
        })
    }
    let now = w
    var z = []
    for (let index = 0; index < now.length; index++) {

        var c = Object.keys(now[index])[0]
        let ee = now[index][c].split(',')
        let temp = {
            [c]: ee
        }
        z.push(temp)
    }

    let start = {}
    for (let index = 0; index < z.length; index++) {

        let a = Object.keys(z[index])[0]
        z[index][a].splice(-1, 1)
        let temp = {
            [a]: z[index][a]

        }
        start[a] = z[index][a]
    }

    for (let index = 0; index < Object.keys(start).length; index++) {
        temp = {
            [Object.keys(start)[index]]: start[Object.keys(start)[index]]
        }
        final.push(temp)
    }
    function cartesian(array) {
        function c(part, index) {
            var k = Object.keys(array[index])[0];
            array[index][k].forEach(function (a) {
                var p = Object.assign({}, part, { [k]: a });
                if (index + 1 === array.length) {
                    r.push(p);
                    return;
                }
                c(p, index + 1);
            });
        }

        var r = [];
        c({}, 0);
        return r;
    }

    // console.log(cartesian(final));
    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': cartesian(final) })
}

module.exports = {
    addCategory,
    addSubCategory,
    getCategoryList,
    addProductCategory,
    addProduct,
    addBrand,
    homeScreenApi,
    listOfAddCart,
    OpenSubCategory,
    categoryProductList,
    searchProduct,
    filters,
    getSubCategory,
    getProductCategoryName,
    productDetails,
    addVariance,
    getVariance,
    getBrand,
    deleteBrand,
    vendorOrderList,
    getSubCategoryList,
    orderDetail,
    getAllVariant,
    searchVendorOrder,
    inActiveProductList,
    addVendoroffer,
    addToCart,
    addToWishList,
    deleteCart,
    placeOrder,
    orderList,
    addReviewAndRating,
    applyFilter,
    compareProduct,
    checkoutOrder,
    wishList,
    deleteWishItem,
    getNotification,
    fuckApi,
    physicalStore
}