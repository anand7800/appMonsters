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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _brands_brands_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brands/brands.component */ "./src/app/brands/brands.component.ts");
/* harmony import */ var _vendorlist_vendorlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendorlist/vendorlist.component */ "./src/app/vendorlist/vendorlist.component.ts");
/* harmony import */ var _catgories_catgories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catgories/catgories.component */ "./src/app/catgories/catgories.component.ts");
/* harmony import */ var _subcatgories_subcatgories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subcatgories/subcatgories.component */ "./src/app/subcatgories/subcatgories.component.ts");
/* harmony import */ var _createvendor_createvendor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createvendor/createvendor.component */ "./src/app/createvendor/createvendor.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _chatdetails_chatdetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chatdetails/chatdetails.component */ "./src/app/chatdetails/chatdetails.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./userdetails/userdetails.component */ "./src/app/userdetails/userdetails.component.ts");
/* harmony import */ var _orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orderlist/orderlist.component */ "./src/app/orderlist/orderlist.component.ts");
/* harmony import */ var _orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./orderdetails/orderdetails.component */ "./src/app/orderdetails/orderdetails.component.ts");
/* harmony import */ var _vendorproducts_vendorproducts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vendorproducts/vendorproducts.component */ "./src/app/vendorproducts/vendorproducts.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
/* harmony import */ var _productcategories_productcategories_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./productcategories/productcategories.component */ "./src/app/productcategories/productcategories.component.ts");



















var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'brands', component: _brands_brands_component__WEBPACK_IMPORTED_MODULE_5__["BrandsComponent"] },
    { path: 'vendorlist', component: _vendorlist_vendorlist_component__WEBPACK_IMPORTED_MODULE_6__["VendorlistComponent"] },
    { path: 'catgories', component: _catgories_catgories_component__WEBPACK_IMPORTED_MODULE_7__["CatgoriesComponent"] },
    { path: 'subcatgories', component: _subcatgories_subcatgories_component__WEBPACK_IMPORTED_MODULE_8__["SubcatgoriesComponent"] },
    { path: 'createvendor', component: _createvendor_createvendor_component__WEBPACK_IMPORTED_MODULE_9__["CreatevendorComponent"] },
    { path: 'forgotpassword', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_10__["ForgotpasswordComponent"] },
    { path: 'chatdetails', component: _chatdetails_chatdetails_component__WEBPACK_IMPORTED_MODULE_11__["ChatdetailsComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"] },
    { path: 'userdetails', component: _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_13__["UserdetailsComponent"] },
    { path: 'orderlist', component: _orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_14__["OrderlistComponent"] },
    { path: 'orderdetails', component: _orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_15__["OrderdetailsComponent"] },
    { path: 'vendorproducts', component: _vendorproducts_vendorproducts_component__WEBPACK_IMPORTED_MODULE_16__["VendorproductsComponent"] },
    { path: 'productdetails', component: _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_17__["ProductdetailsComponent"] },
    { path: 'productcategories', component: _productcategories_productcategories_component__WEBPACK_IMPORTED_MODULE_18__["ProductcategoriesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _brands_brands_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./brands/brands.component */ "./src/app/brands/brands.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _vendorlist_vendorlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vendorlist/vendorlist.component */ "./src/app/vendorlist/vendorlist.component.ts");
/* harmony import */ var _catgories_catgories_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./catgories/catgories.component */ "./src/app/catgories/catgories.component.ts");
/* harmony import */ var _subcatgories_subcatgories_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./subcatgories/subcatgories.component */ "./src/app/subcatgories/subcatgories.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _createvendor_createvendor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./createvendor/createvendor.component */ "./src/app/createvendor/createvendor.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _chatdetails_chatdetails_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chatdetails/chatdetails.component */ "./src/app/chatdetails/chatdetails.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./userdetails/userdetails.component */ "./src/app/userdetails/userdetails.component.ts");
/* harmony import */ var _orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./orderlist/orderlist.component */ "./src/app/orderlist/orderlist.component.ts");
/* harmony import */ var _orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./orderdetails/orderdetails.component */ "./src/app/orderdetails/orderdetails.component.ts");
/* harmony import */ var _vendorproducts_vendorproducts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./vendorproducts/vendorproducts.component */ "./src/app/vendorproducts/vendorproducts.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
/* harmony import */ var _productcategories_productcategories_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./productcategories/productcategories.component */ "./src/app/productcategories/productcategories.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _brands_brands_component__WEBPACK_IMPORTED_MODULE_10__["BrandsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _vendorlist_vendorlist_component__WEBPACK_IMPORTED_MODULE_12__["VendorlistComponent"],
                _catgories_catgories_component__WEBPACK_IMPORTED_MODULE_13__["CatgoriesComponent"],
                _subcatgories_subcatgories_component__WEBPACK_IMPORTED_MODULE_14__["SubcatgoriesComponent"],
                _createvendor_createvendor_component__WEBPACK_IMPORTED_MODULE_17__["CreatevendorComponent"],
                _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_18__["ForgotpasswordComponent"],
                _chatdetails_chatdetails_component__WEBPACK_IMPORTED_MODULE_19__["ChatdetailsComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_20__["UsersComponent"],
                _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_21__["UserdetailsComponent"],
                _orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_22__["OrderlistComponent"],
                _orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_23__["OrderdetailsComponent"],
                _vendorproducts_vendorproducts_component__WEBPACK_IMPORTED_MODULE_24__["VendorproductsComponent"],
                _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_25__["ProductdetailsComponent"],
                _productcategories_productcategories_component__WEBPACK_IMPORTED_MODULE_26__["ProductcategoriesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/brands/brands.component.css":
/*!*********************************************!*\
  !*** ./src/app/brands/brands.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5kcy9icmFuZHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/brands/brands.component.html":
/*!**********************************************!*\
  !*** ./src/app/brands/brands.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container body\">\n       <div class=\"main_container\">\n    <app-sidebar></app-sidebar>\n    <app-header></app-header>  \n    <div class=\"right_col\" role=\"main\">\n<div class=\"col-md-12 col-sm-4 col-xs-12\">\n  <div style=\"float: right;\"><button type=\"submit\"  class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".createBrand\" (click)=clearAll()>Create Brand</button></div>\n  <div class=\"modal fade createBrand\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span>\n            </button>\n            <h4 class=\"modal-title\" id=\"myModalLabel2\">Add the new Brand</h4>\n          </div>\n          <form [formGroup]='addBrandForm' id=\"brand\" data-parsley-validate class=\"form-horizontal form-label-left\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"modal-body\">\n              <div class=\"form-group\">\n                  <img [src]=\"url\" height=\"100\"  alt=\"...\" width=\"150\" [hidden]=\"!url\">\n              </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"brand-image\"> Brand Image</label>\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                    \n                   <input type=\"file\" [formControl]=\"addBrandForm.controls['file']\"  data-role=\"magic-overlay\" data-target=\"#pictureBtn\" data-edit=\"insertImage\" accept=\"image/*\"  *ngIf=\"!show\" (change)=\"changeListener($event)\" >\n                    </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"brand-name\" required>Brand Name </label>\n            <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                <input type=\"text\" [formControl]=\"addBrandForm.controls['brandName']\" id=\"brand-name\" required=\"required\" value = \"{{brandData?.brandName}}\" >\n                \n            </div>\n            <input type=\"hidden\" [formControl]=\"addBrandForm.controls['brandId']\" id=\"brand_Id\" value = \"{{brandData?._id}}\" >\n          </div>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\"  data-dismiss=\"modal\" *ngIf=\"!show\" (click)=addBrand(addBrandForm.value) >Add Brand</button>\n              <button type=\"button\" class=\"btn btn-primary\"  data-dismiss=\"modal\" *ngIf=\"show\" (click)=editBrand(addBrandForm.value) >Update Brand</button>\n          </div>\n          </form>\n          \n\n        </div>\n      </div>\n    </div>\n    <div class=\"x_panel\">\n      <div class=\"x_title\">\n        <h2>Brand List</h2>\n        <ul class=\"nav navbar-right panel_toolbox\">\n          <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n          </li>\n       </ul>\n        <div class=\"clearfix\"></div>\n      </div>\n      <div class=\"x_content\">\n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th>S.No</th>\n              <th>Brand Image</th>\n              <th>Brand Name</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let brand of brandList;let i = index\">\n              <input type = \"hidden\" name =\"_id\" value=\"{{brand._id}}\">\n              <th scope=\"row\">{{i+1}}</th>\n              <td> <img src=\"{{brand.icon}}\" alt=\"...\" height=\"70\"></td>\n              <td>{{brand.brandName}}</td>\n              <td>\n              <i data-toggle=\"modal\" data-target=\".createBrand\" class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" (click)=getBrand(brand._id)></i>&nbsp;&nbsp;\n                <i class=\"fa fa-trash-o\" (click)=deleteBrand(brand._id)></i></td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n    </div>\n  </div>\n  </div>\n\n  <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/brands/brands.component.ts":
/*!********************************************!*\
  !*** ./src/app/brands/brands.component.ts ***!
  \********************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var BrandsComponent = /** @class */ (function () {
    function BrandsComponent(route, service, formBuilder) {
        this.route = route;
        this.service = service;
        this.formBuilder = formBuilder;
        this.show = false;
        this.addBrandForm = formBuilder.group({
            brandName: [''],
            brandId: [''],
            file: ['']
        });
    }
    BrandsComponent.prototype.ngOnInit = function () {
        this.route.navigate(['/brands']);
        this.getBrandList();
    };
    BrandsComponent.prototype.getBrandList = function () {
        var _this = this;
        this.service.getApi('admin/getBrandList', 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                console.log(Response['result']);
                _this.brandList = Response['result'];
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    BrandsComponent.prototype.changeListener = function ($event) {
        console.log($event);
        this.readThis($event.target);
        this.readUrl($event.target);
    };
    BrandsComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    BrandsComponent.prototype.readUrl = function (inputValue) {
        var _this = this;
        if (inputValue.files && inputValue.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = reader.result;
            };
            console.log(this.url);
            reader.readAsDataURL(inputValue.files[0]);
        }
    };
    BrandsComponent.prototype.addBrand = function (val) {
        var _this = this;
        this.sentData = {
            brandName: val.brandName,
            brandImage: this.image,
        };
        this.service.postApi('admin/addBrand', this.sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            // console.log("WWWWWWWW", this.responseData['statusCode'])
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/brands']);
                _this.ngOnInit();
            }
        }, function (error) {
            console.log('error occur', error);
            // this.service.showError('Server Error')
        });
    };
    BrandsComponent.prototype.clearAll = function () {
        if (this.brandData)
            this.brandData = {};
        this.url = '';
        this.show = false;
    };
    BrandsComponent.prototype.getBrand = function (val) {
        var _this = this;
        this.service.getApi('admin/getBrandById?brandId=' + val, 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                console.log(_this.brandData);
                _this.brandData = Response['result'];
                _this.url = _this.brandData.icon;
                _this.show = true;
                console.log(_this.brandData);
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    BrandsComponent.prototype.editBrand = function (val) {
        var _this = this;
        var get = $('#brand_Id').val();
        this.sentData = {
            brandId: get,
            brandName: val.brandName
        };
        this.service.postApi('vendor/updateBrand', this.sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            console.log("WWWWWWWW", _this.sentData);
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/brands']);
                _this.ngOnInit();
            }
        }, function (error) {
            console.log('error occur', error);
            // this.service.showError('Server Error')
        });
    };
    BrandsComponent.prototype.deleteBrand = function (val) {
        var _this = this;
        this.sentData = {
            brandId: val
        };
        this.service.postApi('vendor/deleteBrand', this.sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/brands']);
                _this.ngOnInit();
            }
        }, function (error) {
            console.log('error occur', error);
            // this.service.showError('Server Error')
        });
    };
    BrandsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        //console.log(this.hero);
    };
    BrandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brands',
            template: __webpack_require__(/*! ./brands.component.html */ "./src/app/brands/brands.component.html"),
            styles: [__webpack_require__(/*! ./brands.component.css */ "./src/app/brands/brands.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], BrandsComponent);
    return BrandsComponent;
}());



/***/ }),

