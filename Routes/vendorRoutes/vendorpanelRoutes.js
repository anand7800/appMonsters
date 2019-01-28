var vendorRouter = require("express").Router()
var vendorPanelHandler = require('../../Services/vendorService/vendorPanelService')
const authHandler = require('../../middleware/verifyToken')


// addCategory
// vendorRouter.post('/addCategory', (req, res) => {
//     vendorPanelHandler.addCategory(req.body, (data) => {
//         res.send(data)
//     })
// })
//viewProduct 
// vendorRouter.post('/addSubCategory', (req, res) => {
//     vendorPanelHandler.addSubCategory(req.body, (data) => {
//         res.send(data)
//     })
// })
//getCategoryList
// vendorRouter.get('/getCategoryList', (req, res) => {
    // vendorPanelHandler.getCategoryList(req.query, (data) => {
        // res.send(data)
    // })
// })
// addCategoryBrand
// vendorRouter.post('/addProductCategory', (req, res) => {
    // vendorPanelHandler.addProductCategory(req.body, (data) => {
        // res.send(data)
    // })
// })
// addBrandDescription
// vendorRouter.post('/addBrandDescription', (req, res) => {
    // vendorPanelHandler.addBrandDescription(req.body,req.headers, (data) => {
        // res.send(data)
    // })
// })
// homeScreenAPi
// vendorRouter.get('/homeScreenApi', (req, res) => {
    // vendorPanelHandler.homeScreenApi(req.query, (data) => {
        // res.send(data)
    // })
// })
// addOffers
// vendorRouter.post('/addOffers', (req, res) => {
//     vendorPanelHandler.addTopOffers(req.body, (data) => {
//         res.send(data)
//     })
// })
//viewProduct @IOS
// vendorRouter.get('/productDetails', (req, res) => {
//     vendorPanelHandler.productDetails(req.query, (data) => {
//         res.send(data)
//     })
// })
/* //viewProduct  @android 
vendorRouter.post('/productDetail',(req,res)=>{
    vendorPanelHandler.productDetail(req.body,(data)=>{
        res.send(data)
    })
}) */
//addReviewAndRating
// vendorRouter.post('/addReviewAndRating', (req, res) => {
//     vendorPanelHandler.addReviewAndRating(req.headers,req.body, (data) => {
//         res.send(data)
//     })
// })
//addToCart  
// vendorRouter.post('/addToCart', (req, res) => {
//     vendorPanelHandler.addToCart(req.body, req.headers, (data) => {
//         res.send(data)
//     })
// })

//listOfAddCart  
// vendorRouter.get('/listOfAddCart', (req, res) => {
//     vendorPanelHandler.listOfAddCart(req.query, req.headers, (data) => {
//         res.send(data)
//     })
// })

//addTowishList  
// vendorRouter.post('/addToWishList', (req, res) => {
//     vendorPanelHandler.addToWishList(req.body, req.headers, (data) => {
//         res.send(data)
//     })
// })

uploadImage  
vendorRouter.post('/uploadImage', (req, res) => {
    vendorPanelHandler.uploadImage(req.body, (data) => {
        res.send(data)
    })
})

//wishList  
// vendorRouter.get('/wishList', (req, res) => {
//     vendorPanelHandler.wishList(req.query, req.headers, (data) => {
//         res.send(data)
//     })
// })

//testingApi  
// vendorRouter.post('/testingApi', (req, res) => {
//     vendorPanelHandler.testingApi(req.body, (data) => {
//         res.send(data)
//     })
// })

//deleteWishItem  
// vendorRouter.post('/deleteWishItem', (req, res) => {
//     vendorPanelHandler.deleteWishItem(req.body, req.headers, (data) => {
//         res.send(data)
//     })
// })

//deleteCart  
// vendorRouter.post('/deleteCart', (req, res) => {
//     vendorPanelHandler.deleteCart(req.body, req.headers, (data) => {
//         res.send(data)
//     })
// })

//testSms  
// vendorRouter.get('/testSms', (req, res) => {
//     vendorPanelHandler.testSms(req.query, (data) => {
//         res.send(data)
//     })
// })

