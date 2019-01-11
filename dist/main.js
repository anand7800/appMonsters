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

module.exports = "<app-side-bar></app-side-bar>\n<app-header></app-header>\n\n<div id=\"page-content-wrapper\">\n  <div class=\"addproducts\">\n     <h3>Welcome <span>Johnathan Doe</span></h3>\n      <div class=\"addproimgbx\"><img src=\"../../../assets/img/add_products.png\" alt=\"\" /></div>\n      <div class=\"addprobtnrow\"><button type=\"button\" class=\"btn btn-primary addpro\" (click)=addProduct()>ADD PRODUCTS TO GET STARTED</button></div>\n  </div>\n</div>  "

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

module.exports = "<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n  <!--sidebar-End -->\n  <!--Add Products Content Section Start Here-->\n  <div id=\"page-content-wrapper\">\n    <form [formGroup]='myGroup' (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"dashboardConbx\">\n        <!-- <form [formGroup]='myGroup' (ngSubmit)=\"onSubmit()\" > -->\n        <div class=\"addproductheadingrow\">\n          <h3>Lorem Ipsum Heading</h3>\n          <div class=\"addproheadingbtn\">\n            <button type=\"button\" class=\"btn btn-primary addprobtn cancel\">Cancel</button>\n            <button (click)=\"saveProduct(myGroup.value)\" type=\"button\" class=\"btn btn-primary addprobtn\">Save</button>\n          </div>\n        </div>\n        <div class=\"productsviewrow\">\n          <div class=\"row eqWrap equalHMWrap clearfix\">\n            <!--Text Editor Section Start Here-->\n            <div class=\"col-sm-5 texteditorwrap\">\n              <div class=\"form-group\">\n                <label>Title</label>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Product Name Here\" [formControl]=\"myGroup.controls['title']\"\n                  ngDefaultControl />\n\n              </div>\n              <div class=\"form-group\">\n                <label>Description</label>\n                <div class=\"texteditorbox\"><img class=\"img-responsive\" width=\"606\" height=\"255\" />\n\n                  <ckeditor [(ngModel)]=\"ckeditorContent\" [formControl]=\"myGroup.controls['description']\"\n                    ngDefaultControl>\n                    <ckbutton [name]=\"'saveButton'\" [command]=\"'saveCmd'\" (click)=\"save($event)\" [icon]=\"'save.png'\"\n                      [label]=\"'Save Document'\" [toolbar]=\"'clipboard,1'\">\n                    </ckbutton>\n                  </ckeditor>\n                </div>\n              </div>\n            </div>\n            <!--Text Editor Section End Here-->\n            <!-- </form> -->\n            <!--Image Upload Section Start Here-->\n            <div class=\"col-sm-7 fileuploadbox\">\n              <label>Product Images</label>\n              <!-- <input type=\"file\" (change)='onFileChanged($event)' accept=\"image/jpeg,image/jpg,image/png\"> -->\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" id='fImage' data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image1']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image2']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image3']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image4']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image5']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image6']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image7']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n\n              <div class=\"uploadimgbx\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\"></div>\n                  <div> <span class=\"btn btn-default btn-file\">\n                      <input id=\"input-22\" type=\"file\" name=\"...\" (change)='onFileChanged($event)' accept=\".jpg,.gif,.png\"\n                        [formControl]=\"myGroup.controls['image8']\" ngDefaultControl>\n                    </span> </div>\n                </div>\n              </div>\n            </div>\n            <!--Image Upload Section End Here-->\n          </div>\n        </div>\n\n        <div class=\"row productcategorywrap clearfix\">\n          <div class=\"col-sm-5 padwd10\">\n            <!--Product Category Section Start Here-->\n            <div class=\"productCategorybox\">\n              <div class=\"form-group\">\n                <label>Product Category</label>\n                <select class=\"form-control\" (change)=\"getCatgory($event.target.value)\" [formControl]=\"myGroup.controls['productcategory']\"\n                  ngDefaultControl>\n                  <option value=\"\">select category</option>\n                  <option *ngFor=\"let c of category\" [value]=\"c._id\">{{c.categoryName}}</option>\n                </select>\n\n              </div>\n              <div class=\"form-group\">\n                <label>Product Subcategory</label>\n                <select class=\"form-control\" (change)=\"SubCatorydata($event.target.value)\" [formControl]=\"myGroup.controls['productsubcategory']\"\n                  ngDefaultControl>\n                  <option value=\"\">select SubCategory</option>\n                  <option *ngFor=\"let c of getSubCatorydata\" [value]=\"c._id\">{{c.subCategoryName}}</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label>Product Type</label>\n                <select class=\"form-control\" (change)=\"getProductCategoryId($event.target.value)\" [formControl]=\"myGroup.controls['producttype']\"\n                  ngDefaultControl>\n                  <option value=\"\">Select Type</option>\n                  <option *ngFor=\"let c of productCategoryname\" [value]=\"c._id\">{{c.productcategoryName}}</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label>Product Brand</label>\n                <select class=\"form-control\" (change)=\"getBrandId($event.target.value)\" [formControl]=\"myGroup.controls['productbrand']\"\n                  ngDefaultControl>\n                  <option value=\"\">select Brand</option>\n                  <option *ngFor=\"let c of getBrandList\" [value]=\"c._id\">{{c.brandName}}</option>\n                </select>\n              </div>\n              <div class=\"form-group mybrand clearfix\">\n                <!-- <form [formGroup]='formgroup'> -->\n                <input type=\"text\" placeholder=\"My Brand\" [formControl]=\"myGroup.controls['addBrand']\" />\n                <button type=\"submit\" (click)=\"addBrand()\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n                <!-- </form> -->\n              </div>\n              <div class=\"form-group clearfix\">\n                <label>Product Tags</label>\n                <tag-input [(ngModel)]='itemsAsObjects' [placeholder]=\"'Enter a Tags'\" [onTextChangeDebounce]=\"500\"\n                  [formControl]=\"myGroup.controls['searchtag']\"></tag-input>\n                <!-- <tag-input [ngModel]=\"itemsAsObjects\" ></tag-input> -->\n              </div>\n            </div>\n            <!--Product Category Section End Here-->\n\n            <!--Modify Variants Table Section Start Here-->\n            <!-- <form [formGroup]='dynamicForm'> -->\n            <div class=\"modify_variants\">\n              <h4>Modify Variants</h4>\n              <table class=\"table mytable\">\n                <thead>\n                  <tr>\n                    <th align=\"left\" valign=\"middle\">Variant</th>\n                    <th>Price</th>\n                    <th>SKU</th>\n                    <th>Inventory</th>\n                  </tr>\n                </thead>\n                <tbody>\n\n\n                  <!-- ![(ngModel)]='combinationOfVariants' ngDefaultControl -->\n                  <!-- <tr formArrayName=\"items\" *ngFor=\"let item of dynamicForm.get('items').controls;  let in = index\" >\n                      <td [formGroupName]=\"in\">\n                        <span class=\"checkboxbx\">\n                          <input type=\"checkbox\" id={{in}} />\n                          <label for={{in}}>&nbsp;</label>\n                        </span>\n                        <span class=\"sizenm\" >{{dataLoop[in]}}</span> <span class=\"colornm\"></span>\n                      </td>\n                      <td><input class=\"form-control\" type=\"text\" placeholder=\"230\" /></td>\n                      <td><input class=\"form-control\" type=\"text\" placeholder=\"BHJ89\" /></td>\n                      <td><input class=\"form-control\" type=\"text\" placeholder=\"1234\" /></td>\n                    </tr> -->\n                  <!-- ![(ngModel)]='combinationOfVariants' ngDefaultControl -->\n                  <!-- {{dataLoop|json}} -->\n                  <tr *ngFor=\"let item of dataLoop;  let in = index\" class=\"pickvalue\">\n                    <td>\n                      <span class=\"checkboxbx\">\n                        <input type=\"checkbox\" id={{in}} value=\"{{item}}\"/>\n                        <label for={{in}}>&nbsp;</label>\n                      </span>\n                      <span class=\"sizenm\">{{item}}</span>&nbsp;\n                      <!-- <span class=\"sizenm\">{{item[0]}}</span>&nbsp;\n                      <span class=\"colornm\">{{item[1]}}</span>&nbsp;\n                      <span class=\"colornm\">{{item[2]}}</span>&nbsp; -->\n                    </td>\n                    <td id=\"variancePrice\"><input class=\"form-control variancePrice\" type=\"text\" placeholder=\"230\"  /></td>\n                    <td><input class=\"form-control varianceSKU\" type=\"text\" placeholder=\"BHJ89\" /></td>\n                    <td><input class=\"form-control varianceInventory\" type=\"text\" placeholder=\"1234\" /></td>\n                  </tr>\n                  <!-- {{dynamicForm.value|json}} -->\n                  <!-- <tr>\n                  <td><span class=\"checkboxbx\">\n                      <input type=\"checkbox\" id=\"test2\" />\n                      <label for=\"test2\">&nbsp;</label>\n                    </span><span class=\"sizenm\">XS</span> <span class=\"colornm\">Pink</span></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"230\" /></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"BHJ89\" /></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"1234\" /></td>\n                </tr>\n                <tr>\n                  <td><span class=\"checkboxbx\">\n                      <input type=\"checkbox\" id=\"test3\" />\n                      <label for=\"test3\">&nbsp;</label>\n                    </span><span class=\"sizenm\">XS</span> <span class=\"colornm\">Blue</span></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"230\" /></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"BHJ89\" /></td>\n                  <td><input class=\"form-control\" type=\"text\" placeholder=\"1234\" /></td>\n                </tr> -->\n                </tbody>\n              </table>\n            </div>\n            <!-- </form> -->\n            <!--Modify Variants Table Section End Here-->\n          </div>\n          <div class=\"col-sm-7 padwd10\">\n            <div class=\"row clearfix\">\n              <!--Selling Price Section Start Here-->\n              <div class=\"col-sm-6 pdrightwd10\">\n                <div class=\"productCategorybox\">\n                  <div class=\"form-group\">\n                    <label>Selling Price</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"499\" [(ngModel)]=\"SellingPrice\" [formControl]=\"myGroup.controls['sellingprice']\" />\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Cost/Item</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"399\" [formControl]=\"myGroup.controls['costprice']\" />\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Item Weight</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"0.5\" [formControl]=\"myGroup.controls['itemweight']\" />\n                  </div>\n                </div>\n                <!--Selling Price Section End Here-->\n              </div>\n              <!--Inventory Section Start Here-->\n              <div class=\"col-sm-6 pdleftwd10\">\n                <div class=\"productCategorybox\">\n                  <div class=\"form-group\">\n                    <label>Inventory SKU</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"BUI\" [formControl]=\"myGroup.controls['InventorySKU']\" />\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Quantity</label>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"50\" [formControl]=\"myGroup.controls['quantity']\" />\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Product Type</label>\n                    <select class=\"form-control\" [formControl]=\"myGroup.controls['trialPack']\">\n                      <option value=\"Avaiable for try\">Avaiable for try</option>\n                      <option value=\"saab\">Saab</option>\n                      <option value=\"mercedes\">Mercedes</option>\n                      <option value=\"audi\">Audi</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n              <!--Inventory Section End Here-->\n            </div>\n\n            <!--Variants Section Start Here-->\n            <div class=\"row clearfix\" *ngIf='true'>\n              <div class=\"col-sm-12\">\n                <div class=\"productCategorybox\">\n                  <div class=\"variants\">\n                    <h4>Variants</h4>\n                    <div class=\"sminfo\">Swimming hundreds of feet beneath the ocean’s surface in many parts of the\n                      world\n                      are prolific aey construct one or more spacious houses” that can exceed three feet in length.\n                    </div>\n                    <div class=\"variantsoption\">\n                      <div class=\"row clearfix\">\n                        <div class=\"col-sm-3\">\n                          <label>Option name</label>\n                        </div>\n                        <div class=\"col-sm-6\">\n                          <label>Option Values</label>\n                        </div>\n                        <div class=\"col-sm-3\">\n                          <label>&nbsp;</label>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row clearfix\">\n                          <!-- <div class=\"col-sm-3\">\n                          <input class=\"form-control\" type=\"text\" value=\"Color\" (change)='getOptionKey($event.target.value)' />\n                        </div>\n                        <div class=\"col-sm-6\">\n                          <tag-input [(ngModel)]='itemsAsObjects' [placeholder]=\"'Enter a Tags'\" [onTextChangeDebounce]=\"500\"></tag-input>\n                        </div> -->\n                          <!-- <div class=\"col-sm-3\">\n                          <a (click)=\"createComponent()\">Add Option</a>\n                        </div> -->\n\n\n                          <!-- <button type=\"button\" (click)=\"createComponent()\">\n                          I am Parent, Create Child\n                        </button> -->\n\n                          <!-- //!asdfj -->\n                          <div>\n                            <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"saveVariants(myForm)\" ngDefaultControl>\n                              <div class=\"form-group\">\n                                <!-- <label>Front End</label> -->\n                                <!-- <input type=\"text\" class=\"form-control\" formControlName=\"front\"> -->\n                              </div>\n                              <div formArrayName=\"languages\">\n                                  \n                                <div *ngFor=\"let language of myForm.controls.languages.controls; let i=index\" class=\"panel panel-default\">\n                                   \n                                  <div class=\"panel-heading variantsoption\">\n                                    <span>Variant {{i + 1}}</span>\n                                    <span class=\"glyphicon glyphicon-remove pull-right\" *ngIf=\"myForm.controls.languages.controls.length > 1\"\n                                      (click)=\"removeLanguage(i)\"></span>\n                                  </div>\n                                  <div class=\"panel-body\" [formGroupName]=\"i\">\n                                    <div class=\"form-group col-xs-6\">\n                                      <!-- <label>Option</label> -->\n                                      <!-- <input type=\"text\" class=\"form-control\" formControlName=\"React\"></div> -->\n                                      <select class=\"form-control dropdown\" formControlName=\"varianceKey\">\n                                        <option value=\"color\" selected>Color</option>\n                                        <option value=\"size\">Size</option>\n                                        <option value=\"material\">Material</option>\n                                      </select>\n                                    </div>\n\n                                    <div class=\"form-group col-xs-6\">\n                                      <!-- <label>Value</label> -->\n                                      <!-- <input type=\"text\" class=\"form-control\" formControlName=\"Angular\"> -->\n                                      <tag-input (onAdd)=\"myfun($event)\" formControlName=\"varianceValue\" [placeholder]=\"'Enter a Tags'\"\n                                        [onTextChangeDebounce]=\"500\"></tag-input>\n                                    </div>\n\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"margin-20\">\n                                <a (click)=\"addLanguage()\" style=\"cursor: default\">Add another variants </a></div>\n                              <div class=\"margin-20\">\n                                <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!myForm.valid\">Submit</button></div>\n                              <div class=\"clearfix\"></div>\n                              <div class=\"margin-20\">\n                                <!-- <div>myForm details:-</div> -->\n                                <!-- <pre>Is myForm valid?: <br>{{myForm.valid | json}}</pre> -->\n                                <!-- <pre>form value: <br>{{myForm.value | json}}</pre> -->\n                                <!-- <p> {{dataLoop|json}}</p> -->\n                              </div>\n                            </form>\n                          </div>\n                          <!--//! asdfasdf -->\n                        </div>\n                      </div>\n                      <div>\n                        <ng-template #viewContainerRef></ng-template>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--Variants Section End Here-->\n\n          </div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n  <!-- </form> -->\n  <!--Add Products Section End Here-->"

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
    function AddProductComponent(_fb, formBuilder, service, CFR) {
        this._fb = _fb;
        this.formBuilder = formBuilder;
        this.service = service;
        this.CFR = CFR;
        this.index = 0;
        this.componentsReferences = [];
        this.k = [];
        // itemsAsObjectss: any;
        this.varianceObj = [];
        this.tagChips = [];
        this.imageData = [];
        this.temp = [];
        this.result4 = [];
        this.dynamicForm = this._fb.group({
            items: this._fb.array([this.createItems()])
        });
        this.formgroup = formBuilder.group({
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        //   this.myGroup = new FormGroup({
        //     title: new FormControl()
        //  });
        this.myGroup = formBuilder.group({
            title: [''],
            description: [''],
            image1: [''],
            image2: [''],
            image3: [''],
            image4: [''],
            image5: [''],
            image6: [''],
            image7: [''],
            image8: [''],
            productcategory: [''],
            productsubcategory: [''],
            producttype: [''],
            productbrand: [''],
            addBrand: [''],
            searchtag: [''],
            combinationOfVariants: [''],
            sellingprice: [''],
            costprice: [''],
            itemweight: [''],
            InventorySKU: [''],
            quantity: [''],
            trialPack: [''],
        });
    }
    AddProductComponent.prototype.onUpload = function (file) {
        // console.log("image upload", file.response);
    };
    //!create items
    AddProductComponent.prototype.createItems = function () {
        return this._fb.group({
            variancePrice: '',
            varianceSKU: '',
            varianceInventory: '',
        });
    };
    //!additem
    AddProductComponent.prototype.addItem = function () {
        this.items = this.dynamicForm.get('item');
        this.items.push(this.createItems());
    };
    // [[red,blue,green],[xxl,xl,L],[Silk,cotton]]
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.saveVariants(2);
        // console.log(JSON.stringify(this.dataLoop))
        this.myForm = this._fb.group({
            // front: ['',],
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
    AddProductComponent.prototype.addLanguage = function () {
        if (true) {
            var control = this.myForm.controls['languages'];
            control.push(this.initlanguage());
        }
        // else{
        //   alert()
        // }
        // this.saveVariants(this.myForm)
    };
    AddProductComponent.prototype.removeLanguage = function (i) {
        var control = this.myForm.controls['languages'];
        control.removeAt(i);
    };
    //!save variants
    AddProductComponent.prototype.saveVariants = function (val) {
        var x = [];
        var y = [];
        var z = [];
        for (var i = 0; i < val.value.languages.length; i++) {
            if (val.value.languages[i].varianceKey == 'color') {
                for (var j = 0; j < val.value.languages[i].varianceValue.length; j++) {
                    x.push(val.value.languages[i].varianceValue[j].value);
                }
            }
            if (val.value.languages[i].varianceKey == 'size') {
                for (var j = 0; j < val.value.languages[i].varianceValue.length; j++) {
                    y.push(val.value.languages[i].varianceValue[j].value);
                }
            }
            if (val.value.languages[i].varianceKey == 'material') {
                for (var j = 0; j < val.value.languages[i].varianceValue.length; j++) {
                    z.push(val.value.languages[i].varianceValue[j].value);
                }
            }
        }
        var finalArr = [];
        console.log(x.length, y.length, z.length);
        if (x.length == 0 && y.length == 0 && z.length == 0) {
            alert("Select Any variants");
        }
        else {
            finalArr = [x, y, z];
            console.log("$$$");
        }
        // console.log(finalArr)
        this.dataLoop = this.cartesian(finalArr);
        // this.dataLoop = this.cartesian([["red", 'blue'], ['xl', 'm'], ['silk']]);
        // console.log('##################33', this.dataLoop)
        // dataloop=[
        //   ['red','xl','silk'],
        //   ['red','xl','silk'],
        //   ['red','xl','silk'],
        //   ['red','xl','silk'],
        //   ['red','xl','silk'],
        // ]
        //   "result": [
        //     {
        //         "color": "R",
        //         "matrial": "SK"
        //     },
        //     {
        //         "matrial": "COT",
        //         "color": "G"
        //     },
        //     {
        //         "matrial": "Feb",
        //         "color": "B"
        //     }
        // 
        //result=color
        // console.log("#############",val)
        // console.log("=======>>", JSON.stringify(val.value.languages))
        var e = [
            { "varianceKey": "SIZE", "varianceValue": [{ "display": "xxl", "value": "xxl" }, { "display": "xl", "value": "xl" }] },
            { "varianceKey": "COLOR", "varianceValue": [{ "display": "red", "value": "red" }, { "display": "blue", "value": "blue" }] }
        ];
        // var result = []
        // e.forEach(element => {
        //   console.log(element.varianceKey)
        //   result.push({
        //     [element.varianceKey]: element.varianceValue
        //   })
        // });
        // console.log("result===>>", JSON.stringify(result))
        var test = [
            { "SIZE": [{ "display": "xxl", "value": "xxl" }, { "display": "xl", "value": "xl" }] },
            { "COLOR": [{ "display": "red", "value": "red" }, { "display": "blue", "value": "blue" }] }
        ];
        var w = [];
        var a = [];
        var c = "";
        for (var index = 0; index < test.length; index++) {
            var s = Object.keys(test[index])[0];
            c = '';
            for (var j_1 = 0; j_1 < test[index][s].length; j_1++) {
                c = c + test[index][s][j_1].value + ",";
            }
            a = [c];
            w.push((_a = {},
                _a[s] = c,
                _a));
        }
        // console.log("wwwwwwwwwww", JSON.stringify(w))
        // var demo = []
        // var now = [{ "SIZE": ["xxl,xl,"] }, { "COLOR": ["red,blue,"] }]
        var now = [{ "SIZE": "xxl,xl," }, { "COLOR": "red,blue," }];
        var z = [];
        for (var index = 0; index < now.length; index++) {
            var c = Object.keys(now[index])[0];
            // console.log("44",now[index][c].split(','))
            var ee = now[index][c].split(',');
            var temp = (_b = {},
                _b[c] = ee,
                _b);
            z.push(temp);
        }
        // console.log("json", JSON.stringify(z))
        var result1 = [{ "SIZE": ["xxl", "xl", ""] }, { "COLOR": ["red", "blue", ""] }];
        // for (let index = 0; index < test.length; index++) {
        //   var s = Object.keys(test[index])[0]
        //   // console.log(test[index][s])
        //   for (let j = 0; j < test[index][s].length; j++) {
        //     // console.log("####33",test[index])
        //     demo.push({
        //       [s]: test[index][s][j].value
        //     })
        //   }
        // }
        // console.log('final', JSON.stringify(demo))
        var last = [{ "SIZE": "xxl" }, { "SIZE": "xl" }, { "COLOR": "red" }, { "COLOR": "blue" }];
        var _a, _b;
        // res=[
        //   {
        //     size:"xxl",
        //     color:"red"
        //   },
        //   {
        //     size:"xxl",
        //     color:"blue"
        //   },
        //   {
        //     size:"xl",
        //     color:"red"
        //   },
        //   {
        //     size:"xl",
        //     color:"Blue"
        //   }
        // ]
        // ==>> {  SIZE:[XXL,XL] ,COLOR:[RED,BLUE]  }
        // last.forEach(element => {
        //   let KEY=Object.keys(element)[0]
        //   console.log('+++',element[Object.keys(element)[0]])
        // });
        // let test1 = []
        // for (let z = 0; z < last.length; z++) {
        //   let KEY = Object.keys(last[z])[0]
        //   console.log("last", last[z][KEY])
        //   console.log(test1.length)
        //   if (test1.length == 0) {
        //     test1.push({
        //       [KEY]: [last[z][KEY]]
        //     })
        //   }
        //   else {
        //   }
        // }
        // console.log(test1)
        //   public function testApi($data)
        //   {
        //     $color=array('R','G','B');
        //     $matrial=array('SK','COT','Feb');
        //     $resultData=array();
        //     for ($i=0; $i <count($color) ; $i++) { 
        //       //$colorValue=;
        //       for ($j=0; $j <count($matrial) ; $j++) { 
        //         $resultData[$i]['color']=$color[$i];
        //         $resultData[$j]['matrial']=$matrial[$j];
        //       }
        //     }
        //     return $resultData;
        //   }
        //  }
        // var lang = val.value.languages
        // var outerArr = []
        // for (let index = 0; index < lang.length; index++) {
        //   var angData = lang[index].varianceValue;
        //   var innarr = []
        //   for (let index2 = 0; index2 < angData.length; index2++) {
        //     innarr.push(angData[index2].value);
        //   }
        //   console.log("Inner", innarr)
        //   outerArr.push(innarr)
        // }
        // console.log("outerArr", outerArr)
        // this.dataLoop = this.cartesian(outerArr);
        // console.log('##################33', this.dataLoop)
    };
    AddProductComponent.prototype.cartesian = function (arg) {
        // !this.cartesian([[0,1], [0,1,2,3]]);
        // [["red", "blue", "green"], ["xxl", "xl", "L"], ["Silk", "cotton"]]
        var r = [], /* arg = arguments, */ max = arg.length - 1;
        function helper(arr, i) {
            for (var j = 0, l = arg[i].length; j < l; j++) {
                // console.log('before slice', arr)
                var a = arr.slice(0); // clone arr
                // console.log('slicedata', a, i)
                // console.log(arg, 'Y^^^^^^6666', arg[i][j], i, j, max)
                a.push(arg[i][j]);
                if (i == max) {
                    r.push(a);
                    // this.createItems()
                    // console.log('R VALUE', r)
                }
                else
                    helper(a, i + 1);
            }
        }
        helper([], 0);
        // console.log('combination--->>', r)
        return r;
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
                _this.service.showSuccess('found');
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
                _this.service.showSuccess('data is find');
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
        // console.log("getProductlist enter", subCatId)
        var _this = this;
        var temp = {
            subCategoryId: subCatId
        };
        this.service.postApi('vendor/getProductCategoryName', temp, 0).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.service.showSuccess('get Product List');
                // console.log("getProductlist", response)
                _this.productCategoryname = response['result'];
            }
            else {
                _this.service.showError('error');
            }
        }, function (error) {
            // console.log('error occur', error)
            _this.service.showError('Server Error');
        });
    };
    //!getBrandList
    AddProductComponent.prototype.getBrandListdata = function () {
        var _this = this;
        // console.log("function called")
        this.service.getApi('vendor/getBrandList', 0).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.service.showSuccess("get bandlist");
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
        // console.log("function valuevaluecalled", this.addNewBrand)
        var temp = {
            brandName: this.addNewBrand
        };
        this.service.postApi('vendor/addBrand', temp, 0).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.service.showSuccess("BRAND ADDED");
                // console.log("asdfasdf", response)
                _this.getBrandListdata();
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
    // onFileChanged($event): void {
    //   // console.log($event)
    //   this.readThis($event.target);
    //   this.readUrl($event.target);
    // }
    // readThis(inputValue: any): void {
    //   var file: File = inputValue.files[0];
    //   var myReader: FileReader = new FileReader();
    //   myReader.onloadend = (e) => {
    //     this.image = myReader.result;
    //   }
    //   // console.log(this.image)
    //   myReader.readAsDataURL(file);
    // }
    // readUrl(inputValue: any) {
    //   if (inputValue.files && inputValue.files[0]) {
    //     var reader: FileReader = new FileReader();
    //     reader.onload = (event: ProgressEvent) => {
    //       this.url = reader.result;
    //     }
    //     // console.log(this.url)
    //     reader.readAsDataURL(inputValue.files[0]);
    //   }
    // }
    //!test image
    // base64textString = [];
    AddProductComponent.prototype.onFileChanged = function (evt) {
        var file = evt.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = this.handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
            // console.log(this.base64textString)
        }
    };
    AddProductComponent.prototype.handleReaderLoaded = function (e) {
        this.imageData.push('data:image/png;base64,' + btoa(e.target.result));
    };
    // !image upload 
    // onFileChanged(event) {
    //   console.log("###33")
    //   var self = this;
    //   if (event.target.files && event.target.files[0]) {
    //     var fileType = event.target.files[0].type
    //     if (fileType === 'image/jpeg' || fileType === 'image/png' || fileType === 'image/jpg') {
    //       this.image = event.target.files[0]
    //       var reader = new FileReader()
    //       reader.onload = (e) => {
    //         self.imageUrl = e.target['result']
    //       }
    //       console.log(self.imageUrl,"++")
    //       // this.imageData = self.imageUrl
    //       this.imageData.push(self.imageUrl)
    //       console.log("this is image--->>>>>>>>>",this.imageData)
    //       // this.imageArray.push(this.imageData)
    //       reader.readAsDataURL(event.target.files[0])
    //       // debugger;
    //     }
    //     else {
    //       self.imageUrl = '';
    //       this.service.showError('Please select image file only !')
    //     }
    //   }
    // }
    //!getCombination
    AddProductComponent.prototype.getCombination = function (res) {
        // console.log('---------->>getCombination',localStorage.getItem('optionvalue'))
        // console.log('---------->>getCombination',localStorage.getItem('options'))
        // this.optionValue = localStorage.getItem('options').split(',')
        console.log('this => ', res.options, typeof res.options);
        this.optionValue = res.optionvalue;
    };
    //!save Product
    AddProductComponent.prototype.saveProduct = function (val) {
        var _this = this;
        // console.log('this is dynamic ', this.dynamicForm)
        this.go();
        console.log("#form data", val);
        console.log("form build==>>", this.myGroup);
        // console.log("#########################33", [this.imageData])
        // console.log(this.itemsAsObjects);
        this.itemsAsObjects.forEach(function (element) {
            // console.log(element.value)
            _this.tagChips.push(element.value);
        });
        // console.log("this is data of ck editor", this.ckeditorContent);
        // console.log(this.tagChips)
        var temp = {
            productCategoryId: val.producttype,
            subCategoryId: val.productsubcategory,
            brandId: val.productbrand,
            productName: val.title,
            price: this.result4[0].variancePrice,
            categoryId: val.productcategory,
            description: this.ckeditorContent,
            variants: this.result4,
            tag: this.tagChips,
            color: this.result4[0].color,
            sellingPrice: val.sellingPrice,
            image: this.imageData,
            lang: "en",
            //!addon
            // inventory:"",
            inventorySKU: val.InventorySKU,
            costItem: val.costprice,
            quantity: val.quantity,
            weight: val.itemweight,
            productType: val.trialPack
        };
        console.log("temp", JSON.stringify(temp));
        //!api called
        this.service.postApi('vendor/addBrandDescription', temp, 1).subscribe(function (response) {
            _this.service.spinnerShow();
            if (response['statusCode'] == 200) {
                // this.service.spinnerHide()
                _this.service.showSuccess("Product Added");
                console.log("asdfasdf", response);
                // this.getBrandListdata()
            }
            else {
                console.log(response['result']);
                _this.service.showError('Invalid Email');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    AddProductComponent.prototype.myfun = function (event) {
        var selectVal = jQuery('select[formcontrolname="varianceKey"]').val();
        if (selectVal == 'size') {
            this.varianceObj.push({
                size: event.value,
            });
        }
        else if (selectVal == 'color') {
            this.varianceObj.push({
                color: event.value,
            });
        }
        else if (selectVal == 'material') {
            this.varianceObj.push({
                matrial: event.value,
            });
        }
        else {
            alert('please select any item from dropdown');
        }
    };
    AddProductComponent.prototype.go = function () {
        // var myArr = [];
        // $('table.mytable tr td span.sizenm ').each(function (i, item) {
        //   myArr.push($(this).text());
        // })
        // myArr.forEach(element => {
        //   this.k.push({
        //     color: element.split(",")[0],
        //     size: element.split(",")[1],
        //     material: element.split(",")[2]
        //   })
        // });
        var _this = this;
        // // console.log("######", this.k)
        var myArr2 = [];
        $('table.mytable tr.pickvalue td input').each(function (i) {
            myArr2.push($(this).val());
        });
        var result2 = myArr2;
        var result3 = [];
        var count = 4;
        for (var index = 0; index < result2.length; index++) {
            if (index == count) {
                result3.push('+');
                result3.push(result2[index]);
                count = count + 4;
            }
            else {
                result3.push(result2[index]);
            }
        }
        var temp = [];
        result3.push('+');
        result3.forEach(function (element) {
            if (element == "+") {
                _this.result4.push({
                    color: temp[0].split(",")[0],
                    size: temp[0].split(",")[1],
                    material: temp[0].split(",")[2],
                    variancePrice: temp[1],
                    varianceSKU: temp[2],
                    varianceInventory: temp[3],
                });
                temp = [];
            }
            else {
                temp.push(element);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('viewContainerRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], AddProductComponent.prototype, "combinationOfVariants", void 0);
    AddProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/Components/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/Components/add-product/add-product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
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
            if (response['statusCode'] == 200) {
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
                _this.service.showError('Invalid Email');
                // this.service.showError('Invalid email or password.')
            }
        }, function (error) {
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

module.exports = "<!--Dashboard Screen Start Here-->\n<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n  <!--sidebar-End -->\n\n  <div id=\"page-content-wrapper\">\n    <div class=\"dashboardConbx\">\n   <!--Recent Order Table Section Start Here-->\n   <div class=\"recentorder_tablewrap\">\n    <h4>Product List</h4>\n    <div class=\"recentOrderTable\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <!-- <th align=\"left\" valign=\"middle\"><input type=\"checkbox\" name=\"checkboxall\" value=\"checkboxAll\" /></th> -->\n            <th>Sr.No</th>\n            <th>Product</th>\n            <th>Brand</th>\n            <th>Price</th>\n            <th>Status</th>\n          </tr>\n        </thead>\n        <tbody>\n          \n          <tr *ngFor=\"let product of apiData;let i = index\">\n            <!-- <td align=\"left\" valign=\"middle\"><input type=\"checkbox\" name=\"checkbox1\" value=\"checkbox1\"></td> -->\n        \n            <td align=\"left\" valign=\"middle\">{{i+1}}</td>\n            <td align=\"left\" valign=\"middle\"><img class=\"pro_img\" src=\"{{product.image}}\" alt=\"\" />{{product.product}}</td>\n            <td>{{product.brand}}</td>\n            <td>{{product.price}}</td>\n            <td>{{product.status}}</td>\n          </tr>\n         </tbody>\n      </table>\n    </div>\n  </div>\n  <!--Recent Order Table Section End Here--> \n  </div>\n  </div>\n  </div>"

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
        console.log("this.getproductList()", this.apiData);
        console.log('---------->>>', this.rows);
    };
    AllproductsComponent.prototype.getproductList = function () {
        var _this = this;
        var temp = {
            lang: "eng"
        };
        this.service.postApi('vendor/getproductList', temp, 1).subscribe(function (response) {
            if (response['statusCode'] == 200) {
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
                _this.service.showError('Invalid Email');
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

module.exports = "<!--Business Details Screen Start Here-->\n<div class=\"business_detailswrap\">\n  <div class=\"businessrttopbg\"></div>\n  <div class=\"wakilogo\"></div>\n  <div class=\"businConbx\">\n    <div class=\"businesstextrow\"><img src=\"../../assets/img/business_details_text.png\" alt=\"\" /></div>\n    <div class=\"sminfo\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n      labore et dolore magna aliqua. Ut enim ad miemque laudantium, totam rem aperiam, eaque ipsa quae ab illo iem\n      aperiam,m ipsum dolor sit amet, consectetur adipisicing elit, lore magna aliqua. Ut enim ad miemque lauda</div>\n    <div class=\"businessfrombx\">\n      <form [formGroup]='formgroup'>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" [formControl]=\"formgroup.controls['business']\" placeholder=\"Business Name\" />\n          <div class=\"error_box clearfix\">\n            <p *ngIf=\"formgroup.controls['business'].hasError('required') && formgroup.controls['business'].dirty\"\n              style=\"color:red;font-size:14px;\">*BusinessName is required</p>\n            <p *ngIf=\"formgroup.controls['business'].hasError('pattern') && formgroup.controls['business'].dirty\" style=\"color:red;font-size:14px;\">*Please\n              enter valid email.</p>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"number\" [formControl]=\"formgroup.controls['phone']\" placeholder=\"Phone no.\" />\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" [formControl]=\"formgroup.controls['email']\" placeholder=\"Email Address\" />\n          <div class=\"error_box clearfix\">\n            <p *ngIf=\"formgroup.controls['email'].hasError('required') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Email\n              is required</p>\n            <p *ngIf=\"formgroup.controls['email'].hasError('pattern') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Please\n              enter valid email.</p>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <!-- <select class=\"form-control custom_select\" name=\"basic\" id=\"ex-search\" multiple>\n  <option hidden selected>Selling Product Types</option>\n  <option *ngFor=\"let item of event\" value='item.category'>{{item.category}}</option>\n  <option value=\"1\">Apparels</option>\n  <option value=\"2\">Food Items</option>\n  <option value=\"3\">Perfumes</option>\n  <option value=\"4\">Electronics </option>\n  </select> -->\n          <ng-multiselect-dropdown [placeholder]=\"'Select your category'\" [data]=\"categoryList\" [formControl]=\"formgroup.controls['categorySelect']\"\n            [settings]=\"dropdownSettings\">\n          </ng-multiselect-dropdown>\n          <!-- <select class=\"form-control custom_select\" name=\"basic\" id=\"ex-search\" >\n  <option hidden selected>select Token</option>\n  <option *ngFor=\"let item of event\" value='item.categoryName'>{{item.categoryName}}</option>\n  </select> -->\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" [formControl]=\"formgroup.controls['address']\" placeholder=\"Street Address\" />\n        </div>\n        <div class=\"form-group\">\n          <!-- <ng-select [options]=\"options\" [displayKey]=\"displayKey\" [disable]=\"isDisable\" [styleGuide]=\"styleGuide\"\n            [isDatalist]=\"isDataList\" [searchKeys]=\"searchKeys\" [formControl]=\"selectBox\" [formControl]=\"formgroup.controls['selectBox']\" \n            (onChange)=\"onChange($event)\"></ng-select> -->\n        </div>\n        <tag-input [(ngModel)]='items' [formControl]=\"formgroup.controls['taginput']\" ></tag-input>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary businessbtn\" [disabled]=\"!formgroup.valid\" (click)=\"addBusinessDetail(formgroup.value)\">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<!--Business Details Screen End Here-->"

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
        this.service.postApi('vendor/BusinessDetail', this.sentData, 1).subscribe(function (response) {
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

/***/ "./src/app/Components/enter-password-screen/enter-password-screen.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/Components/enter-password-screen/enter-password-screen.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/enter-password-screen/enter-password-screen.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/Components/enter-password-screen/enter-password-screen.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body class=\"loginscreen\">\n  <!--Login Screen Start Here-->\n  <div class=\"loginscreenwrap\">\n    <div class=\"wakilogo\"></div>\n    <div class=\"aboutwakiCon\">.\n      <div class=\"wakitextrow\"><img src=\"../../assets/img/waki_market_place.png\"  /></div>\n      <div class=\"sminfo\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\n        eu tus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo\n        inventor</div>\n      <div class=\"emailrow\">\n        <form [formGroup]='formgroup'>\n          <div class=\"form-group\">\n            <input class=\"form-control\" type=\"password\" minlength=\"8\"  [formControl]=\"formgroup.controls['password']\" placeholder=\"Enter the Password\" />\n            <button type=\"submit\" class=\"btn btn-primary loginbtn\" [disabled]=\"!formgroup.valid\" (click)=\"login(formgroup.value)\">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <!--Login Screen End Here-->\n</body>\n\n"

/***/ }),

/***/ "./src/app/Components/enter-password-screen/enter-password-screen.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/enter-password-screen/enter-password-screen.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EnterPasswordScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterPasswordScreenComponent", function() { return EnterPasswordScreenComponent; });
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




var EnterPasswordScreenComponent = /** @class */ (function () {
    function EnterPasswordScreenComponent(formBuilder, route, service) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
        this.formgroup = formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}/)])],
        });
    }
    EnterPasswordScreenComponent.prototype.ngOnInit = function () {
    };
    EnterPasswordScreenComponent.prototype.login = function (val) {
        var _this = this;
        console.log("this is ===>>", this.formgroup.value);
        var logindata = {
            "email": localStorage.getItem('email'),
            "password": val.password,
            "userType": 'admin',
            "lang": "en"
        };
        // console.log("########", logindata)
        this.service.postApi('user/login', logindata, 0).subscribe(function (response) {
            _this.responseData = response;
            // console.log("WWWWWWWW", this.responseData)
            if (response['statusCode'] == 200) {
                _this.service.showSuccess(response['statusMessage']);
                console.log('<<<<<', _this.responseData['result']);
                localStorage.setItem('token', _this.responseData.accessToken);
                localStorage.removeItem('email');
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
    EnterPasswordScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enter-password-screen',
            template: __webpack_require__(/*! ./enter-password-screen.component.html */ "./src/app/Components/enter-password-screen/enter-password-screen.component.html"),
            styles: [__webpack_require__(/*! ./enter-password-screen.component.css */ "./src/app/Components/enter-password-screen/enter-password-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Services_provider_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], EnterPasswordScreenComponent);
    return EnterPasswordScreenComponent;
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

module.exports = "<!--Header Start Here-->\n<div class=\"headers\">\n  <div class=\"menuiconbx\">\n    <div class=\"sidelogobx\">  \n      <div class=\"sidelogo\"></div>\n    </div>\n    <a id=\"menu-toggle\" class=\"sidemenubtn\" >Toggle Menu</a>\n    <div class=\"pgnm\" >Dashboard</div>\n    <div class=\"header_rtbx\">\n      <div class=\"notification_header\"><i class=\"glyphicon glyphicon-bell\" aria-hidden=\"true\"></i><span class=\"topdigit\">3</span></div>\n      <form action=\"\" class=\"search-form\">\n        <div class=\"form-group has-feedback\">\n          <label for=\"search\" class=\"sr-only\">Search</label>\n          <input type=\"text\" class=\"form-control\" name=\"search\" id=\"search\" placeholder=\"Search\">\n          <span class=\"glyphicon glyphicon-search form-control-feedback\"></span> </div>\n      </form>\n    </div>\n  </div>\n</div>\n<!--Header End Here--> "

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
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/Components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/Components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<!--Dashboard Screen Start Here-->\n<div id=\"wrapper\">\n  <!--Header Start Here-->\n  <app-header></app-header>\n  <!--Header End Here-->\n\n  <!-- Sidebar Start Here-->\n  <app-side-bar></app-side-bar>\n  <!--sidebar-End -->\n\n  <!--Dashboard Content Section Start Here-->\n  <div id=\"page-content-wrapper\">\n    <div class=\"dashboardConbx\">\n      <!--Welcome Rows Start Here-->\n      <div class=\"row clearfix\">\n        <div class=\"welcomerw clearfix\">\n          <div class=\"col-sm-6\">\n            <div class=\"welcomebx\">\n              <div class=\"row clearfix\">\n                <div class=\"col-sm-10\">\n                  <h3>Welcome to Waki Market Place</h3>\n                  <h4>Total Open Orders</h4>\n                </div>\n                <div class=\"col-sm-2\">\n                  <h2>102</h2>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"welcomebx\">\n              <div class=\"row clearfix\">\n                <div class=\"col-sm-10\">\n                  <h3>Total Active Carts</h3>\n                  <h4>Abandoned Checkouts</h4>\n                </div>\n                <div class=\"col-sm-2\">\n                  <h2 class=\"totalcharts\">325</h2>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--Welcome Rows End Here-->\n\n      <!--Digit Rows Start Here-->\n      <div class=\"row clearfix\">\n        <div class=\"digitrow clearfix\">\n          <div class=\"col-sm-3\">\n            <div class=\"digitbx\">\n              <h3>66,163</h3>\n              <h4>Orders Pending</h4>\n              <span class=\"bdrbtm\"></span>\n            </div>\n          </div>\n          <div class=\"col-sm-3\">\n            <div class=\"digitbx\">\n              <h3>66,134</h3>\n              <h4>Orders to be prepared</h4>\n              <span class=\"bdrbtm\"></span>\n            </div>\n          </div>\n          <div class=\"col-sm-3\">\n            <div class=\"digitbx\">\n              <h3>1256</h3>\n              <h4>Orders Ready to ship</h4>\n              <span class=\"bdrbtm\"></span>\n            </div>\n          </div>\n          <div class=\"col-sm-3\">\n            <div class=\"digitbx\">\n              <h3>4567</h3>\n              <h4>Order Delivery awaited</h4>\n              <span class=\"bdrbtm\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--Digit Rows End Here-->\n\n      <!--Total Sales Section Start Here-->\n      <div class=\"totalSeleswrap\">\n        <div class=\"row clearfix\">\n          <div class=\"col-sm-5\">\n            <div class=\"totalSelesinfobx\">\n              <h3>TOTAL SALES</h3>\n              <div class=\"sminfo\">Collaboratively administrate empowered markets via plug-and-play networks.\n                Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer\n                directed convergence without\n                revolutionary ROI.</div>\n            </div>\n          </div>\n          <div class=\"col-sm-7\">\n            <div class=\"salesgraph\"><img class=\"img-responsive\" src=\"../../assets/img/sales_graph.png\" alt=\"\" /></div>\n          </div>\n        </div>\n      </div>\n      <!--Total Sales Section End Here-->\n\n      <!--Orders Status Section Start Here-->\n      <div class=\"orderstatuswrap\">\n        <div class=\"row eqWrap equalHMWrap clearfix\">\n          <div class=\"col-sm-4 orderstatus\">\n            <h4>ORDER STATUS</h4>\n            <div class=\"pieChartsbx\"><img src=\"../../assets/img/pie_chart.png\" width=\"267\" height=\"288\"></div>\n          </div>\n          <div class=\"col-sm-8 orderstatus\">\n            <h4 class=\"activities\">ACTIVITIES <span class=\"viewall\"><a href=\"javascript:void(0);\">View All</a></span></h4>\n            <div class=\"activitiesCon\">\n              <div class=\"activitiesrow recent clearfix\">\n                <div class=\"linebx\"><span class=\"highlightpoint\"></span></div>\n                <div class=\"actiinfoCon\">\n                  <div class=\"timerw\">2 mins ago</div>\n                  <div class=\"activisminfo\">Template Builder Access (Video tutorial inside documentation)</div>\n                </div>\n              </div>\n              <div class=\"activitiesrow recent1hours clearfix\">\n                <div class=\"linebx\"><span class=\"highlightpoint\"></span></div>\n                <div class=\"actiinfoCon\">\n                  <div class=\"timerw\">1 hour ago</div>\n                  <div class=\"activisminfo\">Designed the wordpress theme lily created her account.</div>\n                </div>\n              </div>\n              <div class=\"activitiesrow clearfix\">\n                <div class=\"linebx\"><span class=\"highlightpoint\"></span></div>\n                <div class=\"actiinfoCon\">\n                  <div class=\"timerw\">4:30 p.m</div>\n                  <div class=\"activisminfo\">Your domain will expired in 13 days.</div>\n                </div>\n              </div>\n              <div class=\"activitiesrow clearfix\">\n                <div class=\"linebx\"><span class=\"highlightpoint\"></span></div>\n                <div class=\"actiinfoCon\">\n                  <div class=\"timerw\">4:30 p.m</div>\n                  <div class=\"activisminfo\">Your domain will expired in 13 days.</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--Orders Status Section End Here-->\n\n     <!--Recent Order Table Section Start Here-->\n     <div class=\"recentorder_tablewrap\">\n      <h4>RECENT ORDERS</h4>\n      <div class=\"recentOrderTable\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <!-- <th align=\"left\" valign=\"middle\"><input type=\"checkbox\" name=\"checkboxall\" value=\"checkboxAll\" /></th> -->\n              <th>Sr.No</th>\n              <th>Product</th>\n              <th>Customer</th>\n              <th>Location</th>\n              <th>Quantity</th>\n              <th>Status</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let product of apiData;let i = index\">\n              <!-- <td align=\"left\" valign=\"middle\"><input type=\"checkbox\" name=\"checkbox1\" value=\"checkbox1\"></td> -->\n              <td align=\"left\" valign=\"middle\">{{i+1}}</td>\n              <td align=\"left\" valign=\"middle\"><img class=\"pro_img\" src=\"{{product.productImage}}\" alt=\"\" />{{product.productDetail}}</td>\n              <td>{{product.customerName}}</td>\n              <td>{{product.customerAddress}}</td>\n              <td>{{product.quantity}}</td>\n              <td>{{product.status}}</td>\n            </tr>\n           </tbody>\n        </table>\n      </div>\n    </div>\n    <!--Recent Order Table Section End Here--> \n     \n    <ng-chat [adapter]=\"adapter\" [userId]=\"userId\"></ng-chat>\n    </div>\n  </div>\n  <!--Dashboard Content Section End Here-->\n\n</div>\n<!--Dashboard Screen End Here-->"

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
            if (response['statusCode'] == 200) {
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

module.exports = "<div class=\"wrapper \">\n  <!-- <app-sidebar></app-sidebar> -->\n  <div class=\"main-panel\">\n    <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n      <div class=\"container-fluid\">\n        <!-- <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\">Change Password</a>\n        </div> -->\n\n        <div class=\"bottom-down\" >\n          <img src=\"../../../assets/img/waki_logo.png\"  alt=\"\" style=\"height: 90px;\"/>\n         </div>\n        <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n              aria-label=\"Toggle navigation\">\n              <span class=\"sr-only\">Toggle Nav</span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n          </button> -->\n        <div class=\"collapse navbar-collapse justify-content-end\">\n          <!-- <app-side-icon></app-side-icon> -->\n        </div>\n      </div>\n    </nav>\n    <div class=\"content\">\n      <div class=\"container-fluid pt-4\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-tabs card-header-primary\">\n            <h4 class=\"card-title font-weight-bold\">Password Changed Successfully</h4>\n          </div>\n          <div class=\"card-body\">\n            <!-- <form class=\"form\" [formGroup]='passwordForm'> -->\n              <!-- <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.controls['oldPassword'].dirty && passwordForm.controls['oldPassword'].invalid)}\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"Old Password\" name='' formControlName='oldPassword' maxlength=\"16\"\n              id='oldPassword' />\n\n          <div class=\"errMsg\" *ngIf=\"passwordForm.get('oldPassword').dirty && passwordForm.get('oldPassword').invalid\">\n              <span [ngClass]=\"{error:passwordForm.get('oldPassword').hasError('required')}\" *ngIf=\"passwordForm.get('oldPassword').hasError('required')\" style=\"color:red;font-size:14px;\">*Please enter password.</span>\n              <span [ngClass]=\"{error:passwordForm.get('oldPassword').hasError('minlength') && !passwordForm.get('oldPassword').hasError('required')}\"\n                  *ngIf=\"passwordForm.get('oldPassword').hasError('minlength') && !passwordForm.get('oldPassword').hasError('required')\" style=\"color:red;font-size:14px;\">*Password must be of minimum 8 characters.</span>\n          </div>\n      </div> -->\n              <!-- <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" formControlName='newPassword'\n                maxlength=\"16\" id='newPassword' /> -->\n              <!-- <div class=\"errMsg\" *ngIf=\"passwordForm.get('newPassword').dirty && passwordForm.get('newPassword').invalid\">\n                <span [ngClass]=\"{error:passwordForm.get('newPassword').hasError('required')}\" *ngIf=\"passwordForm.get('newPassword').hasError('required')\"\n                  style=\"color:red;font-size:14px;\">*Please enter password.</span>\n                <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.controls['newPassword'].dirty && passwordForm.controls['newPassword'].invalid)}\">\n                  <span [ngClass]=\"{error:passwordForm.get('newPassword').hasError('minlength') && !passwordForm.get('newPassword').hasError('required')}\"\n                    *ngIf=\"passwordForm.get('newPassword').hasError('minlength') && !passwordForm.get('newPassword').hasError('required')\"\n                    style=\"color:red;font-size:14px;\">*Password must be of minimum 8 characters.</span>\n                </div>\n              </div> -->\n              <br>\n              <br>\n              <br>\n              <!-- <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.get('newPassword').value != passwordForm.get('confirmPassword').value) && passwordForm.controls['confirmPassword'].dirty}\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName='confirmPassword'\n                  maxlength=\"16\" id='confirmPassword' />\n                <div class=\"errMsg\" *ngIf=\"passwordForm.get('newPassword').value && passwordForm.get('confirmPassword').value\">\n                  <span [ngClass]=\"{error:passwordForm.get('newPassword').value != passwordForm.get('confirmPassword').value }\"\n                    *ngIf='passwordForm.get(\"newPassword\").value != passwordForm.get(\"confirmPassword\").value ' style=\"color:red;font-size:14px;\">*\n                    New password and confirm password does not match. </span>\n                </div>\n              </div> -->\n              <br>\n              <footer class=\"card__body\">\n\n                <!-- <button class=\"btn btn-primary full-width\" [disabled]=\"!passwordForm.valid\" (click)=\" save(passwordForm.value)\">SAVE</button> -->\n\n              </footer>\n            <!-- </form> -->\n            <br>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- <app-footer> </app-footer> -->\n  </div>\n</div>\n<!-- <app-logout></app-logout> -->"

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

module.exports = "<div class=\"wrapper \">\n  <!-- <app-sidebar></app-sidebar> -->\n  <div class=\"main-panel\">\n    <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n      <div class=\"container-fluid\">\n        <!-- <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\">Change Password</a>\n        </div> -->\n\n        <div class=\"bottom-down\" >\n          <img src=\"../../../assets/img/waki_logo.png\"  alt=\"\" style=\"height: 90px;\"/>\n         </div>\n        <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n              aria-label=\"Toggle navigation\">\n              <span class=\"sr-only\">Toggle Nav</span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n          </button> -->\n        <div class=\"collapse navbar-collapse justify-content-end\">\n          <!-- <app-side-icon></app-side-icon> -->\n        </div>\n      </div>\n    </nav>\n    <div class=\"content\">\n      <div class=\"container-fluid pt-4\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-tabs card-header-primary\">\n            <h4 class=\"card-title font-weight-bold\">Reset Password</h4>\n          </div>\n          <div class=\"card-body\">\n            <form class=\"form\" [formGroup]='passwordForm'>\n              <!-- <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.controls['oldPassword'].dirty && passwordForm.controls['oldPassword'].invalid)}\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"Old Password\" name='' formControlName='oldPassword' maxlength=\"16\"\n              id='oldPassword' />\n\n          <div class=\"errMsg\" *ngIf=\"passwordForm.get('oldPassword').dirty && passwordForm.get('oldPassword').invalid\">\n              <span [ngClass]=\"{error:passwordForm.get('oldPassword').hasError('required')}\" *ngIf=\"passwordForm.get('oldPassword').hasError('required')\" style=\"color:red;font-size:14px;\">*Please enter password.</span>\n              <span [ngClass]=\"{error:passwordForm.get('oldPassword').hasError('minlength') && !passwordForm.get('oldPassword').hasError('required')}\"\n                  *ngIf=\"passwordForm.get('oldPassword').hasError('minlength') && !passwordForm.get('oldPassword').hasError('required')\" style=\"color:red;font-size:14px;\">*Password must be of minimum 8 characters.</span>\n          </div>\n      </div> -->\n              <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" formControlName='newPassword'\n                maxlength=\"16\" id='newPassword' />\n              <div class=\"errMsg\" *ngIf=\"passwordForm.get('newPassword').dirty && passwordForm.get('newPassword').invalid\">\n                <span [ngClass]=\"{error:passwordForm.get('newPassword').hasError('required')}\" *ngIf=\"passwordForm.get('newPassword').hasError('required')\"\n                  style=\"color:red;font-size:14px;\">*Please enter password.</span>\n                <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.controls['newPassword'].dirty && passwordForm.controls['newPassword'].invalid)}\">\n                  <span [ngClass]=\"{error:passwordForm.get('newPassword').hasError('minlength') && !passwordForm.get('newPassword').hasError('required')}\"\n                    *ngIf=\"passwordForm.get('newPassword').hasError('minlength') && !passwordForm.get('newPassword').hasError('required')\"\n                    style=\"color:red;font-size:14px;\">*Password must be of minimum 8 characters.</span>\n                </div>\n              </div>\n              <br>\n              <br>\n              <br>\n              <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.get('newPassword').value != passwordForm.get('confirmPassword').value) && passwordForm.controls['confirmPassword'].dirty}\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName='confirmPassword'\n                  maxlength=\"16\" id='confirmPassword' />\n                <div class=\"errMsg\" *ngIf=\"passwordForm.get('newPassword').value && passwordForm.get('confirmPassword').value\">\n                  <span [ngClass]=\"{error:passwordForm.get('newPassword').value != passwordForm.get('confirmPassword').value }\"\n                    *ngIf='passwordForm.get(\"newPassword\").value != passwordForm.get(\"confirmPassword\").value ' style=\"color:red;font-size:14px;\">*\n                    New password and confirm password does not match. </span>\n                </div>\n              </div>\n              <br>\n              <footer class=\"card__body\">\n\n                <button class=\"btn btn-primary full-width\" [disabled]=\"!passwordForm.valid\" (click)=\" save(passwordForm.value)\">SAVE</button>\n\n              </footer>\n            </form>\n            <br>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- <app-footer> </app-footer> -->\n  </div>\n</div>\n<!-- <app-logout></app-logout> -->"

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

module.exports = " <!-- Sidebar Start Here-->\n <div id=\"sidebar-wrapper\">\n  <div class=\"sidemenuwrap\">\n    <div class=\"userprofilebx clearfix\">\n      <div class=\"usercirbx\"> <img src=\"../../assets/img/user_img.jpg\" width=\"230\" height=\"222\" alt=\"\" /> </div>\n      <div class=\"userpnm\">\n        <h4>Johnathan Doe</h4>\n        <h5>Owner</h5>\n      </div>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a routerLink=\"/dashBoard\" routerLinkActive=\"active\">Dashboard</a></li>\n      <li class=\"orders dropdown\"><a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Orders<span class=\"orders\">3</span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a routerLink=\"/orderlist\" routerLinkActive=\"active\">Orders List</a></li>\n          <li><a href=\"javascript:void(0);\">Abandoned Checkouts</a></li>\n          <li><a href=\"javascript:void(0);\">Cancelled Orders</a></li>\n        </ul>\n      </li>\n      <li class=\"products dropdown\"><a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Products</a>\n        <ul class=\"dropdown-menu\">\n          <li><a routerLink=\"/allproducts\" routerLinkActive=\"active\">All Products</a></li>\n          <li><a href=\"javascript:void(0);\" (click)=addProduct() >Add Products</a></li>\n          <li><a href=\"javascript:void(0);\">Inventory</a></li>\n        </ul>\n      </li>\n      <li><a href=\"javascript:void(0);\">Reports</a></li>\n      <li><a href=\"javascript:void(0);\">Sales & Offers<span class=\"salesoffers\">4</span></a></li>\n      <li><a href=\"javascript:void(0);\">My Earnings</a></li>\n      <li><a href=\"javascript:void(0);\">Notifications <span class=\"notification\">8</span></a></li>\n      <li><a href=\"javascript:void(0);\">Reviews & Feedbacks <span class=\"feedback\">8</span></a></li>\n    </ul>\n    <div class=\"settingsbx\">\n      <ul class=\"nav navbar-nav\">\n        <li><a href=\"javascript:void(0);\">My Account</a></li>\n        <li><a href=\"javascript:void(0);\">Settings</a></li>\n        <li><a href=\"javascript:void(0);\">Live Chat</a></li>\n        <li><a href=\"/login\" (click)=logout()>Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!--sidebar-End -->"

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
    function SideBarComponent(route) {
        this.route = route;
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent.prototype.addProduct = function () {
        console.log("hgfdfghujhgfds");
        this.route.navigate(['/addProductScreen']);
    };
    SideBarComponent.prototype.logout = function () {
        localStorage.clear();
        this.route.navigate(['/login']);
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/Components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/Components/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div>\n      <div>\n        <h2>Add Languages</h2>\n      </div>\n      <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"save(myForm)\">\n        <div class=\"form-group\">\n          <label>Front End</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"front\"></div>\n        <div formArrayName=\"languages\">\n          <div *ngFor=\"let language of myForm.controls.languages.controls; let i=index\" class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <span>Language {{i + 1}}</span>\n              <span class=\"glyphicon glyphicon-remove pull-right\" *ngIf=\"myForm.controls.languages.controls.length > 1\"\n                (click)=\"removeLanguage(i)\"></span>\n            </div>\n            <div class=\"panel-body\" [formGroupName]=\"i\">\n              <div class=\"form-group col-xs-6\">\n                <label>React</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"React\"></div>\n              <div class=\"form-group col-xs-6\">\n                <label>Angular5</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"angular\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"margin-20\">\n          <a (click)=\"addLanguage()\" style=\"cursor: default\">Add another Language </a></div>\n        <div class=\"margin-20\">\n          <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!myForm.valid\">Submit</button></div>\n        <div class=\"clearfix\"></div>\n        <div class=\"margin-20\">\n          <div>myForm details:-</div>\n          <pre>Is myForm valid?: <br>{{myForm.valid | json}}</pre>\n          <pre>form value: <br>{{myForm.value | json}}</pre>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

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

module.exports = "<div class=\"loginscreenwrap\" >\n  <div class=\"wakilogo\"></div>\n  <div class=\"aboutwakiCon\">.\n    <div class=\"wakitextrow\"><img src=\"../../assets/img/waki_market_place.png\"  /></div>\n    <div class=\"sminfo\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\n      eu tus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo\n      inventor</div>\n    <div class=\"emailrow\">\n      <form [formGroup]='formgroup'>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" [formControl]=\"formgroup.controls['email']\" placeholder=\"Enter your email address\" />\n          <button type=\"submit\" class=\"btn btn-primary loginbtn\" [disabled]=\"!formgroup.valid\" (click)=\"login(formgroup.value)\">Submit</button>\n        </div>\n        <div class=\"error_box clearfix\">\n            <p *ngIf=\"formgroup.controls['email'].hasError('required') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Email is required</p>\n            <p *ngIf=\"formgroup.controls['email'].hasError('pattern') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Please enter valid email.</p>\n        </div>\n<!-- //! -->\n\n\n<!-- //! -->\n\n\n      </form>\n    </div>\n  </div>\n</div>\n"

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
        this.formgroup = formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[A-Z0-9_-]+([\.-][A-Z0-9_-]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,4})+$/i)])],
        });
    }
    WakiLoginComponent.prototype.ngOnInit = function () {
    };
    WakiLoginComponent.prototype.login = function (val) {
        var _this = this;
        console.log(this.formgroup.value);
        console.log(val);
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
                localStorage.setItem('email', val.email.toLowerCase());
                // localStorage.setItem('adminId', this.responseData.result._id)
                console.log('successfully login', response['statusMessage']);
                _this.route.navigate(['/enterPassword']);
                // window.location.replace("/enterPassword");
                // localStorage.token = response[`data`][`token`];
                // localStorage.adminId = response[`data`][`_id`];
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
    }
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
    DataService.prototype.getApi = function (url, isHeader) {
        if (isHeader == 0) {
            var httpOptions;
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" })
            };
            return this.http.get((this.baseUrl + url), httpOptions);
        }
        else if (isHeader == 1) {
            console.log('token', localStorage.token);
            var httpOptions;
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "token": localStorage.token, "_id": localStorage.adminId, "Content-Type": "application/json" })
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
/* harmony import */ var _Components_enter_password_screen_enter_password_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/enter-password-screen/enter-password-screen.component */ "./src/app/Components/enter-password-screen/enter-password-screen.component.ts");
/* harmony import */ var _Components_business_detail_business_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/business-detail/business-detail.component */ "./src/app/Components/business-detail/business-detail.component.ts");
/* harmony import */ var _Components_home_page_vendor_home_page_vendor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/home-page-vendor/home-page-vendor.component */ "./src/app/Components/home-page-vendor/home-page-vendor.component.ts");
/* harmony import */ var _Components_add_product_screen_add_product_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/add-product-screen/add-product-screen.component */ "./src/app/Components/add-product-screen/add-product-screen.component.ts");
/* harmony import */ var _Components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/add-product/add-product.component */ "./src/app/Components/add-product/add-product.component.ts");
/* harmony import */ var _Components_editproduct_editproduct_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/editproduct/editproduct.component */ "./src/app/Components/editproduct/editproduct.component.ts");
/* harmony import */ var _Components_test_sumit_test_sumit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/test-sumit/test-sumit.component */ "./src/app/Components/test-sumit/test-sumit.component.ts");
/* harmony import */ var _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/reset-password/reset-password.component */ "./src/app/Components/reset-password/reset-password.component.ts");
/* harmony import */ var _Components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/not-found/not-found.component */ "./src/app/Components/not-found/not-found.component.ts");
/* harmony import */ var _Components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/allproducts/allproducts.component */ "./src/app/Components/allproducts/allproducts.component.ts");
/* harmony import */ var _Components_password_changed_password_changed_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/password-changed/password-changed.component */ "./src/app/Components/password-changed/password-changed.component.ts");
/* harmony import */ var _Components_allorders_allorders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/allorders/allorders.component */ "./src/app/Components/allorders/allorders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _Components_waki_login_waki_login_component__WEBPACK_IMPORTED_MODULE_2__["WakiLoginComponent"] },
    { path: 'enterPassword', component: _Components_enter_password_screen_enter_password_screen_component__WEBPACK_IMPORTED_MODULE_3__["EnterPasswordScreenComponent"] },
    { path: 'business_details', component: _Components_business_detail_business_detail_component__WEBPACK_IMPORTED_MODULE_4__["BusinessDetailComponent"] },
    { path: 'dashBoard', component: _Components_home_page_vendor_home_page_vendor_component__WEBPACK_IMPORTED_MODULE_5__["HomePageVendorComponent"] },
    { path: 'addProductScreen', component: _Components_add_product_screen_add_product_screen_component__WEBPACK_IMPORTED_MODULE_6__["AddProductScreenComponent"] },
    { path: 'addProduct', component: _Components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_7__["AddProductComponent"] },
    { path: 'editProduct', component: _Components_editproduct_editproduct_component__WEBPACK_IMPORTED_MODULE_8__["EditproductComponent"] },
    { path: 'allproducts', component: _Components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_12__["AllproductsComponent"] },
    { path: 'test', component: _Components_test_sumit_test_sumit_component__WEBPACK_IMPORTED_MODULE_9__["TestSumitComponent"] },
    { path: 'resetPassword', component: _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"] },
    { path: 'notFound', component: _Components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"] },
    { path: 'passwordChanged', component: _Components_password_changed_password_changed_component__WEBPACK_IMPORTED_MODULE_13__["PasswordChangedComponent"] },
    { path: 'orderlist', component: _Components_allorders_allorders_component__WEBPACK_IMPORTED_MODULE_14__["AllordersComponent"] }
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
                        if (currUrl_1 === 'addProduct' || currUrl_1 === 'dashBoard') {
                            _this.router.navigate(['/login']);
                        }
                    }
                    else if ((localStorage.getItem('token') != null)) {
                        if (currUrl_1 === 'enterPassword' || currUrl_1 === 'login') {
                            _this.router.navigate(['/business_details']);
                        }
                    }
                    // if(localStorage.getItem('token') === null){
                    //   console.log(this.router.url)         
                    //   // this.router.navigate(['/resetPassword'])
                    //       /* if(!(this.router.url === '/login' || this.router.url === '/forgot-password' || this.router.url.substring(this.router.url.lastIndexOf("4200/") + 4,this.router.url.lastIndexOf("/?token")) === '/reset-password')){
                    //         this.router.navigate(['/login']);
                    //       }   */
                    //       if(!(currUrl === 'login' || currUrl === 'forgot-password' || currUrl === 'resetpassword')){
                    //         this.router.navigate(['/login']);
                    //       }  
                    //     } else {
                    //       /* if(this.router.url === '/login' || this.router.url === '/forgot-password' || this.router.url.substring(this.router.url.lastIndexOf("4200/") + 4,this.router.url.lastIndexOf("/?token")) === '/reset-password'){
                    //         this.router.navigate(['/dashboard'])
                    //       } */
                    //       if(currUrl === 'login' || currUrl === 'forgot-password' || currUrl === 'reset-password'){
                    //         this.router.navigate(['/dashboard'])
                    //       }
                    //     }
                }
            }
        });
        console.log('this.router.url', this.router.url);
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
/* harmony import */ var _Components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/side-bar/side-bar.component */ "./src/app/Components/side-bar/side-bar.component.ts");
/* harmony import */ var _Components_enter_password_screen_enter_password_screen_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/enter-password-screen/enter-password-screen.component */ "./src/app/Components/enter-password-screen/enter-password-screen.component.ts");
/* harmony import */ var _Components_business_detail_business_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/business-detail/business-detail.component */ "./src/app/Components/business-detail/business-detail.component.ts");
/* harmony import */ var _Components_home_page_vendor_home_page_vendor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/home-page-vendor/home-page-vendor.component */ "./src/app/Components/home-page-vendor/home-page-vendor.component.ts");
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _Components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/add-product/add-product.component */ "./src/app/Components/add-product/add-product.component.ts");
/* harmony import */ var _Components_add_product_screen_add_product_screen_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/add-product-screen/add-product-screen.component */ "./src/app/Components/add-product-screen/add-product-screen.component.ts");
/* harmony import */ var ngx_image_uploader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-image-uploader */ "./node_modules/ngx-image-uploader/fesm5/ngx-image-uploader.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ng_custom_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-custom-select */ "./node_modules/ng-custom-select/fesm5/ng-custom-select.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _Components_editproduct_editproduct_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Components/editproduct/editproduct.component */ "./src/app/Components/editproduct/editproduct.component.ts");
/* harmony import */ var ngx_dynamic_form__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-dynamic-form */ "./node_modules/ngx-dynamic-form/fesm5/ngx-dynamic-form.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng2-table/ng2-table */ "./node_modules/ng2-table/ng2-table.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _Components_child_child_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Components/child/child.component */ "./src/app/Components/child/child.component.ts");
/* harmony import */ var _Components_test_sumit_test_sumit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Components/test-sumit/test-sumit.component */ "./src/app/Components/test-sumit/test-sumit.component.ts");
/* harmony import */ var _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Components/reset-password/reset-password.component */ "./src/app/Components/reset-password/reset-password.component.ts");
/* harmony import */ var _Components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Components/not-found/not-found.component */ "./src/app/Components/not-found/not-found.component.ts");
/* harmony import */ var _Components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Components/allproducts/allproducts.component */ "./src/app/Components/allproducts/allproducts.component.ts");
/* harmony import */ var _Components_allorders_allorders_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Components/allorders/allorders.component */ "./src/app/Components/allorders/allorders.component.ts");
/* harmony import */ var _Components_password_changed_password_changed_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Components/password-changed/password-changed.component */ "./src/app/Components/password-changed/password-changed.component.ts");
/* harmony import */ var ng_chat__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-chat */ "./node_modules/ng-chat/fesm5/ng-chat.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { CKEditorModule } from 'ngx-ckeditor';



