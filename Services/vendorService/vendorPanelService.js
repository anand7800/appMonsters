var async = require('async')
var categoryModelL1 = require('../../Models/userModel/categoryModel')
var subCategoryModelL2 = require('../../Models/userModel/subCategoryModel')
var categoryBrandModelL3 = require('../../Models/userModel/productCategory')
var brandDescriptionL4 = require('../../Models/userModel/brandDescription')
var topOffersL6 = require('../../Models/userModel/topOffers')
var reviewAndRatingL5 = require('../../Models/userModel/reviewAndRating')
var orderModel = require('../../Models/userModel/userOrder')
var wishListModel = require('../../Models/userModel/userWishListModel')
var placeOrderModel = require('../../Models/userModel/orderPlaced')
var userModel = require('../../Models/userModel/userPanelModel')
var brandListModel = require('../../Models/userModel/brandListing')
var businessDetails1 = require('../../Models/userModel/businessDetail')
var physicalStores = require('../../Models/userModel/addPhysicalStore')
var varianceModel = require('../../Models/userModel/varianceModel')
let util = require('../../Utilities/util')
var commonFunction = require('../../commonFile/commonFunction')
var commonAPI = require('../../commonFile/commonApi')
var mongoose = require('mongoose')
var waterfall = require('async-waterfall');
const _ = require('lodash');

//!addCategory
addCategory = (data, callback) => {
    log("addCategory")
    if (!data) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        async.parallel({
            exist: (cb) => {
                categoryModelL1.findOne({ 'categories.categoryName': data.categoryName }, (err, exist) => {
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
                    'categories.categoryName': data.categoryName,
                    'categories.icons': response.uploadIcons,
                    'categories.image': response.uploadImage,
                    'categories.status': "ACTIVE",
                    'categories.serialNumber': response.findLength
                }
                categoryModelL1.create(query, (err, result) => {
                    if (err)
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                    else if (!result)
                        callback({ "statusCode": util.statusCode.NOT_MODIFIED, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
                    else {
                        subCategoryModelL2.create({ categoryModel: result._id })
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.CATEGORY_ADDED[data.lang], "result": result })
                    }
                })
            }
        })
    }
}
//!addSubCategory
addSubCategory = (data, callback) => {
    if (!data) {
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
                    query2 = { categoryModel: exist._id }
                    update = {
                        $push: {
                            subCategories: {
                                subCategoryName: data.subCategoryName,
                                icons: response.uploadIcons,
                                image: response.uploadImage
                            }
                        }
                    }
                    subCategoryModelL2.findOneAndUpdate(query2, update, { new: true }, (err, update) => {
                        if (err) callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                        else if (!update) {
                            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_UPDATE[data.lang] })
                        }
                        else {
                            function search(nameKey, myArray) {
                                for (var i = 0; i < myArray.length; i++) {
                                    if (myArray[i].subCategoryName === nameKey) {
                                        return myArray[i];
                                    }
                                }
                            }
                            var searchData = search(data.subCategoryName, update.subCategories)
                            brandDescriptionL4.create({
                                categoryModel: exist._id,
                                subCategory: searchData._id
                            }, (err, result) => {
                                log(err, result)
                                if (err) {
                                    callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                                }
                                else if (!result) {
                                    callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.USER_NOT_FOUND[data.lang] })
                                }
                                else {
                                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.REGISTRATION_DONE[data.lang], "result": update })
                                }
                            })
                        }
                    })
                })
            }
        })
    }
}

//!getCategoryList`
getCategoryList = (data, callback) => {
    log(data.lang)
    categoryModelL1.find({ 'categories.status': "ACTIVE" }, null, { sort: { 'categories.serialNumber': 1 } }).select({ 'categories.categoryName': 1, '_id': 1, 'categories.icons': 1, 'categories.image': 1 }).exec((err, result) => {
        // console.log("err,result", err, result)
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
                    "categoryName": item.categories.categoryName,
                    "image": item.categories.image,
                    "icons": item.categories.icons,
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

//!addProductCategory 
addProductCategory = (data, callback) => { //!Tshirt Shirt
    log("api is hitted of addProduct")
    if (!data) {
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
                query = { $and: [{ subCategory: data.subCategoryId }, { categoryModel: data.categoryModel }] }
                update = {
                    // brandId:data.brandId
                    $push:
                    {
                        productcategory:
                        {
                            productcategoryName: data.productcategoryName,
                            image: response.uploadImage,
                            brandId: data.brandId
                        }
                    }
                }
                categoryBrandModelL3.findOneAndUpdate(query, update, { new: true }, (err, result) => {
                    if (err) {
                        callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                    }
                    else if (!result) {
                        let query = {
                            subCategory: data.subCategoryId,
                            categoryModel: data.categoryModel,
                            productcategory: {
                                productcategoryName: data.productcategoryName,
                                image: response.uploadImage,
                                brandId: data.brandId
                            }
                        }
                        categoryBrandModelL3.create(query, (err, succ) => {

                            console.log("--------->>>", succ.productcategory[0]._id)
                            brandDescriptionL4.create({
                                categoryModel: data.categoryModel,
                                subCategory: data.subCategoryId,
                                productCategoryId: succ.productcategory[0]._id

                            })
                            callback(succ)
                        })

                    }
                    else {
                        function search(nameKey, myArray) {
                            for (var i = 0; i < myArray.length; i++) {
                                if (myArray[i].productcategoryName === nameKey) {
                                    return myArray[i];
                                }
                            }
                        }
                        var keyIndex = search(data.productcategoryName, result.productcategory)
                        // console.log(keyIndex,"<<--------------")
                        brandDescriptionL4.create({
                            categoryModel: data.categoryModel,
                            subCategory: data.subCategoryId,
                            productCategoryId: keyIndex._id
                        })
                        // console.log('---------->>',JSON.stringify(result))
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.categoriesList_found[data.lang], "result": result })
                    }
                })
            }
        })
    }
}
//!brand Description
addBrandDescription = (data, callback) => {
    log("api is hitted addBrandDescription")
    if (!data) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    else {
        async.parallel({
            uploadImage: (cb) => {
                commonFunction.uploadMultipleImages(data.image, (err, image) => {
                    // log(err, image)
                    if (err) cb(null)
                    else if (!image) cb(null)
                    else cb(null, image)
                })
            }
        }, (err, response) => {
            // log(err, response)
            brandDescriptionL4.findOneAndUpdate({ $and: [{ subCategory: data.subCategoryId }, { productCategoryId: data.productCategoryId }] }, {
                // brandId: data.brandId,
                $push: {
                    brandDesc: {
                        brandId: data.brandId,
                        sellerId: data.sellerId,
                        productName: data.productName,
                        price: data.price,
                        summary: data.summary,
                        color: data.color,
                        description: data.description,
                        image: response.uploadImage,
                        specifications: data.specifications,
                        tag: data.tag
                    }
                }
            }, { new: true }, (err, result) => {
                if (err) {
                    callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                }
                else if (!result) {
                    // callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.USER_NOT_FOUND[data.lang] })

                    var addProduct = new brandDescriptionL4({
                        categoryModel: data.categoryId,
                        subCategory: data.subCategoryId,
                        productCategoryId: data.productCategoryId,
                        brandDesc: {
                            brandId: data.brandId,
                            sellerId: data.sellerId,
                            productName: data.productName,
                            price: data.price,
                            summary: data.summary,
                            color: data.color,
                            description: data.description,
                            image: response.uploadImage,
                            specifications: data.specifications,
                            tag: data.tag
                        }
                    })
                    addProduct.save((err, createNew) => {
                        if (err) {
                            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
                        }
                        else {
                            function search(nameKey, myArray) {
                                for (var i = 0; i < myArray.length; i++) {
                                    if (myArray[i].productName === nameKey) {
                                        return myArray[i];
                                    }
                                }
                            }
                            var findIndex = search(data.productName, createNew.brandDesc)
                            varianceModel.create({
                                productId: findIndex._id,
                                sellerId: data.sellerId,
                                variants: data.variants,
                                sellingPrice: data.sellingPrice,
                                inventorySKU: data.inventorySKU,
                                costItem: data.costItem,
                                quantity: data.quantity,
                                weight: data.weight,
                                productType: data.productType
                            }, (err, succ) => {

                                console.log('variance of-->>', err, succ._id)
                                brandDescriptionL4.findOneAndUpdate({ 'brandDesc._id': succ.productId }, { '$set': { 'brandDesc.$.varianceId': succ._id } }, (err, updateProduct) => {
                                    console.log(err, updateProduct)
                                })
                                // console.log('------------>>>', JSON.stringify(findIndex))
                                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.categoriesList_found[data.lang], "result": createNew })
                            })
                        }
                    })
                }
                else {
                    function search(nameKey, myArray) {
                        for (var i = 0; i < myArray.length; i++) {
                            if (myArray[i].productName === nameKey) {
                                return myArray[i];
                            }
                        }
                    }
                    var findIndex = search(data.productName, result.brandDesc)
                    varianceModel.create({
                        productId: findIndex._id,
                        sellerId: data.sellerId,
                        variants: data.variants,
                        sellingPrice: data.sellingPrice,
                        inventorySKU: data.inventorySKU,
                        costItem: data.costItem,
                        quantity: data.quantity,
                        weight: data.weight,
                        productType: data.productType
                    }, (err, succ) => {

                        console.log('variance of-->>', err, succ._id)
                        brandDescriptionL4.findOneAndUpdate({ 'brandDesc._id': succ.productId }, { '$set': { 'brandDesc.$.varianceId': succ._id } }, (err, updateProduct) => {
                            console.log(err, updateProduct)
                        })

                    })

                    // console.log('------------>>>', JSON.stringify(findIndex))
                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.categoriesList_found[data.lang], "result": result })
                }
            })
        })
    }
}
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

