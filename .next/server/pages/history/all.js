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
exports.id = "pages/history/all";
exports.ids = ["pages/history/all"];
exports.modules = {

/***/ "./pages/history/all/index.tsx":
/*!*************************************!*\
  !*** ./pages/history/all/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst all = ()=>{\n    const { 0: Text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const ps = async ()=>{\n        console.log(\"a1\");\n        await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:8000/history/all\").then((resp)=>{\n            if (resp.status === 200) {\n                console.log(resp.data);\n                setText(resp.data);\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        ps();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: Text.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            \" id:\",\n                            post.id,\n                            \"\\xa0\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            \" value1:\",\n                            post.value1,\n                            \"\\xa0 \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            \" value2:\",\n                            post.value2,\n                            \"\\xa0 \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            \" sign:\",\n                            post.sign,\n                            \"\\xa0 \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            \" result: \",\n                            post.result,\n                            \"\\xa0 \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 21\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (all);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oaXN0b3J5L2FsbC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ21CO0FBRTVDLE1BQU1HLEdBQUcsR0FBRyxJQUFNO0lBQ2QsTUFBTSxLQUFDQyxJQUFJLE1BQUdDLE9BQU8sTUFBSUosK0NBQVEsQ0FBTSxFQUFFLENBQUM7SUFDMUMsTUFBTUssRUFBRSxHQUFHLFVBQVk7UUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNqQixNQUFNUixnREFBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUNVLElBQUksQ0FBQyxDQUFDQyxJQUFJLEdBQUc7WUFDOUQsSUFBR0EsSUFBSSxDQUFDQyxNQUFNLEtBQUssR0FBRyxFQUFDO2dCQUNuQkwsT0FBTyxDQUFDQyxHQUFHLENBQUNHLElBQUksQ0FBQ0UsSUFBSSxDQUFDO2dCQUN0QlIsT0FBTyxDQUFDTSxJQUFJLENBQUNFLElBQUksQ0FBQzthQUNyQjtTQUNKLENBQUM7S0FDRDtJQUNMWCxnREFBUyxDQUFDLElBQUk7UUFDVkksRUFBRSxFQUFFO0tBQ1AsRUFBQyxFQUFFLENBQUM7SUFDTCxxQkFDSSw4REFBQ1EsS0FBRztrQkFDS1YsSUFBSSxDQUFDVyxHQUFHLENBQUMsQ0FBQ0MsSUFBUSxpQkFDZiw4REFBQ0MsSUFBRTs7a0NBQ0MsOERBQUNDLElBQUU7OzRCQUFDLE1BQUk7NEJBQUNGLElBQUksQ0FBQ0csRUFBRTs0QkFBQyxNQUFNOzs7Ozs7aUNBQUs7a0NBQzVCLDhEQUFDRCxJQUFFOzs0QkFBQyxVQUFROzRCQUFDRixJQUFJLENBQUNJLE1BQU07NEJBQUMsT0FBTzs7Ozs7O2lDQUFLO2tDQUNyQyw4REFBQ0YsSUFBRTs7NEJBQUMsVUFBUTs0QkFBQ0YsSUFBSSxDQUFDSyxNQUFNOzRCQUFDLE9BQU87Ozs7OztpQ0FBSztrQ0FDckMsOERBQUNILElBQUU7OzRCQUFDLFFBQU07NEJBQUNGLElBQUksQ0FBQ00sSUFBSTs0QkFBQyxPQUFPOzs7Ozs7aUNBQUs7a0NBQ2pDLDhEQUFDSixJQUFFOzs0QkFBQyxXQUFTOzRCQUFDRixJQUFJLENBQUNPLE1BQU07NEJBQUMsT0FBTzs7Ozs7O2lDQUFLOzs7Ozs7eUJBQ3JDLENBQ1I7Ozs7O2lCQUNILENBQ1Q7Q0FDSjtBQUVELGlFQUFlcEIsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1qcy10cy8uL3BhZ2VzL2hpc3RvcnkvYWxsL2luZGV4LnRzeD8wZDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCcgXHJcblxyXG5jb25zdCBhbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbVGV4dCAsIHNldFRleHRdID0gdXNlU3RhdGU8YW55PihbXSlcclxuICAgIGNvbnN0IHBzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhMScpXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvaGlzdG9yeS9hbGwnKS50aGVuKChyZXNwKT0+e1xyXG4gICAgICAgICAgICBpZihyZXNwLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3AuZGF0YSlcclxuICAgICAgICAgICAgICAgIHNldFRleHQocmVzcC5kYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBwcygpXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7VGV4dC5tYXAoKHBvc3Q6YW55KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gaWQ6e3Bvc3QuaWR9Jm5ic3A7PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB2YWx1ZTE6e3Bvc3QudmFsdWUxfSZuYnNwOyA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHZhbHVlMjp7cG9zdC52YWx1ZTJ9Jm5ic3A7IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gc2lnbjp7cG9zdC5zaWdufSZuYnNwOyA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHJlc3VsdDoge3Bvc3QucmVzdWx0fSZuYnNwOyA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGw7Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhbGwiLCJUZXh0Iiwic2V0VGV4dCIsInBzIiwiY29uc29sZSIsImxvZyIsImdldCIsInRoZW4iLCJyZXNwIiwic3RhdHVzIiwiZGF0YSIsImRpdiIsIm1hcCIsInBvc3QiLCJ0ciIsInRkIiwiaWQiLCJ2YWx1ZTEiLCJ2YWx1ZTIiLCJzaWduIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/history/all/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/history/all/index.tsx"));
module.exports = __webpack_exports__;

})();