/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../assets/js/app.js":
/*!***************************!*\
  !*** ../assets/js/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"../assets/js/common.js\");\n\n\nconst app = {\n    device: {\n        mobile: 520,\n        tablet: 768,\n        laptop: 1024,\n        desktop: 1224\n    },\n    window: {\n        height: document.documentElement.clientHeight,\n        width: document.documentElement.clientWidth\n    },\n    page: {\n        height: document.body.clientHeight,\n        width: document.body.clientWidth\n    },\n    sticky: {\n        height: document.querySelector('.sticky') == null ? null : document.querySelector('.sticky').clientHeight,\n        position: document.querySelector('.sticky') == null ? null : document.querySelector('.sticky').offsetTop\n    }\n};\nvar tabsItem = document.querySelectorAll('.tabs .items .item');\nfor (let i = 0; i < tabsItem.length; i++) {\n    tabsItem[i].addEventListener('click', event => {\n        _common__WEBPACK_IMPORTED_MODULE_0__[\"tabs\"](event, i);\n    }, false);\n}\nvar labelTag = document.querySelectorAll('label input');\nfor (let i = 0; i < labelTag.length; i++) {\n    labelTag[i].addEventListener('click', event => {\n        event.stopPropagation();\n    });\n}\n\ndocument.querySelector('.dropdown-button').addEventListener('click', event => {\n    _common__WEBPACK_IMPORTED_MODULE_0__[\"dropdownButton\"](event.target.offsetParent);\n});\ndocument.querySelector('.switch').addEventListener('click', event => {\n    _common__WEBPACK_IMPORTED_MODULE_0__[\"switchButton\"](event.target.value, event.target.offsetParent);\n});\nwindow.addEventListener('scroll', event => {\n    _common__WEBPACK_IMPORTED_MODULE_0__[\"scrollpage\"](app.window.height, app.page.height);\n    if (app.sticky.height != null) {\n        _common__WEBPACK_IMPORTED_MODULE_0__[\"sticky\"](app.window.height, app.sticky.position, app.sticky.height);\n    }\n    var parallaxItem = document.querySelectorAll('.parallax');\n    for (let i = 0; i < parallaxItem.length; i++) {\n        for (let x = 0; x < parallaxItem[i].children.length; x++) {\n            if (window.pageYOffset + app.window.height > parallaxItem[i].offsetTop) {\n                _common__WEBPACK_IMPORTED_MODULE_0__[\"parallax\"](window.pageYOffset, parallaxItem[i].children[x].getAttribute('class'), parallaxItem[i].children[x].getAttribute('speed'), parallaxItem[i].offsetTop, parallaxItem[i].children[x].getAttribute('align'));\n            }\n        }\n    }\n});\nvar toastBlock = document.querySelectorAll('.toast-block');\nfor (let i = 0; i < toastBlock.length; i++) {\n    toastBlock[i].children[0].addEventListener('click', event => {\n        toastBlock[i].children[1].style.bottom = \"2rem\";\n        setTimeout(() => {\n            toastBlock[i].children[1].style.bottom = \"-100%\";\n        }, 3000);\n    });\n}\n\nwindow.addEventListener('mousemove', event => {\n    if (window.pageYOffset <= app.window.height / 3) {\n        var test = document.querySelector('.test1');\n        test.style.width = event.clientX + 'px';\n\n        var mouse = document.querySelector('.mouse');\n        mouse.style.top = event.clientY + 'px';\n        mouse.style.left = event.clientX + 'px';\n    }\n});\n\n//# sourceURL=webpack:///../assets/js/app.js?");

/***/ }),

/***/ "../assets/js/common.js":
/*!******************************!*\
  !*** ../assets/js/common.js ***!
  \******************************/
/*! exports provided: log, tabs, dropdownButton, switchButton, scrollpage, sticky, parallax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabs\", function() { return tabs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropdownButton\", function() { return dropdownButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchButton\", function() { return switchButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollpage\", function() { return scrollpage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sticky\", function() { return sticky; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parallax\", function() { return parallax; });\nfunction log($log) {\n    console.log($log);\n}\n\nfunction tabs($elt, $index) {\n    document.querySelectorAll('.tabs .items .item').forEach((item, index) => {\n        if (index == $index) item.classList.add('selected');else item.classList.remove('selected');\n    });\n    document.querySelectorAll('.tabs .content .item').forEach((item, index) => {\n        if (index == $index) item.classList.remove('hide');else item.classList.add('hide');\n    });\n}\n\nfunction dropdownButton($elt) {\n    $elt.classList.toggle('opened');\n}\n\nfunction switchButton($value, $parent) {\n    if ($value == 0) $parent.classList.remove('on');else $parent.classList.add('on');\n}\nfunction scrollpage(heightWindow, heightApp) {\n    let $positionWindow = document.documentElement.scrollTop;\n    document.querySelector('.progress-bar span').style.width = $positionWindow / (heightApp - heightWindow) * 100 + '%';\n}\n\nfunction sticky(heightWindow, positionStickyTop, heightSticky) {\n    let $positionWindow = document.documentElement.scrollTop;\n    if ($positionWindow >= positionStickyTop) {\n        document.querySelector('.sticky').classList.add('active');\n        document.body.style.paddingTop = heightSticky + \"px\";\n    } else {\n        document.querySelector('.sticky').classList.remove('active');\n        document.body.style.paddingTop = 0;\n    }\n}\n\nfunction parallax($pageY, $class, $speed, $offset, $position = 'center') {\n    let ypos = 0;\n    let start = $pageY - $offset;\n    ypos = start *= -$speed;\n    document.querySelector(\".\" + $class).style.backgroundPosition = $position + \" \" + ypos + \"px\";\n}\n\n//# sourceURL=webpack:///../assets/js/common.js?");

/***/ }),

/***/ "../assets/scss/app.scss":
/*!*******************************!*\
  !*** ../assets/scss/app.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../assets/scss/app.scss?");

/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ../assets/js/app.js ../assets/scss/app.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../assets/js/app.js */\"../assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! ../assets/scss/app.scss */\"../assets/scss/app.scss\");\n\n\n//# sourceURL=webpack:///multi_../assets/js/app.js_../assets/scss/app.scss?");

/***/ })

/******/ });