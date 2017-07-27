webpackJsonp([4],{

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
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            message: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contactSuccessModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_component__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_component__["a" /* ModalDirective */]) === "function" && _a || Object)
], ContactUsComponent.prototype, "contactSuccessModal", void 0);
ContactUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact-us',
        template: __webpack_require__("../../../../../src/app/pages/contact-us/contact-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/contact-us/contact-us.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object])
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__contact_us_component__["a" /* ContactUsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
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

/***/ })

});
//# sourceMappingURL=4.chunk.js.map