/***/ "./src/app/catgories/catgories.component.css":
/*!***************************************************!*\
  !*** ./src/app/catgories/catgories.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGdvcmllcy9jYXRnb3JpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/catgories/catgories.component.html":
/*!****************************************************!*\
  !*** ./src/app/catgories/catgories.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\n    <div class=\"main_container\">\n <app-sidebar></app-sidebar>\n <app-header></app-header>  \n <div class=\"right_col\" role=\"main\">\n<div class=\"col-md-12 col-sm-4 col-xs-12\">\n<div style=\"float: right;\"><button type=\"submit\"  class=\"btn btn-primary\" id=\"sample\" data-toggle=\"modal\" data-target=\".createBrand\" (click)=\"clearAll()\">Create Category</button></div>\n<div class=\"modal fade createBrand\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n   <div class=\"modal-dialog modal-sm\">\n     <div class=\"modal-content\">\n\n       <div class=\"modal-header\">\n         <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span>\n         </button>\n         <h4 class=\"modal-title\" id=\"myModalLabel2\">Add the new Category</h4>\n       </div>\n       <form [formGroup]='addCategoryForm' id=\"category\" data-parsley-validate class=\"form-horizontal form-label-left\" (ngSubmit)=\"onSubmit()\">\n       <div class=\"modal-body\">\n          <div class=\"form-group\">\n              <img [src]=\"url\" height=\"100\"  alt=\"...\" width=\"150\" [hidden]=\"!url\">\n          </div>\n         <div class=\"form-group\">\n             <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"category-image\"> Category Image</label>\n             <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                <input type=\"file\" [formControl]=\"addCategoryForm.controls['file']\"  data-role=\"magic-overlay\" data-target=\"#pictureBtn\" data-edit=\"insertImage\"  accept=\"image/*\" *ngIf=\"!show\" (change)=\"changeListener($event)\" >\n             </div>\n         </div>\n         <div class=\"form-group\">\n             <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"category-name\">Category Name </label>\n         <div class=\"col-md-6 col-sm-6 col-xs-12\">\n             <input type=\"text\" [formControl]=\"addCategoryForm.controls['categoryName']\" value = \"{{categoryData?.categoryName}}\" id=\"category-name\" required=\"required\" >\n         </div>\n         <input type=\"hidden\" id=\"category_Id\" name =\"category_Id\" [formControl]=\"addCategoryForm.controls['categoryId']\" value=\"{{categoryData?._id}}\" >\n       </div>\n       </div>\n       <div class=\"modal-footer\">\n           <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n           <button type=\"button\" class=\"btn btn-primary\"  data-dismiss=\"modal\" *ngIf=\"!show\" (click)=addCategory(addCategoryForm.value)>Add Category</button>\n           <button type=\"button\" class=\"btn btn-primary upadte_btn\" *ngIf=\"show\"  data-dismiss=\"modal\" (click)=editCategory(addCategoryForm.value)>Update Category</button>\n       </div>\n       </form>\n       \n\n     </div>\n   </div>\n </div>\n <div class=\"x_panel\">\n   <div class=\"x_title\">\n     <h2>Category List</h2>\n     <ul class=\"nav navbar-right panel_toolbox\">\n       <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n       </li>\n    </ul>\n     <div class=\"clearfix\"></div>\n   </div>\n   <div class=\"x_content\">\n     <table class=\"table table-hover\">\n       <thead>\n         <tr>\n           <th>S.No</th>\n           <th>Category Image</th>\n           <th>Category Name</th>\n           <th>Action</th>\n         </tr>\n       </thead>\n       <tbody>\n         <tr *ngFor=\"let category of categoryList;let i = index\">\n           <th scope=\"row\">{{i+1}}</th>\n           <td> <img src=\"{{category.icons}}\" alt=\"...\" height=\"70\" ></td>\n           <td>{{category.categoryName}}</td>\n           <td><i data-toggle=\"modal\" data-target=\".createBrand\" class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" (click)=getCategory(category._id)></i>&nbsp;&nbsp;\n             <i class=\"fa fa-trash-o\" (click)=deleteCategory(category._id)></i></td>\n         </tr>\n       </tbody>\n     </table>\n\n   </div>\n </div>\n</div>\n</div>\n\n<app-footer></app-footer>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/catgories/catgories.component.ts":
/*!**************************************************!*\
  !*** ./src/app/catgories/catgories.component.ts ***!
  \**************************************************/
/*! exports provided: CatgoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatgoriesComponent", function() { return CatgoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var CatgoriesComponent = /** @class */ (function () {
    function CatgoriesComponent(route, service, formBuilder) {
        this.route = route;
        this.service = service;
        this.formBuilder = formBuilder;
        this.show = false;
        this.categoryData = {};
        this.addCategoryForm = formBuilder.group({
            categoryName: [''],
            file: [''],
            categoryId: [''],
            subcategoryId: ['']
        });
    }
    CatgoriesComponent.prototype.ngOnInit = function () {
        this.route.navigate(['/catgories']);
        this.getCategoryList();
    };
    CatgoriesComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.service.getApi('vendor/getCategoryList', 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                console.log(Response['result']);
                _this.categoryList = Response['result'];
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    CatgoriesComponent.prototype.changeListener = function ($event) {
        console.log($event);
        this.readThis($event.target);
        this.readUrl($event.target);
    };
    CatgoriesComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    CatgoriesComponent.prototype.readUrl = function (inputValue) {
        var _this = this;
        if (inputValue.files && inputValue.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = reader.result;
            };
            console.log(this.url);
            reader.readAsDataURL(inputValue.files[0]);
        }
    };
    CatgoriesComponent.prototype.addCategory = function (val) {
        var _this = this;
        var sentData = {
            categoryName: val.categoryName,
            image: this.image,
            icons: this.image,
        };
        this.service.postApi('vendor/addCategory', sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            console.log("WWWWWWWW", sentData);
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/categories']);
                _this.ngOnInit();
            }
        }, function (error) {
            console.log('error occur', error);
            // this.service.showError('Server Error')
        });
    };
    CatgoriesComponent.prototype.clearAll = function () {
        if (this.categoryData)
            this.categoryData = {};
        this.url = '';
        this.show = false;
    };
    CatgoriesComponent.prototype.deleteCategory = function (val) {
        var _this = this;
        var sentData = {
            categoryId: val
        };
        this.service.postApi('admin/deleteCategory', sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/categories']);
                _this.ngOnInit();
            }
        }, function (error) {
            console.log('error occur', error);
            // this.service.showError('Server Error')
        });
    };
    CatgoriesComponent.prototype.getCategory = function (val) {
        var _this = this;
        this.service.getApi('admin/getCategoryId?categoryId=' + val, 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                _this.categoryData = Response['result'];
                _this.url = _this.categoryData.icons;
                _this.show = true;
                console.log(_this.categoryData);
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    CatgoriesComponent.prototype.editCategory = function (val) {
        var _this = this;
        var get = $('#category_Id').val();
        var sentData = {
            categoryId: get,
            categoryName: val.categoryName
        };
        this.service.postApi('admin/editCategory', sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/categories']);
                _this.ngOnInit();
            }
        }, function (error) {
            console.log('error occur', error);
            // this.service.showError('Server Error')
        });
    };
    CatgoriesComponent.prototype.onSubmit = function () {
        this.submitted = true;
        //console.log(this.hero);
    };
    CatgoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catgories',
            template: __webpack_require__(/*! ./catgories.component.html */ "./src/app/catgories/catgories.component.html"),
            styles: [__webpack_require__(/*! ./catgories.component.css */ "./src/app/catgories/catgories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CatgoriesComponent);
    return CatgoriesComponent;
}());



/***/ }),

/***/ "./src/app/chatdetails/chatdetails.component.css":
/*!*******************************************************!*\
  !*** ./src/app/chatdetails/chatdetails.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   img {\n        border-radius: 50%;\n  }\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGRldGFpbHMvY2hhdGRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiR0FBRztRQUNLLG1CQUFtQjtHQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NoYXRkZXRhaWxzL2NoYXRkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICBpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4iXX0= */"

/***/ }),

/***/ "./src/app/chatdetails/chatdetails.component.html":
/*!********************************************************!*\
  !*** ./src/app/chatdetails/chatdetails.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\n  <div class=\"main_container\">\n<app-sidebar></app-sidebar>\n<app-header></app-header>  \n<div class=\"right_col\" role=\"main\">\n<div class=\"col-md-12 col-sm-4 col-xs-12\">\n<div class=\"x_panel\">\n <div class=\"x_title\">\n   <h2 >Chat History List</h2>\n   <ul class=\"nav navbar-right panel_toolbox\">\n     <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n     </li>\n  </ul>\n   <div class=\"clearfix\"></div>\n </div>\n <div class=\"x_content\">\n   <table class=\"table table-hover\">\n     <thead>\n       <tr>\n         <th>S.No</th>\n         <th style=\"text-align:center;\">Chat History</th>\n      </tr>\n     </thead>\n     <tbody>\n       <tr  *ngFor=\"let chat of chatList;let i = index\">\n         <th scope=\"row\">{{i+1}}</th>\n         <td (click)=\"openChat(chat.participant_id)\"> <img src=\"{{chat.profilePic}}\" onerror=\"this.onerror=null;this.src='/assets/images/default.png';\" class = \"pro_img\" height=\"50px\" width=\"50px\" alt=\"...\" > <div class=\"about\">\n            <div class=\"name\" >{{chat.userName}}</div>\n          </div></td>\n          <td>{{chat.lastMsg}}</td>\n         <td>{{chat.time|date : 'h:mma' }}</td>\n       </tr>\n       </tbody>\n   </table>\n\n </div>\n</div>\n</div>\n</div>\n<!--Chating Window box End Here--> <!--Chating Window box Start Here-->\n<div class=\"footer-contact\">\n  <div class=\"chatboxmodel subscribePopup\">\n    <div class=\"titlerow\">{{userName}}\n      <div class=\"closesbtn\">\n        <button type=\"button\" class=\"fa fa-times close\"></button>\n      </div>\n    </div>\n    <div class=\"chatsection\">\n      <div class=\"chatbox clearfix\">\n                   \n          <div *ngFor=\"let history of chatHistory;\" [ngClass]=\"history.senderId == receiverId ? 'chatreceive' : 'chatsend'\">\n            <p>{{history.message}}</p>\n            <h6>{{history.timeStamp|date : 'h:mma' }}</h6>\n          </div>\n       </div>\n    </div>\n      <div class=\"typemsg clearfix\">\n    <div class=\"form-group\">\n        <input class=\"form-control\" name=\"msg\" id=\"name\" type=\"text\" [(ngModel)]=\"msg\"  (keydown.enter)=\"sendMessage()\" placeholder=\"Type your message\"/>\n      <i class=\"fa fa-paper-plane-o\" (click)=\"sendMessage()\"></i>\n      </div>\n    </div>\n  </div>\n </div>\n  \n  <!--Chating Window box End Here-->\n<app-footer></app-footer>\n<script>\n    jQuery('.livechaticon').click(function(){\n  jQuery(\".chatsection\").scrollTop(99999999999999999999999);\n  });\n  </script>\n</div>\n</div>\n\n\n         "

/***/ }),

/***/ "./src/app/chatdetails/chatdetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/chatdetails/chatdetails.component.ts ***!
  \******************************************************/
