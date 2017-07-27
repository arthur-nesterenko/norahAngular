webpackJsonp([6],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/pages/auto-rigger/auto-rigger.module": [
		"../../../../../src/app/pages/auto-rigger/auto-rigger.module.ts",
		1
	],
	"app/pages/contact-us/contact-us.module": [
		"../../../../../src/app/pages/contact-us/contact-us.module.ts",
		4
	],
	"app/pages/library/library.module": [
		"../../../../../src/app/pages/library/library.module.ts",
		3
	],
	"app/pages/motion-editor/motion-editor.module": [
		"../../../../../src/app/pages/motion-editor/motion-editor.module.ts",
		0
	],
	"app/pages/repository/repository.module": [
		"../../../../../src/app/pages/repository/repository.module.ts"
	],
	"app/pages/style-transfer/style-transfer.module": [
		"../../../../../src/app/pages/style-transfer/style-transfer.module.ts",
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about_component__ = __webpack_require__("../../../../../src/app/pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_char_maker_char_maker_component__ = __webpack_require__("../../../../../src/app/pages/char-maker/char-maker.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */],
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'char-maker',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_char_maker_char_maker_component__["a" /* CharMakerComponent */]
    },
    {
        path: 'contact-us',
        loadChildren: 'app/pages/contact-us/contact-us.module#ContactUsModule',
    },
    {
        path: 'repository',
        loadChildren: 'app/pages/repository/repository.module#RepositoryModule',
    },
    {
        path: 'auto-rigger',
        loadChildren: 'app/pages/auto-rigger/auto-rigger.module#AutoRiggerModule',
    },
    {
        path: 'my-library',
        loadChildren: 'app/pages/library/library.module#LibraryModule',
    },
    {
        path: 'style-transfer',
        loadChildren: 'app/pages/style-transfer/style-transfer.module#StyleTransferModule',
    },
    {
        path: 'motion-editor',
        loadChildren: 'app/pages/motion-editor/motion-editor.module#MotionEditorModule',
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* PreloadAllModules */] })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]
        ],
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <!--header-->\n    <header [class]=\"'clearfix ' + (updateIndex ? 'updateIndex' : '')\" class=\"clearfix\">\n        <nav class=\"navbar navbar-default navbar-static-top tm_navbar clearfix\" role=\"navigation\">\n            <div class=\"logo\"></div>\n            <ul class=\"nav sf-menu  clearfix\">\n\n                <li class=\"sub-menu\">\n                    <a [routerLink]=\"['']\">Home</a>\n                    <span class=\"fa fa-angle-down\"></span>\n                    <ul class=\"homeSub\">\n                        <li>\n                            <a href=\"#\">Animation</a>\n                            <ul class=\"bodysub\">\n                                <li [routerLink]=\"['auto-rigger']\"><a style=\"cursor:pointer;\">Auto Rigger</a></li>\n                                <li><a [routerLink]=\"['repository']\">Repository</a></li>\n                                <li><a [routerLink]=\"['style-transfer']\">Style Transfer Tool</a>\n                                </li>\n                                <li><a [routerLink]=\"['motion-editor']\">Motion Editor</a></li>\n                            </ul>\n                        </li>\n                        <li><a href=\"#\">3D Modelling</a>\n                            <ul class=\"bodysub\">\n                                <li><a href=\"#\">Yet To Launch</a></li>\n                            </ul>\n                        </li>\n                        <li><a href=\"#\">Game maker</a>\n                            <ul class=\"bodysub\">\n                                <li><a href=\"#\">Yet To Launch</a></li>\n                            </ul>\n                        </li>\n\n                    </ul>\n                </li>\n                <li class=\"sub-menu\">\n                    <a [routerLink]=\"['char-maker']\">Char Maker</a>\n                </li>\n\n                <li class=\"sub-menu\">\n                    <a [routerLink]=\"['about']\">About</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['my-library']\">My Library</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['contact-us']\">Contact Us</a>\n                </li>\n            </ul>\n        </nav>\n        <template ngbModalContainer></template>\n\n        <app-auth [showModal]=\"userAuthorized\"></app-auth>\n    </header>\n    <div class=\"container\">\n\n        <div *ngIf=\"showFilters\" class=\"radioBox\">\n            <div class=\"container\">\n                <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8 filter\" *ngIf=\"!myLibrary\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-3\">\n                            <span class=\"text-center pull-left\">Filters: </span>\n                        </div>\n                        <div class=\"col-lg-9 tagName\">\n                            <button (click)=\"removeTag(tag)\" *ngFor=\"let tag of tags\" class=\"tag closeDiv\">{{tag}} <i class=\"fa \"></i>\n              </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-4 filter\" *ngIf=\"myLibrary\">\n                    <div class=\"col-md-3\">\n                        <p style=\"margin-top:5px;font-size:15px;color:white;\">MY ASSETS</p>\n                    </div>\n                    <div class=\"del_btn\">\n                        <a class=\"del_btn btn\" onclick=\"window.deleteSelected()\">Delete Selected</a>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<router-outlet></router-outlet>\n<!--footer-->\n<footer *ngIf=\"!hideFooter\">\n    <div class=\"container\">\n        <div class=\"footer\">\n            NORAH\n        </div>\n        <div class=\"footerCopyright\">\n            © copy right policy\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  position: relative;\n  background: #202a34 url(https://norahanimation.firebaseapp.com/assets/images/glow.png) center bottom no-repeat; }\n\n.container {\n  text-align: center; }\n  @media (min-width: 1220px) {\n    .container {\n      padding: 0; } }\n\nheader {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  padding: 0 20px 0 0;\n  background: #253443;\n  box-shadow: 0 4px 4px 0 #1b2836; }\n\nnav.tm_navbar {\n  border: none;\n  padding: 0;\n  margin: 0;\n  float: left;\n  min-height: 0;\n  background: none; }\n  nav.tm_navbar .logo {\n    background: url(\"https://norahanimation.firebaseapp.com/assets/images/logo.png\") no-repeat center;\n    float: left;\n    width: 120px;\n    height: 70px; }\n  nav.tm_navbar ul {\n    float: left; }\n  nav.tm_navbar li:hover > a {\n    color: #008aff;\n    background: #253443 !important;\n    transition: all 0.3s; }\n  nav.tm_navbar li {\n    position: relative;\n    font-size: 14px;\n    line-height: 50px;\n    padding: 0;\n    margin: 0;\n    float: left; }\n    nav.tm_navbar li :hover > a {\n      color: white;\n      background: #008aff !important;\n      transition: all 0.3s; }\n    nav.tm_navbar li :hover > span {\n      color: #ffffff;\n      transition: all 0.3s; }\n    nav.tm_navbar li a {\n      position: relative;\n      padding: 0;\n      font: 15px/68px \"Questrial\";\n      width: 130px;\n      text-align: center;\n      color: #ffffff;\n      background: #253443;\n      transition: all 0.3s; }\n      nav.tm_navbar li a.active {\n        color: #008aff; }\n    nav.tm_navbar li span {\n      text-align: center;\n      position: absolute;\n      width: 100%;\n      left: 0;\n      bottom: 9px;\n      color: #ffffff;\n      font-size: 12px;\n      transition: all 0.35s; }\n  nav.tm_navbar .sub-menu > ul {\n    background-color: #253443;\n    left: -2px;\n    position: absolute;\n    display: none;\n    width: 170px;\n    top: 68px;\n    list-style: none !important;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    text-align: left;\n    border: 1px solid #253443; }\n    nav.tm_navbar .sub-menu > ul li {\n      position: relative;\n      background: none !important;\n      border: none;\n      width: auto;\n      float: none;\n      margin: 0;\n      padding: 10px 0;\n      display: block;\n      border-bottom: 1px solid #253443;\n      height: 50px; }\n      nav.tm_navbar .sub-menu > ul li:hover {\n        background-color: #008aff !important; }\n      nav.tm_navbar .sub-menu > ul li a {\n        display: block;\n        background: transparent !important;\n        margin: 0;\n        font: 15px/68px \"Questrial\";\n        color: #ffffff;\n        width: 100%;\n        padding: 0 0 0 20px;\n        text-align: left;\n        border: none;\n        transition: all 0.25s ease;\n        text-decoration: none;\n        height: 50px;\n        bottom: 18px; }\n    nav.tm_navbar .sub-menu > ul ul {\n      display: none;\n      top: 0;\n      list-style: none !important;\n      zoom: 1;\n      background-color: #253443 !important;\n      padding: 0;\n      margin: 0;\n      text-align: left;\n      position: absolute;\n      left: 100%; }\n\n.homeSub .bodysub {\n  width: 183px !important; }\n\nfooter {\n  padding: 70px 0 70px 70px;\n  position: relative;\n  overflow: hidden;\n  text-align: center;\n  background-color: #1c252f;\n  color: #008aff;\n  font-size: 38px; }\n  footer .footerCopyright {\n    font-size: 14px;\n    color: grey; }\n\n.radioBox {\n  background-color: #253443;\n  margin-bottom: 1%;\n  font: 15px/68px \"Questrial\"; }\n  .radioBox span {\n    font-size: 23px;\n    text-align: center;\n    color: white;\n    margin-left: 3%; }\n\nh3.listTitle {\n  color: #008aff;\n  padding: 0 5px;\n  text-transform: uppercase; }\n\nul.list-unstyled li {\n  padding: 5px; }\n\n.footerBanner {\n  width: 100%;\n  height: 250px;\n  background: white url(\"https://norahanimation.firebaseapp.com/assets/images/Layer 26.png\") no-repeat center; }\n\n.banner-form {\n  position: absolute;\n  left: 59%;\n  top: 64%;\n  width: 268px;\n  height: 41px;\n  background-color: transparent;\n  border: none; }\n\n.subscribe {\n  position: absolute;\n  right: 19%;\n  top: 66%;\n  color: white;\n  font-size: 15px; }\n\n.tag {\n  color: darkgrey;\n  border: 1px solid #1f2933;\n  background-color: #173550;\n  border-radius: 30px;\n  height: 40px;\n  padding: 0 14px 3px;\n  float: left;\n  margin-top: 10px;\n  line-height: 1; }\n\n.del_btn a {\n  padding: 10px 20px !important;\n  width: 160px;\n  margin-top: 18px;\n  margin-right: 20px;\n  font-weight: 400;\n  text-align: center;\n  border: 1px solid #008aff;\n  border-radius: 30px;\n  color: #fff;\n  background: #253443 none;\n  transition: all 0.2s ease-in-out;\n  font-size: 15px/68px \"Questrial\";\n  float: left; }\n  .del_btn a i {\n    padding-right: 19%; }\n  .del_btn a:focus {\n    outline: 0;\n    box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_auth_auth_service__ = __webpack_require__("../../../../../src/app/pages/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_repository_repository_service__ = __webpack_require__("../../../../../src/app/pages/repository/repository.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(router, authService, repService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.repService = repService;
        this.tags = [];
        this.userAuthorized = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationEnd */]) {
                _this.showFilters = event.url.indexOf('repository') !== -1 || event.url.indexOf('my-library') !== -1;
                _this.myLibrary = event.url.indexOf('my-library') !== -1;
                _this.updateIndex = event.url.indexOf('auto-rigger') !== -1 || event.url.indexOf('motion-editor') !== -1;
                _this.hideFooter = event.url.indexOf('auto-rigger') !== -1 || event.url.indexOf('motion-editor') !== -1 ||
                    event.url.indexOf('style-transfer') !== -1;
            }
        });
        repService.selectedTags$
            .subscribe(function (tag) {
            _this.tags.push(tag);
        });
    }
    AppComponent.prototype.checkLogin = function (url) {
        if (this.authService.authenticated) {
            this.router.navigate([url]);
        }
        else {
            this.userAuthorized.next(true);
        }
        return;
    };
    AppComponent.prototype.removeTag = function (tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
        this.repService.removeTagFromPanel(tag);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__pages_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pages_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__pages_repository_repository_service__["a" /* RepositoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__pages_repository_repository_service__["a" /* RepositoryService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_module__ = __webpack_require__("../../../../../src/app/pages/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about_component__ = __webpack_require__("../../../../../src/app/pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_auth_auth_module__ = __webpack_require__("../../../../../src/app/pages/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_ref__ = __webpack_require__("../../../../../src/app/global-ref.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/pages/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_auth_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/pages/auth/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_repository_repository_service__ = __webpack_require__("../../../../../src/app/pages/repository/repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_repository_repository_module__ = __webpack_require__("../../../../../src/app/pages/repository/repository.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_char_maker_char_maker_component__ = __webpack_require__("../../../../../src/app/pages/char-maker/char-maker.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_char_maker_char_maker_component__["a" /* CharMakerComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ng2_nouislider__["NouisliderModule"],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__pages_auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_15__pages_repository_repository_module__["RepositoryModule"]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_9__global_ref__["a" /* GlobalRef */], useClass: __WEBPACK_IMPORTED_MODULE_9__global_ref__["b" /* BrowserGlobalRef */] }, __WEBPACK_IMPORTED_MODULE_11__pages_auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__pages_auth_dialog_dialog_component__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_14__pages_repository_repository_service__["a" /* RepositoryService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/global-ref.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BrowserGlobalRef; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GlobalRef = (function () {
    function GlobalRef() {
    }
    return GlobalRef;
}());

var BrowserGlobalRef = (function (_super) {
    __extends(BrowserGlobalRef, _super);
    function BrowserGlobalRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BrowserGlobalRef.prototype, "nativeGlobal", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserGlobalRef;
}(GlobalRef));

//# sourceMappingURL=global-ref.js.map

/***/ }),

