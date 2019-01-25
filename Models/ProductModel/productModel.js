var mongoose = require("mongoose")
var brandDescription = mongoose.Schema({
    //!LEVEL 4

    categoryModel: {           //! electronic                        //!LEVEL 1
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productcategory'
    },

    subCategory: {             //! MOBILE / TV / COMPUTER              //!LEVEL 2
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productsubCategory'
    },

    productCategoryId: {      //!touch screen               //!LEVEL 3
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productcategory1'
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'login'
    },
    offer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productOffer',
        default: null
    },
    productName: {
        type: String,
        default: null
    },
    summary:{
        type:String,
        default:null
    },
    sellingPrice: {
        type: String,
        default: null
    },
    color: {                     /* *********color******* */
        type: Array,
        default: null
    },
    size: {                      /* *********size******* */
        type: Array,
        default: null
    },
    material: {                  /* *********material********/
        type: Array,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    image: [],
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'allbrand'
    },
    varianceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productvariance',
        default: null
    },
    tag: [],
    specifications: [{
    }],
    productTry: {
        type: Boolean,
        default: false
    },
    tryImage: {
        type: String,
        default: null
    },
    qrCode: {
        type: String,
        default: null
    },
    inventorySKU: {
        type: String,
        default: null
    },
    quantity: {
        type: String,
        default: null
    },
    costItem: {
        type: String,
        default: null
    },
    weight: {
        type: String,
        default: null
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    inOfferTrue: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE", "REJECT"],
        uppercase: true,
        default: "INACTIVE"
    },
}, { timestamps: true })
module.exports = mongoose.model('productDescription', brandDescription, 'productDescription')