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
exports.id = "pages/history/division/[id]";
exports.ids = ["pages/history/division/[id]"];
exports.modules = {

/***/ "./pages/history/division/[id].tsx":
/*!*****************************************!*\
  !*** ./pages/history/division/[id].tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst all = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { 0: Text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const ps = async (id)=>{\n        await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`http://localhost:8000/history/division/${id}`).then((resp)=>{\n            if (resp.status === 200) {\n                setText(resp.data);\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!router.isReady) return;\n        console.log(router.query.id);\n        ps(router.query.id);\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" id:\",\n                    Text.id,\n                    \"\\xa0\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\division\\\\[id].tsx\",\n                lineNumber: 24,\n                columnNumber: 25\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" value1:\",\n                    Text.value1,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\division\\\\[id].tsx\",\n                lineNumber: 25,\n                columnNumber: 25\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" value2:\",\n                    Text.value2,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\division\\\\[id].tsx\",\n                lineNumber: 26,\n                columnNumber: 25\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" result:\",\n                    Text.result,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\division\\\\[id].tsx\",\n                lineNumber: 27,\n                columnNumber: 25\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\division\\\\[id].tsx\",\n        lineNumber: 23,\n        columnNumber: 13\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (all);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oaXN0b3J5L2RpdmlzaW9uL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQWlEO0FBQ3hCO0FBQ21CO0FBRTVDLE1BQU1JLEdBQUcsR0FBRyxJQUFNO0lBRWQsTUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUFFO0lBQzFCLE1BQU0sS0FBQ00sSUFBSSxNQUFHQyxPQUFPLE1BQUlMLCtDQUFRLENBQU0sRUFBRSxDQUFDO0lBQzFDLE1BQU1NLEVBQUUsR0FBRyxPQUFPQyxFQUFNLEdBQUs7UUFDekIsTUFBTVIsZ0RBQVMsQ0FBQyxDQUFDLHVDQUF1QyxFQUFFUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNFLElBQUksQ0FBQyxDQUFDQyxJQUFJLEdBQUc7WUFDekUsSUFBR0EsSUFBSSxDQUFDQyxNQUFNLEtBQUssR0FBRyxFQUFDO2dCQUNuQk4sT0FBTyxDQUFDSyxJQUFJLENBQUNFLElBQUksQ0FBQzthQUNyQjtTQUNKLENBQUM7S0FDRDtJQUNMWCxnREFBUyxDQUFDLElBQUk7UUFDVixJQUFHLENBQUNFLE1BQU0sQ0FBQ1UsT0FBTyxFQUFFLE9BQU87UUFDM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixNQUFNLENBQUNhLEtBQUssQ0FBQ1QsRUFBRSxDQUFDO1FBQzVCRCxFQUFFLENBQUNILE1BQU0sQ0FBQ2EsS0FBSyxDQUFDVCxFQUFFLENBQUM7S0FDdEIsRUFBQztRQUFDSixNQUFNLENBQUNVLE9BQU87S0FBQyxDQUFDO0lBRW5CLHFCQUNRLDhEQUFDSSxLQUFHOzswQkFDUSw4REFBQ0MsR0FBQzs7b0JBQUMsTUFBSTtvQkFBQ2QsSUFBSSxDQUFDRyxFQUFFO29CQUFDLE1BQU07Ozs7Ozt5QkFBSTswQkFDMUIsOERBQUNXLEdBQUM7O29CQUFDLFVBQVE7b0JBQUNkLElBQUksQ0FBQ2UsTUFBTTtvQkFBQyxPQUFPOzs7Ozs7eUJBQUk7MEJBQ25DLDhEQUFDRCxHQUFDOztvQkFBQyxVQUFRO29CQUFDZCxJQUFJLENBQUNnQixNQUFNO29CQUFDLE9BQU87Ozs7Ozt5QkFBSTswQkFDbkMsOERBQUNGLEdBQUM7O29CQUFDLFVBQVE7b0JBQUNkLElBQUksQ0FBQ2lCLE1BQU07b0JBQUMsT0FBTzs7Ozs7O3lCQUFJOzs7Ozs7aUJBQ3pDLENBQ2I7Q0FDSjtBQUlELGlFQUFlbkIsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1qcy10cy8uL3BhZ2VzL2hpc3RvcnkvZGl2aXNpb24vW2lkXS50c3g/ZmEzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIsIHVzZVJvdXRlciB9ICBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JyBcclxuXHJcbmNvbnN0IGFsbCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtUZXh0ICwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxhbnk+KFtdKVxyXG4gICAgY29uc3QgcHMgPSBhc3luYyAoaWQ6YW55KSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvaGlzdG9yeS9kaXZpc2lvbi8ke2lkfWApLnRoZW4oKHJlc3ApPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3Auc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgc2V0VGV4dChyZXNwLmRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICBwcyhyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICB9LFtyb3V0ZXIuaXNSZWFkeV0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gaWQ6e1RleHQuaWR9Jm5ic3A7PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gdmFsdWUxOntUZXh0LnZhbHVlMX0mbmJzcDsgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gdmFsdWUyOntUZXh0LnZhbHVlMn0mbmJzcDsgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gcmVzdWx0OntUZXh0LnJlc3VsdH0mbmJzcDsgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGw7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWxsIiwicm91dGVyIiwiVGV4dCIsInNldFRleHQiLCJwcyIsImlkIiwiZ2V0IiwidGhlbiIsInJlc3AiLCJzdGF0dXMiLCJkYXRhIiwiaXNSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImRpdiIsInAiLCJ2YWx1ZTEiLCJ2YWx1ZTIiLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/history/division/[id].tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/history/division/[id].tsx"));
module.exports = __webpack_exports__;

})();