/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/plotly.js-dist-min/plotly.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/plotly.js-dist-min/plotly.min.js ***!
  \*******************************************************/
/***/ ((module) => {


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nrz_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nrz/component */ \"./src/nrz/component.js\");\n\n\nfunction createNewNrz() {\n  const message = document.getElementById('message').value;\n  const min = +document.getElementById('min').value;\n  const max = +document.getElementById('max').value;\n\n  new _nrz_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"](message, min, max).append_to(document.getElementsByName('container')[0]);\n}\n\nwindow.convert = createNewNrz;\n\n\n//# sourceURL=webpack://nrz/./src/index.js?");

/***/ }),

/***/ "./src/nrz/coder.js":
/*!**************************!*\
  !*** ./src/nrz/coder.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Coder)\n/* harmony export */ });\nclass Coder {\n  constructor(message) {\n    this.message = message;\n    this.codedMessageVal = null;\n  }\n\n  get codedMessage() {\n    return this.codedMessageVal ||= this.encodeMessage();\n  }\n\n  rawCodedMessageAry(min, max) {\n    return this.rawCodedMessageVal ||= this.codedMessage.replaceAll(' ', '').split('').map(x => x == 0 ? min : max);\n  }\n\n  encodeMessage() {\n    const message = this.message.split('');\n\n    return message.map(\n      x => x.charCodeAt(0).toString(2)\n    ).join(' ');\n  }\n}\n\n//# sourceURL=webpack://nrz/./src/nrz/coder.js?");

/***/ }),

/***/ "./src/nrz/component.js":
/*!******************************!*\
  !*** ./src/nrz/component.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var _coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coder */ \"./src/nrz/coder.js\");\n/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decoder */ \"./src/nrz/decoder.js\");\n/* harmony import */ var plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! plotly.js-dist-min */ \"./node_modules/plotly.js-dist-min/plotly.min.js\");\n/* harmony import */ var plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nclass Component {\n  // <div class=\"row\">\n  //   <div class=\"card\">\n  //     <div id=\"rand\"> plot </div>\n  //     <h4> message </h4>\n  //     <p> codedMessage </p>\n  //   </div>\n  // </div>\n\n  constructor(message, min, max) {\n    this.min = min;\n    this.max = max;\n    this.coder = new _coder__WEBPACK_IMPORTED_MODULE_0__[\"default\"](message);\n\n    let row = this.#buildElem('div');\n    row.className = 'row';\n\n    let card = this.#buildElem('div');\n    row.className = 'card';\n\n    let messageElem = this.#buildElem('h4');\n    messageElem.innerText = `Message: ${message}`;\n\n    let codedMessageBin = this.#buildElem('p');\n    codedMessageBin.innerText = `Binary: ${this.coder.codedMessage}`;\n\n    let codedMessage = this.#buildElem('p');\n    codedMessage.innerText = `Coded: ${this.coder.rawCodedMessageAry(min, max).join('')}`;\n\n    let decodedMessage = this.#buildElem('h4');\n    decodedMessage.innerText = `Decoded: ${new _decoder__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.coder.codedMessage).message}`;\n\n    this.plotRandId = this.#getRandomId();\n\n    let plotDiv = this.#buildElem('div');\n    plotDiv.id = this.plotRandId;\n\n    card.appendChild(plotDiv);\n    card.appendChild(messageElem);\n    card.appendChild(codedMessageBin);\n    card.appendChild(codedMessage);\n    card.appendChild(decodedMessage)\n\n    row.appendChild(card);\n\n    this.elem = row;\n  }\n\n  append_to(elem) {\n    elem.appendChild(this.elem);\n\n    plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_2___default().newPlot(this.plotRandId, [{\n      y: this.coder.rawCodedMessageAry(this.min, this.max),\n      mode: 'lines',\n      line: {shape: 'hv'}\n    }]);\n\n    return elem;\n  }\n\n  #getRandomId() {\n    return Math.random().toString(36).substr(2, 5);\n  }\n\n  #buildElem(klass) {\n    return document.createElement(klass);\n  }\n}\n\n//# sourceURL=webpack://nrz/./src/nrz/component.js?");

/***/ }),

/***/ "./src/nrz/decoder.js":
/*!****************************!*\
  !*** ./src/nrz/decoder.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Decoder)\n/* harmony export */ });\nclass Decoder {\n  constructor(message) {\n    this.codedMessage = message;\n    this.messageVal = null;\n  }\n\n  get message() {\n    return this.messageVal ||= this.decodeMessage();\n  }\n\n  decodeMessage() {\n    const codedMessageAry = this.codedMessage.split(' ');\n\n    return codedMessageAry.map(\n      x => String.fromCharCode(parseInt(x, 2))\n    ).join('');\n  }\n}\n\n//# sourceURL=webpack://nrz/./src/nrz/decoder.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;