//! brand Name
var brandName = (cb) => {
    brandDescriptionL4.findOne({ "brandDesc._id": data._id }).exec((err, result) => {
        categoryBrandModelL3.findOne({ 'categoriesBrand._id': result.categoryBrand }, { "categoriesBrand.$": 1 }).exec((err, result2) => {
            cb(null, result2)
        })
    })
}
//!homeSceenAPI
let homeScreenApi = (query, callback) => {
    async.parallel({
        topPicksInMobile1: (cb) => {
            commonAPI.mobile((err, response) => {
                // console.log("#$#$#$#$#$", err, JSON.stringify(response))
                cb(null, response);
            });
        },
        brand: (cb) => {
            commonAPI.topBrands((err, response) => {
                cb(null, response);
            });
        },
        category: (cb) => {
            commonAPI.productCategory((err, response) => {
                cb(null, response)
            })
        },
        trendingFashion: (cb) => {
            commonAPI.trending((err, response) => {
                cb(null, response)
            })
        },
        topOffer: (cb) => {
            commonAPI.offers((err, response) => {
                cb(null, response)
            })
        },
        topPromotedDeals: (cb) => {
            commonAPI.promotedDeals((err, response) => {
                cb(null, response)
            })
        }
    }, (err, response) => {
        let res1 = {};
        topPicksInMobile = [];
        brand = [];
        categories = [];
        trendingFashion = [];
        topOffer = [];
        topPromotedDeals = [];
        async.forEachOf(response.topPicksInMobile1, (item, key, callback) => {
            async.forEachOf(item.brandDesc, (item, key, callback) => {
                data = {
                    _id: item._id,
                    type: "topPicks",
                    brand: item.brandId.brandName,
                    productName: item.productName,
                    price: item.price,
                    color: item.color,
                    description: item.description,
                    image: item.image[0],
                    specifications: item.specifications,
                    status: item.status
                }
                topPicksInMobile.push(data)
            })
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
            // console.log("*******************",item)
            item.productcategory.forEach(element => {
                element.type = "category",
                    categories.push(element)
            })
            // categories.push(item.)
        }, (err, result) => {
        })
        async.forEachOf(response.trendingFashion, (item, key, callback) => {

            // trendingFashion.push(item.brandDesc)
            item.brandDesc.forEach(element => {
                let data = {
                    _id: element._id,
                    type: "topPicks",
                    brand: element.brandId.brandName,
                    productName: element.productName,
                    price: element.price,
                    color: element.color,
                    description: element.description,
                    image: element.image[0],
                    specifications: element.specifications,
                    status: element.status
                }
                trendingFashion.push(data)
            })
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

        res1['Categories'] = categories;//!done

        res1['Top Picks in Mobile'] = topPicksInMobile; //!done
        res1['Brand'] = brand;//!done
        orderedKey = ['Top Deals', 'Top Promoted Deals', 'Categories', 'Top Picks in Mobile', 'Brand', 'Top Picks in Fashion']
        res1['Top Picks in Fashion'] = trendingFashion;//!done
        // log(query)
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.HOMESCREEN_API[query.lang], "result": res1, 'orderedKey': orderedKey });
    }), (err) => {
        callback(err);
    }
}
//!productDetail for IOS get API 
// productDetails = (data, callback) => {
//     log('hitted productDetail api ios')
//     if (!data) {
//         callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
//         return
//     }
//     async.parallel({
//         findProduct: (cb) => {
//             brandDescriptionL4.findOne({ "brandDesc._id": data._id }, { "brandDesc.$": 1 }).populate({ 'path': 'brandDesc.brandId', 'select': 'brandName' }).exec((err, result) => {
//                 cb(null, result)
//             })
//         },
//         // findBrand: (cb) => {
//         //     commonAPI.findBrand(data._id, (err, result) => {
//         //         if (err) {
//         //             cb(null)
//         //         }
//         //         else {
//         //             cb(null, result)
//         //         }
//         //     })
//         // },
//         reviewAndRating: (cb) => {
//             commonAPI.reviewAndRating(data._id, (err, result) => {
//                 console.log("%5555555555555555", err, result)
//                 if (err) {
//                     cb(null)
//                 }
//                 else {
//                     cb(null, result)
//                 }
//             })
//         },
//         getSimilarProduct: (cb) => {
//             commonAPI.getSimilarProductlist(data._id, (err, result) => {
//                 console.log("3333333333333333333", err, result)
//                 if (err) cb(null)
//                 else cb(null, result)
//             })
//         }

