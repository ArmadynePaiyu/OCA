webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-new-configuration/add-new-configuration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".backColo{\n    background-color: #f9f9f9;\n}\n\n.header {\n    padding : 10px;\n    border-bottom: 1px solid #ececec; \n}\n\n.header a {\n    width : 20%;\n    float : left;\n    color : #333;\n    text-decoration: none;\n    font-weight: 500; \n}\n\n.header a:hover{\n color : #0AA991;\n}\n\n.header a i:hover {\n    color: #0AA991;\n}\n\n.header span {\n    text-align: center;\n    font-weight: 600;\n    font-size: 16px;\n    color : #0AA991;\n    width : 60%;\n}\n\n.banner {\n    height : 45px;\n    width : inherit;\n    background-color: none;\n    text-align: center;\n    line-height: 45px;\n    font-size: 14px;\n    font-weight : 600;\n    color : #333;\n    border-bottom : 1px solid #ececec;\n\n}\n\n.input-divs{\n\n    padding : 5px;\n}\n\n.form-group{\n    margin-top: 10px;\n}\n\n.form-group input {\n    border-radius: 0px !important;\n    background: none;\n    border : 1px solid #ccc;\n    outline:none;\n}\n\n.form-group select {\n    border-radius: 0px ;\n}\n\n.border-div{\n    border : 1px solid #ccc;\n}\n\n.btn-accept{\nposition :absolute;\nbottom : 5px;\nright:20px;\n}\n\n#createBtn {\n    background: #0AA991;\n    border:none;\n    color : #fff;\n    width:100px;\n}\n\n#cancelBtn {\n    background: red;\n    border:none;\n    color : #fff;\n    width:100px;\n\n}\n\n.form-group label {\n    font-weight: 600;\n    font-size: 12px;\n}\n\n.border-down{\n    padding-bottom : 5px;\n    border-bottom : 1px solid #ececec;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-new-configuration/add-new-configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\" >\n<a href=\"#\" [routerLink]=\"['/']\" >\n    <i style=\"font-size:16px;position:relative;top:3px\" class=\"material-icons\">arrow_back</i>\n  Back to home</a>\n  <span >New Configuration</span>     \n\n</div>\n\n<div class=\"row border-down backColo\">\n    <div class=\"col-md-4\">\n        <div class=\"banner\">Account</div>\n\n        <div class=\"input-divs\">\n            <form>\n                <div class=\"form-group\">\n                  <label for=\"name\">Name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"oppty\">Oppty ID</label>\n                    <input type=\"text\" class=\"form-control\" id=\"oppty\">\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"customer\">Customer Account</label>\n                      <input type=\"text\" class=\"form-control\" id=\"customer\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlSelect1\">OCA Workbook</label>\n                        <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                          <option>1</option>\n                          <option>2</option>\n                          <option>3</option>\n                          <option>4</option>\n                          <option>5</option>\n                        </select>\n                        \n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"exampleFormControlSelect1\">Region</label>\n                          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                            <option>1</option>\n                            <option>2</option>\n                            <option>3</option>\n                            <option>4</option>\n                            <option>5</option>\n                          </select>\n                          \n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlSelect1\">Country</label>\n                            <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                              <option>1</option>\n                              <option>2</option>\n                              <option>3</option>\n                              <option>4</option>\n                              <option>5</option>\n                            </select>\n                            \n                          </div>\n\n                          <div class=\"form-group\">\n                              <label for=\"exampleFormControlSelect1\">Product Lifecycle</label>\n                              <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                <option>1</option>\n                                <option>2</option>\n                                <option>3</option>\n                                <option>4</option>\n                                <option>5</option>\n                              </select>\n                              \n                            </div>\n           \n            </form>\n        </div>\n\n\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"banner\">Product</div>\n\n        <div class=\"input-divs\">\n            <div class=\"form-group\">\n                <label for=\"exampleFormControlSelect1\">Select Product</label>\n                <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                  <option>1</option>\n                  <option>2</option>\n                  <option>3</option>\n                  <option>4</option>\n                  <option>5</option>\n                </select>\n                <small id=\"emailHelp\" class=\"form-text text-muted\">Only the first 50 views are shown !</small>\n              </div>\n        </div>\n\n      </div>\n      <div class=\"col-md-4\">\n          <div class=\"banner\">Options</div>\n\n          <div class=\"input-divs\">\n              <form>\n\n                  <div class=\"form-group\">\n                      <label for=\"exampleFormControlSelect1\">Quantity</label>\n                      <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                      </select>\n                     \n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlSelect1\">Sub Configuration</label>\n                        <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                          <option>1</option>\n                          <option>2</option>\n                          <option>3</option>\n                          <option>4</option>\n                          <option>5</option>\n                        </select>\n                       \n                      </div>\n\n                      <div class=\"form-group\">\n                          <label for=\"exampleFormControlSelect1\">Quotatin Mode</label>\n                          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                            <option>1</option>\n                            <option>2</option>\n                            <option>3</option>\n                            <option>4</option>\n                            <option>5</option>\n                          </select>\n                         \n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlSelect1\">Services</label>\n                            <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                              <option>1</option>\n                              <option>2</option>\n                              <option>3</option>\n                              <option>4</option>\n                              <option>5</option>\n                            </select>\n                        \n                          </div>\n\n              </form>\n          </div>\n\n          <div class=\"btn-accept\">\n\n            <!-- <button id=\"cancelBtn\">Cancel</button>\n            <button id=\"createBtn\">Create</button> -->\n\n            <button type=\"button\" id=\"cancelBtn\" class=\"btn btn-sm btn-primary\" disabled>Cancel</button>\n            <button type=\"button\" id=\"createBtn\" class=\"btn btn-secondary btn-sm\" disabled>Create</button>\n\n          </div>\n\n        </div>\n\n</div>\n\n\n\n<div class=\"footer-copyright py-3 text-center\" style=\"font-size:10px;\">\n    © 2018 Copyright:\n   Hewlett Packard Enterprise Development \n</div>"