/*! exports provided: ChatdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatdetailsComponent", function() { return ChatdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);




// import * as $ from 'jquery';

var ChatdetailsComponent = /** @class */ (function () {
    function ChatdetailsComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.msg = "";
        this.receiverId = "";
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(service.baseUrl);
        this.socket.emit("initChat", { userId: localStorage.getItem("accessToken") });
        this.socket.on("sendmessage", function (message) {
            // console.log("32333333",message)
            _this.chatHistory.push(message.result);
        });
    }
    ChatdetailsComponent.prototype.ngOnInit = function () {
        $('.chatboxmodel .titlerow .closesbtn button.close').click(function () {
            $('html').removeClass('chatbox');
            $('#sideMenu').css({ 'width': '0', 'height': '0', 'visibility': 'hidden' });
        });
        this.getChatList();
        //this.sendMessage()
    };
    ChatdetailsComponent.prototype.getChatList = function () {
        var _this = this;
        var sentData = {
            // userId:localStorage.getItem('accessToken')
            userId: "5bfbb0bbfd72a14b693fa9a0"
        };
        this.service.postApi('userConversationList', sentData, 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                _this.chatList = Response['result'];
                console.log(_this.chatList);
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    ChatdetailsComponent.prototype.openChat = function (receiverId) {
        var _this = this;
        this.receiverId = receiverId;
        var sentData = {
            "senderId": localStorage.getItem('accessToken'),
            "receiverId": this.receiverId,
            "pagenumber": "1"
        };
        this.service.postApi('ChatHistory', sentData, 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                _this.chatHistory = Response['chatResult'];
                console.log(_this.chatHistory);
                for (var i = 0; i < _this.chatList.length; i++) {
                    // const element = array[index];
                    // debugger
                    if (_this.chatHistory[0].senderId == _this.chatList[i].participant_id) {
                        _this.userName = _this.chatList[i].userName;
                        break;
                    }
                    else {
                        _this.userName = "asdfasffasf";
                    }
                }
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
        $('.chatboxmodel').show();
        $('.chatboxmodel').css({ 'width': '300px', 'height': '400px', 'visibility': 'visible' });
        if ($('.chatboxmodel').css('display') == 'block') {
            $('html').addClass('chatbox');
        }
        // $('.livechaticon').click(function(){
        $(".chatsection").scrollTop(99999999999999999999999);
        // });
    };
    ChatdetailsComponent.prototype.sendMessage = function () {
        console.log("SEND");
        this.socket.emit("sendmessage", { senderId: localStorage.getItem("accessToken"), receiverId: this.receiverId, message: this.msg });
        this.msg = "";
        // this.openChat(this.receiverId);
    };
    ChatdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatdetails',
            template: __webpack_require__(/*! ./chatdetails.component.html */ "./src/app/chatdetails/chatdetails.component.html"),
            styles: [__webpack_require__(/*! ./chatdetails.component.css */ "./src/app/chatdetails/chatdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], ChatdetailsComponent);
    return ChatdetailsComponent;
}());



/***/ }),

/***/ "./src/app/createvendor/createvendor.component.css":
/*!*********************************************************!*\
  !*** ./src/app/createvendor/createvendor.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n    width: 100%;\n    border: 1px solid #dadada;\n    height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRldmVuZG9yL2NyZWF0ZXZlbmRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRldmVuZG9yL2NyZWF0ZXZlbmRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/createvendor/createvendor.component.html":
/*!**********************************************************!*\
  !*** ./src/app/createvendor/createvendor.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\n  <div class=\"main_container\">\n<app-sidebar></app-sidebar>\n<app-header></app-header> \n<div class=\"right_col\" role=\"main\">\n  <div class=\"\">\n    <div class=\"page-title\">\n      <div class=\"title_left\">\n        <h3>Create Vendor</h3>\n      </div>\n    </div>\n    </div>\n    <div class=\"clearfix\"></div>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"x_panel\">\n          <div class=\"x_title\">\n            <h2>Create Vendor </h2>\n            <ul class=\"nav navbar-right panel_toolbox\">\n              <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n              </li>\n            </ul>\n            <div class=\"clearfix\"></div>\n          </div>\n          <div class=\"x_content\">\n            <br />\n            <form name = \"createVendorForm\" [formGroup]='createVendorForm' id=\"vendor\"  data-parsley-validate class=\"form-horizontal form-label-left\" >\n           \n              <div class=\"form-group\">\n                  <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"profile_pic\">\n                  </label>\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                    <img [src]=\"url\" height=\"100\"  alt=\"...\" width=\"150\" [hidden]=\"!url\" >\n              </div>\n            </div>\n              <div class=\"form-group\">\n                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"profile_pic\">Profile Picture <span class=\"required\">*</span>\n                </label>\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <input type=\"file\" [formControl]=\"createVendorForm.controls['profilePic']\" id=\"profile_pic\"  data-role=\"magic-overlay\" data-target=\"#pictureBtn\" data-edit=\"insertImage\" accept=\"image/*\" (change)=\"changeListener($event)\" required>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"first-name\">First Name <span class=\"required\">*</span>\n                </label>\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <input type=\"text\" [formControl]=\"createVendorForm.controls['firstName']\" id=\"first-name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                  <div *ngIf=\"createVendorForm.controls['firstName'].invalid && (createVendorForm.controls['firstName'].dirty || createVendorForm.controls['firstName'].touched)\">\n                      <div *ngIf=\"createVendorForm.controls['firstName'].errors.required\"  class=\"alert alert-danger\">\n                      First Name is required.\n                    </div>\n                    </div>\n                </div>\n                \n              </div>\n              <div class=\"form-group\">\n                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"last-name\">Last Name <span class=\"required\">*</span>\n                </label>\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <input type=\"text\" id=\"last-name\" [formControl]=\"createVendorForm.controls['lastName']\" name=\"last-name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                  <div *ngIf=\"createVendorForm.controls['lastName'].invalid && (createVendorForm.controls['lastName'].dirty || createVendorForm.controls['lastName'].touched)\">\n                    <div *ngIf=\"createVendorForm.controls['lastName'].errors.required\"  class=\"alert alert-danger\">\n                    Last Name is required.\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\" class=\"control-label col-md-3 col-sm-3 col-xs-12\">Email *</label>\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                <input id=\"email\" class=\"form-control col-md-7 col-xs-12\" [formControl]=\"createVendorForm.controls['email']\" type=\"text\" required=\"required\" name=\"email\" ngModel [email]=\"true\">\n                <div *ngIf=\"createVendorForm.controls['email'].invalid && (createVendorForm.controls['email'].dirty || createVendorForm.controls['email'].touched)\">\n                  <div *ngIf=\"createVendorForm.controls['email'].errors.required\" class=\"alert alert-danger\">Email is required</div>\n                  <div *ngIf=\"createVendorForm.controls['email'].errors.email\" class=\"alert alert-danger\">Email must be a valid email address</div>\n                </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Phone Number <span class=\"required\">*</span>\n                </label>\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <input id=\"phone\" [formControl]=\"createVendorForm.controls['phone']\" (keypress)=_keyPress($event)  class=\" form-control col-md-7 col-xs-12\" required=\"required\" type=\"text\" ng-model=\"phone\" maxlength=\"15\">\n                  <div *ngIf=\"createVendorForm.controls['phone'].invalid  && (createVendorForm.controls['phone'].dirty || createVendorForm.controls['phone'].touched)\" [ngClass] = \"'error'\"> \n                    <div *ngIf=\"createVendorForm.controls['phone'].errors.required\"  class=\"alert alert-danger\">\n                      Phone number is required.\n                    </div> \n                    <div *ngIf=\"createVendorForm.get('phone').hasError('pattern')\" class=\"alert alert-danger\">\n                      It is not a valid mobile number.\n                    </div>\n                    </div>\t\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Address <span class=\"required\">*</span>\n                </label>\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <input type =\"text\" #address id =\"address\" class=\"form-control\" [formControl]=\"createVendorForm.controls['address']\" placeholder=\"Address\" required=\"required\">\n                  <div *ngIf=\"createVendorForm.controls['address'].invalid  && (createVendorForm.controls['address'].dirty || createVendorForm.controls['address'].touched)\" [ngClass] = \"'error'\"> \n                    <div *ngIf=\"createVendorForm.controls['address'].errors.required\"  class=\"alert alert-danger\">\n                      Address is required.\n                    </div> \n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                  <!-- <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> <span class=\"required\"></span>\n                  </label> -->\n                <div class=\"col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6 col-xs-12\">\n                <div id=\"map\"  style=\"position: relative; overflow: hidden;\"></div>\n              </div>\n            </div>\n              <div class=\"form-group\">\n                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Store Type <span class=\"required\">*</span>\n                </label>\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <select class=\"form-control\" [formControl]=\"createVendorForm.controls['storeType']\">\n                    <option value=\"\">Select Store Type</option>\n                    <option value=\"Physical Store\">Physical Store</option>\n                    <option value=\"Virtual Store\">Virtual store</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"ln_solid\"></div>\n              <div class=\"form-group\">\n                <div class=\"col-md-6 col-sm-6 col-xs-12 col-md-offset-3\">\n                  <button class=\"btn btn-primary\" type=\"button\">Cancel</button>\n                  <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!createVendorForm.valid\" (click)=createVendor(createVendorForm.value)>Submit</button>\n                </div>\n              </div>\n\n            </form>\n          </div>\n        </div>\n      </div>\n    </div> </div>\n<app-footer></app-footer>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/createvendor/createvendor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/createvendor/createvendor.component.ts ***!
  \********************************************************/
/*! exports provided: CreatevendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatevendorComponent", function() { return CreatevendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var CreatevendorComponent = /** @class */ (function () {
    function CreatevendorComponent(route, service, formBuilder) {
        this.route = route;
        this.service = service;
        this.formBuilder = formBuilder;
        this.createVendorForm = formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[6-9]\\d{9}')]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            profilePic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            storeType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    CreatevendorComponent.prototype.ngOnInit = function () {
    };
    CreatevendorComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    CreatevendorComponent.prototype.changeListener = function ($event) {
        console.log($event);
        this.readThis($event.target);
        this.readUrl($event.target);
    };
    CreatevendorComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    CreatevendorComponent.prototype.readUrl = function (inputValue) {
        var _this = this;
        if (inputValue.files && inputValue.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = reader.result;
            };
            console.log(this.url);
            reader.readAsDataURL(inputValue.files[0]);
        }
    };
    CreatevendorComponent.prototype.createVendor = function (val) {
        var _this = this;
        console.log(this.address.nativeElement.value);
        this.service.getLatApi(val.address).subscribe(function (response1) {
            _this.responseData = response1;
            var latitude = _this.responseData['results'][0]['geometry']["location"]['lat'];
            var longitude = _this.responseData['results'][0]['geometry']["location"]['lng'];
            _this.sentData = {
                firstName: val.firstName,
                lastName: val.lastName,
                email: val.email,
                phone: val.phone,
                address: _this.address.nativeElement.value,
                profilePic: _this.image,
                storeType: val.storeType,
                lat: latitude,
                lng: longitude,
            };
            console.log("WWWWWWWW", _this.sentData);
        });
        this.service.postApi('admin/createVendor', this.sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            console.log(response);
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/vendorlist']);
                _this.ngOnInit();
            }
            else if (_this.responseData['statusCode'] == 400) {
                _this.route.navigate(['/createvendor']);
            }
            else if (_this.responseData['statusCode'] == 409) {
                // this.service.showBug(this.responseData['statusMessage'])
            }
        }, function (error) {
            console.log('error occur', error);
            // this.service.showError('Server Error')
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('address'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreatevendorComponent.prototype, "address", void 0);
    CreatevendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createvendor',
            template: __webpack_require__(/*! ./createvendor.component.html */ "./src/app/createvendor/createvendor.component.html"),
            styles: [__webpack_require__(/*! ./createvendor.component.css */ "./src/app/createvendor/createvendor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CreatevendorComponent);
    return CreatevendorComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container body\">\n   <div class=\"main_container\">\n<app-sidebar></app-sidebar>\n<app-header></app-header>\n         \n          <!-- page content -->\n          <div class=\"right_col\" role=\"main\">\n              <!-- top tiles -->\n              <div class=\"row tile_count\">\n                <div class=\"col-md-4 col-sm-4 col-xs-6 tile_stats_count\">\n                  <span class=\"count_top\"><i class=\"fa fa-users\"></i> Total Vendors</span>\n                  <div class=\"count\">{{dashboard?.totalVendor}}</div>\n               </div>\n                <div class=\"col-md-4 col-sm-4 col-xs-6 tile_stats_count\">\n                  <span class=\"count_top\"><i class=\"fa fa-user\"></i> Total End Users</span>\n                  <div class=\"count\">{{dashboard?.totalUser}}</div>\n                </div>\n                <div class=\"col-md-4 col-sm-4 col-xs-6 tile_stats_count\">\n                  <span class=\"count_top\"><i class=\"fa fa-first-order\"></i> Total Orders</span>\n                  <div class=\"count green\"> {{dashboard?.orderDetail?.totalOrder}}</div>\n                </div>\n                </div>\n              <!-- /top tiles -->\n\n            \n            </div>\n          <!-- /page content -->\n  <app-footer></app-footer>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route, service) {
        this.route = route;
        this.service = service;
        this.route.navigate(['/dashboard']);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.route.navigate(['/dashboard']);
        this.getDashboard();
    };
    DashboardComponent.prototype.getDashboard = function () {
        var _this = this;
        this.service.getApi('admin/dashBoard?lang=en', 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                console.log(Response['result']);
                _this.dashboard = Response['result'];
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- footer content -->\n <footer>\n    <div class=\"pull-right\">\n     Waki Admin @ <a href=\"https://colorlib.com\">Techugo</a>\n    </div>\n    <div class=\"clearfix\"></div>\n  </footer>\n  <!-- /footer content -->\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <body class=\"login\">\n      <div>\n       <a class=\"hiddenanchor\" id=\"signin\"></a>\n        <div class=\"login_wrapper\">\n          <div class=\"animate form login_form\">\n            <section class=\"login_content\">\n              <form [formGroup]='forgotForm' (ngSubmit)=\"onSubmit()\">\n                <h1>Forgot Password Form </h1>\n                <div>\n                  <input type=\"text\"  [formControl]=\"forgotForm.controls['email']\"class=\"form-control\" placeholder=\"email\" required=\"\" />\n                </div>\n                <div>\n                  <a class=\"btn btn-default submit\"  (click)=forgot(forgotForm.value) >Submit</a>\n                </div>\n              </form>\n            </section>\n          </div>\n        </div>\n       </div>\n    </body>\n  \n  "

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent(route, service, formBuilder) {
        this.route = route;
        this.service = service;
        this.formBuilder = formBuilder;
        this.forgotForm = formBuilder.group({
            email: ['']
        });
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotpasswordComponent.prototype.forgot = function (val) {
        var _this = this;
        this.sentData = {
            email: val.email
        };
        this.service.postApi('user/forgotPassword', this.sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            //console.log("WWWWWWWW", this.responseData)
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/login']);
                _this.ngOnInit();
            }
        }, function (error) {
            // console.log('error occur', error)
        });
    };
    ForgotpasswordComponent.prototype.onSubmit = function () {
        this.submitted = true;
        //console.log(this.hero);
    };
    ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- top navigation -->\n <div class=\"top_nav\">\n    <div class=\"nav_menu\">\n      <nav>\n        <div class=\"nav toggle\">\n          <a id=\"menu_toggle\"><i class=\"fa fa-bars\"></i></a>\n        </div>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"\">\n            <a href=\"javascript:;\" class=\"user-profile dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n              <img src=\"{{userImage}}\" alt=\"\">{{userName}}\n              <span class=\" fa fa-angle-down\"></span>\n            </a>\n            <ul class=\"dropdown-menu dropdown-usermenu pull-right\">\n             <li><a routerLink= \"/login\" routerLinkActive=\"active\"><i class=\"fa fa-sign-out pull-right\"></i> Log Out</a></li>\n            </ul>\n          </li>\n\n        </ul>\n      </nav>\n    </div>\n  </div>\n  <!-- /top navigation -->"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.userName = localStorage.getItem('username');
        this.userImage = localStorage.getItem('userimage');
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <body class=\"login\">\n    <div>\n         <a class=\"hiddenanchor\" id=\"signin\"></a>\n      <div class=\"login_wrapper\">\n        <div class=\"animate form login_form\">\n          <section class=\"login_content\">\n            <form [formGroup]='loginForm' (ngSubmit)=\"onSubmit()\">\n              <h1>Login Form </h1>\n              <div>\n                <input type=\"text\"  [formControl]=\"loginForm.controls['username']\"class=\"form-control\" placeholder=\"Username\" required=\"\" />\n              </div>\n              <div>\n                <input type=\"password\" [formControl]=\"loginForm.controls['password']\" class=\"form-control\" placeholder=\"Password\" required=\"\" />\n              </div>\n              <div>\n                <a class=\"btn btn-default submit\"  (click)=login(loginForm.value) >Log in</a>\n                <a class=\"reset_pass\" routerLink= \"/forgotpassword\" routerLinkActive=\"active\">Lost your password?</a>\n              </div>\n            </form>\n          </section>\n        </div>\n      </div>\n     </div>\n  </body>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, service, formBuilder) {
        this.route = route;
        this.service = service;
        this.formBuilder = formBuilder;
        this.loginForm = formBuilder.group({
            username: [''],
            password: ['']
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.route.navigate(['/dashboard'])
    };
    LoginComponent.prototype.login = function (val) {
        var _this = this;
        console.log(val);
        this.sentData = {
            email: val.username,
            password: val.password,
            userType: "admin",
        };
        this.service.postApi('user/login', this.sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            console.log("WWWWWWWW", _this.responseData);
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/dashboard']);
                _this.ngOnInit();
                localStorage.setItem('accessToken', _this.responseData['accessToken']);
                localStorage.setItem('username', _this.responseData['result']['firstName'] + " " + _this.responseData['result']['lastName']);
                localStorage.setItem('userimage', _this.responseData['result']['image']);
            }
        }, function (error) {
            // console.log('error occur', error)
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        //console.log(this.hero);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/orderdetails/orderdetails.component.css":
/*!*********************************************************!*\
  !*** ./src/app/orderdetails/orderdetails.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyZGV0YWlscy9vcmRlcmRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orderdetails/orderdetails.component.html":
/*!**********************************************************!*\
  !*** ./src/app/orderdetails/orderdetails.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\n  <div class=\"main_container\">\n<app-sidebar></app-sidebar>\n<app-header></app-header>  \n<div class=\"right_col\" role=\"main\">\n<div class=\"col-md-12 col-sm-4 col-xs-12\">\n\n<div class=\"x_panel\">\n <div class=\"x_title\">\n   <h2>Order Details</h2>\n   <ul class=\"nav navbar-right panel_toolbox\">\n     <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n     </li>\n  </ul>\n   <div class=\"clearfix\"></div>\n </div>\n <div class=\"x_content\">\n    <div class=\"col-sm-8 col-md-8 col-lg-9\">\n    <div class=\"order_id\">\n      <p><span class=\"order_id_heading\">Order ID :</span><span class=\"order_id_info\">{{orderDetails?.orderId}}</span></p>\n    </div>\n    <div class=\"product_name\">\n      <p><span class=\"product_name_heading\">Brand:</span><span class=\"product_name_info\">{{orderDetails?.brand}}</span></p>\n    </div>\n    <div class=\"Qty_price\">\n     <div class=\"Qty_div\"><p><span class=\"Qty_heading\">Payment :</span><span class=\"Qty_info\">{{orderDetails?.orderPayment}}</span></p></div> <div class=\"price_div\"><p><span class=\"price_heading\">Status :</span><span class=\"price_info\">{{orderDetails?.orderStatus}}</span></p></div>\n    </div>\n   </div>\n   <div class=\"col-sm-4 col-md-4 col-lg-3\">\n       <div class=\"date_btn_div\">\n       <div class=\"date\">\n        <p><span class=\"date_heading\">Date :</span> <span class=\"date_info\">{{orderDetails?.orderDate | date :'medium'}}</span></p>\n     </div>\n     <div class=\"date\">\n      <p><span class=\"date_heading\">Tax Amount :</span> <span class=\"date_info\">{{orderDetails?.estimateTax}} %</span></p>\n   </div>\n   <div class=\"date\">\n    <p><span class=\"date_heading\">Delivery Charges :</span> <span class=\"date_info\">{{orderDetails?.deliveryCharges}} USD</span></p>\n </div>\n   <div class=\"date\">\n    <p><span class=\"date_heading\">Total Amount :</span> <span class=\"date_info\">{{orderDetails?.totalAmountPaid}} USD</span></p>\n </div>\n    </div>\n </div>\n</div>\n</div>\n</div>\n</div>\n\n<app-footer></app-footer>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/orderdetails/orderdetails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/orderdetails/orderdetails.component.ts ***!
  \********************************************************/
/*! exports provided: OrderdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailsComponent", function() { return OrderdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");




var OrderdetailsComponent = /** @class */ (function () {
    function OrderdetailsComponent(route, service, activatedRoute) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.val = params['orderId'];
        });
    }
    OrderdetailsComponent.prototype.ngOnInit = function () {
        this.getOrderDetails(this.val);
    };
    OrderdetailsComponent.prototype.getOrderDetails = function (val) {
        var _this = this;
        this.service.getApi('vendor/orderDetail?lang=en&orderId=' + val, 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                _this.orderDetails = Response['result'];
                console.log(_this.orderDetails);
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    OrderdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orderdetails',
            template: __webpack_require__(/*! ./orderdetails.component.html */ "./src/app/orderdetails/orderdetails.component.html"),
            styles: [__webpack_require__(/*! ./orderdetails.component.css */ "./src/app/orderdetails/orderdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OrderdetailsComponent);
    return OrderdetailsComponent;
}());



/***/ }),

/***/ "./src/app/orderlist/orderlist.component.css":
/*!***************************************************!*\
  !*** ./src/app/orderlist/orderlist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVybGlzdC9vcmRlcmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orderlist/orderlist.component.html":
/*!****************************************************!*\
  !*** ./src/app/orderlist/orderlist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\n    <div class=\"main_container\">\n <app-sidebar></app-sidebar>\n <app-header></app-header>  \n <div class=\"right_col\" role=\"main\">\n<div class=\"col-md-12 col-sm-4 col-xs-12\">\n\n <div class=\"x_panel\">\n   <div class=\"x_title\">\n     <h2>Order List</h2>\n     <ul class=\"nav navbar-right panel_toolbox\">\n       <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n       </li>\n    </ul>\n     <div class=\"clearfix\"></div>\n   </div>\n   <div class=\"x_content\">\n     <table class=\"table table-hover\">\n       <thead>\n         <tr>\n           <th>S.No</th> \n           <th>Order Id</th>\n           <th>Order Image</th>\n           <th>Order Status</th>\n           <th>Order Amount</th>\n         </tr>\n       </thead>\n       <tbody>\n         <tr *ngFor=\"let item of orderList?.productDetail; index as i\">\n           <th scope=\"row\">{{i+1}}</th>\n           <td><a href=\"/orderdetails?orderId={{item?.orderId}}\">{{item?.orderId}}</a></td>\n           <td class=\"img-text\" align=\"left\" valign=\"middle\"><div class=\"pro_img_wrapper\"><img class=\"pro_img\" src=\"{{item.image}}\" alt=\"\"/></div><span class=\"text\">{{item.productName}}</span></td>\n           <td>{{item?.orderStatus}}</td>\n           <td>{{item?.totalAmountPaid}} USD</td>\n         </tr>\n         </tbody>\n     </table>\n\n   </div>\n </div>\n</div>\n</div>\n\n<app-footer></app-footer>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/orderlist/orderlist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/orderlist/orderlist.component.ts ***!
  \**************************************************/
/*! exports provided: OrderlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistComponent", function() { return OrderlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");




var OrderlistComponent = /** @class */ (function () {
    function OrderlistComponent(route, service, activatedRoute) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.val = params['userId'];
        });
    }
    OrderlistComponent.prototype.ngOnInit = function () {
        this.getOrderList(this.val);
    };
    OrderlistComponent.prototype.getOrderList = function (val) {
        var _this = this;
        this.service.getApi('vendor/orderList?lang=en&userId=' + val, 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                _this.orderList = Response['result'];
                console.log(_this.orderList);
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    OrderlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orderlist',
            template: __webpack_require__(/*! ./orderlist.component.html */ "./src/app/orderlist/orderlist.component.html"),
            styles: [__webpack_require__(/*! ./orderlist.component.css */ "./src/app/orderlist/orderlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OrderlistComponent);
    return OrderlistComponent;
}());



/***/ }),

/***/ "./src/app/productcategories/productcategories.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/productcategories/productcategories.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RjYXRlZ29yaWVzL3Byb2R1Y3RjYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/productcategories/productcategories.component.html":
/*!********************************************************************!*\
  !*** ./src/app/productcategories/productcategories.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\n  <div class=\"main_container\">\n<app-sidebar></app-sidebar>\n<app-header></app-header>  \n<div class=\"right_col\" role=\"main\">\n<div class=\"col-md-12 col-sm-4 col-xs-12\">\n<div style=\"float: right;\"><button type=\"submit\"  class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".createBrand\" (click)=\"clearAll()\">Create Product Category</button></div>\n<div class=\"modal fade createBrand\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n <div class=\"modal-dialog modal-sm\">\n   <div class=\"modal-content\">\n\n     <div class=\"modal-header\">\n       <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span>\n       </button>\n       <h4 class=\"modal-title\" id=\"myModalLabel2\">Add the new Product Category</h4>\n     </div>\n     <form [formGroup]='addProductCategoryForm' id=\"subcategory\" data-parsley-validate class=\"form-horizontal form-label-left\" (ngSubmit)=\"onSubmit()\">\n     <div class=\"modal-body\">\n        <div class=\"form-group\">\n            <img [src]=\"url\" height=\"100\"  alt=\"...\" width=\"150\" [hidden]=\"!url\">\n        </div>\n       <div class=\"form-group\">\n           <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"category-image\"> Product Category Image</label>\n           <div class=\"col-md-6 col-sm-6 col-xs-12\">\n              <input type=\"file\" data-role=\"magic-overlay\" [formControl]=\"addProductCategoryForm.controls['file']\"  data-target=\"#pictureBtn\" data-edit=\"insertImage\" accept=\"image/*\" *ngIf=\"!show\" (change)=\"changeListener($event)\">\n           </div>\n       </div>\n       <div class=\"form-group\">\n          <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"category-image\"> Choose Sub Category Name</label>\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\n              <select class=\"form-control\" [formControl]=\"addProductCategoryForm.controls['subcategoryId']\">\n                <option valoue='0'>Choose Category</option>\n                <option  *ngFor=\"let category of subcategoryList;let i = index\" value=\"{{category._id}}\" [selected]=\"category._id == productCategoriesData?.subCategory\" >{{category.subCategoryName}}</option>\n             </select>\n          </div>\n      </div>\n       <div class=\"form-group\">\n           <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"category-name\">Product Category Name </label>\n       <div class=\"col-md-6 col-sm-6 col-xs-12\">\n           <input type=\"text\" [formControl]=\"addProductCategoryForm.controls['productCategoryName']\" id=\"category-name\" required=\"required\" value={{productCategoriesData?.productcategoryName}} >\n       </div>\n       <input type=\"hidden\" [formControl]=\"addProductCategoryForm.controls['productCategoryId']\" id=\"productCategory_Id\" required=\"required\" value={{productCategoriesData?._id}} >\n       <!-- <input type=\"hidden\" [formControl]=\"addSubCategoryForm.controls['subCategoryName']\" id=\"subcategory_Id\" required=\"required\" value={{productCategoriesData?.categoryModel}} > -->\n     </div>\n     </div>\n     <div class=\"modal-footer\">\n         <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n         <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" *ngIf=\"!show\" (click)=addProductCategory(addProductCategoryForm.value)>Add Product Category</button>\n         <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" *ngIf=\"show\" (click)=editProductCategory(addProductCategoryForm.value) >Update Sub Category</button>\n     </div>\n     </form>\n     \n\n   </div>\n </div>\n</div>\n<div class=\"x_panel\">\n <div class=\"x_title\">\n   <h2>Product Category List</h2>\n   <ul class=\"nav navbar-right panel_toolbox\">\n     <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n     </li>\n  </ul>\n   <div class=\"clearfix\"></div>\n </div>\n <div class=\"x_content\">\n   <table class=\"table table-hover\">\n     <thead>\n       <tr>\n         <th>S.No</th>\n         <th>Product Category Image</th>\n         <th>Parent Sub Category Name</th>\n         <th>Product Category Name</th>\n         <th>Action</th>\n       </tr>\n     </thead>\n     <tbody>\n       <tr *ngFor=\"let productcategory of productcategoryList;let i = index\">\n         <th scope=\"row\">{{i+1}}</th>\n         <td> <img src=\"{{productcategory.image}}\"  class = \"pro_img\" alt=\"...\" width=\"100px\" ></td>\n         <td>{{productcategory?.subCategory.subCategoryName}}</td>\n         <td>{{productcategory.productcategoryName}}</td>\n         <td><i data-toggle=\"modal\" data-target=\".createBrand\" class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" (click)=getProductCategory(productcategory._id)></i>&nbsp;&nbsp;\n           <i class=\"fa fa-trash-o\"(click)=deleteProductCategory(productcategory._id)></i></td>\n       </tr>\n       </tbody>\n   </table>\n\n </div>\n</div>\n</div>\n</div>\n\n<app-footer></app-footer>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/productcategories/productcategories.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/productcategories/productcategories.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductcategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductcategoriesComponent", function() { return ProductcategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ProductcategoriesComponent = /** @class */ (function () {
    function ProductcategoriesComponent(route, service, formBuilder) {
        this.route = route;
        this.service = service;
        this.formBuilder = formBuilder;
        this.addProductCategoryForm = formBuilder.group({
            productCategoryName: [''],
            subcategoryId: [''],
            file: [''],
            productCategoryId: ['']
        });
    }
    ProductcategoriesComponent.prototype.ngOnInit = function () {
        this.route.navigate(['/productcategories']);
        this.getSubCategoryList();
        this.getProductCategoryList();
    };
    ProductcategoriesComponent.prototype.getSubCategoryList = function () {
        var _this = this;
        this.service.getApi('vendor/getSubCategoryList?lang=en', 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                _this.subcategoryList = Response['result'];
                console.log(_this.subcategoryList);
            }
            else {
            }
        }, function (error) {
        });
    };
    ProductcategoriesComponent.prototype.getProductCategoryList = function () {
        var _this = this;
        this.service.getApi('admin/getProductCategoryList?lang=en&status=ACTIVE', 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                _this.productcategoryList = Response['result'];
                console.log(_this.productcategoryList);
            }
            else {
            }
        }, function (error) {
        });
    };
    ProductcategoriesComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
        this.readUrl($event.target);
    };
    ProductcategoriesComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    ProductcategoriesComponent.prototype.readUrl = function (inputValue) {
        var _this = this;
        if (inputValue.files && inputValue.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = reader.result;
            };
            reader.readAsDataURL(inputValue.files[0]);
        }
    };
    ProductcategoriesComponent.prototype.addProductCategory = function (val) {
        var _this = this;
        var sentData = {
            subCategoryId: val.subcategoryId,
            productCategoryName: val.productCategoryName,
            image: this.image,
            status: 'ACTIVE'
        };
        console.log(sentData);
        this.service.postApi('vendor/addProductCategory', sentData, 0).subscribe(function (response) {
            console.log(response);
            _this.responseData = response;
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/subcategories']);
                _this.ngOnInit();
            }
        }, function (error) {
        });
    };
    ProductcategoriesComponent.prototype.deleteProductCategory = function (val) {
        var _this = this;
        var sentData = {
            productCategoryId: val,
            status: 'INACTIVE'
        };
        console.log(sentData);
        this.service.postApi('admin/deleteProductCategory', sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/productcategories']);
                _this.ngOnInit();
            }
        }, function (error) {
            console.log('error occur', error);
            // this.service.showError('Server Error')
        });
    };
    ProductcategoriesComponent.prototype.getProductCategory = function (val) {
        var _this = this;
        console.log("dasdas");
        this.service.getApi('admin/getProductCategoryById?productCategoryId=' + val, 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                console.log(_this.productCategoriesData);
                _this.productCategoriesData = Response['result'];
                _this.url = _this.productCategoriesData.image;
                _this.show = true;
                console.log(_this.productCategoriesData);
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    ProductcategoriesComponent.prototype.editProductCategory = function (val) {
        var _this = this;
        var get = $('#productCategory_Id').val();
        var sentData = {
            productCategoryId: get,
            subCategoryId: val.subcategoryId,
            productCategoryName: val.productCategoryName,
            status: 'ACTIVE'
        };
        this.service.postApi('admin/editProductCategory', sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            console.log("WWWWWWWW", sentData);
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/productcategories']);
                _this.ngOnInit();
            }
        }, function (error) {
            console.log('error occur', error);
            // this.service.showError('Server Error')
        });
    };
    ProductcategoriesComponent.prototype.clearAll = function () {
        if (this.productCategoriesData)
            this.productCategoriesData = {};
        this.url = '';
        this.show = false;
    };
    ProductcategoriesComponent.prototype.onSubmit = function () {
        this.submitted = true;
        //console.log(this.hero);
    };
    ProductcategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productcategories',
            template: __webpack_require__(/*! ./productcategories.component.html */ "./src/app/productcategories/productcategories.component.html"),
            styles: [__webpack_require__(/*! ./productcategories.component.css */ "./src/app/productcategories/productcategories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ProductcategoriesComponent);
    return ProductcategoriesComponent;
}());