/***/ "../../../../../src/app/pages/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content indent\">\n  <div class=\"who-box\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-6 wow fadeInUp\">\n        </div>\n        <div class=\"col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated\" data-wow-delay=\"0.3s\">\n          <h2 class=\"indent\">About Us</h2>\n          <ul class=\"list4\">\n            <li>\n              <p>Norah AI is a revolutionary, A.I. empowered workflow for generating games. The A.I. enables quick creation and incorporation of all different game elements ranging from creation of 3D models and their animation to story\n                weaving and texturing. </p>\n            </li>\n            <li>\n              <h2 class=\"indent\">Our Vision</h2>\n              <p>Building an autonomous, AI powered ecosystem for interactive content creation which would drive a self fuelling marketplace for elements ranging from animations to full games </p>\n            </li>\n            <li>\n              <h2 class=\"indent\">History and Team</h2>\n              <p>Founded in 2015 by three college dropouts from Birla Institute of Technology & Science, Pilani to follow their passion with a vision of turning their dreams into reality. Today, Absentia consists of a highly skilled and\n                energetic team partnering with knowledge partners from across the globe. </p>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license - http://opensource.org/licenses/MIT\nCopyright (c) 2014 Daniel Eden\n*/\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s; }\n\n@-webkit-keyframes bounce {\n  0%, 20%, 53%, 80%, 100% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  40%, 43% {\n    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0); }\n  70% {\n    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n    transform: translate3d(0, -4px, 0); } }\n\n@keyframes bounce {\n  0%, 20%, 53%, 80%, 100% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  40%, 43% {\n    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0); }\n  70% {\n    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n    transform: translate3d(0, -4px, 0); } }\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom; }\n\n@-webkit-keyframes flash {\n  0%, 50%, 100% {\n    opacity: 1; }\n  25%, 75% {\n    opacity: 0; } }\n\n@keyframes flash {\n  0%, 50%, 100% {\n    opacity: 1; }\n  25%, 75% {\n    opacity: 0; } }\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse; }\n\n@-webkit-keyframes rubberBand {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1); }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1); }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1); }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1); }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes rubberBand {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1); }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1); }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1); }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1); }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand; }\n\n@-webkit-keyframes shake {\n  0%, 100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); } }\n\n@keyframes shake {\n  0%, 100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); } }\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake; }\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg); }\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg); }\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg); }\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg); }\n  100% {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg); } }\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg); }\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg); }\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg); }\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg); }\n  100% {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg); } }\n\n.swing {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing; }\n\n@-webkit-keyframes tada {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes tada {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes wobble {\n  0% {\n    -webkit-transform: none;\n    transform: none; }\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); }\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); }\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); }\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); }\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes wobble {\n  0% {\n    -webkit-transform: none;\n    transform: none; }\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); }\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); }\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); }\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); }\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble; }\n\n@-webkit-keyframes bounceIn {\n  0%, 20%, 40%, 60%, 80%, 100% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes bounceIn {\n  0%, 20%, 40%, 60%, 80%, 100% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s; }\n\n@-webkit-keyframes bounceInDown {\n  0%, 60%, 75%, 90%, 100% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInDown {\n  0%, 60%, 75%, 90%, 100% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown; }\n\n@-webkit-keyframes bounceInLeft {\n  0%, 60%, 75%, 90%, 100% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInLeft {\n  0%, 60%, 75%, 90%, 100% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft; }\n\n@-webkit-keyframes bounceInRight {\n  0%, 60%, 75%, 90%, 100% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInRight {\n  0%, 60%, 75%, 90%, 100% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight; }\n\n@-webkit-keyframes bounceInUp {\n  0%, 60%, 75%, 90%, 100% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes bounceInUp {\n  0%, 60%, 75%, 90%, 100% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp; }\n\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); } }\n\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); } }\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s; }\n\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown; }\n\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft; }\n\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight; }\n\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp; }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn; }\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n@-webkit-keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig; }\n\n@-webkit-keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft; }\n\n@-webkit-keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig; }\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight; }\n\n@-webkit-keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig; }\n\n@-webkit-keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp; }\n\n@-webkit-keyframes fadeInUpBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInUpBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig; }\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut; }\n\n@-webkit-keyframes fadeOutDown {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n@keyframes fadeOutDown {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown; }\n\n@-webkit-keyframes fadeOutDownBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n@keyframes fadeOutDownBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig; }\n\n@-webkit-keyframes fadeOutLeft {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n@keyframes fadeOutLeft {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft; }\n\n@-webkit-keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n@keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig; }\n\n@-webkit-keyframes fadeOutRight {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n@keyframes fadeOutRight {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight; }\n\n@-webkit-keyframes fadeOutRightBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n@keyframes fadeOutRightBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig; }\n\n@-webkit-keyframes fadeOutUp {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n@keyframes fadeOutUp {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp; }\n\n@-webkit-keyframes fadeOutUpBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n@keyframes fadeOutUpBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig; }\n\n@-webkit-keyframes flip {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  80% {\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; } }\n\n@keyframes flip {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  80% {\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; } }\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip; }\n\n@-webkit-keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transition-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transition-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n@keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transition-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transition-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX; }\n\n@-webkit-keyframes flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transition-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transition-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg); }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n@keyframes flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transition-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transition-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg); }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY; }\n\n@-webkit-keyframes flipOutX {\n  0% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n@keyframes flipOutX {\n  0% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important; }\n\n@-webkit-keyframes flipOutY {\n  0% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0; } }\n\n@keyframes flipOutY {\n  0% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0; } }\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s; }\n\n@-webkit-keyframes lightSpeedIn {\n  0% {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0; }\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes lightSpeedIn {\n  0% {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0; }\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out; }\n\n@-webkit-keyframes lightSpeedOut {\n  0% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0; } }\n\n@keyframes lightSpeedOut {\n  0% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0; } }\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in; }\n\n@-webkit-keyframes rotateIn {\n  0% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateIn {\n  0% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn; }\n\n@-webkit-keyframes rotateInDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft; }\n\n@-webkit-keyframes rotateInDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight; }\n\n@-webkit-keyframes rotateInUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft; }\n\n@-webkit-keyframes rotateInUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight; }\n\n@-webkit-keyframes rotateOut {\n  0% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0; } }\n\n@keyframes rotateOut {\n  0% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0; } }\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut; }\n\n@-webkit-keyframes rotateOutDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n            transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; } }\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft; }\n\n@-webkit-keyframes rotateOutDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight; }\n\n@-webkit-keyframes rotateOutUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft; }\n\n@-webkit-keyframes rotateOutUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0; } }\n\n@keyframes rotateOutUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0; } }\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight; }\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0; } }\n\n@keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0; } }\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes rollIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes rollIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes rollOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg); } }\n\n@keyframes rollOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg); } }\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut; }\n\n@-webkit-keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn; }\n\n@-webkit-keyframes zoomInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown; }\n\n@-webkit-keyframes zoomInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft; }\n\n@-webkit-keyframes zoomInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInRight {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight; }\n\n@-webkit-keyframes zoomInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp; }\n\n@-webkit-keyframes zoomOut {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n\n@keyframes zoomOut {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut; }\n\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown; }\n\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center; } }\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center; } }\n\n.zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft; }\n\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center; } }\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center; } }\n\n.zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight; }\n\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp; }\n\n.content.indent {\n  padding: 53px 0 0 0;\n  background: #ffffff; }\n\nh2.indent {\n  text-align: center;\n  margin: 0 0 27px 0;\n  padding-top: 21px;\n  position: relative;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n\nh2:after {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 46px;\n  height: 2px;\n  margin-left: -23px;\n  background: #412a58;\n  content: '';\n  z-index: 1; }\n\n.who-box .col-lg-4 {\n  margin-bottom: 25px; }\n\n.list4 {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-align: center; }\n  .list4 li {\n    font-size: 14px;\n    line-height: 1.428571429;\n    margin-bottom: 17px;\n    overflow: hidden; }\n    .list4 li p {\n      margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/pages/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/about/about.component.scss")]
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/pages/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/pages/auth/dialog/dialog.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, dialogService) {
        this.authService = authService;
        this.dialogService = dialogService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        if (!this.authService.authenticated) {
            return this.dialogService.show();
        }
        // return
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dialog_dialog_component__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dialog_dialog_component__["a" /* DialogService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"AuthContainer\">\n  <!--<img class=\"facebook\" src=\"/assets/images/Facebook.png\" alt=\"\">-->\n  <!--<img class=\"google\" src=\"/assets/images/Google+.png\" alt=\"\">-->\n  <!--<img class=\"twitter\" src=\"/assets/images/Twitter.png\" alt=\"\">-->\n  <div *ngIf=\"user\" (click)=\"logout()\" class=\"SignBtn\" id=\"logOutBtn\" type=\"button\">Log-Out     {{ user?.email }}</div>\n  <div *ngIf=\"!user\" class=\"sign-in\">\n    <!-- Trigger the modal with a button -->\n    <button type=\"button\" class=\"SignBtn\" (click)=\"authModal.show()\"><span>Login</span></button>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #authModal=\"bs-modal\"\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"reg\">\n      <h2>NORAH</h2>\n      <div class=\"sign\"\n           ngClass=\"{{state === 'login' ? 'active' : ''}}\"\n           (click)=\"switchForm('login')\">Sign In</div>\n      <div class=\"sign\"\n           ngClass=\"{{state !== 'login' ? 'active' : ''}}\"\n           (click)=\"switchForm('registration')\">Sign Up</div>\n      <form (submit)=\"signWithCredentials()\" novalidate [formGroup]=\"authForm\" class=\"login-form\">\n        <div class=\"form-group\">\n          <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n          <input formControlName=\"email\" autocomplete=\"false\" required email type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email ID\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n          <input formControlName=\"password\"\n                 required minlength=\"5\"\n                 maxlength=\"30\"\n                 type=\"password\"\n                 class=\"form-control\"\n                 id=\"inputPassword\"\n                 placeholder=\"Password\">\n        </div>\n\n        <button (click)=\"signWithCredentials()\"\n                [class]=\"'btn btn-default but SignBtn'\"\n                type=\"button\"\n                class=\"\"\n                id=\"loginBtn\">{{ state === 'login' ? 'Sign In' : 'Create account' }}</button>\n        <div *ngIf=\"state === 'login'\" class=\"divider\">OR</div>\n        <div *ngIf=\"state === 'login'\" id=\"firebaseui-auth-container\">\n          <button *ngFor=\"let provider of providers\" (click)=\"loginWithProvider(provider)\" class=\"SignBtn Button Button-{{provider}}\">\n            <img width=\"13px\" class=\"SocialIcon\" src=\"https://www.gstatic.com/firebasejs/ui/0.5.0/images/auth/{{provider.toLowerCase()}}.svg\">\n            <span>{{provider}}</span>\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/auth/auth.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".AuthContainer {\n  float: right;\n  background-color: #253443;\n  color: white; }\n\n.SignBtn {\n  padding: 10px 20px !important;\n  width: 100%;\n  margin-top: 10px;\n  margin-right: 20px;\n  font-weight: 400;\n  text-align: center;\n  border: 1px solid #008aff;\n  border-radius: 30px;\n  color: #fff;\n  background: #253443 none;\n  transition: all 0.2s ease-in-out;\n  font-size: 15px/68px \"Questrial\";\n  float: right; }\n  .SignBtn#loginBtn {\n    width: 40%;\n    margin-right: 0;\n    float: none;\n    font-size: 18px; }\n  .SignBtn i {\n    padding-right: 19%; }\n  .SignBtn:focus {\n    outline: 0;\n    box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25); }\n\n.UserEmail {\n  padding-top: 10px;\n  margin-right: 13% !important; }\n\n.log-Out {\n  padding-top: 10px; }\n\n.modal {\n  z-index: 1050;\n  width: 100%;\n  height: 100%;\n  transition: opacity 0.15s linear; }\n\n.modal.fade .modal-dialog {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n  transition: -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n  width: 750px;\n  margin: 10px auto; }\n\n.reg {\n  position: fixed;\n  background-color: #1f2933;\n  padding: 15% 15% 40px;\n  border-radius: 30px;\n  top: 85px;\n  z-index: 9999;\n  left: 55px;\n  width: 750px; }\n  .reg .img-logo {\n    width: 100%; }\n  .reg input {\n    border: none;\n    display: block;\n    width: 100%;\n    padding: 2.1rem 0.75rem;\n    line-height: 1.25;\n    color: #464a4c;\n    background-clip: padding-box;\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n    background-color: #32363a;\n    text-align: center;\n    border-radius: 30px;\n    font-size: 16px; }\n    .reg input:focus {\n      border: 2px solid #008aff; }\n  .reg h2 {\n    position: absolute;\n    top: 15px;\n    left: 32%;\n    color: white;\n    font-weight: 300;\n    font-size: 75px; }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n#firebaseui-auth-container {\n  position: relative; }\n\n.but1 {\n  display: inline-block;\n  padding: 6px 18.8%;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background: #E56381 none;\n  outline: none;\n  color: white; }\n  .but1:hover {\n    color: #333333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .but1:focus {\n    outline: 0;\n    box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25); }\n\n.login-form {\n  text-align: center;\n  padding-top: 100px; }\n  .login-form .new-animake {\n    margin-left: 30%;\n    font-size: 100%;\n    color: #e56381;\n    cursor: pointer;\n    width: 40%; }\n\n.but2 {\n  display: inline-block;\n  padding: 6px 5.8%;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: white;\n  background-color: #837B81; }\n\n.SocialContainer {\n  box-sizing: border-box;\n  color: #757575;\n  direction: ltr;\n  font: 16px Roboto, arial, sans-serif;\n  margin: 0 auto;\n  max-width: 360px;\n  overflow: hidden;\n  position: relative;\n  width: 100%; }\n  .SocialContainer-Card {\n    padding: 0 24px; }\n    .SocialContainer-Card .List {\n      list-style: none;\n      margin: 1em 0;\n      padding: 0; }\n      .SocialContainer-Card .List-Item {\n        text-align: center;\n        margin: 0 0 15px;\n        padding: 0; }\n        .SocialContainer-Card .List-Item .SocialIcon {\n          height: 18px;\n          width: 18px; }\n\n.Button {\n  direction: ltr;\n  font-weight: 500;\n  height: 40px;\n  max-width: 220px;\n  padding: 10px 15px !important;\n  text-align: left;\n  border: none;\n  margin-right: 0;\n  width: 31% !important;\n  float: left !important; }\n  .Button-Google {\n    background-color: #cc5b4d; }\n    .Button-Google span {\n      color: white; }\n  .Button-Facebook {\n    margin-right: 15px;\n    background-color: #3b5998; }\n    .Button-Facebook span {\n      color: #fff; }\n  .Button-Twitter {\n    margin-right: 15px;\n    background-color: #55acee; }\n    .Button-Twitter span {\n      color: #fff; }\n  .Button span {\n    font-size: 14px;\n    padding-left: 16px;\n    text-transform: none;\n    vertical-align: middle; }\n\n.facebook {\n  position: absolute;\n  right: 18%;\n  width: 38px;\n  top: 15%; }\n\n.google {\n  position: absolute;\n  right: 15%;\n  width: 38px;\n  top: 15%; }\n\n.twitter {\n  position: absolute;\n  right: 12%;\n  width: 38px;\n  top: 18%; }\n\n.sign {\n  width: 47%;\n  display: inline;\n  float: left;\n  text-align: center;\n  font-size: 30px;\n  color: white; }\n  .sign.active {\n    color: #008aff; }\n\n.divider {\n  margin: 30px 0;\n  color: white;\n  font-size: 20px; }\n  .divider::before {\n    content: '';\n    border-bottom: 2px solid ghostwhite;\n    position: absolute;\n    height: 5px;\n    width: 30%;\n    bottom: 133px;\n    left: 115px; }\n  .divider::after {\n    content: '';\n    border-bottom: 2px solid ghostwhite;\n    position: absolute;\n    height: 5px;\n    width: 30%;\n    bottom: 133px;\n    right: 115px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/pages/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthComponent = (function () {
    function AuthComponent(formBuilder, authService, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.providers = ['Facebook', 'Twitter', 'Google'];
        this.state = 'login';
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* NavigationStart */]) {
                var path = event.url;
            }
        });
        this.authForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('')
        });
        this.authService.currentState.subscribe(function (state) {
            _this.user = state !== null ? state.auth : null;
        });
    }
    Object.defineProperty(AuthComponent.prototype, "email", {
        get: function () {
            return this.authForm.value.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthComponent.prototype, "password", {
        get: function () {
            return this.authForm.value.password;
        },
        enumerable: true,
        configurable: true
    });
    AuthComponent.prototype.switchForm = function (state) {
        this.state = state;
    };
    AuthComponent.prototype.signWithCredentials = function () {
        this.state === 'login' ?
            this.authService.login({ email: this.email, password: this.password }) :
            this.authService.signWithCredentials({ email: this.email, password: this.password });
    };
    AuthComponent.prototype.loginWithProvider = function (provider) {
        switch (provider) {
            case 'Google':
                this.authService.loginWithGoogle();
                break;
            case 'Facebook':
                this.authService.loginWithFacebook();
                break;
            case 'Twitter':
                this.authService.loginWithTwitter();
        }
    };
    AuthComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return AuthComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"]) === "function" && _a || Object)
], AuthComponent.prototype, "showModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('authModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* ModalDirective */]) === "function" && _b || Object)
], AuthComponent.prototype, "authModal", void 0);
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/pages/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/auth/auth.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _e || Object])
], AuthComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_component__ = __webpack_require__("../../../../../src/app/pages/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard_service__ = __webpack_require__("../../../../../src/app/pages/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_service__ = __webpack_require__("../../../../../src/app/pages/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/pages/auth/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dialog_dialog_component__["b" /* DialogComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["d" /* NgbModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_4_environments_environment__["a" /* environment */].firebase)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_9__dialog_dialog_component__["a" /* DialogService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__auth_component__["a" /* AuthComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9__dialog_dialog_component__["b" /* DialogComponent */]]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.currentState = afAuth.map(function (state) {
            _this.currentUser = state !== null ? state.auth : null;
            return state;
        });
    }
    AuthService.prototype.login = function (auth) {
        var loginConfig = {
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["e" /* AuthMethods */].Password,
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["f" /* AuthProviders */].Password
        };
        this.afAuth.login({ email: auth.email, password: auth.password }, loginConfig).then(function () { return location.reload(); });
    };
    AuthService.prototype.signWithCredentials = function (auth) {
        this.afAuth.createUser({ email: auth.email, password: auth.password });
    };
    AuthService.prototype.loginWithGoogle = function () {
        this.afAuth.login({
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["e" /* AuthMethods */].Redirect,
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["f" /* AuthProviders */].Google
        });
    };
    AuthService.prototype.loginWithFacebook = function () {
        this.afAuth.login({
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["e" /* AuthMethods */].Redirect,
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["f" /* AuthProviders */].Facebook
        });
    };
    AuthService.prototype.loginWithTwitter = function () {
        this.afAuth.login({
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["e" /* AuthMethods */].Redirect,
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["f" /* AuthProviders */].Twitter
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.afAuth.logout().then(function () {
            _this.router.navigate(['/']);
            location.reload();
        });
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.currentUser !== null;
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/auth/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" style=\"display: block; opacity: 1;\"\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"reg\">\n      <img src=\"/assets/images/blank_modal.png\" alt=\"logo\" class=\"img-logo img responsive\">\n      <form novalidate [formGroup]=\"authForm\" class=\"login-form\">\n        <div class=\"form-group\">\n          <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n          <input formControlName=\"email\" required email type=\"email\" class=\"form-control\" id=\"inputEmail\"\n                 placeholder=\"ENTER EMAIL ID\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n          <input formControlName=\"password\"\n                 required minlength=\"5\"\n                 maxlength=\"30\"\n                 type=\"password\"\n                 class=\"form-control\"\n                 id=\"inputPassword\"\n                 placeholder=\"ENTER PASSWORD\">\n        </div>\n        <div class=\"form-group\">\n          <label\n            class=\"form-control\"\n            placeholder=\"ENTER PASSWORD\"></label>\n        </div>\n\n        <button (click)=\"signWithCredentials()\"\n                [class]=\"'btn btn-default but' + (state === 'login' ? '1' : '2')\"\n                type=\"button\"\n                id=\"loginBtn\">{{ state === 'login' ? 'Log-in' : 'Create account' }}\n        </button>\n        <div *ngIf=\"state === 'login'\" id=\"firebaseui-auth-container\">\n          <div class=\"SocialContainer\">\n            <div class=\"SocialContainer-Card\">\n              <ul class=\"SocialContainer-Card List\">\n                <li *ngFor=\"let provider of providers\" class=\"List-Item\">\n                  <button (click)=\"loginWithProvider(provider)\" class=\"Button Button-{{provider}}\">\n                    <img class=\"SocialIcon\"\n                         src=\"https://www.gstatic.com/firebasejs/ui/0.5.0/images/auth/{{provider.toLowerCase()}}.svg\">\n                    <span>Sign in with {{provider}}</span>\n                  </button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <br>\n        <br>\n        <p (click)=\"switchForm()\"\n           align=\"center\"\n           class=\"new-animake\">{{ state === 'login' ? 'Sign-up' : 'Already registered?' }}</p>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/auth/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/pages/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogComponent = (function () {
    function DialogComponent(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.authForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('')
        });
    }
    Object.defineProperty(DialogComponent.prototype, "email", {
        get: function () {
            return this.authForm.value.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogComponent.prototype, "password", {
        get: function () {
            return this.authForm.value.password;
        },
        enumerable: true,
        configurable: true
    });
    DialogComponent.prototype.switchForm = function () {
        this.state === 'login' ? this.state = 'registration' : this.state = 'login';
    };
    DialogComponent.prototype.signWithCredentials = function () {
        this.state === 'login' ?
            this.authService.login({ email: this.email, password: this.password }) :
            this.authService.signWithCredentials({ email: this.email, password: this.password });
    };
    DialogComponent.prototype.loginWithProvider = function (provider) {
        switch (provider) {
            case 'Google':
                this.authService.loginWithGoogle();
                break;
            case 'Facebook':
                this.authService.loginWithFacebook();
                break;
            case 'Twitter':
                this.authService.loginWithTwitter();
        }
    };
    DialogComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return DialogComponent;
}());
DialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__("../../../../../src/app/pages/auth/dialog/dialog.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], DialogComponent);

var DialogService = (function () {
    function DialogService(modalService) {
        this.modalService = modalService;
    }
    DialogService.prototype.show = function () {
        var modalRef = this.modalService.open(DialogComponent);
        return modalRef.result;
    };
    return DialogService;
}());
DialogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _c || Object])
], DialogService);

