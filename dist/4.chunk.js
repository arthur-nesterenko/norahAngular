webpackJsonp([4],{

/***/ "../../../../../src/app/pages/library/library.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" container-fluid zodiac_box zodiac_box_repos\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 col-xs-4 leftSideBar\">\n\n    </div>\n\n    <div class=\"col-sm-9 col-xs-8 zodiacCont library\">\n      <!--<div *ngFor=\"let animation of animations.slice((page - 1) * 15 , (page - 1) * 15 + 15)\" class=\"box fadeInUp clust\">-->\n\n      <!--&lt;!&ndash;<div style=\"z-index: 111;\">&ndash;&gt;-->\n      <!--&lt;!&ndash;<a class=\"newwwww\" href=\"\"><i class=\"fa fa-plus-circle fa-2x\" aria-hidden=\"true\"></i></a>&ndash;&gt;-->\n      <!--&lt;!&ndash;<a href=\"\"></a>&ndash;&gt;-->\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\n      <!--&lt;!&ndash;<video autoplay loop muted src=\"{{animation.mp4Url}}\">&ndash;&gt;-->\n\n      <!--&lt;!&ndash;</video>&ndash;&gt;-->\n      <!--</div>-->\n    </div>\n\n\n  </div>\n  <div class=\"row\" *ngIf=\"animations?.length\">\n    <div class=\"col-lg-5 col-lg-offset-5\">\n      <ngb-pagination [collectionSize]=\"animations?.length\" [(page)]=\"page\" (pageChange)=\"setPage($event)\"\n                      [maxSize]=\"15\" [rotate]=\"true\" [boundaryLinks]=\"true\">\n\n      </ngb-pagination>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/library/library.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #202a34; }\n\n.zodiac_box {\n  overflow: hidden;\n  background: #202a34;\n  text-align: left;\n  padding: 0;\n  min-height: 800px;\n  font-family: 'Questrial', sans-serif; }\n\n.leftSideBar {\n  background-color: #202a34;\n  margin-top: -80px;\n  padding: 10px 0;\n  width: 200px;\n  height: 620px;\n  margin-left: 40px; }\n  .leftSideBar ul li {\n    background-color: #253443;\n    position: relative; }\n    .leftSideBar ul li a {\n      color: #DCD7E0;\n      border-radius: 0; }\n\n.nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n  background-color: #008aff !important; }\n\n.nav > li > a:hover, .nav > li > a:focus {\n  text-decoration: none;\n  background-color: #008aff !important; }\n\n.subMenuS {\n  float: right;\n  position: absolute;\n  overflow: scroll;\n  margin-left: 70%;\n  margin-top: -13%;\n  width: 100%;\n  height: 0; }\n  .subMenuS li {\n    display: none;\n    width: 70%;\n    z-index: 9999;\n    margin-top: -14%;\n    background-color: #1f2933 !important;\n    opacity: 0.7;\n    float: right;\n    cursor: pointer; }\n\nli.presentation:hover .subMenuS {\n  height: 337px; }\n  li.presentation:hover .subMenuS .subManuLi {\n    display: block; }\n\n.menuS li {\n  position: relative; }\n  .menuS li:hover .subMenuS li {\n    display: block; }\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px; }\n\n.menuS li:hover .subMenuS li {\n  display: block; }\n\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0; }\n\n.pagination > li > a, .pagination > li > span {\n  background-colo: #253443 !important;\n  color: darkgrey;\n  border: 1px solid #1f2933; }\n\n.menuS {\n  padding-top: 70px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/library/library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_ref__ = __webpack_require__("../../../../../src/app/global-ref.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LibraryComponent = (function () {
    function LibraryComponent(glob) {
        this.glob = glob;
    }
    LibraryComponent.prototype.ngAfterViewInit = function () {
        var wnd = this.glob.nativeGlobal;
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).ready(function () {
            setTimeout(loadPage, 1500);
        });
        function loadPage() {
            if (__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser) {
                var blocks_1 = '';
                var animationsArray_1 = [];
                var k_1 = 1;
                var userId = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('usernames').child(userId).child('mylibrary').orderByValue().once('value', function (ss) {
                    var animations = ss.val();
                    if (!animations) {
                        alert('No items in library');
                    }
                    else {
                        animationsArray_1 = Object.keys(animations).map(function (key) {
                            console.log(animations);
                            var anim = animations[key];
                            anim.firebaseKey = key;
                            var storageBucket = __WEBPACK_IMPORTED_MODULE_2_firebase__["app"]().options.storageBucket;
                            var animMp4Name = 'mp4Files/' + anim.name + '.mp4';
                            var mp4Url = "https://firebasestorage.googleapis.com/v0/b/norahanimation.appspot.com/o/" + encodeURIComponent(animMp4Name) + "?alt=media";
                            var animFileName = 'animFiles/' + anim.name + '.anim';
                            var animFileUrl = "https://firebasestorage.googleapis.com/v0/b/norahanimation.appspot.com/o/" + encodeURIComponent(animFileName) + "?alt=media";
                            anim.mp4Url = mp4Url;
                            anim.animUrl = animFileUrl;
                            return anim;
                        }).forEach(function (anim) {
                            blocks_1 += '<div class="box-video box' + k_1 + ' fadeInUp clust" data-wow-delay="0.3s" data-page="#">';
                            blocks_1 += '<div style="z-index: 111;">';
                            blocks_1 += '<div class="animation-name" style="text-align:center;margin-top:40px;display:block">' + anim.name + '</div>';
                            blocks_1 += '<a class="download-anim" href="' + anim.animUrl + '" data-url="' + anim.animUrl + '" data-duration="' + anim.duration + '" data-name="' + anim.name + '.anim" style="float:none !important;text-align:center;display:block;margin-top:0px"><br/><i class="fa fa-download fa-2x" aria-hidden="true"></i></a></center>';
                            blocks_1 += '<label class="fancy-checkbox library-checkbox">';
                            blocks_1 += '<input  type="checkbox" name="' + anim.firebaseKey + '" click="if(this.checked){ document.getElementById(' + k_1 + ').checked = true;} else {document.getElementById(' + k_1 + ').checked = false;}"/>';
                            blocks_1 += '<span></span>';
                            blocks_1 += '</label>';
                            blocks_1 += '</div>';
                            // blocks += '<label class="fancy-checkbox">';
                            // blocks += '<input type="checkbox" name="' + anim.firebaseKey + '" id="' + k + '"/>';
                            blocks_1 += '<span></span>';
                            blocks_1 += '</label>';
                            blocks_1 += '<video autoplay loop muted>';
                            blocks_1 += '<source src="' + anim.mp4Url + '" type="video/mp4" />';
                            blocks_1 += '</video>';
                            blocks_1 += '</div>';
                            k_1++;
                        });
                        __WEBPACK_IMPORTED_MODULE_1_jquery__('.zodiacCont').html(blocks_1);
                        __WEBPACK_IMPORTED_MODULE_1_jquery__('.box').show();
                        __WEBPACK_IMPORTED_MODULE_1_jquery__('.zodiacCont').show();
                        __WEBPACK_IMPORTED_MODULE_1_jquery__('.temp_margin').hide();
                        __WEBPACK_IMPORTED_MODULE_1_jquery__('.download-anim').click(function () {
                            var animDownloadUrl = __WEBPACK_IMPORTED_MODULE_1_jquery__(this).data('url');
                            __WEBPACK_IMPORTED_MODULE_1_jquery__["ajax"]({
                                url: animDownloadUrl,
                            });
                        });
                    }
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#myModal').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show: true
                });
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.zodiacCont').show();
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.temp_margin').hide();
            }
        }
        wnd.deleteSelected = function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.fancy-checkbox input').each(function () {
                var input = __WEBPACK_IMPORTED_MODULE_1_jquery__(this);
                if (input.is(':checked')) {
                    var userId = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
                    var imageKey = input.prop('name');
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('usernames').child(userId).child('mylibrary').child(imageKey).remove();
                    input.parent().parent().parent().remove();
                }
            });
        };
    };
    return LibraryComponent;
}());
LibraryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-library',
        template: __webpack_require__("../../../../../src/app/pages/library/library.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/library/library.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__global_ref__["a" /* GlobalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global_ref__["a" /* GlobalRef */]) === "function" && _a || Object])
], LibraryComponent);

var _a;
//# sourceMappingURL=library.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/library/library.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_component__ = __webpack_require__("../../../../../src/app/pages/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryModule", function() { return LibraryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LibraryModule = (function () {
    function LibraryModule() {
    }
    return LibraryModule;
}());
LibraryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbPaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([{
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__library_component__["a" /* LibraryComponent */]
                }]),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__library_component__["a" /* LibraryComponent */]]
    })
], LibraryModule);

//# sourceMappingURL=library.module.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map