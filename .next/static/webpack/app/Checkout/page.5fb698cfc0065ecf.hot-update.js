"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Checkout/page",{

/***/ "(app-pages-browser)/./src/app/Checkout/page.jsx":
/*!***********************************!*\
  !*** ./src/app/Checkout/page.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/UserContext */ \"(app-pages-browser)/./src/app/contexts/UserContext.jsx\");\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CartContext */ \"(app-pages-browser)/./src/app/contexts/CartContext.jsx\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Modal */ \"(app-pages-browser)/./node_modules/@mui/material/Modal/Modal.js\");\n/* harmony import */ var _Checkout_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Checkout.css */ \"(app-pages-browser)/./src/app/Checkout/Checkout.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Checkout = ()=>{\n    _s();\n    // User profile and cart context\n    const { userProfile } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const { clearCart } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    // State for modal\n    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Style for modal\n    const modalStyle = {\n        position: \"absolute\",\n        top: \"50%\",\n        left: \"50%\",\n        transform: \"translate(-50%, -50%)\",\n        width: 400,\n        bgcolor: \"background.paper\",\n        boxShadow: 24,\n        p: 4\n    };\n    // State for user data\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.givenName) || \"\",\n        lastName: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.familyName) || \"\",\n        email: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.email) || \"\",\n        phone: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.phoneNumber) || \"\",\n        address: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.streetAddress) || \"\",\n        postalCode: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.postalCode) || \"\",\n        city: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.locality) || \"\",\n        country: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.country) || \"\"\n    });\n    // Function to handle input changes\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setUserData({\n            ...userData,\n            [name]: value\n        });\n    };\n    // Function to handle form submission\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        clearCart();\n        setOpenModal(true);\n    };\n    // Function to close modal and navigate to home\n    const closeModal = ()=>{\n        setOpenModal(false);\n        window.location.href = \"/\";\n    };\n    // Function to close modal\n    const handleClose = ()=>{\n        setOpenModal(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"CheckoutContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"Checkout\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"CheckoutTitle\",\n                        children: \"Checkout Order\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\Checkout\\\\page.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"CheckoutForm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"FormGroup\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"firstName\",\n                                        children: \"First Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\Checkout\\\\page.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        name: \"firstName\",\n                                        id: \"firstName\",\n                                        value: userData.firstName,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\Checkout\\\\page.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\Checkout\\\\page.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"ContinueButton\",\n                                children: \"Submit Order\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\Checkout\\\\page.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\Checkout\\\\page.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\Checkout\\\\page.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                open: openModal,\n                onClose: handleClose,\n                \"aria-labelledby\": \"parent-modal-title\",\n                \"aria-describedby\": \"parent-modal-description\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    sx: modalStyle,\n                    className: \"ModalContent\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ModalMessage\",\n                            children: \"Order submitted. Thank you for shopping with us!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\Checkout\\\\page.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: closeModal,\n                            className: \"OKButton\",\n                            children: \"OK\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\Checkout\\\\page.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\Checkout\\\\page.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\Checkout\\\\page.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\affinidi-capstone-project\\\\src\\\\app\\\\Checkout\\\\page.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Checkout, \"X1MWC43vL5IZzRJIlOQDG8ccqr8=\");\n_c = Checkout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkout);\nvar _c;\n$RefreshReg$(_c, \"Checkout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2hlY2tvdXQvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDb0Q7QUFDRjtBQUNBO0FBQ2Q7QUFDSTtBQUNoQjtBQUV4QixNQUFNTyxXQUFXOztJQUNmLGdDQUFnQztJQUNoQyxNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHTixpREFBVUEsQ0FBQ0MsNkRBQVdBO0lBQzlDLE1BQU0sRUFBRU0sU0FBUyxFQUFFLEdBQUdQLGlEQUFVQSxDQUFDRSw2REFBV0E7SUFFNUMsa0JBQWtCO0lBQ2xCLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUUzQyxrQkFBa0I7SUFDbEIsTUFBTVcsYUFBYTtRQUNqQkMsVUFBVTtRQUNWQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsV0FBVztRQUNYQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsV0FBVztRQUNYQyxHQUFHO0lBQ0w7SUFFQSxzQkFBc0I7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdyQiwrQ0FBUUEsQ0FBQztRQUN2Q3NCLFdBQVdmLENBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBYWdCLFNBQVMsS0FBSTtRQUNyQ0MsVUFBVWpCLENBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBYWtCLFVBQVUsS0FBSTtRQUNyQ0MsT0FBT25CLENBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBYW1CLEtBQUssS0FBSTtRQUM3QkMsT0FBT3BCLENBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBYXFCLFdBQVcsS0FBSTtRQUNuQ0MsU0FBU3RCLENBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBYXVCLGFBQWEsS0FBSTtRQUN2Q0MsWUFBWXhCLENBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBYXdCLFVBQVUsS0FBSTtRQUN2Q0MsTUFBTXpCLENBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBYTBCLFFBQVEsS0FBSTtRQUMvQkMsU0FBUzNCLENBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBYTJCLE9BQU8sS0FBSTtJQUNuQztJQUVBLG1DQUFtQztJQUNuQyxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ2xCLFlBQVk7WUFBRSxHQUFHRCxRQUFRO1lBQUUsQ0FBQ2lCLEtBQUssRUFBRUM7UUFBTTtJQUMzQztJQUVBLHFDQUFxQztJQUNyQyxNQUFNRSxlQUFlLENBQUNKO1FBQ3BCQSxFQUFFSyxjQUFjO1FBQ2hCakM7UUFDQUUsYUFBYTtJQUNmO0lBRUEsK0NBQStDO0lBQy9DLE1BQU1nQyxhQUFhO1FBQ2pCaEMsYUFBYTtRQUNiaUMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7SUFDekI7SUFFQSwwQkFBMEI7SUFDMUIsTUFBTUMsY0FBYztRQUNsQnBDLGFBQWE7SUFDZjtJQUVBLHFCQUNFLDhEQUFDcUM7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWdCOzs7Ozs7a0NBQzlCLDhEQUFDRTt3QkFBS0MsVUFBVVg7d0JBQWNRLFdBQVU7OzBDQUV0Qyw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDSTt3Q0FBTUMsU0FBUTtrREFBWTs7Ozs7O2tEQUMzQiw4REFBQ0M7d0NBQ0NDLE1BQUs7d0NBQ0xsQixNQUFLO3dDQUNMbUIsSUFBRzt3Q0FDSGxCLE9BQU9sQixTQUFTRSxTQUFTO3dDQUN6Qm1DLFVBQVV0Qjs7Ozs7Ozs7Ozs7OzBDQUlkLDhEQUFDdUI7Z0NBQU9ILE1BQUs7Z0NBQVNQLFdBQVU7MENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXJELDhEQUFDM0MsMkRBQUtBO2dCQUNKc0QsTUFBTWxEO2dCQUNObUQsU0FBU2Q7Z0JBQ1RlLG1CQUFnQjtnQkFDaEJDLG9CQUFpQjswQkFFakIsNEVBQUMxRCx5REFBR0E7b0JBQUMyRCxJQUFJcEQ7b0JBQVlxQyxXQUFVOztzQ0FDN0IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUFlOzs7Ozs7c0NBQzlCLDhEQUFDVTs0QkFBT00sU0FBU3RCOzRCQUFZTSxXQUFVO3NDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RDtHQTFGTTFDO0tBQUFBO0FBNEZOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ2hlY2tvdXQvcGFnZS5qc3g/MjIxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjsgXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL1VzZXJDb250ZXh0JztcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL0NhcnRDb250ZXh0JztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdAbXVpL21hdGVyaWFsL01vZGFsJztcclxuaW1wb3J0ICcuL0NoZWNrb3V0LmNzcyc7XHJcblxyXG5jb25zdCBDaGVja291dCA9ICgpID0+IHtcclxuICAvLyBVc2VyIHByb2ZpbGUgYW5kIGNhcnQgY29udGV4dFxyXG4gIGNvbnN0IHsgdXNlclByb2ZpbGUgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IHsgY2xlYXJDYXJ0IH0gPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcclxuXHJcbiAgLy8gU3RhdGUgZm9yIG1vZGFsXHJcbiAgY29uc3QgW29wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gU3R5bGUgZm9yIG1vZGFsXHJcbiAgY29uc3QgbW9kYWxTdHlsZSA9IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnNTAlJyxcclxuICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIHdpZHRoOiA0MDAsXHJcbiAgICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgICBib3hTaGFkb3c6IDI0LFxyXG4gICAgcDogNCxcclxuICB9O1xyXG5cclxuICAvLyBTdGF0ZSBmb3IgdXNlciBkYXRhXHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmaXJzdE5hbWU6IHVzZXJQcm9maWxlPy5naXZlbk5hbWUgfHwgJycsXHJcbiAgICBsYXN0TmFtZTogdXNlclByb2ZpbGU/LmZhbWlseU5hbWUgfHwgJycsIFxyXG4gICAgZW1haWw6IHVzZXJQcm9maWxlPy5lbWFpbCB8fCAnJyxcclxuICAgIHBob25lOiB1c2VyUHJvZmlsZT8ucGhvbmVOdW1iZXIgfHwgJycsIFxyXG4gICAgYWRkcmVzczogdXNlclByb2ZpbGU/LnN0cmVldEFkZHJlc3MgfHwgJycsIFxyXG4gICAgcG9zdGFsQ29kZTogdXNlclByb2ZpbGU/LnBvc3RhbENvZGUgfHwgJycsXHJcbiAgICBjaXR5OiB1c2VyUHJvZmlsZT8ubG9jYWxpdHkgfHwgJycsIFxyXG4gICAgY291bnRyeTogdXNlclByb2ZpbGU/LmNvdW50cnkgfHwgJydcclxuICB9KTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGlucHV0IGNoYW5nZXNcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRVc2VyRGF0YSh7IC4uLnVzZXJEYXRhLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY2xlYXJDYXJ0KCk7XHJcbiAgICBzZXRPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gY2xvc2UgbW9kYWwgYW5kIG5hdmlnYXRlIHRvIGhvbWVcclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbk1vZGFsKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGNsb3NlIG1vZGFsXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuTW9kYWwoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoZWNrb3V0Q29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hlY2tvdXRcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiQ2hlY2tvdXRUaXRsZVwiPkNoZWNrb3V0IE9yZGVyPC9oMj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJDaGVja291dEZvcm1cIj5cclxuICAgICAgICAgIHsvKiBGb3JtIGlucHV0cyAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRm9ybUdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIiBcclxuICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJEYXRhLmZpcnN0TmFtZX0gXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIE90aGVyIGZvcm0gaW5wdXRzICovfVxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiQ29udGludWVCdXR0b25cIj5TdWJtaXQgT3JkZXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogTW9kYWwgZm9yIGNvbmZpcm1hdGlvbiAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInBhcmVudC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInBhcmVudC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXttb2RhbFN0eWxlfSBjbGFzc05hbWU9XCJNb2RhbENvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTW9kYWxNZXNzYWdlXCI+T3JkZXIgc3VibWl0dGVkLiBUaGFuayB5b3UgZm9yIHNob3BwaW5nIHdpdGggdXMhPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9IGNsYXNzTmFtZT1cIk9LQnV0dG9uXCI+T0s8L2J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja291dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJDYXJ0Q29udGV4dCIsIkJveCIsIk1vZGFsIiwiQ2hlY2tvdXQiLCJ1c2VyUHJvZmlsZSIsImNsZWFyQ2FydCIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm1vZGFsU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJib3hTaGFkb3ciLCJwIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImZpcnN0TmFtZSIsImdpdmVuTmFtZSIsImxhc3ROYW1lIiwiZmFtaWx5TmFtZSIsImVtYWlsIiwicGhvbmUiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJzdHJlZXRBZGRyZXNzIiwicG9zdGFsQ29kZSIsImNpdHkiLCJsb2NhbGl0eSIsImNvdW50cnkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjbG9zZU1vZGFsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaGFuZGxlQ2xvc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJidXR0b24iLCJvcGVuIiwib25DbG9zZSIsImFyaWEtbGFiZWxsZWRieSIsImFyaWEtZGVzY3JpYmVkYnkiLCJzeCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Checkout/page.jsx\n"));

/***/ })

});