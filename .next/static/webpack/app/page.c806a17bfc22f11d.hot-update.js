"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.jsx":
/*!**************************!*\
  !*** ./src/app/page.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _Product_Homepage_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product_Homepage/product */ \"(app-pages-browser)/./src/app/Product_Homepage/product.jsx\");\n/* harmony import */ var _Cart_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cart/page */ \"(app-pages-browser)/./src/app/Cart/page.jsx\");\n/* harmony import */ var _Checkout_page_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Checkout_page/checkout */ \"(app-pages-browser)/./src/app/Checkout_page/checkout.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            pathName === \"/\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product_Homepage_product__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 13,\n                columnNumber: 28\n            }, undefined),\n            pathName === \"/Cart\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 14,\n                columnNumber: 32\n            }, undefined),\n            pathName === \"/Checkout_page\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Checkout_page_checkout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 15,\n                columnNumber: 41\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"28xf+Q/MMfpBebWfp+J7Y3ZZbws=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMwQjtBQUNvQjtBQUNVO0FBQ3pCO0FBQ2lCO0FBRWhELE1BQU1LLE9BQU87O0lBQ1gsTUFBTUMsV0FBV0wsNERBQVdBO0lBRTVCLHFCQUNFOztZQUNHSyxhQUFhLHFCQUFPLDhEQUFDSixpRUFBY0E7Ozs7O1lBQ25DSSxhQUFhLHlCQUFXLDhEQUFDSCxrREFBSUE7Ozs7O1lBQzdCRyxhQUFhLGtDQUFvQiw4REFBQ0YsK0RBQVFBOzs7Ozs7O0FBR2pEO0dBVk1DOztRQUNhSix3REFBV0E7OztLQUR4Qkk7QUFZTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanN4P2Q0NjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7IC8vIFRoaXMgaXMgYSBjbGllbnQgY29tcG9uZW50aW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgUHJvZHVjdERpc3BsYXkgZnJvbSAnLi9Qcm9kdWN0X0hvbWVwYWdlL3Byb2R1Y3QnO1xyXG5pbXBvcnQgQ2FydCBmcm9tICcuL0NhcnQvcGFnZSc7XHJcbmltcG9ydCBDaGVja291dCBmcm9tICcuL0NoZWNrb3V0X3BhZ2UvY2hlY2tvdXQnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBwYXRoTmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cGF0aE5hbWUgPT09ICcvJyAmJiA8UHJvZHVjdERpc3BsYXkgLz59XHJcbiAgICAgIHtwYXRoTmFtZSA9PT0gJy9DYXJ0JyAmJiA8Q2FydCAvPn1cclxuICAgICAge3BhdGhOYW1lID09PSAnL0NoZWNrb3V0X3BhZ2UnICYmIDxDaGVja291dCAgLz59XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVBhdGhuYW1lIiwiUHJvZHVjdERpc3BsYXkiLCJDYXJ0IiwiQ2hlY2tvdXQiLCJIb21lIiwicGF0aE5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});