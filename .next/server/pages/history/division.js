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
exports.id = "pages/history/division";
exports.ids = ["pages/history/division"];
exports.modules = {

/***/ "./pages/history/division/index.tsx":
/*!******************************************!*\
  !*** ./pages/history/division/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst all = ()=>{\n    const { 0: Text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const ps = async ()=>{\n        console.log(\"a1\");\n        await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:8000/history/division\").then((resp)=>{\n            if (resp.status === 200) {\n                console.log(resp.data);\n                setText(resp.data);\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        ps();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: Text.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            \" id:\",\n                            post.id,\n                            \"\\xa0\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\division\\\\index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            \" value1:\",\n                            post.value1,\n                            \"\\xa0 \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\division\\\\index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            \" value2:\",\n                            post.value2,\n                            \"\\xa0 \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\division\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            \" result:\",\n                            post.result,\n                            \"\\xa0 \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\division\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\division\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 21\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\division\\\\index.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (all);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oaXN0b3J5L2RpdmlzaW9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDbUI7QUFFNUMsTUFBTUcsR0FBRyxHQUFHLElBQU07SUFDZCxNQUFNLEtBQUNDLElBQUksTUFBR0MsT0FBTyxNQUFJSiwrQ0FBUSxDQUFNLEVBQUUsQ0FBQztJQUMxQyxNQUFNSyxFQUFFLEdBQUcsVUFBWTtRQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2pCLE1BQU1SLGdEQUFTLENBQUMsd0NBQXdDLENBQUMsQ0FBQ1UsSUFBSSxDQUFDLENBQUNDLElBQUksR0FBRztZQUNuRSxJQUFHQSxJQUFJLENBQUNDLE1BQU0sS0FBSyxHQUFHLEVBQUM7Z0JBQ25CTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csSUFBSSxDQUFDRSxJQUFJLENBQUM7Z0JBQ3RCUixPQUFPLENBQUNNLElBQUksQ0FBQ0UsSUFBSSxDQUFDO2FBQ3JCO1NBQ0osQ0FBQztLQUNEO0lBQ0xYLGdEQUFTLENBQUMsSUFBSTtRQUNWSSxFQUFFLEVBQUU7S0FDUCxFQUFDLEVBQUUsQ0FBQztJQUNMLHFCQUNJLDhEQUFDUSxLQUFHO2tCQUNLVixJQUFJLENBQUNXLEdBQUcsQ0FBQyxDQUFDQyxJQUFRLGlCQUNmLDhEQUFDQyxJQUFFOztrQ0FDQyw4REFBQ0MsSUFBRTs7NEJBQUMsTUFBSTs0QkFBQ0YsSUFBSSxDQUFDRyxFQUFFOzRCQUFDLE1BQU07Ozs7OztpQ0FBSztrQ0FDNUIsOERBQUNELElBQUU7OzRCQUFDLFVBQVE7NEJBQUNGLElBQUksQ0FBQ0ksTUFBTTs0QkFBQyxPQUFPOzs7Ozs7aUNBQUs7a0NBQ3JDLDhEQUFDRixJQUFFOzs0QkFBQyxVQUFROzRCQUFDRixJQUFJLENBQUNLLE1BQU07NEJBQUMsT0FBTzs7Ozs7O2lDQUFLO2tDQUNyQyw4REFBQ0gsSUFBRTs7NEJBQUMsVUFBUTs0QkFBQ0YsSUFBSSxDQUFDTSxNQUFNOzRCQUFDLE9BQU87Ozs7OztpQ0FBSzs7Ozs7O3lCQUNwQyxDQUNSOzs7OztpQkFDSCxDQUNUO0NBQ0o7QUFFRCxpRUFBZW5CLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtdHMvLi9wYWdlcy9oaXN0b3J5L2RpdmlzaW9uL2luZGV4LnRzeD82ZWYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCcgXHJcblxyXG5jb25zdCBhbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbVGV4dCAsIHNldFRleHRdID0gdXNlU3RhdGU8YW55PihbXSlcclxuICAgIGNvbnN0IHBzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhMScpXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvaGlzdG9yeS9kaXZpc2lvbicpLnRoZW4oKHJlc3ApPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3Auc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcC5kYXRhKVxyXG4gICAgICAgICAgICAgICAgc2V0VGV4dChyZXNwLmRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHBzKClcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtUZXh0Lm1hcCgocG9zdDphbnkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiBpZDp7cG9zdC5pZH0mbmJzcDs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHZhbHVlMTp7cG9zdC52YWx1ZTF9Jm5ic3A7IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gdmFsdWUyOntwb3N0LnZhbHVlMn0mbmJzcDsgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiByZXN1bHQ6e3Bvc3QucmVzdWx0fSZuYnNwOyA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGw7Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhbGwiLCJUZXh0Iiwic2V0VGV4dCIsInBzIiwiY29uc29sZSIsImxvZyIsImdldCIsInRoZW4iLCJyZXNwIiwic3RhdHVzIiwiZGF0YSIsImRpdiIsIm1hcCIsInBvc3QiLCJ0ciIsInRkIiwiaWQiLCJ2YWx1ZTEiLCJ2YWx1ZTIiLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/history/division/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/history/division/index.tsx"));
module.exports = __webpack_exports__;

})();