//placeOrder  
// vendorRouter.post('/placeOrder', (req, res) => {
//     vendorPanelHandler.placeOrder(req.body, req.headers, (data) => {
//         res.send(data)
//     })
// })

//orderList  
// vendorRouter.get('/orderList', (req, res) => {
//     vendorPanelHandler.orderList(req.query, req.headers, (data) => {
//         res.send(data)
//     })
// })

//OpenSubCategory  
// vendorRouter.post('/OpenSubCategory', (req, res) => {
//     vendorPanelHandler.OpenSubCategory(req.body, (data) => {
//         res.send(data)
//     })
// })

//productList  
// vendorRouter.post('/categoryProductList', (req, res) => {
//     vendorPanelHandler.categoryProductList(req.body, (data) => {
//         res.send(data)
//     })
// })

//Business Detail   
vendorRouter.post('/BusinessDetail', authHandler.verifyToken, (req, res) => {
    vendorPanelHandler.businessDetails(req.body, req.headers, (data) => {
        res.send(data)
    })
})
//search
// vendorRouter.post('/search', (req, res) => {
//     vendorPanelHandler.searchProduct(req.body, (data) => {
//         res.send(data)
//     })
// })

//checkoutOrder
// vendorRouter.post('/checkoutOrder', (req, res) => {
//     vendorPanelHandler.checkoutOrder(req.body, req.headers, (data) => {
//         res.send(data)
//     })
// })

//addBrand
vendorRouter.post('/addBrand', (req, res) => {
    vendorPanelHandler.addBrand(req.body, (data) => {
        res.send(data)
    })
})
//addBrand
vendorRouter.get('/getBrandList', (req, res) => {
    vendorPanelHandler.getBrandList((data) => {
        res.send(data)
    })
})

// filter product
// vendorRouter.post('/filter', (req, res) => {
//     vendorPanelHandler.filters(req.body, (data) => {
//         res.send(data)
//     })
// })

// Add physical store 
// vendorRouter.post('/addPhysicalStore', (req, res) => {
//     vendorPanelHandler.physicalStore(req.body, (data) => {
//         res.send(data)
//     })
// })

//getSubcategory
// vendorRouter.post('/getSubCategory', (req, res) => {
//     vendorPanelHandler.getSubCategory(req.body, (data) => {
//         res.send(data)
//     })
// })
//getProductCategoryName
vendorRouter.post('/getProductCategoryName', (req, res) => {
    vendorPanelHandler.getProductCategoryName(req.body, (data) => {
        res.send(data)
    })
})

// vendorRouter.post('/testingAPI3dec', (req, res) => {
//     vendorPanelHandler.testingAPI3dec(req.body, (data) => {
//         res.send(data)
//     })
// })

//getProductList
vendorRouter.get('/getProductList', (req, res) => {
    vendorPanelHandler.getProductList(req.body,req.headers, (data) => {
        res.send(data)
    })
})
//addVariance
vendorRouter.post('/addVariance', (req, res) => {
    vendorPanelHandler.addVariance(req.body, (data) => {
        res.send(data)
    })
})

//getVariance
vendorRouter.post('/getVariance', (req, res) => {
    vendorPanelHandler.getVariance(req.body, (data) => {
        res.send(data)
    })
})

//clickFilter
// vendorRouter.post('/applyFilter', (req, res) => {
//     vendorPanelHandler.applyFilter(req.body, (data) => {
//         res.send(data)
//     })
// })

// getBrand
vendorRouter.post('/getBrand', (req, res) => {
    vendorPanelHandler.getBrand(req.body, (data) => {
        res.send(data)
    })
})
//deleteBrand
vendorRouter.post('/deleteBrand', (req, res) => {
    vendorPanelHandler.deleteBrand(req.body, (data) => {
        res.send(data)
    })
})
//updateBrand
vendorRouter.post('/updateBrand', (req, res) => {
    vendorPanelHandler.updateBrand(req.body, (data) => {
        res.send(data)
    })
})

