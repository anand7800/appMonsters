(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/active-offer/active-offer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Components/active-offer/active-offer.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/active-offer/active-offer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Components/active-offer/active-offer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n\n\n  <div id=\"page-content-wrapper\">\n    <div class=\"dashboardConbx\"> \n      <div class=\"recentorder_tablewrap\">\n        <div class=\"filter_search_row clearfix\">\n           <div class=\"filterbtnbx\">\n              <div class=\"dropdown\">\n                  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Filter\n                  <span class=\"caret\"></span></button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Edit</a></li>\n                    <li><a href=\"#\">Delete</a></li>\n                  </ul>\n                </div>\n           </div>\n           <div class=\"filter_search_inputbx\"><span class=\"glyphicon glyphicon-search\"></span><input class=\"form-control\" type=\"text\" placeholder=\"Search Products\" /></div>\n        </div>\n        <div class=\"recentOrderTable\">\n        <div class=\"table-responsive\">\n          <table class=\"table orderlist\">\n            <thead>\n              <tr>\n                <th align=\"left\" valign=\"middle\" width=\"40\"> \n                  <span class=\"checkboxbx\">\n                    <input type=\"checkbox\" id=\"selectall1\">\n                    <label for=\"selectall1\">&nbsp;</label>\n                    </span></th>\n                    <th>Offer Title</th>\n                    <th class=\"text-center\">Start Date</th>\n                    <th class=\"text-center\">End Date</th>\n                    <th class=\"text-center\">Type</th>\n                    <th class=\"text-center\">Users</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td align=\"left\" valign=\"middle\" width=\"40\"><span class=\"checkboxbx\">\n                    <input type=\"checkbox\" id=\"checkrow1\">\n                    <label for=\"checkrow1\">&nbsp;</label>\n                    </span></td>\n                <td align=\"left\" valign=\"middle\">Offers 1</td>\n                <td align=\"center\">13- Dec , 2018</td>\n                <td align=\"center\">31- Dec , 2018</td>\n                <td align=\"center\">%age</td>\n                <td align=\"center\">124</td>\n              </tr>\n              <tr>\n                <td align=\"left\" valign=\"middle\"><span class=\"checkboxbx\">\n                    <input type=\"checkbox\" id=\"checkrow1\">\n                    <label for=\"checkrow1\">&nbsp;</label>\n                    </span></td>\n                <td align=\"left\" valign=\"middle\">Offers 1</td>\n                <td align=\"center\">13- Dec , 2018</td>\n                <td align=\"center\">31- Dec , 2018</td>\n                <td align=\"center\">%age</td>\n                <td align=\"center\">124</td>\n              </tr>\n              <tr>\n                <td align=\"left\" valign=\"middle\"><span class=\"checkboxbx\">\n                    <input type=\"checkbox\" id=\"checkrow1\">\n                    <label for=\"checkrow1\">&nbsp;</label>\n                    </span></td>\n                <td align=\"left\" valign=\"middle\">Offers 1</td>\n                <td align=\"center\">13- Dec , 2018</td>\n                <td align=\"center\">31- Dec , 2018</td>\n                <td align=\"center\">%age</td>\n                <td align=\"center\">124</td>\n              </tr>\n            </tbody>\n          </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  </div>"

/***/ }),

/***/ "./src/app/Components/active-offer/active-offer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/active-offer/active-offer.component.ts ***!
  \*******************************************************************/
/*! exports provided: ActiveOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveOfferComponent", function() { return ActiveOfferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActiveOfferComponent = /** @class */ (function () {
    function ActiveOfferComponent(service) {
        // this.socket.initChat({
        //   userId: "123456789"
        // })
        this.service = service;
        this.service.setTitle('Active Offer');
    }
    ActiveOfferComponent.prototype.ngOnInit = function () {
        // this.service.spinnerShow()
        // this.service.spinnerHide()
    };
    ActiveOfferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-active-offer',
            template: __webpack_require__(/*! ./active-offer.component.html */ "./src/app/Components/active-offer/active-offer.component.html"),
            styles: [__webpack_require__(/*! ./active-offer.component.css */ "./src/app/Components/active-offer/active-offer.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ActiveOfferComponent);
    return ActiveOfferComponent;
}());



/***/ }),

/***/ "./src/app/Components/add-product-screen/add-product-screen.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/Components/add-product-screen/add-product-screen.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/add-product-screen/add-product-screen.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/add-product-screen/add-product-screen.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-side-bar></app-side-bar>\n<app-header></app-header>\n\n<div id=\"page-content-wrapper\">\n  <div class=\"addproducts\">\n     <h3>Welcome <span>Johnathan Doe</span></h3>\n      <div class=\"addproimgbx\"><img src=\"../../../assets/images/add_products.png\" alt=\"\" /></div>\n      <div class=\"addprobtnrow\"><button type=\"button\" class=\"btn btn-primary addpro\" (click)=addProduct()>ADD PRODUCTS TO GET STARTED</button></div>\n  </div>\n</div>  "

/***/ }),

/***/ "./src/app/Components/add-product-screen/add-product-screen.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/add-product-screen/add-product-screen.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddProductScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductScreenComponent", function() { return AddProductScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddProductScreenComponent = /** @class */ (function () {
    function AddProductScreenComponent(route) {
        this.route = route;
    }
    AddProductScreenComponent.prototype.ngOnInit = function () {
    };
    AddProductScreenComponent.prototype.addProduct = function () {
        this.route.navigate(['/addProduct']);
    };
    AddProductScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-product-screen',
            template: __webpack_require__(/*! ./add-product-screen.component.html */ "./src/app/Components/add-product-screen/add-product-screen.component.html"),
            styles: [__webpack_require__(/*! ./add-product-screen.component.css */ "./src/app/Components/add-product-screen/add-product-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddProductScreenComponent);
    return AddProductScreenComponent;
}());



/***/ }),

/***/ "./src/app/Components/add-product/add-product.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/add-product/add-product.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/add-product/add-product.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Components/add-product/add-product.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n  <!--sidebar-End -->\n  <!--Add Products Content Section Start Here-->\n  <div id=\"page-content-wrapper\">\n    <form [formGroup]='myGroup' (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"dashboardConbx\">\n        <!-- <form [formGroup]='myGroup' (ngSubmit)=\"onSubmit()\" > -->\n        <div class=\"addproductheadingrow\">\n          <h3>Add your product</h3>\n          <div class=\"addproheadingbtn\">\n            <button type=\"button\" class=\"btn btn-primary addprobtn cancel\">Cancel</button>\n            <button (click)=\"saveProduct(myGroup.value)\" type=\"button\" [disabled]=\"!myGroup.valid\" class=\"btn btn-primary addprobtn\">Save</button>\n          </div>\n        </div>\n        <!-- <qrcode [qrdata]=\"myAngularxQrCode\" [size]=\"256\" [level]=\"'M'\"></qrcode> -->\n\n        <div class=\"productsviewrow\">\n          <div class=\"row eqWrap equalHMWrap clearfix\">\n            <!--Text Editor Section Start Here-->\n            <div class=\"col-sm-5 texteditorwrap\">\n              <div class=\"form-group\">\n                <label>Title</label>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Product Name Here\" [formControl]=\"myGroup.controls['title']\"\n                  ngDefaultControl />\n                  <p *ngIf=\"myGroup.controls['title'].hasError('required') && myGroup.controls['title'].dirty\"\n                  style=\"color:red;font-size:14px;\">*required</p>\n              </div>\n              <div class=\"form-group\">\n                <label>Description</label>\n                <div class=\"texteditorbox\"><img class=\"img-responsive\" width=\"606\" height=\"255\" />\n\n                  <ckeditor [(ngModel)]=\"ckeditorContent\" [formControl]=\"myGroup.controls['description']\"\n                    ngDefaultControl>\n                    <ckbutton [name]=\"'saveButton'\" [command]=\"'saveCmd'\" (click)=\"save($event)\" [icon]=\"'save.png'\"\n                      [label]=\"'Save Document'\" [toolbar]=\"'clipboard,1'\">\n                    </ckbutton>\n                  </ckeditor>\n                  <p *ngIf=\"myGroup.controls['description'].hasError('required') && myGroup.controls['description'].dirty\"\n                  style=\"color:red;font-size:14px;\">*required</p>\n                </div>\n              </div>\n            </div>\n            <!--Text Editor Section End Here-->\n            <!-- </form> -->\n            <!--Image Upload Section Start Here-->\n            <div class=\"col-sm-7 fileuploadbox\">\n              <label>Product Images</label>\n              <!-- <input type=\"file\" (change)='onFileChanged($event)' accept=\"image/jpeg,image/jpg,image/png\"> -->\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" id='fImage' data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image1']\" ngDefaultControl>\n                    </span> \n                    <p *ngIf=\"myGroup.controls['description'].hasError('required') && myGroup.controls['description'].dirty\"\n                    style=\"color:red;font-size:14px;\">*required</p>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image2']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image3']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image4']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image5']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image6']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image7']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image8']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n            </div>\n            <!--Image Upload Section End Here-->\n          </div>\n        </div>\n\n        <div class=\"row productcategorywrap clearfix\">\n          <div class=\"col-sm-5 padwd10\">\n            <!--Product Category Section Start Here-->\n            <div class=\"productCategorybox\">\n              <div class=\"form-group\">\n                <label>Product Category</label>\n                <select class=\"form-control\" (change)=\"getCatgory($event.target.value)\" [formControl]=\"myGroup.controls['productcategory']\"\n                  ngDefaultControl>\n                  <option value=\"\">Select category</option>\n                  <option *ngFor=\"let c of category\" [value]=\"c._id\">{{c.categoryName}}</option>\n                </select>\n                <p *ngIf=\"myGroup.controls['productcategory'].hasError('required') && myGroup.controls['productcategory'].dirty\"\n                style=\"color:red;font-size:14px;\">*required</p>\n              </div>\n              <div class=\"form-group\">\n                <label>Product Subcategory</label>\n                <select class=\"form-control\" (change)=\"SubCatorydata($event.target.value)\" [formControl]=\"myGroup.controls['productsubcategory']\"\n                  ngDefaultControl>\n                  <option value=\"\">Select SubCategory</option>\n                  <option *ngFor=\"let c of getSubCatorydata\" [value]=\"c._id\">{{c.subCategoryName}}</option>\n                </select>\n                <p *ngIf=\"myGroup.controls['productsubcategory'].hasError('required') && myGroup.controls['productsubcategory'].dirty\"\n                style=\"color:red;font-size:14px;\">*required</p>\n              </div>\n              <div class=\"form-group\">\n                <label>Product Type</label>\n                <select class=\"form-control\" (change)=\"getProductCategoryId($event.target.value)\" [formControl]=\"myGroup.controls['producttype']\"\n                  ngDefaultControl>\n                  <option value=\"\">Select Type</option>\n                  <option *ngFor=\"let c of productCategoryname\" [value]=\"c._id\">{{c.productcategoryName}}</option>\n                </select>\n                  \n\n              </div>\n              <div class=\"form-group\">\n                <label>Product Brand</label>\n                <select class=\"form-control\" (change)=\"getBrandId($event.target.value)\" [formControl]=\"myGroup.controls['productbrand']\"\n                  ngDefaultControl>\n                  <option value=\"\">Select Brand</option>\n                  <option *ngFor=\"let c of getBrandList\" [value]=\"c._id\">{{c.brandName}}</option>\n                </select>\n              </div>\n              <!-- <div class=\"form-group mybrand clearfix\" [hidden]=\"true\">\n                <form [formGroup]='formgroup'>\n                <input type=\"text\" placeholder=\"My Brand\" [formControl]=\"myGroup.controls['addBrand']\" [(ngModel)]=\"brand\"/>\n                <button type=\"submit\" (click)=\"addBrand(myGroup.controls.addBrand.value)\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n                </form>\n              </div> -->\n              <div class=\"form-group clearfix\">\n                <label>Product Tags</label>\n                <tag-input [(ngModel)]='itemsAsObjects' [placeholder]=\"'Enter a Tags'\" [onTextChangeDebounce]=\"500\"\n                  [formControl]=\"myGroup.controls['searchtag']\">\n                </tag-input>\n                <p *ngIf=\"myGroup.controls['searchtag'].hasError('required') && myGroup.controls['searchtag'].dirty\"\n                style=\"color:red;font-size:14px;\">*required</p>\n                <!-- <tag-input [ngModel]=\"itemsAsObjects\" ></tag-input> -->\n              </div>\n            </div>\n            <!--Product Category Section End Here-->\n\n            <!--Modify Variants Table Section Start Here-->\n            <!-- <form [formGroup]='dynamicForm'> -->\n            <div class=\"modify_variants\" *ngIf=\"modification\">\n              <h4>Modify Variants</h4>\n              <table class=\"table mytable\" id=\"thisTable\">\n                <thead>\n                  <tr>\n                    <th align=\"left\" valign=\"middle\">Variant</th>\n                    <th>Price</th>\n                    <th>SKU</th>\n                    <th>Inventory</th>\n                    <th>Image1</th>\n                  </tr>\n                </thead>\n                <tbody>\n\n\n                  <!-- ![(ngModel)]='combinationOfVariants' ngDefaultControl -->\n                  <!-- <tr formArrayName=\"items\" *ngFor=\"let item of dynamicForm.get('items').controls;  let in = index\" >\n                      <td [formGroupName]=\"in\">\n                        <span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id={{in}} />\n                          <label for={{in}}>&nbsp;</label>\n                        </span>\n                        <span class=\"sizenm\" >{{dataLoop[in]}}</span> <span class=\"colornm\"></span>\n                      </td>\n                      <td><input class=\"form-control\" type=\"text\" placeholder=\"230\" /></td>\n                      <td><input class=\"form-control\" type=\"text\" placeholder=\"BHJ89\" /></td>\n                      <td><input class=\"form-control\" type=\"text\" placeholder=\"1234\" /></td>\n                    </tr> -->\n                  <!-- ![(ngModel)]='combinationOfVariants' ngDefaultControl -->\n                  <!-- {{dataLoop|json}} -->\n                  <tr formArrayName=\"variance\" *ngFor=\"let item of myGroup.get('variance').controls; let i = index;\"\n                    class=\"pickvalue\">\n                    <ng-container [formGroupName]=\"i\">\n                      <td>\n                        <span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id={{i}} formControlName=\"checked\" />\n                          <label for={{i}}>&nbsp;</label>\n                        </span>\n                        <span class=\"sizenm\">{{item?.controls.size.value}}</span>&nbsp;\n                        <span class=\"sizenm\">{{item?.controls.material.value}}</span>&nbsp;\n                        <span class=\"colornm\">{{item?.controls.color.value}}</span>&nbsp;\n                        <!-- <span class=\"colornm\">{{item[2]}}</span>&nbsp; -->\n                      </td>\n                      <td id=\"variancePrice\"><input class=\"form-control variancePrice\" type=\"text\" placeholder=\"230\"\n                          formControlName=\"price\" /></td>\n                        \n                      <td><input class=\"form-control varianceSKU\" type=\"text\" placeholder=\"BHJ89\" formControlName=\"SKU\" />\n                        \n                        <p *ngIf=\"this.myGroup.controls['variance']['controls'][0]['controls']['price'].hasError('required') && this.myGroup.controls['variance']['controls'][0]['controls']['price'].dirty\"\n                          style=\"color:red;font-size:14px;\">*required</p>\n                        <p *ngIf=\"this.myGroup.controls['variance']['controls'][0]['controls']['price'].hasError('pattern') && this.myGroup.controls['variance']['controls'][0]['controls']['price'].dirty\"\n                          style=\"color:red;font-size:14px;\">*Please\n                          Enter number.</p>\n\n                      </td>\n\n                      <td><input class=\"form-control varianceInventory\" type=\"text\" placeholder=\"1234\" formControlName=\"quantity\" />\n                        <p *ngIf=\"this.myGroup.controls['variance']['controls'][0]['controls']['quantity'].hasError('required') && this.myGroup.controls['variance']['controls'][0]['controls']['quantity'].dirty\"\n                        style=\"color:red;font-size:14px;\">*required</p>\n                      <p *ngIf=\"this.myGroup.controls['variance']['controls'][0]['controls']['quantity'].hasError('pattern') && this.myGroup.controls['variance']['controls'][0]['controls']['quantity'].dirty\"\n                        style=\"color:red;font-size:14px;\">*Please\n                        Enter number.</p>\n\n                      </td>\n\n                      <td> <input id=\"input-22\" type=\"file\" name=\"...\" (change)='readThis($event, i)' accept=\".jpg,.gif,.png\"\n                          ngDefaultControl multiple></td>\n                    </ng-container>\n                  </tr>\n                  <!-- {{dynamicForm.value|json}} -->\n                  <!-- <tr>\n                  <td><span class=\"checkboxbx\">\n                      <input type=\"checkbox\" id=\"test2\" />\n                      <label for=\"test2\">&nbsp;</label>\n                    </span><span class=\"sizenm\">XS</span> <span class=\"colornm\">Pink</span></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"230\" /></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"BHJ89\" /></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"1234\" /></td>\n                </tr>\n                <tr>\n                  <td><span class=\"checkboxbx\">\n                      <input type=\"checkbox\" id=\"test3\" />\n                      <label for=\"test3\">&nbsp;</label>\n                    </span><span class=\"sizenm\">XS</span> <span class=\"colornm\">Blue</span></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"230\" /></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"BHJ89\" /></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"1234\" /></td>\n                </tr> -->\n                </tbody>\n              </table>\n            </div>\n            <!-- </form> -->\n            <!--Modify Variants Table Section End Here-->\n          </div>\n          <div class=\"col-sm-7 padwd10\">\n            <div class=\"row clearfix\">\n              <!--Selling Price Section Start Here-->\n              <div class=\"col-sm-6 pdrightwd10\">\n                <div class=\"productCategorybox\">\n                  <div class=\"form-group\">\n                    <label>Selling Price</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"499\" [(ngModel)]=\"SellingPrice\" [formControl]=\"myGroup.controls['sellingprice']\" />\n                    <p *ngIf=\"myGroup.controls['sellingprice'].hasError('required') && myGroup.controls['sellingprice'].dirty\"\n                      style=\"color:red;font-size:14px;\">*required</p>\n                    <p *ngIf=\"myGroup.controls['sellingprice'].hasError('pattern') && myGroup.controls['sellingprice'].dirty\"\n                      style=\"color:red;font-size:14px;\">*Please\n                      Enter number.</p>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Cost/Item</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"399\" [formControl]=\"myGroup.controls['costprice']\" />\n                    <p *ngIf=\"myGroup.controls['costprice'].hasError('required') && myGroup.controls['costprice'].dirty\"\n                      style=\"color:red;font-size:14px;\">*required</p>\n                    <p *ngIf=\"myGroup.controls['costprice'].hasError('pattern') && myGroup.controls['costprice'].dirty\"\n                      style=\"color:red;font-size:14px;\">*Please\n                      Enter number.</p>\n\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Item Weight</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"0.5\" [formControl]=\"myGroup.controls['itemweight']\" />\n                    <p *ngIf=\"myGroup.controls['itemweight'].hasError('required') && myGroup.controls['itemweight'].dirty\"\n                      style=\"color:red;font-size:14px;\">*required</p>\n                    <p *ngIf=\"myGroup.controls['itemweight'].hasError('pattern') && myGroup.controls['itemweight'].dirty\"\n                      style=\"color:red;font-size:14px;\">*Please\n                      Enter number.</p>\n                  </div>\n                </div>\n                <!--Selling Price Section End Here-->\n              </div>\n              <!--Inventory Section Start Here-->\n              <div class=\"col-sm-6 pdleftwd10\">\n                <div class=\"productCategorybox\">\n                  <div class=\"form-group\">\n                    <label>Inventory SKU</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"BUI\" [formControl]=\"myGroup.controls['InventorySKU']\" />\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Quantity</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"50\" [formControl]=\"myGroup.controls['quantity']\" />\n                    <p *ngIf=\"myGroup.controls['quantity'].hasError('required') && myGroup.controls['quantity'].dirty\"\n                      style=\"color:red;font-size:14px;\">*required</p>\n                    <p *ngIf=\"myGroup.controls['quantity'].hasError('pattern') && myGroup.controls['quantity'].dirty\"\n                      style=\"color:red;font-size:14px;\">*Please\n                      Enter number.</p>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Product Type</label>\n                    <select class=\"form-control\" [formControl]=\"myGroup.controls['trialPack']\">\n                      <option value=\"Avaiable for try\">Avaiable for try</option>\n                      <option value=\"saab\">Saab</option>\n                      <option value=\"mercedes\">Mercedes</option>\n                      <option value=\"audi\">Audi</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n              <!--Inventory Section End Here-->\n            </div>\n\n            <!--Variants Section Start Here-->\n            <div class=\"row clearfix\" *ngIf='true'>\n              <div class=\"col-sm-12\">\n                <div class=\"productCategorybox\">\n                  <div class=\"variants\">\n                    <h4>Variants</h4>\n                    <div class=\"sminfo\">Swimming hundreds of feet beneath the ocean’s surface in many parts of the\n                      world\n                      are prolific aey construct one or more spacious houses” that can exceed three feet in length.\n                    </div>\n                    <div class=\"variantsoption\">\n                      <div class=\"row clearfix\">\n                        <div class=\"col-sm-3\">\n                          <label>Option name</label>\n                        </div>\n                        <div class=\"col-sm-6\">\n                          <label>Option Values</label>\n                        </div>\n                        <div class=\"col-sm-3\">\n                          <label>&nbsp;</label>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row clearfix\">\n                          <!-- <div class=\"col-sm-3\">\n                          <input class=\"form-control\" type=\"text\" value=\"Color\" (change)='getOptionKey($event.target.value)' />\n                        </div>\n                        <div class=\"col-sm-6\">\n                          <tag-input [(ngModel)]='itemsAsObjects' [placeholder]=\"'Enter a Tags'\" [onTextChangeDebounce]=\"500\"></tag-input>\n                        </div> -->\n                          <!-- <div class=\"col-sm-3\">\n                          <a (click)=\"createComponent()\">Add Option</a>\n                        </div> -->\n\n\n                          <!-- <button type=\"button\" (click)=\"createComponent()\">\n                          I am Parent, Create Child\n                        </button> -->\n\n                          <!-- //!asdfj -->\n                          <div>\n                            <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"saveVariants(myForm)\" ngDefaultControl>\n                              <div class=\"form-group\">\n                                <!-- <label>Front End</label> -->\n                                <!-- <input type=\"text\" class=\"form-control\" formControlName=\"front\"> -->\n                              </div>\n                              <div formArrayName=\"languages\">\n\n                                <div *ngFor=\"let language of myForm.controls.languages.controls; let i=index\" class=\"panel panel-default\">\n\n                                  <div class=\"panel-heading variantsoption\">\n                                    <span>Variant {{i + 1}}</span>\n                                    <span class=\"glyphicon glyphicon-remove pull-right\" *ngIf=\"myForm.controls.languages.controls.length > 1\"\n                                      (click)=\"removeLanguage(i)\"></span>\n                                  </div>\n                                  <div class=\"panel-body\" [formGroupName]=\"i\">\n                                    <div class=\"form-group col-xs-6\">\n                                      <!-- <label>Option</label> -->\n                                      <!-- <input type=\"text\" class=\"form-control\" formControlName=\"React\"></div> -->\n                                      <select class=\"form-control dropdown\" formControlName=\"varianceKey\" id='varianceValue'>\n                                        <option [hidden]=\"false\" value=\"color\" selected>Color</option>\n                                        <option value=\"size\">Size</option>\n                                        <option value=\"material\">Material</option>\n\n                                        <!-- <option  *ngFor=\"let c of varianceOption\" [value]=\"c\" selected>{{c}}</option> -->\n\n                                      </select>\n\n\n                                    </div>\n\n                                    <div class=\"form-group col-xs-6\">\n                                      <!-- <label>Value</label> -->\n                                      <!-- <input type=\"text\" class=\"form-control\" formControlName=\"Angular\"> -->\n                                      <tag-input formControlName=\"varianceValue\" [placeholder]=\"'Enter a Tags'\"\n                                        [onTextChangeDebounce]=\"500\"></tag-input>\n                                    </div>\n\n                                  </div>\n                                </div>\n                              </div>\n                              <!-- {{check}} {{count}} -->\n                              <div class=\"margin-20\" *ngIf=\"check\">\n\n                                <a (click)=\"addLanguage(i)\" type=\"button\" id=\"btn\" id=\"variantbutton\" style=\"cursor: default\">Add\n                                  another variants </a>\n                              </div>\n                              <div class=\"margin-20\">\n                                <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!myForm.valid\">Submit</button></div>\n                              <div class=\"clearfix\"></div>\n                              <div class=\"margin-20\">\n                                <!-- <div>myForm details:-</div> -->\n                                <!-- <pre>Is myForm valid?: <br>{{myForm.valid | json}}</pre> -->\n                                <!-- <pre>form value: <br>{{myForm.value | json}}</pre> -->\n                                <!-- <p> {{dataLoop|json}}</p> -->\n                              </div>\n                            </form>\n                          </div>\n                          <!--//! asdfasdf -->\n                        </div>\n                      </div>\n                      <div>\n                        <ng-template #viewContainerRef></ng-template>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--Variants Section End Here-->\n\n          </div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n  <!-- </form> -->\n  <!--Add Products Section End Here-->"

/***/ }),

