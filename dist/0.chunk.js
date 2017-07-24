webpackJsonp([0],{

/***/ "../../../../../src/app/pages/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content indent\">\n  <div class=\"thumb-box10\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-2 col-md-4 col-sm-4 wow fadeInUp\">\n        </div>\n        <div class=\"col-lg-8 col-md-8 col-sm-4\">\n          <h2 class=\"wow fadeIn\" data-wow-delay=\"0.1s\">Contact form</h2>\n          <form [formGroup]=\"contactForm\" o id=\"contact-form\">\n            <div class=\"contact-form-loader\"></div>\n            <fieldset>\n              <label class=\"name form-div-1\">\n                <strong>Name*</strong>\n                <input formControlName=\"name\" type=\"text\" name=\"name\" placeholder=\"\" value=\"\" required/>\n                <span *ngIf=\"contactForm.controls.name.dirty && contactForm.controls.name.errors?.required\"\n                      class=\"empty-message\">*This field is required.</span>\n              </label>\n              <label class=\"email form-div-2\">\n                <strong>E-mail*</strong>\n                <input formControlName=\"email\" type=\"text\" name=\"email\" placeholder=\"\" value=\"\" email required/>\n                <span *ngIf=\"contactForm.controls.email.dirty && contactForm.controls.email.errors?.required\"\n                      class=\"empty-message\">*This field is required.</span>\n                <span *ngIf=\"contactForm.controls.email.dirty && contactForm.controls.email.errors?.email\"\n                      class=\"error-message\">*This is not a valid email.</span>\n              </label>\n              <label class=\"phone form-div-3\">\n                <strong>Phone</strong>\n                <input formControlName=\"phone\" type=\"text\" name=\"phone\" placeholder=\"\" value=\"\"/>\n                <!--<span class=\"error-message\">*This is not a valid phone.</span>-->\n              </label>\n              <label class=\"message form-div-4\">\n                <strong>Message*</strong>\n                <textarea formControlName=\"message\" name=\"message\" placeholder=\"\" required minlength=\"15\"></textarea>\n                <span *ngIf=\"contactForm.controls.name.dirty && contactForm.controls.message.errors?.required\"\n                      class=\"empty-message\">*This field is required.</span>\n                <span *ngIf=\"contactForm.controls.name.dirty && contactForm.controls.message.errors?.minlength\"\n                      class=\"error-message\">*The message is too short.</span>\n              </label>\n              <div class=\"btns\">\n                <p>* required fields</p>\n                <button [disabled]=\"contactForm.invalid\" href=\"#\" data-type=\"submit\"\n                        (click)=\"submitMessage()\" class=\"btn-default btn4\"><span></span>Submit\n                </button>\n              </div>\n            </fieldset>\n            <div bsModal #contactSuccessModal=\"bs-modal\" class=\"modal fade response-message\">\n              <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                    <h4 class=\"modal-title\">Modal title</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                    You message has been sent! We will be in touch soon.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/contact-us/contact-us.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content.indent {\n  padding: 53px 0 0 0;\n  background: #ffffff; }\n\n.thumb-box10 {\n  overflow: hidden;\n  padding: 0 0 37px 0; }\n\nh2 {\n  font: 36px/1em 'Questrial';\n  margin: 0 0 12px 0;\n  color: #412a58;\n  padding-top: 21px;\n  position: relative;\n  text-align: center; }\n  h2:after {\n    position: absolute;\n    left: 50%;\n    top: 0;\n    width: 46px;\n    height: 2px;\n    margin-left: -23px;\n    background: #412a58;\n    content: '';\n    z-index: 1; }\n\n#contact-form {\n  position: relative;\n  text-align: left; }\n  #contact-form label {\n    width: 100%;\n    position: relative; }\n  #contact-form .contact-form-loader {\n    position: absolute;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0.9) none no-repeat 50% 50%;\n    opacity: 0; }\n  #contact-form fieldset {\n    border: none; }\n  #contact-form .form-div-1, #contact-form .form-div-2, #contact-form .form-div-3 {\n    float: left;\n    width: 237px;\n    margin-right: 13px;\n    line-height: 20px;\n    padding: 12px 14px;\n    background-color: transparent !important; }\n    #contact-form .form-div-1 strong, #contact-form .form-div-2 strong, #contact-form .form-div-3 strong {\n      font: 16px/18px 'Roboto';\n      color: black;\n      margin-bottom: 7px;\n      display: block; }\n  #contact-form .form-div-4 {\n    margin-right: 0;\n    margin-bottom: 28px;\n    line-height: 20px;\n    padding: 12px 14px;\n    background-color: transparent !important; }\n    #contact-form .form-div-4 strong {\n      font: 16px/18px 'Roboto';\n      color: black;\n      margin-bottom: 7px;\n      display: block; }\n  #contact-form input[type='text'] {\n    width: 100%;\n    outline: none;\n    box-sizing: border-box;\n    margin: 0;\n    border: 1px solid black;\n    background: none;\n    font: 16px/18px 'Roboto';\n    height: 48px;\n    color: black !important;\n    padding: 13px 15px;\n    border-radius: 25px; }\n  #contact-form .modal h4 {\n    font-weight: bold;\n    padding: 0;\n    margin: 0;\n    border: none;\n    font: 26px/1em 'Questrial';\n    color: #e46b86;\n    letter-spacing: 1px; }\n  #contact-form .empty-message, #contact-form .error-message {\n    position: absolute;\n    right: 3px;\n    bottom: -22px;\n    color: #e36480;\n    font-weight: normal;\n    overflow: hidden;\n    font-size: 10px;\n    transition: 0.3s ease-in height;\n    z-index: 99;\n    height: 20px; }\n  #contact-form textarea {\n    width: 98%;\n    outline: none;\n    box-sizing: border-box;\n    resize: none;\n    border: 1px solid black;\n    background: none;\n    font: 16px/18px 'Roboto';\n    height: 158px;\n    color: black !important;\n    border-radius: 25px;\n    line-height: 20px;\n    padding: 12px 14px; }\n  #contact-form .btns p {\n    margin: 7px 0 0 0;\n    color: #e36480; }\n  #contact-form .btns .btn4 {\n    margin: 0 40px 100px 0;\n    left: 40%;\n    box-shadow: none;\n    position: relative;\n    text-decoration: none;\n    display: inline-block;\n    padding: 14px 42px;\n    font: 18px 'Questrial';\n    background: #e36480;\n    letter-spacing: 2px;\n    border-radius: 50px;\n    outline: none;\n    color: #ffffff;\n    overflow: hidden;\n    float: none;\n    z-index: 1;\n    transition: all 0.35s; }\n  #contact-form ._placeholder {\n    width: 100% !important;\n    position: absolute;\n    left: 0;\n    top: 0;\n    display: block;\n    box-sizing: border-box;\n    cursor: text;\n    border: 1px solid #d7d7d7;\n    background: none;\n    font: 16px/18px 'Roboto';\n    height: 48px;\n    color: #cbcbcb;\n    padding: 13px 15px;\n    border-radius: 25px; }\n\n#contact-form ._placeholder {\n  width: 100% !important;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: block;\n  box-sizing: border-box;\n  cursor: text;\n  border: 1px solid #d7d7d7;\n  background: none;\n  font: 16px/18px 'Roboto';\n  height: 48px;\n  color: #cbcbcb;\n  padding: 13px 15px;\n  border-radius: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactUsComponent = (function () {
    function ContactUsComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.contactForm = this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](''),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](''),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](''),
            message: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](''),
        });
    }
    ContactUsComponent.prototype.submitMessage = function () {
        var _this = this;
        this.http.post('http://norah.ai/bat/MailHandler.php', this.contactForm.value).subscribe(function (response) {
            if (response.status === 200) {
                _this.contactSuccessModal.show();
            }
        });
    };
    return ContactUsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('contactSuccessModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_component__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_component__["a" /* ModalDirective */]) === "function" && _a || Object)
], ContactUsComponent.prototype, "contactSuccessModal", void 0);
ContactUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-contact-us',
        template: __webpack_require__("../../../../../src/app/pages/contact-us/contact-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/contact-us/contact-us.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object])
], ContactUsComponent);