/***/ }),

/***/ "./src/app/productdetails/productdetails.component.css":
/*!*************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RkZXRhaWxzL3Byb2R1Y3RkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.html":
/*!**************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\n  <div class=\"main_container\">\n<app-sidebar></app-sidebar>\n<app-header></app-header>  \n<div class=\"right_col\" role=\"main\">\n<div class=\"col-md-12 col-sm-4 col-xs-12\">\n\n<div class=\"x_panel\">\n <div class=\"x_title\">\n   <h2>Product Details</h2>\n   <ul class=\"nav navbar-right panel_toolbox\">\n     <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n     </li>\n  </ul>\n   <div class=\"clearfix\"></div>\n </div>\n <div class=\"x_content\">\n    <div class=\"col-sm-8 col-md-8 col-lg-9\">\n    <div class=\"order_id\">\n      <p><span class=\"order_id_heading\">Product ID :</span><span class=\"order_id_info\">{{productDetails?.product?._id}}</span></p>\n    </div>\n    <div class=\"product_image\">\n      <p><span class=\"product_image_heading\">Image:</span><span class=\"product_name_info\"><img src=\"{{productDetails?.product?.image[0]}}\" height=\"150px\"></span></p>\n    </div>\n    <div class=\"product_name\">\n      <p><span class=\"product_name_heading\">Brand:</span><span class=\"product_name_info\">{{productDetails?.product?.brand}}</span></p>\n    </div>\n    <div class=\"Qty_price\">\n     <div class=\"Qty_div\"><p><span class=\"Qty_heading\">Product Name :</span><span class=\"Qty_info\">{{productDetails?.product?.productName}}</span></p></div> <div class=\"price_div\"><p><span class=\"price_heading\">Product Description :</span><span class=\"price_info\">{{productDetails?.product?.description}}</span></p></div>\n    </div>\n   </div>\n   <div class=\"col-sm-4 col-md-4 col-lg-3\">\n       <div class=\"date_btn_div\">\n       <div class=\"date\">\n        <p><span class=\"date_heading\">Product Amount :</span> <span class=\"date_info\">{{productDetails?.product?.price}} USD</span></p>\n     </div>\n     <div class=\"date\">\n      <p><span class=\"date_heading\">Seller Name :</span> <span class=\"date_info\">{{productDetails?.sellerInfo?.sellerName}}</span></p>\n   </div>\n   <div class=\"date\">\n    <p><span class=\"date_heading\">Delivery Charges :</span> <span class=\"date_info\">{{productDetails?.sellerInfo?.selllerRating}} </span></p>\n </div>\n   <div class=\"date\">\n    <p><span class=\"date_heading\">Product Try :</span> <span class=\"date_info\">{{productDetails?.product?.productTry}} </span></p>\n </div>\n    </div>\n </div>\n</div>\n</div>\n\n<div class=\"review\" *ngFor=\"let productDetails of productDetails?.reviewAndRating; index as i\">\n  <div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"img_div\">\n      <img src=\"{{productDetails?.image}}\" class=\"img-circle\" height=\"100px\"/> \n\n      <span class=\"date_info\">{{productDetails?.firstName}} </span> \n    </div>\n    <button type=\"button\" class=\"btn-primary\" (click)=\"deleteReview(productDetails?.reviewId,productDetails?.product?._id)\"> delete</button>\n   <div class=\"date\">\n    <p><span class=\"date_heading\">Rating :</span> <span class=\"date_info\">{{productDetails?.rating}} </span></p>\n   </div>\n   <div class=\"date\">\n    <p><span class=\"date_heading\">Review :</span> <span class=\"date_info\">{{productDetails?.review}} </span></p>\n   </div>\n  </div>\n</div>\n</div>\n</div>\n\n\n<app-footer></app-footer>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.ts ***!
  \************************************************************/