var _a, _b, _c;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/char-maker/char-maker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/char-maker/char-maker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main_wapper wrapper\">\n<!--Lest Sidebar-->\n   <form #saveRange=\"ngForm\" id=\"saveRanges\" >\n         <div id=\"Sidebar\">\n            <div id=\"integration-list\">\n               <ul>\n                  <li>\n                     <div class=\"integration-slider\">\n                        <div class=\"range-slider square\">\n                          <nouislider [connect]=\"true\" name=\"baseParams\" [(ngModel)]=\"BaseParams\" [config]=\"someKeyboardConfig\" (change)=\"saveBaseParamRange('base',$event)\"></nouislider>\n                        </div>\n\n                        <a class=\"expand\">\n                           <div class=\"right-arrow\">▼</div>\n                           <div>\n                              <h2>Base Parameters</h2>\n                           </div>\n                        </a>\n                        <div class=\"detail\" style=\"display: none;\">\n                           <div class=\"Parameters_Content\">\n                              <ul>\n                                 <li>\n                                    <div class=\"Parameters_Content_Title\">Height</div>\n                                   <nouislider [connect]=\"true\" name=\"Height\"  [(ngModel)]=\"Height\" [config]=\"someKeyboardConfig\" (change)=\"saveBaseParamRange('height',$event)\"></nouislider>\n                                 </li>\n                                 <li>\n                                    <div class=\"Parameters_Content_Title\">Weight</div>\n                                   <nouislider [connect]=\"true\"  name=\"Weight\" [(ngModel)]=\"Weight\" [config]=\"someKeyboardConfig\" (change)=\"saveBaseParamRange('weight',$event)\"></nouislider>\n                                 </li>\n                              </ul>\n                           </div>\n                        </div>\n                     </div>\n                  </li>\n                  <li>\n                     <div class=\"expand-box\">\n                        <ul>\n                           <li></li>\n                           <li></li>\n                           <li></li>\n                        </ul>\n                     </div>\n                     <a class=\"expand\">\n                        <div class=\"right-arrow\">▼</div>\n                        <h2 class=\"t-white\">Ethnicity</h2>\n                     </a>\n                     <div class=\"detail\" style=\"display: none;\">\n                        <div class=\"Parameters_Content text-blue m-cutom\">\n                           <ul>\n                              <li>\n                                 <div class=\"Parameters_Content_Title m-custom\">Asian</div>\n                                 <nouislider [connect]=\"true\" name=\"Asian\" [(ngModel)]=\"Asian\" [config]=\"someKeyboardConfig\" (change)=\"saveBaseParamRange('asian',$event)\"></nouislider>\n                              </li>\n                              <li>\n                                 <div class=\"Parameters_Content_Title m-custom\">African</div>\n                                <nouislider [connect]=\"true\" name=\"African\"  [(ngModel)]=\"African\" [config]=\"someKeyboardConfig\" (change)=\"saveBaseParamRange('african',$event)\"></nouislider>\n                              </li>\n                              <li>\n                                 <div class=\"Parameters_Content_Title m-custom\">Caucasian</div>\n                                 <nouislider [connect]=\"true\" name=\"Caucasian\"  [(ngModel)]=\"Caucasian\" [config]=\"someKeyboardConfig\" (change)=\"saveBaseParamRange('caucasian',$event)\"></nouislider>\n                              </li>\n                              <li class=\"sex-r-slider\">\n                                 <div class=\"integration-slider\">\n                                    <a>\n                                       <h2>Sex</h2>\n                                       <nouislider [connect]=\"true\" name=\"Sex\" [(ngModel)]=\"Sex\" [config]=\"someKeyboardConfig\" (change)=\"saveBaseParamRange('sex',$event)\"></nouislider>\n                                 </a>\n                                 </div>\n                              </li>\n                           </ul>\n                        </div>\n                     </div>\n                  </li>\n               </ul>\n            </div>\n            <div class=\"part-styler\">\n               <ul>\n                  <li>\n                     <div class=\"integration-slider\">\n                        <div class=\"move-arrow\">\n                           <a href=\"#\"><i class=\"fa fa-minus\"></i></a>\n                           <a href=\"#\"><i class=\"fa fa-plus\"></i></a>\n                        </div>\n                        <a class=\"expand\">\n                           <div class=\"right-arrow\">▼</div>\n                           <div>\n                              <h2>Part Styler</h2>\n                           </div>\n                        </a>\n                        <div class=\"detail b-none\" style=\"display: none;\">\n                           <div class=\"Parameters_object\">\n                              <img src=\"assets/images/object-1.jpg\" alt=\"\">\n                              <div class=\"upload\">\n                              <a href=\"#\"><img src=\"assets/images/recycling.png\" alt=\"\"></a>\n                              <div style=\"display: none\">\n                              <input type=\"file\" [(ngModel)]=\"sanitizedInput\" name=\"sanitizedInput\" />{{sanitizedOutput}}\n                              <input type=\"file\" [(ngModel)]=\"sanitizedOutput\" name=\"sanitizedOutput\" />\n                              </div>\n                               <input type=\"button\" name=\"save\" class=\"upload-btn\" value=\"Upload\" (click)=\"saveRanges()\">\n                               </div>\n                           </div>\n                        </div>\n                     </div>\n                  </li>\n               </ul>\n            </div>\n        \n         </div>\n   </form>\n         <!--Lest Sidebar-->\n         <!--Container-->\n         <div id=\"content-wrapper\">\n            <div class=\"object-container\">\n               <div class=\"object-container-in\">\n                  <div class=\"object-container-l\">\n                     <div class=\"block\"></div>\n                     <div class=\"block\"></div>\n                     <div class=\"block\"></div>\n                     <div class=\"block\"></div>\n                  </div>\n                  <div class=\"object-img-container object-fix\">\n                     <div class=\"block block-object\">\n                        <span class=\"helper\"></span>\n                        <img src=\"assets/images/object-2.png\" alt=\"\">\n                     </div>\n                  </div>\n                  <div class=\"object-container-l\">\n                     <div class=\"block\"></div>\n                     <div class=\"block\"></div>\n                     <div class=\"block\"></div>\n                     <div class=\"block\"></div>\n                  </div>\n               </div>\n            </div>\n         </div>\n         <!--Container-->         \n         <!--Right Sidebar-->\n         <div id=\"RSidebar\">\n            <h1>Eyes</h1>\n            <div class=\"rsidebar-block\">\n               <div class=\"rangeSlider_block\">\n                  <div class=\"block\"></div>\n                 <!--  <nouislider [min]=\"0\" [max]=\"15\" [step]=\"0.05\" [(ngModel)]=\"someValue\" (change)=\"saveRange($event)\" [disabled]=\"disabled\"></nouislider> -->\n               </div>\n               <div class=\"rangeSlider_block\">\n                  <div class=\"block\"></div>\n                 <!--  <nouislider [min]=\"0\" [max]=\"15\" [step]=\"0.05\" [(ngModel)]=\"someValue\" (change)=\"saveRange($event)\" [disabled]=\"disabled\"></nouislider> -->\n               </div>\n               <div class=\"rangeSlider_block\">\n                  <div class=\"block\"></div>\n                 <!--  <nouislider [min]=\"0\" [max]=\"15\" [step]=\"0.05\" [(ngModel)]=\"someValue\" (change)=\"saveRange($event)\" [disabled]=\"disabled\"></nouislider> -->\n               </div>\n               <div class=\"rangeSlider_block\">\n                  <div class=\"block\"></div>\n                  <!--  <nouislider [min]=\"0\" [max]=\"15\" [step]=\"0.05\" [(ngModel)]=\"someValue\" (change)=\"saveRange($event)\" [disabled]=\"disabled\"></nouislider> -->\n               </div>\n               <div class=\"rangeSlider_block\">\n                  <div class=\"block\"></div>\n                   <!--  <nouislider [min]=\"0\" [max]=\"15\" [step]=\"0.05\" [(ngModel)]=\"someValue\" (change)=\"saveRange($event)\" [disabled]=\"disabled\"></nouislider> -->\n               </div>\n               <div class=\"rangeSlider_block\">\n                  <div class=\"block\"></div>\n                    <!--  <nouislider [min]=\"0\" [max]=\"15\" [step]=\"0.05\" [(ngModel)]=\"someValue\" (change)=\"saveRange($event)\" [disabled]=\"disabled\"></nouislider> -->\n               </div>\n               <div class=\"rangeSlider_block\">\n                  <div class=\"block\"></div>\n                    <!--  <nouislider [min]=\"0\" [max]=\"15\" [step]=\"0.05\" [(ngModel)]=\"someValue\" (change)=\"saveRange($event)\" [disabled]=\"disabled\"></nouislider> -->\n               </div>\n               <div class=\"rangeSlider_block\">\n                  <div class=\"block\"></div>\n                    <!--  <nouislider [min]=\"0\" [max]=\"15\" [step]=\"0.05\" [(ngModel)]=\"someValue\" (change)=\"saveRange($event)\" [disabled]=\"disabled\"></nouislider> -->\n               </div>\n            </div>\n         </div>\n         <!--Right Sidebar-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/char-maker/char-maker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharMakerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//var express = require('express'); 
var CharMakerComponent = (function () {
    function CharMakerComponent(_http, sanitizer) {
        this._http = _http;
        this.sanitizer = sanitizer;
        this.hideFooter = false;
        this.someMin = 1;
        this.someLimit = 50;
        this.inputUrl = "assets/data/input.json";
        this.OutputUrl = "assets/data/output.json";
        this.BaseParams = [0, 1];
        this.Height = [0, 1];
        this.Weight = [0, 1];
        this.Asian = [0, 1];
        this.African = [0, 1];
        this.Caucasian = [0, 1];
        this.Sex = [0, 1];
        this.someRange2config = {
            behaviour: 'drag',
            connect: true,
            margin: 1,
            limit: 5,
            range: {
                min: 0,
                max: 20
            },
            pips: {
                mode: 'steps',
                density: 5
            }
        };
        this.someKeyboardConfig = {
            behaviour: 'drag',
            connect: true,
            start: [0, 3],
            keyboard: true,
            step: 0.1,
            pageSteps: 10,
            range: {
                min: 0.0,
                max: 1.0
            },
            pips: {
                mode: 'count',
                density: 1,
                values: 1,
                stepped: true
            }
        };
        // this.getInput();
        // this.getOutput();
    }
    CharMakerComponent.prototype.ngOnInit = function () {
        $(function () {
            setTimeout(function () {
                $(".expand").trigger('click');
            }, 500);
            $(".expand").on("click", function () {
                $(this).next().slideToggle(200);
                var $expand = $(this).find(">:first-child");
                if ($expand.text() == "▼") {
                    $expand.text("►");
                }
                else {
                    $expand.text("▼");
                }
            });
        });
    };
    //  getInput(){
    //          return this._http.get(this.inputUrl)
    //            .map(res => res.json())
    //            .catch(this.errorHandler)
    //            .subscribe(
    //             data => {
    //               this.inputRes = data;
    //               this.inputBaseParam = this.inputRes[0].Input.BaseParam;
    //               this.inputHeight = this.inputRes[0].Input.Height;
    //               this.inputWeight = this.inputRes[0].Input.Weight;
    //               this.inputAsian = this.inputRes[0].Input.Asian;
    //               this.inputAfrican = this.inputRes[0].Input.African;
    //               this.inputCaucasian = this.inputRes[0].Input.Caucasian;
    //               this.inputSex = this.inputRes[0].Input.Sex;
    //             },
    //             err => {
    //                 console.log(err);
    //             })
    //      }
    // getOutput(){
    //          return this._http.get(this.OutputUrl)
    //            .map(res => res.json())
    //            .catch(this.errorHandler)
    //            .subscribe(
    //             data => {
    //               this.outputRes = data; this.outputRes = data;
    //               this.outputBaseParam = this.outputRes[0].Output.BaseParam;
    //               this.outputHeight = this.outputRes[0].Output.Height;
    //               this.outputWeight = this.outputRes[0].Output.Weight;
    //               this.outputAsian = this.outputRes[0].Output.Asian;
    //               this.outputAfrican = this.outputRes[0].Output.African;
    //               this.outputCaucasian = this.outputRes[0].Output.Caucasian;
    //               this.outputSex = this.outputRes[0].Output.Sex;
    //             },
    //             err => {
    //                 console.log(err);
    //             })
    //      }
    CharMakerComponent.prototype.saveBaseParamRange = function (slider, value) {
        console.log('Value of slider ' + slider + ' changed to', value);
    };
    CharMakerComponent.prototype.saveRanges = function (saveRange) {
        this.inputRes = {
            "Input": {
                BaseParam: this.BaseParams[0],
                Height: this.Height[0],
                Weight: this.Weight[0],
                Asian: this.Asian[0],
                African: this.African[0],
                Sex: this.Sex[0]
            }
        };
        this.outputRes = {
            "Output": {
                BaseParam: this.BaseParams[1],
                Height: this.Height[1],
                Weight: this.Weight[1],
                Asian: this.Asian[1],
                African: this.African[1],
                Caucasian: this.Caucasian[1],
                Sex: this.Sex[1]
            }
        };
        var inputjson = JSON.stringify(this.inputRes);
        var outputjson = JSON.stringify(this.outputRes);
        var blobinput = new Blob([inputjson], { type: "application/json" });
        var bloboutput = new Blob([outputjson], { type: "application/json" });
        var form = new FormData();
        form.append("input", blobinput, "input.json");
        form.append("output", bloboutput, "output.json");
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var request = new XMLHttpRequest();
        request.open("POST", "http://192.168.1.114:3000/users/abc");
        request.send(form);
    };
    CharMakerComponent.prototype.errorHandler = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error || "Server error");
    };
    return CharMakerComponent;
}());
CharMakerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-char-maker',
        template: __webpack_require__("../../../../../src/app/pages/char-maker/char-maker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/char-maker/char-maker.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], CharMakerComponent);

var _a, _b;
//# sourceMappingURL=char-maker.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"zodiac_box\">\n  <div class=\"\" style=\"position:relative; padding-bottom: 250px\">\n    <app-logo></app-logo>\n    <div [routerLink]=\"['auto-rigger']\" class=\"box box1 wow fadeInUp\" data-wow-delay=\"0.3s\">\n      <strong><br>AUTO RIGGER</strong>\n    </div>\n    <div [routerLink]=\"['repository']\" class=\"box box2 wow fadeInUp\" data-wow-delay=\"0.2s\">\n      <strong><br>ANIMATION REPOSITORY</strong>\n    </div>\n    <div [routerLink]=\"['style-transfer']\" class=\"box box3 wow fadeInUp\" data-wow-delay=\"0.1s\">\n      <strong><br>STYLE TRANSFER TOOL</strong>\n    </div>\n    <div [routerLink]=\"['motion-editor']\" class=\"box box4 wow fadeInUp\">\n      <strong><br>MOTION EDITOR</strong>\n    </div>\n  </div>\n</div>\n<img src=\"assets/images/1-01.png\" alt=\"\">\n<img src=\"assets/images/1-02.png\" alt=\"\">\n<img src=\"assets/images/1-03.png\" alt=\"\">\n<img src=\"assets/images/1-04.png\" alt=\"\">\n<!--<div class=\"zodiac_box secondary\">-->\n  <!--<div class=\"\" style=\"position:relative;\">-->\n    <!--<div class=\"box box1 wow fadeInUp\" data-wow-delay=\"0.3s\">-->\n        <!--3D MODELLING TOOL-->\n      <!--<p>( yet to launch )</p>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n<!--<div class=\"zodiac_box secondary\">-->\n  <!--<div class=\"\" style=\"position:relative;\">-->\n    <!--<div class=\"box box1 wow fadeInUp\" data-wow-delay=\"0.3s\">-->\n        <!--GAME MAKER-->\n      <!--<p>( yet to launch )</p>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".zodiac_box {\n  margin: 0 70px;\n  overflow: hidden;\n  background: #202a34;\n  text-align: center; }\n  .zodiac_box .box {\n    font-size: 14px;\n    width: 240px;\n    height: 240px;\n    border: 1px solid grey;\n    background-color: #1f2933;\n    display: inline-block;\n    position: relative;\n    -webkit-animation-name: fadeInUp;\n            animation-name: fadeInUp;\n    padding-top: 190px; }\n    .zodiac_box .box:hover {\n      background-color: #19354c;\n      border: 1px solid #008aff;\n      box-shadow: 0 8px 20px 0 black; }\n    .zodiac_box .box.box1 {\n      -webkit-animation-delay: 0.3s;\n              animation-delay: 0.3s;\n      background: url(\"https://norahanimation.firebaseapp.com/assets/images/2-01.png\") no-repeat center; }\n      .zodiac_box .box.box1:hover {\n        background: url(\"https://norahanimation.firebaseapp.com/assets/images/1-01.png\") no-repeat center; }\n    .zodiac_box .box.box2 {\n      -webkit-animation-delay: 0.2s;\n              animation-delay: 0.2s;\n      background: url(\"https://norahanimation.firebaseapp.com/assets/images/2-02.png\") no-repeat center; }\n      .zodiac_box .box.box2:hover {\n        background: url(\"https://norahanimation.firebaseapp.com/assets/images/1-02.png\") no-repeat center; }\n    .zodiac_box .box.box3 {\n      -webkit-animation-delay: 0.1s;\n              animation-delay: 0.1s;\n      background: url(\"https://norahanimation.firebaseapp.com/assets/images/2-03.png\") no-repeat center; }\n      .zodiac_box .box.box3:hover {\n        background: url(\"https://norahanimation.firebaseapp.com/assets/images/1-03.png\") no-repeat center; }\n    .zodiac_box .box.box4 {\n      background: url(\"https://norahanimation.firebaseapp.com/assets/images/2-04.png\") no-repeat center; }\n      .zodiac_box .box.box4:hover {\n        background: url(\"https://norahanimation.firebaseapp.com/assets/images/1-04.png\") no-repeat center; }\n    .zodiac_box .box > div {\n      background: inherit;\n      padding: 45px 35px 0 35px;\n      display: block;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n      position: absolute;\n      top: 0;\n      left: 0;\n      -webkit-transform: translateY(0) translateX(0) scale(0.25);\n              transform: translateY(0) translateX(0) scale(0.25);\n      transition: all 0.35s;\n      opacity: 0;\n      filter: alpha(opacity=0); }\n      .zodiac_box .box > div h3 {\n        color: #a17dbc; }\n      .zodiac_box .box > div p {\n        top: 50%;\n        color: #a17dbc; }\n    .zodiac_box .box figure img {\n      width: 55%;\n      margin-top: -6%; }\n    .zodiac_box .box strong {\n      font: 14px 'Questrial';\n      color: #ffffff;\n      letter-spacing: 3px;\n      text-transform: uppercase;\n      text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3); }\n    .zodiac_box .box:hover > div {\n      -webkit-transform: translateY(0) translateX(0) scale(1);\n              transform: translateY(0) translateX(0) scale(1);\n      transition: all 0.35s;\n      opacity: 1;\n      filter: alpha(opacity=100); }\n    .zodiac_box .box:hover > strong {\n      color: #008aff; }\n  .zodiac_box.secondary {\n    margin-top: 0;\n    background: #1f2933;\n    border: 0 !important; }\n    .zodiac_box.secondary .box {\n      width: calc(90% + 20px) !important;\n      height: 380px;\n      border: 2px solid #1f2933;\n      background-color: #19354c;\n      color: white;\n      font-size: 38px;\n      vertical-align: middle;\n      padding-top: 150px; }\n      .zodiac_box.secondary .box p {\n        font-size: 22px; }\n    .zodiac_box.secondary:hover {\n      border: 0; }\n\nimg {\n  position: absolute;\n  top: -2000px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min_js__ = __webpack_require__("../../../../wowjs/dist/wow.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        new __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min_js__["WOW"]().init();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.scss")]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_logo_component__ = __webpack_require__("../../../../../src/app/pages/logo/logo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__logo_logo_component__["a" /* LogoComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
        ],
        providers: []
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo_box\">\n  <h1 class=\"navbar-brand navbar-brand_\">\n    <a [routerLink]=\"['']\">\n      <div>NORAH</div>\n      <div class=\"secondary\">AI DEFINING GAME DEVELOPMENT</div>\n    </a>\n  </h1>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/logo/logo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1.navbar-brand_ {\n  margin: 0 0 44px 0;\n  padding: 0;\n  float: none;\n  height: auto;\n  position: relative;\n  display: inline-block; }\n  h1.navbar-brand_ a img {\n    width: 48%; }\n\n.navbar-brand {\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n\n.navbar {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.logo_box {\n  text-align: center;\n  padding: 54px 0 0 0;\n  background: #202a34; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LogoComponent = (function () {
    function LogoComponent() {
    }
    return LogoComponent;
}());
LogoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logo',
        template: __webpack_require__("../../../../../src/app/pages/logo/logo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/logo/logo.component.scss")]
    })
], LogoComponent);