var _a, _b, _c;
//# sourceMappingURL=contact-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/contact-us/contact-us.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal_modal_module__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_us_component__ = __webpack_require__("../../../../../src/app/pages/contact-us/contact-us.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContactUsModule = (function () {
    function ContactUsModule() {
    }
    return ContactUsModule;
}());
ContactUsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__contact_us_component__["a" /* ContactUsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([{
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_6__contact_us_component__["a" /* ContactUsComponent */]
                }]),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal_modal_module__["a" /* ModalModule */].forRoot()
        ],
        providers: []
    })
], ContactUsModule);

//# sourceMappingURL=contact-us.module.js.map

/***/ }),

/***/ "../../../http/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__("../../../http/src/index.js");
/* unused harmony reexport BrowserXhr */
/* unused harmony reexport JSONPBackend */
/* unused harmony reexport JSONPConnection */
/* unused harmony reexport CookieXSRFStrategy */
/* unused harmony reexport XHRBackend */
/* unused harmony reexport XHRConnection */
/* unused harmony reexport BaseRequestOptions */
/* unused harmony reexport RequestOptions */
/* unused harmony reexport BaseResponseOptions */
/* unused harmony reexport ResponseOptions */
/* unused harmony reexport ReadyState */
/* unused harmony reexport RequestMethod */
/* unused harmony reexport ResponseContentType */
/* unused harmony reexport ResponseType */
/* unused harmony reexport Headers */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["b"]; });
/* unused harmony reexport Jsonp */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["a"]; });
/* unused harmony reexport JsonpModule */
/* unused harmony reexport Connection */
/* unused harmony reexport ConnectionBackend */
/* unused harmony reexport XSRFStrategy */
/* unused harmony reexport Request */
/* unused harmony reexport Response */
/* unused harmony reexport QueryEncoder */
/* unused harmony reexport URLSearchParams */
/* unused harmony reexport VERSION */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the http package.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../http/src/backends/browser_jsonp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* unused harmony export JSONP_HOME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserJsonp; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var /** @type {?} */ _nextRequestId = 0;
var /** @type {?} */ JSONP_HOME = '__ng_jsonp__';
var /** @type {?} */ _jsonpConnections = null;
/**
 * @return {?}
 */
function _getJsonpConnections() {
    var /** @type {?} */ w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
var BrowserJsonp = (function () {
    function BrowserJsonp() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    BrowserJsonp.prototype.build = function (url) {
        var /** @type {?} */ node = document.createElement('script');
        node.src = url;
        return node;
    };
    /**
     * @return {?}
     */
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    /**
     * @param {?} id
     * @param {?} connection
     * @return {?}
     */
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = connection;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.removeConnection = function (id) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = null;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild(/** @type {?} */ ((node))); };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild(/** @type {?} */ ((node)));
        }
    };
    BrowserJsonp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    BrowserJsonp.ctorParameters = function () { return []; };
    return BrowserJsonp;
}());
function BrowserJsonp_tsickle_Closure_declarations() {
    /** @type {?} */
    BrowserJsonp.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    BrowserJsonp.ctorParameters;
}
//# sourceMappingURL=browser_jsonp.js.map

/***/ }),

/***/ "../../../http/src/backends/browser_xhr.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserXhr; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * \@experimental
 */
var BrowserXhr = (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = function () { return ((new XMLHttpRequest())); };
    BrowserXhr.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = function () { return []; };
    return BrowserXhr;
}());
function BrowserXhr_tsickle_Closure_declarations() {
    /** @type {?} */
    BrowserXhr.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    BrowserXhr.ctorParameters;
}
//# sourceMappingURL=browser_xhr.js.map

/***/ }),

