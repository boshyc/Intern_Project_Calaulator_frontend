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
exports.id = "pages/history/all/[id]";
exports.ids = ["pages/history/all/[id]"];
exports.modules = {

/***/ "./pages/history/all/[id].tsx":
/*!************************************!*\
  !*** ./pages/history/all/[id].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst all = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { 0: Text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const ps = async (id)=>{\n        await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`http://localhost:8000/history/all/${id}`).then((resp)=>{\n            if (resp.status === 200) {\n                setText(resp.data);\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!router.isReady) return;\n        console.log(router.query.id);\n        ps(router.query.id);\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" id:\",\n                    Text.id,\n                    \"\\xa0\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 24,\n                columnNumber: 25\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" value1:\",\n                    Text.value1,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 25,\n                columnNumber: 25\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" value2:\",\n                    Text.value2,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 26,\n                columnNumber: 25\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" sign:\",\n                    Text.sign,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 27,\n                columnNumber: 25\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" result:\",\n                    Text.result,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 28,\n                columnNumber: 25\n            }, undefined),\n            \"hello\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n        lineNumber: 23,\n        columnNumber: 13\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (all);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oaXN0b3J5L2FsbC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFpRDtBQUN4QjtBQUNtQjtBQUU1QyxNQUFNSSxHQUFHLEdBQUcsSUFBTTtJQUVkLE1BQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixNQUFNLEtBQUNNLElBQUksTUFBR0MsT0FBTyxNQUFJTCwrQ0FBUSxDQUFNLEVBQUUsQ0FBQztJQUMxQyxNQUFNTSxFQUFFLEdBQUcsT0FBT0MsRUFBTSxHQUFLO1FBQ3pCLE1BQU1SLGdEQUFTLENBQUMsQ0FBQyxrQ0FBa0MsRUFBRVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxHQUFHO1lBQ3BFLElBQUdBLElBQUksQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsRUFBQztnQkFDbkJOLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDRSxJQUFJLENBQUM7YUFDckI7U0FDSixDQUFDO0tBQ0Q7SUFDTFgsZ0RBQVMsQ0FBQyxJQUFJO1FBQ1YsSUFBRyxDQUFDRSxNQUFNLENBQUNVLE9BQU8sRUFBRSxPQUFPO1FBQzNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osTUFBTSxDQUFDYSxLQUFLLENBQUNULEVBQUUsQ0FBQztRQUM1QkQsRUFBRSxDQUFDSCxNQUFNLENBQUNhLEtBQUssQ0FBQ1QsRUFBRSxDQUFDO0tBQ3RCLEVBQUM7UUFBQ0osTUFBTSxDQUFDVSxPQUFPO0tBQUMsQ0FBQztJQUVuQixxQkFDUSw4REFBQ0ksS0FBRzs7MEJBQ1EsOERBQUNDLEdBQUM7O29CQUFDLE1BQUk7b0JBQUNkLElBQUksQ0FBQ0csRUFBRTtvQkFBQyxNQUFNOzs7Ozs7eUJBQUk7MEJBQzFCLDhEQUFDVyxHQUFDOztvQkFBQyxVQUFRO29CQUFDZCxJQUFJLENBQUNlLE1BQU07b0JBQUMsT0FBTzs7Ozs7O3lCQUFJOzBCQUNuQyw4REFBQ0QsR0FBQzs7b0JBQUMsVUFBUTtvQkFBQ2QsSUFBSSxDQUFDZ0IsTUFBTTtvQkFBQyxPQUFPOzs7Ozs7eUJBQUk7MEJBQ25DLDhEQUFDRixHQUFDOztvQkFBQyxRQUFNO29CQUFDZCxJQUFJLENBQUNpQixJQUFJO29CQUFDLE9BQU87Ozs7Ozt5QkFBSTswQkFDL0IsOERBQUNILEdBQUM7O29CQUFDLFVBQVE7b0JBQUNkLElBQUksQ0FBQ2tCLE1BQU07b0JBQUMsT0FBTzs7Ozs7O3lCQUFJO1lBQUEsT0FFL0M7Ozs7OztpQkFBTSxDQUNiO0NBQ0o7QUFJRCxpRUFBZXBCLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtdHMvLi9wYWdlcy9oaXN0b3J5L2FsbC9baWRdLnRzeD85ODI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnIFxyXG5cclxuY29uc3QgYWxsID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW1RleHQgLCBzZXRUZXh0XSA9IHVzZVN0YXRlPGFueT4oW10pXHJcbiAgICBjb25zdCBwcyA9IGFzeW5jIChpZDphbnkpID0+IHtcclxuICAgICAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9oaXN0b3J5L2FsbC8ke2lkfWApLnRoZW4oKHJlc3ApPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3Auc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgc2V0VGV4dChyZXNwLmRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICBwcyhyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICB9LFtyb3V0ZXIuaXNSZWFkeV0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gaWQ6e1RleHQuaWR9Jm5ic3A7PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gdmFsdWUxOntUZXh0LnZhbHVlMX0mbmJzcDsgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gdmFsdWUyOntUZXh0LnZhbHVlMn0mbmJzcDsgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gc2lnbjp7VGV4dC5zaWdufSZuYnNwOyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiByZXN1bHQ6e1RleHQucmVzdWx0fSZuYnNwOyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbGxvXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsbDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhbGwiLCJyb3V0ZXIiLCJUZXh0Iiwic2V0VGV4dCIsInBzIiwiaWQiLCJnZXQiLCJ0aGVuIiwicmVzcCIsInN0YXR1cyIsImRhdGEiLCJpc1JlYWR5IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiZGl2IiwicCIsInZhbHVlMSIsInZhbHVlMiIsInNpZ24iLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/history/all/[id].tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/history/all/[id].tsx"));
module.exports = __webpack_exports__;

})();