/*! exports provided: ProductdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function() { return ProductdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductdetailsComponent = /** @class */ (function () {
    function ProductdetailsComponent(route, service, activatedRoute) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.val = params['productId'];
        });
    }
    ProductdetailsComponent.prototype.ngOnInit = function () {
        this.getProductDetails(this.val);
    };
    ProductdetailsComponent.prototype.getProductDetails = function (val) {
        var _this = this;
        this.service.getApi('vendor/productDetails?lang=en&_id=' + val, 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                _this.productDetails = Response['result'];
                console.log(_this.productDetails);
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    ProductdetailsComponent.prototype.deleteReview = function (val, productId) {
        var _this = this;
        var sentData = {
            reviewId: val,
            status: "inactive"
        };
        this.service.postApi('admin/changeReviewStatus?lang=en', sentData, 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                _this.productDetails = Response['result'];
                console.log(_this.productDetails);
                _this.route.navigate(['/productdetails?productId=' + productId]);
                _this.ngOnInit();
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    ProductdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productdetails',
            template: __webpack_require__(/*! ./productdetails.component.html */ "./src/app/productdetails/productdetails.component.html"),
            styles: [__webpack_require__(/*! ./productdetails.component.css */ "./src/app/productdetails/productdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductdetailsComponent);
    return ProductdetailsComponent;
}());



/***/ }),

/***/ "./src/app/service.service.ts":
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import { ToastrService } from 'ngx-toastr';
var ServiceService = /** @class */ (function () {
    // baseUrl = 'http://192.168.1.35:5050/' // local
    // constructor(private http: HttpClient,  private toastr:ToastrService ) { }
    function ServiceService(http) {
        this.http = http;
        this.baseUrl = 'https://waki.store:6262/'; //live 
    }
    ServiceService.prototype.postApi = function (url, data, isHeader) {
        console.log("entered in post api ");
        if (isHeader == 0) {
            console.log("header 0");
            var httpOptions;
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" })
            };
            return this.http.post((this.baseUrl + url), data, httpOptions);
        }
        else if (isHeader == 1) {
            var httpOptions;
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    "accessToken": localStorage.getItem("token"),
                    // "_id": localStorage.adminId,
                    "Content-Type": "application/json"
                })
            };
            return this.http.post((this.baseUrl + url), data, httpOptions);
        }
    };
    ServiceService.prototype.getLatApi = function (address) {
        return this.http.get("https://maps.google.com/maps/api/geocode/json?address=" + address + "&sensor=false&key=AIzaSyDxFPSj1Oh9PYbbsm35CLorLQk4vtrTvvk");
    };
    ServiceService.prototype.getApi = function (url, isHeader) {
        if (isHeader == 0) {
            var httpOptions;
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" })
            };
            return this.http.get((this.baseUrl + url), httpOptions);
        }
        else if (isHeader == 1) {
            console.log('token', localStorage.token);
            var httpOptions;
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "token": localStorage.token, "_id": localStorage.adminId, "Content-Type": "application/json" })
            };
            return this.http.get((this.baseUrl + url), httpOptions);
        }
    };
    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <div class=\"col-md-3 left_col\">\n          <div class=\"left_col scroll-view\">\n            <div class=\"navbar nav_title\" style=\"border: 0;\">\n              <a href=\"index.html\" class=\"site_title\"></a>\n            </div>\n\n            <div class=\"clearfix\"></div>\n\n  <!-- sidebar menu -->\n  <div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\n      <div class=\"menu_section\">\n        <nav>\n        <ul class=\"nav side-menu\">\n          <li><a href =\"/dashboard\" routerLinkActive=\"active\" ><i class=\"fa fa-home\"></i> Home </a>\n          </li>\n          <li><a><i class=\"fa fa-users\"></i> Vendors <span class=\"fa fa-chevron-down\"></span></a>\n            <ul class=\"nav child_menu\">\n              <li><a href= \"/createvendor\" routerLinkActive=\"active\">Create Vendors</a></li>\n              <li><a  href= \"/vendorlist\" routerLinkActive=\"active\">Vendors List</a></li>\n             </ul>\n          </li>\n          <li><a href= \"/brands\" routerLinkActive=\"active\"><i class=\"fa fa-yelp\"></i> Brands</a>\n          </li>\n          <li><a href= \"/catgories\" routerLinkActive=\"active\"><i class=\"fa fa-th-large\"></i> Categories</a>\n          </li>\n          <li><a href= \"/subcatgories\" routerLinkActive=\"active\"><i class=\"fa fa-th\"></i> Sub Categories</a>\n          </li>\n          <li><a href= \"/productcategories\" routerLinkActive=\"active\"><i class=\"fa fa-th\"></i> Product Categories</a>\n          </li>\n          <li><a href= \"/users\" routerLinkActive=\"active\"><i class=\"fa fa-user\"></i> Users</a>\n          <li><a href= \"/vendorproducts\" routerLinkActive=\"active\"><i class=\"fa fa-product-hunt\"></i>Vendor Products</a>\n            </li>  \n          <li><a href= \"/chatdetails\" routerLinkActive=\"active\"><i class=\"fa fa-comments-o\"></i>Chat</a>\n          </li>\n        </ul>\n      </nav>\n      </div>\n\n\n    </div>\n    <!-- /sidebar menu -->\n\n      </div>\n    </div>\n    \n    \n    "

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(route) {
        this.route = route;
        this.userName = localStorage.getItem('username');
        this.userImage = localStorage.getItem('userimage');
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/subcatgories/subcatgories.component.css":
/*!*********************************************************!*\
  !*** ./src/app/subcatgories/subcatgories.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .pro_img{\n\twidth:auto;\n\theight:100px;\n\tdisplay:inline-block;\n\tmargin-right:15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViY2F0Z29yaWVzL3N1YmNhdGdvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0NBQ0EsV0FBVztDQUNYLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc3ViY2F0Z29yaWVzL3N1YmNhdGdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5wcm9faW1ne1xuXHR3aWR0aDphdXRvO1xuXHRoZWlnaHQ6MTAwcHg7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tcmlnaHQ6MTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/subcatgories/subcatgories.component.html":
/*!**********************************************************!*\
  !*** ./src/app/subcatgories/subcatgories.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\n    <div class=\"main_container\">\n <app-sidebar></app-sidebar>\n <app-header></app-header>  \n <div class=\"right_col\" role=\"main\">\n<div class=\"col-md-12 col-sm-4 col-xs-12\">\n<div style=\"float: right;\"><button type=\"submit\"  class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".createBrand\" (click)=\"clearAll()\">Create Sub Category</button></div>\n<div class=\"modal fade createBrand\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n   <div class=\"modal-dialog modal-sm\">\n     <div class=\"modal-content\">\n\n       <div class=\"modal-header\">\n         <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span>\n         </button>\n         <h4 class=\"modal-title\" id=\"myModalLabel2\">Add the new Sub Category</h4>\n       </div>\n       <form [formGroup]='addSubCategoryForm' id=\"subcategory\" data-parsley-validate class=\"form-horizontal form-label-left\" (ngSubmit)=\"onSubmit()\">\n       <div class=\"modal-body\">\n          <!-- <div class=\"form-group\">\n              <img [src]=\"url\" height=\"100\"  alt=\"...\" width=\"150\" [hidden]=\"!url\">\n          </div> -->\n         <!-- <div class=\"form-group\">\n             <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"category-image\"> Sub Category Image</label>\n             <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                <input type=\"file\" data-role=\"magic-overlay\" [formControl]=\"addSubCategoryForm.controls['file']\"  data-target=\"#pictureBtn\" data-edit=\"insertImage\" accept=\"image/*\" *ngIf=\"!show\" (change)=\"changeListener($event)\">\n             </div>\n         </div> -->\n         <div class=\"form-group\">\n            <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"category-image\"> Choose Category Name</label>\n            <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                <select class=\"form-control\" [formControl]=\"addSubCategoryForm.controls['categoryId']\">\n                  <option valoue='0'>Choose Category</option>\n                  <option  *ngFor=\"let category of categoryList;let i = index\" value=\"{{category._id}}\" [selected]=\"category._id == subCategoriesData?.categoryModel\" >{{category.categoryName}}</option>\n               </select>\n            </div>\n        </div>\n         <div class=\"form-group\">\n             <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"category-name\">Sub Category Name </label>\n         <div class=\"col-md-6 col-sm-6 col-xs-12\">\n             <input type=\"text\" [formControl]=\"addSubCategoryForm.controls['subCategoryName']\" id=\"category-name\" required=\"required\" value={{subCategoriesData?.subCategoryName}} >\n         </div>\n         <input type=\"hidden\" [formControl]=\"addSubCategoryForm.controls['subCategoryId']\" id=\"subcategory_Id\" required=\"required\" value={{subCategoriesData?._id}} >\n         <input type=\"hidden\" [formControl]=\"addSubCategoryForm.controls['categoryName']\" id=\"category_Id\" required=\"required\" value={{subCategoriesData?.categoryModel}} >\n       </div>\n       </div>\n       <div class=\"modal-footer\">\n           <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n           <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" *ngIf=\"!show\" (click)=addSubCategory(addSubCategoryForm.value)>Add Sub Category</button>\n           <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" *ngIf=\"show\" (click)=editSubCategory(addSubCategoryForm.value) >Update Sub Category</button>\n       </div>\n       </form>\n       \n\n     </div>\n   </div>\n </div>\n <div class=\"x_panel\">\n   <div class=\"x_title\">\n     <h2>Sub Category List</h2>\n     <ul class=\"nav navbar-right panel_toolbox\">\n       <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n       </li>\n    </ul>\n     <div class=\"clearfix\"></div>\n   </div>\n   <div class=\"x_content\">\n     <table class=\"table table-hover\">\n       <thead>\n         <tr>\n           <th>S.No</th>\n           <th>Parent Category Name</th>\n           <th>Sub Category Name</th>\n           <th>Action</th>\n         </tr>\n       </thead>\n       <tbody>\n         <tr *ngFor=\"let subcategory of subcategoryList;let i = index\">\n           <th scope=\"row\">{{i+1}}</th>\n           <!-- <td> <img src=\"{{subcategory.image}}\"  class = \"pro_img\" alt=\"...\" ></td> -->\n           <td>{{subcategory.categoryName}}</td>\n           <td>{{subcategory.subCategoryName}}</td>\n           <td><i data-toggle=\"modal\" data-target=\".createBrand\" class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" (click)=getSubCategory(subcategory._id)></i>&nbsp;&nbsp;\n             <i class=\"fa fa-trash-o\"(click)=deleteSubCategory(subcategory._id)></i></td>\n         </tr>\n         </tbody>\n     </table>\n\n   </div>\n </div>\n</div>\n</div>\n\n<app-footer></app-footer>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/subcatgories/subcatgories.component.ts":
/*!********************************************************!*\
  !*** ./src/app/subcatgories/subcatgories.component.ts ***!
  \********************************************************/
/*! exports provided: SubcatgoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcatgoriesComponent", function() { return SubcatgoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SubcatgoriesComponent = /** @class */ (function () {
    function SubcatgoriesComponent(route, service, formBuilder) {
        this.route = route;
        this.service = service;
        this.formBuilder = formBuilder;
        this.show = false;
        this.addSubCategoryForm = formBuilder.group({
            subCategoryName: [''],
            categoryId: [''],
            file: [''],
            subCategoryId: [''],
            categoryName: ['']
        });
    }
    SubcatgoriesComponent.prototype.ngOnInit = function () {
        this.route.navigate(['/subcatgories']);
        this.getSubCategoryList();
        this.getCategoryList();
    };
    SubcatgoriesComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.service.getApi('vendor/getCategoryList', 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                _this.categoryList = Response['result'];
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    SubcatgoriesComponent.prototype.getSubCategoryList = function () {
        var _this = this;
        this.service.getApi('vendor/getSubCategoryList?lang=en', 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                _this.subcategoryList = Response['result'];
                console.log(_this.subcategoryList);
            }
            else {
            }
        }, function (error) {
            console.log("error");
        });
    };
    SubcatgoriesComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
        this.readUrl($event.target);
    };
    SubcatgoriesComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    SubcatgoriesComponent.prototype.readUrl = function (inputValue) {
        var _this = this;
        if (inputValue.files && inputValue.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = reader.result;
            };
            reader.readAsDataURL(inputValue.files[0]);
        }
    };
    SubcatgoriesComponent.prototype.addSubCategory = function (val) {
        var _this = this;
        var sentData = {
            _id: val.categoryId,
            subCategoryName: val.subCategoryName,
            image: this.image,
            icons: this.image,
            status: 'ACTIVE'
        };
        this.service.postApi('vendor/addSubCategory', sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/subcategories']);
                _this.ngOnInit();
            }
        }, function (error) {
        });
    };
    SubcatgoriesComponent.prototype.deleteSubCategory = function (val) {
        var _this = this;
        var sentData = {
            subCategoryId: val,
            status: 'inactive'
        };
        console.log(sentData);
        this.service.postApi('admin/deleteSubCategory', sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/subcategories']);
                _this.ngOnInit();
            }
        }, function (error) {
            console.log('error occur', error);
            // this.service.showError('Server Error')
        });
    };
    SubcatgoriesComponent.prototype.clearAll = function () {
        if (this.subCategoriesData)
            this.subCategoriesData = {};
        this.url = '';
        this.show = false;
    };
    SubcatgoriesComponent.prototype.getSubCategory = function (val) {
        var _this = this;
        this.service.getApi('admin/getSubCategoryById?subCategoryId=' + val, 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                console.log(_this.subCategoriesData);
                _this.subCategoriesData = Response['result'];
                _this.url = _this.subCategoriesData.icons;
                _this.show = true;
                console.log(_this.subCategoriesData);
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    SubcatgoriesComponent.prototype.editSubCategory = function (val) {
        var _this = this;
        var get = $('#subcategory_Id').val();
        // var getcategory = $('#category_Id').val();
        var sentData = {
            subCategoryId: get,
            categoryId: val.categoryId,
            subCategoryName: val.subCategoryName
        };
        console.log(sentData);
        this.service.postApi('admin/editSubCategory', sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/subcategories']);
                _this.ngOnInit();
            }
        }, function (error) {
            console.log('error occur', error);
            // this.service.showError('Server Error')
        });
    };
    SubcatgoriesComponent.prototype.onSubmit = function () {
        this.submitted = true;
        //console.log(this.hero);
    };
    SubcatgoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subcatgories',
            template: __webpack_require__(/*! ./subcatgories.component.html */ "./src/app/subcatgories/subcatgories.component.html"),
            styles: [__webpack_require__(/*! ./subcatgories.component.css */ "./src/app/subcatgories/subcatgories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SubcatgoriesComponent);
    return SubcatgoriesComponent;
}());



