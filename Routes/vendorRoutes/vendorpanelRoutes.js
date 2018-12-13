var vendorRouter = require("express").Router()
var vendorPanelHandler = require('../../Services/vendorService/vendorPanelService')
const authHandler = require('../../middleware/verifyToken')


// !addCategory
vendorRouter.post('/addCategory', (req, res) => {
    vendorPanelHandler.addCategory(req.body, (data) => {
        res.send(data)
    })
})
//!viewProduct 
vendorRouter.post('/addSubCategory', (req, res) => {
    vendorPanelHandler.addSubCategory(req.body, (data) => {
        res.send(data)
    })
})
//!getCategoryList
vendorRouter.get('/getCategoryList', (req, res) => {
    vendorPanelHandler.getCategoryList(req.query, (data) => {
        res.send(data)
    })
})
//!addCategoryBrand
vendorRouter.post('/addProductCategory', (req, res) => {
    vendorPanelHandler.addProductCategory(req.body, (data) => {
        res.send(data)
    })
})
//!addBrandDescription
vendorRouter.post('/addBrandDescription', (req, res) => {
    vendorPanelHandler.addBrandDescription(req.body, (data) => {
        res.send(data)
    })
})
//!homeScreenAPi
vendorRouter.get('/homeScreenApi', (req, res) => {
    vendorPanelHandler.homeScreenApi(req.query, (data) => {
        res.send(data)
    })
})
// !addOffers
vendorRouter.post('/addOffers', (req, res) => {
    vendorPanelHandler.addTopOffers(req.body, (data) => {
        res.send(data)
    })
})
//!viewProduct @IOS
vendorRouter.get('/productDetails', (req, res) => {
    vendorPanelHandler.productDetails(req.query, (data) => {
        res.send(data)
    })
})
/* //!viewProduct  @android 
vendorRouter.post('/productDetail',(req,res)=>{
    vendorPanelHandler.productDetail(req.body,(data)=>{
        res.send(data)
    })
}) */
//!addReviewAndRating
vendorRouter.post('/addReviewAndRating', (req, res) => {
    vendorPanelHandler.addReviewAndRating(req.body, (data) => {
        res.send(data)
    })
})
//!addToCart  
vendorRouter.post('/addToCart', (req, res) => {
    vendorPanelHandler.addToCart(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!listOfAddCart  
vendorRouter.get('/listOfAddCart', (req, res) => {
    vendorPanelHandler.listOfAddCart(req.query, req.headers, (data) => {
        res.send(data)
    })
})

//!addTowishList  
vendorRouter.post('/addToWishList', (req, res) => {
    vendorPanelHandler.addToWishList(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!uploadImage  
vendorRouter.post('/uploadImage', (req, res) => {
    vendorPanelHandler.uploadImage(req.body, (data) => {
        res.send(data)
    })
})

//!wishList  
vendorRouter.get('/wishList', (req, res) => {
    vendorPanelHandler.wishList(req.query, req.headers, (data) => {
        res.send(data)
    })
})

//!testingApi  
vendorRouter.post('/testingApi', (req, res) => {
    vendorPanelHandler.testingApi(req, (data) => {
        res.send(data)
    })
})

//!deleteWishItem  
vendorRouter.post('/deleteWishItem', (req, res) => {
    vendorPanelHandler.deleteWishItem(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!deleteCart  
vendorRouter.post('/deleteCart', (req, res) => {
    vendorPanelHandler.deleteCart(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!testSms  
vendorRouter.get('/testSms', (req, res) => {
    vendorPanelHandler.testSms(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!placeOrder  
vendorRouter.post('/placeOrder', (req, res) => {
    vendorPanelHandler.placeOrder(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!orderList  
vendorRouter.get('/orderList', (req, res) => {
    vendorPanelHandler.orderList(req.query, req.headers, (data) => {
        res.send(data)
    })
})

//!OpenSubCategory  
vendorRouter.post('/OpenSubCategory', (req, res) => {
    vendorPanelHandler.OpenSubCategory(req.body, (data) => {
        res.send(data)
    })
})

//!productList  
vendorRouter.post('/categoryProductList', (req, res) => {
    vendorPanelHandler.productList(req.body, (data) => {
        res.send(data)
    })
})

//!Business Detail   
vendorRouter.post('/BusinessDetail', authHandler.verifyToken, (req, res) => {
    vendorPanelHandler.businessDetails(req.body, req.headers, (data) => {
        res.send(data)
    })
})
//!search
vendorRouter.post('/search', (req, res) => {
    vendorPanelHandler.searchProduct(req.body, (data) => {
        res.send(data)
    })
})

//!checkoutOrder
vendorRouter.post('/checkoutOrder', (req, res) => {
    vendorPanelHandler.checkoutOrder(req.body, req.headers, (data) => {
        res.send(data)
    })
})

//!addBrand
vendorRouter.post('/addBrand', (req, res) => {
    vendorPanelHandler.addBrand(req.body, (data) => {
        res.send(data)
    })
})
//!addBrand
vendorRouter.get('/getBrandList', (req, res) => {
    vendorPanelHandler.getBrandList((data) => {
        res.send(data)
    })
})

// !!filter product
vendorRouter.post('/filter', (req, res) => {
    vendorPanelHandler.filters(req.body, (data) => {
        res.send(data)
    })
})

//! Add physical store 
vendorRouter.post('/addPhysicalStore', (req, res) => {
    vendorPanelHandler.physicalStore(req.body, (data) => {
        res.send(data)
    })
})

//!getSubcategory
vendorRouter.post('/getSubCategory', (req, res) => {
    vendorPanelHandler.getSubCategory(req.body, (data) => {
        res.send(data)
    })
})
//!getProductCategoryName
vendorRouter.post('/getProductCategoryName', (req, res) => {
    vendorPanelHandler.getProductCategoryName(req.body, (data) => {
        res.send(data)
    })
})

vendorRouter.post('/testingAPI3dec', (req, res) => {
    vendorPanelHandler.testingAPI3dec(req.body, (data) => {
        res.send(data)
    })
})

//!getProductList
vendorRouter.post('/getProductList', (req, res) => {
    vendorPanelHandler.getProductList(req.body, (data) => {
        res.send(data)
    })
})
//!addVariance
vendorRouter.post('/addVariance', (req, res) => {
    vendorPanelHandler.addVariance(req.body, (data) => {
        res.send(data)
    })
})

//!getVariance
vendorRouter.post('/getVariance', (req, res) => {
    vendorPanelHandler.getVariance(req.body, (data) => {
        res.send(data)
    })
})

//!clickFilter
vendorRouter.post('/clickFilter', (req, res) => {
    vendorPanelHandler.clickFilter(req.body, (data) => {
        res.send(data)
    })
})
module.exports = vendorRouter