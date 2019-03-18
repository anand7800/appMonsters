var productRouter = require("express").Router()
var productService = require('../../Services/productService/productService')
const authHandler = require('../../middleware/verifyToken')


// !addCategory
productRouter.post('/addCategory', (req, res) => {
    productService.addCategory(req.body, (data) => {
        res.send(data)
    })
})
// addSubCategory 
productRouter.post('/addSubCategory', (req, res) => {
    productService.addSubCategory(req.body, (data) => {
        res.send(data)
    })
})
//!getCategoryList
productRouter.get('/getCategoryList', (req, res) => {
    productService.getCategoryList(req.query, (data) => {
        res.send(data)
    })
})
//!addCategoryBrand
productRouter.post('/addProductCategory', (req, res) => {
    productService.addProductCategory(req.body, (data) => {
        res.send(data)
    })
})
//!addBrandDescription
productRouter.post('/addProduct', authHandler.verifyToken, (req, res) => {
    productService.addProduct(req.body, req.headers, (data) => {
        res.send(data)
    })
})
//!homeScreenAPi
productRouter.get('/homeScreenApi', (req, res) => {
    productService.homeScreenApi(req.query, (data) => {
        res.send(data)
    })
})
// // !addOffers
// vendorRouter.post('/addOffers', (req, res) => {
//     vendorPanelHandler.addTopOffers(req.body, (data) => {
//         res.send(data)
//     })
// })
//!viewProduct @IOS
productRouter.get('/productDetails', (req, res) => {
    productService.productDetails(req.query, (data) => {
        res.send(data)
    })
})
// /* //!viewProduct  @android 
// vendorRouter.post('/productDetail',(req,res)=>{
//     vendorPanelHandler.productDetail(req.body,(data)=>{
//         res.send(data)
//     })
// }) */
//!addReviewAndRating
productRouter.post('/addReviewAndRating', authHandler.verifyToken, (req, res) => {
    productService.addReviewAndRating(req.headers, req.body, (data) => {
        res.send(data)
    })
})
//!addToCart  
productRouter.post('/addToCart', authHandler.verifyToken, (req, res) => {
    productService.addToCart(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!listOfAddCart  
productRouter.get('/listOfAddCart', authHandler.verifyToken, (req, res) => {
    productService.listOfAddCart(req.query, req.headers, (data) => {
        res.send(data)
    })
})

//!addTowishList  
productRouter.post('/addToWishList', authHandler.verifyToken, (req, res) => {
    productService.addToWishList(req.body, req.headers, (data) => {
        res.send(data)
    })
})

// //!uploadImage  
// vendorRouter.post('/uploadImage', (req, res) => {
//     vendorPanelHandler.uploadImage(req.body, (data) => {
//         res.send(data)
//     })
// })

// //!wishList  
productRouter.get('/wishList', authHandler.verifyToken, (req, res) => {
    productService.wishList(req.query, req.headers, (data) => {
        res.send(data)
    })
})

// //!testingApi  
// vendorRouter.post('/testingApi', (req, res) => {
//     vendorPanelHandler.testingApi(req.body, (data) => {
//         res.send(data)
//     })
// })

//!deleteWishItem  
productRouter.post('/deleteWishItem', authHandler.verifyToken, (req, res) => {
    productService.deleteWishItem(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!deleteCart  
productRouter.post('/deleteCart', authHandler.verifyToken, (req, res) => {
    productService.deleteCart(req.body, req.headers, (data) => {
        res.send(data)
    })
})

// //!testSms  
// vendorRouter.get('/testSms', (req, res) => {
//     vendorPanelHandler.testSms(req.query, (data) => {
//         res.send(data)
//     })
// })

//!placeOrder  
productRouter.post('/placeOrder', authHandler.verifyToken, (req, res) => {
    productService.placeOrder(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!orderList  
productRouter.get('/orderList', authHandler.verifyToken, (req, res) => {
    productService.orderList(req.query, req.headers, (data) => {
        res.send(data)
    })
})

//!OpenSubCategory  
productRouter.post('/OpenSubCategory', (req, res) => {
    productService.OpenSubCategory(req.body, (data) => {
        res.send(data)
    })
})

//!categoryProductList  
productRouter.post('/categoryProductList', (req, res) => {
    productService.categoryProductList(req.body, (data) => {
        res.send(data)
    })
})

// //!Business Detail   
// vendorRouter.post('/BusinessDetail', authHandler.verifyToken, (req, res) => {
//     vendorPanelHandler.businessDetails(req.body, req.headers, (data) => {
//         res.send(data)
//     })
// })
// //!search
productRouter.post('/search', (req, res) => {
    productService.searchProduct(req.body, (data) => {
        res.send(data)
    })
})

//!checkoutOrder
productRouter.post('/checkoutOrder', authHandler.verifyToken, (req, res) => {
    productService.checkoutOrder(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!addBrand
productRouter.post('/addBrand', (req, res) => {
    productService.addBrand(req.body, (data) => {
        res.send(data)
    })
})
// //!addBrand
// vendorRouter.get('/getBrandList', (req, res) => {
//     vendorPanelHandler.getBrandList((data) => {
//         res.send(data)
//     })
// })

// !filter product
productRouter.post('/filter', (req, res) => {
    productService.filters(req.body, (data) => {
        res.send(data)
    })
})

//! Add physical store 
productRouter.post('/addPhysicalStore', authHandler.verifyToken, (req, res) => {
    productService.physicalStore(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!getSubcategory
productRouter.post('/getSubCategory', (req, res) => {
    productService.getSubCategory(req.body, (data) => {
        res.send(data)
    })
})
//!getProductCategoryName
productRouter.post('/getProductCategoryName', (req, res) => {
    productService.getProductCategoryName(req.body, (data) => {
        res.send(data)
    })
})

// vendorRouter.post('/testingAPI3dec', (req, res) => {
//     vendorPanelHandler.testingAPI3dec(req.body, (data) => {
//         res.send(data)
//     })
// })

// //!getProductList
// vendorRouter.get('/getProductList', (req, res) => {
//     vendorPanelHandler.getProductList(req.body,req.headers, (data) => {
//         res.send(data)
//     })
// })
//!addVariance
productRouter.post('/addVariance', (req, res) => {
    productService.addVariance(req.body, (data) => {
        res.send(data)
    })
})

//!getVariance
productRouter.post('/getVariance', (req, res) => {
    productService.getVariance(req.body, (data) => {
        res.send(data)
    })
})

//!clickFilter
productRouter.post('/applyFilter', (req, res) => {
    productService.applyFilter(req.body, (data) => {
        res.send(data)
    })
})

//!getBrand
productRouter.post('/getBrand', (req, res) => {
    productService.getBrand(req.body, (data) => {
        res.send(data)
    })
})
//!deleteBrand
productRouter.post('/deleteBrand', (req, res) => {
    productService.deleteBrand(req.body, (data) => {
        res.send(data)
    })
})
//!updateBrand
productRouter.post('/updateBrand', (req, res) => {
    productService.updateBrand(req.body, (data) => {
        res.send(data)
    })
})

// //!getUserList
// vendorRouter.post('/getUserList', (req, res) => {
//     productService.getUserList(req.body,(data) => {
//         res.send(data)
//     })
// })

//!get vendorOrder list
productRouter.post('/vendorOrderList', authHandler.verifyToken, (req, res) => {
    productService.vendorOrderList(req.headers, (data) => {
        res.send(data)
    })
})

// //!createVendor
// vendorRouter.post('/createVendor', (req, res) => {
//     vendorPanelHandler.createVendor(req.body,(data) => {
//         res.send(data)
//     })
// })

//!getSubCategoryList
productRouter.get('/getSubCategoryList', (req, res) => {
    productService.getSubCategoryList(req.query, (data) => {
        res.send(data)
    })
})
// //!deleteVendor
// vendorRouter.post('/deleteVendor', (req, res) => {
//     vendorPanelHandler.deleteVendor(req.body,(data) => {
//         res.send(data)
//     })
// })

// //!changeOrderStatus
// vendorRouter.post('/changeOrderStatus', (req, res) => {
//     vendorPanelHandler.changeOrderStatus(req.body,(data) => {
//         res.send(data)
//     })
// })
//!orderDetail
productRouter.get('/orderDetail', (req, res) => {
    productService.orderDetail(req.query, (data) => {
        res.send(data)
    })
})

//!compareProduct
productRouter.post('/compareProduct', (req, res) => {
    productService.compareProduct(req.body, (data) => {
        res.send(data)
    })
})

//!getNotification
productRouter.get('/getNotification', authHandler.verifyToken, (req, res) => {
    productService.getNotification(req.query, req.headers, (data) => {
        res.send(data)
    })
})

// //!getQrCode
// vendorRouter.post('/getQrCode', (req, res) => {
//     vendorPanelHandler.getQrCode(req.body,(data) => {
//         res.send(data)
//     })
// })

// //!dashBoard
// vendorRouter.get('/dashBoard', (req, res) => {
//     vendorPanelHandler.dashBoard(req.body,(data) => {
//         res.send(data)
//     })
// })
// //!getUserinfo
// vendorRouter.post('/getUserinfo', (req, res) => {
//     vendorPanelHandler.getUserinfo(req.body,(data) => {
//         res.send(data)
//     })
// })
//!getAllVariant
productRouter.get('/getAllVariant/:productId', (req, res) => {
    productService.getAllVariant(req.params, (data) => {
        res.send(data)
    })
})
// //!updateVarianceStock
// vendorRouter.post('/updateVarianceStock', (req, res) => {
//     vendorPanelHandler.updateVarianceStock(req.body,(data) => {
//         res.send(data)
//     })
// })
// //!editCatogory
// vendorRouter.post('/editCatogory', (req, res) => {
//     vendorPanelHandler.editCatogory(req.body,(data) => {
//         res.send(data)
//     })
// })
// //!vendorOrderStatus
// vendorRouter.post('/vendorOrderStatus', (req, res) => {
//     vendorPanelHandler.vendorOrderStatus(req.body,req.headers,(data) => {
//         res.send(data)
//     })
// })
//!searchVendorOrder
productRouter.post('/searchVendorOrder', authHandler.verifyToken, (req, res) => {
    productService.searchVendorOrder(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!inActiveProductList
productRouter.get('/inActiveProductList', (req, res) => {
    productService.inActiveProductList(req.query, (data) => {
        res.send(data)
    })
})

//! addVendoroffer
productRouter.post('/addVendoroffer', authHandler.verifyToken, (req, res) => {
    productService.addVendoroffer(req.body, req.headers, (data) => {
        res.send(data)
    })
})
productRouter.post('/combination', (req, res) => {
    productService.combination(req.body, (data) => {
        res.send(data)
    })
})

productRouter.get('/getProductInfo', (req, res) => {
    productService.getProductInfo(req.query, (data) => {
        res.send(data)
    })
})

productRouter.get('/getVendorProductCategorylist', authHandler.verifyToken, (req, res) => {
    productService.getVendorProductCategorylist(req.query, req.headers, (data) => {
        res.send(data)
    })
})

productRouter.post('/editProduct', (req, res) => {
    productService.editProduct(req.body, (data) => {
        res.send(data)
    })
})
productRouter.get('/dashBoardForVendor', authHandler.verifyToken, (req, res) => {
    productService.dashBoardForVendor(req.query, req.headers, (data) => {
        res.send(data)
    })
})

// reviewFeedBack
productRouter.get('/reviewFeedBack', (req, res) => {
    productService.reviewFeedBack(req.query, req.headers, (data) => {
        res.send(data)
    })
})

// treadingOnWaki
productRouter.get('/treadingOnWaki', (req, res) => {
    productService.treadingOnWaki(req.query, (data) => {
        res.send(data)
    })
})

// liveView
productRouter.get('/liveView', (req, res) => {
    productService.liveView(req.query, req.headers, (data) => {
        res.send(data)
    })
})
// myAccount
productRouter.get('/myAccount', (req, res) => {
    productService.myAccount(req.query, req.headers, (data) => {
        res.send(data)
    })
})

// getVendorOffer
productRouter.get('/getVendorOffer', (req, res) => {
    productService.getVendorOffer(req.query, req.headers, (data) => {
        res.send(data)
    })
})

// deleteStaff
productRouter.post('/deleteStaff', (req, res) => {
    productService.deleteStaff(req.body, req.headers, (data) => {
        res.send(data)
    })
})

module.exports = productRouter