//# sourceMappingURL=logo.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/repository/repository.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" container-fluid zodiac_box zodiac_box_repos\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 col-xs-4 leftSideBar\">\n      <ul class=\"nav nav-pills nav-stacked menuS\">\n\n        <li *ngFor=\"let tag of tags\" class=\"presentation\">\n          <a>{{tag.key}}</a>\n          <ul class=\"nav nav-pills nav-stacked subMenuS\" ngClass=\"{{tag.tags.length > 9 ? 'scroll' : ''}}\">\n            <li *ngFor=\"let subCat of tag.tags\" class=\"subManuLi\">\n              <a (click)=\"addTag(subCat)\">{{subCat}}</a>\n            </li>\n          </ul>\n        </li>\n\n      </ul>\n\n    </div>\n\n    <div class=\"col-sm-9 col-xs-8 zodiacCont\" *ngIf=\"displayAnimations\">\n      <div *ngFor=\"let animation of displayAnimations.slice((page - 1) * 15 , (page - 1) * 15 + 15)\" class=\"box-video fadeInUp clust\">\n\n        <div style=\"z-index: 111;\">\n        <a class=\"newwwww\" (click)=\"addVideo(animation)\"><i class=\"fa fa-plus-circle fa-2x\" aria-hidden=\"true\"></i></a>\n        <a href=\"{{animation.animUrl}}\" class=\"download-anim\"><i class=\"fa fa-download fa-2x\" aria-hidden=\"true\"></i></a>\n          <div class=\"animation-name\">{{animation.name}}</div>\n        </div>\n        <video autoplay loop muted src=\"{{animation.mp4Url}}\">\n\n        </video>\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"row\" *ngIf=\"animations?.length\">\n    <div class=\"col-lg-6 col-lg-offset-4\">\n            <ngb-pagination [collectionSize]=\"displayAnimations?.length\" [(page)]=\"page\" (pageChange)=\"setPage($event)\" [maxSize]=\"15\" [rotate]=\"true\" [boundaryLinks]=\"true\">\n\n            </ngb-pagination>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/repository/repository.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #202a34; }\n\n.zodiac_box {\n  overflow: hidden;\n  background: #202a34;\n  text-align: center;\n  padding: 0;\n  min-height: 800px;\n  font-family: 'Questrial', sans-serif; }\n\n.leftSideBar {\n  background-color: #253443;\n  margin-top: -80px;\n  padding: 10px 0;\n  width: 310px;\n  height: 620px;\n  margin-left: 40px; }\n  .leftSideBar ul li {\n    background-color: #253443;\n    position: relative; }\n    .leftSideBar ul li a {\n      color: #DCD7E0;\n      border-radius: 0; }\n\n.nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n  background-color: #008aff !important; }\n\n.nav > li > a:hover, .nav > li > a:focus {\n  text-decoration: none;\n  background-color: #008aff !important; }\n\n.subMenuS {\n  z-index: 9999;\n  float: right;\n  position: absolute;\n  overflow-y: scroll;\n  margin-left: 70%;\n  margin-top: -13%;\n  width: 100%;\n  height: 0; }\n  .subMenuS.scroll::-webkit-scrollbar {\n    width: 7px;\n    height: 8px;\n    background-color: #aaa; }\n  .subMenuS.scroll::-webkit-scrollbar-thumb {\n    background: #000; }\n  .subMenuS li {\n    display: none;\n    width: 70%;\n    z-index: 9999;\n    margin-top: -14%;\n    background-color: #1f2933 !important;\n    opacity: 0.7;\n    float: right;\n    cursor: pointer; }\n\nli.presentation:hover .subMenuS {\n  height: 320px; }\n  li.presentation:hover .subMenuS .subManuLi {\n    display: block;\n    margin-top: 0; }\n    li.presentation:hover .subMenuS .subManuLi::-webkit-scrollbar {\n      -webkit-appearance: scrollbartrack-vertical; }\n\n.menuS li {\n  position: relative; }\n  .menuS li:hover .subMenuS li {\n    display: block; }\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px; }\n\n.menuS li:hover .subMenuS li {\n  display: block; }\n\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0; }\n\n.pagination > li > a, .pagination > li > span {\n  background-colo: #253443 !important;\n  color: darkgrey;\n  border: 1px solid #1f2933; }\n\n.menuS {\n  padding-top: 70px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/repository/repository.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_ref__ = __webpack_require__("../../../../../src/app/global-ref.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__repository_service__ = __webpack_require__("../../../../../src/app/pages/repository/repository.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RepositoryComponent = (function () {
    function RepositoryComponent(repService, global) {
        var _this = this;
        this.repService = repService;
        this.global = global;
        this.animations = [];
        this.displayAnimations = [];
        this.page = 1;
        repService.unselectedTags$.subscribe(function (tag) {
            _this.removeTag(tag);
        });
    }
    RepositoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var arr = [];
        this.animations = arr;
        this.displayAnimations = arr;
        this.selectedTags = [];
        this.repService.page$.next(500);
        this.repService.animations.subscribe(function (result) {
            result.forEach(function (animation) {
                arr.push(animation);
                _this.repService.animationsFiles(animation.name)
                    .then(function (urls) {
                    animation.animUrl = urls.animURL;
                    animation.mp4Url = urls.mp4URL;
                });
            });
        });
        this.repService.tags.subscribe(function (tags) {
            _this.tags = tags.map(function (tag) {
                delete tag.$exists;
                var store = [];
                for (var i in tag) {
                    if (i !== '$key') {
                        store.push(tag[i]);
                    }
                }
                return { key: tag['$key'], tags: store };
            });
        });
    };
    RepositoryComponent.prototype.setPage = function (page) {
        this.repService.page$.next(page * 8 || 8);
    };
    RepositoryComponent.prototype.addTag = function (tag) {
        if (!this.selectedTags.includes(tag)) {
            this.selectedTags.push(tag);
            this.repService.addTag(tag);
        }
        this.filterAnimations();
    };
    RepositoryComponent.prototype.removeTag = function (tag) {
        this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
        this.filterAnimations();
    };
    RepositoryComponent.prototype.filterAnimations = function () {
        var selectedTags = this.selectedTags;
        var arrayLength = selectedTags.length;
        var anim_final = [];
        if (arrayLength > 0 && !__WEBPACK_IMPORTED_MODULE_2_jquery__["isEmptyObject"](this.animations)) {
            this.animations.forEach(function (anim) {
                var count = 0;
                for (var t in anim['tags']) {
                    for (var i = 0; i < arrayLength; i++) {
                        if (t === selectedTags[i]) {
                            count++;
                        }
                    }
                }
                if (count === arrayLength) {
                    anim_final.push(anim);
                }
            });
        }
        else {
            return;
        }
        this.displayAnimations = anim_final;
    };
    RepositoryComponent.prototype.checkTag = function (tag, array) {
        var a = array.filter(function (item) { return item.tags[tag]; });
        return a.length === array.length;
    };
    RepositoryComponent.prototype.addVideo = function (animation) {
        var wnd = this.global.nativeGlobal;
        var toastr = wnd.toastr;
        var download = wnd.download;
        if (__WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser) {
            var animName_1 = animation.name;
            var duration_1 = animation.duration;
            var displayName_1 = animation.displayName;
            var userId_1 = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid;
            console.log('UID' + userId_1);
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('usernames').child(userId_1).child('mylibrary').once('value', function (snap) {
                var libraryItems = snap.val();
                var exists = false;
                console.log(libraryItems);
                libraryItems && Object.keys(libraryItems).forEach(function (itemKey) {
                    exists = exists || (libraryItems[itemKey]['name'] === animName_1);
                });
                if (!exists) {
                    var newObjRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('usernames').child(userId_1).child('mylibrary/').push();
                    var storageBucket = __WEBPACK_IMPORTED_MODULE_1_firebase__["app"]().options.storageBucket;
                    var animMp4Name = 'mp4Files/' + animName_1 + '.mp4';
                    var mp4Url = "https://firebasestorage.googleapis.com/v0/b/" + storageBucket + "/o/" + encodeURIComponent(animMp4Name) + "?alt=media";
                    var animFileName = 'animFiles/' + animName_1 + '.anim';
                    var animFileUrl = "https://firebasestorage.googleapis.com/v0/b/" + storageBucket + "/o/\n            " + encodeURIComponent(animFileName) + "?alt=media";
                    newObjRef.set({
                        displayName: displayName_1,
                        name: animName_1,
                        duration: duration_1
                    });
                    toastr.info('Added to your library');
                }
                else {
                    toastr.error('Already in your library');
                }
            });
        }
        __WEBPACK_IMPORTED_MODULE_2_jquery__('.download-anim').click(function () {
            var animDownloadUrl = __WEBPACK_IMPORTED_MODULE_2_jquery__(this).data('url');
            var animName = __WEBPACK_IMPORTED_MODULE_2_jquery__(this).data('name');
            __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"]({
                url: animDownloadUrl
            });
        });
    };
    RepositoryComponent.prototype.ngAfterViewInit = function () {
    };
    return RepositoryComponent;
}());
RepositoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-repository',
        template: __webpack_require__("../../../../../src/app/pages/repository/repository.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/repository/repository.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__repository_service__["a" /* RepositoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__repository_service__["a" /* RepositoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__global_ref__["a" /* GlobalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global_ref__["a" /* GlobalRef */]) === "function" && _b || Object])
], RepositoryComponent);