/***/ "./src/app/Components/add-product/add-product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/add-product/add-product.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(_fb, formBuilder, service) {
        // this.myAngularxQrCode = 'Your QR code data string';
        // this.dynamicForm = this._fb.group({
        //   items: this._fb.array([this.createItems()])
        // })
        this._fb = _fb;
        this.formBuilder = formBuilder;
        this.service = service;
        // @ViewChild('viewContainerRef', { read: ViewContainerRef })
        // varianceOption = ["color", "size", "material"]
        // combinationOfVariants: any
        // VCR: ViewContainerRef;
        this.index = 0;
        // itemsAsObjectss: any;
        this.varianceObj = [];
        this.tagChips = [];
        this.imageData = [];
        this.temp = [];
        this.dataLoop = [];
        this.result4 = [];
        this.check = true;
        this.modification = false;
        this.myAngularxQrCode = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.count = 0;
        this.smartGlasses = [{}];
        // this.formgroup = formBuilder.group({
        //   brand: ['']
        // });
        //   this.myGroup = new FormGroup({
        //     title: new FormControl()
        //  });
        this.myGroup = formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image2: [''],
            image3: [''],
            image4: [''],
            image5: [''],
            image6: [''],
            image7: [''],
            image8: [''],
            imageArray: this.formBuilder.array([]),
            productcategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            productsubcategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            producttype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            productbrand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // addBrand: [''],
            searchtag: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // combinationOfVariants: [''],
            sellingprice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')])],
            costprice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')])],
            itemweight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')])],
            InventorySKU: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')])],
            trialPack: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // brand: [''],
            variance: this.formBuilder.array([])
        });
    }
    AddProductComponent.prototype.createItem = function (item) {
        return this.formBuilder.group({
            size: [item.size],
            color: [item.color],
            material: [item.material],
            checked: [true],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')])],
            SKU: [''],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')])],
            varianceImage: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this._fb.group({
            languages: this._fb.array([
                this.initlanguage(),
            ])
        });
        this.getCategoryList();
        this.service.optionObs.subscribe(function (response) {
            // console.log('response => ', response)
            _this.getCombination(response);
        });
    };
    AddProductComponent.prototype.initlanguage = function () {
        // console.log("$$$$$$4", this.myForm)
        return this._fb.group({
            varianceKey: [''],
            varianceValue: ['']
        });
    };
    AddProductComponent.prototype.addLanguage = function (i) {
        // this.check = "true"
        this.modification = true;
        if (true) {
            var control = this.myForm.controls['languages'];
            control.push(this.initlanguage());
        }
        this.count++;
        if (this.count == 3) {
            this.check = false;
        }
        console.log(this.check, "###", this.count);
        $('#varianceValue option').on('click', function () {
            console.log("tisss", $('this'));
            $("this").attr('disabled', true);
        });
        $('#variantbutton').click(function () {
            $('#varianceValue option:selected').remove();
        });
    };
    AddProductComponent.prototype.removeLanguage = function (i) {
        var control = this.myForm.controls['languages'];
        control.removeAt(i);
        this.count--;
        this.check = true;
        console.log(this.count, this.check);
    };
    //!save variants
    AddProductComponent.prototype.saveVariants = function (val) {
        var _this = this;
        this.modification = true;
        console.log(JSON.stringify(val.value.languages));
        var temp = {
            push: val.value.languages
        };
        this.service.postApi('vendor/combination', temp, 0).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                // this.service.showSuccess('found')
                _this.dataLoop = response['result'];
                // console.log('-----------------', this.dataLoop)
                _this.myGroup.get('variance').reset();
                for (var i = 0; i < _this.dataLoop.length; i++) {
                    _this.addItem(_this.dataLoop[i]);
                }
                // console.log(this.category)
            }
            else {
                _this.service.showError('Invalid Email');
            }
        }, function (error) {
            _this.service.showError('Server Error');
        });
    };
    AddProductComponent.prototype.addItem = function (item) {
        this.items = this.myGroup.get('variance');
        this.items.push(this.createItem(item));
    };
    //!getCategory
    AddProductComponent.prototype.getCatgory = function (categoryId) {
        // console.log("Event-->", categoryId);
        this.getSubCatoryList(categoryId);
        this.getBrandListdata();
    };
    AddProductComponent.prototype.SubCatorydata = function (subcategoryId) {
        // console.log("Event------------>", subcategoryId);
        this.subCategoryID = subcategoryId;
        this.getProductName(subcategoryId);
        // console.log("data is binding-------->",this.itemsAsObjects)
    };
    AddProductComponent.prototype.getBrandId = function (event) {
        // console.log("*&^#$%^765434567876543456765434567654", event)
        this.BrandId = event;
    };
    //!getCategoryList
    AddProductComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.service.getApi('vendor/getCategoryList', 0).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                // this.service.showSuccess('found')
                _this.category = response['result'];
                // console.log(this.category)
            }
            else {
                _this.service.showError('Invalid Email');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            // console.log('error occur', error)
            _this.service.showError('Server Error');
        });
    };
    //!getsubCatoryList
    AddProductComponent.prototype.getSubCatoryList = function (categoryId) {
        var _this = this;
        // console.log("function called")
        this.postSubCatory = {
            categoryModel: categoryId,
            lang: "en"
        };
        this.service.postApi('vendor/getSubCategory', this.postSubCatory, 0).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                // this.service.showSuccess('data is find')
                _this.getSubCatorydata = response['result'];
            }
            else {
                _this.service.showError('Invalid Email');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            // console.log('error occur', error)
            _this.service.showError('Server Error');
        });
    };
    //!getproduct
    AddProductComponent.prototype.getProductName = function (subCatId) {
        var _this = this;
        var temp = {
            subCategoryId: subCatId
        };
        this.service.postApi('vendor/getProductCategoryName', temp, 0).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.productCategoryname = response['result'];
            }
            else {
                _this.service.showError('error');
            }
        }, function (error) {
            _this.service.showError('Server Error');
        });
    };
    //!getBrandList
    AddProductComponent.prototype.getBrandListdata = function () {
        var _this = this;
        // console.log("function called")
        this.service.getApi('admin/getBrandList', 0).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                // this.service.showSuccess("get bandlist")
                // console.log("asdfasdf", response)
                _this.getBrandList = response['result'];
            }
            else {
                _this.service.showError('Invalid Email');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            // console.log('error occur', error)
            _this.service.showError('Server Error');
        });
    };
    // !getProductCategoryId
    AddProductComponent.prototype.getProductCategoryId = function (_ID) {
        // console.log("getProductlist enter", _ID)
        this.productCategoryId = _ID;
    };
    //!addbrand 
    AddProductComponent.prototype.addBrand = function (data) {
        var _this = this;
        console.log("#########33", data);
        // return
        var temp = {
            brandName: data
        };
        this.service.postApi('admin/addBrand', temp, 0).subscribe(function (response) {
            console.log("asdfasdfasdfas");
            if (response['statusCode'] == 200) {
                // this.service.showSuccess("BRAND ADDED")
                // console.log("asdfasdf", response)
                _this.getBrandListdata();
            }
            else {
                _this.service.showError('Invalid Email');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    AddProductComponent.prototype.onFileChanged = function (evt) {
        var file = evt.target.files[0];
        if (file) {
            console.log('2222', file);
            var reader = new FileReader();
            reader.onload = this.handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
            // console.log(this.base64textString)
        }
    };
    AddProductComponent.prototype.handleReaderLoaded = function (e) {
        this.imageData.push('data:image/png;base64,' + btoa(e.target.result));
        // this.dataLoop[inde
        // console.log('this is multiple image', this.imageData)
    };
    AddProductComponent.prototype.readThis = function (evt, i) {
        var _this = this;
        var a = [];
        console.log("readthis", typeof evt.target.files['length']);
        for (var index = 0; index < evt.target.files['length']; index++) {
            var file = evt.target.files[index];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (file) {
                    var url = btoa(file.target['result']);
                    a.push('data:image/png;base64,' + url);
                    _this.myGroup.controls['variance'].controls[i].controls['varianceImage'].setValue(a);
                };
                reader.readAsBinaryString(file);
            }
        }
    };
    //!getCombination
    AddProductComponent.prototype.getCombination = function (res) {
        console.log('this => ', res.options, typeof res.options);
        this.optionValue = res.optionvalue;
    };
    //!save Product
    AddProductComponent.prototype.saveProduct = function (val) {
        var _this = this;
        console.log('form value =>>', this.myGroup.controls['variance']['controls'][0]['controls']['price']);
        // console.log("#form data", val)
        // console.log("form build==>>", this.myGroup)
        this.itemsAsObjects.forEach(function (element) {
            // console.log(element.value)
            _this.tagChips.push(element.value);
        });
        // console.log("this is data of ck editor", this.ckeditorContent);
        // console.log(this.tagChips)
        var temp = {
            sellerId: localStorage.getItem('token'),
            productCategoryId: val.producttype,
            subCategoryId: val.productsubcategory,
            brandId: val.productbrand,
            productName: val.title,
            // sellingPrice: /,
            categoryId: val.productcategory,
            description: val.description,
            variants: val.variance,
            tag: this.tagChips,
            color: val.variance[0].color,
            sellingPrice: val.sellingPrice,
            qrCode: this.myAngularxQrCode,
            image: this.imageData,
            lang: "en",
            //!addon
            // inventory:"",
            SKU: "",
            inventorySKU: val.InventorySKU,
            costItem: val.costprice,
            inventory: val.quantity,
            weight: val.itemweight,
            productType: val.trialPack
        };
        // console.log("temp", JSON.stringify(temp))
        // return
        this.service.postApi('vendor/addProduct', temp, 1).subscribe(function (response) {
            _this.service.spinnerShow();
            if (response['statusCode'] == 200) {
                console.log("33333", response);
                _this.service.spinnerHide();
                _this.service.showSuccess("Product Added");
                console.log("asdfasdf", response);
                // this.getBrandListdata()
            }
            else {
                _this.service.spinnerShow();
                console.log(response['result']);
                _this.service.showError('SOME THING WENT TO WRONG');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    AddProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/Components/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/Components/add-product/add-product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/Components/allorders/allorders.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Components/allorders/allorders.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/allorders/allorders.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Components/allorders/allorders.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Dashboard Screen Start Here-->\n<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n  <!--sidebar-End -->\n\n  <div id=\"page-content-wrapper\">\n    <div class=\"dashboardConbx\">\n   <!--Recent Order Table Section Start Here-->\n   <div class=\"recentorder_tablewrap\">\n    <h4>Product List</h4>\n    <div class=\"recentOrderTable\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <!-- <th align=\"left\" valign=\"middle\"><input type=\"checkbox\" name=\"checkboxall\" value=\"checkboxAll\" /></th> -->\n            <th>Sr.No</th>\n            <th>Product</th>\n            <th>Customer Name</th>\n            <th>City</th>\n            <th>Status</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let product of apiData;let i = index\">\n            <!-- <td align=\"left\" valign=\"middle\"><input type=\"checkbox\" name=\"checkbox1\" value=\"checkbox1\"></td> -->\n            <td align=\"left\" valign=\"middle\">{{i+1}}</td>\n            <td align=\"left\" valign=\"middle\"><img class=\"pro_img\" src=\"{{product.productImage}}\" alt=\"\" />{{product.productDetail}}</td>\n            <td>{{product.customerName}}</td>\n            <td>{{product.customerAddress}}</td>\n            <td>{{product.status}}</td>\n          </tr>\n         </tbody>\n      </table>\n    </div>\n  </div>\n  <!--Recent Order Table Section End Here--> \n  </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/Components/allorders/allorders.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/allorders/allorders.component.ts ***!
  \*************************************************************/
/*! exports provided: AllordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllordersComponent", function() { return AllordersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllordersComponent = /** @class */ (function () {
    function AllordersComponent(service) {
        this.service = service;
    }
    AllordersComponent.prototype.ngOnInit = function () {
        this.getOrderList();
    };
    AllordersComponent.prototype.getOrderList = function () {
        var _this = this;
        var temp = {
            lang: "eng"
        };
        this.service.postApi('vendor/vendorOrderList', temp, 1).subscribe(function (response) {
            _this.service.spinnerShow();
            if (response['statusCode'] == 22200) {
                _this.service.spinnerHide();
                // this.service.showSuccess("getProduct")
                // console.log("asdfasdf", response['result'])
                _this.apiData = response['result'];
                _this.rows = response['result'];
                _this.temp = response['result'].slice();
                console.log('$$$$$$$sdfsdf$$$$$$$$$$$', _this.apiData);
                // this.getBrandListdata()
            }
            else {
                // console.log(response['result'])
                _this.service.showError('Not found ');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            // this.service.spinnerShow()
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    AllordersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allorders',
            template: __webpack_require__(/*! ./allorders.component.html */ "./src/app/Components/allorders/allorders.component.html"),
            styles: [__webpack_require__(/*! ./allorders.component.css */ "./src/app/Components/allorders/allorders.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AllordersComponent);
    return AllordersComponent;
}());



/***/ }),

/***/ "./src/app/Components/allproducts/allproducts.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/allproducts/allproducts.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/allproducts/allproducts.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Components/allproducts/allproducts.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Dashboard Screen Start Here-->\n<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n  <!--sidebar-End -->\n\n  <div id=\"page-content-wrapper\">\n    <div class=\"dashboardConbx\">\n      <!--All Products List Showing Start Here-->\n      <div class=\"allproductslistingwarp\">\n          <div class=\"products_alllist_numrow\">\n            <div class=\"row clearfix\" >\n              <div class=\"col-sm-4\">\n                <div class=\"pro_digitbx add_pro\">\n                  <h2>{{getProductCount}}</h2>\n                  <h3>Added Products</h3>\n                </div>\n              </div>\n              <div class=\"col-sm-4\">\n                <div class=\"pro_digitbx brands\">\n                  <h2>{{getbrandcount }}</h2>\n                  <h3>Brands</h3>\n                </div>\n              </div>\n              <div class=\"col-sm-4\">\n                <div class=\"pro_digitbx categories\">\n                  <h2>{{getCategoryCount}}</h2>\n                  <h3>Categories</h3>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"imports_row clearfix\">\n            <h3>Products</h3>\n            <div class=\"importsfile\"><span class=\"glyphicon glyphicon-download-alt\"></span> <span class=\"imports_text\">Import</span></div>\n          </div>\n        </div>\n      <!--All Products List Showing End Here-->\n\n   <div class=\"recentorder_tablewrap\" *ngIf=\"apiData;else notFound\">\n     <!--Filter Search Row Start Here-->\n      <div class=\"filter_search_row clearfix\">\n          <div class=\"filterbtnbx\">\n             <div class=\"dropdown\">\n                 <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Filter\n                 <span class=\"caret\"></span></button>\n                 <ul class=\"dropdown-menu\">\n                   <li><a href=\"#\">Edit</a></li>\n                   <li><a href=\"#\">Delete</a></li>\n                 </ul>\n               </div>\n          </div>\n          <div class=\"filter_search_inputbx\"><span class=\"glyphicon glyphicon-search\"></span><input class=\"form-control\" type=\"text\" placeholder=\"Search Products\" /></div>\n       </div>\n    <!--Filter Search Row End Here-->\n\n    <div class=\"recentOrderTable\">\n      <div class=\"table-responsive\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th align=\"left\" valign=\"middle\" width=\"40\">\n              <span class=\"checkboxbx\">\n                <input type=\"checkbox\" id=\"selectall\">\n                <label for=\"selectall\">&nbsp;</label>\n                </span></th>\n                  <th>Product</th>\n                  <th>Inventory</th>\n                  <th>Type/Category</th>\n                  <th>Brand</th>\n              </tr>\n        </thead>\n        <tbody>\n          \n          <tr *ngFor=\"let product of apiData;let i = index\">\n            <td align=\"left\" valign=\"middle\" width=\"40\">\n              <span class=\"checkboxbx\">\n                <input type=\"checkbox\" id={{i}}>\n                <label for={{i}}>&nbsp;</label>\n                </span></td>\n            <td class=\"lineH\" align=\"left\" valign=\"middle\" width=\"400\">\n              <div class=\"pro_img_wd\"><img class=\"pro_img\" src=\"{{product.image}}\" alt=\"\" /></div><div class=\"pro_info_rw\">{{product.product}}</div></td>\n            <td>{{product.inventorySKU}}</td>\n            <td>{{product.getProductCategoryName?product.getProductCategoryName:\"NULL\"}}</td>\n            <td>{{product.brand}}</td>\n          </tr>\n         </tbody>\n      </table>\n    </div>\n    </div>\n  </div>\n<!-- else condition -->\n  <ng-template #notFound>\n    <!-- <form [formGroup]='formgroup'> -->\n    NOT ADDED YET \n</ng-template>\n<!-- else condition -->\n\n  </div>\n   \n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/Components/allproducts/allproducts.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/allproducts/allproducts.component.ts ***!
  \*****************************************************************/
/*! exports provided: AllproductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllproductsComponent", function() { return AllproductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllproductsComponent = /** @class */ (function () {
    function AllproductsComponent(service) {
        this.service = service;
        this.rows = [];
        this.selected = [];
        this.getproductList();
    }
    AllproductsComponent.prototype.ngOnInit = function () {
        this.getBrandList();
        this.getCategory();
        // console.log("this.getproductList()", this.apiData)
        //     console.log('---------->>>', this.rows)
    };
    AllproductsComponent.prototype.getproductList = function () {
        var _this = this;
        var temp = {
            lang: "eng"
        };
        this.service.getApi('admin/getProductList', 1).subscribe(function (response) {
            // console.log("response-======>>>",response)
            if (response['statusCode'] == 200) {
                _this.getProductCount = response['result'];
                // console.log(this.getbrandcount.length)
                _this.getProductCount = _this.getProductCount.length;
                _this.apiData = response['result'];
                // this.rows = response['result'];
                // this.temp = [...response['result']];
                // console.log('$$$$$$$sdfsdf$$$$$$$$$$$', this.apiData)
                // this.getBrandListdata()
            }
            else {
                // console.log(response['result'])
                _this.getProductCount = 0;
                _this.apiData = false;
                console.log('this.apidtaa', _this.apiData);
                _this.service.showError('NOT FOUND');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    //getbrandList
    AllproductsComponent.prototype.getBrandList = function () {
        var _this = this;
        this.service.getApi('admin/getBrandList', 0).subscribe(function (response) {
            // console.log("response-======>>>",response)
            if (response['statusCode'] == 200) {
                // console.log(response['result'])
                _this.getbrandcount = response['result'];
                // console.log(this.getbrandcount.length)
                _this.getbrandcount = _this.getbrandcount.length;
            }
            else {
                // console.log(response['result'])
                _this.getbrandcount = false;
                _this.service.showError('NOT FOUND');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    //getCategoryList
    AllproductsComponent.prototype.getCategory = function () {
        var _this = this;
        this.service.getApi('vendor/getCategoryList', 0).subscribe(function (response) {
            // console.log("response-======>>>",response)
            if (response['statusCode'] == 200) {
                // console.log(response['result'])
                _this.getCategoryCount = response['result'];
                // console.log(this.getbrandcount.length)
                _this.getCategoryCount = _this.getCategoryCount.length;
            }
            else {
                _this.getCategoryCount = 0;
                // console.log(response['result'])
                _this.service.showError('NOT FOUND');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    AllproductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allproducts',
            template: __webpack_require__(/*! ./allproducts.component.html */ "./src/app/Components/allproducts/allproducts.component.html"),
            styles: [__webpack_require__(/*! ./allproducts.component.css */ "./src/app/Components/allproducts/allproducts.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AllproductsComponent);
    return AllproductsComponent;
}());



/***/ }),

/***/ "./src/app/Components/analytics/analytics.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Components/analytics/analytics.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/analytics/analytics.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Components/analytics/analytics.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n\n\n\n\n\n\n<div id=\"page-content-wrapper\">\n  <div class=\"dashboardConbx\">\n    <div class=\"analyticsheading row clearfix\">\n      <div class=\"col-sm-8 col-lg-9\">\n        <div class=\"row clearfix\">\n          <div class=\"col-sm-6 storesession\">\n            <div class=\"seesiongraphwrap paddrw\">\n              <div class=\"sessionheading\">\n                <h4>online store sessions</h4>\n                <span class=\"btn-min minus collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n                  aria-controls=\"navbar\">-</span>\n                <span class=\"btn-min plus\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n                  aria-controls=\"navbar\">+</span>\n              </div>\n              <div class=\"collapse in analyticsgraph\" id=\"navbar\">\n                <img src=\"../../../assets/images/analytics-graph.jpg\" alt=\"Analytics Graph\" />\n              </div>\n            </div>\n            <div class=\"sessionwrap paddrw\">\n              <h4>sessions over time</h4>\n              <div class=\"sminfo\">Collaboratively administrate empowered markets via plug-and-play networks.\n                Dramtically visualize customer directed convergence without revolutionary ROI.</div>\n              <div class=\"linkrow\"><a href=\"javascript:void(0);\" class=\"viewclass\">view reports</a></div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 onlinestore\">\n            <div class=\"storeheadings paddrw\">\n              <h4>Online store sessions by device type</h4>\n              <div class=\"sminfo\">Collaboratively administrate empowered markets via plug-and-play networks.\n                Dramtically visualize customer directed convergence without revolutionary ROI.</div>\n              <div class=\"linkrow\"><a href=\"javascript:void(0);\" class=\"viewclass\">view reports</a></div>\n            </div>\n            <div class=\"storeheadings paddrw\">\n              <h4>Online store sessions by Location</h4>\n              <div class=\"sminfo\">Collaboratively administrate empowered markets via plug-and-play networks.\n                Dramtically visualize customer directed convergence without revolutionary ROI.</div>\n              <div class=\"linkrow\"><a href=\"javascript:void(0);\" class=\"viewclass\">view reports</a></div>\n            </div>\n            <div class=\"storeheadings paddrw\">\n              <h4>Extra Random Stat Space</h4>\n              <div class=\"sminfo\">Collaboratively administrate empowered markets via plug-and-play networks.\n                Dramtically visualize customer directed convergence without revolutionary ROI.</div>\n              <div class=\"linkrow\"><a href=\"javascript:void(0);\" class=\"viewclass\">view reports</a></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 col-lg-3 topproducts\">\n        <div class=\"paddrw\">\n          <h4>Top Products by units Sold</h4>\n          <div class=\"productdetailswrap\">\n            <div class=\"productlisting clearfix\">\n              <div class=\"proimg\">\n                <img src=\"../../../assets/images/sold_pro.jpg\" alt=\"proimg\" />\n              </div>\n              <div class=\"aboutproductwrap\">\n                <div class=\"soldpro_sminfo\">deadpool mask half sleeve t-shirt(DPL)</div>\n                <div class=\"item_num_sold\">07</div>\n              </div>\n            </div>\n            <div class=\"productlisting clearfix\">\n              <div class=\"proimg\">\n                <img src=\"../../../assets/images/sold_pro.jpg\" alt=\"proimg\" />\n              </div>\n              <div class=\"aboutproductwrap\">\n                <div class=\"soldpro_sminfo\">deadpool mask half sleeve t-shirt(DPL)</div>\n                <div class=\"item_num_sold\">07</div>\n              </div>\n            </div>\n            <div class=\"productlisting clearfix\">\n              <div class=\"proimg\">\n                <img src=\"../../../assets/images/sold_pro.jpg\" alt=\"proimg\" />\n              </div>\n              <div class=\"aboutproductwrap\">\n                <div class=\"soldpro_sminfo\">deadpool mask half sleeve t-shirt(DPL)</div>\n                <div class=\"item_num_sold\">07</div>\n              </div>\n            </div>\n            <div class=\"productlisting clearfix\">\n              <div class=\"proimg\">\n                <img src=\"../../../assets/images/sold_pro.jpg\" alt=\"proimg\" />\n              </div>\n              <div class=\"aboutproductwrap\">\n                <div class=\"soldpro_sminfo\">deadpool mask half sleeve t-shirt(DPL)</div>\n                <div class=\"item_num_sold\">07</div>\n              </div>\n            </div>\n            <div class=\"productlisting clearfix\">\n              <div class=\"proimg\">\n                <img src=\"../../../assets/images/sold_pro.jpg\" alt=\"proimg\" />\n              </div>\n              <div class=\"aboutproductwrap\">\n                <div class=\"soldpro_sminfo\">deadpool mask half sleeve t-shirt(DPL)</div>\n                <div class=\"item_num_sold\">07</div>\n              </div>\n            </div>\n            <div class=\"productlisting clearfix\">\n              <div class=\"proimg\">\n                <img src=\"../../../assets/images/sold_pro.jpg\" alt=\"proimg\" />\n              </div>\n              <div class=\"aboutproductwrap\">\n                <div class=\"soldpro_sminfo\">deadpool mask half sleeve t-shirt(DPL)</div>\n                <div class=\"item_num_sold\">07</div>\n              </div>\n            </div>\n            <div class=\"productlisting clearfix\">\n              <div class=\"proimg\">\n                <img src=\"../../../assets/images/sold_pro.jpg\" alt=\"proimg\" />\n              </div>\n              <div class=\"aboutproductwrap\">\n                <div class=\"soldpro_sminfo\">deadpool mask half sleeve t-shirt(DPL)</div>\n                <div class=\"item_num_sold\">07</div>\n              </div>\n            </div>\n            <div class=\"productlisting clearfix\">\n              <div class=\"proimg\">\n                <img src=\"../../../assets/images/sold_pro.jpg\" alt=\"proimg\" />\n              </div>\n              <div class=\"aboutproductwrap\">\n                <div class=\"soldpro_sminfo\">deadpool mask half sleeve t-shirt(DPL)</div>\n                <div class=\"item_num_sold\">07</div>\n              </div>\n            </div>\n            <div class=\"productlisting clearfix\">\n              <div class=\"proimg\">\n                <img src=\"assets/images/sold_pro.jpg\" alt=\"proimg\" />\n              </div>\n              <div class=\"aboutproductwrap\">\n                <div class=\"soldpro_sminfo\">deadpool mask half sleeve t-shirt(DPL)</div>\n                <div class=\"item_num_sold\">07</div>\n              </div>\n            </div>\n            <div class=\"productlisting clearfix\">\n              <div class=\"proimg\">\n                <img src=\"assets/images/sold_pro.jpg\" alt=\"proimg\" />\n              </div>\n              <div class=\"aboutproductwrap\">\n                <div class=\"soldpro_sminfo\">deadpool mask half sleeve t-shirt(DPL)</div>\n                <div class=\"item_num_sold\">07</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/Components/analytics/analytics.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/analytics/analytics.component.ts ***!
  \*************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent(service) {
        this.service = service;
        this.service.setTitle('Analytics');
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    AnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/Components/analytics/analytics.component.html"),
            styles: [__webpack_require__(/*! ./analytics.component.css */ "./src/app/Components/analytics/analytics.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/Components/business-detail/business-detail.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/Components/business-detail/business-detail.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/business-detail/business-detail.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Components/business-detail/business-detail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Business Details Screen Start Here-->\n<div class=\"business_detailswrap\">\n  <div class=\"businessrttopbg\"></div>\n  <div class=\"wakilogo\"></div>\n  <div class=\"businConbx\">\n    <div class=\"businesstextrow\"><img src=\"../../assets/images/business_details_text.png\" alt=\"\" /></div>\n    <div class=\"sminfo\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n      labore et dolore magna aliqua. Ut enim ad miemque laudantium, totam rem aperiam, eaque ipsa quae ab illo iem\n      aperiam,m ipsum dolor sit amet, consectetur adipisicing elit, lore magna aliqua. Ut enim ad miemque lauda</div>\n    <div class=\"businessfrombx\">\n      <form [formGroup]='formgroup'>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" [formControl]=\"formgroup.controls['business']\" placeholder=\"Business Name\" />\n          <div class=\"error_box clearfix\">\n            <p *ngIf=\"formgroup.controls['business'].hasError('required') && formgroup.controls['business'].dirty\"\n              style=\"color:red;font-size:14px;\">*BusinessName is required</p>\n            <p *ngIf=\"formgroup.controls['business'].hasError('pattern') && formgroup.controls['business'].dirty\" style=\"color:red;font-size:14px;\">*Please\n              enter valid email.</p>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"number\" [formControl]=\"formgroup.controls['phone']\" placeholder=\"Phone no.\" />\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" [formControl]=\"formgroup.controls['email']\" placeholder=\"Email Address\" />\n          <div class=\"error_box clearfix\">\n            <p *ngIf=\"formgroup.controls['email'].hasError('required') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Email\n              is required</p>\n            <p *ngIf=\"formgroup.controls['email'].hasError('pattern') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Please\n              enter valid email.</p>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <!-- <select class=\"form-control custom_select\" name=\"basic\" id=\"ex-search\" multiple>\n  <option hidden selected>Selling Product Types</option>\n  <option *ngFor=\"let item of event\" value='item.category'>{{item.category}}</option>\n  <option value=\"1\">Apparels</option>\n  <option value=\"2\">Food Items</option>\n  <option value=\"3\">Perfumes</option>\n  <option value=\"4\">Electronics </option>\n  </select> -->\n          <ng-multiselect-dropdown [placeholder]=\"'Select your category'\" [data]=\"categoryList\" [formControl]=\"formgroup.controls['categorySelect']\"\n            [settings]=\"dropdownSettings\">\n          </ng-multiselect-dropdown>\n          <!-- <select class=\"form-control custom_select\" name=\"basic\" id=\"ex-search\" >\n  <option hidden selected>select Token</option>\n  <option *ngFor=\"let item of event\" value='item.categoryName'>{{item.categoryName}}</option>\n  </select> -->\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" [formControl]=\"formgroup.controls['address']\" placeholder=\"Street Address\" />\n        </div>\n        <div class=\"form-group\">\n          <!-- <ng-select [options]=\"options\" [displayKey]=\"displayKey\" [disable]=\"isDisable\" [styleGuide]=\"styleGuide\"\n            [isDatalist]=\"isDataList\" [searchKeys]=\"searchKeys\" [formControl]=\"selectBox\" [formControl]=\"formgroup.controls['selectBox']\" \n            (onChange)=\"onChange($event)\"></ng-select> -->\n        </div>\n        <tag-input [(ngModel)]='items' [formControl]=\"formgroup.controls['taginput']\" ></tag-input>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary businessbtn\" [disabled]=\"!formgroup.valid\" (click)=\"addBusinessDetail(formgroup.value)\">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<!--Business Details Screen End Here-->"

/***/ }),

/***/ "./src/app/Components/business-detail/business-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/business-detail/business-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: BusinessDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessDetailComponent", function() { return BusinessDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BusinessDetailComponent = /** @class */ (function () {
    function BusinessDetailComponent(formBuilder, route, service) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
        this.categoryList = [];
        this.dropdownSettings = {
            singleSelection: false,
            idField: '_id',
            textField: 'categoryName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 50,
            allowSearchFilter: true
        };
        this.dropdownList = [];
        this.options = [
            { "key": "dalhi", "value": "Delhi" },
            { "key": "facebook", "value": "Noida" },
        ];
        this.displayKey = "value";
        this.isDisable = false;
        this.styleGuide = {
            caretClass: 'caret',
            selectBoxClass: 'dropdown-wrapper',
            selectMenuClass: 'dropdown',
            optionsClass: 'option'
        };
        this.isDataList = false;
        this.searchKeys = ['key', 'value'];
        this.item = ['Pizza', 'Pasta', 'Parmesan'];
        this.formgroup = formBuilder.group({
            business: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Z0-9_-]+([\.-][A-Z0-9_-]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,4})+$/i)])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            categorySelect: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // selectBox:['', Validators.required],
            taginput: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    BusinessDetailComponent.prototype.ngOnInit = function () {
        // this.dropdownList = [
        //     { item_id: 1, item_text: 'Mumbai' },
        //     { item_id: 2, item_text: 'Bangaluru' },
        //     { item_id: 3, item_text: 'Pune' },
        //     { item_id: 4, item_text: 'Navsari' },
        //     { item_id: 5, item_text: 'New Delhi' }
        // ];
        this.getCategoryList();
        // $('#ex-search').picker({ search: false });
    };
    BusinessDetailComponent.prototype.getCategoryList = function () {
        var _this = this;
        var logindata = this.service.getApi('vendor/getCategoryList', 0).subscribe(function (response) {
            _this.responseData = response;
            // console.log("WWWWWWWW", this.responseData['result'])
            if (response['statusCode'] == 200) {
                _this.category = _this.responseData['result'];
                _this.categoryList = _this.category;
                // console.log(this.categoryList)
            }
            else {
                _this.service.showError('Invalid Email');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            // console.log('error occur', error)
            _this.service.showError('Server Error');
        });
    };
    BusinessDetailComponent.prototype.addBusinessDetail = function (val) {
        var _this = this;
        // console.log(this.formgroup.value)
        // console.log(">>>>>",val)
        var tag = [];
        val.taginput.forEach(function (element) {
            tag.push(element.value);
        });
        this.sentData = {
            token: localStorage.getItem('token'),
            businessName: val.business,
            phone: val.phone,
            email: val.email,
            sellingProduct: val.categorySelect,
            streetAddress: tag,
            // cityName: ,
            lang: "en"
        };
        this.service.postApi('admin/BusinessDetail', this.sentData, 1).subscribe(function (response) {
            _this.responseData = response;
            // console.log("WWWWWWWW", this.responseData)
            if (response['statusCode'] == 200) {
                // this.service.showSuccess("Enter to DashBoard");
                _this.route.navigate(['/dashBoard']);
            }
            else {
                _this.service.showError(_this.responseData['statusMessage']);
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            // console.log('error occur', error)
            _this.service.showError('Server Error');
        });
    };
    BusinessDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-business-detail',
            template: __webpack_require__(/*! ./business-detail.component.html */ "./src/app/Components/business-detail/business-detail.component.html"),
            styles: [__webpack_require__(/*! ./business-detail.component.css */ "./src/app/Components/business-detail/business-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], BusinessDetailComponent);
    return BusinessDetailComponent;
}());



/***/ }),

/***/ "./src/app/Components/child/child.component.css":
/*!******************************************************!*\
  !*** ./src/app/Components/child/child.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/child/child.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Components/child/child.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <div class=\"row clearfix\">\n    <div class=\"col-sm-3\">\n      <input class=\"form-control\" type=\"text\" value=\"\" placeholder=\"Color\" (blur)='getOptionKey($event.target.value)' />\n    </div>\n    <div class=\"col-sm-6\">\n      <tag-input [(ngModel)]='itemsAsObjects' value=\"\" placeholder=\"'Enter a Tags'\" [onTextChangeDebounce]=\"20\" (keyup)='getVariant($event)'></tag-input>\n    </div>\n    <div class=\"col-sm-3\">\n      <button type=\"button\" class=\"btn btn-primary removebtn\" (click)=\"removeMe(index)\">Remove</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/child/child.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/child/child.component.ts ***!
  \*****************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildComponent = /** @class */ (function () {
    function ChildComponent(service) {
        this.service = service;
    }
    ChildComponent.prototype.ngOnInit = function () {
    };
    ChildComponent.prototype.removeMe = function (index) {
        this.compInteraction.remove(index);
        localStorage.removeItem('optionvalue'),
            localStorage.removeItem('options');
    };
    ChildComponent.prototype.getOptionKey = function (event) {
        // console.log('---------------->>>', event)
        this.getOptionValue = event;
    };
    // getOptionValue(event) {
    //   console.log('================>>', event)
    // }
    ChildComponent.prototype.getVariant = function (event) {
        // console.log(event)l
        var temp = [];
        if (this.itemsAsObjects) {
            this.itemsAsObjects.forEach(function (event) {
                // console.log(event.value)
                var t = event.value;
                temp.push(t);
            });
            this.obj = {
                optionName: this.getOptionValue,
                option: temp
            };
            console.log(this.obj, '00000000000000', this.getOptionValue);
            this.service.changeOption({ options: this.getOptionValue, optionvalue: temp });
            // localStorage.setItem('optionvalue',this.getOptionValue),
            localStorage.setItem('options', temp);
        }
    };
    ChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/Components/child/child.component.html"),
            styles: [__webpack_require__(/*! ./child.component.css */ "./src/app/Components/child/child.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/Components/create-offer/create-offer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Components/create-offer/create-offer.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/create-offer/create-offer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Components/create-offer/create-offer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n  <!-- Sidebar end Here-->\n  <!--Create New Offer Products Content Section Start Here-->\n  <div id=\"page-content-wrapper\">\n    <div class=\"dashboardConbx\">\n        <form class=\"form\" [formGroup]='Form'>\n      <div class=\"addproductheadingrow\">\n        <h3>Lorem Ipsum Heading</h3>\n        <div class=\"addproheadingbtn\">\n          <button type=\"button\" class=\"btn btn-primary addprobtn cancel\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary addprobtn\">Save</button>\n        </div>\n      </div>\n      <div class=\"productsviewrow create_new_offer\">\n        <div class=\"row eqWrap equalHMWrap clearfix\"> \n          <!--Text Editor Section Start Here-->\n          <div class=\"col-lg-5 texteditorwrap\">\n            <div class=\"form-group\">\n              <label>Title</label>\n              <input class=\"form-control\" type=\"text\" placeholder=\"Black Typography Top\" />\n            </div>\n            <div class=\"form-group\">\n              <label>Description</label>\n              <div class=\"texteditorbox\"><img class=\"img-responsive\" src=\"assets/images/text_editor.jpg\" width=\"606\" height=\"255\" alt=\"\" /></div>\n            </div>\n          </div>\n          <!--Text Editor Section End Here--> \n          \n          <!--Image Upload Section Start Here-->\n          <div class=\"col-lg-7 fileuploadbox\">\n            <label>Product Images</label>\n            <div class=\"row clearfix\">\n                <div class=\"col-sm-5 pdr10wds\">\n                    <div class=\"uploadimgbx wd100\">\n                        <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                          <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                          <div> <span class=\"btn btn-default btn-file\">\n                            <input id=\"input-22\" type=\"file\" name=\"...\" accept=\".jpg,.gif,.png\">\n                            </span> </div>\n                        </div>\n                      </div>\n                </div>\n                <div class=\"col-sm-7 pdlsunye\">\n                    <div class=\"uploadimgbx wd100_landsscape\">\n                        <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                          <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                          <div> <span class=\"btn btn-default btn-file\">\n                            <input id=\"input-22\" type=\"file\" name=\"...\" accept=\".jpg,.gif,.png\">\n                            </span> </div>\n                        </div>\n                      </div>\n                      <div class=\"uploadimgbx wd100_landsscape\">\n                          <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                            <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                            <div> <span class=\"btn btn-default btn-file\">\n                              <input id=\"input-22\" type=\"file\" name=\"...\" accept=\".jpg,.gif,.png\">\n                              </span> </div>\n                          </div>\n                        </div>\n                </div>\n            </div>\n           \n          </div>\n          <!--Image Upload Section End Here--> \n        </div>\n      </div>\n\n      <div class=\"productsviewrow create_new_offer\">\n        <div class=\"row eqWrap equalHMWrap clearfix\"> \n          <div class=\"col-lg-5 texteditorwrap\">\n            <!--Product Category Section Start Here-->\n            <div class=\"form-group\">\n              <label>Offer Type</label>\n              <select class=\"form-control\">\n                <option value=\"volvo\">Volvo</option>\n                <option value=\"saab\">Saab</option>\n                <option value=\"mercedes\">Mercedes</option>\n                <option value=\"audi\">Audi</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label>Value</label>\n              <input class=\"form-control\" type=\"text\" placeholder=\"50\" />\n            </div>\n            <div class=\"form-group\">\n              <label>Minimum Requirement</label>\n              <select class=\"form-control\">\n                <option value=\"volvo\">Volvo</option>\n                <option value=\"saab\">Saab</option>\n                <option value=\"mercedes\">Mercedes</option>\n                <option value=\"audi\">Audi</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label>Applicable on</label>\n              <select class=\"form-control\">\n                <option value=\"volvo\">Volvo</option>\n                <option value=\"saab\">Saab</option>\n                <option value=\"mercedes\">Mercedes</option>\n                <option value=\"audi\">Audi</option>\n              </select>\n            </div>\n          <!--Product Category Section End Here--> \n          </div>\n         \n          \n          <!--Choose Date Section Start Here-->\n          <div class=\"col-lg-7 fileuploadbox\">\n            <div class=\"row clearfix\">\n              <div class=\"col-sm-6\">\n                  <label>Start Date</label>\n                  <form #myForm=\"ngForm\" novalidate>\n                    <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\"\n                    [formControl]=\"Form.controls['StartDate']\" (dateChanged)=\"onDateChanged($event)\" required></my-date-picker>\n                </form>\n              </div>\n              <div class=\"col-sm-6\">\n                  <label>End Date</label>\n\n                  <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions2\"\n                  (dateChanged)=\"onDateChanged($event)\" required></my-date-picker>\n              </div>\n            </div>\n           \n          </div>\n           <!--Choose Date Section End Here-->\n        </div>\n      </div>\n </form>\n    </div>\n  </div>\n  <!--Create New Offer Products End Here--> \n\n\n  </div>"

/***/ }),

/***/ "./src/app/Components/create-offer/create-offer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/create-offer/create-offer.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOfferComponent", function() { return CreateOfferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateOfferComponent = /** @class */ (function () {
    function CreateOfferComponent(service, formBuilder) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.myDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            inline: false,
            showInputField: true,
            showTodayBtn: false,
        };
        this.myDatePickerOptions2 = {
            dateFormat: 'yyyy-mm-dd',
            inline: false,
            showInputField: true,
            showTodayBtn: false,
        };
        this.Form = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            StartDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            EndDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    CreateOfferComponent.prototype.ngOnInit = function () {
        this.onDateChange();
        this.service.setTitle('Create Offer');
    };
    CreateOfferComponent.prototype.onDateChanged = function (event) {
        // console.log(`event${JSON.stringify(event)}`)
        this.Form.value.StartDate;
        var endDate = new Date(event.formatted);
        var copy2 = this.getCopyOfOptions();
        copy2.disableUntil = {
            year: endDate.getFullYear(),
            month: endDate.getMonth() + 1,
            day: endDate.getDate()
        };
        this.myDatePickerOptions2 = copy2;
    };
    CreateOfferComponent.prototype.onDateChange = function () {
        var startD = new Date();
        var copy1 = this.getCopyOfOptions();
        copy1.disableUntil = {
            year: startD.getFullYear(),
            month: startD.getMonth() + 1,
            day: startD.getDate()
        };
        this.myDatePickerOptions = copy1;
    };
    CreateOfferComponent.prototype.onDateChanged2 = function (event) {
    };
    CreateOfferComponent.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerOptions));
    };
    CreateOfferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-offer',
            template: __webpack_require__(/*! ./create-offer.component.html */ "./src/app/Components/create-offer/create-offer.component.html"),
            styles: [__webpack_require__(/*! ./create-offer.component.css */ "./src/app/Components/create-offer/create-offer.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CreateOfferComponent);
    return CreateOfferComponent;
}());



/***/ }),

/***/ "./src/app/Components/editproduct/editproduct.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/editproduct/editproduct.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/editproduct/editproduct.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Components/editproduct/editproduct.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n  <!--sidebar-End -->\n  <!--Add Products Content Section Start Here-->\n  <div id=\"page-content-wrapper\">\n    <div class=\"dashboardConbx\">\n      <div class=\"addproductheadingrow\">\n        <h3>Lorem Ipsum Heading</h3>\n        <div class=\"addproheadingbtn\">\n          <button type=\"button\" class=\"btn btn-primary addprobtn cancel\">Cancel</button>\n          <button (click)=\"saveProduct()\" type=\"button\" class=\"btn btn-primary addprobtn\">Save</button>\n        </div>\n      </div>\n      <div class=\"productsviewrow\">\n        <div class=\"row eqWrap equalHMWrap clearfix\">\n          <!--Text Editor Section Start Here-->\n          <div class=\"col-sm-5 texteditorwrap\">\n            <div class=\"form-group\">\n              <label>Title</label>\n              <input class=\"form-control\" value={{productDetail.product.productName}} type=\"text\" placeholder=\"Product Name Here\"\n                [(ngModel)]=\"Title\" />\n            </div>\n            <div class=\"form-group\">\n              <label>Description</label>\n              <div class=\"texteditorbox\"><img class=\"img-responsive\" width=\"606\" height=\"255\" />\n\n                <ckeditor [(ngModel)]=\"ckeditorContent\" value={{productDetail.product.description}}>\n                  <ckbutton [name]=\"'saveButton'\" [command]=\"'saveCmd'\" (click)=\"save($event)\" [icon]=\"'save.png'\"\n                    [label]=\"'Save Document'\" [toolbar]=\"'clipboard,1'\">\n                  </ckbutton>\n                </ckeditor>\n\n              </div>\n            </div>\n          </div>\n          <!--Text Editor Section End Here-->\n\n          <!--Image Upload Section Start Here-->\n          <div class=\"col-sm-7 fileuploadbox\">\n            <label>Product Images</label>\n            <!-- <input type=\"file\" (change)='onFileChanged($event)' accept=\"image/jpeg,image/jpg,image/png\"> -->\n            <div class=\"uploadimgbx\">\n              <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\">\n                  <img [src]=\"productDetail.product.image[0]\" />\n                </div>\n                <div> <span class=\"btn btn-default btn-file\">\n                    <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\">\n                  </span> </div>\n              </div>\n            </div>\n          </div>\n          <!--Image Upload Section End Here-->\n        </div>\n      </div>\n      <div class=\"row productcategorywrap clearfix\">\n        <div class=\"col-sm-5 padwd10\">\n          <!--Product Category Section Start Here-->\n          <div class=\"productCategorybox\">\n            <div class=\"form-group\">\n              <label>Product Category</label>\n\n              <select class=\"form-control\" (change)=\"getCatgory($event.target.value)\">\n                <option value=\"\">{{productDetail.product.brand}}</option>\n                <!-- <option *ngFor=\"let c of category\" [value]=\"c._id\">{{c.categoryName}}</option> -->\n              </select>\n\n            </div>\n            <div class=\"form-group\">\n              <label>Product Subcategory</label>\n              <select class=\"form-control\" (change)=\"SubCatorydata($event.target.value)\">\n                <option value=\"\">select SubCategory</option>\n                <!-- <option *ngFor=\"let c of getSubCatorydata\" [value]=\"c._id\">{{c.subCategoryName}}</option> -->\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label>Product Type</label>\n              <select class=\"form-control\" (change)=\"getProductCategoryId($event.target.value)\">\n                <option value=\"\">Select Type</option>\n                <!-- <option *ngFor=\"let c of productCategoryname\" [value]=\"c._id\">{{c.productcategoryName}}</option> -->\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label>Product Brand</label>\n              <select class=\"form-control\" (change)=\"getBrandId($event.target.value)\">\n                <option value=\"\">select Brand</option>\n                <!-- <option *ngFor=\"let c of getBrandList\"  [value]=\"c._id\">{{c.brandName}}</option> -->\n              </select>\n            </div>\n            <!--  <div class=\"form-group mybrand clearfix\">\n              <form [formGroup]='formgroup'>\n                <input type=\"text\" placeholder=\"My Brand\" [formControl]=\"formgroup.controls['brand']\" />\n                <button type=\"submit\" (click)=\"addBrand(formgroup.value)\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n              </form>\n            </div> -->\n            <div class=\"form-group clearfix\">\n              <label>Product Tags</label>\n              <tag-input [(ngModel)]='itemsAsObjects' [placeholder]=\"'Enter a Tags'\" [onTextChangeDebounce]=\"500\"></tag-input>\n              <!-- <tag-input [ngModel]=\"itemsAsObjects\" ></tag-input> -->\n            </div>\n          </div>\n          <!--Product Category Section End Here-->\n\n          <!--Modify Variants Table Section Start Here-->\n          <div class=\"modify_variants\">\n            <h4>Modify Variants</h4>\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th align=\"left\" valign=\"middle\">Variant</th>\n                  <th>Price</th>\n                  <th>SKU</th>\n                  <th>Inventory</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><span class=\"checkboxbx\">\n                      <input type=\"checkbox\" id=\"test1\" />\n                      <label for=\"test1\">&nbsp;</label>\n                    </span><span class=\"sizenm\">XS</span> <span class=\"colornm\">Red</span></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"230\" /></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"BHJ89\" /></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"1234\" /></td>\n                </tr>\n                <tr>\n                  <td><span class=\"checkboxbx\">\n                      <input type=\"checkbox\" id=\"test2\" />\n                      <label for=\"test2\">&nbsp;</label>\n                    </span><span class=\"sizenm\">XS</span> <span class=\"colornm\">Pink</span></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"230\" /></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"BHJ89\" /></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"1234\" /></td>\n                </tr>\n                <tr>\n                  <td><span class=\"checkboxbx\">\n                      <input type=\"checkbox\" id=\"test3\" />\n                      <label for=\"test3\">&nbsp;</label>\n                    </span><span class=\"sizenm\">XS</span> <span class=\"colornm\">Blue</span></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"230\" /></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"BHJ89\" /></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"1234\" /></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <!--Modify Variants Table Section End Here-->\n\n        </div>\n        <div class=\"col-sm-7 padwd10\">\n          <div class=\"row clearfix\">\n            <!--Selling Price Section Start Here-->\n            <div class=\"col-sm-6 pdrightwd10\">\n              <div class=\"productCategorybox\">\n                <div class=\"form-group\">\n                  <label>Selling Price</label>\n                  <input class=\"form-control\" type=\"text\" placeholder=\"499\" [(ngModel)]=\"SellingPrice\" />\n                </div>\n                <div class=\"form-group\">\n                  <label>Cost/Item</label>\n                  <input class=\"form-control\" type=\"text\" placeholder=\"399\" />\n                </div>\n                <div class=\"form-group\">\n                  <label>Item Weight</label>\n                  <input class=\"form-control\" type=\"text\" placeholder=\"0.5\" />\n                </div>\n              </div>\n              <!--Selling Price Section End Here-->\n            </div>\n            <!--Inventory Section Start Here-->\n            <div class=\"col-sm-6 pdleftwd10\">\n              <div class=\"productCategorybox\">\n                <div class=\"form-group\">\n                  <label>Inventory SKU</label>\n                  <input class=\"form-control\" type=\"text\" placeholder=\"BUI\" />\n                </div>\n                <div class=\"form-group\">\n                  <label>Quantity</label>\n                  <input class=\"form-control\" type=\"text\" placeholder=\"50\" />\n                </div>\n                <div class=\"form-group\">\n                  <label>Product Type</label>\n                  <select class=\"form-control\">\n                    <option value=\"volvo\">Avaiable for try</option>\n                    <option value=\"saab\">Saab</option>\n                    <option value=\"mercedes\">Mercedes</option>\n                    <option value=\"audi\">Audi</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <!--Inventory Section End Here-->\n          </div>\n\n          <!--Variants Section Start Here-->\n          <div class=\"row clearfix\">\n            <div class=\"col-sm-12\">\n              <div class=\"productCategorybox\">\n                <div class=\"variants\">\n                  <h4>Variants</h4>\n                  <div class=\"sminfo\">Swimming hundreds of feet beneath the ocean’s surface in many parts of the world\n                    are prolific aey construct one or more spacious houses” that can exceed three feet in length. </div>\n                  <div class=\"variantsoption\">\n                    <div class=\"form-group\">\n                      <div class=\"row clearfix\">\n                        <div class=\"col-sm-3\">\n                          <label>Option name</label>\n                          <input class=\"form-control\" type=\"text\" placeholder=\"Size\" />\n                        </div>\n                        <div class=\"col-sm-6\">\n                          <label>Option Values</label>\n                          <input class=\"form-control\" type=\"text\" placeholder=\"XS\" />\n                        </div>\n                        <div class=\"col-sm-3\">\n                          <label>&nbsp;</label>\n                          <button type=\"button\" class=\"btn btn-primary removebtn\">Remove</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row clearfix\">\n                        <div class=\"col-sm-3\">\n                          <input class=\"form-control\" type=\"text\" placeholder=\"Color\" />\n                        </div>\n                        <div class=\"col-sm-6\">\n                          <input class=\"form-control\" type=\"text\" placeholder=\"Red\" />\n                        </div>\n                        <div class=\"col-sm-3\">\n                          <button type=\"button\" class=\"btn btn-primary removebtn addoption\">Add Option</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--Variants Section End Here-->\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <!-- </form> -->\n  <!--Add Products Section End Here-->"

/***/ }),

/***/ "./src/app/Components/editproduct/editproduct.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/editproduct/editproduct.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditproductComponent", function() { return EditproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditproductComponent = /** @class */ (function () {
    function EditproductComponent(service) {
        this.service = service;
    }
    EditproductComponent.prototype.ngOnInit = function () {
        this.getProductDetail();
        console.log("this.productDetail.product.description", this.productDetail.product.description);
        this.ckeditorContent = this.productDetail.product.description;
    };
    //!api called
    EditproductComponent.prototype.getProductDetail = function () {
        var _this = this;
        this.service.getApi('vendor/productDetails?_id=5bfbeb833605496d97427ccd&lang=en', 0).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.service.showSuccess("get Product Detail");
                _this.productDetail = response['result'];
                console.log("response", _this.productDetail.product.image[0]);
            }
            else {
                console.log(response['result']);
                _this.service.showError('Something Went to Wrong');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    EditproductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editproduct',
            template: __webpack_require__(/*! ./editproduct.component.html */ "./src/app/Components/editproduct/editproduct.component.html"),
            styles: [__webpack_require__(/*! ./editproduct.component.css */ "./src/app/Components/editproduct/editproduct.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], EditproductComponent);
    return EditproductComponent;
}());



/***/ }),

/***/ "./src/app/Components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/Components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header Start Here-->\n<div class=\"headers\">\n  <div class=\"menuiconbx\">\n    <div class=\"sidelogobx\">  \n      <div class=\"sidelogo\"></div>\n    </div>\n    <a id=\"menu-toggle\" class=\"sidemenubtn\" >Toggle Menu</a>\n    <div class=\"pgnm\" >{{title}}</div>\n    <div class=\"header_rtbx\">\n      <div class=\"notification_header\"><i class=\"glyphicon glyphicon-bell\" aria-hidden=\"true\"></i><span class=\"topdigit\">3</span></div>\n      <form action=\"\" class=\"search-form\">\n        <div class=\"form-group has-feedback\">\n          <label for=\"search\" class=\"sr-only\">Search</label>\n          <input type=\"text\" class=\"form-control\" name=\"search\" id=\"search\" placeholder=\"Search\">\n          <span class=\"glyphicon glyphicon-search form-control-feedback\"></span> </div>\n      </form>\n    </div>\n  </div>\n</div>\n<!--Header End Here--> "

/***/ }),

/***/ "./src/app/Components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(service) {
        this.service = service;
        this.title = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.title.subscribe(function (updatedTitle) {
            _this.title = updatedTitle;
        });
        // this.service.setTitle()
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/Components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/Components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Components/home-page-vendor/home-page-vendor.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/Components/home-page-vendor/home-page-vendor.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body {\n    font-family: 'RobotoDraft', 'Roboto', 'Helvetica Neue, Helvetica, Arial', sans-serif;\n    text-align: left;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 16px;\n    line-height: 2rem;\n    letter-spacing: 0.01rem;\n    color: #212121;\n    background-color: #fafafa;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n    margin: 0;\n    position: relative;\n  }\n  \n  .ngx-datatable,\n  .info {\n    text-align: left;\n    width: 75%;\n    margin: 0 auto;\n  }\n  \n  .info {\n    box-sizing: border-box;\n    padding: 0 1em;\n    border: solid 1px #ccc;\n    background: white;\n    font-size: .8em;\n    margin-bottom: 1em;\n  }\n  \n  .ngx-datatable.scroll-vertical {\n    height: 70vh;\n  }\n  \n  .selected-column {\n    background: #FFF;\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);\n    -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);\n  }\n  \n  .group {\n    position: relative;\n    margin-bottom: 45px;\n  }\n  \n  \n  input[type=text] {\n    font-size: 14px;\n    display: block;\n    background: transparent;\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid #5264AE;\n  }\n  \n  \n  textarea {\n    font-size: 14px;\n    font-family: sans-serif;\n    display: block;\n    background: transparent;\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid #5264AE;\n    resize: vertical;\n  }\n  \n  input:focus {\n    outline: none;\n  }\n  \n  a {\n    color: grey;\n    text-decoration: none;\n  }\n  \n  .expander-btn {\n    margin-top:8px;\n    display:block;\n  }\n  \n  h3 {\n    background: #1f89ff;\n    margin: 0 0 30px 0;\n    color: #FFF;\n    text-align: left;\n    padding: 10px;\n    overflow: hidden;\n    height: 32px;\n  }\n  \n  h3 a {\n    color: #ccc;\n  }\n  \n  h3 small {\n    margin-left: 10px;\n    font-size: .8rem;\n  }\n  \n  .fullscreen {\n    position: absolute !important;\n    height: auto !important;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n  }\n  \n  .selection-cell .datatable-body-cell.active{\n    background: #0829e0 !important;\n    color: #FFF !important;\n  }\n  \n  .selected-column {\n    float: right;\n    width: 20%;\n    margin-right: 20px;\n    text-align: left;\n  }\n  \n  .selected-column h4 {\n    text-align: center;\n    margin: 10px 0 0 0;\n    padding: 0;\n  }\n  \n  ul, li {\n    padding:0;\n    margin:0;\n    list-style:none;\n  }\n  \n  ul {\n    margin: 10px;\n  }\n  \n  li {\n    padding: 3px 5px;\n  }\n  \n  nav {\n    background: #FFF;\n    z-index: 99;\n    top:0;\n    left:0;\n    width: 200px;\n    position: absolute;\n    min-height: 1900px;\n    font-size:14px;\n    box-shadow: 0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12);\n  }\n  \n  nav ul {\n    margin: 0 8px !important;\n  }\n  \n  nav li {\n    padding: 0;\n  }\n  \n  nav h3 {\n    font-size: 14px;\n    margin:0 0 10px 0;\n  }\n  \n  nav h4 {\n    margin: 7px 0 0 0;\n  }\n  \n  nav h4 a {\n    color:#000;\n  }\n  \n  content {\n    margin-left: 200px;\n    min-height: 100vh;\n    display:block;\n    position: relative;\n    padding-bottom: 20px;\n  }\n  \n  content h3 {\n    padding-left: 35px;\n  }\n  \n  .main-ul {\n    margin-left: 15px !important;\n    display: block;\n  }\n  \n  .github-button-wrap {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n  }\n  \n  nav h3 small{\n    font-size: .7rem;\n    display: inline-block;\n    margin-left: 0;\n  }\n  \n  select {\n    width: 100%;\n    height: 30px;\n    margin: 5px 0;\n  }\n  \n  .age-is-ten {\n    background: #ffc91f;\n  }\n  \n  .is-gender {\n    background: blue;\n    color: white;\n  }\n  \n  .is-female {\n    background: pink;\n  }\n  \n  .dark {\n    background: #181B24;\n  }\n  \n  .dark nav {\n    background: #232837;\n  }\n  \n  .dark nav a {\n    color:#fff;\n  }\n  \n  .dark nav h4 {\n    color: #72809b;\n  }\n  \n  .expectedpayment + label:before {\n    border: 1px solid #7f83a2;\n    content: \"\\00a0\";\n    display: inline-block;\n    font: 16px/1em sans-serif;\n    height: 16px;\n    margin: 0 .25em 0 0;\n    padding: 0;\n    vertical-align: top;\n    width: 16px;\n  }\n  \n  .expectedpayment2 + label:before {\n    border: 1px solid #7f83a2;\n    content: \"\\00a0\";\n    display: inline-block;\n    font: 16px/1em sans-serif;\n    height: 16px;\n    margin: 0 .25em 0 0;\n    padding: 0;\n    vertical-align: top;\n    width: 16px;\n  }\n  \n  .expectedpayment3 + label:before {\n    border: 1px solid #7f83a2;\n    content: \"\\00a0\";\n    display: inline-block;\n    font: 16px/1em sans-serif;\n    height: 16px;\n    margin: 0 .25em 0 0;\n    padding: 0;\n    vertical-align: top;\n    width: 16px;\n  }\n  \n  .expectedpayment:checked + label:before{\n    color: #EEE;\n    content: \"\\2713\";\n      text-align: center;\n      font-weight: bold;\n      background-color:#66bb6a;\n  }\n  \n  .expectedpayment2:checked + label:before{\n    color: #EEE;\n    content: \"\\2716\";\n      text-align: center;\n      font-weight: bold;\n      background-color: #ff1744;\n  }\n  \n  .expectedpayment3:checked + label:before {\n    color: #EEE;\n    content: \"\\003F\";\n      text-align: center;\n      font-weight: bold;\n      background-color: #ffeb3b;\n  }\n  @media screen and (max-width: 800px) {\n    .desktop-hidden {\n      display: initial;\n    }\n    .mobile-hidden {\n      display: none;\n    }\n  }\n  @media screen and (min-width: 800px) {\n    .desktop-hidden {\n      display: none;\n    }\n    .mobile-hidden {\n      display: initial;\n    }\n  } */\n\n\n /*  .ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.datatable-checkbox input[type='checkbox']:checked:before {\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    height: .5rem;\n    border-color: #009688;\n    border-top-style: none;\n    border-right-style: none;\n} */"

/***/ }),

/***/ "./src/app/Components/home-page-vendor/home-page-vendor.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/home-page-vendor/home-page-vendor.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Dashboard Screen Start Here-->\n<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n  <!--sidebar-End -->\n\n  <!--Dashboard Content Section Start Here-->\n  <div id=\"page-content-wrapper\">\n    <div class=\"dashboardConbx\">\n      <!--Welcome Rows Start Here-->\n      <div class=\"row clearfix\">\n        <div class=\"welcomerw clearfix\">\n          <div class=\"col-sm-6\">\n            <div class=\"welcomebx\">\n              <div class=\"row clearfix\">\n                <div class=\"col-sm-10\">\n                  <h3>Welcome to Waki Market Place</h3>\n                  <h4>Total Open Orders</h4>\n                </div>\n                <div class=\"col-sm-2\">\n                  <h2>102</h2>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"welcomebx\">\n              <div class=\"row clearfix\">\n                <div class=\"col-sm-10\">\n                  <h3>Total Active Carts</h3>\n                  <h4>Abandoned Checkouts</h4>\n                </div>\n                <div class=\"col-sm-2\">\n                  <h2 class=\"totalcharts\">325</h2>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--Welcome Rows End Here-->\n\n      <!--Digit Rows Start Here-->\n      <div class=\"row clearfix\">\n        <div class=\"digitrow clearfix\">\n          <div class=\"col-sm-3\">\n            <div class=\"digitbx\">\n              <h3>66,163</h3>\n              <h4>Orders Pending</h4>\n              <span class=\"bdrbtm\"></span>\n            </div>\n          </div>\n          <div class=\"col-sm-3\">\n            <div class=\"digitbx\">\n              <h3>66,134</h3>\n              <h4>Orders to be prepared</h4>\n              <span class=\"bdrbtm\"></span>\n            </div>\n          </div>\n          <div class=\"col-sm-3\">\n            <div class=\"digitbx\">\n              <h3>1256</h3>\n              <h4>Orders Ready to ship</h4>\n              <span class=\"bdrbtm\"></span>\n            </div>\n          </div>\n          <div class=\"col-sm-3\">\n            <div class=\"digitbx\">\n              <h3>4567</h3>\n              <h4>Order Delivery awaited</h4>\n              <span class=\"bdrbtm\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--Digit Rows End Here-->\n\n      <!--Total Sales Section Start Here-->\n      <div class=\"totalSeleswrap\">\n        <div class=\"row clearfix\">\n          <div class=\"col-sm-5\">\n            <div class=\"totalSelesinfobx\">\n              <h3>TOTAL SALES</h3>\n              <div class=\"sminfo\">Collaboratively administrate empowered markets via plug-and-play networks.\n                Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer\n                directed convergence without\n                revolutionary ROI.</div>\n            </div>\n          </div>\n          <div class=\"col-sm-7\">\n            <div class=\"salesgraph\"><img class=\"img-responsive\" src=\"../../assets/images/sales_graph.png\" alt=\"\" /></div>\n          </div>\n        </div>\n      </div>\n      <!--Total Sales Section End Here-->\n\n      <!--Orders Status Section Start Here-->\n      <div class=\"orderstatuswrap\">\n        <div class=\"row eqWrap equalHMWrap clearfix\">\n          <div class=\"col-sm-4 orderstatus\">\n            <h4>ORDER STATUS</h4>\n            <div class=\"pieChartsbx\"><img src=\"../../assets/images/pie_chart.png\" width=\"267\" height=\"288\"></div>\n          </div>\n          <div class=\"col-sm-8 orderstatus\">\n            <h4 class=\"activities\">ACTIVITIES <span class=\"viewall\"><a href=\"javascript:void(0);\">View All</a></span></h4>\n            <div class=\"activitiesCon\">\n              <div class=\"activitiesrow recent clearfix\">\n                <div class=\"linebx\"><span class=\"highlightpoint\"></span></div>\n                <div class=\"actiinfoCon\">\n                  <div class=\"timerw\">2 mins ago</div>\n                  <div class=\"activisminfo\">Template Builder Access (Video tutorial inside documentation)</div>\n                </div>\n              </div>\n              <div class=\"activitiesrow recent1hours clearfix\">\n                <div class=\"linebx\"><span class=\"highlightpoint\"></span></div>\n                <div class=\"actiinfoCon\">\n                  <div class=\"timerw\">1 hour ago</div>\n                  <div class=\"activisminfo\">Designed the wordpress theme lily created her account.</div>\n                </div>\n              </div>\n              <div class=\"activitiesrow clearfix\">\n                <div class=\"linebx\"><span class=\"highlightpoint\"></span></div>\n                <div class=\"actiinfoCon\">\n                  <div class=\"timerw\">4:30 p.m</div>\n                  <div class=\"activisminfo\">Your domain will expired in 13 days.</div>\n                </div>\n              </div>\n              <div class=\"activitiesrow clearfix\">\n                <div class=\"linebx\"><span class=\"highlightpoint\"></span></div>\n                <div class=\"actiinfoCon\">\n                  <div class=\"timerw\">4:30 p.m</div>\n                  <div class=\"activisminfo\">Your domain will expired in 13 days.</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--Orders Status Section End Here-->\n\n     <!--Recent Order Table Section Start Here-->\n     <div class=\"recentorder_tablewrap\">\n      <h4>RECENT ORDERS</h4>\n      <div class=\"recentOrderTable\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <!-- <th align=\"left\" valign=\"middle\"><input type=\"checkbox\" name=\"checkboxall\" value=\"checkboxAll\" /></th> -->\n              <th>Sr.No</th>\n              <th>Product</th>\n              <th>Customer</th>\n              <th>Location</th>\n              <th>Quantity</th>\n              <th>Status</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <!-- <div [hidden]=\"apiData.length==0\">\n              \n            </div> -->\n\n            <tr *ngFor=\"let product of apiData;let i = index\" >\n              <!-- <td align=\"left\" valign=\"middle\"><input type=\"checkbox\" name=\"checkbox1\" value=\"checkbox1\"></td> -->\n              <td align=\"left\" valign=\"middle\">{{i+1}}</td>\n              <td align=\"left\" valign=\"middle\"><img class=\"pro_img\" src=\"{{product.productImage}}\" alt=\"\" />{{product.productDetail}}</td>\n              <td>{{product.customerName}}</td>\n              <td>{{product.customerAddress}}</td>\n              <td>{{product.quantity}}</td>\n              <td>{{product.status}}</td>\n            </tr>\n\n           </tbody>\n        </table>\n      </div>\n    </div>\n    <!--Recent Order Table Section End Here--> \n     \n    <!-- <ng-chat [adapter]=\"adapter\" [userId]=\"userId\"></ng-chat> -->\n    </div>\n  </div>\n  <!--Dashboard Content Section End Here-->\n\n</div>\n<!--Dashboard Screen End Here-->"

/***/ }),

/***/ "./src/app/Components/home-page-vendor/home-page-vendor.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Components/home-page-vendor/home-page-vendor.component.ts ***!
  \***************************************************************************/
/*! exports provided: HomePageVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageVendorComponent", function() { return HomePageVendorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ChatAdapter } from 'ng-chat';
// import { MyAdapter } from 'my-adapter';
var HomePageVendorComponent = /** @class */ (function () {
    /* rows = [];
    selected = [];
    page = {
        totalElement: 3,
        pageNumber: 2
    }
    settings = {
        columns: {
            id: {
                title: 'ID'
            },
            name: {
                title: 'Full Name'
            },
            username: {
                title: 'User Name'
            },
            email: {
                title: 'Email'
            }
        }
    };

    data = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
        },
        // ... other rows here
        {
            id: 11,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        }
    ]; */
    /*   public rows:Array<any> = [];
      public columns:Array<any> = [
        {title: 'Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
        {
          title: 'Position',
          name: 'position',
          sort: false,
          filtering: {filterString: '', placeholder: 'Filter by position'}
        },
        {title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc'},
        {title: 'Extn.', name: 'ext', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
        {title: 'Start date', className: 'text-warning', name: 'startDate'},
        {title: 'Salary ($)', name: 'salary'}
      ];
      public page:number = 1;
      public itemsPerPage:number = 10;
      public maxSize:number = 5;
      public numPages:number = 1;
      public length:number = 0;
    
      public config:any = {
        paging: true,
        sorting: {columns: this.columns},
        filtering: {filterString: ''},
        className: ['table-striped', 'table-bordered']
      };
    
      private data:Array<any> = TableData; */
    function HomePageVendorComponent(service) {
        // this.length = this.data.length;
        this.service = service;
        // title = 'app';
        // userId = 999;
        this.rows = [];
        this.selected = [];
        this.getproductList();
        // this.rows = this.apiData
        // this.temp = [...this.rows];
        // console.log('---------->>>',this.rows),
        // console.log('----------->>>',this.temp)
    }
    // public adapter: ChatAdapter = new MyAdapter();
    HomePageVendorComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log('Select Event', selected, this.selected);
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    HomePageVendorComponent.prototype.onActivate = function (event) {
        console.log('Activate Event', event);
    };
    HomePageVendorComponent.prototype.add = function () {
        this.selected.push(this.rows[1], this.rows[3]);
    };
    HomePageVendorComponent.prototype.update = function () {
        this.selected = [this.rows[1], this.rows[3]];
    };
    HomePageVendorComponent.prototype.remove = function () {
        this.selected = [];
    };
    HomePageVendorComponent.prototype.displayCheck = function (row) {
        return row.name !== 'Ethel Price';
    };
    HomePageVendorComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        console.log("------>", this.temp);
        // // filter our data
        var temp = this.temp.filter(function (d) {
            //    var temp= d.price.toLowerCase().indexOf(val) !== -1 || !val;
            var temp = d.product.toLowerCase().indexOf(val) !== -1 || !val;
            return d.product.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        // this.table.offset = 0;
    };
    HomePageVendorComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    HomePageVendorComponent.prototype.ngOnInit = function () {
        console.log("this.getproductList()", this.apiData);
        console.log('---------->>>', this.rows);
        // console.log('----------->>>',this.temp)
        // this.onChangeTable(this.config);
    };
    /* public changePage(page:any, data:Array<any> = this.data):Array<any> {
        let start = (page.page - 1) * page.itemsPerPage;
        let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
      }
    
      public changeSort(data:any, config:any):any {
        if (!config.sorting) {
          return data;
        }
    
        let columns = this.config.sorting.columns || [];
        let columnName:string = void 0;
        let sort:string = void 0;
    
        for (let i = 0; i < columns.length; i++) {
          if (columns[i].sort !== '' && columns[i].sort !== false) {
            columnName = columns[i].name;
            sort = columns[i].sort;
          }
        }
    
        if (!columnName) {
          return data;
        }
    
        // simple sorting
        return data.sort((previous:any, current:any) => {
          if (previous[columnName] > current[columnName]) {
            return sort === 'desc' ? -1 : 1;
          } else if (previous[columnName] < current[columnName]) {
            return sort === 'asc' ? -1 : 1;
          }
          return 0;
        });
      }
    
      public changeFilter(data:any, config:any):any {
        let filteredData:Array<any> = data;
        this.columns.forEach((column:any) => {
          if (column.filtering) {
            filteredData = filteredData.filter((item:any) => {
              return item[column.name].match(column.filtering.filterString);
            });
          }
        });
    
        if (!config.filtering) {
          return filteredData;
        }
    
        if (config.filtering.columnName) {
          return filteredData.filter((item:any) =>
            item[config.filtering.columnName].match(this.config.filtering.filterString));
        }
    
        let tempArray:Array<any> = [];
        filteredData.forEach((item:any) => {
          let flag = false;
          this.columns.forEach((column:any) => {
            if (item[column.name].toString().match(this.config.filtering.filterString)) {
              flag = true;
            }
          });
          if (flag) {
            tempArray.push(item);
          }
        });
        filteredData = tempArray;
    
        return filteredData;
      }
    
      public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
        if (config.filtering) {
          Object.assign(this.config.filtering, config.filtering);
        }
    
        if (config.sorting) {
          Object.assign(this.config.sorting, config.sorting);
        }
    
        let filteredData = this.changeFilter(this.data, this.config);
        let sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
      }
    
      public onCellClick(data: any): any {
        console.log(data);
      } */
    HomePageVendorComponent.prototype.getproductList = function () {
        var _this = this;
        var temp = {
            lang: "eng"
        };
        this.service.postApi('vendor/vendorOrderList', temp, 1).subscribe(function (response) {
            console.log("response--->>", response);
            if (response['statusCode'] == 200) {
                // this.service.showSuccess("getProduct")
                // console.log("asdfasdf", response['result'])
                _this.apiData = response['result'];
                _this.rows = response['result'];
                _this.temp = response['result'].slice();
                console.log('$$$$$$$sdfsdf$$$$$$$$$$$', _this.apiData);
                if (_this.apiData.length < 0) {
                    _this.isVaild = false;
                }
                // this.getBrandListdata()
            }
            else {
                // console.log(response['result'])
                _this.service.showError('Invalid Email');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    HomePageVendorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page-vendor',
            template: __webpack_require__(/*! ./home-page-vendor.component.html */ "./src/app/Components/home-page-vendor/home-page-vendor.component.html"),
            styles: [__webpack_require__(/*! ./home-page-vendor.component.css */ "./src/app/Components/home-page-vendor/home-page-vendor.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HomePageVendorComponent);
    return HomePageVendorComponent;
}());



/***/ }),

/***/ "./src/app/Components/inventory-listing/inventory-listing.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/Components/inventory-listing/inventory-listing.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/inventory-listing/inventory-listing.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/inventory-listing/inventory-listing.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <!--Header Start Here-->\n    <app-header></app-header>\n    <!--Header End Here-->\n    <!-- Sidebar Start Here-->\n    <app-side-bar></app-side-bar>\n    <!-- Sidebar end Here-->\n  \n    <div id=\"page-content-wrapper\">\n      <div class=\"dashboardConbx\">\n  \n        <div class=\"allproductslistingwarp\">\n          <div class=\"imports_row clearfix\">\n            <h3>Inventory List</h3>\n          </div>\n        </div>\n  \n        <!--Recent Order Table Section Start Here-->\n        <div class=\"recentorder_tablewrap\">\n          <div class=\"filter_search_row clearfix\">\n            <div class=\"filterbtnbx\">\n              <div class=\"dropdown\">\n                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Filter\n                  <span class=\"caret\"></span></button>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"#\">Edit</a></li>\n                  <li><a href=\"#\">Delete</a></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"filter_search_inputbx\"><span class=\"glyphicon glyphicon-search\"></span><input class=\"form-control\"\n                type=\"text\" placeholder=\"Search Products\" /></div>\n          </div>\n          <div class=\"recentOrderTable\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th align=\"left\" valign=\"middle\">\n                      <span class=\"checkboxbx\">\n                        <input type=\"checkbox\" id=\"selectall1\">\n                        <label for=\"selectall1\">&nbsp;</label>\n                      </span></th>\n                    <th>Product Variant</th>\n                    <th class=\"text-center\">SKU Code</th>\n                    <th class=\"text-center\">Units Sold</th>\n                    <th class=\"text-center\">Quantity</th>\n                    <!-- <th class=\"text-center\">Update Stock</th> -->\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let product of apiData;let i = index\">\n                    <td align=\"left\" valign=\"middle\"><span class=\"checkboxbx\">\n                        <input type=\"checkbox\" id={{i}}>\n                        <label for={{i}}>&nbsp;</label>\n                      </span></td>\n                    <td align=\"left\" valign=\"middle\" class=\"lineH\">\n                      <div class=\"pro_img_wd\"><img alt=\"\" src={{product.image}}></div>\n                      <div class=\"pro_info_rw\" (click)=\"variants(product._id)\">{{product.product}}</div>\n                    </td>\n                    <td align=\"center\">{{product.inventorySKU}}</td>\n                    <td align=\"center\">{{product.unitSold}}</td>\n                    <td align=\"center\">{{product.quantity}}</td>\n                    <!-- <td class=\"updateddigit\">\n                      <div class=\"update_stock_box\">\n                        <div class=\"updatebx clearfix\">\n                          <div class=\"inputfillbx\"><input class=\"form-control\" type=\"text\" placeholder=\"0\" /></div>\n                          <button type=\"button\" class=\"btn btn-primary updatestockbtnbx\">\n                            <span class=\"tickicon\"></span>\n                          </button>\n                        </div>\n                      </div>\n                    </td> -->\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <!--Recent Order Table Section End Here-->\n  \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/Components/inventory-listing/inventory-listing.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/inventory-listing/inventory-listing.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InventoryListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryListingComponent", function() { return InventoryListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryListingComponent = /** @class */ (function () {
    function InventoryListingComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    InventoryListingComponent.prototype.ngOnInit = function () {
        this.getproductList();
    };
    InventoryListingComponent.prototype.getproductList = function () {
        var _this = this;
        var temp = {
            lang: "eng"
        };
        this.service.getApi('admin/getProductList', 1).subscribe(function (response) {
            // console.log("response-======>>>",response)
            if (response['statusCode'] == 200) {
                console.log('===================>>>>', response['result']);
                _this.getProductCount = response['result'];
                _this.getProductCount = _this.getProductCount.length;
                _this.apiData = response['result'];
            }
            else {
                // console.log(response['result'])
                _this.getProductCount = 0;
                _this.apiData = false;
                console.log('this.apidtaa', _this.apiData);
                _this.service.showError('NOT FOUND');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    InventoryListingComponent.prototype.variants = function (val) {
        // this.route.navigate('/productvariant/?asf='+val)
        this.route.navigate(['/productvariant/' + val]);
        this.service.setTitle('Product Variance');
    };
    InventoryListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory-listing',
            template: __webpack_require__(/*! ./inventory-listing.component.html */ "./src/app/Components/inventory-listing/inventory-listing.component.html"),
            styles: [__webpack_require__(/*! ./inventory-listing.component.css */ "./src/app/Components/inventory-listing/inventory-listing.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InventoryListingComponent);
    return InventoryListingComponent;
}());



/***/ }),

/***/ "./src/app/Components/live-view/live-view.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Components/live-view/live-view.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/live-view/live-view.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Components/live-view/live-view.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n\n  <div id=\"page-content-wrapper\">\n    <div class=\"dashboardConbx\"> \n      <!--Reports Live View Row Start Here-->\n      <div class=\"totalSeleswrap live_view_row\">\n        <div class=\"row clearfix\">\n          <div class=\"col-xs-6 col-sm-3\">\n             <div class=\"live_view_headingsbx\">\n               <h4>Visitor Right Now</h4>\n               <h3>08</h3>\n             </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-3\">\n              <div class=\"live_view_headingsbx\">\n                  <h4>Today;s Total</h4>\n                  <h3>08</h3>\n                </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-3\">\n              <div class=\"live_view_headingsbx\">\n                  <h4>Orders</h4>\n                  <h3>08</h3>\n                </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-3\">\n              <div class=\"live_view_headingsbx\">\n                  <h4>Sales</h4>\n                  <h3>INR 345</h3>\n                </div>\n          </div>\n        </div>\n      </div>\n      <!--Reports Live View Row End Here-->\n       <!--Reports On Google Map Start Here-->\n       <div class=\"totalSeleswrap live_view_row\">\n            <div class=\"map_live_view\">\n                <div #gmap style=\"width:1000px;height:805px\"></div>\n            </div>\n        </div>\n       <!--Reports On Google Map End Here-->\n  </div>\n\n  </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/Components/live-view/live-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/live-view/live-view.component.ts ***!
  \*************************************************************/
/*! exports provided: LiveViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveViewComponent", function() { return LiveViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/app/Components/live-view/style.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LiveViewComponent = /** @class */ (function () {
    // map: google.maps.Map;
    function LiveViewComponent(service) {
        this.service = service;
        this.locations = [];
        this.service.setTitle("Live View");
        // this.initialize1()
    }
    //  map: google.maps.Map;
    LiveViewComponent.prototype.ngOnInit = function () {
        var mapProp = {
            center: new google.maps.LatLng(29.448414, 77.2898482),
            zoom: 5,
            streetViewControl: false,
            styles: _style__WEBPACK_IMPORTED_MODULE_2__["style"],
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], LiveViewComponent.prototype, "gmapElement", void 0);
    LiveViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live-view',
            template: __webpack_require__(/*! ./live-view.component.html */ "./src/app/Components/live-view/live-view.component.html"),
            styles: [__webpack_require__(/*! ./live-view.component.css */ "./src/app/Components/live-view/live-view.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], LiveViewComponent);
    return LiveViewComponent;
}());



/***/ }),

/***/ "./src/app/Components/live-view/style.js":
/*!***********************************************!*\
  !*** ./src/app/Components/live-view/style.js ***!
  \***********************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
const style=[
    {
      // "featureType": "administrative",
  
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      // "featureType": "administrative",
  
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      // "featureType": "administrative",
  
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      // "featureType": "administrative",
  
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ]

/***/ }),

/***/ "./src/app/Components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    box-sizing: border-box;\n  }\n  \n  body {\n    padding: 0;\n    margin: 0;\n  }\n  \n  #notfound {\n    position: relative;\n    height: 100vh;\n  }\n  \n  #notfound .notfound {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  \n  .notfound {\n    max-width: 767px;\n    width: 100%;\n    line-height: 1.4;\n    padding: 0px 15px;\n  }\n  \n  .notfound .notfound-404 {\n    position: relative;\n    height: 150px;\n    line-height: 150px;\n    margin-bottom: 25px;\n  }\n  \n  .notfound .notfound-404 h1 {\n    font-family: 'Titillium Web', sans-serif;\n    font-size: 186px;\n    font-weight: 900;\n    margin: 0px;\n    text-transform: uppercase;\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAG2YAABzjgAA+swAAIT6AAB5gQAA/RMAADBtAAASKQ0eJk4AABJbSURBVHja7Jt3XBTX9sDPndkpu8sWmixFAekCagAbUVFRozGWWLHAs7yYiMYYk4CxRhOfsQZLYp5GQ/BFk9hiiwkxFqIEY4kiURE1ICqIguyyMzuz094fi9gwRYjw+z3vZz/7x+69d+Y7p9xzzr2DFEWB/6WGwf9Yewr8FPgp8FPgp8BPgZ8CPwV+Cvx/Cjg7O7t7fPf4bvF7v9nb6IiV+m4XL150d3NX02qNWkOoiMOHDyuNqdW/hOfMnmOxWCiaomgKV+Fr/r3m/7NKFxUVbdu2jSRJh+7gOJ6Xl9eogFV1HF9cXHzgwIGysjKCIHQ63XfffSfJEqWiFEVBCAGARqMBAIZhSkpKbty4wTIsAGi0GldXV5PJZDQanzAwqksB4OjRowP6DygvL8cwzGEhAECraQzHQAGEEM/zPj4+LcJa5ObmlpWVcRzneAqKopAkaTQavb29o6OjO8R26NixY0BAQGMHThyVuGXLFlpN1/g/QAD3zMeyrIMNwzAMwwCgBtjxLcuyLMmiJFIk1aZNm0GDByUkJLi6ujZSG/bw8JBl+S4t3EfrQNVqtSRJqlQqhJCD1oGNEMIwjCAIiqY0Gg2GYTlHc6ZMmRIdFb1kyRKWZRujhEtKSvr26Zubl0tRFK7CUd1mQwgpiiKKop23h4eHpy1Pi4uLa1wS9vT0zNyXmTwh2c3VzcbYeI6vC7BjLEEQGq0mPz+/d6/eK1esrHdg/J133qnLeLVa3at3LzWt3rNnD0LIobr1sHgQKgDYvXu3oihdunRpLCrtaLt27kpMTBREgSTJeiz6IoQkSWIZdunSpa9Nea2xAF+8eDEmOqbeaWuYRVG0sbZdu3b1fr53owDu369/ZmYmraZrnadGvR/7Kgghu93upHU6kn0kMDCwgZ3WoYOH9uzZQ1K1yNbhci1VTGVlZWVlpShKf2jbjg6iKNZEaTVrm9lsTp6QXC8aVCfg5cuXEwThiCgeuG9LldVisYQH+EweO3ho7zgby1qqrH8kScFsNsuiZLFYWNZ2LzOtpg8cOLB+3fqGVOnS0tLQkFBZljEVVhNvIIQEQWQYa1hAs5SXhyf07Uo7G0CWv/nm0KtzVly+VqrT6XAcf+CiCCHWZrPz9pnJIxKH9z1+/Mzkd1aYGc7JSevoiRAS7IKzs/Pp3NMuLi4Nkw9v/mozoSIM9zSj0UhRNABMGT3IcmaPcv2IcnGfkp+p5Gcq149cy9k8uFdnh1rpdDrjnabT6QBAQ1MZS6YpJdlK0UGlLOfwF8t1GjVF0Uaj8c7sBkJFLF26tI758ONLeGLyxPXr19e4K4QQw7A4UtbOf2PUyL7A8SCI9w0gCUBo8679aZ9uzT75673/xHeIWpDyUpt2LcHKguN+jPr1n3w1bsYynU5XE4QLdiEwMPDY8WMEQTxplVYUpeOzHU/nniYIwuFjOI4DRf4ibWb/gT3AbIVap0UItGqF5X48lvvDkZMlZeVeTVzjO0Z3ahMJJAk27r6eNNV/dOrO/T8ZjcaaZINhmJycnJiYmCcNbDabw0LDrIzV8fhFUWIYa8bClMTRA6HS8keOEgFFgQoHWQEMgSgBz4P80G3QVEH+5aj+E0TAaIp0PFYba5s7b25qauqT9tJms9lqtSKodqQMY52Q8ELiqH5grvrjwbICNg6qGGBYqGLAxtVCCwAcHxQRPHpgT852N3PCcOzUL6caYFnieV6SJECAEGJZ1t/HtGDaeOAFeJS+PF6AbRfeHDdEr9VwHO9YpRBCRUVFDVnTUhRFEIRp4xMMHm4gCI/UYRUO2F9n5u2+oc2H9I7jOFvNAmauNAuPutDfB6xSqRzWy7C2gKZeiS/2AMb2iHwMt1rZ1PfXinbx95hVOJAkPKwfovTSkF4YQqIoAgACxPN8AwATBIHjOACIgn3MwJ5qN2eQpNq7aui0jB2L1mxatzUTtJra+5DEzZsVuXn5QJMPG09MVIuoFkEsawMABRRH/eRJA9M0TRCEIAhqihrcqxPw9kfRZmcd37Tn4PbV89Iyvr56qRhI4mEVkGR59LRlAya9W2W2wgMwsoJrNS8n9JFlyVFCMjobHWXgJwpMkiRFURzHRQT7hwT5gr02HcMxroqdPH/1m2MGDhjVb0B8hynzVwOOA7rfvNXUpJnLXY26uJjIqf/6uBYhs9ywvl2beTZhWJsCioeHRwM4LZVKRdO0oiiRwX6gpmt3zhQ1f9V/vD3cxozoCzcrpk8c8eulKxu+2AN3qpwAABS5YFn6qfOX1y58M23WhKxjZ7779kfQqu+bR5J0TVwnjeon2HlZkg0GQwMAkySpVqsBoHVY80cuObx9QHyH1XMmgSSBXdAZ9R/PmeRs0IEo1YQWR7J/Sd/+/cYPplE0ZXB3WfjG2InvflRytRRU+H1T2bhxCX283F04nsPwOq0sjx9Lx8bGtvJ1XThjgl5NgSQ/yhuBrIAgVterHerK8dXPCENms5XleE9vD+AFwBBg2Mef73quY5S/nw+I4gOBV86JvMlzVrTt3H3VqlWPXy177JEGg6F7bJTe3eX3oiuHbTs0AEG1b6vRCFkxGHQGFwPYBUAAigKy9MrYQcDbQRAAQwDorrHYuPZxbdtEhri5uTVM4EHTdFn5bXAU4hG6z/1iGPzJlUOW70uqFADWBpIECEmiDAgBjt+N1aqYi0XXg4ODGwZYr9ffNlsdt2Ln7WfPXgINDRQJWo0iSUVXrkFdjE2FX79Z8fr8jzhBAJ0T0BQ4aTiLtaDwakhISJ0KwI890sfH58rlXFAUQEgmVKmL10aG+CcOfb7wSknaJ19169A69fUxYH3cHRNJ8vYxNfVqkjBpbr/nOvl7eQCGnEjCrmD+/v4NI+GYmJhzF4uAt4Mi0yTxyaKUm+WV4T3+8fbCfw/rH//a2MGPDDb/VIwOmCRNnTKmuPTm13uzfjh6uvB62elzlyMiI+tY4nl8Cbdu3fr8b9dKr5eZvJqAXfRwd1m7cvbZS1eC/XzGvjIcbtyqPen7Czbj9NXGnZUW5qctq0hnA1DEqKTU2NjODVa1bNasmcnb5+CxXKBIQAB2AQRxxayJG3bsO7EvG2iqTvel0547fW7s9KVLUseTeidg2PILRT/89Ev37t0bDBjH8RdffPGL3QfvXTmi27ca9Fynl2elgSQD9riT67V5ufldRkwd8lznFwf0ACsLavr7IyfcPb3btm3bkHXpxMTEwyfPns/NvytPXvhgZvKZC7+9u3Q96J3+ct6P42DQ7dlzqE2/l1uG+K9ZlAI8DwgpNm5Fxtfjx4+vS55UD8ABAQGDhgyd++HngGPVbHbBy89n/ftvzV6Zkf7pVjDo/uyCjGGg03KCOHPeqhf+OX1gr05fr51PqHAQRNBpN237/vptJikpqe6F+Lo+sBkzZrRq1Wrnzv39BvaASisgACszMuEFBeCVmR+cOndp9pTRLiY3EEQQBJDkB9MMDANSBSQpVjFbNu+ds+zTm7fNny5KGT28L9gF4O2gpm8UXntr8dpFy5br9fqG3Hmoaenp6bOmvXVw0wcBwX5gtVUHkjqn48dyX5+3qujajf49O/bvHhsdHujsbACKBIQBKIAQSJJoZXPzf9v+/eGvdh8svVWRNLDn9AkjPH29wcqCLANF2Th+wLjpnkER6enpUB8N1csO1eTJkw/s3fVtxiJvP2+oYqp/VdMgitv2Zq3+fOexM/lqmvLycA3x8/HzMalpymxl8y9fOXfxSll5ZYCv19A+XZIG9PD297lbwVfTHGsb+eq8GyxkZmY6jj81FmBJkpKTk3/ct/fTxdPaPRsFDFudAyIEGhpkufRqaUHhtYLCa1dLbpabLTaOxzDMw9W5RaBvVERQUPOmoKbvomIY6LQX8gpemraYcjZt2rSpHs/1oHrcxZ47d+6yxYtnThqZnDhA62qsBnCcZVKpQIUDhgOGAN2TAzmSB0c3B6qGVjh+3ZffzFiybtCw4UuXLnUk3o0RGAD279+fkJDgSirjhvUZ2Kdb8wBfIAmQZBAEEKXfq1oTKqBImWF3fn9kRcaOW4w4e/bswYMHQ323ega2WCzBLSLIvq+UZX+ruX6+lY9zt/at2j4TER4a6OPlAWoaMASKArICoACgaoHbhcLfir/Zdzh9y7fHCq7rtPTJkyfrZb//bwfOyMiY+mFG2437JA7MF/JvHN1/69hB/uJpnfWmv6smvEVIkH9TP2+TQaclCZUkyxXmqrxzBT+fOHOysIw1BTUdOM7ULu7M1GEje8SuXr367wBW1e90Fy5cwEhKYiTAcENgiHN4iDJmglAlMFcLru7dfGLNewAihmEtg5tjhIqxMvm/FYPapdkrM0I69DCEROI0AIKWyzanvxTv5+dXl02zvyXSeri5u7ndPPzNqSlDJdaKUSALIPOAE4QhqEXLt+bEbj3p0iYeKUozk8uKeZP9XJ10IVEdt/wc/upUl5aROAUAINtBHx7ccsnWWf9alJGR0ahVuqysLDoqWjsi5fKHM2hPv7A5H+MaPelsIl3ccDUAAqQCsUou/uKj8ytmqdhKfbehrResU5uchCrgrl+vyj91+8Qha0Fe4KsL3ONbFm/YUTAn6dczub6+vo1Upd977z0hpJ0hvC3h3ETjG3jsH50BQyqdUePtr2kepg95xhjVydgy2v+fk65tWUt5xbVL/5K/ZS/87LMbmV+ac38SLJWOeQhnN0S8WpixmCYJx4GI+mz19S5Bbm6uVm/suKew6eAJpp4JvS4oTgERD1/Os+dQv1FvAoDGyz80Nc0pMLIWrVMRCCc8n090DohYuXJl/b7zUG/AvXr18ktK7Zmn0O5erdN2d8thCWOd6qmtFm9t/+VJtc6wb9++Rge8detW2tXU7Sdzm/VHaDev+GNc+y9y4XFPmWK0RuffoungCS+UKKGpH5pMpuLi4kb0VgvLsjNnzvR/eZ7GV399xzpjVGfag5Js1kfFVbqQZ2gPH61vsFNAZO1VALXWresA5lKe/Rb4jk4mnh0wcuRIm83WWJal5cuXl+CGpgljbVe5iqM/mJ4fJdlAFxqp9Q97sHbv2Sz07VWx2486t+7UpNug2O05ga8t0Po+WFjHKbVrbC+upIgvqwAZQt5Oy70tTJ06tVF46cLCwoULFwYu3K4y4Ley9su8zTk6TrIB6erUdNik8+9PBACc1hhatvN8Ick9rh9tcgEAkakChEh3TcjUac2GTTbnHTWfzq7MzeFKCu23bxki2ukjYgCQ7WoB5dEOV1MR729MH9PpmWeeGT9+fAMDz5s3T9Ohj1tcV5mH0m//Y4zqTLo7SQxILHg8N5wvu6bxDzW27KD1D8QokDgQrYCrQZFEDFflTU9RaYwBydPdOnZ1j+uqiCCyksRakYog9GrK1NRy9rhL+3aiFZyC/Fq8s/71qS+Gh4c/++yzDQaclZW1cduONhtPggJCpb3yxKGgN9Ic5zQUCUijc0jqfFBAFqo/NUV2RRIAw25m7aVcTc3l6bJwJ5VQ4ZjRAAogHLTNW1jOHAWYCABiFTTp3sM6fl5iYmJ2drbJZGoAG5YkKSUlxWfYZKcgXwCoPHFYFgSX9t1l/g6XDKIVRAZk+wNvu4DEsYTepf3GH1su2aaId/5VQJFBEUGRABTQBbdifjsr89WbjyID/i9N5cM6JSUl2e32BgDesGFDXkmF75g3JBsgHEq/3egc04Vyd1Kk349lARRQBAGpVGovI+Wqq7W/LIEuNJorLeZvlSPH/qEMsgihsz88WlwxY8aMJw1cXl4+a9asgEnvky5OIIP9Nlfx03dNeg5T5D8R20mgSCKudrp96mxVwSVUm1UpAmj8Q5FKZbtSUNNBEYDQO0Uu3LRyXcZnn332RIEXLFhg8ww29R4oMoBRcPvYIdnOOUfH1ejz7wlYAlBkWbD/nNjlzLShCAd4KEJRZCCMBtLFZL30K3bP6QeJBV1YUNistRMnTjx16tQTclr5+flr1q0PW5mJcAAekApu7t9qjI6jPQwi84fpGch2u8hYCKNbwIRZOG0ABWo5j6YAToMupHXV+ZOAjbt3uFgFphf6VV2YNmLEiKysrL96IOBxJJySkuLcc6RL2xiH9Qq3+Yqc703Pj/pTiSYCmbeJVWacVjd/5VWfIUnyo0/V6VvEVJ09XuO37pVzwKSZFaawsWPH/u0qvXv37u9+zPF7abpsBwDAKKj8JVsW7S5t4/9QnwEAYSBabksci1G0xIBkq/2hIAwUBfQRbe0VZaLFhhGA8DsfVXVqHb4gI+tS6ezZs//S/f93AMTXNllyG4JBAAAAAElFTkSuQmCC');\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-size: cover;\n    background-position: center;\n  }\n  \n  .notfound h2 {\n    font-family: 'Titillium Web', sans-serif;\n    font-size: 26px;\n    font-weight: 700;\n    margin: 0;\n  }\n  \n  .notfound p {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    margin-bottom: 0px;\n    text-transform: uppercase;\n  }\n  \n  .notfound a {\n    font-family: 'Titillium Web', sans-serif;\n    display: inline-block;\n    text-transform: uppercase;\n    color: #fff;\n    text-decoration: none;\n    border: none;\n    background: #5c91fe;\n    padding: 10px 40px;\n    font-size: 14px;\n    font-weight: 700;\n    border-radius: 1px;\n    margin-top: 15px;\n    transition: 0.2s all;\n  }\n  \n  .notfound a:hover {\n    opacity: 0.8;\n  }\n  \n  @media only screen and (max-width: 767px) {\n    .notfound .notfound-404 {\n      height: 110px;\n      line-height: 110px;\n    }\n    .notfound .notfound-404 h1 {\n      font-size: 120px;\n    }\n  }"

/***/ }),

/***/ "./src/app/Components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n  <!-- <div class=\"notfound\">\n    <div class=\"notfound-404\">\n      <h1>404</h1>\n    </div>\n    <h2>Oops! This Page Could Not Be Found</h2>\n    <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>\n    <a href=\"#\">Go To Homepage</a>\n  </div> -->\n  <ng-chat [adapter]=\"adapter\" [userId]=\"userId\"></ng-chat>\n</div>"

/***/ }),

/***/ "./src/app/Components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { MyAdapter } from 'my-adapter';
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
        this.title = 'app';
        this.userId = 999;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/Components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/Components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/Components/order-list/order-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Components/order-list/order-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/order-list/order-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Components/order-list/order-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n  <!-- Sidebar end Here-->\n\n  <div id=\"page-content-wrapper\">\n    <div class=\"dashboardConbx\">\n      <div class=\"allproductslistingwarp\">\n        <div class=\"imports_row tabsrow clearfix\">\n          <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a data-toggle=\"tab\" (click)=\"getOrderList()\" href=\"#all_orders\">All orders</a></li>\n            <li><a data-toggle=\"tab\" (click)=\"changeStatus('PENDING')\" href=\"#order_pending\">Pending</a></li>\n            <li><a data-toggle=\"tab\" (click)=\"changeStatus('INPROGRESS')\" href=\"#tobe_prepared\">To be prepared</a></li>\n            <li><a data-toggle=\"tab\" (click)=\"changeStatus('ORDERSHIPPED')\" href=\"#readyto_ship\">Ready to Ship</a></li>\n            <li><a data-toggle=\"tab\" (click)=\"changeStatus('DISPATCH')\" href=\"#in_transit\">In-Transit</a></li>\n            <li><a data-toggle=\"tab\" (click)=\"changeStatus('PLACED')\" href=\"#order_comleted\">Completed</a></li>\n          </ul>\n        </div>\n      </div>\n      <!--Recent Order Table Section Start Here-->\n      <div class=\"recentorder_tablewrap\">\n        <div class=\"tab-content\">\n          <!--All Orders Listing Table Start Here-->\n          <div id=\"all_orders\" class=\"tab-pane fade in active\">\n            <div class=\"filter_search_row clearfix\">\n              <div class=\"filterbtnbx\">\n                <div class=\"dropdown\">\n                  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Filter <span\n                      class=\"caret\"></span></button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Edit</a></li>\n                    <li><a href=\"#\">Delete</a></li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"filter_search_inputbx\"><span class=\"glyphicon glyphicon-search\"></span>\n                <input class=\"form-control\"  type=\"text\" placeholder=\"Search Order\" #val (input)=\"searchData(val.value)\" />\n              </div>\n            </div>\n            <div class=\"recentOrderTable\" [hidden]=\"!isvalid\">\n\n              <!-- <ng-template #elseTemplate>\n              \n            </ng-template>\n              -->\n              <!-- <div class=\"filter_search_row clearfix\">\n                <div class=\"filterbtnbx\">\n                  <div class=\"dropdown\">\n                    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Filter <span\n                        class=\"caret\"></span></button>\n                    <ul class=\"dropdown-menu\">\n                      <li><a href=\"#\">Edit</a></li>\n                      <li><a href=\"#\">Delete</a></li>\n                    </ul>\n                  </div>\n                </div>\n                <div class=\"filter_search_inputbx\"><span class=\"glyphicon glyphicon-search\"></span>\n                  <input class=\"form-control\"  type=\"text\" placeholder=\"Search Order\" #val (input)=\"searchData(val.value)\" />\n                </div>\n              </div> -->\n              <div class=\"table-responsive\">\n                <table class=\"table orderlist\">\n                  <thead>\n                    <tr>\n                      <th valign=\"middle\"> <span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"selectall1\">\n                          <label for=\"selectall1\">&nbsp;</label>\n                        </span></th>\n                      <th>Order</th>\n                      <th>Date</th>\n                      <th>Customer</th>\n                      <th>Payment status</th>\n                      <th class=\"text-center\">Fulfillment status</th>\n                      <th class=\"text-right\">Total</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let product of apiData;let i = index\">\n                      <td valign=\"middle\"><span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"checkrow1\">\n                          <label for=\"checkrow1\">&nbsp;</label>\n                        </span></td>\n                      <td valign=\"middle\">{{product?.orderId}}</td>\n                      <td>{{product?.createdAt  | date:fullDate}}</td>\n                      <td>{{product?.customerName}}</td>\n                      <td><button type=\"button\" class=\"btn btn-primary paid\">{{product?.paymentStatus}}</button></td>\n                      <td class=\"text-center\"><span class=\"pending\">{{product?.status}}</span></td>\n                      <td class=\"text-right\">{{ product?.totalAmountPaid | currency:'EUR' }}</td>\n                    </tr>\n\n                  </tbody>\n                </table>\n              </div>\n              </div>\n              <div class=\"recentOrderTable\" [hidden]=\"isvalid\">\n                not   found\n              </div>\n          </div>\n          <!--All Orders Listing Table End Here-->\n\n          <!--Pending Orders Listing Table Start Here-->\n          <!-- <div id=\"order_pending\" class=\"tab-pane fade\">\n            <div class=\"filter_search_row clearfix\">\n              <div class=\"filterbtnbx\">\n                <div class=\"dropdown\">\n                  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Filter <span\n                      class=\"caret\"></span></button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Edit</a></li>\n                    <li><a href=\"#\">Delete</a></li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"filter_search_inputbx\"><span class=\"glyphicon glyphicon-search\"></span>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Search Order\" />\n              </div>\n            </div>\n            <div class=\"recentOrderTable\">\n              <div class=\"table-responsive\">\n                <table class=\"table orderlist\">\n                  <thead>\n                    <tr>\n                      <th valign=\"middle\"> <span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"selectall1\">\n                          <label for=\"selectall1\">&nbsp;</label>\n                        </span></th>\n                      <th>Order</th>\n                      <th>Date</th>\n                      <th>Customer</th>\n                      <th>Payment status</th>\n                      <th class=\"text-center\">Fulfillment status</th>\n                      <th class=\"text-right\">Total</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td valign=\"middle\"><span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"checkrow1\">\n                          <label for=\"checkrow1\">&nbsp;</label>\n                        </span></td>\n                      <td valign=\"middle\">#1002</td>\n                      <td>Yesterday at 4:46 pm</td>\n                      <td>-</td>\n                      <td><button type=\"button\" class=\"btn btn-primary paid\">Paid</button></td>\n                      <td class=\"text-center\"><span class=\"pending\">Pending</span></td>\n                      <td class=\"text-right\">Rs. 6,789.00</td>\n                    </tr>\n                    <tr>\n                      <td valign=\"middle\"><span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"checkrow1\">\n                          <label for=\"checkrow1\">&nbsp;</label>\n                        </span></td>\n                      <td valign=\"middle\">#1002</td>\n                      <td>Yesterday at 4:46 pm</td>\n                      <td>-</td>\n                      <td><button type=\"button\" class=\"btn btn-primary paid\">Paid</button></td>\n                      <td class=\"text-center\"><span class=\"readytoship\">Ready to Ship</span></td>\n                      <td class=\"text-right\">Rs. 6,789.00</td>\n                    </tr>\n\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div> -->\n          <!--Pending Orders Listing Table End Here-->\n\n          <!--To be Prepared Listing Table Start Here-->\n          <!-- <div id=\"tobe_prepared\" class=\"tab-pane fade\">\n            <div class=\"filter_search_row clearfix\">\n              <div class=\"filterbtnbx\">\n                <div class=\"dropdown\">\n                  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Filter <span\n                      class=\"caret\"></span></button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Edit</a></li>\n                    <li><a href=\"#\">Delete</a></li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"filter_search_inputbx\"><span class=\"glyphicon glyphicon-search\"></span>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Search Order\" />\n              </div>\n            </div>\n            <div class=\"recentOrderTable\">\n              <div class=\"table-responsive\">\n                <table class=\"table orderlist\">\n                  <thead>\n                    <tr>\n                      <th valign=\"middle\"> <span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"selectall1\">\n                          <label for=\"selectall1\">&nbsp;</label>\n                        </span></th>\n                      <th>Order</th>\n                      <th>Date</th>\n                      <th>Customer</th>\n                      <th>Payment status</th>\n                      <th class=\"text-center\">Fulfillment status</th>\n                      <th class=\"text-right\">Total</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td valign=\"middle\"><span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"checkrow1\">\n                          <label for=\"checkrow1\">&nbsp;</label>\n                        </span></td>\n                      <td valign=\"middle\">#1002</td>\n                      <td>Yesterday at 4:46 pm</td>\n                      <td>-</td>\n                      <td><button type=\"button\" class=\"btn btn-primary paid\">Paid</button></td>\n                      <td class=\"text-center\"><span class=\"pending\">Pending</span></td>\n                      <td class=\"text-right\">Rs. 6,789.00</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div> -->\n          <!--To be Prepared Listing Table End Here-->\n\n          <!--To be Prepared Listing Table Start Here-->\n          <!-- <div id=\"readyto_ship\" class=\"tab-pane fade\">\n            <div class=\"filter_search_row clearfix\">\n              <div class=\"filterbtnbx\">\n                <div class=\"dropdown\">\n                  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Filter <span\n                      class=\"caret\"></span></button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Edit</a></li>\n                    <li><a href=\"#\">Delete</a></li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"filter_search_inputbx\"><span class=\"glyphicon glyphicon-search\"></span>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Search Order\" />\n              </div>\n            </div>\n            <div class=\"recentOrderTable\">\n              <div class=\"table-responsive\">\n                <table class=\"table orderlist\">\n                  <thead>\n                    <tr>\n                      <th valign=\"middle\"> <span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"selectall1\">\n                          <label for=\"selectall1\">&nbsp;</label>\n                        </span></th>\n                      <th>Order</th>\n                      <th>Date</th>\n                      <th>Customer</th>\n                      <th>Payment status</th>\n                      <th class=\"text-center\">Fulfillment status</th>\n                      <th class=\"text-right\">Total</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td valign=\"middle\"><span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"checkrow1\">\n                          <label for=\"checkrow1\">&nbsp;</label>\n                        </span></td>\n                      <td valign=\"middle\">#1002</td>\n                      <td>Yesterday at 4:46 pm</td>\n                      <td>-</td>\n                      <td><button type=\"button\" class=\"btn btn-primary paid\">Paid</button></td>\n                      <td class=\"text-center\"><span class=\"pending\">Pending</span></td>\n                      <td class=\"text-right\">Rs. 6,789.00</td>\n                    </tr>\n                    <tr>\n                      <td valign=\"middle\"><span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"checkrow1\">\n                          <label for=\"checkrow1\">&nbsp;</label>\n                        </span></td>\n                      <td valign=\"middle\">#1002</td>\n                      <td>Yesterday at 4:46 pm</td>\n                      <td>-</td>\n                      <td><button type=\"button\" class=\"btn btn-primary paid\">Paid</button></td>\n                      <td class=\"text-center\"><span class=\"readytoship\">Ready to Ship</span></td>\n                      <td class=\"text-right\">Rs. 6,789.00</td>\n                    </tr>\n\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div> -->\n          <!--To be Prepared Listing Table End Here-->\n\n          <!--In-Transit Listing Table Start Here-->\n          <!-- <div id=\"in_transit\" class=\"tab-pane fade\">\n            <div class=\"filter_search_row clearfix\">\n              <div class=\"filterbtnbx\">\n                <div class=\"dropdown\">\n                  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Filter <span\n                      class=\"caret\"></span></button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Edit</a></li>\n                    <li><a href=\"#\">Delete</a></li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"filter_search_inputbx\"><span class=\"glyphicon glyphicon-search\"></span>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Search Order\" />\n              </div>\n            </div>\n            <div class=\"recentOrderTable\">\n              <div class=\"table-responsive\">\n                <table class=\"table orderlist\">\n                  <thead>\n                    <tr>\n                      <th valign=\"middle\"> <span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"selectall1\">\n                          <label for=\"selectall1\">&nbsp;</label>\n                        </span></th>\n                      <th>Order</th>\n                      <th>Date</th>\n                      <th>Customer</th>\n                      <th>Payment status</th>\n                      <th class=\"text-center\">Fulfillment status</th>\n                      <th class=\"text-right\">Total</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td valign=\"middle\"><span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"checkrow1\">\n                          <label for=\"checkrow1\">&nbsp;</label>\n                        </span></td>\n                      <td valign=\"middle\">#1002</td>\n                      <td>Yesterday at 4:46 pm</td>\n                      <td>-</td>\n                      <td><button type=\"button\" class=\"btn btn-primary paid\">Paid</button></td>\n                      <td class=\"text-center\"><span class=\"pending\">Pending</span></td>\n                      <td class=\"text-right\">Rs. 6,789.00</td>\n                    </tr>\n                    <tr>\n                      <td valign=\"middle\"><span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"checkrow1\">\n                          <label for=\"checkrow1\">&nbsp;</label>\n                        </span></td>\n                      <td valign=\"middle\">#1002</td>\n                      <td>Yesterday at 4:46 pm</td>\n                      <td>-</td>\n                      <td><button type=\"button\" class=\"btn btn-primary paid\">Paid</button></td>\n                      <td class=\"text-center\"><span class=\"readytoship\">Ready to Ship</span></td>\n                      <td class=\"text-right\">Rs. 6,789.00</td>\n                    </tr>\n\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div> -->\n          <!--In-Transit Listing Table End Here-->\n\n          <!--Order Comleted Listing Table Start Here-->\n          <!-- <div id=\"order_comleted\" class=\"tab-pane fade\">\n            <div class=\"filter_search_row clearfix\">\n              <div class=\"filterbtnbx\">\n                <div class=\"dropdown\">\n                  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Filter <span\n                      class=\"caret\"></span></button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Edit</a></li>\n                    <li><a href=\"#\">Delete</a></li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"filter_search_inputbx\"><span class=\"glyphicon glyphicon-search\"></span>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Search Order\" />\n              </div>\n            </div>\n            <div class=\"recentOrderTable\">\n              <div class=\"table-responsive\">\n                <table class=\"table orderlist\">\n                  <thead>\n                    <tr>\n                      <th valign=\"middle\"> <span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"selectall1\">\n                          <label for=\"selectall1\">&nbsp;</label>\n                        </span></th>\n                      <th>Order</th>\n                      <th>Date</th>\n                      <th>Customer</th>\n                      <th>Payment status</th>\n                      <th class=\"text-center\">Fulfillment status</th>\n                      <th class=\"text-right\">Total</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td valign=\"middle\"><span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"checkrow1\">\n                          <label for=\"checkrow1\">&nbsp;</label>\n                        </span></td>\n                      <td valign=\"middle\">#1002</td>\n                      <td>Yesterday at 4:46 pm</td>\n                      <td>-</td>\n                      <td><button type=\"button\" class=\"btn btn-primary paid\">Paid</button></td>\n                      <td class=\"text-center\"><span class=\"pending\">Pending</span></td>\n                      <td class=\"text-right\">Rs. 6,789.00</td>\n                    </tr>\n                    <tr>\n                      <td valign=\"middle\"><span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id=\"checkrow1\">\n                          <label for=\"checkrow1\">&nbsp;</label>\n                        </span></td>\n                      <td valign=\"middle\">#1002</td>\n                      <td>Yesterday at 4:46 pm</td>\n                      <td>-</td>\n                      <td><button type=\"button\" class=\"btn btn-primary paid\">Paid</button></td>\n                      <td class=\"text-center\"><span class=\"readytoship\">Ready to Ship</span></td>\n                      <td class=\"text-right\">Rs. 6,789.00</td>\n                    </tr>\n\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div> -->\n          <!--Order Comleted Listing Table End Here-->\n\n        </div>\n      </div>\n      <!--Recent Order Table Section End Here-->\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/Components/order-list/order-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/order-list/order-list.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(service) {
        this.service = service;
        this.isvalid = true;
    }
    OrderListComponent.prototype.ngOnInit = function () {
        this.getOrderList();
        this.service.setTitle('Orders List');
    };
    OrderListComponent.prototype.getOrderList = function () {
        var _this = this;
        var temp = {
            lang: "eng"
        };
        this.service.postApi('vendor/vendorOrderList', temp, 1).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                // this.service.showSuccess("getProduct")
                // console.log("asdfasdf", response['result'])
                _this.apiData = response['result'];
                _this.isvalid = true;
                // this.rows = response['result'];
                // this.temp = [...response['result']];
                console.log('$$$$$$$sdfsdf$$$$$$$$$$$', _this.apiData);
                // this.getBrandListdata()
            }
            else {
                // console.log(response['result'])
                _this.isvalid = false;
                // this.service.showError('NOT FOUND')
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    OrderListComponent.prototype.changeStatus = function (val) {
        var _this = this;
        console.log("###", val);
        var temp = {
            status: val,
            lang: "eng"
        };
        console.log("@@@@@@@@@2", temp);
        this.service.postApi('admin/vendorOrderStatus', temp, 1).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                // this.service.showSuccess("getProduct")
                // console.log("asdfasdf", response['result'])
                _this.apiData = response['result'];
                _this.isvalid = true;
            }
            else {
                // console.log(response['result'])
                _this.isvalid = false;
                _this.service.showError('NOT FOUND');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    OrderListComponent.prototype.searchData = function (val) {
        var _this = this;
        console.log("###", val);
        var temp = {
            searchKeyword: val,
            lang: "eng"
        };
        console.log("@@@@@@@@@2", temp);
        this.service.postApi('vendor/searchVendorOrder', temp, 1).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                // this.service.showSuccess("getProduct")
                // console.log("asdfasdf", response['result'])
                _this.apiData = response['result'];
                _this.isvalid = true;
            }
            else {
                // console.log(response['result'])
                _this.isvalid = false;
                // this.service.showError('NOT FOUND')
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    OrderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-list',
            template: __webpack_require__(/*! ./order-list.component.html */ "./src/app/Components/order-list/order-list.component.html"),
            styles: [__webpack_require__(/*! ./order-list.component.css */ "./src/app/Components/order-list/order-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], OrderListComponent);
    return OrderListComponent;
}());



/***/ }),

/***/ "./src/app/Components/password-changed/password-changed.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/Components/password-changed/password-changed.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/password-changed/password-changed.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/password-changed/password-changed.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper \">\n  <!-- <app-sidebar></app-sidebar> -->\n  <div class=\"main-panel\">\n    <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n      <div class=\"container-fluid\">\n        <!-- <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\">Change Password</a>\n        </div> -->\n\n        <div class=\"bottom-down\" >\n          <img src=\"../../../assets/images/waki_logo.png\"  alt=\"\" style=\"height: 90px;\"/>\n         </div>\n        <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n              aria-label=\"Toggle navigation\">\n              <span class=\"sr-only\">Toggle Nav</span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n          </button> -->\n        <div class=\"collapse navbar-collapse justify-content-end\">\n          <!-- <app-side-icon></app-side-icon> -->\n        </div>\n      </div>\n    </nav>\n    <div class=\"content\">\n      <div class=\"container-fluid pt-4\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-tabs card-header-primary\">\n            <h4 class=\"card-title font-weight-bold\">Password Changed Successfully</h4>\n          </div>\n          <div class=\"card-body\">\n            <!-- <form class=\"form\" [formGroup]='passwordForm'> -->\n              <!-- <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.controls['oldPassword'].dirty && passwordForm.controls['oldPassword'].invalid)}\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"Old Password\" name='' formControlName='oldPassword' maxlength=\"16\"\n              id='oldPassword' />\n\n          <div class=\"errMsg\" *ngIf=\"passwordForm.get('oldPassword').dirty && passwordForm.get('oldPassword').invalid\">\n              <span [ngClass]=\"{error:passwordForm.get('oldPassword').hasError('required')}\" *ngIf=\"passwordForm.get('oldPassword').hasError('required')\" style=\"color:red;font-size:14px;\">*Please enter password.</span>\n              <span [ngClass]=\"{error:passwordForm.get('oldPassword').hasError('minlength') && !passwordForm.get('oldPassword').hasError('required')}\"\n                  *ngIf=\"passwordForm.get('oldPassword').hasError('minlength') && !passwordForm.get('oldPassword').hasError('required')\" style=\"color:red;font-size:14px;\">*Password must be of minimum 8 characters.</span>\n          </div>\n      </div> -->\n              <!-- <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" formControlName='newPassword'\n                maxlength=\"16\" id='newPassword' /> -->\n              <!-- <div class=\"errMsg\" *ngIf=\"passwordForm.get('newPassword').dirty && passwordForm.get('newPassword').invalid\">\n                <span [ngClass]=\"{error:passwordForm.get('newPassword').hasError('required')}\" *ngIf=\"passwordForm.get('newPassword').hasError('required')\"\n                  style=\"color:red;font-size:14px;\">*Please enter password.</span>\n                <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.controls['newPassword'].dirty && passwordForm.controls['newPassword'].invalid)}\">\n                  <span [ngClass]=\"{error:passwordForm.get('newPassword').hasError('minlength') && !passwordForm.get('newPassword').hasError('required')}\"\n                    *ngIf=\"passwordForm.get('newPassword').hasError('minlength') && !passwordForm.get('newPassword').hasError('required')\"\n                    style=\"color:red;font-size:14px;\">*Password must be of minimum 8 characters.</span>\n                </div>\n              </div> -->\n              <br>\n              <br>\n              <br>\n              <!-- <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.get('newPassword').value != passwordForm.get('confirmPassword').value) && passwordForm.controls['confirmPassword'].dirty}\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName='confirmPassword'\n                  maxlength=\"16\" id='confirmPassword' />\n                <div class=\"errMsg\" *ngIf=\"passwordForm.get('newPassword').value && passwordForm.get('confirmPassword').value\">\n                  <span [ngClass]=\"{error:passwordForm.get('newPassword').value != passwordForm.get('confirmPassword').value }\"\n                    *ngIf='passwordForm.get(\"newPassword\").value != passwordForm.get(\"confirmPassword\").value ' style=\"color:red;font-size:14px;\">*\n                    New password and confirm password does not match. </span>\n                </div>\n              </div> -->\n              <br>\n              <footer class=\"card__body\">\n\n                <!-- <button class=\"btn btn-primary full-width\" [disabled]=\"!passwordForm.valid\" (click)=\" save(passwordForm.value)\">SAVE</button> -->\n\n              </footer>\n            <!-- </form> -->\n            <br>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- <app-footer> </app-footer> -->\n  </div>\n</div>\n<!-- <app-logout></app-logout> -->"

/***/ }),

/***/ "./src/app/Components/password-changed/password-changed.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Components/password-changed/password-changed.component.ts ***!
  \***************************************************************************/
/*! exports provided: PasswordChangedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangedComponent", function() { return PasswordChangedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswordChangedComponent = /** @class */ (function () {
    function PasswordChangedComponent() {
    }
    PasswordChangedComponent.prototype.ngOnInit = function () {
    };
    PasswordChangedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-changed',
            template: __webpack_require__(/*! ./password-changed.component.html */ "./src/app/Components/password-changed/password-changed.component.html"),
            styles: [__webpack_require__(/*! ./password-changed.component.css */ "./src/app/Components/password-changed/password-changed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PasswordChangedComponent);
    return PasswordChangedComponent;
}());



/***/ }),

/***/ "./src/app/Components/productdetail/productdetail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Components/productdetail/productdetail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/productdetail/productdetail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Components/productdetail/productdetail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"appstorerow clearfix\"> <a href=\"https://play.google.com/store/apps/details?id=com.waki.app\"\n    target=\"_blank\" >\n    android\n    <div class=\"gappst\"></div>\n  </a>\n</div> -->\n<!-- \n<script>\n  $('a[data-applink]').applink();\n  </script> -->\n  \n  <!-- <a href=\"waki://other/parameter\" >Open Waki</a> -->"

/***/ }),

/***/ "./src/app/Components/productdetail/productdetail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/productdetail/productdetail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailComponent", function() { return ProductdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductdetailComponent = /** @class */ (function () {
    function ProductdetailComponent(router, query) {
        this.router = router;
        this.query = query;
        // $('a[data-applink]').applink();
        window.location.href = 'waki://other/parameter';
    }
    ProductdetailComponent.prototype.ngOnInit = function () {
        console.log("@@@@@", this.router.url);
        var currUrl = this.router.url.indexOf('?') == -1 ? this.router.url.split('/')[1] : this.router.url.slice(1, this.router.url.indexOf('?'));
        console.log(currUrl);
        // $('a[data-applink]').applink();
        // this.router.navigate[('waki://other/parameter')]
    };
    ProductdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productdetail',
            template: __webpack_require__(/*! ./productdetail.component.html */ "./src/app/Components/productdetail/productdetail.component.html"),
            styles: [__webpack_require__(/*! ./productdetail.component.css */ "./src/app/Components/productdetail/productdetail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProductdetailComponent);
    return ProductdetailComponent;
}());



/***/ }),

/***/ "./src/app/Components/reset-password/reset-password.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Components/reset-password/reset-password.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/reset-password/reset-password.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Components/reset-password/reset-password.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper \">\n  <!-- <app-sidebar></app-sidebar> -->\n  <div class=\"main-panel\">\n    <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n      <div class=\"container-fluid\">\n        <!-- <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\">Change Password</a>\n        </div> -->\n\n        <div class=\"bottom-down\" >\n          <img src=\"../../../assets/images/waki_logo.png\"  alt=\"\" style=\"height: 90px;\"/>\n         </div>\n        <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n              aria-label=\"Toggle navigation\">\n              <span class=\"sr-only\">Toggle Nav</span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n          </button> -->\n        <div class=\"collapse navbar-collapse justify-content-end\">\n          <!-- <app-side-icon></app-side-icon> -->\n        </div>\n      </div>\n    </nav>\n    <div class=\"content\">\n      <div class=\"container-fluid pt-4\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-tabs card-header-primary\">\n            <h4 class=\"card-title font-weight-bold\">Reset Password</h4>\n          </div>\n          <div class=\"card-body\">\n            <form class=\"form\" [formGroup]='passwordForm'>\n              <!-- <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.controls['oldPassword'].dirty && passwordForm.controls['oldPassword'].invalid)}\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"Old Password\" name='' formControlName='oldPassword' maxlength=\"16\"\n              id='oldPassword' />\n\n          <div class=\"errMsg\" *ngIf=\"passwordForm.get('oldPassword').dirty && passwordForm.get('oldPassword').invalid\">\n              <span [ngClass]=\"{error:passwordForm.get('oldPassword').hasError('required')}\" *ngIf=\"passwordForm.get('oldPassword').hasError('required')\" style=\"color:red;font-size:14px;\">*Please enter password.</span>\n              <span [ngClass]=\"{error:passwordForm.get('oldPassword').hasError('minlength') && !passwordForm.get('oldPassword').hasError('required')}\"\n                  *ngIf=\"passwordForm.get('oldPassword').hasError('minlength') && !passwordForm.get('oldPassword').hasError('required')\" style=\"color:red;font-size:14px;\">*Password must be of minimum 8 characters.</span>\n          </div>\n      </div> -->\n              <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" formControlName='newPassword'\n                maxlength=\"16\" id='newPassword' />\n              <div class=\"errMsg\" *ngIf=\"passwordForm.get('newPassword').dirty && passwordForm.get('newPassword').invalid\">\n                <span [ngClass]=\"{error:passwordForm.get('newPassword').hasError('required')}\" *ngIf=\"passwordForm.get('newPassword').hasError('required')\"\n                  style=\"color:red;font-size:14px;\">*Please enter password.</span>\n                <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.controls['newPassword'].dirty && passwordForm.controls['newPassword'].invalid)}\">\n                  <span [ngClass]=\"{error:passwordForm.get('newPassword').hasError('minlength') && !passwordForm.get('newPassword').hasError('required')}\"\n                    *ngIf=\"passwordForm.get('newPassword').hasError('minlength') && !passwordForm.get('newPassword').hasError('required')\"\n                    style=\"color:red;font-size:14px;\">*Password must be of minimum 8 characters.</span>\n                </div>\n              </div>\n              <br>\n              <br>\n              <br>\n              <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.get('newPassword').value != passwordForm.get('confirmPassword').value) && passwordForm.controls['confirmPassword'].dirty}\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName='confirmPassword'\n                  maxlength=\"16\" id='confirmPassword' />\n                <div class=\"errMsg\" *ngIf=\"passwordForm.get('newPassword').value && passwordForm.get('confirmPassword').value\">\n                  <span [ngClass]=\"{error:passwordForm.get('newPassword').value != passwordForm.get('confirmPassword').value }\"\n                    *ngIf='passwordForm.get(\"newPassword\").value != passwordForm.get(\"confirmPassword\").value ' style=\"color:red;font-size:14px;\">*\n                    New password and confirm password does not match. </span>\n                </div>\n              </div>\n              <br>\n              <footer class=\"card__body\">\n\n                <button class=\"btn btn-primary full-width\" [disabled]=\"!passwordForm.valid\" (click)=\" save(passwordForm.value)\">SAVE</button>\n\n              </footer>\n            </form>\n            <br>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- <app-footer> </app-footer> -->\n  </div>\n</div>\n<!-- <app-logout></app-logout> -->"

/***/ }),

/***/ "./src/app/Components/reset-password/reset-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Components/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(service, route, navi) {
        this.service = service;
        this.route = route;
        this.navi = navi;
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // oldPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        console.log("qqwertyui", this.route.queryParams['value'].email);
        console.log("qqwertyui", this.route.queryParams['value'].forgotToken);
        localStorage.clear();
        this.verifyLink(this.route.queryParams['value'].email, this.route.queryParams['value'].forgotToken);
    };
    ResetPasswordComponent.prototype.save = function (val) {
        var _this = this;
        console.log("#############33", this.responseData);
        var changeData = {
            "email": this.route.queryParams['value'].email,
            "newPassword": val.newPassword,
            "lang": "en"
        };
        console.log(changeData);
        this.service.postApi('user/reset', changeData, 0).subscribe(function (response) {
            console.log("!@%^&$#^&^&");
            _this.responseData = response;
            console.log("succ===>", JSON.stringify(_this.responseData));
            console.log("Login Data====>" + JSON.stringify(val));
            if (response['statusCode'] == 200) {
                _this.service.showSuccess(response['statusMessage']);
                _this.ngOnInit();
            }
            else {
                console.log("else");
                _this.service.showError('DONOT UPDATE');
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
        // this._location.back();
    };
    ResetPasswordComponent.prototype.verifyLink = function (email, forgotToken) {
        var _this = this;
        var temp = {
            email: email,
            forgotToken: forgotToken,
            lang: 'en'
        };
        this.service.postApi('user/verifyLink', temp, 0).subscribe(function (response) {
            _this.responseData = response['email'];
            if (response['statusCode'] == 200) {
                _this.service.showSuccess("verify");
            }
            else {
                console.log("else");
                _this.service.showError('link expired');
                _this.navi.navigate(['passwordChanged']);
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/Components/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/Components/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/Components/revenue/revenue.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Components/revenue/revenue.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/revenue/revenue.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Components/revenue/revenue.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n  <!-- Sidebar end Here-->\n\n  <div id=\"page-content-wrapper\">\n    <div class=\"dashboardConbx\"> \n      <!--Revenue Info Rows Start Here-->\n      <div class=\"row clearfix\">\n        <div class=\"digitrow clearfix\">\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"digitbx mnbt7\">\n              <h3>$ 66,163</h3>\n              <h4>Revenue Info 1</h4>\n              <span class=\"bdrbtm\"></span> </div>\n          </div>\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"digitbx\">\n              <h3>$ 1256</h3>\n              <h4>Revenue Info 2</h4>\n              <span class=\"bdrbtm\"></span> </div>\n          </div>\n        </div>\n      </div>\n      <!--Revenue Info Rows End Here--> \n      \n      <!--Total Sales Revenue Section Start Here-->\n      <div class=\"totalSeleswrap revenue\">\n            <div class=\"totalSelesinfobx\">\n              <h3>TOTAL SALES</h3>\n              <div class=\"sales_year_choose\">\n                  <select class=\"select\">\n                    <option>2017</option>\n                    <option>2018</option>\n                  </select>\n                </div>\n            </div>\n            <div class=\"salesgraph\"><img class=\"img-responsive\" src=\"assets/images/revenue_graph.jpg\" alt=\"\" /></div>\n      </div>\n       <!--Total Sales Revenue Section End Here-->\n      \n      <!--Revenue Sales Order List Section Start Here-->\n      <div class=\"recentorder_tablewrap revenue\">\n        <div class=\"recentOrderTable\">\n        <div class=\"table-responsive revenue\">\n          <table class=\"table orderlist\">\n            <thead>\n              <tr>\n                <th class=\"text-center\">Orders</th>\n                <th class=\"text-center\">Gross sales</th>\n                <th class=\"text-center\">Discounts</th>\n                <th class=\"text-center\">Returns</th>\n                <th class=\"text-center\">Net sales</th>\n                <th class=\"text-center\">Shipping</th>\n                <th class=\"text-center\">Tax</th>\n                <th class=\"text-center\">Total sales</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"text-center\">1</td>\n                <td class=\"text-center\">Rs. 275.00</td>\n                <td class=\"text-center\">Rs. 0.00</td>\n                <td class=\"text-center\">Rs. 0.00</td>\n                <td class=\"text-center\">Rs. 275.00</td>\n                <td class=\"text-center\">Rs. 0.00</td>\n                <td class=\"text-center\">Rs. 0.00</td>\n                <td class=\"text-center\">Rs. 275.00</td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">2</td>\n                <td class=\"text-center\">Rs. 275.00</td>\n                <td class=\"text-center\">Rs. 0.00</td>\n                <td class=\"text-center\">Rs. 0.00</td>\n                <td class=\"text-center\">Rs. 275.00</td>\n                <td class=\"text-center\">Rs. 0.00</td>\n                <td class=\"text-center\">Rs. 0.00</td>\n                <td class=\"text-center\">Rs. 275.00</td>\n                </tr>\n                <tr>\n                  <td class=\"text-center\">3</td>\n                  <td class=\"text-center\">Rs. 275.00</td>\n                  <td class=\"text-center\">Rs. 0.00</td>\n                  <td class=\"text-center\">Rs. 0.00</td>\n                  <td class=\"text-center\">Rs. 275.00</td>\n                  <td class=\"text-center\">Rs. 0.00</td>\n                  <td class=\"text-center\">Rs. 0.00</td>\n                  <td class=\"text-center\">Rs. 275.00</td>\n                    </tr>\n            </tbody>\n          </table>\n          </div>\n        </div>\n      </div>\n      <!--Revenue Sales Order List Section End Here-->\n      \n    </div>\n  </div>\n\n\n\n\n  </div>\n"

/***/ }),

/***/ "./src/app/Components/revenue/revenue.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/revenue/revenue.component.ts ***!
  \*********************************************************/
/*! exports provided: RevenueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevenueComponent", function() { return RevenueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RevenueComponent = /** @class */ (function () {
    function RevenueComponent(service) {
        this.service = service;
        this.service.setTitle('Revenue');
    }
    RevenueComponent.prototype.ngOnInit = function () {
    };
    RevenueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-revenue',
            template: __webpack_require__(/*! ./revenue.component.html */ "./src/app/Components/revenue/revenue.component.html"),
            styles: [__webpack_require__(/*! ./revenue.component.css */ "./src/app/Components/revenue/revenue.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], RevenueComponent);
    return RevenueComponent;
}());



/***/ }),

/***/ "./src/app/Components/sales-reports/sales-reports.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Components/sales-reports/sales-reports.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/sales-reports/sales-reports.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Components/sales-reports/sales-reports.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <!--Header Start Here-->\n    <app-header></app-header>\n    <!--Header End Here-->\n    <!-- Sidebar Start Here-->\n    <app-side-bar></app-side-bar>\n    <!-- Sidebar end Here-->\n\n\n    <div id=\"page-content-wrapper\">\n        <div class=\"dashboardConbx\"> \n          <!--Total Sales Row Start Here-->\n          <div class=\"totalSeleswrap\">\n            <div class=\"row clearfix\">\n              <div class=\"col-sm-6\">\n                <div class=\"totalSelesinfobx sales_reports\">\n                  <h4>Total Sales</h4>\n                  <div class=\"sminfo\">Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without \n                    revolutionary ROI.</div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                  <div class=\"sales_year_choose\">\n                      <select class=\"select\">\n                        <option>2017</option>\n                        <option>2018</option>\n                      </select>\n                    </div>\n                <div class=\"salesgraph\"><img class=\"img-responsive\" src=\"assets/images/sales_graph.png\" alt=\"\" /></div>\n              </div>\n            </div>\n          </div>\n          <!--Total Sales Row Section End Here--> \n    \n           <!--Total Orders Over Time Sales Row Start Here-->\n           <div class=\"totalSeleswrap\">\n              <div class=\"row clearfix\">\n                <div class=\"col-sm-6\">\n                  <div class=\"totalSelesinfobx sales_reports\">\n                    <h4>Total Orders Over time</h4>\n                    <div class=\"sminfo\">Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without \n                      revolutionary ROI.</div>\n                  </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"sales_year_choose\">\n                        <select class=\"select\">\n                          <option>2017</option>\n                          <option>2018</option>\n                        </select>\n                      </div>\n                  <div class=\"salesgraph\"><img class=\"img-responsive\" src=\"assets/images/sales_graph.png\" alt=\"\" /></div>\n                </div>\n              </div>\n            </div>\n           <!--Total Orders Over Time Sales Row End Here-->\n    \n            <!--Profit Margin Row Start Here-->\n            <div class=\"totalSeleswrap\">\n                <div class=\"row clearfix\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"totalSelesinfobx sales_reports\">\n                      <h4>Profit Margin</h4>\n                      <div class=\"sminfo\">Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without \n                        revolutionary ROI.</div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6\">\n                      <div class=\"sales_year_choose\">\n                          <select class=\"select\">\n                            <option>2017</option>\n                            <option>2018</option>\n                          </select>\n                        </div>\n                    <div class=\"salesgraph\"><img class=\"img-responsive\" src=\"assets/images/sales_graph.png\" alt=\"\" /></div>\n                  </div>\n                </div>\n              </div>\n              <!--Profit Margin Row End Here-->\n    \n            <!--Sales Comparison Row Start Here-->\n            <div class=\"totalSeleswrap\">\n                <div class=\"row clearfix\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"totalSelesinfobx sales_reports\">\n                      <h4>Sales Comparison</h4>\n                      <div class=\"sminfo\">Collaboratively administrate empowered markets via plug-and-play networks.</div>\n                      <div class=\"row clearfix\">\n                        <div class=\"col-sm-6\">\n                          <div class=\"dateselectboxrw\">\n                          <label>Start Date</label>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"dateselectboxrw\">\n                            <label>End Date</label>\n                            </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <div class=\"salesgraph\"><img class=\"img-responsive\" src=\"assets/images/analytics-graph.jpg\" alt=\"\" /></div>\n                  </div>\n                </div>\n              </div>\n              <!--Sales Comparison Row End Here-->\n    </div>\n      <!--Sales Report Content Section End Here-->\n    \n\n\n\n\n  </div>"

/***/ }),

/***/ "./src/app/Components/sales-reports/sales-reports.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/sales-reports/sales-reports.component.ts ***!
  \*********************************************************************/
/*! exports provided: SalesReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReportsComponent", function() { return SalesReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalesReportsComponent = /** @class */ (function () {
    function SalesReportsComponent() {
    }
    SalesReportsComponent.prototype.ngOnInit = function () {
    };
    SalesReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-reports',
            template: __webpack_require__(/*! ./sales-reports.component.html */ "./src/app/Components/sales-reports/sales-reports.component.html"),
            styles: [__webpack_require__(/*! ./sales-reports.component.css */ "./src/app/Components/sales-reports/sales-reports.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesReportsComponent);
    return SalesReportsComponent;
}());



/***/ }),

/***/ "./src/app/Components/show-variants/show-variants.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Components/show-variants/show-variants.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/show-variants/show-variants.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Components/show-variants/show-variants.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n  <!-- Sidebar end Here-->\n\n  <div id=\"page-content-wrapper\">\n    <div class=\"dashboardConbx\">\n\n      <div class=\"allproductslistingwarp\">\n        <div class=\"imports_row clearfix\">\n          <h3>Product(Variants) Inventory Listing</h3>\n        </div>\n      </div>\n\n      <!--Recent Order Table Section Start Here-->\n      <div class=\"recentorder_tablewrap\">\n        <!-- <div class=\"filter_search_row clearfix\">\n            <div class=\"filterbtnbx\">\n              <div class=\"dropdown\">\n                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Filter\n                  <span class=\"caret\"></span></button>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"#\">Edit</a></li>\n                  <li><a href=\"#\">Delete</a></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"filter_search_inputbx\"><span class=\"glyphicon glyphicon-search\"></span><input class=\"form-control\"\n                type=\"text\" placeholder=\"Search Products\" /></div>\n          </div> -->\n        <div class=\"recentOrderTable\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th align=\"left\" valign=\"middle\">\n                    <span class=\"checkboxbx\">\n                      <input type=\"checkbox\" id=\"selectall1\">\n                      <label for=\"selectall1\">&nbsp;</label>\n                    </span></th>\n                  <th>Product Variant</th>\n                  <th class=\"text-center\">SKU Code</th>\n                  <th class=\"text-center\">Units Sold</th>\n                  <th class=\"text-center\">Quantity</th>\n                  <th class=\"text-center\">Update Stock</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let product of apiData;let i = index\">\n                  <td align=\"left\" valign=\"middle\"><span class=\"checkboxbx\">\n                      <input type=\"checkbox\" id={{i}}>\n                      <label for={{i}}>&nbsp;</label>\n                    </span></td>\n                  <td align=\"left\" valign=\"middle\" class=\"lineH\">\n                    <div class=\"pro_img_wd\"><img alt=\"\" src={{product.image}}></div>\n                    <div class=\"pro_info_rw\">{{product.productName}}</div>\n                  </td>\n                  <td align=\"center\">{{product.inventorySKU}}</td>\n                  <td align=\"center\">{{product.unitSold}}</td>\n                  <td align=\"center\">{{product.quantity}}</td>\n                  <td class=\"updateddigit\">\n                    <form [formGroup]='formgroup' >\n                      <div class=\"update_stock_box\">\n                        <div class=\"updatebx clearfix\">\n                          <div class=\"inputfillbx\">\n                            <input class=\"form-control stock_{{i}} stockName\"  (input)=\"stockClickFunc()\"  name=\"stock\" type=\"text\" placeholder=\"0\"  [formControl]=\"formgroup.controls['update']\" />\n                            <!-- <span  *ngIf=\"formgroup.controls['update'].hasError('required')\"  style=\"color:red;font-size:14px\">*</span> -->\n                            <!-- <p *ngIf=\"formgroup.controls['business'].hasError('required') && formgroup.controls['business'].dirty\"\n                              style=\"color:red;font-size:14px;\">*BusinessName is required</p> -->\n                          </div>\n                          <button type=\"button\" class=\"btn btn-primary updatestockbtnbx\" (click)=\"addStock(product.varianceId,i)\" [disabled]=\"!formgroup.valid\">\n                            <span class=\"tickicon\"></span>\n                          </button>\n                        </div>\n                      </div>\n                    </form>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <!--Recent Order Table Section End Here-->\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Components/show-variants/show-variants.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/show-variants/show-variants.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShowVariantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowVariantsComponent", function() { return ShowVariantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowVariantsComponent = /** @class */ (function () {
    function ShowVariantsComponent(formBuilder, route, activateRoute, service) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.activateRoute = activateRoute;
        this.service = service;
        this.formgroup = formBuilder.group({
            update: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ShowVariantsComponent.prototype.stockClickFunc = function (val) {
        $(".stockName").on("keypress keyup blur", function (event) {
            $(this).val($(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                debugger;
                if ($(".stockName").val().length == 1) {
                    $(".stockName").val("");
                }
                else {
                }
                event.preventDefault();
            }
        });
        // $('.update_stock_box .updatebx .updatestockbtnbx').on("click", function () {
        // 	$(this).parents('.updateddigit').addClass("update");
        // 	setTimeout(RemoveClass, 2000);
        // 	});
        // 	function RemoveClass() {
        // 	$('.updateddigit').removeClass("update");
        // 	}
    };
    ShowVariantsComponent.prototype.ngOnInit = function () {
        this.getproductList();
        this.validation();
        this.service.setTitle('Product Variance');
    };
    ShowVariantsComponent.prototype.searchContacts = function () {
        console.log("2345678");
    };
    ShowVariantsComponent.prototype.getproductList = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.faqId = params['productId'];
            console.log('params => ', 'vendor/getAllVariant/' + _this.faqId);
        });
        this.service.getApi('vendor/getAllVariant/' + this.faqId, 1).subscribe(function (response) {
            // console.log("response-======>>>",response)
            if (response['statusCode'] == 200) {
                console.log('===================??>>>>', response['result']);
                _this.getProductCount = response['result'];
                // console.log(this.getbrandcount.length)
                _this.getProductCount = _this.getProductCount.length;
                _this.apiData = response['result'];
                // this.rows = response['result'];
                // this.temp = [...response['result']];
                // console.log('$$$$$$$sdfsdf$$$$$$$$$$$', this.apiData)
                // this.getBrandListdata()
            }
            else {
                // console.log(response['result'])
                _this.getProductCount = 0;
                _this.apiData = false;
                console.log('this.apidtaa', _this.apiData);
                _this.service.showError('NOT FOUND');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    // addStock(val, variancdId) {
    //   console.log(val, variancdId)
    //   // localhost:5050/vendor/updateVarianceStock
    //   let temp = {
    //     "varianceId": variancdId,
    //     "stock": val.update,
    //     "lang": 'en'
    //   }
    //   this.service.postApi('vendor/updateVarianceStock', temp, 1).subscribe(response => {
    //     // console.log("response-======>>>",response)
    //     if (response['statusCode'] == 200) {
    //       this.formgroup.reset();
    //       this.service.showSuccess('UPDATE SUCCESSFULLY')
    //       this.getproductList()
    //     }
    //     else {
    //       this.service.showError('NOT UPDATE')
    //       // this.service.showError('Invalid email or password.')
    //     }
    //   }, error => {
    //     console.log('error occur', error)
    //     this.service.showError('Server Error')
    //   })
    // }
    ShowVariantsComponent.prototype.addStock = function (val, i) {
        var _this = this;
        // var stock = document.getElementById("stock").value
        var temp = {
            "varianceId": val,
            "stock": $(".stock_" + i).val(),
            "lang": 'en'
        };
        if (parseInt($(".stock_" + i).val()) == 0 || $(".stock_" + i).val() == "") {
            this.service.showError("Wrong Input");
        }
        else {
            console.log("requesr", temp);
            this.service.postApi('admin/updateVarianceStock', temp, 1).subscribe(function (response) {
                // console.log("response-======>>>",response)
                if (response['statusCode'] == 200) {
                    _this.formgroup.reset();
                    _this.service.showSuccess('UPDATE SUCCESSFULLY');
                    _this.getproductList();
                }
                else {
                    _this.service.showError('NOT UPDATE');
                    // this.service.showError('Invalid email or password.')
                }
            }, function (error) {
                console.log('error occur', error);
                _this.service.showError('Server Error');
            });
        }
    };
    ShowVariantsComponent.prototype.validation = function () {
        console.log("345678");
        var specialKeys = [];
        specialKeys.push(8);
        $(function () {
            console.log("3452131678");
            $(".stockName").on("click", function (e) {
                alert('hello');
                var keyCode = e.which ? e.which : e.keyCode;
                var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
                // $(".error").css("display", ret ? "none" : "inline");
                return ret;
            });
            $(".stockName").on("paste", function (e) {
                return false;
            });
            $(".stockName").on("drop", function (e) {
                return false;
            });
        });
    };
    ShowVariantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-variants',
            template: __webpack_require__(/*! ./show-variants.component.html */ "./src/app/Components/show-variants/show-variants.component.html"),
            styles: [__webpack_require__(/*! ./show-variants.component.css */ "./src/app/Components/show-variants/show-variants.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ShowVariantsComponent);
    return ShowVariantsComponent;
}());



/***/ }),

/***/ "./src/app/Components/side-bar/side-bar.component.css":
/*!************************************************************!*\
  !*** ./src/app/Components/side-bar/side-bar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/side-bar/side-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Components/side-bar/side-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Start Here-->\n<div id=\"sidebar-wrapper\">\n  <div class=\"sidemenuwrap\">\n    <div class=\"userprofilebx clearfix\">\n      <div class=\"usercirbx\"> <img src=\"../../assets/images/user_img.jpg\" width=\"230\" height=\"222\" alt=\"\" /> </div>\n      <div class=\"userpnm\">\n        <h4>Johnathan Doe</h4>\n        <h5>Owner</h5>\n      </div>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a routerLink=\"/dashBoard\" routerLinkActive=\"active\" (click)=\"changeStatus('Dashboard')\">Dashboard</a></li>\n      <li class=\"orders dropdown\"><a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Orders<span\n            class=\"orders\">3</span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a routerLink=\"/orderlist\" routerLinkActive=\"active\" (click)=\"changeStatus('Orders List')\">Orders List</a></li>\n          <li><a href=\"javascript:void(0);\">Abandoned Checkouts</a></li>\n          <li><a href=\"javascript:void(0);\">Cancelled Orders</a></li>\n        </ul>\n      </li>\n      <li class=\"products dropdown\"><a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Products</a>\n        <ul class=\"dropdown-menu\">\n          <li><a routerLink=\"/allproducts\" routerLinkActive=\"active\" (click)=\"changeStatus('All Product')\">All Products</a></li>\n          <li><a href=\"javascript:void(0);\" (click)=addProduct() (click)=\"changeStatus('Add Product')\">Add Products</a></li>\n          <li><a routerLink=\"/inventory\" routerLinkActive=\"active\" (click)=\"changeStatus('Inventory')\">Inventory</a></li>\n        </ul>\n      </li>\n\n\n\n      <li class=\"reports dropdown\"><a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Reports <span class=\"reports\">3</span></a>\n        <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"/analytics\" routerLinkActive=\"active\" >Analytics</a></li>\n            <li><a routerLink=\"/revenue\" routerLinkActive=\"active\" >Sales Reports</a></li>\n            <li><a routerLink=\"/live\" routerLinkActive=\"active\" >Live View</a></li>\n          </ul>\n      </li>\n      <li><a routerLink=\"/activeoffer\" routerLinkActive=\"active\" (click)=\"changeStatus('All Product')\">Sales & Offers<span\n            class=\"salesoffers\">4</span></a></li>\n      <li><a  routerLink=\"/revenue\" routerLinkActive=\"active\" (click)=\"changeStatus('Revenue')\">My Earnings</a></li>\n      <li><a href=\"javascript:void(0);\">Notifications <span class=\"notification\">8</span></a></li>\n      <li><a href=\"javascript:void(0);\">Reviews & Feedbacks <span class=\"feedback\">8</span></a></li>\n    </ul>\n    <div class=\"settingsbx\">\n      <ul class=\"nav navbar-nav\">\n        <li><a href=\"javascript:void(0);\">My Account</a></li>\n        <li><a href=\"javascript:void(0);\">Settings</a></li>\n        <li><a href=\"javascript:void(0);\">Live Chat</a></li>\n        <li><a (click)=logout()>Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!--sidebar-End -->"

/***/ }),

/***/ "./src/app/Components/side-bar/side-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(route, service) {
        this.route = route;
        this.service = service;
        // this.getUser() 
    }
    SideBarComponent.prototype.ngOnInit = function () {
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    };
    SideBarComponent.prototype.addProduct = function () {
        console.log("hgfdfghujhgfds");
        this.route.navigate(['/addProductScreen']);
        this.service.setTitle('Add Product');
    };
    SideBarComponent.prototype.changeStatus = function (val) {
        this.service.setTitle(val);
    };
    SideBarComponent.prototype.logout = function () {
        localStorage.clear();
        this.route.navigate(['/login']);
    };
    SideBarComponent.prototype.getUser = function () {
        var _this = this;
        this.service.getApi('user/getUserInfo', 1).subscribe(function (response) {
            // console.log('-----------',response)
            if (response['statusCode'] == 200) {
                _this.userdata = response['result'];
                console.log("@#$%$#@!@#$#", _this.userdata);
            }
            else {
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    SideBarComponent.prototype.tabManag = function (event) {
        console.log(event);
        this.isActive = event;
        var url = window.location.href.split('/');
        var page = url[url.length - 1];
        this.isActive = page;
        this.route.navigate(['/' + event]);
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/Components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/Components/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/Components/test-sumit/test-sumit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Components/test-sumit/test-sumit.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n.heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n.heroes li {\n    position: relative;\n    cursor: pointer;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n.heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n.heroes a {\n    color: #888;\n    text-decoration: none;\n    position: relative;\n    display: block;\n    width: 250px;\n  }\n.heroes a:hover {\n    color:#607D8B;\n  }\n.heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    min-width: 16px;\n    text-align: right;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\nbutton {\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n    font-family: Arial;\n  }\nbutton:hover {\n    background-color: #cfd8dc;\n  }\nbutton.delete {\n    position: relative;\n    left: 194px;\n    top: -32px;\n    background-color: gray !important;\n    color: white;\n  }"

/***/ }),

/***/ "./src/app/Components/test-sumit/test-sumit.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Components/test-sumit/test-sumit.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n\n  <div class=\"row\">\n    <div>\n      <div>\n        <h2>Add Languages</h2>\n      </div>\n      <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"save(myForm)\">\n        <div class=\"form-group\">\n          <label>Front End</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"front\"></div>\n        <div formArrayName=\"languages\">\n          <div *ngFor=\"let language of myForm.controls.languages.controls; let i=index\" class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <span>Language {{i + 1}}</span>\n              <span class=\"glyphicon glyphicon-remove pull-right\" *ngIf=\"myForm.controls.languages.controls.length > 1\"\n                (click)=\"removeLanguage(i)\"></span>\n            </div>\n            <div class=\"panel-body\" [formGroupName]=\"i\">\n              <div class=\"form-group col-xs-6\">\n                <label>React</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"React\"></div>\n              <div class=\"form-group col-xs-6\">\n                <label>Angular5</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"angular\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"margin-20\">\n          <a (click)=\"addLanguage()\" style=\"cursor: default\">Add another Language </a></div>\n        <div class=\"margin-20\">\n          <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!myForm.valid\">Submit</button></div>\n        <div class=\"clearfix\"></div>\n        <div class=\"margin-20\">\n          <div>myForm details:-</div>\n          <pre>Is myForm valid?: <br>{{myForm.valid | json}}</pre>\n          <pre>form value: <br>{{myForm.value | json}}</pre>\n        </div>\n      </form>\n    </div>\n  </div>\n</div> -->\n\n<div>\n   <qrcode [qrdata]=\"myAngularxQrCode\" [allowEmptyString]='true' [size]=\"256\" [level]=\"'Q'\"></qrcode>\n\n\n</div>"

/***/ }),

/***/ "./src/app/Components/test-sumit/test-sumit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/test-sumit/test-sumit.component.ts ***!
  \***************************************************************/
/*! exports provided: TestSumitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSumitComponent", function() { return TestSumitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestSumitComponent = /** @class */ (function () {
    function TestSumitComponent(_fb) {
        this._fb = _fb;
        this.myAngularxQrCode = 'Your QR code data string';
    }
    TestSumitComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            FrontEnd: ['',],
            front: ['',],
            React: ['',],
            angular: ['',],
            languages: this._fb.array([
                this.initlanguage(),
            ])
        });
        // assign a value
        // console.log('---------------->>>>',this.myForm)
    };
    TestSumitComponent.prototype.initlanguage = function () {
        return this._fb.group({
            Angular2: [''],
            React: ['']
        });
    };
    TestSumitComponent.prototype.addLanguage = function () {
        var control = this.myForm.controls['languages'];
        console.log('-==-=-=-=-=>>>', control);
        control.push(this.initlanguage());
    };
    TestSumitComponent.prototype.removeLanguage = function (i) {
        var control = this.myForm.controls['languages'];
        control.removeAt(i);
    };
    TestSumitComponent.prototype.save = function () {
        console.log("save model");
    };
    TestSumitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-sumit',
            template: __webpack_require__(/*! ./test-sumit.component.html */ "./src/app/Components/test-sumit/test-sumit.component.html"),
            styles: [__webpack_require__(/*! ./test-sumit.component.css */ "./src/app/Components/test-sumit/test-sumit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TestSumitComponent);
    return TestSumitComponent;
}());



/***/ }),

/***/ "./src/app/Components/waki-login/waki-login.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Components/waki-login/waki-login.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/waki-login/waki-login.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Components/waki-login/waki-login.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginscreenwrap\" >\n  <div class=\"wakilogo\"></div>\n  <div class=\"aboutwakiCon\">.\n    <div class=\"wakitextrow\"><img src=\"../../assets/images/waki_market_place.png\"  /></div>\n    <div class=\"sminfo\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\n      eu tus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo\n      inventor</div>\n    <div class=\"emailrow\">\n        <form [formGroup]='formgroup'>\n\n        <div *ngIf=\"isValid;else password\">        \n        <!-- <ng-template #other_content>other content here...</ng-template> -->\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" [formControl]=\"formgroup.controls['email']\" placeholder=\"Enter your email address\" />\n          <button type=\"submit\" class=\"btn btn-primary loginbtn\"  (click)=\"login(formgroup.value)\">Submit</button>\n        </div>\n        <div class=\"error_box clearfix\">\n            <p *ngIf=\"formgroup.controls['email'].hasError('required') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Email is required</p>\n            <p *ngIf=\"formgroup.controls['email'].hasError('pattern') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Please enter valid email.</p>\n        </div>\n      <!-- </form> -->\n      </div>\n      <!-- //!password field -->\n      <ng-template #password>\n          <!-- <form [formGroup]='formgroup'> -->\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"password\" [formControl]=\"formgroup.controls['pass']\" placeholder=\"Enter your Password\" />\n                <button type=\"submit\" class=\"btn btn-primary loginbtn\" (click)=\"enterpassword(formgroup.value)\">Submit</button>\n              </div>\n              <div class=\"error_box clearfix\">\n                  <p *ngIf=\"formgroup.controls['pass'].hasError('required') && formgroup.controls['pass'].dirty\" style=\"color:red;font-size:14px;\">*Password is required</p>\n                  <p *ngIf=\"formgroup.controls['pass'].hasError('pattern') && formgroup.controls['pass'].dirty\" style=\"color:red;font-size:14px;\">*Please enter valid Password.</p>\n              </div>\n      </ng-template>\n      <!-- //!password field -->\n    </form>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/waki-login/waki-login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/waki-login/waki-login.component.ts ***!
  \***************************************************************/
/*! exports provided: WakiLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WakiLoginComponent", function() { return WakiLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WakiLoginComponent = /** @class */ (function () {
    function WakiLoginComponent(formBuilder, route, service) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
        this.isValid = true;
        this.formgroup = formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[A-Z0-9_-]+([\.-][A-Z0-9_-]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,4})+$/i)])],
            // email:['',],
            // pass: ['',Validators]
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
        });
    }
    WakiLoginComponent.prototype.ngOnInit = function () {
    };
    WakiLoginComponent.prototype.login = function (val) {
        var _this = this;
        // console.log("formdata",this.formgroup.value)
        // console.log("val",val)
        var logindata = {
            "email": val.email.toLowerCase(),
            "lang": "en"
        };
        console.log(logindata);
        this.service.postApi('user/checkEmail', logindata, 0).subscribe(function (response) {
            _this.responseData = response;
            console.log("WWWWWWWW", _this.responseData);
            if (response['statusCode'] == 200) {
                _this.service.showSuccess("Please enter password");
                // localStorage.setItem('email', val.email.toLowerCase())
                // localStorage.setItem('adminId', this.responseData.result._id)
                // console.log('successfully login', response['statusMessage'])
                // this.route.navigate(['/enterPassword']);
                // window.location.replace("/enterPassword");
                // localStorage.token = response[`data`][`token`];
                // localStorage.adminId = response[`data`][`_id`];
                _this.isValid = false;
            }
            else {
                _this.service.showError('Invalid Email');
                //  this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    //!enterpasswordScreen
    WakiLoginComponent.prototype.enterpassword = function (val) {
        var _this = this;
        // console.log("formdata",this.formgroup.value)
        // console.log("val",val)
        var logindata = {
            "email": val.email,
            "password": val.pass,
            "userType": 'admin',
            "lang": "en"
        };
        this.service.postApi('user/login', logindata, 0).subscribe(function (response) {
            _this.responseData = response;
            console.log("WWWWWWWW", _this.responseData);
            if (response['statusCode'] == 200) {
                _this.service.showSuccess(response['statusMessage']);
                // console.log('<<<<<', this.responseData['result'])
                localStorage.setItem('token', _this.responseData.accessToken);
                // localStorage.removeItem('email')
                if (_this.responseData['result']['isBussinessAdded'] == false) {
                    _this.route.navigate(['/business_details']);
                }
                else {
                    _this.route.navigate(['/dashBoard']);
                }
            }
            else {
                _this.service.showError('Invalid password.');
                //this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    WakiLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-waki-login',
            template: __webpack_require__(/*! ./waki-login.component.html */ "./src/app/Components/waki-login/waki-login.component.html"),
            styles: [__webpack_require__(/*! ./waki-login.component.css */ "./src/app/Components/waki-login/waki-login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], WakiLoginComponent);
    return WakiLoginComponent;
}());



/***/ }),

/***/ "./src/app/Services/provider.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/provider.service.ts ***!
  \**********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(http, toastr, spinner) {
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.userdata = {};
        this.nameClicked = { 'userName': '', 'email': '', 'mobileNumber': '' };
        this.optionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.optionObs = this.optionSubject.asObservable();
        this.baseUrl = 'http://13.126.131.184:5050/'; //!live 
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('DASHBOARD');
        // console.log("#############333")
    }
    // baseUrl = 'http://192.168.1.35:5050/'
    // baseUrl = 'http://127.0.0.1:5050/'
    // typeLogin: string;
    DataService.prototype.changeOption = function (msg) {
        this.optionSubject.next(msg);
    };
    DataService.prototype.postApi = function (url, data, isHeader) {
        console.log("entered in post api ");
        if (isHeader == 0) {
            console.log("header 0");
            var httpOptions;
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" })
            };
            return this.http.post((this.baseUrl + url), data, httpOptions);
        }
        else if (isHeader == 1) {
            var httpOptions;
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    "accessToken": localStorage.getItem("token"),
                    // "_id": localStorage.adminId,
                    "Content-Type": "application/json"
                })
            };
            return this.http.post((this.baseUrl + url), data, httpOptions);
        }
    };
    DataService.prototype.getLatApi = function (address) {
        return this.http.get("https://maps.google.com/maps/api/geocode/json?address=" + address + "&sensor=false&key=AIzaSyDxFPSj1Oh9PYbbsm35CLorLQk4vtrTvvk");
    };
    DataService.prototype.getApi = function (url, isHeader) {
        if (isHeader == 0) {
            var httpOptions;
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" })
            };
            return this.http.get((this.baseUrl + url), httpOptions);
        }
        else if (isHeader == 1) {
            // console.log('token', localStorage.token)
            var httpOptions;
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "accessToken": localStorage.getItem("token"), "Content-Type": "application/json" })
            };
            return this.http.get((this.baseUrl + url), httpOptions);
        }
    };
    DataService.prototype.showSuccess = function (msg) {
        this.toastr.success(msg);
    };
    DataService.prototype.showError = function (msg) {
        this.toastr.error(msg);
    };
    DataService.prototype.showBug = function (msg) {
        this.toastr.info(msg);
    };
    DataService.prototype.spinnerShow = function () {
        console.log("asdf");
        this.spinner.show();
    };
    DataService.prototype.spinnerHide = function () {
        this.spinner.hide();
    };
    DataService.prototype.setTitle = function (title) {
        this.title.next(title);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_waki_login_waki_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/waki-login/waki-login.component */ "./src/app/Components/waki-login/waki-login.component.ts");
/* harmony import */ var _Components_business_detail_business_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/business-detail/business-detail.component */ "./src/app/Components/business-detail/business-detail.component.ts");
/* harmony import */ var _Components_home_page_vendor_home_page_vendor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/home-page-vendor/home-page-vendor.component */ "./src/app/Components/home-page-vendor/home-page-vendor.component.ts");
/* harmony import */ var _Components_add_product_screen_add_product_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/add-product-screen/add-product-screen.component */ "./src/app/Components/add-product-screen/add-product-screen.component.ts");
/* harmony import */ var _Components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/add-product/add-product.component */ "./src/app/Components/add-product/add-product.component.ts");
/* harmony import */ var _Components_editproduct_editproduct_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/editproduct/editproduct.component */ "./src/app/Components/editproduct/editproduct.component.ts");
/* harmony import */ var _Components_test_sumit_test_sumit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/test-sumit/test-sumit.component */ "./src/app/Components/test-sumit/test-sumit.component.ts");
/* harmony import */ var _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/reset-password/reset-password.component */ "./src/app/Components/reset-password/reset-password.component.ts");
/* harmony import */ var _Components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/not-found/not-found.component */ "./src/app/Components/not-found/not-found.component.ts");
/* harmony import */ var _Components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/allproducts/allproducts.component */ "./src/app/Components/allproducts/allproducts.component.ts");
/* harmony import */ var _Components_password_changed_password_changed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/password-changed/password-changed.component */ "./src/app/Components/password-changed/password-changed.component.ts");
/* harmony import */ var _Components_productdetail_productdetail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/productdetail/productdetail.component */ "./src/app/Components/productdetail/productdetail.component.ts");
/* harmony import */ var _Components_inventory_listing_inventory_listing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/inventory-listing/inventory-listing.component */ "./src/app/Components/inventory-listing/inventory-listing.component.ts");
/* harmony import */ var _Components_show_variants_show_variants_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/show-variants/show-variants.component */ "./src/app/Components/show-variants/show-variants.component.ts");
/* harmony import */ var _Components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/order-list/order-list.component */ "./src/app/Components/order-list/order-list.component.ts");
/* harmony import */ var _Components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/analytics/analytics.component */ "./src/app/Components/analytics/analytics.component.ts");
/* harmony import */ var _Components_active_offer_active_offer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/active-offer/active-offer.component */ "./src/app/Components/active-offer/active-offer.component.ts");
/* harmony import */ var _Components_create_offer_create_offer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/create-offer/create-offer.component */ "./src/app/Components/create-offer/create-offer.component.ts");
/* harmony import */ var _Components_live_view_live_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/live-view/live-view.component */ "./src/app/Components/live-view/live-view.component.ts");
/* harmony import */ var _Components_revenue_revenue_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/revenue/revenue.component */ "./src/app/Components/revenue/revenue.component.ts");
/* harmony import */ var _Components_sales_reports_sales_reports_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/sales-reports/sales-reports.component */ "./src/app/Components/sales-reports/sales-reports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// import { RevenueComponent } from './Components/revenue/revenue.component';
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _Components_waki_login_waki_login_component__WEBPACK_IMPORTED_MODULE_2__["WakiLoginComponent"] },
    { path: 'business_details', component: _Components_business_detail_business_detail_component__WEBPACK_IMPORTED_MODULE_3__["BusinessDetailComponent"] },
    { path: 'dashBoard', component: _Components_home_page_vendor_home_page_vendor_component__WEBPACK_IMPORTED_MODULE_4__["HomePageVendorComponent"] },
    { path: 'addProductScreen', component: _Components_add_product_screen_add_product_screen_component__WEBPACK_IMPORTED_MODULE_5__["AddProductScreenComponent"] },
    { path: 'addProduct', component: _Components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"] },
    { path: 'editProduct', component: _Components_editproduct_editproduct_component__WEBPACK_IMPORTED_MODULE_7__["EditproductComponent"] },
    { path: 'allproducts', component: _Components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_11__["AllproductsComponent"] },
    { path: 'test', component: _Components_test_sumit_test_sumit_component__WEBPACK_IMPORTED_MODULE_8__["TestSumitComponent"] },
    { path: 'resetPassword', component: _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"] },
    { path: 'notFound', component: _Components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"] },
    { path: 'passwordChanged', component: _Components_password_changed_password_changed_component__WEBPACK_IMPORTED_MODULE_12__["PasswordChangedComponent"] },
    // { path: 'orderlist', component: AllordersComponent },
    { path: 'productdetails', component: _Components_productdetail_productdetail_component__WEBPACK_IMPORTED_MODULE_13__["ProductdetailComponent"] },
    { path: 'inventory', component: _Components_inventory_listing_inventory_listing_component__WEBPACK_IMPORTED_MODULE_14__["InventoryListingComponent"] },
    { path: 'productvariant/:productId', component: _Components_show_variants_show_variants_component__WEBPACK_IMPORTED_MODULE_15__["ShowVariantsComponent"] },
    { path: 'orderlist', component: _Components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_16__["OrderListComponent"] },
    { path: 'analytics', component: _Components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_17__["AnalyticsComponent"] },
    { path: 'activeoffer', component: _Components_active_offer_active_offer_component__WEBPACK_IMPORTED_MODULE_18__["ActiveOfferComponent"] },
    { path: 'createoffer', component: _Components_create_offer_create_offer_component__WEBPACK_IMPORTED_MODULE_19__["CreateOfferComponent"] },
    { path: 'live', component: _Components_live_view_live_view_component__WEBPACK_IMPORTED_MODULE_20__["LiveViewComponent"] },
    { path: 'revenue', component: _Components_revenue_revenue_component__WEBPACK_IMPORTED_MODULE_21__["RevenueComponent"] },
    { path: 'sales-reports', component: _Components_sales_reports_sales_reports_component__WEBPACK_IMPORTED_MODULE_22__["SalesReportsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.title = 'app';
        this.router.events.subscribe(function (x) {
            if (x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                window.scroll(0, 0);
                var currUrl = _this.router.url.indexOf('?') == -1 ? _this.router.url.split('/')[1] : _this.router.url.slice(1, _this.router.url.indexOf('?'));
                console.log(_this.router.url);
                if (x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                    window.scroll(0, 0);
                    var currUrl_1 = _this.router.url.indexOf('?') == -1 ? _this.router.url.split('/')[1] : _this.router.url.slice(1, _this.router.url.indexOf('?'));
                    if (localStorage.getItem('token') === null) {
                        if (currUrl_1 === 'resetPassword') {
                            _this.router.navigate(['/resetPassword']);
                        }
                        else if (currUrl_1 == 'productdetails') {
                            window.location.href = 'waki://other/parameter';
                        }
                        else {
                            _this.router.navigate(['/login']);
                        }
                    }
                    else if ((localStorage.getItem('token') != null)) {
                        // if (currUrl === 'enterPassword' || currUrl === 'login') {
                        //   this.router.navigate(['/business_details'])
                        // }
                        if (currUrl_1 === 'resetPassword') {
                            _this.router.navigate(['/resetPassword']);
                        }
                        else if (currUrl_1 == 'login') {
                            _this.router.navigate(['/dashBoard']);
                        }
                    }
                }
            }
        });
        console.log('this.router.url', this.router.url);
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-tooltip */ "./node_modules/ngx-tooltip/index.js");
/* harmony import */ var ngx_tooltip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_tooltip__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _google_places_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./google-places.directive */ "./src/app/google-places.directive.ts");
/* harmony import */ var _Components_waki_login_waki_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/waki-login/waki-login.component */ "./src/app/Components/waki-login/waki-login.component.ts");
/* harmony import */ var _Components_business_detail_business_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/business-detail/business-detail.component */ "./src/app/Components/business-detail/business-detail.component.ts");
/* harmony import */ var _Components_home_page_vendor_home_page_vendor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/home-page-vendor/home-page-vendor.component */ "./src/app/Components/home-page-vendor/home-page-vendor.component.ts");
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _Components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/add-product/add-product.component */ "./src/app/Components/add-product/add-product.component.ts");
/* harmony import */ var _Components_add_product_screen_add_product_screen_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/add-product-screen/add-product-screen.component */ "./src/app/Components/add-product-screen/add-product-screen.component.ts");
/* harmony import */ var ngx_image_uploader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-image-uploader */ "./node_modules/ngx-image-uploader/fesm5/ngx-image-uploader.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ng_custom_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-custom-select */ "./node_modules/ng-custom-select/fesm5/ng-custom-select.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _Components_editproduct_editproduct_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/editproduct/editproduct.component */ "./src/app/Components/editproduct/editproduct.component.ts");
/* harmony import */ var ngx_dynamic_form__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-dynamic-form */ "./node_modules/ngx-dynamic-form/fesm5/ngx-dynamic-form.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-table/ng2-table */ "./node_modules/ng2-table/ng2-table.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _Components_child_child_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Components/child/child.component */ "./src/app/Components/child/child.component.ts");
/* harmony import */ var _Components_test_sumit_test_sumit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Components/test-sumit/test-sumit.component */ "./src/app/Components/test-sumit/test-sumit.component.ts");
/* harmony import */ var _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Components/reset-password/reset-password.component */ "./src/app/Components/reset-password/reset-password.component.ts");
/* harmony import */ var _Components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Components/not-found/not-found.component */ "./src/app/Components/not-found/not-found.component.ts");
/* harmony import */ var _Components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Components/allproducts/allproducts.component */ "./src/app/Components/allproducts/allproducts.component.ts");
/* harmony import */ var _Components_allorders_allorders_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Components/allorders/allorders.component */ "./src/app/Components/allorders/allorders.component.ts");
/* harmony import */ var _Components_password_changed_password_changed_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Components/password-changed/password-changed.component */ "./src/app/Components/password-changed/password-changed.component.ts");
/* harmony import */ var ng_chat__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-chat */ "./node_modules/ng-chat/fesm5/ng-chat.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _Components_productdetail_productdetail_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Components/productdetail/productdetail.component */ "./src/app/Components/productdetail/productdetail.component.ts");
/* harmony import */ var _Components_show_variants_show_variants_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Components/show-variants/show-variants.component */ "./src/app/Components/show-variants/show-variants.component.ts");
/* harmony import */ var _Components_inventory_listing_inventory_listing_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Components/inventory-listing/inventory-listing.component */ "./src/app/Components/inventory-listing/inventory-listing.component.ts");
/* harmony import */ var _Components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Components/order-list/order-list.component */ "./src/app/Components/order-list/order-list.component.ts");
/* harmony import */ var _Components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Components/analytics/analytics.component */ "./src/app/Components/analytics/analytics.component.ts");
/* harmony import */ var _Components_active_offer_active_offer_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Components/active-offer/active-offer.component */ "./src/app/Components/active-offer/active-offer.component.ts");
/* harmony import */ var _Components_create_offer_create_offer_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Components/create-offer/create-offer.component */ "./src/app/Components/create-offer/create-offer.component.ts");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _Components_live_view_live_view_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Components/live-view/live-view.component */ "./src/app/Components/live-view/live-view.component.ts");
/* harmony import */ var _Components_revenue_revenue_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./Components/revenue/revenue.component */ "./src/app/Components/revenue/revenue.component.ts");
/* harmony import */ var _Components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Components/side-bar/side-bar.component */ "./src/app/Components/side-bar/side-bar.component.ts");
/* harmony import */ var _Components_sales_reports_sales_reports_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./Components/sales-reports/sales-reports.component */ "./src/app/Components/sales-reports/sales-reports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { CKEditorModule } from 'ngx-ckeditor';