// import { SocketService } from './Services/socket.service';










// import { FancyImageUploaderModule } from 'ng2-fancy-image-uploader';






// import { Ng2TableModule } from 'ngx-datatable';
// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';

// import { ChidComponent } from './chid/chid.component';








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
                _Components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_15__["SideBarComponent"],
                _Components_enter_password_screen_enter_password_screen_component__WEBPACK_IMPORTED_MODULE_16__["EnterPasswordScreenComponent"],
                _Components_business_detail_business_detail_component__WEBPACK_IMPORTED_MODULE_17__["BusinessDetailComponent"],
                _Components_home_page_vendor_home_page_vendor_component__WEBPACK_IMPORTED_MODULE_18__["HomePageVendorComponent"],
                _Components_header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                _Components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_20__["AddProductComponent"],
                _Components_add_product_screen_add_product_screen_component__WEBPACK_IMPORTED_MODULE_21__["AddProductScreenComponent"],
                _Components_editproduct_editproduct_component__WEBPACK_IMPORTED_MODULE_26__["EditproductComponent"],
                // ChidComponent,
                _Components_child_child_component__WEBPACK_IMPORTED_MODULE_30__["ChildComponent"],
                _Components_test_sumit_test_sumit_component__WEBPACK_IMPORTED_MODULE_31__["TestSumitComponent"],
                _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_32__["ResetPasswordComponent"],
                _Components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_33__["NotFoundComponent"],
                _Components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_34__["AllproductsComponent"],
                _Components_allorders_allorders_component__WEBPACK_IMPORTED_MODULE_35__["AllordersComponent"],
                _Components_password_changed_password_changed_component__WEBPACK_IMPORTED_MODULE_36__["PasswordChangedComponent"],
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
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_23__["NgMultiSelectDropDownModule"].forRoot(),
                ng_custom_select__WEBPACK_IMPORTED_MODULE_24__["NgSelectModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_25__["TagInputModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_28__["NgxDatatableModule"],
                ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_29__["Ng2TableModule"],
                ngx_image_uploader__WEBPACK_IMPORTED_MODULE_22__["ImageUploaderModule"],
                ngx_dynamic_form__WEBPACK_IMPORTED_MODULE_27__["DynamicFormModule"],
                ng_chat__WEBPACK_IMPORTED_MODULE_37__["NgChatModule"]
            ],
            entryComponents: [
                _Components_child_child_component__WEBPACK_IMPORTED_MODULE_30__["ChildComponent"]
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

module.exports = __webpack_require__(/*! /home/techugo/Downloads/wakiVendor/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map