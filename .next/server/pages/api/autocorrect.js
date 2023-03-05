"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/autocorrect";
exports.ids = ["pages/api/autocorrect"];
exports.modules = {

/***/ "autocorrect":
/*!******************************!*\
  !*** external "autocorrect" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("autocorrect");

/***/ }),

/***/ "(api)/./pages/api/autocorrect.js":
/*!**********************************!*\
  !*** ./pages/api/autocorrect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst autocorrect = __webpack_require__(/*! autocorrect */ \"autocorrect\")();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    res.status(200).json({\n        correctedWord: autocorrect(req.query.word.toLowerCase())\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0b2NvcnJlY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGNBQWNDLG1CQUFPQSxDQUFDO0FBRTVCLGlFQUFlLENBQUNDLEtBQUtDLE1BQVE7SUFDM0JBLElBQ0dDLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7UUFBRUMsZUFBZU4sWUFBWUUsSUFBSUssS0FBSyxDQUFDQyxJQUFJLENBQUNDLFdBQVc7SUFBSTtBQUNyRSxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2lnbmlmeS8uL3BhZ2VzL2FwaS9hdXRvY29ycmVjdC5qcz8xNzMyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF1dG9jb3JyZWN0ID0gcmVxdWlyZSgnYXV0b2NvcnJlY3QnKSgpO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgcmVzXG4gICAgLnN0YXR1cygyMDApXG4gICAgLmpzb24oeyBjb3JyZWN0ZWRXb3JkOiBhdXRvY29ycmVjdChyZXEucXVlcnkud29yZC50b0xvd2VyQ2FzZSgpKSB9KTtcbn07XG4iXSwibmFtZXMiOlsiYXV0b2NvcnJlY3QiLCJyZXF1aXJlIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImNvcnJlY3RlZFdvcmQiLCJxdWVyeSIsIndvcmQiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/autocorrect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/autocorrect.js"));
module.exports = __webpack_exports__;

})();