var _a, _b;
//# sourceMappingURL=repository.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/repository/repository.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repository_component__ = __webpack_require__("../../../../../src/app/pages/repository/repository.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_angularfire2__ = __webpack_require__("../../../../angularfire2/angularfire2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryModule", function() { return RepositoryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RepositoryModule = (function () {
    function RepositoryModule() {
    }
    return RepositoryModule;
}());
RepositoryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbPaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([{
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__repository_component__["a" /* RepositoryComponent */]
                }]),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_angularfire2__["b" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_4_environments_environment__["a" /* environment */].firebase)
        ],
        providers: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__repository_component__["a" /* RepositoryComponent */]],
    })
], RepositoryModule);

//# sourceMappingURL=repository.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/repository/repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_angularfire2__ = __webpack_require__("../../../../angularfire2/angularfire2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var RepositoryService = (function () {
    function RepositoryService(firebaseApp, db) {
        this.db = db;
        this.page$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]((50));
        this.selectedTags = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.unselectedTags = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.selectedTags$ = this.selectedTags.asObservable();
        this.unselectedTags$ = this.unselectedTags.asObservable();
        this.tagStore = [];
        this.firebaseApp = firebaseApp;
    }
    Object.defineProperty(RepositoryService.prototype, "animations", {
        get: function () {
            return this.db.list('/animations', {
                query: {
                    orderByChild: 'name',
                    limitToFirst: this.page$
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    RepositoryService.prototype.animationsFiles = function (name) {
        var _this = this;
        return this.firebaseApp.storage().ref('animFiles').child(name + ".anim").getDownloadURL()
            .then(function (animURL) { return _this.firebaseApp.storage().ref('mp4Files').child(name + ".mp4").getDownloadURL()
            .then(function (mp4URL) { return ({ animURL: animURL, mp4URL: mp4URL }); }); });
    };
    Object.defineProperty(RepositoryService.prototype, "tags", {
        get: function () {
            return this.db.list('/tags');
        },
        enumerable: true,
        configurable: true
    });
    RepositoryService.prototype.addTag = function (tag) {
        if (!this.tagStore.includes(tag)) {
            this.tagStore.push(tag);
        }
        console.log('tag', tag);
        this.selectedTags.next(tag);
    };
    RepositoryService.prototype.removeTagFromPanel = function (tag) {
        this.tagStore.splice(this.tagStore.indexOf(tag), 1);
        this.unselectedTags.next(tag);
    };
    return RepositoryService;
}());
RepositoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2_angularfire2_angularfire2__["a" /* FirebaseApp */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], RepositoryService);

var _a;
//# sourceMappingURL=repository.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBI6MRXiHVZbLJA41IXlaLULR1QaUlKpLg',
        authDomain: 'norahanimation.firebaseapp.com',
        databaseURL: 'https://norahanimation.firebaseio.com/',
        projectId: 'norahanimation',
        storageBucket: 'gs://norahanimation.appspot.com',
        messagingSenderId: '523960265087'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map