/***/ }),

/***/ "../../../../../src/app/add-new-configuration/add-new-configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewConfigurationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddNewConfigurationComponent = (function () {
    function AddNewConfigurationComponent() {
    }
    AddNewConfigurationComponent.prototype.ngOnInit = function () {
    };
    return AddNewConfigurationComponent;
}());
AddNewConfigurationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-new-configuration',
        template: __webpack_require__("../../../../../src/app/add-new-configuration/add-new-configuration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-new-configuration/add-new-configuration.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddNewConfigurationComponent);

//# sourceMappingURL=add-new-configuration.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul li a {\n    color : #333;\n    font-family : Proxima Nova ;\n    font-weight: 600;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark  \">\n        <a class=\"navbar-brand\"  href=\"#\">\n          <img src=\"assets/logo.png\"/>\n        </a>\n\n        <ul class=\"nav justify-content-center\">\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              New Configuration\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <a class=\"dropdown-item\" href=\"#\">Normal</a>\n              <a class=\"dropdown-item\" href=\"#\">Renew</a>\n              <a class=\"dropdown-item\" href=\"#\">Add On</a>\n              <a class=\"dropdown-item\" href=\"#\">Support Only</a>\n            </div>\n            </li>\n\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['OcaConfig']\" class=\"nav-link\" href=\"#\">Open Configuration</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Manage MyLibrary</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Import</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">Useful Links</a>\n              </li>\n\n\n        </ul>\n\n        </nav>\n\n        <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__oca_login_oca_login_component__ = __webpack_require__("../../../../../src/app/oca-login/oca-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_new_configuration_add_new_configuration_component__ = __webpack_require__("../../../../../src/app/add-new-configuration/add-new-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_ui_switch__ = __webpack_require__("../../../../ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__oca_config_page_oca_config_page_component__ = __webpack_require__("../../../../../src/app/oca-config-page/oca-config-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__managemy_library_managemy_library_component__ = __webpack_require__("../../../../../src/app/managemy-library/managemy-library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_config_component_config_component__ = __webpack_require__("../../../../../src/app/component-config/component-config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__summary_config_summary_config_component__ = __webpack_require__("../../../../../src/app/summary-config/summary-config.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__oca_login_oca_login_component__["a" /* OcaLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_5__add_new_configuration_add_new_configuration_component__["a" /* AddNewConfigurationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__oca_config_page_oca_config_page_component__["a" /* OcaConfigPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__managemy_library_managemy_library_component__["a" /* ManagemyLibraryComponent */],
            __WEBPACK_IMPORTED_MODULE_9__component_config_component_config_component__["a" /* ComponentConfigComponent */],
            __WEBPACK_IMPORTED_MODULE_10__summary_config_summary_config_component__["a" /* SummaryConfigComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6_ngx_ui_switch__["a" /* UiSwitchModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot([
                {
                    path: "",
                    component: __WEBPACK_IMPORTED_MODULE_3__oca_login_oca_login_component__["a" /* OcaLoginComponent */],
                },
                {
                    path: "newConfig",
                    component: __WEBPACK_IMPORTED_MODULE_5__add_new_configuration_add_new_configuration_component__["a" /* AddNewConfigurationComponent */]
                },
                {
                    path: "OcaConfig",
                    component: __WEBPACK_IMPORTED_MODULE_7__oca_config_page_oca_config_page_component__["a" /* OcaConfigPageComponent */],
                    children: [
                        {
                            path: "Component",
                            component: __WEBPACK_IMPORTED_MODULE_9__component_config_component_config_component__["a" /* ComponentConfigComponent */]
                        },
                        {
                            path: "Summary",
                            component: __WEBPACK_IMPORTED_MODULE_10__summary_config_summary_config_component__["a" /* SummaryConfigComponent */]
                        }
                    ]
                },
                {
                    path: "newLibrary",
                    component: __WEBPACK_IMPORTED_MODULE_8__managemy_library_managemy_library_component__["a" /* ManagemyLibraryComponent */]
                }
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/component-config/component-config.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component-config/component-config.component.html":
/***/ (function(module, exports) {

module.exports = "\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n\n              <thead class=\"thead-dark\" >\n                  <tr style=\"font-size:13px\">\n                      <th>Num</th>\n                      <th>Description</th>\n                      <th>CI</th>\n                      <th>Spec</th>\n                  </tr>\n              </thead>\n              <tbody>\n                      <tr>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                      </tr>\n              </tbody>\n\n          </table>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/component-config/component-config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentConfigComponent = (function () {
    function ComponentConfigComponent() {
    }
    ComponentConfigComponent.prototype.ngOnInit = function () {
    };
    return ComponentConfigComponent;
}());
ComponentConfigComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-component-config',
        template: __webpack_require__("../../../../../src/app/component-config/component-config.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component-config/component-config.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ComponentConfigComponent);

//# sourceMappingURL=component-config.component.js.map

/***/ }),