// import { HeaderFooterComponent } from './Common/header-footer/header-footer.component';
// import { SocketService } from './Services/socket.service';








// import { FancyImageUploaderModule } from 'ng2-fancy-image-uploader';






// import { Ng2TableModule } from 'ngx-datatable';
// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';

// import { ChidComponent } from './chid/chid.component';
















// import { NgDatepickerModule } from 'ng2-datepicker';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                // HeaderFooterComponent,
                _google_places_directive__WEBPACK_IMPORTED_MODULE_13__["GooglePlacesDirective"],
                _Components_waki_login_waki_login_component__WEBPACK_IMPORTED_MODULE_14__["WakiLoginComponent"],
                _Components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_47__["SideBarComponent"],
                _Components_business_detail_business_detail_component__WEBPACK_IMPORTED_MODULE_15__["BusinessDetailComponent"],
                _Components_home_page_vendor_home_page_vendor_component__WEBPACK_IMPORTED_MODULE_16__["HomePageVendorComponent"],
                _Components_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _Components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_18__["AddProductComponent"],
                _Components_add_product_screen_add_product_screen_component__WEBPACK_IMPORTED_MODULE_19__["AddProductScreenComponent"],
                _Components_editproduct_editproduct_component__WEBPACK_IMPORTED_MODULE_24__["EditproductComponent"],
                // ChidComponent,
                _Components_child_child_component__WEBPACK_IMPORTED_MODULE_28__["ChildComponent"],
                _Components_test_sumit_test_sumit_component__WEBPACK_IMPORTED_MODULE_29__["TestSumitComponent"],
                _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_30__["ResetPasswordComponent"],
                _Components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__["NotFoundComponent"],
                _Components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_32__["AllproductsComponent"],
                _Components_allorders_allorders_component__WEBPACK_IMPORTED_MODULE_33__["AllordersComponent"],
                _Components_password_changed_password_changed_component__WEBPACK_IMPORTED_MODULE_34__["PasswordChangedComponent"],
                _Components_productdetail_productdetail_component__WEBPACK_IMPORTED_MODULE_37__["ProductdetailComponent"],
                _Components_show_variants_show_variants_component__WEBPACK_IMPORTED_MODULE_38__["ShowVariantsComponent"],
                _Components_inventory_listing_inventory_listing_component__WEBPACK_IMPORTED_MODULE_39__["InventoryListingComponent"],
                _Components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_40__["OrderListComponent"],
                _Components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_41__["AnalyticsComponent"],
                _Components_active_offer_active_offer_component__WEBPACK_IMPORTED_MODULE_42__["ActiveOfferComponent"],
                _Components_create_offer_create_offer_component__WEBPACK_IMPORTED_MODULE_43__["CreateOfferComponent"],
                _Components_live_view_live_view_component__WEBPACK_IMPORTED_MODULE_45__["LiveViewComponent"],
                _Components_revenue_revenue_component__WEBPACK_IMPORTED_MODULE_46__["RevenueComponent"],
                _Components_sales_reports_sales_reports_component__WEBPACK_IMPORTED_MODULE_48__["SalesReportsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_10__["CKEditorModule"],
                ngx_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_21__["NgMultiSelectDropDownModule"].forRoot(),
                ng_custom_select__WEBPACK_IMPORTED_MODULE_22__["NgSelectModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_23__["TagInputModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_26__["NgxDatatableModule"],
                ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_27__["Ng2TableModule"],
                ngx_image_uploader__WEBPACK_IMPORTED_MODULE_20__["ImageUploaderModule"],
                ngx_dynamic_form__WEBPACK_IMPORTED_MODULE_25__["DynamicFormModule"],
                ng_chat__WEBPACK_IMPORTED_MODULE_35__["NgChatModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_36__["QRCodeModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_44__["MyDatePickerModule"]
                // NgDatepickerModule
            ],
            entryComponents: [
                _Components_child_child_component__WEBPACK_IMPORTED_MODULE_28__["ChildComponent"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/google-places.directive.ts":
/*!********************************************!*\
  !*** ./src/app/google-places.directive.ts ***!
  \********************************************/
/*! exports provided: GooglePlacesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePlacesDirective", function() { return GooglePlacesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// declare function require(path: string): any;
// var google = require('@types/googlemaps');
// declare const google: any;
// const google = require('@types/googlemaps');
var GooglePlacesDirective = /** @class */ (function () {
    function GooglePlacesDirective(elRef) {
        this.elRef = elRef;
        this.latng = {};
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = elRef.nativeElement;
    }
    GooglePlacesDirective.prototype.getFormattedAddress = function (place, lat, lng) {
        //@params: place - Google Autocomplete place object
        //@returns: location_obj - An address object in human readable format
        var location_obj = {};
        for (var i in place.address_components) {
            var item = place.address_components[i];
            location_obj['lat'] = lat;
            location_obj['lng'] = lng;
            location_obj['formatted_address'] = place.formatted_address;
            if (item['types'].indexOf("locality") > -1) {
                location_obj['locality'] = item['long_name'];
            }
            else if (item['types'].indexOf("administrative_area_level_1") > -1) {
                location_obj['admin_area_l1'] = item['short_name'];
            }
            else if (item['types'].indexOf("street_number") > -1) {
                location_obj['street_number'] = item['short_name'];
            }
            else if (item['types'].indexOf("route") > -1) {
                location_obj['route'] = item['long_name'];
            }
            else if (item['types'].indexOf("country") > -1) {
                location_obj['country'] = item['long_name'];
            }
            else if (item['types'].indexOf("postal_code") > -1) {
                location_obj['postal_code'] = item['short_name'];
            }
        }
        return location_obj;
    };
    GooglePlacesDirective.prototype.ngOnInit = function () {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(this.element);
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            //Emit the new address object for the updated place
            console.log("latitude is " + autocomplete.getPlace().geometry.location.lat());
            _this.latng = {
                place: autocomplete.getPlace(),
                lat: autocomplete.getPlace().geometry.location.lat(),
                lng: autocomplete.getPlace().geometry.location.lng()
            };
            _this.onSelect.emit(_this.getFormattedAddress(autocomplete.getPlace(), autocomplete.getPlace().geometry.location.lat(), autocomplete.getPlace().geometry.location.lng()));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GooglePlacesDirective.prototype, "onSelect", void 0);
    GooglePlacesDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[google-place]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], GooglePlacesDirective);
    return GooglePlacesDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/techugo/Desktop/gitbucket/angular vendor/waki_web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map