/***/ }),

/***/ "./src/app/userdetails/userdetails.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userdetails/userdetails.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group.single_label label{\n    display: block;\n    font-size:17px;\n}\n.form-group label{\n    font-size:17px;\n}\n.form-group span a{\n    margin-left: 10px;\n    color:#000;\n}\n.form-group span a:hover{\n    text-decoration: underline;\n}\n.form-group span{\n    font-size: 16px;\n    color: #c7c7c7;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmRldGFpbHMvdXNlcmRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztDQUNkO0FBQ0Q7SUFDSSwyQkFBMkI7Q0FDOUI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdXNlcmRldGFpbHMvdXNlcmRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwLnNpbmdsZV9sYWJlbCBsYWJlbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6MTdweDtcbn1cbi5mb3JtLWdyb3VwIGxhYmVse1xuICAgIGZvbnQtc2l6ZToxN3B4O1xufVxuLmZvcm0tZ3JvdXAgc3BhbiBhe1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiMwMDA7XG59XG4uZm9ybS1ncm91cCBzcGFuIGE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uZm9ybS1ncm91cCBzcGFue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2M3YzdjNztcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/userdetails/userdetails.component.html":
/*!********************************************************!*\
  !*** ./src/app/userdetails/userdetails.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\n    <div class=\"main_container\">\n        <app-sidebar></app-sidebar>\n        <app-header></app-header>\n        <div class=\"right_col\" role=\"main\">\n            <div class=\"\">\n                <div class=\"page-title\">\n                    <div class=\"title_left\">\n                        <h3>User Detail</h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"row\">\n                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"x_panel\">\n                        <div class=\"x_title\">\n                            <h2>User Detail </h2>\n                            <ul class=\"nav navbar-right panel_toolbox\">\n                                <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                                </li>\n                            </ul>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                        <div class=\"x_content\">\n                            <div class=\"user_detail_img\">\n                                    <div class=\"form-group single_label\">\n                                            <div class=\"profile_img\">\n                                            <img src=\"{{vendorDetails?.userDetail?.image}}\" alt=\"...\">\n                                            </div>\n                                        </div>\n                            </div>\n                          <div class=\"user_detail_div\">\n\n                            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <div class=\"form-group single_label\">\n                                        <label class=\"control-label\" for=\"first-name\">First Name :\n                                        </label>\n                                        <span>{{vendorDetails?.userDetail?.firstName}}</span>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <div class=\"form-group single_label\">\n                                        <label class=\"control-label\" for=\"last-name\">Last Name :\n                                        </label>\n                                        <span>{{vendorDetails?.userDetail?.lastName}}</span>\n                                        <span>kumar</span>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <div class=\"form-group single_label\">\n                                        <label for=\"email\" class=\"control-label\">Email : </label>\n                                        <span>{{vendorDetails?.userDetail?.email}}</span>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <div class=\"form-group single_label\">\n                                        <label class=\"control-label\">Phone Number :\n                                        </label>\n                                        <span>{{vendorDetails?.userDetail?.phone}}</span>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12 col-sm-12 col-xs-12\" *ngFor=\"let item of vendorDetails?.userDetail.address; index as i\">\n                                    <div class=\"form-group single_label\">\n                                        <label class=\"control-label\">Address {{i+1}}:\n                                        </label>&nbsp;\n                                        <span>{{item?.addresses}}</span>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                    <div class=\"form-group single_label\">\n                                        <label class=\"control-label\">Store Type :\n                                        </label>\n                                        &nbsp;<span>{{(vendorDetails?.userDetail?.storeType)?vendorDetails?.userDetail?.storeType:'N/A'}}</span>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <div class=\"form-group \">\n                                        <label class=\"control-label\">Total Orders :\n                                        </label>\n                                        &nbsp;<span>{{(vendorDetails?.order)? vendorDetails?.order?.placeOrder: 0}}</span>&nbsp;&nbsp;\n                                        &nbsp;<span *ngIf=\"vendorDetails?.order\"><a href=\"/orderlist?userId={{vendorDetails?.userDetail?._id}}\">See\n                                                Orders</a></span>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Cancelled Orders :\n                                        </label>\n                                        &nbsp; <span>{{(vendorDetails?.order)? vendorDetails?.order?.cancelOrder: 0}}</span>\n                                    </div>\n                                </div>\n\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n              \n            </div>\n        </div>\n        <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/userdetails/userdetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userdetails/userdetails.component.ts ***!
  \******************************************************/
