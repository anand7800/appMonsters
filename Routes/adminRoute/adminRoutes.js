var adminRouter = require("express").Router()
var adminHandler = require('../../Services/adminServices/adminServices')
const authHandler = require('../../middleware/verifyToken')


//upload image by base64
adminRouter.post('/uploadImage', (req, res) => {
    adminHandler.uploadImage(req.body, (data) => {
        res.send(data)
    })
})


//Business Detail   
adminRouter.post('/BusinessDetail', authHandler.verifyToken, (req, res) => {
    adminHandler.businessDetails(req.body, req.headers, (data) => {
        res.send(data)
    })
})


//addBrand
adminRouter.post('/addBrand', (req, res) => {
    adminHandler.addBrand(req.body, (data) => {
        res.send(data)
    })
})
//addBrand
adminRouter.get('/getBrandList', (req, res) => {
    adminHandler.getBrandList((data) => {
        res.send(data)
    })
})


//getProductList
adminRouter.get('/getProductList', authHandler.verifyToken,(req, res) => {
    adminHandler.getProductList(req.query,req.headers, (data) => {
        res.send(data)
    })
})

// getBrand
adminRouter.post('/getBrand', (req, res) => {
    adminHandler.getBrand(req.body, (data) => {
        res.send(data)
    })
})
//deleteBrand
adminRouter.post('/deleteBrand', (req, res) => {
    adminHandler.deleteBrand(req.body, (data) => {
        res.send(data)
    })
})

//getUserList
adminRouter.post('/getUserList', (req, res) => {
    adminHandler.getUserList(req.body,(data) => {
        res.send(data)
    })
})



//createVendor
adminRouter.post('/createVendor', (req, res) => {
    adminHandler.createVendor(req.body,(data) => {
        res.send(data)
    })
})

//deleteVendor
adminRouter.post('/deleteVendor', (req, res) => {
    adminHandler.deleteVendor(req.body,(data) => {
        res.send(data)
    })
})

//changeOrderStatus
adminRouter.post('/changeOrderStatus', (req, res) => {
    adminHandler.changeOrderStatus(req.body,(data) => {
        res.send(data)
    })
})
//dashBoard
adminRouter.get('/dashBoard', (req, res) => {
    adminHandler.dashBoard(req.query,(data) => {
        res.send(data)
    })
})
//getUserinfo
adminRouter.post('/getUserinfo', (req, res) => {
    adminHandler.getUserinfo(req.body,(data) => {
        res.send(data)
    })
})
//getAllVariant
adminRouter.get('/getAllVariant/:productId', (req, res) => {
    adminHandler.getAllVariant(req.params,(data) => {
        res.send(data)
    })
})
//updateVarianceStock
adminRouter.post('/updateVarianceStock', (req, res) => {
    adminHandler.updateVarianceStock(req.body,(data) => {
        res.send(data)
    })
})
//editCatogory
adminRouter.post('/editCategory', (req, res) => {
    adminHandler.editCategory(req.body,(data) => {
        res.send(data)
    })
})
//vendorOrderStatus
adminRouter.post('/vendorOrderStatus',authHandler.verifyToken, (req, res) => {
    adminHandler.vendorOrderStatus(req.body,req.headers,(data) => {
        res.send(data)
    })
})




adminRouter.post('/deleteCategory', (req, res) => {
    adminHandler.deleteCategory(req.body,(data) => {
        res.send(data)
    })
})


adminRouter.post('/deleteSubCategory', (req, res) => {
    adminHandler.deleteSubCategory(req.body,(data) => {
        res.send(data)
    })
})

adminRouter.post('/changeProductStatus', (req, res) => {
    adminHandler.changeProductStatus(req.body,(data) => {
        res.send(data)
    })
})

// countProduct
adminRouter.post('/changeReviewStatus', (req, res) => {
    adminHandler.changeReviewStatus(req.body,(data) => {
        res.send(data)
    })
})

// changeReviewStatus
adminRouter.get('/countProduct', (req, res) => {
    adminHandler.countProduct(req.query,(data) => {
        res.send(data)
    })
})

//editSubCategory
adminRouter.post('/editSubCategory', (req, res) => {
    adminHandler.editSubCategory(req.body,(data) => {
        res.send(data)
    })
})
adminRouter.get('/getCategoryId', (req, res) => {
    adminHandler.getCategoryById(req.query,(data) => {
        res.send(data)
    })
})

adminRouter.get('/getBrandById', (req, res) => {
    adminHandler.getBrandById(req.query,(data) => {
        res.send(data)
    })
})

adminRouter.get('/getSubcategoryById', (req, res) => {
    adminHandler.getSubcategoryById(req.query,(data) => {
        res.send(data)
    })
})
module.exports = adminRouter