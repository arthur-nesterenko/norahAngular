webpackJsonp([3],{

/***/ "../../../../../src/app/pages/style-transfer/style-transfer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n  <div class=\"merger_container_animation\">\n\n    <div class=\"container\">\n      <div class=\"row\" style=\"margin-top:7px;\">\n        <div class=\"col-md-10 col-md-offset-1\">\n          <div class=\"col-md-4\">\n\n            <h2 id=\"left_anim_title\" style=\"color:#84838c;font-size:15px;text-align:center;padding:5px 0 0 0;\">Input 1</h2>\n\n            <div class=\"row\">\n              <h2 style=\"color:#84838c;font-size:15px;text-align:center;padding:5px 0 0 0;\"></h2>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-1\">\n                <a href=\"javascript:ApplyLeftAnim(-1);\" class=\"carousel-control left\" style=\"left:0px; top: 110px; height: 0px;\">\n                  <img src=\"/assets/images/left_icon.png\">\n                </a>\n              </div>\n              <div class=\"col-md-9\">\n                <div class=\"left_animation_mp43\">\n\n                  <video autoplay loop muted id=\"left_animation_mp4\">\n                    <source id=\"left_animation_mp4_src\" src=\"\" type=\"video/mp4\" />\n                  </video>\n                  <!--<img src=\"img/plus_round.png\" style=\"position:absolute;top:5px;left:19px;\">-->\n                </div>\n              </div>\n\n              <div class=\"col-md-1\">\n                <a href=\"javascript:ApplyLeftAnim(1);\" class=\"carousel-control right\" style=\"right:37px; height: 0px; top: 110px;\">\n                  <img src=\"/assets/images/right_icon.png\">\n                </a>\n              </div>\n            </div>\n            <span id=\"left_anim_duration\"></span>\n            <input id=\"left_anim_name\" autocomplete=\"on\" type=\"text\" placeholder=\"left animation name\" value=\"https://firebasestorage.googleapis.com/v0/b/animake-672fc.appspot.com/o/yamlFiles%2Fblock.anim?alt=media&token=e05704ef-e047-4d5d-b690-d782817e329b\" class=\"in_bg\"\n                   style=\"display:none;\">\n          </div>\n          <div class=\"col-md-4 output-window\">\n            <h2 style=\"color:#84838c;font-size:15px;text-align:center;padding:5px 0 0 0;\">Output Window</h2>\n            <div id=\"gameContainer2\" class=\"col-md-11\">\n              <div id=\"gameContainer\" style=\"height: 250px\"></div>\n              <div class=\"enter-name\">\n                <div class=\"row\">\n                  <div class=\"col-md-10\" style=\"padding:0;margin:0;padding-left:17px;\">\n                    <input id=\"animation_name\" type=\"text\" autocomplete=\"off\" placeholder=\"enter name\" value=\"Test\" class=\"in_bg\" style=\"background:#66636f;border:0;width:100%;padding:7px 10px;border-radius:0 0 0 10px;color:#fff;outline:none;text-align:left;\">\n                  </div>\n                  <div class=\"col-md-2\" style=\"padding:0;margin:0;margin-left:-16px;background:#4c4756;\">\n                    <a href=\"javascript:downloadAnim();\"><span style=\"display:block;width:100%;height:35px;background:url('/assets/images/down_plus.jpg') no-repeat -0px 5px;border:0px solid #fff\"></span></a>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n          <h2 id=\"right_anim_title\" style=\"color:#84838c;font-size:15px;text-align:center;padding:5px 0 0 0;\">Input 2</h2>\n          <div class=\"col-md-4\">\n            <div class=\"row\">\n              <h2 style=\"color:#84838c;font-size:15px;text-align:center;padding:5px 0 0 0;\"></h2>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-1\">\n                <a href=\"javascript:ApplyRightAnim(-1);\" class=\"carousel-control left\" style=\"left: 0px; top: 110px; height: 0px;\">\n                  <img src=\"/assets/images/left_icon.png\">\n                </a>\n              </div>\n              <div class=\"col-md-9\">\n                <div class=\"image\">\n                  <video autoplay loop muted id=\"right_animation_mp4\">\n                    <source id=\"right_animation_mp4_src\" src=\"\" type=\"video/mp4\" />\n                  </video>\n                  <!--<img src=\"img/plus_round.png\" style=\"position:absolute;top:5px;left:19px;\">-->\n                </div>\n              </div>\n              <div class=\"col-md-1\">\n                <a href=\"javascript:ApplyRightAnim(1);\" class=\"carousel-control right\" style=\"right: 37px; height: 0px; top: 110px;\">\n                  <img src=\"/assets/images/right_icon.png\"></a>\n              </div>\n            </div>\n            <span id=\"right_anim_duration\"></span>\n            <input id=\"right_anim_name\" autocomplete=\"on\" type=\"text\" placeholder=\"right animation name\" value=\"http://35.197.25.101:8080/boxing.anim\" class=\"in_bg\" style=\"display:none;\">\n\n          </div>\n        </div>\n\n      </div>\n      <!-- ./row-->\n\n\n      <div class=\"row\">\n        <div class=\"col-md-10 col-md-offset-1\" style=\"margin-top:10px;\">\n          <div class=\"blending_options\">\n            <div class=\"col-md-3\">\n              <h3 style=\"font-size:18px;color:#fefefe;margin-top:10px;\">Blending Options:</h3>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"checkbox\">\n                <label><input type=\"checkbox\" autocomplete=\"off\" value=\"\" checked=\"checked\" onclick='handleClick(this);' name=\"Loop\">Loop</label>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"checkbox\">\n                <label><input type=\"checkbox\" autocomplete=\"off\" value=\"\" onclick='handleClick(this);' name=\"TimeStretch\">Time stretch</label>\n              </div>\n            </div>\n\n\n            <div class=\"col-md-4\">\n              <div class=\"\">\n                <div class=\"col-md-5\">\n                  <label style=\"color:#fefefe;font-size:14px;margin-top:10px;\">Start offset</label>\n                </div>\n                <div class=\"col-md-7\">\n                  <input class=\"range-slider__range\" autocomplete=\"off\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" name=\"StartOffs\" style=\"margin-top:17px;\">\n                </div>\n\n              </div>\n            </div>\n            <!--               <div class=\"col-md-2\">\n                <div class=\"checkbox\">\n                    <label><input type=\"checkbox\" autocomplete=\"off\" value=\"\" onclick='handleClick(this);' name=\"Blend Root Motion\">Blend Root Motion</label>\n                </div>\n            </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n\n  <div class=\"blending_control\">\n    <div class=\"container\" style=\"padding:0;\">\n      <div class=\"col-md-10 col-md-offset-1\">\n        <h3 style=\"font-size:18px;color:#fefefe;margin-top:-20px;margin-left:2px;\">Blending Control:</h3>\n        <div class=\"blending_control_block\">\n          <label>Head</label>\n          <div class=\"range-slider\">\n            <input class=\"range-slider__range\" autocomplete=\"off\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" name=\"Head\">\n          </div>\n        </div>\n\n        <div class=\"blending_control_block\">\n          <label>Torso</label>\n          <div class=\"range-slider\">\n            <input class=\"range-slider__range\" autocomplete=\"off\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" name=\"Trso\">\n          </div>\n        </div>\n\n        <div class=\"blending_control_block\">\n          <label>Left Arm</label>\n          <div class=\"range-slider\">\n            <input class=\"range-slider__range\" autocomplete=\"off\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" name=\"ArmL\">\n          </div>\n        </div>\n\n        <div class=\"blending_control_block\">\n          <label>Right Arm</label>\n          <div class=\"range-slider\">\n            <input class=\"range-slider__range\" autocomplete=\"off\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" name=\"ArmR\">\n          </div>\n        </div>\n\n        <div class=\"blending_control_block\">\n          <label>Left Leg</label>\n          <div class=\"range-slider\">\n            <input class=\"range-slider__range\" autocomplete=\"off\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" name=\"LegL\">\n          </div>\n        </div>\n\n        <div class=\"blending_control_block\">\n          <label>Right Leg</label>\n          <div class=\"range-slider\">\n            <input class=\"range-slider__range\" autocomplete=\"off\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" name=\"LegR\">\n          </div>\n        </div>\n\n        <div class=\"blending_control_block\">\n          <label>Fingers</label>\n          <div class=\"range-slider\">\n            <input class=\"range-slider__range\" autocomplete=\"off\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" name=\"Fing\">\n          </div>\n        </div>\n        <div class=\"blending_control_block\">\n          <label>Root</label>\n          <div class=\"range-slider\">\n            <input [(ngModel)]=\"root\" class=\"range-slider__range\" autocomplete=\"off\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" name=\"Root\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/style-transfer/style-transfer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blending_control, .blending_options {\n  line-height: 1.428571429;\n  color: #cbcbcb;\n  font-family: 'Questrial', sans-serif; }\n\n#slider1::-webkit-slider-runnable-track {\n  background: linear-gradient(to right, #09F 48%, lightgray 48%); }\n\n#slider1::-moz-range-track {\n  background: linear-gradient(to right, #09F 48%, lightgray 48%); }\n\n.slider-container {\n  border: none;\n  padding: 5px;\n  background: blue; }\n\ninput[type=range] {\n  /* Hides the slider so that custom slider can be made */\n  width: 100%;\n  /* Specific width is required for Firefox. */ }\n\ninput[type=range]:focus {\n  outline: none;\n  /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */ }\n\ninput[type=range]::-ms-track {\n  width: 100%;\n  cursor: pointer;\n  background: transparent;\n  /* Hides the slider so custom styles can be added */\n  border-color: transparent;\n  color: transparent; }\n\n.range-label {\n  display: table-cell;\n  vertical-align: middle; }\n\n.range-container {\n  display: table-cell;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 5px; }\n\n.slider {\n  width: 100%;\n  margin: 0;\n  margin-top: 5px;\n  height: 30px;\n  background: #39244E; }\n\n.slider::-webkit-slider-thumb {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid #aeaeae;\n  cursor: pointer;\n  margin-top: -7px; }\n\n.slider::-moz-range-thumb {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid #aeaeae;\n  cursor: pointer;\n  margin-top: -7px; }\n\n.slider::-ms-thumb {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid #aeaeae;\n  cursor: pointer;\n  margin-top: -7px;\n  margin-top: -3px; }\n\n.slider::-webkit-slider-runnable-track {\n  height: 6px;\n  border-radius: 6px;\n  background: blue; }\n\n.slider::-moz-range-track {\n  height: 6px;\n  border-radius: 6px;\n  background: blue; }\n\n.slider::-moz-focus-outer {\n  border: 0; }\n\n.slider::-ms-track {\n  height: 6px;\n  border-radius: 6px;\n  background: blue; }\n\n.slider::-ms-fill-lower {\n  background: #09f;\n  border-radius: 6px; }\n\n.slider::-ms-fill-upper {\n  background: lightgray;\n  border-radius: 6px; }\n\n.main {\n  bottom: 0;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n\np1 {\n  font-size: 35px; }\n\np2 {\n  font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/style-transfer/style-transfer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_ref__ = __webpack_require__("../../../../../src/app/global-ref.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleTransferComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StyleTransferComponent = (function () {
    function StyleTransferComponent(global) {
        this.global = global;
        this.root = 1;
    }
    StyleTransferComponent.prototype.ngAfterViewInit = function () {
        var gameInstance;
        var wnd = this.global.nativeGlobal;
        var animationArray = [];
        var left_array = [];
        var right_array = [];
        var left_displaynames_array = [];
        var right_displaynames_array = [];
        var left_duration_array = [];
        var right_duration_array = [];
        var current_left;
        var current_right;
        wnd.yamllibrary = [];
        wnd.mp4library = [];
        var yamlUrls = ['http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/aggressive+look.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/backflip.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/block.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/casual+conversation.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/chicken+dance.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/dancing.anim'];
        var yamlUrls_left = ['http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/chicken+dance.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/deep+breathing.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/fighting.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/playing+guitar.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/standing+idle1.anim'];
        var yamlUrls_right = ['http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/backflip.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/block.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/dancing.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/flying+kick.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/kick.anim'];
        var mp4Urls_left = ['http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/chicken+dance.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/deep+breathing.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/fighting.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/playing+guitar.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/standing+idle1.mp4'];
        var mp4Urls_right = ['http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/backflip.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/block.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/dancing.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/flying+kick.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/kick.mp4'];
        var mp4Urls = ['http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/aggressive+look.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/backflip.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/block.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/casual+conversation.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/chicken+dance.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/dancing.mp4'];
        // Engine loading is finished, we can call animations loading method...
        function sorter(inputNames, inputDurations, inputDisplayNames) {
            var names = inputNames;
            var displayNames = inputDisplayNames;
            var durations = inputDurations;
            var animations = names;
            if (names.length === 0) {
                alert('No items in library');
                // $.unblockUI();
            }
            console.log('Length of Animations' + names.length);
            var half_length = Math.ceil(names.length) / 2;
            console.log('Mod ' + half_length);
            var count = 0;
            for (var i in names) {
                ++count;
                if (animations.hasOwnProperty(i) && typeof (i) !== 'function') {
                    animationArray.push(names[i]);
                    if (count <= half_length) {
                        right_array.push(names[i]);
                        right_displaynames_array.push(displayNames[i]);
                        console.log('gone right ' + names[i]);
                        right_duration_array.push(durations[i]);
                        console.log('right duration ' + durations[i]);
                    }
                    else {
                        left_array.push(names[i]);
                        left_displaynames_array.push(displayNames[i]);
                        console.log('gone left ' + names[i]);
                        left_duration_array.push(durations[i]);
                        console.log('left duration ' + durations[i]);
                    }
                }
            }
            console.log('animationArray');
            console.log('left_array: ');
            console.log(left_array);
            console.log(left_duration_array);
            console.log('right_array: ');
            console.log(right_array);
            console.log(right_duration_array);
            // Right
            __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref('yamlFiles').child(right_array[0] + '.anim').getDownloadURL().then(function (animDownloadUrl) {
                __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref('mp4Files').child(right_array[0] + '.mp4').getDownloadURL().then(function (downloadUrl) {
                    console.log(animDownloadUrl);
                    console.log(downloadUrl);
                    gameInstance.SendMessage('ControllerHelper', 'ExecuteStartFromOutside', animDownloadUrl + '|' + animDownloadUrl);
                    document.getElementById('right_anim_name').value = animDownloadUrl;
                    document.getElementById('right_anim_title').innerHTML = right_displaynames_array[0];
                    PlayRightAnimation(downloadUrl, right_displaynames_array[0], right_duration_array[0]);
                });
            });
            // Left
            __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref('yamlFiles').child(left_array[0] + '.anim').getDownloadURL().then(function (animDownloadUrl) {
                __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref('mp4Files').child(left_array[0] + '.mp4').getDownloadURL().then(function (downloadUrl) {
                    console.log(animDownloadUrl);
                    console.log(downloadUrl);
                    gameInstance.SendMessage('ControllerHelper', 'ExecuteStartFromOutside', animDownloadUrl + '|' + animDownloadUrl);
                    document.getElementById('left_anim_name').value = animDownloadUrl;
                    document.getElementById('left_anim_title').innerHTML = left_displaynames_array[0];
                    PlayLeftAnimation(downloadUrl, left_displaynames_array[0], left_duration_array[0]);
                });
            });
        }
        var childrenCount;
        var semaphore = false;
        wnd.UnityLoadFinished = function () {
            getList();
        };
        function getList() {
            var count = 0;
            var userId = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid;
            var names = [];
            var displayNames = [];
            var durations = [];
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('usernames').child(userId).child('mylibrary').orderByChild('duration').on('child_added', function (snapshot) {
                ++count;
                console.log(snapshot.val());
                console.log('Anim was ' + snapshot.val().duration + ' seconds long');
                durations.push(snapshot.val().duration);
                names.push(snapshot.val().name);
                displayNames.push(snapshot.val().displayName);
                if (count === childrenCount) {
                    for (var i in names) {
                        console.log(names[i] + ' ' + durations[i]);
                    }
                    sorter(names, durations, displayNames);
                }
            });
        }
        function PlayLeftAnimation(url, title, duration) {
            var player = document.getElementById('left_animation_mp4');
            var mp4Vid = document.getElementById('left_animation_mp4_src');
            document.getElementById('left_anim_title').innerHTML = title;
            document.getElementById('left_anim_duration').innerHTML = duration;
            player.pause();
            mp4Vid.src = url;
            player.load();
            player.play();
        }
        function PlayRightAnimation(url, title, duration) {
            var player = document.getElementById('right_animation_mp4');
            var mp4Vid = document.getElementById('right_animation_mp4_src');
            document.getElementById('right_anim_title').innerHTML = title;
            document.getElementById('right_anim_duration').innerHTML = duration;
            player.pause();
            mp4Vid.src = url;
            player.load();
            player.play();
        }
        function PlayAnimations() {
            console.log('Inside PlayAnimations');
            console.log('current_left: ', current_left);
            console.log('current_right: ', current_right);
            //Play left
            var player = document.getElementById('left_animation_mp4');
            var mp4Vid = document.getElementById('left_animation_mp4_src');
            player.pause();
            mp4Vid.src = mp4Urls_left[current_left];
            player.load();
            player.play();
            //Play Right
            player = document.getElementById('right_animation_mp4');
            mp4Vid = document.getElementById('right_animation_mp4_src');
            player.pause();
            mp4Vid.src = mp4Urls_right[current_right];
            player.load();
            player.play();
        }
        wnd.ApplyLeftAnim = function (direction) {
            console.log(animationArray);
            console.log('left_array: ');
            console.log(left_array);
            console.log(current_left);
            console.log(direction);
            var len = left_array.length;
            current_left = current_left + direction;
            if (current_left >= len) {
                current_left = 0;
            }
            if (current_left < 0) {
                current_left = len - 1;
            }
            console.log(left_array[current_left]);
            __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref('yamlFiles').child(left_array[current_left] + '.anim').getDownloadURL().then(function (animDownloadUrl) {
                __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref('mp4Files').child(left_array[current_left] + '.mp4').getDownloadURL().then(function (downloadUrl) {
                    console.log(animDownloadUrl);
                    console.log(downloadUrl);
                    gameInstance.SendMessage('ControllerHelper', 'LoadAnimFromManager', animDownloadUrl + '|' + '0');
                    document.getElementById('left_anim_name').value = animDownloadUrl;
                    document.getElementById('right_anim_name').value = animDownloadUrl;
                    PlayLeftAnimation(downloadUrl, left_displaynames_array[current_left], left_duration_array[current_left]);
                });
            });
            //PlayAnimations();
            document.getElementById('left_anim_name').value = left_array[current_left];
            document.getElementById('left_anim_duration').innerHTML = left_duration_array[current_left];
        };
        wnd.ApplyRightAnim = function (direction) {
            console.log(animationArray);
            console.log(current_right);
            console.log(direction);
            console.log('right_array: ');
            console.log(right_array);
            var len = right_array.length;
            current_right = current_right + direction;
            if (current_right >= len) {
                current_right = 0;
            }
            if (current_right < 0) {
                current_right = len - 1;
            }
            console.log(right_array[current_right]);
            __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref('yamlFiles').child(right_array[current_right] + '.anim').getDownloadURL().then(function (animDownloadUrl) {
                __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref('mp4Files').child(right_array[current_right] + '.mp4').getDownloadURL().then(function (downloadUrl) {
                    console.log(animDownloadUrl);
                    console.log(downloadUrl);
                    gameInstance.SendMessage('ControllerHelper', 'LoadAnimFromManager', animDownloadUrl + '|' + '1');
                    document.getElementById('left_anim_name').value = animDownloadUrl;
                    document.getElementById('right_anim_name').value = animDownloadUrl;
                    PlayRightAnimation(downloadUrl, right_displaynames_array[current_right], right_duration_array[current_right]);
                });
            });
            //PlayAnimations();
            document.getElementById('right_anim_name').value = right_array[current_right];
            document.getElementById('right_anim_duration').innerHTML = right_duration_array[current_right];
        };
        function saveToFirebase() {
            // Collect the values from form.
            var objectToSave = {
                name: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('#animation_name').val(),
                blending_options: {
                    loop: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'Loop\']').is(':checked'),
                    timeStretch: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'TimeStretch\']').is(':checked'),
                    startOffs: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'StartOffs\']').val()
                },
                blending_tools: {
                    head: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'Head\']').val(),
                    trso: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'Trso\']').val(),
                    armL: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'ArmL\']').val(),
                    armR: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'ArmR\']').val(),
                    legL: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'LegL\']').val(),
                    legR: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'LegR\']').val(),
                    fing: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'Fing\']').val(),
                    root: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'Root\']').val()
                }
            };
            // Get the current user id.
            var userId = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid;
            // Get the reference to new object in firebase.
            var ref = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]()
                .ref('usernames')
                .child(userId)
                .child('styletranfertool')
                .push();
            // Set the value for the newly created reference.
            ref.set(objectToSave);
        }
        wnd.downloadAnim = function () {
            saveToFirebase();
            var txt = document.getElementById('animation_name');
            var animName = txt.value;
            gameInstance.SendMessage('ControllerHelper', 'ExportFromOutside', animName);
        };
        wnd.saveAnim = function () {
            var user = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser;
            // Collect the values from form.
            var objectToSave = {
                user: {
                    mail: user.email,
                    uid: user.uid,
                    name: user.displayName
                },
                animUrl: 'Not available',
                styletranfertool: {
                    name: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('#animation_name').val(),
                    blending_options: {
                        loop: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'Loop\']').is(':checked'),
                        timeStretch: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'TimeStretch\']').is(':checked'),
                        startOffs: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'StartOffs\']').val()
                    },
                    blending_tools: {
                        head: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'Head\']').val(),
                        trso: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'Trso\']').val(),
                        armL: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'ArmL\']').val(),
                        armR: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'ArmR\']').val(),
                        legL: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'LegL\']').val(),
                        legR: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'LegR\']').val(),
                        fing: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'Fing\']').val(),
                        root: __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('input[name=\'Root\']').val()
                    },
                    leftAnimation: {
                        name: left_displaynames_array[current_left],
                        duration: left_duration_array[current_left],
                        file: left_array[current_left]
                    },
                    rightAnimation: {
                        name: right_displaynames_array[current_right],
                        duration: right_duration_array[current_right],
                        file: right_array[current_right]
                    }
                },
                created: new Date().toLocaleDateString()
            };
            // Get the current user id.
            var userId = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid;
            console.log(objectToSave);
            // Get the reference to new object in firebase.
            var ref = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]()
                .ref('contests')
                .push();
            // Set the value for the newly created reference.
            try {
                ref.set(objectToSave);
                alert('Anim: ' + objectToSave.styletranfertool.name + ' has been saved to firebase');
            }
            catch (e) {
                alert('Failed to save the anim..!' + e);
            }
        };
        wnd.handleClick = function (cb) {
            var name = cb.getAttribute('name');
            if (name === 'Loop')
                gameInstance.SendMessage('ControllerHelper', 'SetLoop', cb.checked.toString());
            if (name === 'TimeStretch')
                gameInstance.SendMessage('ControllerHelper', 'SetTimeStretch', cb.checked.toString());
        };
        var rangeSlider = function () {
            var slider = __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('.range-slider'), range = __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('.range-slider__range'), value = __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('.range-slider__value');
            slider.each(function () {
                value.each(function () {
                    var val = __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()(this).prev().attr('value');
                    console.log(value);
                    __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()(this).html(val);
                });
                range.on('input', function () {
                    var name = __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()(this).attr('name');
                    gameInstance.SendMessage('ControllerHelper', 'SetSliderValue', name + '|' + this.value);
                    __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()(this).next(value).html(this.value);
                });
            });
        };
        rangeSlider();
        __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()(document).ready(function () {
            current_left = 0;
            current_right = 0;
            setTimeout(loadPage, 1500);
        });
        function loadPage() {
            if (__WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser) {
                console.log('Auth');
                var userId = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid;
                var ss_1 = [];
                __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('usernames').child(userId).child('mylibrary').orderByChild('duration').once('value').then(function (snapshot) {
                    ss_1 = snapshot.val();
                    console.log('Number of children ' + snapshot.numChildren());
                    childrenCount = snapshot.numChildren();
                    semaphore = true;
                    if (childrenCount < 2) {
                        alert('Add atleast 2 animations from the Repository');
                    }
                    else {
                        gameInstance = UnityLoader.instantiate('gameContainer', 'assets/other/WebBuild.json');
                    }
                });
            }
            else {
                console.log('Not logged in');
                __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('#myModal').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show: true
                });
            }
        }
    };
    return StyleTransferComponent;
}());
StyleTransferComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-style-transfer',
        template: __webpack_require__("../../../../../src/app/pages/style-transfer/style-transfer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/style-transfer/style-transfer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__global_ref__["a" /* GlobalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global_ref__["a" /* GlobalRef */]) === "function" && _a || Object])
], StyleTransferComponent);

var _a;
//# sourceMappingURL=style-transfer.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/style-transfer/style-transfer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_transfer_component__ = __webpack_require__("../../../../../src/app/pages/style-transfer/style-transfer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleTransferModule", function() { return StyleTransferModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StyleTransferModule = (function () {
    function StyleTransferModule() {
    }
    return StyleTransferModule;
}());
StyleTransferModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([{
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__style_transfer_component__["a" /* StyleTransferComponent */]
                }])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__style_transfer_component__["a" /* StyleTransferComponent */]]
    })
], StyleTransferModule);

//# sourceMappingURL=style-transfer.module.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map