/*! exports provided: UserdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailsComponent", function() { return UserdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");




var UserdetailsComponent = /** @class */ (function () {
    function UserdetailsComponent(route, service, activatedRoute) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.val = params['userId'];
        });
    }
    UserdetailsComponent.prototype.ngOnInit = function () {
        this.getUserInfo(this.val);
    };
    UserdetailsComponent.prototype.getUserInfo = function (val) {
        var _this = this;
        var sentData = {
            userId: val,
            lang: "en"
        };
        this.service.postApi('admin/getUserinfo', sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            if (_this.responseData['statusCode'] == 200) {
                _this.vendorDetails = response['result'];
                console.log(_this.vendorDetails);
                //  this.route.navigate(['/userDetails']);
                //this.ngOnInit();
            }
        }, function (error) {
            console.log('error occur', error);
            // this.service.showError('Server Error')
        });
    };
    UserdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userdetails',
            template: __webpack_require__(/*! ./userdetails.component.html */ "./src/app/userdetails/userdetails.component.html"),
            styles: [__webpack_require__(/*! ./userdetails.component.css */ "./src/app/userdetails/userdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserdetailsComponent);
    return UserdetailsComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\n  <div class=\"main_container\">\n<app-sidebar></app-sidebar>\n<app-header></app-header>  \n<div class=\"right_col\" role=\"main\">\n<div class=\"col-md-12 col-sm-4 col-xs-12\">\n<div class=\"x_panel\">\n <div class=\"x_title\">\n   <h2>Users List</h2>\n   <ul class=\"nav navbar-right panel_toolbox\">\n     <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n     </li>\n  </ul>\n   <div class=\"clearfix\"></div>\n </div>\n <div class=\"x_content\">\n   <table class=\"table table-hover\">\n     <thead>\n       <tr>\n         <th>S.No</th>\n         <th>User Image</th>\n         <th>User Name</th>\n         <th>Email</th>\n         <th>Phone</th>\n         <th>Action</th>\n       </tr>\n     </thead>\n     <tbody>\n       <tr *ngFor=\"let vendor of vendorList;let i = index\">\n          <input type = \"hidden\" name =\"_id\" value=\"{{vendor._id}}\">\n         <th scope=\"row\">{{i+1}}</th>\n         <td> <img src=\"{{vendor.image}}\" onerror=\"this.onerror=null;this.src='/assets/images/user.png';\" alt=\" ...\" height =\"70\"></td>\n         <td>{{vendor.firstName}}&nbsp;&nbsp;{{vendor.lastName}}</td>\n         <td>{{vendor.email}}</td>\n         <td>{{vendor.phone}}</td>\n         <td><a href=\"/userdetails?userId={{vendor._id}}\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></a>&nbsp;&nbsp;\n          <div *ngIf=\"vendor.status =='block'; else unblock\"><i class=\"fa fa-unlock\" (click)=\"deleteVendor(vendor._id,'active')\"></i></div> \n          <ng-template #unblock>\n            <i class=\"fa fa-ban\" (click)=\"deleteVendor(vendor._id,'block')\"></i>\n          </ng-template></td>\n       </tr>\n      \n     </tbody>\n   </table>\n\n </div>\n</div>\n</div>\n</div>\n\n<app-footer></app-footer>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");




var UsersComponent = /** @class */ (function () {
    function UsersComponent(route, service) {
        this.route = route;
        this.service = service;
        this.isvalid = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.route.navigate(['/users']);
        this.getVendorList();
    };
    UsersComponent.prototype.getVendorList = function () {
        var _this = this;
        var sentData = {
            userType: 'user'
        };
        this.service.postApi('admin/getUserList', sentData, 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                console.log(Response['result']);
                _this.vendorList = Response['result'];
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    UsersComponent.prototype.deleteVendor = function (val, status) {
        var _this = this;
        var sentData = {
            _id: val,
            status: status,
            lang: "en"
        };
        this.service.postApi('admin/deleteVendor', sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/vendorlist']);
                _this.ngOnInit();
            }
        }, function (error) {
            console.log('error occur', error);
            // this.service.showError('Server Error')
        });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/vendorlist/vendorlist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/vendorlist/vendorlist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvcmxpc3QvdmVuZG9ybGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/vendorlist/vendorlist.component.html":
/*!******************************************************!*\
  !*** ./src/app/vendorlist/vendorlist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\n    <div class=\"main_container\">\n <app-sidebar></app-sidebar>\n <app-header></app-header>  \n <div class=\"right_col\" role=\"main\">\n<div class=\"col-md-12 col-sm-4 col-xs-12\">\n <div class=\"x_panel\">\n   <div class=\"x_title\">\n     <h2>Vendors List</h2>\n     <ul class=\"nav navbar-right panel_toolbox\">\n       <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n       </li>\n    </ul>\n     <div class=\"clearfix\"></div>\n   </div>\n   <div class=\"x_content\">\n     <table class=\"table table-hover\">\n       <thead>\n         <tr>\n           <th>S.No</th>\n           <th>Vendor Image</th>\n           <th>Vendor Name</th>\n           <th>Email</th>\n           <th>Phone</th>\n           <th>Action</th>\n         </tr>\n       </thead>\n       <tbody>\n         <tr *ngFor=\"let vendor of vendorList;let i = index\">\n            <input type = \"hidden\" name =\"_id\" value=\"{{vendor._id}}\">\n           <th scope=\"row\">{{i+1}}</th>\n           <td> <img src=\"{{vendor.image}}\" onerror=\"this.onerror=null;this.src='/assets/images/user.png';\" alt=\"...\" height =\"70\"></td>\n           <td>{{vendor.firstName}}&nbsp;&nbsp;{{vendor.lastName}}</td>\n           <td>{{vendor.email}}</td>\n           <td>{{vendor.phone}}</td>\n           <td><a href=\"/userdetails?userId={{vendor._id}}\"><i class=\"fa fa-eye\" aria-hidden=\"true\" ></i></a>&nbsp;&nbsp;\n            <div *ngIf=\"vendor.status =='block'; else unblock\"><i class=\"fa fa-unlock\" (click)=\"deleteVendor(vendor._id,'active')\"></i></div> \n            <ng-template #unblock>\n              <i class=\"fa fa-ban\" (click)=\"deleteVendor(vendor._id,'block')\"></i>\n            </ng-template></td>\n         </tr>\n        \n       </tbody>\n     </table>\n\n   </div>\n </div>\n</div>\n</div>\n\n<app-footer></app-footer>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/vendorlist/vendorlist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/vendorlist/vendorlist.component.ts ***!
  \****************************************************/
/*! exports provided: VendorlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorlistComponent", function() { return VendorlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");




var VendorlistComponent = /** @class */ (function () {
    function VendorlistComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    VendorlistComponent.prototype.ngOnInit = function () {
        this.route.navigate(['/vendorlist']);
        this.getVendorList();
    };
    VendorlistComponent.prototype.getVendorList = function () {
        var _this = this;
        var sentData = {
            userType: 'vendor'
        };
        this.service.postApi('admin/getUserList', sentData, 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                console.log(Response['result']);
                _this.vendorList = Response['result'];
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    VendorlistComponent.prototype.deleteVendor = function (val, status) {
        var _this = this;
        var sentData = {
            _id: val,
            status: status,
            lang: "en"
        };
        this.service.postApi('admin/deleteVendor', sentData, 0).subscribe(function (response) {
            _this.responseData = response;
            if (_this.responseData['statusCode'] == 200) {
                _this.route.navigate(['/vendorlist']);
                _this.ngOnInit();
            }
        }, function (error) {
            console.log('error occur', error);
            // this.service.showError('Server Error')
        });
    };
    VendorlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendorlist',
            template: __webpack_require__(/*! ./vendorlist.component.html */ "./src/app/vendorlist/vendorlist.component.html"),
            styles: [__webpack_require__(/*! ./vendorlist.component.css */ "./src/app/vendorlist/vendorlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], VendorlistComponent);
    return VendorlistComponent;
}());



/***/ }),

/***/ "./src/app/vendorproducts/vendorproducts.component.css":
/*!*************************************************************!*\
  !*** ./src/app/vendorproducts/vendorproducts.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter_search_row .form-control {\n    padding: 10px 10px 10px 35px;\n    height: auto;\n    box-shadow: none;\n    border: 1px solid #c4cdd5;\n    border-left: 0;\n    border-radius: 0 4px 4px 0;\n}\n.filter_search_row .filter_search_inputbx .glyphicon {\n    position: absolute;\n    top: 15px;\n    left: 10px;\n    color: #999999;\n}\n.filter_search_row .filter_search_inputbx {\n    position: relative;\n    margin-left: 90px;\n}\n.filter_search_row .filterbtnbx {\n    width: 90px;\n    float: left;\n}\n.filter_search_row {\n    padding-bottom: 20px;\n}\n.recentorder_tablewrap {\n    background-color: #fff;\n    padding: 30px;\n    /* border: 1px solid #d7e0f1; */\n}\n.filter_search_row .filterbtnbx .btn-primary {\n    width: 100%;\n    text-align: left;\n    padding: 10px;\n    border: 1px solid #204d74;\n    border-radius: 4px 0 0 4px;\n    /* background-color: #8f69e1 !important; */\n    outline: none;\n    box-shadow: none;\n}\n.products_alllist_numrow .pro_digitbx {\n    margin: 0;\n    line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9ycHJvZHVjdHMvdmVuZG9ycHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsMkJBQTJCO0NBQzlCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osWUFBWTtDQUNmO0FBQ0Q7SUFDSSxxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZ0NBQWdDO0NBQ25DO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDJDQUEyQztJQUMzQyxjQUFjO0lBQ2QsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9ycHJvZHVjdHMvdmVuZG9ycHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXJfc2VhcmNoX3JvdyAuZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAzNXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNGNkZDU7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG59XG4uZmlsdGVyX3NlYXJjaF9yb3cgLmZpbHRlcl9zZWFyY2hfaW5wdXRieCAuZ2x5cGhpY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICM5OTk5OTk7XG59XG4uZmlsdGVyX3NlYXJjaF9yb3cgLmZpbHRlcl9zZWFyY2hfaW5wdXRieCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xufVxuLmZpbHRlcl9zZWFyY2hfcm93IC5maWx0ZXJidG5ieCB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uZmlsdGVyX3NlYXJjaF9yb3cge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLnJlY2VudG9yZGVyX3RhYmxld3JhcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNkN2UwZjE7ICovXG59XG4uZmlsdGVyX3NlYXJjaF9yb3cgLmZpbHRlcmJ0bmJ4IC5idG4tcHJpbWFyeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMDRkNzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzhmNjllMSAhaW1wb3J0YW50OyAqL1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5wcm9kdWN0c19hbGxsaXN0X251bXJvdyAucHJvX2RpZ2l0Yngge1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/vendorproducts/vendorproducts.component.html":
/*!**************************************************************!*\
  !*** ./src/app/vendorproducts/vendorproducts.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\n  <div class=\"main_container\">\n    <app-sidebar></app-sidebar>\n    <app-header></app-header>\n    <div class=\"right_col\" role=\"main\">\n      <div class=\"\">\n        <div class=\"page-title\">\n          <div class=\"title_left\">\n            <h3>Vendor Products</h3>\n          </div>\n        </div>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"row\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"x_panel\">\n            <div class=\"x_title\">\n              <h2>Vendor Products</h2>\n              <ul class=\"nav navbar-right panel_toolbox\">\n                <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                </li>\n              </ul>\n              <div class=\"clearfix\"></div>\n            </div>\n\n\n            <!--All Products Listing Content Section Start Here-->\n            <div class=\"x_content\">\n            <div id=\"page-content-wrapper\">\n              <div class=\"dashboardConbx\">\n                <!--All Products List Showing Start Here-->\n                <div class=\"allproductslistingwarp\">\n                  <div class=\"products_alllist_numrow\">\n                    <div class=\"row clearfix\">\n                      <div class=\"col-sm-3\">\n                        <div class=\"pro_digitbx add_pro\">\n                          <h2>{{productCount?.totalProduct}}</h2>\n                          <h3>All Products</h3>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div class=\"pro_digitbx brands\">\n                          <h2>{{productCount?.activeProduct}}</h2>\n                          <h3>Active</h3>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div class=\"pro_digitbx categories\">\n                          <h2>{{productCount?.inactiveProduct}}</h2>\n                          <h3>Inactive</h3>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div class=\"pro_digitbx categories\">\n                          <h2>{{productCount?.rejectProduct}}</h2>\n                          <h3>Rejected</h3>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!--All Products List Showing End Here-->\n\n                <!--Recent Order Table Section Start Here-->\n                <div class=\"recentorder_tablewrap\">\n                  <div class=\"filter_search_row clearfix\">\n                    <div class=\"filterbtnbx\">\n                      <div class=\"dropdown\">\n                        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Filter\n                          <span class=\"caret\"></span></button>\n                        <ul class=\"dropdown-menu\">\n                          <li><a (click)=\"getProductsInfo('all')\">All</a></li>\n                          <li><a (click)=\"getProductsInfo('active')\">Active</a></li>\n                          <li><a (click)=\"getProductsInfo('inactive')\">Inactive</a></li>\n                          <li><a (click)=\"getProductsInfo('rejected')\">Rejected</a></li>\n                        </ul>\n                      </div>\n                    </div>\n                    <div class=\"filter_search_inputbx\"><span class=\"glyphicon glyphicon-search\"></span><input class=\"form-control\"\n                        type=\"text\" placeholder=\"Search Products\" /></div>\n                  </div>\n                  <div class=\"recentOrderTable\">\n                    <table class=\"table\" *ngIf=\"vendorDetails?.length != 0;else nodata\">\n                      <thead>\n                        <tr>\n                          <th>Product</th>\n                          <th>Vendor Name</th>\n                          <th>Price</th>\n                          <th>Quantity</th>\n                          <th>Total variants</th>\n                          <th align=\"center\">Action</th>\n                        </tr>\n                      </thead>\n                        <tbody >\n                        <tr *ngFor=\"let item of vendorDetails; index as i\">\n                         \n                            <td align=\"left\" class=\"img-text\" valign=\"middle\">    \n                                <a href=\"/productdetails?productId={{item.productId}}\">\n                                  <div class=\"pro_img_wrapper\"> <img class=\"pro_img\" src=\"{{item?.image[0]}}\" alt=\"\"\n                                height=\"70px\" /></div>\n                                <span class=\"text\">{{item?.productName}}</span>\n                              </a>\n                              </td>\n                        \n                          <td> {{item?.sellerName}}</td>\n                          <td>{{item?.price}}</td>\n                          <td>{{item?.quantity?item?.quantity:0}}</td>\n                          <td>{{item?.variant.length}}</td>\n                          <td>\n                            <div class=\"btngroup\" *ngIf=\"item.productStatus=='INACTIVE';else other_content\">\n                              <!-- {{item.productStatus}} -->\n                              <button type=\"btn\" class=\"btn btn-primary rejectbtn\" (click)=\"changeStatus(item.productId,'REJECTED')\">Reject</button>\n                              <button type=\"btn\" class=\"btn btn-primary acceptbtn\" (click)=\"changeStatus(item.productId,'ACTIVE')\">Accept</button>\n\n                            </div>\n                            <ng-template #other_content>\n                              {{item.productStatus}}\n                            </ng-template>\n                          </td>\n                        </tr>\n                       \n                      </tbody>\n                     \n                    </table>\n                    <ng-template #nodata>\n                      <p style=\" text-align: center\">No Data Available</p>\n                     </ng-template>\n                  </div>\n                </div>\n                <!--Recent Order Table Section End Here-->\n\n              </div>\n            </div>\n          </div>\n            <!--Products Listing Content Section End Here-->\n          </div>\n        </div>\n      </div>\n      </div>\n      <app-footer></app-footer>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/vendorproducts/vendorproducts.component.ts":
/*!************************************************************!*\
  !*** ./src/app/vendorproducts/vendorproducts.component.ts ***!
  \************************************************************/
/*! exports provided: VendorproductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorproductsComponent", function() { return VendorproductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");




var VendorproductsComponent = /** @class */ (function () {
    function VendorproductsComponent(route, service, activatedRoute) {
        this.route = route;
        this.service = service;
        this.activatedRoute = activatedRoute;
    }
    VendorproductsComponent.prototype.ngOnInit = function () {
        this.getProductsInfo("inactive");
        this.getProductsCount();
    };
    VendorproductsComponent.prototype.getProductsInfo = function (val) {
        var _this = this;
        this.service.getApi('vendor/inActiveProductList?status=' + val, 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                _this.vendorDetails = Response['result'];
                console.log(_this.vendorDetails);
            }
            else if (Response['statusCode'] == 404) {
                _this.vendorDetails = '';
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    VendorproductsComponent.prototype.changeStatus = function (val, status) {
        var _this = this;
        var sentData = {
            productId: val,
            status: status
        };
        this.service.postApi('admin/changeProductStatus?lang=en', sentData, 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                _this.productDetails = Response['result'];
                console.log(_this.productDetails);
                _this.route.navigate(['/vendorproducts']);
                _this.ngOnInit();
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    VendorproductsComponent.prototype.getProductsCount = function () {
        var _this = this;
        this.service.getApi('admin/countProduct', 0).subscribe(function (Response) {
            if (Response['statusCode'] == 200) {
                _this.productCount = Response['result'];
                console.log(_this.productCount);
            }
            else {
                console.log("error");
            }
        }, function (error) {
            console.log("error occur", error);
        });
    };
    VendorproductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendorproducts',
            template: __webpack_require__(/*! ./vendorproducts.component.html */ "./src/app/vendorproducts/vendorproducts.component.html"),
            styles: [__webpack_require__(/*! ./vendorproducts.component.css */ "./src/app/vendorproducts/vendorproducts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VendorproductsComponent);
    return VendorproductsComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/techugo/Desktop/gitbucket/final admin panel/wakiAdmin/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map