/***/ "../../../http/src/backends/jsonp_backend.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_response_options__ = __webpack_require__("../../../http/src/base_response_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums__ = __webpack_require__("../../../http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces__ = __webpack_require__("../../../http/src/interfaces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_response__ = __webpack_require__("../../../http/src/static_response.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__browser_jsonp__ = __webpack_require__("../../../http/src/backends/browser_jsonp.js");
/* unused harmony export JSONPConnection */
/* unused harmony export JSONPConnection_ */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return JSONPBackend_; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};







var /** @type {?} */ JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var /** @type {?} */ JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Abstract base class for an in-flight JSONP request.
 *
 * \@experimental
 * @abstract
 */
var JSONPConnection = (function () {
    function JSONPConnection() {
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     * @abstract
     * @param {?=} data
     * @return {?}
     */
    JSONPConnection.prototype.finished = function (data) { };
    return JSONPConnection;
}());
function JSONPConnection_tsickle_Closure_declarations() {
    /**
     * The {\@link ReadyState} of this request.
     * @type {?}
     */
    JSONPConnection.prototype.readyState;
    /**
     * The outgoing HTTP request.
     * @type {?}
     */
    JSONPConnection.prototype.request;
    /**
     * An observable that completes with the response, when the request is finished.
     * @type {?}
     */
    JSONPConnection.prototype.response;
}
var JSONPConnection_ = (function (_super) {
    __extends(JSONPConnection_, _super);
    /**
     * @param {?} req
     * @param {?} _dom
     * @param {?=} baseResponseOptions
     */
    function JSONPConnection_(req, _dom, baseResponseOptions) {
        var _this = this;
        _super.call(this);
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* RequestMethod */].Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (responseObserver) {
            _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["c" /* ReadyState */].Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === __WEBPACK_IMPORTED_MODULE_3__enums__["c" /* ReadyState */].Cancelled)
                    return;
                _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["c" /* ReadyState */].Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new __WEBPACK_IMPORTED_MODULE_2__base_response_options__["a" /* ResponseOptions */]({ body: JSONP_ERR_NO_CALLBACK, type: __WEBPACK_IMPORTED_MODULE_3__enums__["d" /* ResponseType */].Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new __WEBPACK_IMPORTED_MODULE_5__static_response__["a" /* Response */](responseOptions_1));
                    return;
                }
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_2__base_response_options__["a" /* ResponseOptions */]({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new __WEBPACK_IMPORTED_MODULE_5__static_response__["a" /* Response */](responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === __WEBPACK_IMPORTED_MODULE_3__enums__["c" /* ReadyState */].Cancelled)
                    return;
                _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["c" /* ReadyState */].Done;
                _dom.cleanup(script);
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_2__base_response_options__["a" /* ResponseOptions */]({ body: error.message, type: __WEBPACK_IMPORTED_MODULE_3__enums__["d" /* ResponseType */].Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new __WEBPACK_IMPORTED_MODULE_5__static_response__["a" /* Response */](responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["c" /* ReadyState */].Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    JSONPConnection_.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === __WEBPACK_IMPORTED_MODULE_3__enums__["c" /* ReadyState */].Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection_;
}(JSONPConnection));
function JSONPConnection__tsickle_Closure_declarations() {
    /** @type {?} */
    JSONPConnection_.prototype._id;
    /** @type {?} */
    JSONPConnection_.prototype._script;
    /** @type {?} */
    JSONPConnection_.prototype._responseData;
    /** @type {?} */
    JSONPConnection_.prototype._finished;
    /** @type {?} */
    JSONPConnection_.prototype._dom;
    /** @type {?} */
    JSONPConnection_.prototype.baseResponseOptions;
}
/**
 * A {\@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * \@experimental
 * @abstract
 */
var JSONPBackend = (function (_super) {
    __extends(JSONPBackend, _super);
    function JSONPBackend() {
        _super.apply(this, arguments);
    }
    return JSONPBackend;
}(__WEBPACK_IMPORTED_MODULE_4__interfaces__["b" /* ConnectionBackend */]));
var JSONPBackend_ = (function (_super) {
    __extends(JSONPBackend_, _super);
    /**
     * @param {?} _browserJSONP
     * @param {?} _baseResponseOptions
     */
    function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
        _super.call(this);
        this._browserJSONP = _browserJSONP;
        this._baseResponseOptions = _baseResponseOptions;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    JSONPBackend_.prototype.createConnection = function (request) {
        return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend_.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    JSONPBackend_.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_6__browser_jsonp__["a" /* BrowserJsonp */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__base_response_options__["a" /* ResponseOptions */], },
    ]; };
    return JSONPBackend_;
}(JSONPBackend));
function JSONPBackend__tsickle_Closure_declarations() {
    /** @type {?} */
    JSONPBackend_.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    JSONPBackend_.ctorParameters;
    /** @type {?} */
    JSONPBackend_.prototype._browserJSONP;
    /** @type {?} */
    JSONPBackend_.prototype._baseResponseOptions;
}
//# sourceMappingURL=jsonp_backend.js.map

/***/ }),

/***/ "../../../http/src/backends/xhr_backend.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_response_options__ = __webpack_require__("../../../http/src/base_response_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums__ = __webpack_require__("../../../http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__headers__ = __webpack_require__("../../../http/src/headers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__http_utils__ = __webpack_require__("../../../http/src/http_utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interfaces__ = __webpack_require__("../../../http/src/interfaces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_response__ = __webpack_require__("../../../http/src/static_response.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__browser_xhr__ = __webpack_require__("../../../http/src/backends/browser_xhr.js");
/* unused harmony export XHRConnection */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return XHRBackend; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










var /** @type {?} */ XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {\@link MockConnection} may be interacted with in tests.
 *
 * \@experimental
 */
var XHRConnection = (function () {
    /**
     * @param {?} req
     * @param {?} browserXHR
     * @param {?=} baseResponseOptions
     */
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(__WEBPACK_IMPORTED_MODULE_4__enums__["a" /* RequestMethod */][req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = __WEBPACK_IMPORTED_MODULE_5__headers__["a" /* Headers */].fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__http_utils__["c" /* getResponseURL */])(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_3__base_response_options__["a" /* ResponseOptions */]({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new __WEBPACK_IMPORTED_MODULE_8__static_response__["a" /* Response */](responseOptions);
                response.ok = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__http_utils__["d" /* isSuccess */])(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_3__base_response_options__["a" /* ResponseOptions */]({
                    body: err,
                    type: __WEBPACK_IMPORTED_MODULE_4__enums__["d" /* ResponseType */].Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new __WEBPACK_IMPORTED_MODULE_8__static_response__["a" /* Response */](responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new __WEBPACK_IMPORTED_MODULE_5__headers__["a" /* Headers */]();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ResponseContentType */].ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ResponseContentType */].Json:
                        _xhr.responseType = 'json';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ResponseContentType */].Text:
                        _xhr.responseType = 'text';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ResponseContentType */].Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    /**
     * @param {?} req
     * @param {?} _xhr
     * @return {?}
     */
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case __WEBPACK_IMPORTED_MODULE_4__enums__["b" /* ContentType */].NONE:
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["b" /* ContentType */].JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["b" /* ContentType */].FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["b" /* ContentType */].TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["b" /* ContentType */].BLOB:
                var /** @type {?} */ blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
function XHRConnection_tsickle_Closure_declarations() {
    /** @type {?} */
    XHRConnection.prototype.request;
    /**
     * Response {\@link EventEmitter} which emits a single {\@link Response} value on load event of
     * `XMLHttpRequest`.
     * @type {?}
     */
    XHRConnection.prototype.response;
    /** @type {?} */
    XHRConnection.prototype.readyState;
}
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * \@experimental
 */
var CookieXSRFStrategy = (function () {
    /**
     * @param {?=} _cookieName
     * @param {?=} _headerName
     */
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var /** @type {?} */ xsrfToken = __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* __platform_browser_private__ */].getDOM().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
function CookieXSRFStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    CookieXSRFStrategy.prototype._cookieName;
    /** @type {?} */
    CookieXSRFStrategy.prototype._headerName;
}
/**
 * Creates {\@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '\@angular/http';
 * \@Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * \@experimental
 */
var XHRBackend = (function () {
    /**
     * @param {?} _browserXHR
     * @param {?} _baseResponseOptions
     * @param {?} _xsrfStrategy
     */
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    XHRBackend.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_9__browser_xhr__["a" /* BrowserXhr */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__base_response_options__["a" /* ResponseOptions */], },
        { type: __WEBPACK_IMPORTED_MODULE_7__interfaces__["a" /* XSRFStrategy */], },
    ]; };
    return XHRBackend;
}());
function XHRBackend_tsickle_Closure_declarations() {
    /** @type {?} */
    XHRBackend.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    XHRBackend.ctorParameters;
    /** @type {?} */
    XHRBackend.prototype._browserXHR;
    /** @type {?} */
    XHRBackend.prototype._baseResponseOptions;
    /** @type {?} */
    XHRBackend.prototype._xsrfStrategy;
}
//# sourceMappingURL=xhr_backend.js.map

/***/ }),

/***/ "../../../http/src/base_request_options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums__ = __webpack_require__("../../../http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__headers__ = __webpack_require__("../../../http/src/headers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_utils__ = __webpack_require__("../../../http/src/http_utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url_search_params__ = __webpack_require__("../../../http/src/url_search_params.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BaseRequestOptions; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * Creates a request options object to be optionally provided when instantiating a
 * {\@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {\@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ### Example ([live demo](http://plnkr.co/edit/7Wvi3lfLq41aQPKlxB4O?p=preview))
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * var options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * var req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * \@experimental
 */
var RequestOptions = (function () {
    /**
     * @param {?=} __0
     */
    function RequestOptions(_a) {
        var _b = _a === void 0 ? {} : _a, method = _b.method, headers = _b.headers, body = _b.body, url = _b.url, search = _b.search, withCredentials = _b.withCredentials, responseType = _b.responseType;
        this.method = method != null ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__http_utils__["b" /* normalizeMethodName */])(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.search =
            search != null ? (typeof search === 'string' ? new __WEBPACK_IMPORTED_MODULE_4__url_search_params__["a" /* URLSearchParams */](search) : search) : null;
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ### Example ([live demo](http://plnkr.co/edit/6w8XA8YTkDRcPYpdB9dk?p=preview))
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * var options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * var req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new __WEBPACK_IMPORTED_MODULE_2__headers__["a" /* Headers */](this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            search: options && options.search != null ?
                (typeof options.search === 'string' ? new __WEBPACK_IMPORTED_MODULE_4__url_search_params__["a" /* URLSearchParams */](options.search) :
                    options.search.clone()) :
                this.search,
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    return RequestOptions;
}());
function RequestOptions_tsickle_Closure_declarations() {
    /**
     * Http method with which to execute a {\@link Request}.
     * Acceptable methods are defined in the {\@link RequestMethod} enum.
     * @type {?}
     */
    RequestOptions.prototype.method;
    /**
     * {\@link Headers} to be attached to a {\@link Request}.
     * @type {?}
     */
    RequestOptions.prototype.headers;
    /**
     * Body to be used when creating a {\@link Request}.
     * @type {?}
     */
    RequestOptions.prototype.body;
    /**
     * Url with which to perform a {\@link Request}.
     * @type {?}
     */
    RequestOptions.prototype.url;
    /**
     * Search parameters to be included in a {\@link Request}.
     * @type {?}
     */
    RequestOptions.prototype.search;
    /**
     * Enable use credentials for a {\@link Request}.
     * @type {?}
     */
    RequestOptions.prototype.withCredentials;
    /** @type {?} */
    RequestOptions.prototype.responseType;
}
/**
 * Subclass of {\@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {\@link RequestMethod RequestMethod.Get}
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link RequestOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create and send {\@link Request Requests}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/LEKVSx?p=preview))
 *
 * ```typescript
 * import {provide} from '\@angular/core';
 * import {bootstrap} from '\@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Http, BaseRequestOptions, RequestOptions} from '\@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: RequestOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {\@link Request}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/oyBoEvNtDhOSfi9YxaVb?p=preview))
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * var options = new BaseRequestOptions();
 * var req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * \@experimental
 */
var BaseRequestOptions = (function (_super) {
    __extends(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        _super.call(this, { method: __WEBPACK_IMPORTED_MODULE_1__enums__["a" /* RequestMethod */].Get, headers: new __WEBPACK_IMPORTED_MODULE_2__headers__["a" /* Headers */]() });
    }
    BaseRequestOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    BaseRequestOptions.ctorParameters = function () { return []; };
    return BaseRequestOptions;
}(RequestOptions));
function BaseRequestOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    BaseRequestOptions.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    BaseRequestOptions.ctorParameters;
}
//# sourceMappingURL=base_request_options.js.map

/***/ }),

/***/ "../../../http/src/base_response_options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums__ = __webpack_require__("../../../http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__headers__ = __webpack_require__("../../../http/src/headers.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BaseResponseOptions; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Creates a response options object to be optionally provided when instantiating a
 * {\@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {\@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {\@link Response Responses} for
 * mock responses (see {\@link MockBackend}).
 *
 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
 *
 * ```typescript
 * import {ResponseOptions, Response} from '\@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * \@experimental
 */
var ResponseOptions = (function () {
    /**
     * @param {?=} __0
     */
    function ResponseOptions(_a) {
        var _b = _a === void 0 ? {} : _a, body = _b.body, status = _b.status, headers = _b.headers, statusText = _b.statusText, type = _b.type, url = _b.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '\@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
function ResponseOptions_tsickle_Closure_declarations() {
    /**
     * String, Object, ArrayBuffer or Blob representing the body of the {\@link Response}.
     * @type {?}
     */
    ResponseOptions.prototype.body;
    /**
     * Http {\@link http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html status code}
     * associated with the response.
     * @type {?}
     */
    ResponseOptions.prototype.status;
    /**
     * Response {\@link Headers headers}
     * @type {?}
     */
    ResponseOptions.prototype.headers;
    /**
     * \@internal
     * @type {?}
     */
    ResponseOptions.prototype.statusText;
    /**
     * \@internal
     * @type {?}
     */
    ResponseOptions.prototype.type;
    /** @type {?} */
    ResponseOptions.prototype.url;
}
/**
 * Subclass of {\@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link ResponseOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create {\@link Response Responses}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
 *
 * ```typescript
 * import {provide} from '\@angular/core';
 * import {bootstrap} from '\@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '\@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {\@link Response}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
 *
 * ```
 * import {BaseResponseOptions, Response} from '\@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * \@experimental
 */
var BaseResponseOptions = (function (_super) {
    __extends(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        _super.call(this, { status: 200, statusText: 'Ok', type: __WEBPACK_IMPORTED_MODULE_1__enums__["d" /* ResponseType */].Default, headers: new __WEBPACK_IMPORTED_MODULE_2__headers__["a" /* Headers */]() });
    }
    BaseResponseOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    BaseResponseOptions.ctorParameters = function () { return []; };
    return BaseResponseOptions;
}(ResponseOptions));
function BaseResponseOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    BaseResponseOptions.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    BaseResponseOptions.ctorParameters;
}
//# sourceMappingURL=base_response_options.js.map

/***/ }),

/***/ "../../../http/src/body.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_utils__ = __webpack_require__("../../../http/src/http_utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__url_search_params__ = __webpack_require__("../../../http/src/url_search_params.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Body; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * HTTP request body used by both {\@link Request} and {\@link Response}
 * https://fetch.spec.whatwg.org/#body
 * @abstract
 */
var Body = (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     * @return {?}
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(/** @type {?} */ (this._body));
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     * @return {?}
     */
    Body.prototype.text = function () {
        if (this._body instanceof __WEBPACK_IMPORTED_MODULE_1__url_search_params__["a" /* URLSearchParams */]) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            return String.fromCharCode.apply(null, new Uint16Array(/** @type {?} */ (this._body)));
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     * @return {?}
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return (this._body);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__http_utils__["a" /* stringToArrayBuffer */])(this.text());
    };
    /**
     * Returns the request's body as a Blob, assuming that body exists.
     * @return {?}
     */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return (this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());
function Body_tsickle_Closure_declarations() {
    /**
     * \@internal
     * @type {?}
     */
    Body.prototype._body;
}
//# sourceMappingURL=body.js.map

/***/ }),

/***/ "../../../http/src/enums.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ResponseContentType; });
var RequestMethod = {};
RequestMethod.Get = 0;
RequestMethod.Post = 1;
RequestMethod.Put = 2;
RequestMethod.Delete = 3;
RequestMethod.Options = 4;
RequestMethod.Head = 5;
RequestMethod.Patch = 6;
RequestMethod[RequestMethod.Get] = "Get";
RequestMethod[RequestMethod.Post] = "Post";
RequestMethod[RequestMethod.Put] = "Put";
RequestMethod[RequestMethod.Delete] = "Delete";
RequestMethod[RequestMethod.Options] = "Options";
RequestMethod[RequestMethod.Head] = "Head";
RequestMethod[RequestMethod.Patch] = "Patch";
var ReadyState = {};
ReadyState.Unsent = 0;
ReadyState.Open = 1;
ReadyState.HeadersReceived = 2;
ReadyState.Loading = 3;
ReadyState.Done = 4;
ReadyState.Cancelled = 5;
ReadyState[ReadyState.Unsent] = "Unsent";
ReadyState[ReadyState.Open] = "Open";
ReadyState[ReadyState.HeadersReceived] = "HeadersReceived";
ReadyState[ReadyState.Loading] = "Loading";
ReadyState[ReadyState.Done] = "Done";
ReadyState[ReadyState.Cancelled] = "Cancelled";
var ResponseType = {};
ResponseType.Basic = 0;
ResponseType.Cors = 1;
ResponseType.Default = 2;
ResponseType.Error = 3;
ResponseType.Opaque = 4;
ResponseType[ResponseType.Basic] = "Basic";
ResponseType[ResponseType.Cors] = "Cors";
ResponseType[ResponseType.Default] = "Default";
ResponseType[ResponseType.Error] = "Error";
ResponseType[ResponseType.Opaque] = "Opaque";
var ContentType = {};
ContentType.NONE = 0;
ContentType.JSON = 1;
ContentType.FORM = 2;
ContentType.FORM_DATA = 3;
ContentType.TEXT = 4;
ContentType.BLOB = 5;
ContentType.ARRAY_BUFFER = 6;
ContentType[ContentType.NONE] = "NONE";
ContentType[ContentType.JSON] = "JSON";
ContentType[ContentType.FORM] = "FORM";
ContentType[ContentType.FORM_DATA] = "FORM_DATA";
ContentType[ContentType.TEXT] = "TEXT";
ContentType[ContentType.BLOB] = "BLOB";
ContentType[ContentType.ARRAY_BUFFER] = "ARRAY_BUFFER";
var ResponseContentType = {};
ResponseContentType.Text = 0;
ResponseContentType.Json = 1;
ResponseContentType.ArrayBuffer = 2;
ResponseContentType.Blob = 3;
ResponseContentType[ResponseContentType.Text] = "Text";
ResponseContentType[ResponseContentType.Json] = "Json";
ResponseContentType[ResponseContentType.ArrayBuffer] = "ArrayBuffer";
ResponseContentType[ResponseContentType.Blob] = "Blob";
//# sourceMappingURL=enums.js.map

/***/ }),

/***/ "../../../http/src/headers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Headers; });
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '\@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * \@experimental
 */
var Headers = (function () {
    /**
     * @param {?=} headers
     */
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     * @param {?} headersString
     * @return {?}
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var /** @type {?} */ headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var /** @type {?} */ index = line.indexOf(':');
            if (index > 0) {
                var /** @type {?} */ name_1 = line.slice(0, index);
                var /** @type {?} */ value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.append = function (name, value) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.delete = function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.get = function (name) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     * @return {?}
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     * @return {?}
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * @return {?}
     */
    Headers.prototype.toJSON = function () {
        var _this = this;
        var /** @type {?} */ serialized = {};
        this._headers.forEach(function (values, name) {
            var /** @type {?} */ split = [];
            values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) : null;
    };
    /**
     * This method is not implemented.
     * @return {?}
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    /**
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());
function Headers_tsickle_Closure_declarations() {
    /**
     * \@internal header names are lower case
     * @type {?}
     */
    Headers.prototype._headers;
    /**
     * \@internal map lower case names to actual names
     * @type {?}
     */
    Headers.prototype._normalizedNames;
}
//# sourceMappingURL=headers.js.map

/***/ }),

/***/ "../../../http/src/http.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_request_options__ = __webpack_require__("../../../http/src/base_request_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums__ = __webpack_require__("../../../http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces__ = __webpack_require__("../../../http/src/interfaces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_request__ = __webpack_require__("../../../http/src/static_request.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Jsonp; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * @param {?} backend
 * @param {?} request
 * @return {?}
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
/**
 * @param {?} defaultOpts
 * @param {?} providedOpts
 * @param {?} method
 * @param {?} url
 * @return {?}
 */
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var /** @type {?} */ newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new __WEBPACK_IMPORTED_MODULE_1__base_request_options__["a" /* RequestOptions */]({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new __WEBPACK_IMPORTED_MODULE_1__base_request_options__["a" /* RequestOptions */]({ method: method, url: url }));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {\@link Response} when a
 * response is received.
 *
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '\@angular/http';
 * import 'rxjs/add/operator/map'
 * \@Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .map(res => res.json())
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {\@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {\@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '\@angular/http';
 * import {MockBackend} from '\@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * \@experimental
 */
var Http = (function () {
    /**
     * @param {?} _backend
     * @param {?} _defaultOptions
     */
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.request = function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_2__enums__["a" /* RequestMethod */].Get, /** @type {?} */ (url))));
        }
        else if (url instanceof __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */]) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.get = function (url, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_2__enums__["a" /* RequestMethod */].Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions.merge(new __WEBPACK_IMPORTED_MODULE_1__base_request_options__["a" /* RequestOptions */]({ body: body })), options, __WEBPACK_IMPORTED_MODULE_2__enums__["a" /* RequestMethod */].Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions.merge(new __WEBPACK_IMPORTED_MODULE_1__base_request_options__["a" /* RequestOptions */]({ body: body })), options, __WEBPACK_IMPORTED_MODULE_2__enums__["a" /* RequestMethod */].Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_2__enums__["a" /* RequestMethod */].Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions.merge(new __WEBPACK_IMPORTED_MODULE_1__base_request_options__["a" /* RequestOptions */]({ body: body })), options, __WEBPACK_IMPORTED_MODULE_2__enums__["a" /* RequestMethod */].Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.head = function (url, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_2__enums__["a" /* RequestMethod */].Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.options = function (url, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_2__enums__["a" /* RequestMethod */].Options, url)));
    };
    Http.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    Http.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__interfaces__["b" /* ConnectionBackend */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__base_request_options__["a" /* RequestOptions */], },
    ]; };
    return Http;
}());
function Http_tsickle_Closure_declarations() {
    /** @type {?} */
    Http.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    Http.ctorParameters;
    /** @type {?} */
    Http.prototype._backend;
    /** @type {?} */
    Http.prototype._defaultOptions;
}
/**
 * \@experimental
 */
var Jsonp = (function (_super) {
    __extends(Jsonp, _super);
    /**
     * @param {?} backend
     * @param {?} defaultOptions
     */
    function Jsonp(backend, defaultOptions) {
        _super.call(this, backend, defaultOptions);
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     *
     * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Jsonp.prototype.request = function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            url =
                new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_2__enums__["a" /* RequestMethod */].Get, /** @type {?} */ (url)));
        }
        if (url instanceof __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */]) {
            if (url.method !== __WEBPACK_IMPORTED_MODULE_2__enums__["a" /* RequestMethod */].Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    Jsonp.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__interfaces__["b" /* ConnectionBackend */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__base_request_options__["a" /* RequestOptions */], },
    ]; };
    return Jsonp;
}(Http));
function Jsonp_tsickle_Closure_declarations() {
    /** @type {?} */
    Jsonp.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    Jsonp.ctorParameters;
}
//# sourceMappingURL=http.js.map

/***/ }),

/***/ "../../../http/src/http_module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backends_browser_jsonp__ = __webpack_require__("../../../http/src/backends/browser_jsonp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backends_browser_xhr__ = __webpack_require__("../../../http/src/backends/browser_xhr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__ = __webpack_require__("../../../http/src/backends/jsonp_backend.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__ = __webpack_require__("../../../http/src/backends/xhr_backend.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_request_options__ = __webpack_require__("../../../http/src/base_request_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_response_options__ = __webpack_require__("../../../http/src/base_response_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http__ = __webpack_require__("../../../http/src/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interfaces__ = __webpack_require__("../../../http/src/interfaces.js");
/* unused harmony export _createDefaultCookieXSRFStrategy */
/* unused harmony export httpFactory */
/* unused harmony export jsonpFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpModule; });
/* unused harmony export JsonpModule */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @return {?}
 */
function _createDefaultCookieXSRFStrategy() {
    return new __WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__["a" /* CookieXSRFStrategy */]();
}
/**
 * @param {?} xhrBackend
 * @param {?} requestOptions
 * @return {?}
 */
function httpFactory(xhrBackend, requestOptions) {
    return new __WEBPACK_IMPORTED_MODULE_7__http__["a" /* Http */](xhrBackend, requestOptions);
}
/**
 * @param {?} jsonpBackend
 * @param {?} requestOptions
 * @return {?}
 */
function jsonpFactory(jsonpBackend, requestOptions) {
    return new __WEBPACK_IMPORTED_MODULE_7__http__["b" /* Jsonp */](jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * \@experimental
 */
var HttpModule = (function () {
    function HttpModule() {
    }
    HttpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: __WEBPACK_IMPORTED_MODULE_7__http__["a" /* Http */], useFactory: httpFactory, deps: [__WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__["b" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_5__base_request_options__["a" /* RequestOptions */]] },
                        __WEBPACK_IMPORTED_MODULE_2__backends_browser_xhr__["a" /* BrowserXhr */],
                        { provide: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["a" /* RequestOptions */], useClass: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["b" /* BaseRequestOptions */] },
                        { provide: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["a" /* ResponseOptions */], useClass: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["b" /* BaseResponseOptions */] },
                        __WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__["b" /* XHRBackend */],
                        { provide: __WEBPACK_IMPORTED_MODULE_8__interfaces__["a" /* XSRFStrategy */], useFactory: _createDefaultCookieXSRFStrategy },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpModule.ctorParameters = function () { return []; };
    return HttpModule;
}());
function HttpModule_tsickle_Closure_declarations() {
    /** @type {?} */
    HttpModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    HttpModule.ctorParameters;
}
/**
 * The module that includes jsonp's providers
 *
 * \@experimental
 */
var JsonpModule = (function () {
    function JsonpModule() {
    }
    JsonpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: __WEBPACK_IMPORTED_MODULE_7__http__["b" /* Jsonp */], useFactory: jsonpFactory, deps: [__WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__["a" /* JSONPBackend */], __WEBPACK_IMPORTED_MODULE_5__base_request_options__["a" /* RequestOptions */]] },
                        __WEBPACK_IMPORTED_MODULE_1__backends_browser_jsonp__["a" /* BrowserJsonp */],
                        { provide: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["a" /* RequestOptions */], useClass: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["b" /* BaseRequestOptions */] },
                        { provide: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["a" /* ResponseOptions */], useClass: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["b" /* BaseResponseOptions */] },
                        { provide: __WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__["a" /* JSONPBackend */], useClass: __WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__["b" /* JSONPBackend_ */] },
                    ],
                },] },
    ];
    /** @nocollapse */
    JsonpModule.ctorParameters = function () { return []; };
    return JsonpModule;
}());
function JsonpModule_tsickle_Closure_declarations() {
    /** @type {?} */
    JsonpModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    JsonpModule.ctorParameters;
}
//# sourceMappingURL=http_module.js.map

/***/ }),

/***/ "../../../http/src/http_utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums__ = __webpack_require__("../../../http/src/enums.js");
/* harmony export (immutable) */ __webpack_exports__["b"] = normalizeMethodName;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isSuccess; });
/* harmony export (immutable) */ __webpack_exports__["c"] = getResponseURL;
/* harmony export (immutable) */ __webpack_exports__["a"] = stringToArrayBuffer;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @param {?} method
 * @return {?}
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* RequestMethod */].Get;
        case 'POST':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* RequestMethod */].Post;
        case 'PUT':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* RequestMethod */].Put;
        case 'DELETE':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* RequestMethod */].Delete;
        case 'OPTIONS':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* RequestMethod */].Options;
        case 'HEAD':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* RequestMethod */].Head;
        case 'PATCH':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* RequestMethod */].Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var /** @type {?} */ isSuccess = function (status) { return (status >= 200 && status < 300); };
/**
 * @param {?} xhr
 * @return {?}
 */
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return;
}
/**
 * @param {?} input
 * @return {?}
 */
function stringToArrayBuffer(input) {
    var /** @type {?} */ view = new Uint16Array(input.length);
    for (var /** @type {?} */ i = 0, /** @type {?} */ strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}
//# sourceMappingURL=http_utils.js.map

/***/ }),

/***/ "../../../http/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__backends_browser_xhr__ = __webpack_require__("../../../http/src/backends/browser_xhr.js");
/* unused harmony reexport BrowserXhr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backends_jsonp_backend__ = __webpack_require__("../../../http/src/backends/jsonp_backend.js");
/* unused harmony reexport JSONPBackend */
/* unused harmony reexport JSONPConnection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backends_xhr_backend__ = __webpack_require__("../../../http/src/backends/xhr_backend.js");
/* unused harmony reexport CookieXSRFStrategy */
/* unused harmony reexport XHRBackend */
/* unused harmony reexport XHRConnection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_request_options__ = __webpack_require__("../../../http/src/base_request_options.js");
/* unused harmony reexport BaseRequestOptions */
/* unused harmony reexport RequestOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_response_options__ = __webpack_require__("../../../http/src/base_response_options.js");
/* unused harmony reexport BaseResponseOptions */
/* unused harmony reexport ResponseOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums__ = __webpack_require__("../../../http/src/enums.js");
/* unused harmony reexport ReadyState */
/* unused harmony reexport RequestMethod */
/* unused harmony reexport ResponseContentType */
/* unused harmony reexport ResponseType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__headers__ = __webpack_require__("../../../http/src/headers.js");
/* unused harmony reexport Headers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http__ = __webpack_require__("../../../http/src/http.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__http__["a"]; });
/* unused harmony reexport Jsonp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__http_module__ = __webpack_require__("../../../http/src/http_module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__http_module__["a"]; });
/* unused harmony reexport JsonpModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interfaces__ = __webpack_require__("../../../http/src/interfaces.js");
/* unused harmony reexport Connection */
/* unused harmony reexport ConnectionBackend */
/* unused harmony reexport XSRFStrategy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__static_request__ = __webpack_require__("../../../http/src/static_request.js");
/* unused harmony reexport Request */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__static_response__ = __webpack_require__("../../../http/src/static_response.js");
/* unused harmony reexport Response */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__url_search_params__ = __webpack_require__("../../../http/src/url_search_params.js");
/* unused harmony reexport QueryEncoder */
/* unused harmony reexport URLSearchParams */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__version__ = __webpack_require__("../../../http/src/version.js");
/* unused harmony reexport VERSION */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */














//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../http/src/interfaces.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConnectionBackend; });
/* unused harmony export Connection */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XSRFStrategy; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {\@link Request}.
 *
 * \@experimental
 * @abstract
 */
var ConnectionBackend = (function () {
    function ConnectionBackend() {
    }
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    ConnectionBackend.prototype.createConnection = function (request) { };
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * \@experimental
 * @abstract
 */
var Connection = (function () {
    function Connection() {
    }
    return Connection;
}());
function Connection_tsickle_Closure_declarations() {
    /** @type {?} */
    Connection.prototype.readyState;
    /** @type {?} */
    Connection.prototype.request;
    /** @type {?} */
    Connection.prototype.response;
}
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * \@experimental
 * @abstract
 */
var XSRFStrategy = (function () {
    function XSRFStrategy() {
    }
    /**
     * @abstract
     * @param {?} req
     * @return {?}
     */
    XSRFStrategy.prototype.configureRequest = function (req) { };
    return XSRFStrategy;
}());
//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "../../../http/src/static_request.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__body__ = __webpack_require__("../../../http/src/body.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums__ = __webpack_require__("../../../http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__headers__ = __webpack_require__("../../../http/src/headers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_utils__ = __webpack_require__("../../../http/src/http_utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url_search_params__ = __webpack_require__("../../../http/src/url_search_params.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
/* unused harmony export ArrayBuffer */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {\@link Http} and
 * {\@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {\@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '\@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '\@angular/http';
 *
 * \@Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * \@experimental
 */
var Request = (function (_super) {
    __extends(Request, _super);
    /**
     * @param {?} requestOptions
     */
    function Request(requestOptions) {
        _super.call(this);
        // TODO: assert that url is present
        var url = requestOptions.url;
        this.url = requestOptions.url;
        if (requestOptions.search) {
            var search = requestOptions.search.toString();
            if (search.length > 0) {
                var prefix = '?';
                if (this.url.indexOf('?') != -1) {
                    prefix = (this.url[this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                this.url = url + prefix + search;
            }
        }
        this._body = requestOptions.body;
        this.method = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__http_utils__["b" /* normalizeMethodName */])(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__headers__["a" /* Headers */](requestOptions.headers);
        this.contentType = this.detectContentType();
        this.withCredentials = requestOptions.withCredentials;
        this.responseType = requestOptions.responseType;
    }
    /**
     * Returns the content type enum based on header options.
     * @return {?}
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].JSON;
            case 'application/x-www-form-urlencoded':
                return __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].FORM;
            case 'multipart/form-data':
                return __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer ? __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].ARRAY_BUFFER : __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     * @return {?}
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].NONE;
        }
        else if (this._body instanceof __WEBPACK_IMPORTED_MODULE_4__url_search_params__["a" /* URLSearchParams */]) {
            return __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].FORM;
        }
        else if (this._body instanceof FormData) {
            return __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].FORM_DATA;
        }
        else if (this._body instanceof Blob) {
            return __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].BLOB;
        }
        else if (this._body instanceof ArrayBuffer) {
            return __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].JSON;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     * @return {?}
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].JSON:
                return this.text();
            case __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].FORM:
                return this.text();
            case __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].FORM_DATA:
                return this._body;
            case __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].TEXT:
                return this.text();
            case __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].BLOB:
                return this.blob();
            case __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* ContentType */].ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(__WEBPACK_IMPORTED_MODULE_0__body__["a" /* Body */]));
function Request_tsickle_Closure_declarations() {
    /**
     * Http method with which to perform the request.
     * @type {?}
     */
    Request.prototype.method;
    /**
     * {\@link Headers} instance
     * @type {?}
     */
    Request.prototype.headers;
    /**
     * Url of the remote resource
     * @type {?}
     */
    Request.prototype.url;
    /**
     * Type of the request body *
     * @type {?}
     */
    Request.prototype.contentType;
    /**
     * Enable use credentials
     * @type {?}
     */
    Request.prototype.withCredentials;
    /**
     * Buffer to store the response
     * @type {?}
     */
    Request.prototype.responseType;
}
var /** @type {?} */ noop = function () { };
var /** @type {?} */ w = typeof window == 'object' ? window : noop;
var /** @type {?} */ FormData = ((w) /** TODO #9100 */)['FormData'] || noop;
var /** @type {?} */ Blob = ((w) /** TODO #9100 */)['Blob'] || noop;
var /** @type {?} */ ArrayBuffer = ((w) /** TODO #9100 */)['ArrayBuffer'] || noop;
//# sourceMappingURL=static_request.js.map

/***/ }),

/***/ "../../../http/src/static_response.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__body__ = __webpack_require__("../../../http/src/body.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Response; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * \@experimental
 */
var Response = (function (_super) {
    __extends(Response, _super);
    /**
     * @param {?} responseOptions
     */
    function Response(responseOptions) {
        _super.call(this);
        this._body = responseOptions.body;
        this.status = responseOptions.status;
        this.ok = (this.status >= 200 && this.status <= 299);
        this.statusText = responseOptions.statusText;
        this.headers = responseOptions.headers;
        this.type = responseOptions.type;
        this.url = responseOptions.url;
    }
    /**
     * @return {?}
     */
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(__WEBPACK_IMPORTED_MODULE_0__body__["a" /* Body */]));
function Response_tsickle_Closure_declarations() {
    /**
     * One of "basic", "cors", "default", "error", or "opaque".
     *
     * Defaults to "default".
     * @type {?}
     */
    Response.prototype.type;
    /**
     * True if the response's status is within 200-299
     * @type {?}
     */
    Response.prototype.ok;
    /**
     * URL of response.
     *
     * Defaults to empty string.
     * @type {?}
     */
    Response.prototype.url;
    /**
     * Status code returned by server.
     *
     * Defaults to 200.
     * @type {?}
     */
    Response.prototype.status;
    /**
     * Text representing the corresponding reason phrase to the `status`, as defined in [ietf rfc 2616
     * section 6.1.1](https://tools.ietf.org/html/rfc2616#section-6.1.1)
     *
     * Defaults to "OK"
     * @type {?}
     */
    Response.prototype.statusText;
    /**
     * Non-standard property
     *
     * Denotes how many of the response body's bytes have been loaded, for example if the response is
     * the result of a progress event.
     * @type {?}
     */
    Response.prototype.bytesLoaded;
    /**
     * Non-standard property
     *
     * Denotes how many bytes are expected in the final response body.
     * @type {?}
     */
    Response.prototype.totalBytes;
    /**
     * Headers object based on the `Headers` class in the [Fetch
     * Spec](https://fetch.spec.whatwg.org/#headers-class).
     * @type {?}
     */
    Response.prototype.headers;
}
//# sourceMappingURL=static_response.js.map

/***/ }),

/***/ "../../../http/src/url_search_params.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export QueryEncoder */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URLSearchParams; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @param {?=} rawParams
 * @return {?}
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var /** @type {?} */ map = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * \@experimental
 *
 */
var QueryEncoder = (function () {
    function QueryEncoder() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    QueryEncoder.prototype.encodeKey = function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    QueryEncoder.prototype.encodeValue = function (v) { return standardEncoding(v); };
    return QueryEncoder;
}());
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${\@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '\@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * \@experimental
 */
var URLSearchParams = (function () {
    /**
     * @param {?=} rawParams
     * @param {?=} queryEncoder
     */
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    /**
     * @return {?}
     */
    URLSearchParams.prototype.clone = function () {
        var /** @type {?} */ clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.get = function (param) {
        var /** @type {?} */ storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @return {?}
     */
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var /** @type {?} */ paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());
function URLSearchParams_tsickle_Closure_declarations() {
    /** @type {?} */
    URLSearchParams.prototype.paramsMap;
    /** @type {?} */
    URLSearchParams.prototype.rawParams;
    /** @type {?} */
    URLSearchParams.prototype.queryEncoder;
}
//# sourceMappingURL=url_search_params.js.map

/***/ }),

/***/ "../../../http/src/version.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* unused harmony export VERSION */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @stable
 */
var /** @type {?} */ VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Version */]('2.4.10');
//# sourceMappingURL=version.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map