//getUserList
vendorRouter.post('/getUserList', (req, res) => {
    vendorPanelHandler.getUserList(req.body,(data) => {
        res.send(data)
    })
})

//get vendorOrder list
vendorRouter.post('/vendorOrderList', (req, res) => {
    vendorPanelHandler.vendorOrderList(req.headers,(data) => {
        res.send(data)
    })
})

//createVendor
vendorRouter.post('/createVendor', (req, res) => {
    vendorPanelHandler.createVendor(req.body,(data) => {
        res.send(data)
    })
})

//getSubCategoryList
vendorRouter.get('/getSubCategoryList', (req, res) => {
    vendorPanelHandler.getSubCategoryList(req.query,(data) => {
        res.send(data)
    })
})
//deleteVendor
vendorRouter.post('/deleteVendor', (req, res) => {
    vendorPanelHandler.deleteVendor(req.body,(data) => {
        res.send(data)
    })
})

//changeOrderStatus
vendorRouter.post('/changeOrderStatus', (req, res) => {
    vendorPanelHandler.changeOrderStatus(req.body,(data) => {
        res.send(data)
    })
})
//orderDetail
vendorRouter.get('/orderDetail', (req, res) => {
    vendorPanelHandler.orderDetail(req.query,(data) => {
        res.send(data)
    })
})

//compareProduct
// vendorRouter.post('/compareProduct', (req, res) => {
//     vendorPanelHandler.compareProduct(req.body,(data) => {
//         res.send(data)
//     })
// })

//getNotification
vendorRouter.get('/getNotification', (req, res) => {
    vendorPanelHandler.getNotification(req.query,req.headers,(data) => {
        res.send(data)
    })
})

//getQrCode
vendorRouter.post('/getQrCode', (req, res) => {
    vendorPanelHandler.getQrCode(req.body,(data) => {
        res.send(data)
    })
})

//dashBoard
vendorRouter.get('/dashBoard', (req, res) => {
    vendorPanelHandler.dashBoard(req.body,(data) => {
        res.send(data)
    })
})
//getUserinfo
vendorRouter.post('/getUserinfo', (req, res) => {
    vendorPanelHandler.getUserinfo(req.body,(data) => {
        res.send(data)
    })
})
//getAllVariant
vendorRouter.get('/getAllVariant/:productId', (req, res) => {
    vendorPanelHandler.getAllVariant(req.params,(data) => {
        res.send(data)
    })
})
//updateVarianceStock
vendorRouter.post('/updateVarianceStock', (req, res) => {
    vendorPanelHandler.updateVarianceStock(req.body,(data) => {
        res.send(data)
    })
})
//editCatogory
vendorRouter.post('/editCatogory', (req, res) => {
    vendorPanelHandler.editCatogory(req.body,(data) => {
        res.send(data)
    })
})
//vendorOrderStatus
vendorRouter.post('/vendorOrderStatus', (req, res) => {
    vendorPanelHandler.vendorOrderStatus(req.body,req.headers,(data) => {
        res.send(data)
    })
})

//inActiveProductList
// vendorRouter.get('/inActiveProducstList', (req, res) => {
//     vendorPanelHandler.inActiveProductLista(req.body,(data) => {
//         res.send(data)
//     })
// })


vendorRouter.post('/deleteCategory', (req, res) => {
    vendorPanelHandler.deleteCategory(req.body,(data) => {
        res.send(data)
    })
})


vendorRouter.post('/deleteSubCategory', (req, res) => {
    vendorPanelHandler.deleteSubCategory(req.body,(data) => {
        res.send(data)
    })
})

vendorRouter.post('/changeProductStatus', (req, res) => {
    vendorPanelHandler.changeProductStatus(req.body,(data) => {
        res.send(data)
    })
})

// countProduct
vendorRouter.post('/changeReviewStatus', (req, res) => {
    vendorPanelHandler.changeReviewStatus(req.body,(data) => {
        res.send(data)
    })
})

// changeReviewStatus
vendorRouter.get('/countProduct', (req, res) => {
    vendorPanelHandler.countProduct(req.body,(data) => {
        res.send(data)
    })
})
module.exports = vendorRouter