/***/ "../../../../../src/app/managemy-library/managemy-library.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/managemy-library/managemy-library.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/managemy-library/managemy-library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagemyLibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagemyLibraryComponent = (function () {
    function ManagemyLibraryComponent() {
    }
    ManagemyLibraryComponent.prototype.ngOnInit = function () {
    };
    return ManagemyLibraryComponent;
}());
ManagemyLibraryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-managemy-library',
        template: __webpack_require__("../../../../../src/app/managemy-library/managemy-library.component.html"),
        styles: [__webpack_require__("../../../../../src/app/managemy-library/managemy-library.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManagemyLibraryComponent);

//# sourceMappingURL=managemy-library.component.js.map

/***/ }),

/***/ "../../../../../src/app/oca-config-page/oca-config-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-fun-div{\n\n    border : 1px solid #ddd;\n    width : 100%;\n    height : 60px;\n\n    line-height: 60px;\n}\n\n.button-fun-div i {\n    color : #888;\n    font-size: 16px;\n}\n\n.button-fun-div h6{\n    color : #888;\n    font-size: 14px;\n    font-weight: 300;\n\n}\n\n.custom-changes-front {\n    padding:10px;\n\n}\n\n.custom-changes{\n    padding:10px;\n\n}\n\n.no-padding {\n    padding : 0px;\n}\n\n.search-fun-div{\n\n    background: none;\n    border  :1px solid #ddd;\n    width : 100%;\n    height : 60px;\n    padding : 12px;\n\n\n}\n\n.search-fun-div ul li{\n    display : inline-block;\n    padding-left : 15px;\n}\n\n.search-fun-div ul{\n    margin : 0px;\n    padding : 0px;\n}\n\n.myLabel {\n    font-size : 12px;\n    font-weight: 600;\n}\n\n.myValue {\n    font-size: 11px;\n    font-weight : 300;\n}\n\n#SearchConfig{\n    position :relative;\n    bottom : 3px;\n    width : 100%;\n    height:40px;\n    border : none;\n    border-radius : 3px;\n    outline : none;\n    -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);\n            box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);\n}\n\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #888;\n    font-size: 10px;\n    padding : 6px;\n}\n\n:-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #888;\n    font-size: 10px;\n    padding : 6px;\n}\n\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #888;\n    font-size: 10px;\n    padding : 6px;\n}\n\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #888;\n    font-size: 10px;\n    padding : 6px;\n}\n\n.button-fun-div ul li {\n    display : inline-block;\n    padding-left:50px;\n\n\n}\n\n.button-fun-div button:hover{\n    color : #08A99A;\n    bottom  :3px;\n}\n\n.button-fun-div button {\n    background: none;\n    border : none;\n    position: relative;\n    cursor: pointer;\n    font-weight: 600;\n    font-size: 12px;\n}\n\n.button-fun-div  i {\n    color : #333;\n    top:3px;\n    position: relative;\n}\n\n.button-fun-div ul{\n    padding-left: 0px;\n\n}\n\n.configLink {\n    margin-top: 5px;\n}\n\n.configLink {\n    padding-left: 0px;\n    margin-left : 0px;\n}\n\n.configLink li {\n    list-style: none;\n    height : 50px;\n    line-height: 50px;\n    border-bottom:1px solid #e7e7e7;\n    padding-left: 5px;\n    padding-right: 5px;\n    color : #333;\n    font-size: 14px;\n}\n\n.configLink li:hover {\n    color : #fff;\n    background-color: #01A982;\n}\n\n.configLink li i {\n    float : right;\n    line-height: 50px;\n    font-size : 16px;\n}\n\n.configTitle{\n\n    margin-bottom: 0px;\n    font-size: 13px;\n    font-weight: 700;\n    margin-left:5px;\n\n}\n\n.table-data{\n    margin-top: 10px;\n}\n\n.table-data table {\n    font-size: 11px;\n    font-weight: 300;\n}\n\n.active {\n    background-color: #01A982 ;\n    color : #fff;\n}\n\n.dropdown button{\n  float : right;\n  font-size: 13px;\n  margin-top: 15px;\n  text-align: left;\n  background: none;\n  border : 1px solid #01A982;\n  color : #333;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/oca-config-page/oca-config-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-6 col-sm-6 col-lg-6\" style=\"text-align:center\">\n\n    <div class=\"button-fun-div\">\n\n      <div class=\"row\">\n\n        <div class=\"col-sm-3 col-md-3 col-lg-3\">\n\n          <i class=\"material-icons\">save</i>\n          <button>Save</button>\n\n        </div>\n\n        <div class=\"col-sm-3 col-md-3 col-lg-3\">\n          <i class=\"material-icons\">language</i>\n          <button>Quote</button>\n        </div>\n\n        <div class=\"col-sm-3 col-md-3 col-lg-3\">\n\n          <i class=\"material-icons\">content_paste</i>\n          <button>Catalog</button>\n        </div>\n\n        <div class=\"col-sm-3 col-md-3 col-lg-3\">\n\n\n          <i class=\"material-icons\"> next_week</i>\n          <button>Export</button>\n\n        </div>\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n  <div class=\"col-md-6 col-sm-6\">\n\n\n\n    <div class=\"search-fun-div\">\n\n      <div class=\"row\">\n\n        <div class=\"col-md-4 col-sm-2 col-lg-2\">\n\n          <div class=\"myLabel\">UCID</div>\n          <div class=\"myValue\">65212012-103</div>\n\n        </div>\n\n\n        <div class=\"col-md-4 col-sm-2 col-lg-2\">\n\n\n          <div class=\"myLabel\">Config Status</div>\n          <div class=\"myValue\" style=\"color : red;font-weight:600;\">Assigned</div>\n\n        </div>\n\n        <div class=\"col-md-4 col-sm-8 col-lg-8\">\n\n          <input type=\"text\" id=\"SearchConfig\" placeholder=\"Search Config\">\n\n\n\n        </div>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-12\">\n\n    <div class=\"dropdown\">\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        OCA Config 1\n      </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <a class=\"dropdown-item\" href=\"#\"></a>\n        <a class=\"dropdown-item\" href=\"#\"></a>\n        <a class=\"dropdown-item\" href=\"#\"></a>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n    <h6 class=\"configTitle\">Config Functions</h6>\n\n    <ul class=\"configLink\">\n      <li id=\"configList\" *ngFor=\"let list of configFuncList\" [routerLink]=\"[list.name]\">\n        {{list.name}}\n        <i class=\"material-icons\">{{list.icon}}</i>\n      </li>\n    </ul>\n\n\n  </div>\n\n  <div class=\"col-md-9\">\n\n    <h6 class=\"configTitle\" style=\"margin-left:0px\">OCA CONFIG 1 (SAVE)</h6>\n    <router-outlet></router-outlet>\n  </div>\n\n\n</div>\n\n<div class=\"footer-copyright py-3 text-center foot\" style=\"font-size:10px;position :absolute;bottom:0px;\">\n  © 2018 Copyright: Hewlett Packard Enterprise Development\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/oca-config-page/oca-config-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OcaConfigPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OcaConfigPageComponent = (function () {
    function OcaConfigPageComponent(route) {
        this.route = route;
        this.configFuncList = [
            {
                "name": "Summary",
                "icon": "arrow_forward"
            },
            {
                "name": "Component",
                "icon": "arrow_forward"
            },
            {
                "name": "Layout",
                "icon": "arrow_forward"
            },
            {
                "name": "Power",
                "icon": "arrow_forward"
            },
            {
                "name": "BOM",
                "icon": "arrow_forward"
            },
            {
                "name": "Customer Intent",
                "icon": "arrow_forward"
            },
            {
                "name": "Service",
                "icon": "arrow_forward"
            }
        ];
    }
    OcaConfigPageComponent.prototype.ngOnInit = function () {
    };
    OcaConfigPageComponent.prototype.gotoConfig = function () {
        document.getElementById('configList').classList.toggle('active');
    };
    return OcaConfigPageComponent;
}());
OcaConfigPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-oca-config-page',
        template: __webpack_require__("../../../../../src/app/oca-config-page/oca-config-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/oca-config-page/oca-config-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], OcaConfigPageComponent);

var _a;
//# sourceMappingURL=oca-config-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/oca-login/oca-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.foot {\n    position: absolute;\n    bottom : 0px;\n    text-align: center;\n}\n\n\n.content {\n\n    height : 430px;\n    width : 100%;\n    padding:15px;\n\n}\n\n\n.content:hover {\n    -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);\n            box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);\n    background-color: #fff;\n\n\n    -webkit-box-shadow: 0px 2px 6px #ddd;\n\n\n            box-shadow: 0px 2px 6px #ddd;\n}\n\n\nul li a {\n    color : #333;\n    font-family : Proxima Nova ;\n    font-weight: 600;\n}\n\n\n.mylabel{\n    margin-top : 2em;\n    margin-bottom : 0.2em;\n    font-weight: 400;\n    font-family : Proxima Nova;\n    font-size:14px;\n}\n\n\n.myLink{\n    font-weight : 600;\n    color : #08A99A;\n    font-size: 15px;\n}\n\n\n.info{\n    list-style-type: none;\n    padding : 0px;\n}\n\n\n.info a {\n    margin-left : 10px;\n}\n\n\n.search-box{\n    position : absolute;\n    bottom : 15px ;\n    display : inline;\n    width : 360px;\n}\n\n\n.search-box input{\n    width : 200px;\n    border : 1px solid #08A99A;\n    background: none;\n    border-radius: 50px;\n    outline: none;\n    padding-left: 10px;\n}\n\n\n.search-box a {\n    margin-top: 5px;\n}\n\n\n.search-box input::-webkit-input-placeholder {\n    font-size : 12px;\n    color : #ddd;\n\n}\n\n\n.search-box input:-ms-input-placeholder {\n    font-size : 12px;\n    color : #ddd;\n\n}\n\n\n.search-box input::-ms-input-placeholder {\n    font-size : 12px;\n    color : #ddd;\n\n}\n\n\n.search-box input::placeholder {\n    font-size : 12px;\n    color : #ddd;\n\n}\n\n\na {\n    color : #08A99A;\n}\n\n\n.small-header{\n    float: right;\n    font-size: 11px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/oca-login/oca-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \">\n      \n  <div class=\"row\">\n\n    <div class=\"col-lg-4\">\n\n      <div class=\"content\">\n\n        <img src=\"assets/network.svg\" height=\"60px\"/>\n        \n        <div class=\"mylabel\">Currently Building</div>\n\n        <a  [routerLink]=\"['newConfig']\" class=\"myLink\">New Configuration</a>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-4\">\n\n      <div class=\"content\">\n\n          <ui-switch style=\"float:right;\" [(ngModel)]=\"enable\" color=\"#08A99A\" size=\"small\" switchColor=\"#f9f9f9\"></ui-switch>\n\n          <img src=\"assets/chronometer.svg\" height=\"60px\"/>\n        \n          <div class=\"mylabel\">Recent Configurations</div>\n\n\n          <div *ngIf=\"enable\" class=\"recentCongif\">\n\n           \n\n              <div>OCA Config 1 (Auto Sa...Search 123</div>\n\n              <div>New Search</div>\n\n              <div>OCA Config 1</div>\n\n              <div>OCA Config 7(Auto)</div>\n\n              <div>OCA Config 1(test)</div>\n\n          \n            \n          </div>\n\n\n          <div class=\"search-box\">\n            <input type=\"text\" placeholder=\"Search for Configurations\" id=\"search\">\n            <img src=\"assets/search.svg\" height=\"20px\" style=\"margin-left:5px\"/>\n            <a href=\"#\" style=\"float:right\" >Advanced</a>\n          </div>\n\n      </div>\n      \n    </div>\n\n\n    <div class=\"col-lg-4\">\n\n      <div class=\"content\">\n\n          <span class=\"small-header\">Simple Dashboard headers for internal users on OCAITG2</span>\n\n          <img src=\"assets/information.svg\" height=\"60px\"/>\n        \n          <div class=\"mylabel\">Recommendations & Arts</div>\n\n\n\n\n\n          <ul class=\"info\">\n            <li><img src=\"assets/bulb.svg\" height=\"16px\"/><a href=\"#\">GetOCASupport</a></li>\n            <li><img src=\"assets/bulb.svg\" height=\"16px\"/><a href=\"#\">KBRoadmap</a></li>\n            <li><img src=\"assets/bulb.svg\" height=\"16px\"/><a href=\"#\">TechDirect</a></li>\n          </ul>\n\n      </div>\n      \n    </div>\n\n  </div>\n  \n</div>\n\n<div class=\"footer-copyright py-3 text-center foot\" style=\"font-size:10px;\">\n    © 2018 Copyright:\n   Hewlett Packard Enterprise Development \n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/oca-login/oca-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OcaLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OcaLoginComponent = (function () {
    function OcaLoginComponent() {
        this.enable = false;
    }
    OcaLoginComponent.prototype.ngOnInit = function () {
    };
    return OcaLoginComponent;
}());
OcaLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-oca-login',
        template: __webpack_require__("../../../../../src/app/oca-login/oca-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/oca-login/oca-login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OcaLoginComponent);

//# sourceMappingURL=oca-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/summary-config/summary-config.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sum-look{\n  width : 100%;\n  height : 100%;\n  background-color: #f6f6f6;\n  padding: 10px;\n}\n\n.page-desc-sum ul {\n  margin : 0px;\n  padding : 0px;\n}\n\n.page-desc-sum ul li{\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/summary-config/summary-config.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-6 sum-look\">\n\n\n    <div class=\"page-title-sum\">\n\n      <i class=\"material-icons\">assignment</i><span>Summary</span>\n\n    </div>\n\n    <div class=\"page-desc-sum\">\n\n        \n\n    </div>\n\n\n\n</div>\n\n  <div class=\"col-md-6\">\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/summary-config/summary-config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryConfigComponent = (function () {
    function SummaryConfigComponent() {
    }
    SummaryConfigComponent.prototype.ngOnInit = function () {
    };
    return SummaryConfigComponent;
}());
SummaryConfigComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-summary-config',
        template: __webpack_require__("../../../../../src/app/summary-config/summary-config.component.html"),
        styles: [__webpack_require__("../../../../../src/app/summary-config/summary-config.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SummaryConfigComponent);

//# sourceMappingURL=summary-config.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map