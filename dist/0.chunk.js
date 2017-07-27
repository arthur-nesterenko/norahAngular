webpackJsonp([0],{

/***/ "../../../../../src/app/pages/motion-editor/motion-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <!--content-->\n  <div class=\"content\" id=\"content\">\n\n    <div class=\"webgl-content\">\n      <div id=\"gameContainer\" style=\"width: 850px; height: 600px\"></div>\n      <div align=\"center\">\n        <div class=\"webgl-logo\"></div>\n        <div class=\"fullscreen\" onclick=\"gameInstance.SetFullscreen(1)\"></div>\n\n        <br/>\n        <!--<input id=\"anim_url\" autocomplete=\"on\" type=\"text\" placeholder=\"animation url\" value=\"http://35.197.25.101:8080/JSONAnimations/aim_pistol.json\">-->\n\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"content\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/motion-editor/motion-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blending_control {\n  margin-bottom: 75px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/motion-editor/motion-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_ref__ = __webpack_require__("../../../../../src/app/global-ref.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotionEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MotionEditorComponent = (function () {
    function MotionEditorComponent(global) {
        this.global = global;
    }
    MotionEditorComponent.prototype.ngAfterViewInit = function () {
        var wnd = this.global.nativeGlobal;
        var gameInstance;
        function logout() {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signOut().then(function () {
                console.log('Signed Out');
            }, function (error) {
                console.error('Sign Out Error', error);
            });
            location.reload();
        }
        __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()(document).ready(function () {
            setTimeout(loadPage, 1500);
        });
        var animations_library = [];
        function loadPage() {
            if (__WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser) {
                gameInstance = UnityLoader.instantiate('gameContainer', 'assets/other/Build22(With External Call to [LoadFinished]).json', {
                    onProgress: UnityProgress
                });
                console.log('Auth');
            }
            else {
                console.log('Not Auth');
                __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('#myModal').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show: true
                });
            }
        }
        wnd.LoadFinished = function () {
            console.log('Unity Loading Finished');
            var userId = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid;
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('usernames').child(userId).child('mylibrary').once('value', function (ss) {
                var animations = ss.val();
                if (!animations) {
                    alert('No items in library');
                }
                Object.keys(animations).forEach(function (animKey) {
                    console.log(animations[animKey].name);
                    animations_library.push(animations[animKey].name);
                    __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref('jsonFiles').child(animations[animKey].name + '.json').getDownloadURL().then(function (downloadUrl) {
                        console.log(downloadUrl);
                        console.log(typeof (downloadUrl));
                        __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('#anim_url').attr('value', downloadUrl);
                        gameInstance.SendMessage('RTClipEditor', 'LoadAnimFromUrl', downloadUrl);
                    });
                });
                // $.unblockUI();
            });
        };
        function loadAnimFromUrl(url) {
            console.log('Inside loadAnimFromUrl');
            console.log(url);
            __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('#anim_url').attr('value', url);
            gameInstance.SendMessage('RTClipEditor', 'LoadAnimFromUrl', url);
        }
    };
    return MotionEditorComponent;
}());
MotionEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-motion-editor',
        template: __webpack_require__("../../../../../src/app/pages/motion-editor/motion-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/motion-editor/motion-editor.component.scss"), __webpack_require__("../../../../../src/assets/css/poseeditor.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__global_ref__["a" /* GlobalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global_ref__["a" /* GlobalRef */]) === "function" && _a || Object])
], MotionEditorComponent);

var _a;
//# sourceMappingURL=motion-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/motion-editor/motion-editor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__motion_editor_component__ = __webpack_require__("../../../../../src/app/pages/motion-editor/motion-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionEditorModule", function() { return MotionEditorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MotionEditorModule = (function () {
    function MotionEditorModule() {
    }
    return MotionEditorModule;
}());
MotionEditorModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([{
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__motion_editor_component__["a" /* MotionEditorComponent */]
                }])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__motion_editor_component__["a" /* MotionEditorComponent */]]
    })
], MotionEditorModule);

//# sourceMappingURL=motion-editor.module.js.map

/***/ }),

/***/ "../../../../../src/assets/css/poseeditor.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".webgl-content * {border: 0; margin: 0; padding: 0}\n.webgl-content {position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);}\n\n.webgl-content .logo, .progress {position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);}\n.webgl-content .logo {background: url('https://norahanimation.firebaseapp.com/assets/images/progressLogo.Dark.png') no-repeat center / contain; width: 154px; height: 130px;}\n.webgl-content .progress {height: 18px; width: 141px; margin-top: 90px;}\n.webgl-content .progress .empty {background: url('https://norahanimation.firebaseapp.com/assets/images/progressEmpty.Dark.png') no-repeat right / cover; float: right; width: 100%; height: 100%; display: inline-block;}\n.webgl-content .progress .full {background: url('https://norahanimation.firebaseapp.com/assets/images/progressFull.Dark.png') no-repeat left / cover; float: left; width: 0%; height: 100%; display: inline-block;}\n\n.webgl-content .logo.Dark {background-image: url('https://norahanimation.firebaseapp.com/assets/images/progressLogo.Dark.png');}\n.webgl-content .progress.Dark .empty {background-image: url('https://norahanimation.firebaseapp.com/assets/images/progressEmpty.Dark.png');}\n.webgl-content .progress.Dark .full {background-image: url('https://norahanimation.firebaseapp.com/assets/images/progressFull.Dark.png');}\n\n.webgl-content .footer {margin-top: 5px; height: 38px; line-height: 38px; font-family: Helvetica, Verdana, Arial, sans-serif; font-size: 18px;}\n.webgl-content .footer .webgl-logo, .title, .fullscreen {height: 100%; display: inline-block; background: transparent center no-repeat;}\n.webgl-content .footer .title {margin-right: 10px; float: right;}\n.webgl-content .footer .fullscreen {background-image: url('https://norahanimation.firebaseapp.com/assets/images/fullscreen.png'); width: 38px; float: right;}\n\n.webgl-content {\n    margin-top: 30px;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\n.wrapper {\n    min-height: 100%;\n    height: 100%;\n    margin: 0 auto -142px;\n    /* the bottom margin is the negative value of the footer's height */\n}\n\n.footer,\n.push {\n    height: 142px;\n    /* .push must be the same height as .footer */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=0.chunk.js.map