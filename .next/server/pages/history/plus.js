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
exports.id = "pages/history/plus";
exports.ids = ["pages/history/plus"];
exports.modules = {

/***/ "./pages/history/plus/index.tsx":
/*!**************************************!*\
  !*** ./pages/history/plus/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst all = ()=>{\n    const { 0: Text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const ps = async ()=>{\n        console.log(\"a1\");\n        await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:8000/history/plus\").then((resp)=>{\n            if (resp.status === 200) {\n                console.log(resp.data);\n                setText(resp.data);\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        ps();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: Text.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            \" id:\",\n                            post.id,\n                            \"\\xa0\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\plus\\\\index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            \" value1:\",\n                            post.value1,\n                            \"\\xa0 \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\plus\\\\index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            \" value2:\",\n                            post.value2,\n                            \"\\xa0 \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\plus\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            \" result:\",\n                            post.result,\n                            \"\\xa0 \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\plus\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\plus\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 21\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\plus\\\\index.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (all);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oaXN0b3J5L3BsdXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNtQjtBQUU1QyxNQUFNRyxHQUFHLEdBQUcsSUFBTTtJQUNkLE1BQU0sS0FBQ0MsSUFBSSxNQUFHQyxPQUFPLE1BQUlKLCtDQUFRLENBQU0sRUFBRSxDQUFDO0lBQzFDLE1BQU1LLEVBQUUsR0FBRyxVQUFZO1FBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDakIsTUFBTVIsZ0RBQVMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDVSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxHQUFHO1lBQy9ELElBQUdBLElBQUksQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsRUFBQztnQkFDbkJMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxJQUFJLENBQUNFLElBQUksQ0FBQztnQkFDdEJSLE9BQU8sQ0FBQ00sSUFBSSxDQUFDRSxJQUFJLENBQUM7YUFDckI7U0FDSixDQUFDO0tBQ0Q7SUFDTFgsZ0RBQVMsQ0FBQyxJQUFJO1FBQ1ZJLEVBQUUsRUFBRTtLQUNQLEVBQUMsRUFBRSxDQUFDO0lBQ0wscUJBQ0ksOERBQUNRLEtBQUc7a0JBQ0tWLElBQUksQ0FBQ1csR0FBRyxDQUFDLENBQUNDLElBQVEsaUJBQ2YsOERBQUNDLElBQUU7O2tDQUNDLDhEQUFDQyxJQUFFOzs0QkFBQyxNQUFJOzRCQUFDRixJQUFJLENBQUNHLEVBQUU7NEJBQUMsTUFBTTs7Ozs7O2lDQUFLO2tDQUM1Qiw4REFBQ0QsSUFBRTs7NEJBQUMsVUFBUTs0QkFBQ0YsSUFBSSxDQUFDSSxNQUFNOzRCQUFDLE9BQU87Ozs7OztpQ0FBSztrQ0FDckMsOERBQUNGLElBQUU7OzRCQUFDLFVBQVE7NEJBQUNGLElBQUksQ0FBQ0ssTUFBTTs0QkFBQyxPQUFPOzs7Ozs7aUNBQUs7a0NBQ3JDLDhEQUFDSCxJQUFFOzs0QkFBQyxVQUFROzRCQUFDRixJQUFJLENBQUNNLE1BQU07NEJBQUMsT0FBTzs7Ozs7O2lDQUFLOzs7Ozs7eUJBQ3BDLENBQ1I7Ozs7O2lCQUNILENBQ1Q7Q0FDSjtBQUVELGlFQUFlbkIsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1qcy10cy8uL3BhZ2VzL2hpc3RvcnkvcGx1cy9pbmRleC50c3g/Mzg2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnIFxyXG5cclxuY29uc3QgYWxsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW1RleHQgLCBzZXRUZXh0XSA9IHVzZVN0YXRlPGFueT4oW10pXHJcbiAgICBjb25zdCBwcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYTEnKVxyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2hpc3RvcnkvcGx1cycpLnRoZW4oKHJlc3ApPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3Auc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcC5kYXRhKVxyXG4gICAgICAgICAgICAgICAgc2V0VGV4dChyZXNwLmRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHBzKClcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtUZXh0Lm1hcCgocG9zdDphbnkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiBpZDp7cG9zdC5pZH0mbmJzcDs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHZhbHVlMTp7cG9zdC52YWx1ZTF9Jm5ic3A7IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gdmFsdWUyOntwb3N0LnZhbHVlMn0mbmJzcDsgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiByZXN1bHQ6e3Bvc3QucmVzdWx0fSZuYnNwOyA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGw7Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhbGwiLCJUZXh0Iiwic2V0VGV4dCIsInBzIiwiY29uc29sZSIsImxvZyIsImdldCIsInRoZW4iLCJyZXNwIiwic3RhdHVzIiwiZGF0YSIsImRpdiIsIm1hcCIsInBvc3QiLCJ0ciIsInRkIiwiaWQiLCJ2YWx1ZTEiLCJ2YWx1ZTIiLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/history/plus/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/history/plus/index.tsx"));
module.exports = __webpack_exports__;

})();