//     }, (err, response) => {
//         if (response) {
//             console.log("sadfsadfasfsadfdfasdf", response)
//             res = {}
//             var ratingAndReview = []
//             response.findProduct.brandDesc.forEach(element => {
//                 data = {
//                     _id: element._id,
//                     brand: element.brandId.brandName,
//                     productName: element.productName,
//                     price: element.price,
//                     color: element.color,
//                     description: element.description,
//                     image: element.image,
//                     specifications: element.specifications[0]
//                 }
//                 res.product = data
//             })
//             response.reviewAndRating.forEach(element => {
//                 async.forEachOf(element.reviewAndRating, (data, key, callback) => {
//                     var userId = data.userId.toString()
//                     userModel.findById({ _id: userId }, { "firstName": 1, "lastName": 1, 'image': 1 }, (err, result) => {
//                         if (result) {
//                             data = {
//                                 firstName: result.firstName,
//                                 lastName: result.lastName,
//                                 image: result.image,
//                                 review: data.review,
//                                 rating: data.rating
//                             }
//                             ratingAndReview.push(data)
//                             callback(null, result)
//                         }
//                         else callback(null)
//                     })

//                 }, (err, result) => {
//                     sellerInfo = {
//                         _id: "5bd949e76f6cdd0b3b639e9c",
//                         sellerName: "Raghu Thakur",
//                         selllerImage: "http://res.cloudinary.com/sumit9211/image/upload/v1540970222/cy3r1ilg2gsh6hvdkxsa.jpg",
//                         selllerRating: "3"
//                     }
//                     res.sellerInfo = sellerInfo
//                     res.reviewAndRating = ratingAndReview
//                     res.similarProduct = response.getSimilarProduct.brandDesc
//                     callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.USER_FOUND[data.lang], "result": res });
//                 })
//             })
//         }
//         else {
//             callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY })
//         }
//     })
// }
//!addReviewAndRating
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
//!ADD-TO-CART
addToCart = (data, headers, callback) => {
    log("addToCart", data)
    var userId;
    commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
        if (result) userId = result
        else callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    })
    if (!data.productId || !userId || !data.varianceId)
        callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    else {
        orderModel.findOne({ userId: userId }, (err, result) => {
            if (err) throw err
            else if (result) {
                query = { userId: userId },
                    update = {
                        $push: {
                            orderDescription: {
                                productId: data.productId,
                                varianceId: data.varianceId,
                                orderPayment: "PENDING",
                                orderStatus: "ADDTOCART",
                                productQuantity: data.productQuantity ? data.productQuantity : 1
                            }
                        }
                    }
                orderModel.find({ $and: [{ userId: userId }, { 'orderDescription.varianceId': data.varianceId }, { 'orderDescription.productId': data.productId }] }, { 'orderDescription.$': 1 }).exec((err, findOrder) => {
                    if (err) throw err
                    else if (findOrder.length > 0) {
                        callback({ statusCode: util.statusCode.ALREADY_EXIST, "statusMessage": util.statusMessage.WISHLIST_PRODUCT_ALREADY_EXIST[data.lang] })
                        return
                    }
                    else {
                        orderModel.findOneAndUpdate(query, update, { new: true, lean: true }, (err, result) => {
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
                        varianceId: data.varianceId,
                        orderPayment: "PENDING",
                        orderStatus: "ADDTOCART",
                        productQuantity: data.productQuantity ? data.productQuantity : 1
                    }
                }
                console.log(query)
                orderModel.create(query, (err, result) => {
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

//!listOfAddTocart
listOfAddCart = (data, headers, callback) => {
    log("list of cart")
    var userId
    commonFunction.jwtDecode(headers.accesstoken, (err, token) => {
        if (err) callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        else userId = token
    })
    orderModel.aggregate([{
        $match: {
            "userId": mongoose.Types.ObjectId(userId)
        }
    },
    {
        $project: {
            'orderDescription': {
                $filter: {
                    input: '$orderDescription',
                    as: 'service',
                    cond: {
                        $eq: ['$$service.orderStatus', 'ADDTOCART']
                    }
                }
            },
        }
    }
    ], (err, result) => {
        // console.log("_______>>>", result)
        length = result
        if (result.length > 0 && result != undefined) {
            log("enter in the log")
            var main = []
            var totalPrice = 0
            result.forEach(element => {
                async.forEachOf(element.orderDescription, (element, key, callback) => {
                    console.log('========>>>>', element)
                    varianceModel.findOne({ 'variants._id': mongoose.Types.ObjectId(element.varianceId) }, { 'variants.$': 1 }).exec((err, variance) => {
                        console.log(variance.variants[0].color)
                        // })
                        brandDescriptionL4.find({ "brandDesc._id": element.productId }, { "brandDesc.$": 1, categoryBrand: 1 }).populate({ 'path': 'brandDesc.brandId', 'select': 'brandName' }).exec((err, agreResult) => {
                            totalPrice = totalPrice + parseInt(variance.variants[0].price)
                            temp = {
                                brand: agreResult[0].brandDesc[0].brandId.brandName,
                                // orderId: element._id,
                                productId: agreResult[0].brandDesc[0]._id,
                                productName: agreResult[0].brandDesc[0].productName,
                                color: variance.variants[0].color,//!
                                price: variance.variants[0].price,//!
                                productQuantity: element.productQuantity,
                                image: variance.variants[0].image,//!
                                description: agreResult[0].brandDesc[0].description,
                                specifications: agreResult[0].brandDesc[0].specifications
                            }
                            main.push(temp)
                            callback()
                            // })
                        })
                    })
                }, (err, result) => {
                    res = {}
                    res.productDetail = main
                    res.bagDetails = {
                        productPrice: totalPrice.toString(),
                        estimateTax: "17",
                        deliveryCharges: "50",
                        bagTotal: (totalPrice + 17 + 50).toString(),
                        productQuantity: length[0].orderDescription.length,
                    }
                    userModel.findOne({ _id: userId }).exec((err, result) => {
                        // log(err, data, userId)
                        if (err) {
                            throw err
                        }
                        else {
                            res.address = result.address
                            res.payment = result.paymentMethod
                            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.list_of_Cart[data.lang], "result": res })
                        }

                    })
                })
            })
        }
        else {
            res = {}
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.LIST_EMPTY[data.lang], 'result': res })
        }
    })
}

//!ADD-TO-WISHlIST
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
        wishListModel.findOne({ userId: userId }, (err, result) => {
            if (err) throw err
            else if (result) {
                query = { userId: userId },
                    update = {
                        $push: {
                            wishListDescription: {
                                productId: data.productId,
                                // orderPayment: "PENDING",
                                orderStatus: "WISHLIST",
                                productQuantity: data.productQuantity ? data.productQuantity : 1
                            }
                        }
                    }
                wishListModel.find({ $and: [{ userId: userId }, { 'wishListDescription.productId': data.productId }] }, { 'wishListDescription.$': 1 }).exec((err, findOrder) => {
                    if (err) throw err
                    else if (findOrder.length > 0) {
                        callback({ statusCode: util.statusCode.ALREADY_EXIST, "statusMessage": util.statusMessage.WISHLIST_PRODUCT_ALREADY_EXIST[data.lang] })
                        return
                    }
                    else {
                        wishListModel.findOneAndUpdate(query, update, { new: true, lean: true }, (err, result) => {
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
                        productQuantity: data.productQuantity ? data.productQuantity : 1
                    }
                }
                wishListModel.create(query, (err, result) => {
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
//!wishList
wishList = (data, headers, callback) => {
    log("wishList")
    var userId
    commonFunction.jwtDecode(headers.accesstoken, (err, token) => {
        if (err) callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        else userId = token
    })
    wishListModel.aggregate([{
        $match: {
            "userId": mongoose.Types.ObjectId(userId)
        }
    },
    {
        $project: {
            'wishListDescription': {
                $filter: {
                    input: '$wishListDescription',
                    as: 'service',
                    cond: {
                        $eq: ['$$service.orderStatus', 'WISHLIST']
                    }
                }
            },
        }
    }
    ], (err, result) => {
        if (result.length > 0) {
            var main = []
            result.forEach(element => {
                async.forEachOf(element.wishListDescription, (element, key, callback) => {
                    brandDescriptionL4.find({ "brandDesc._id": element.productId }, { "brandDesc.$": 1, categoryBrand: 1 }).populate({ 'path': 'brandDesc.brandId', 'select': 'brandName' }).exec((err, agreResult) => {
                        // categoryBrandModelL3.findOne({ 'categoriesBrand._id': agreResult[0].categoryBrand }, { "categoriesBrand.$": 1 }).exec((err, result2) => {
                        temp = {
                            brand: agreResult[0].brandDesc[0].brandId.brandName,
                            // orderId: element._id,
                            productId: agreResult[0].brandDesc[0]._id,
                            productName: agreResult[0].brandDesc[0].productName,
                            color: agreResult[0].brandDesc[0].color,
                            price: agreResult[0].brandDesc[0].price,
                            productQuantity: element.productQuantity,
                            image: agreResult[0].brandDesc[0].image,
                            description: agreResult[0].brandDesc[0].description,
                            specifications: agreResult[0].brandDesc[0].specifications
                        }
                        main.push(temp)
                        callback()
                        // })
                    })
                }, (err, result) => {
                    if (main.length > 0) {
                        res = {}
                        res.productDetail = main
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.list_of_wishList[data.lang], "result": main })
                    }
                    else {
                        callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.WISHLIST_EMPTY[data.lang] })
                    }
                })
            })
        }
        else {
            res = []
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.WISHLIST_EMPTY[data.lang], 'result': res })
        }
    })
}
//!deleteWishList
deleteWishItem = (data, headers, callback) => {
    log("addToWishList")
    var userId;
    commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
        if (result) userId = result
        else callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    })
    if (!data.productId)
        callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    else {
        wishListModel.findOne({ userId: userId }, (err, result) => {
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
                wishListModel.findOneAndUpdate(query, update, { new: true, lean: true }, (err, result) => {
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
//!upload image
uploadImage = (data, callback) => {
    log("called")
    commonFunction.uploadImg(data.image, (err, result) => {
        log(err, result)
        callback(result)
    })
}

//!!#### testing api 
testingApi = (data, callback) => {
    subCategoryModelL2.find({ 'subCategories.subCategoryName': "mobile" }, { 'subCategories.$': 1 }).exec((err, result) => {
        if (err) callback(null)
        else if (result.length < 0)
            brandDescriptionL4.find({ subCategory: result[0].subCategories[0]._id }).lean().exec((err, res) => {
                // console.log("product description",JSON.stringify(res))
                var temp
                if (err) callback(null)
                async.forEachOf(res, function (value, keyIndex, callback) {
                    categoryBrandModelL3.findOne({ 'categoriesBrand._id': value.categoryBrand }, { "categoriesBrand.$": 1 }).exec((err, result2) => {

                        if (value.brandDesc.length > 0) {
                            temp = value
                            value.brandDesc.brand = result2.categoriesBrand[0].brand;
                            // log("loop after ", value)
                            console.log("21121212212")
                            callback(null, value)
                        }
                        else {
                            console.log("asdfsadf")
                            callback(null)
                        }
                    })
                }, (err, finalresult) => {
                    log("error", err)
                    console.log("final result", JSON.stringify(temp))
                    if (err) callback(null)
                    else {
                        callback(null, finalresult)
                    }
                })
            })
    })
}
//!remove or delete from add to cart
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
        orderModel.findOne({ userId: userId }, (err, userFound) => {
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
                orderModel.find({ $and: [query, { 'orderDescription.productId': data.productId }] }, { 'orderDescription.$': 1 }).exec((err, findId) => {
                    if (err) {
                        callback({ statusCode: util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                    }
                    else if (findId.length > 0) {
                        debugger
                        orderModel.update({ _id: findId[0]._id }, update, { new: true }).exec((err, deleted) => {
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

//!test sms 
testSms = (data, callback) => {

    commonFunction.sendSMS("WAKI SENT A OTP", 8439389857, (err, result) => {
        console.log(err, result)
    })
}

//!placeOrder
placeOrder = (data, headers, callback) => {
    log("addToCart", data, headers.accesstoken)
    var userId;
    var orderId = commonFunction.generateOrderId(6)
    var orderPayment = data.orderPayment.toUpperCase()
    commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
        if (result) userId = result
        else callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    })
    if (!data.productId || !userId || !data.varianceId)
        callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
    else {
        let condition = { 'orderDescription.productId': data.productId }
        let update = { '$set': { 'orderDescription.$': { orderStatus: "PLACED" } } }
        /* orderModel.update(condition, update, (err, updateOrder) => {
            log("==?", err, updateOrder) */
        //!placeorder
        placeOrderModel.findOne({ userId: userId }, (err, userFind) => {
            if (err) {
                callback({ statusCode: util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
            }
            else if (userFind) {
                query = { userId: userId },
                    update = {
                        $push: {
                            orderPlacedDescription: {
                                productId: data.productId,
                                varianceId: data.varianceId,
                                orderPayment: orderPayment ? orderPayment : "COD",
                                orderStatus: "PLACED",
                                productQuantity: data.productQuantity ? data.productQuantity : 1,
                                orderId: orderId,
                                transactionId: "1234567890",
                                addressId: data.addressId ? data.addressId : "null",
                                deliveryCharges: data.deliveryCharges ? data.deliveryCharges : "50",
                                estimateTax: data.estimateTax ? data.estimateTax : "17"
                            }
                        }
                    }
                placeOrderModel.findOneAndUpdate(query, update, { new: true, lean: true }, (err, orderPlaced) => {
                    log(err, orderPlaced)
                    if (err) {
                        callback({ statusCode: util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                    }
                    else if (orderPlaced) {
                        let temp = {}
                        // temp.length = orderPlaced.orderPlacedDescription.length
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
                        varianceId: data.varianceId,
                        orderPayment: orderPayment ? orderPayment : "COD",
                        orderStatus: "PLACED",
                        productQuantity: data.productQuantity ? data.productQuantity : 1,
                        orderId: orderId,
                        addressId: data.addressId ? data.addressId : "null"
                    }
                }
                placeOrderModel.create(query, (err, result) => {
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
    }
}

//!orderList
orderList = (data, headers, callback) => {
    log("list of ORDER")
    var userId
    commonFunction.jwtDecode(headers.accesstoken, (err, token) => {
        if (err) callback({ statusCode: util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        else userId = token
    })
    placeOrderModel.aggregate([{
        $match: {
            "userId": mongoose.Types.ObjectId(userId)
        }
    },
    {
        $project: {
            'orderPlacedDescription': {
                $filter: {
                    input: '$orderPlacedDescription',
                    as: 'service',
                    cond: {
                        $eq: ['$$service.orderStatus', 'PLACED']
                    }
                }
            },
        }
    }
    ], (err, result) => {
        console.log("_______>>>", JSON.stringify(result))
        length = result
        if (result.length > 0 && result != undefined) {
            log("enter in looop")
            commonAPI.populateAddress(result[0]._id, (err, findAddress1) => {
                if (err) {
                    callback({ statusCode: util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang] })
                }
                else {
                    var main = []
                    var totalPrice = 0
                    result.forEach(element => {
                        async.forEachOf(element.orderPlacedDescription, (element, key, callback) => {
                            varianceModel.findOne({ 'variants._id': mongoose.Types.ObjectId(element.varianceId) }, { 'variants.$': 1 }).exec((err, variance) => {
                                // console.log(variance.variants[0].color)
                                // })

                                brandDescriptionL4.find({ "brandDesc._id": element.productId }, { "brandDesc.$": 1, categoryBrand: 1 }).populate({ 'path': 'brandDesc.brandId', 'select': 'brandName' }).exec((err, agreResult) => {
                                    //!2ndquery
                                    // categoryBrandModelL3.findOne({ 'categoriesBrand._id': agreResult[0].categoryBrand }, { "categoriesBrand.$": 1 }).exec((err, findBrand) => {
                                    findAddress1.forEach(address => {
                                        // console.log("populate data ",address)
                                        if (JSON.stringify(element.addressId) == JSON.stringify(address._id)) {
                                            // log("&&&&&&&&&&&&&&&", address.fullName)
                                            //     }
                                            // })
                                            temp = {
                                                brand: agreResult[0].brandDesc[0].brandId.brandName,
                                                orderId: "ORD" + element.orderId,
                                                transactionId: element.transactionId,
                                                productId: agreResult[0].brandDesc[0]._id,
                                                productName: agreResult[0].brandDesc[0].productName,
                                                color: variance.variants[0].color,
                                                price: variance.variants[0].price,
                                                productQuantity: element.productQuantity,
                                                image: variance.variants[0].image,
                                                orderStatus: element.orderStatus,
                                                feedbackAdded: element.feedbackAdded,
                                                description: agreResult[0].brandDesc[0].description,
                                                orderDate: element.createdAt,
                                                orderPayment: element.orderPayment,
                                                deliveryAddress: address,
                                                estimateTax: element.estimateTax ? element.estimateTax : '17',
                                                deliveryCharges: data.deliveryCharges ? data.deliveryCharges : "50",
                                                totalAmountPaid: (17 + 50 + parseInt(variance.variants[0].price)).toString()
                                                // specifications: agreResult[0].brandDesc[0].specifications
                                            }
                                        }
                                        // else callback()
                                    })
                                    main.push(temp)
                                    callback()
                                })
                            })
                        }, (err, result) => {
                            // console.log("ASDFSADFasdf", err, result)
                            res = {}
                            res['productDetail'] = main
                            /* res.bagDetails = {
                                productPrice: totalPrice.toString(),
                                estimateTax: "17",
                                deliveryCharges: "50",
                                bagTotal: (totalPrice + 17 + 50).toString(),
                                productQuantity: length[0].orderPlacedDescription.length,
                            } */
                            userModel.findOne({ _id: userId }).exec((err, result) => {
                                // log(err, data, userId)
                                if (err) {
                                    throw err
                                }
                                else {
                                    /*  res.address = result.address
                                     res.payment = result.paymentMethod */
                                    callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.LIST_ORDER[data.lang], "result": res })
                                }
                            })
                        })
                        /* userModel.findOne({ _id: userId }).exec((err, result) => {
                            // log(err, data, userId)
                            if (err) {
                                throw err
                            }
                            else {
                                res.address = result.address
                                res.payment = result.paymentMethod
                                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.LIST_ORDER[data.lang], "result": res })
                            }
                        }) */
                    })
                }
            })
        }
        else {
            res = {}
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.ORDER_EMPTY[data.lang], 'result': res })
        }
    })
}

//!openCatogorydata
OpenSubCategory = (data, callback) => {
    log('run the api')
    res = []
    subCategoryModelL2.find({ categoryModel: data.categoryId }).exec((err, succ) => {
        // console.log(JSON.stringify(succ))

        async.forEachOf(succ[0].subCategories, (value, key, callback) => {
            console.log('value', value)
            categoryBrandModelL3.find({ subCategory: value._id }).exec((err, findData) => {
                console.log("&^%$#@", err, findData)
                if (findData.length > 0) {
                    let temp = {
                        _id: value._id,
                        subCategoryName: value.subCategoryName,
                        productcategory: findData[0].productcategory
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
                // else {
                //     callback()
                // }
            })

        }, (err, success) => {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.LIST_ORDER[data.lang], "result": res })
        })
    })
}
//!product list 
productList = (data, callback) => {
    console.log("api is hitted")
    var response = []
    if (data.productListType == 'brand') {
        // console.log('brand commingbrand commingbrand comming', data)


        brandDescriptionL4.aggregate([{
            $unwind: '$brandDesc'
        }, {
            $match: { 'brandDesc.brandId': mongoose.Types.ObjectId(data.productCategoryId) },

        }
        ],
       /*  brandDescriptionL4.find({
            'brandDesc.brandId': data.productCategoryId
        }).exec( */(err, productDetail) => {
                console.log('--------------->>', err, JSON.stringify(productDetail))
                if (err) {
                    throw err
                }
                else if (productDetail.length > 0) {
                    productDetail.forEach(element => {
                        // console.log("asdfasdfasdfasdf", element)
                        if (element.brandDesc) {
                            // console.log('---------->>', element.brandDesc)
                            let temp = {
                                description: element.brandDesc.description,
                                image: element.brandDesc.image,
                                specifications: element.brandDesc.specifications,
                                _id: element.brandDesc._id,
                                brand: element.brandDesc.brandId.brandName,
                                productName: element.brandDesc.productName,
                                price: element.brandDesc.price,
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
        brandDescriptionL4.find({ productCategoryId: data.productCategoryId }).populate({ path: 'brandDesc.brandId', select: 'brandName' }).exec((err, productDetail) => {
            if (err) {
                throw err
            }
            else if (productDetail.length > 0) {
                productDetail.forEach(element => {
                    if (element.brandDesc.length > 0) {
                        // console.log(element.brandDesc)
                        element.brandDesc.forEach(element => {
                            let temp = {
                                description: element.description,
                                image: element.image,
                                specifications: element.specifications,
                                _id: element._id,
                                brand: element.brandId.brandName,
                                productName: element.productName,
                                price: element.price,
                            }
                            response.push(temp)
                        })
                    }
                    callback({
                        'statusCode': util.statusCode.EVERYTHING_IS_OK, 'statusMessage': util.statusMessage.SUBCATORY_FOUND[data.lang], 'result': response
                    })
                    /* else {
                    res = {}
                    callback({
                    'statusCode': util.statusCode.EVERYTHING_IS_OK, 'statusMessage': util.statusMessage.SUBCATORY_FOUND[data.lang], 'result': res
                    })
                    } */
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

//! search 
searchProduct = (data, callback) => {
    console.log('---------------?>>>', data.searchKeyword.trim())
    var temp = []
    var value = new RegExp(data.searchKeyword.trim(), 'i');

    async.waterfall([

        //!function 1
        function (callback) {
            brandListModel.findOne({ brandName: value }, { _id: 1 }, (err, brandId) => {
                console.log("$$$$$$$$$$$$$$", err, brandId)
                if (err)
                    callback(null)
                else {
                    callback(null, brandId)
                }
            })

        },
        function (brandId, callback) {
            // varianceModel.aggregate([{
            //     $unwind: '$variants'
            // }, {
            //     $match: {
            //         $or: [
            //             { 'variants.material': { $regex: value } },
            //             /*    { 'variants.color': { $regex: value } },
            //                { 'variants.tag': { $in: [value] } },
            //                { 'variants.brandId': mongoose.Types.ObjectId(brandId._id) }, */

            //         ]
            //     }
            // }
            // ], (err, res) => {
            //     console.log(err, JSON.stringify(res))
            // })
            callback(null, brandId)
        },
        //!function 2
        function (brandId, callback) {

            console.log(brandId)
            if (brandId == null) {
                brandDescriptionL4.aggregate([{
                    $unwind: '$brandDesc'
                }, {
                    $match: {
                        $or: [
                            { 'brandDesc.productName': { $regex: value } },
                            { 'brandDesc.color': { $regex: value } },
                            { 'brandDesc.tag': { $in: [value] } },
                            // { 'brandDesc.brandId': mongoose.Types.ObjectId(brandId._id) },

                        ]
                    }
                }
                ], (err, result) => {
                    if (err) callback(null)
                    else callback(null, result)
                })
            }
            else{
                brandDescriptionL4.aggregate([{
                    $unwind: '$brandDesc'
                }, {
                    $match: {
                        $or: [
                            { 'brandDesc.productName': { $regex: value } },
                            { 'brandDesc.color': { $regex: value } },
                            { 'brandDesc.tag': { $in: [value] } },
                            { 'brandDesc.brandId': mongoose.Types.ObjectId(brandId._id) },

                        ]
                    }
                }
                ], (err, result) => {
                    if (err) callback(null)
                    else callback(null, result)
                })
            }
        }
    ], (err, result) => {
        // console.log("#################3", JSON.stringify(result))
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
            subCategoryModelL2.findOne({ 'subCategories._id': value.subCategory }, { 'subCategories.$': 1 }, (err, categoryResult) => {
                // console.log(err, "------------>>", categoryResult)
                subData = {
                    subCategoryName: categoryResult.subCategories[0].subCategoryName,
                    _id: categoryResult.subCategories[0]._id
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
            res.productData = result
            res.subCategory = demo
            callback({ 'statusCode': util.statusCode.EVERYTHING_IS_OK, 'statusMessage': util.statusMessage.PRODUCT_FOUND[data.lang], 'result': res })
        })

    })
}
//! business Details
businessDetails = (data, headers, callback) => {
    log("addCategory")
    if (!data) {
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
                var userId = {}
                commonFunction.jwtDecode(headers.accesstoken, (err, result) => {
                    log(err, result)
                    userId = { _id: result }
                })
                console.log(userId, "lkod")
                query = {
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
                        subCategoryModelL2.create({ categoryModel: result._id })
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.CATEGORY_ADDED[data.lang], "result": result })
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
        brandName: data.brandName
    }
    async.waterfall([
        (cb) => {
            commonFunction.uploadImg(data.brandImage, (err, image) => {
                log(err, image)
                if (err) cb(null)
                else if (!image) cb(null)
                else cb(null, image)
            })
        },
        function (image, cb) {
            console.log(')----------->>>>)))', image)
            brandListModel.find(query).exec((err, find) => {
                console.log(find)
                if (err || find.length > 0) {

                    cb(null, find)
                }
                else {
                    brandListModel.create({ brandName: data.brandName, icon: image }, (err, succ) => {
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
    brandListModel.find({ status: "ACTIVE" }, { status: 0 }).exec((err, succ) => {
        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": "brand list", "result": succ })

    })
}


//!Tripti filter api's
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
            brandListModel.find({}, { brandName: 1, _id: 1 }).lean().exec((err, succ) => {
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

        subCategoryModelL2.findOne({ 'subCategories._id': data.subCategoryId }, { 'subCategories.$': 1 }).populate({ path: 'categoryModel', select: 'categories.categoryName' }).exec((err, subCategoryName) => {
            // console.log("$$$$$$$$$$$$$$", err, subCategoryName.categoryModel.categories.categoryName)

            if (err) throw err

            else if (subCategoryName) {
                // })
                if (subCategoryName.categoryModel.categories.categoryName == 'Electronic') {
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
//!ambuj add physical store
//! Add physical store Details
physicalStore = (data, callback) => {
    log("addCategory")
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

                query = {
                    'businessName': data.businessName,
                    'address': data.address,
                    'building_shopNo': data.building_shopNo,
                    "location": { type: "Point", coordinates: [data.lat, data.lng] },

                }
                physicalStores.create(query, (err, result) => {
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
//!getSubCategory
getSubCategory = (data, callback) => {
    console.log("asdf")
    subCategoryModelL2.find({ categoryModel: data.categoryModel }).select({ 'subCategories': 1, '_id': 0, 'subCategories.subCategoryName': 1, 'subCategories._id': 1 }).exec((err, succ) => {
        if (err) {
            throw err
        }
        else if (!succ.length > 0) {
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang] })
        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": succ[0].subCategories })
        }
    })
}

//!getproductName
getProductCategoryName = (data, callback) => {
    console.log('getProductCategoryName')
    query = {
        subCategory: data.subCategoryId
    }
    categoryBrandModelL3.find(query).select({ 'productcategory._id': 1, 'productcategory.productcategoryName': 1 }).exec((error, success) => {
        console.log(error, JSON.stringify(success))
        if (success.length > 0) {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": success[0].productcategory })
        }
        else {
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang] })
        }
    })
}
//!getProductdetail From variance Selection
productDetails = (data, callback) => {
    /* console.log("ddddd")
    res=[]sea
    brandDescriptionL4.find({ 'brandDesc._id': data.productId },{'brandDesc.$':1}).populate({ path: 'brandDesc.varianceId' }).lean().exec((err, result) => {
        // console.log(typeof result,result)
        async.forEachOf(result[0].brandDesc,(value,key,callback)=>{
            
            console.log("^^^^^^^^^^^6",value)
            callback(null)
        },(err,ans)=>{
        })
        callback(result[0].brandDesc)
    })
 */
    log('hitted productDetail api ios')
    if (!data) {
        callback({ "statusCode": util.statusCode.PARAMETER_IS_MISSING, "statusMessage": util.statusMessage.PARAMS_MISSING[data.lang] })
        return
    }
    async.parallel({
        findProduct: (cb) => {
            brandDescriptionL4.findOne({ "brandDesc._id": data._id }, { "brandDesc.$": 1 }).populate({ 'path': 'brandDesc.brandId', 'select': 'brandName' }).populate({ path: 'brandDesc.varianceId' }).exec((err, result) => {
                cb(null, result)
            })
        },

        reviewAndRating: (cb) => {
            commonAPI.reviewAndRating(data._id, async (err, result) => {
                // console.log("%5555555555555555", err, (result))
                if (err && !result.length > 0) {
                    cb(null)
                }
                else {
                    // console.log(JSON.stringify(result))
                    rating = [];
                    console.log("start")
                    result.forEach(element => {
                        console.log("check review and rating", element.reviewAndRating)
                        if (element.reviewAndRating.length > 0) {
                            // console.log(element.reviewAndRating)
                            // element.reviewAndRating.forEach(element => {
                            //     // console.log("elemet", element)
                            //     commonAPI.getUsername(element.userId, async (err, userDetail) => {
                            //         temp = {
                            //             firstName: userDetail.firstName,
                            //             lastName: userDetail.lastName,
                            //             image: userDetail.image,
                            //             review: element.review,
                            //             rating: element.rating
                            //         }
                            //         await rating.push(temp)
                            //         // console.log("%%%%%%%%5", rating)
                            //     })
                            //     // console.log("finallllyyyyy", rating)
                            // })

                            async.forEachOf(element.reviewAndRating, async (value, key, back) => {
                                // console.log(value)

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
        getSimilarProduct: (cb) => {
            commonAPI.getSimilarProductlist(data._id, (err, result) => {
                // console.log("3333333333333333333", err, result)
                let test1 = []
                if (err) cb(null)
                else {
                    // console.log(JSON.stringify(result))
                    result.brandDesc.forEach(element => {
                        let temp = {
                            _id: element._id,
                            description: element.description,
                            price: element.price,
                            productName: element.productName,
                            sellerId: element.sellerId,
                            brand: element.brandId.brandName,
                            specifications: element.specifications,
                            image: element.image,
                        }
                        test1.push(temp)
                    })
                    // console.log(temp)
                    cb(null, test1)
                }
            })
        }

    }, (err, response) => {
        // function search(nameKey, myArray,keyMatch) {
        //     for (var i = 0; i < myArray.length; i++) {
        //         if (myArray[i].keyMatch === nameKey) {
        //             return myArray[i];
        //         }
        //     }
        // }
        if (response) {
            // console.log("sadfsadfasfsadfdfasdf", response)
            res = {}
            var ratingAndReview = []
            // console.log(response.findProduct.brandDesc[0].varianceId)
            if (response.findProduct.brandDesc[0].varianceId == null) {
                console.log("variant not inserted")
                response.findProduct.brandDesc.forEach(element => {
                    // console.log('element----------->>>',element.varianceId.variants)
                    var b = []
                    var color = []
                    var material = []
                    var size = []
                    // var test2;
                    // element.varianceId.variants.forEach(test => {
                    //     // console.log('123456789023456789',test)
                    //     // test2=test
                    //    let a = {
                    //         colorName: test.color,
                    //         variance: {
                    //             _id: test._id,
                    //             color: test.color,
                    //             material: test.material,
                    //             image: test.image,
                    //         }
                    //     }
                    //     color.push(test.color),
                    //     material.push(test.material)
                    //     size.push(test.size)
                    //     b.push(a)
                    //     // console.log('---color Array------>>', color)
                    //     // console.log('---materical Array------>>', material)
                    //     // console.log('---size Array------>>', size)
                    //     // var uSet = new Set(color);
                    //     // console.log( uSet )
                    //     // console.log(Object.keys())
                    // // })
                    data = {
                        _id: element._id,
                        brand: element.brandId.brandName,
                        productName: element.productName,
                        price: element.price,
                        color: element.color,
                        description: element.description,
                        image: element.image,
                        specifications: element.specifications[0],
                        /*      variants: {
                                 // [test.color]: {
                                 _id: "",
                                 color: "",
                                 material: "",
                                 image: [],
                                 size: "",
                                 price: ""
     
                             },
                             colors: [],
                             material: [],
                             size: [] */
                    }
                    res.product = data
                    // })
                })
            }
            else {
                response.findProduct.brandDesc.forEach(element => {
                    // console.log('element----------->>>',element.varianceId.variants)
                    var b = []
                    var color = []
                    var material = []
                    var size = []
                    // var test2;
                    element.varianceId.variants.forEach(test => {
                        color.push(test.color)
                        material.push(test.material)
                        size.push(test.size)
                        data = {
                            _id: element._id,
                            brand: element.brandId.brandName,
                            productName: element.productName,
                            price: element.price,
                            description: element.description,
                            specifications: element.specifications[0],
                            variants: {
                                // colorName: test.color,
                                // [test.color]: {
                                _id: test._id,
                                color: test.color.toUpperCase() ? test.color : '',
                                material: test.material.toUpperCase() ? test.material : '',
                                image: test.image ? test.image : [],
                                size: test.size.toUpperCase() ? test.size : '',
                                price: test.price ? test.price : ''
                                // }
                            },
                            colors: [...new Set(color)].reverse().map(function (x) { return x.toUpperCase() }),
                            material: [...new Set(material)].reverse().map(function (x) { return x.toUpperCase() }),
                            size: [...new Set(size)].reverse().map(function (x) { return x.toUpperCase() })
                        }
                        res.product = data
                    })
                })
            }
            // console.log(JSON.stringify(response.reviewAndRating))
            if (false) {
                response.reviewAndRating.forEach(element => {
                    console.log(element)
                    if (element.reviewAndRating.length > 0) {

                        console.log("333333333", element)
                        async.forEachOf(element.reviewAndRating, async (value, key, callback) => {
                            console.log("----------->>")
                            // setTimeout(4000)
                            await userModel.findOne({ _id: value.userId }).exec(async (err, userDetail) => {
                                console.log('userdetail')
                                if (userDetail) {
                                    let demo = {
                                        firstName: userDetail.firstName,
                                        lastName: userDetail.lastName,
                                        image: userDetail.image,
                                        review: value.review,
                                        rating: value.rating
                                    }
                                    await ratingAndReview.push(demo)
                                }
                                callback(null, ratingAndReview)
                            })
                            // console.log("###33",ratingAndReview)
                            // callback()
                        }, async (err, result) => {
                            console.log(err, result)
                            console.log("ASDFASDFASDFASDFASDf", ratingAndReview)
                            // await 
                            console.log("ratingAndReviewratingAndReview", ratingAndReview)
                            sellerInfo = {
                                _id: "5bd949e76f6cdd0b3b639e9c",
                                sellerName: "Raghu Thakur",
                                selllerImage: "http://res.cloudinary.com/sumit9211/image/upload/v1540970222/cy3r1ilg2gsh6hvdkxsa.jpg",
                                selllerRating: "3"
                            }
                            res.sellerInfo = sellerInfo
                            res.reviewAndRating = ratingAndReview
                            res.similarProduct = response.getSimilarProduct
                            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.USER_FOUND[data.lang], "result": res });
                        })
                    }
                    else {
                        console.log('e443423423423', ratingAndReview)
                        sellerInfo = {
                            _id: "5bd949e76f6cdd0b3b639e9c",
                            sellerName: "Raghu Thakur",
                            selllerImage: "http://res.cloudinary.com/sumit9211/image/upload/v1540970222/cy3r1ilg2gsh6hvdkxsa.jpg",
                            selllerRating: "3"
                        }
                        res.sellerInfo = sellerInfo
                        res.reviewAndRating = ratingAndReview
                        res.similarProduct = response.getSimilarProduct
                        callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.USER_FOUND[data.lang], "result": res });
                    }
                })
            }
            else {

                console.log('e443423423423', response.reviewAndRating)
                sellerInfo = {
                    _id: "5bd949e76f6cdd0b3b639e9c",
                    sellerName: "Raghu Thakur",
                    selllerImage: "http://res.cloudinary.com/sumit9211/image/upload/v1540970222/cy3r1ilg2gsh6hvdkxsa.jpg",
                    selllerRating: "3"
                }
                res.sellerInfo = sellerInfo
                res.reviewAndRating = response.reviewAndRating
                res.similarProduct = response.getSimilarProduct
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.USER_FOUND[data.lang], "result": res });
            }
            // console.log(ratingAndReview)
            /*  sellerInfo = {
                 _id: "5bd949e76f6cdd0b3b639e9c",
                 sellerName: "Raghu Thakur",
                 selllerImage: "http://res.cloudinary.com/sumit9211/image/upload/v1540970222/cy3r1ilg2gsh6hvdkxsa.jpg",
                 selllerRating: "3"
             }
             res.sellerInfo = sellerInfo
             res.reviewAndRating = ratingAndReview
             res.similarProduct = response.getSimilarProduct
             callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.USER_FOUND[data.lang], "result": res }); */
        }
        else {
            console.log("####################################################3")
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY })
        }
    })
}
//!add variance of product
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
    variance.save((err, saveVariance) => {
        console.log("saveVariance", err, saveVariance)
        brandDescriptionL4.findOneAndUpdate({ 'brandDesc._id': data.productId }, { $set: { 'brandDesc.$.varianceId': saveVariance._id } }).exec((err, result) => {
            console.log("findoneandUpdate", err, result)
        })
        callback(saveVariance)
    })
}

//!getproductList
getProductList = (data, callback) => {
    console.log('api is running')
    var result = []
    brandDescriptionL4.find({}).populate({ path: 'brandDesc.brandId', select: { 'brandName': 1 } }).exec((err, success) => {
        // console.log(err, JSON.stringify(success))
        if (err) throw err
        else {
            async.forEachOf(success, (value, key, callback) => {
                value.brandDesc.forEach(element => {
                    // console.log(element)
                    temp = {
                        _id: element._id,
                        product: element.productName,
                        brand: element.brandId.brandName,
                        image: element.image[0],
                        description: element.description,
                        color: element.color,
                        status: element.status,
                        price: element.price
                    }
                    result.push(temp)

                })
                callback()
            }, (err, response) => {
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
            })
        }
    })
}

//!getvariance
getVariance = (data, callback) => {
    console.log('get variance')
    temp = {
        color: data.color.toLowerCase(),
        size: data.size.toLowerCase(),
        material: data.material.toLowerCase(),
    }
    console.log(temp)
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
    // let query = {
    //     $and:
    //         [{ productId: mongoose.Types.ObjectId(data._id) }, { 'variants.color': temp.color }, { 'variants.size': temp.size }, { 'variants.material': temp.material }]
    // }
    varianceModel.find(query1, { 'variants.$': 1 }).lean().exec((err, result) => {
        console.log(err, JSON.stringify(result))
        if (result.length == 0) {
            callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOT_FOUND[data.lang], })
        }
        /*   else {
              async.forEachOf(result[0].variants, (value, key, callback) => {
                  console.log(value)
                  temp = {
                      _id: value._id,
                      color: value.color,
                      image: value.image,
                      material: value.material,
                      size: value.size
                  }
                  [value.color] = temp
                  callback(null)
              }, (err, result) => {
                  console.log(err, result)
                  callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": temp1 })
  
              })
          } */
        else {
            result[0].variants.forEach(element => {
                result = {
                    // [element.color]: {
                    _id: element._id,
                    color: element.color.toUpperCase(),
                    image: element.image,
                    material: element.material.toUpperCase(),
                    size: element.size.toUpperCase(),
                    price: element.price
                    // }
                }
                callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': result })
            })
        }
    })
}

//!view On filter APi
/* {
    "color": "Broadcast Media,Chemical Industry,Consumer Electronics",
        "price": "Android Developer,Designer",
            "brand": "ASRY,Heck,Mediacorp Pte Ltd,Neuberger Berman",
                "catgoryId": "Analytics,Animation,Architecture,Cloud Computing",
                    "user_id": "1", "Location": "Fourna,Ghaziabad"
} */
applyFilter = (data, callback) => {
    console.log('call filter api -==>', data)
    console.log('call filter api -==>', typeof data.Colors)

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

 */    query1 = [{
        $unwind: '$variants'
    }, {
        $match: {
            $or: [
                { 'variants.color': { $in: dataManage.Colors ? dataManage.Colors : [] } },
                { 'variants.size': { $in: dataManage.Sizes ? dataManage.Sizes : [] } },
                { 'variants.Price': { $in: dataManage.Price ? dataManage.Price : [] } },

            ]
        }
    }
    ]
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
            varianceModel.aggregate(query1).exec((err, succ) => {
                // console.log(err, succ)
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
            brandListModel.find({ brandName: { $in: dataManage.Brands } }).exec((err, succ) => {
                //  console.log(err,JSON.stringify(succ))
                succ.forEach(element => {
                    a.push(element._id)
                })
                // console.log('6666666666y',a)
                let query3 = [{
                    $unwind: '$brandDesc'
                }, {
                    $match: { 'brandDesc.brandId': { $in: a } }
                }
                ]
                b = []
                brandDescriptionL4.aggregate(query3).exec((err, result) => {
                    // console.log(err,JSON.stringify(result))
                    result.forEach(element => {
                        b.push(element.brandDesc._id.toString())
                    })
                    cb(null, b)
                })
            })
        }

    }, (err, response) => {

        let productArray = _.union(response.getColor, response.getBrand)
        let objectIdArray = productArray.map(s => mongoose.Types.ObjectId(s));
        console.log(objectIdArray)
        let query4 = [{
            $unwind: '$brandDesc'
        }, {
            $match: {
                $and: [
                    {
                        'brandDesc._id': {
                            $in: objectIdArray
                        }
                    },
                    { 'subCategory': mongoose.Types.ObjectId(data.subCategoryId) }
                ]
            }
        }
        ]
        brandDescriptionL4.aggregate(query4).exec((err, success) => {
            // console.log(err, success)
            res = {}
            res.productData = success
            res.subCategory = []
            console.log(success.length)
            if (!success.length > 0) {
                callback({ "statusCode": util.statusCode.NOT_FOUND, "statusMessage": util.statusMessage.NOW_PRODUCT_AVAILABLE[data.lang] })
            }
            else { callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], 'result': res }) }
        })
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

//!update brand
updateBrand = (data, callback) => {
    update = {
        $set: {
            brandName: data.brandName,
            image: data.brandImage,
            icon: data.brandIcon
        }
    }
    brandListModel.findByIdAndUpdate({ _id: data.brandId }, update, { __v: 0, new: true }).exec((err, result) => {
        if (err) {
            callback({ "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY[data.lang], "error": err })
        }
        else {
            callback({ "statusCode": util.statusCode.EVERYTHING_IS_OK, "statusMessage": util.statusMessage.FETCHED_SUCCESSFULLY[data.lang], "result": result })
        }
    })
}
module.exports = {

    addCategory,
    addSubCategory,
    getCategoryList,
    // addCategoryBrand,
    addProductCategory, //!new API
    addBrandDescription,
    addTopOffers,
    homeScreenApi,
    productDetails,   //!productDetail for IOS get API
    addReviewAndRating,
    uploadImage,
    listOfAddCart, //!
    orderList,      //
    addToWishList,
    addToCart,
    wishList,         //!1059
    testingApi,       //!testAPI,
    deleteWishItem,
    deleteCart,       //!1204
    placeOrder,       //!1266
    testSms,
    //!some change
    addBrand,
    getBrandList,
    //!myntra
    checkoutOrder,
    OpenSubCategory,
    productList,
    searchProduct,
    businessDetails,
    filters,
    physicalStore,
    //!vendorpanel
    getSubCategory,
    getProductCategoryName,
    // testingAPI3dec,
    getProductList,
    addVariance,
    getVariance,
    applyFilter,
    getBrand,
    deleteBrand,
    updateBrand
}