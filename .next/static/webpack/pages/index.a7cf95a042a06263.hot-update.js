"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _swc_helpers_src_wrap_native_super_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_wrap_native_super.mjs */ \"./node_modules/@swc/helpers/src/_wrap_native_super.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _Users_sujilee_gifty_v2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_sujilee_gifty_v2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sujilee_gifty_v2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo.svg */ \"./src/pages/logo.svg\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\n\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"\\n  query GetUsers {\\n    users {\\n      first_name\\n      last_name\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar GET_USER = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject());\nvar URL = \"https://www.amazon.ca/LUTER-Disposable-Cooking-Utensils-Natural/dp/B09KXNVZ2Y/ref=sr_1_2_sspa?crid=1FMO00TGJZFAW&keywords=bamboo%2Btongs&qid=1650921945&s=kitchen&sprefix=bamboo%2Btongs%2Ckitchen%2C100&sr=1-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMDc0Mk40RllHRE1XJmVuY3J5cHRlZElkPUEwOTYyMzk4MU8zTU1EMzkzUldNMyZlbmNyeXB0ZWRBZElkPUEwMjAzOTE5MloxOVpKS0lWNVBVViZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1\";\nfunction asyncCall() {\n    return _asyncCall.apply(this, arguments);\n}\nfunction _asyncCall() {\n    _asyncCall = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_sujilee_gifty_v2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var HTTPError, response, json;\n        return _Users_sujilee_gifty_v2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    HTTPError = /*#__PURE__*/ function(Error1) {\n                        \"use strict\";\n                        (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(HTTPError, Error1);\n                        var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(HTTPError);\n                        function HTTPError() {\n                            (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, HTTPError);\n                            return _super.apply(this, arguments);\n                        }\n                        return HTTPError;\n                    }((0,_swc_helpers_src_wrap_native_super_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(Error));\n                    _ctx.next = 3;\n                    return fetch(URL, {\n                        method: \"POST\",\n                        body: JSON.stringify({\n                            foo: true\n                        }),\n                        headers: {\n                            \"content-type\": \"application/json\"\n                        }\n                    });\n                case 3:\n                    response = _ctx.sent;\n                    if (response.ok) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    throw new HTTPError(\"Fetch error: \".concat(response.statusText));\n                case 6:\n                    _ctx.next = 8;\n                    return response.json();\n                case 8:\n                    json = _ctx.sent;\n                    console.log(json);\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    //=> `{data: '🦄'}`\n    }));\n    return _asyncCall.apply(this, arguments);\n}\nfunction App() {\n    // useEffect(() => {\n    //   authListener()\n    // }, [])\n    // const { loading, error, data } = useQuery(GET_USER)\n    // if (loading) return 'Loading...'\n    // if (error) return `Error! ${error.message}`\n    // console.log(data)\n    // asyncCall().then(() => {\n    //   console.log('hurray!')\n    // })\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"header\", {\n            className: \"App-header\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                    src: _logo_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    className: \"App-logo\",\n                    alt: \"logo\"\n                }, void 0, false, {\n                    fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Edit \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"code\", {\n                            children: \"src/App.js\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 16\n                        }, this),\n                        \" and save to reload.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n                    className: \"App-link\",\n                    href: \"https://reactjs.org\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: \"Learn React\"\n                }, void 0, false, {\n                    fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFFaUI7QUFFOUMsSUFBTUksUUFBUSxHQUFHRixtREFBRyxtQkFPbkI7QUFFRCxJQUFNRyxHQUFHLEdBQ1AseWJBQXliO1NBRTVhQyxTQUFTO1dBQVRBLFVBQVM7O1NBQVRBLFVBQVM7SUFBVEEsVUFBUyxHQUF4QiwwT0FBMkI7WUFDbkJDLFNBQVMsRUFFVEMsUUFBUSxFQVlSQyxJQUFJOzs7O29CQWRWLFNBQWUsaUJBRWQ7Ozs7aUNBRktGLFNBQVM7Ozs7O3FCQUFpQixxRkFBUkcsS0FBSyxFQUFHOzsyQkFFVEMsS0FBSyxDQUFDTixHQUFHLEVBQUU7d0JBQ2hDTyxNQUFNLEVBQUUsTUFBTTt3QkFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQzs0QkFBRUMsR0FBRyxFQUFFLElBQUk7eUJBQUUsQ0FBQzt3QkFDbkNDLE9BQU8sRUFBRTs0QkFDUCxjQUFjLEVBQUUsa0JBQWtCO3lCQUNuQztxQkFDRixDQUFDOztvQkFOSVQsUUFBUSxZQU1aO3dCQUVHQSxRQUFRLENBQUNVLEVBQUU7Ozs7b0JBQ2QsTUFBTSxJQUFJWCxTQUFTLENBQUMsZUFBYyxDQUFzQixPQUFwQkMsUUFBUSxDQUFDVyxVQUFVLENBQUUsQ0FBQzs7OzJCQUd6Q1gsUUFBUSxDQUFDQyxJQUFJLEVBQUU7O29CQUE1QkEsSUFBSSxZQUF3QjtvQkFFbENXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixJQUFJLENBQUM7Ozs7OztJQUNqQjtLQUNEO1dBbkJjSCxVQUFTOztBQXFCeEIsU0FBU2dCLEdBQUcsR0FBRztJQUNiLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsU0FBUztJQUVULHNEQUFzRDtJQUV0RCxtQ0FBbUM7SUFDbkMsOENBQThDO0lBRTlDLG9CQUFvQjtJQUVwQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLEtBQUs7SUFFTCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsS0FBSztrQkFDbEIsNEVBQUNDLFFBQU07WUFBQ0QsU0FBUyxFQUFDLFlBQVk7OzhCQUM1Qiw4REFBQ0UsS0FBRztvQkFBQ0MsR0FBRyxFQUFFMUIsaURBQUk7b0JBQUV1QixTQUFTLEVBQUMsVUFBVTtvQkFBQ0ksR0FBRyxFQUFDLE1BQU07Ozs7O3dCQUFHOzhCQUNsRCw4REFBQ0MsR0FBQzs7d0JBQUMsT0FDSTtzQ0FBQSw4REFBQ0MsTUFBSTtzQ0FBQyxZQUFVOzs7OztnQ0FBTzt3QkFBQSxzQkFDOUI7Ozs7Ozt3QkFBSTs4QkFDSiw4REFBQ0MsR0FBQztvQkFDQVAsU0FBUyxFQUFDLFVBQVU7b0JBQ3BCUSxJQUFJLEVBQUMscUJBQXFCO29CQUMxQkMsTUFBTSxFQUFDLFFBQVE7b0JBQ2ZDLEdBQUcsRUFBQyxxQkFBcUI7OEJBQzFCLGFBRUQ7Ozs7O3dCQUFJOzs7Ozs7Z0JBQ0c7Ozs7O1lBQ0wsQ0FDUDtDQUNGO0FBbENRWixLQUFBQSxHQUFHO0FBb0NaLCtEQUFlQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9sb2dvLnN2ZydcblxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuXG5jb25zdCBHRVRfVVNFUiA9IGdxbGBcbiAgcXVlcnkgR2V0VXNlcnMge1xuICAgIHVzZXJzIHtcbiAgICAgIGZpcnN0X25hbWVcbiAgICAgIGxhc3RfbmFtZVxuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBVUkwgPVxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNhL0xVVEVSLURpc3Bvc2FibGUtQ29va2luZy1VdGVuc2lscy1OYXR1cmFsL2RwL0IwOUtYTlZaMlkvcmVmPXNyXzFfMl9zc3BhP2NyaWQ9MUZNTzAwVEdKWkZBVyZrZXl3b3Jkcz1iYW1ib28lMkJ0b25ncyZxaWQ9MTY1MDkyMTk0NSZzPWtpdGNoZW4mc3ByZWZpeD1iYW1ib28lMkJ0b25ncyUyQ2tpdGNoZW4lMkMxMDAmc3I9MS0yLXNwb25zJnNwTGE9Wlc1amNubHdkR1ZrVVhWaGJHbG1hV1Z5UFVFeU1EYzBNazQwUmxsSFJFMVhKbVZ1WTNKNWNIUmxaRWxrUFVFd09UWXlNems0TVU4elRVMUVNemt6VWxkTk15WmxibU55ZVhCMFpXUkJaRWxrUFVFd01qQXpPVEU1TWxveE9WcEtTMGxXTlZCVlZpWjNhV1JuWlhST1lXMWxQWE53WDJGMFppWmhZM1JwYjI0OVkyeHBZMnRTWldScGNtVmpkQ1prYjA1dmRFeHZaME5zYVdOclBYUnlkV1UmdGg9MSdcblxuYXN5bmMgZnVuY3Rpb24gYXN5bmNDYWxsKCkge1xuICBjbGFzcyBIVFRQRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmb286IHRydWUgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KVxuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgSFRUUEVycm9yKGBGZXRjaCBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApXG4gIH1cblxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgY29uc29sZS5sb2coanNvbilcbiAgLy89PiBge2RhdGE6ICfwn6aEJ31gXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBhdXRoTGlzdGVuZXIoKVxuICAvLyB9LCBbXSlcblxuICAvLyBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfVVNFUilcblxuICAvLyBpZiAobG9hZGluZykgcmV0dXJuICdMb2FkaW5nLi4uJ1xuICAvLyBpZiAoZXJyb3IpIHJldHVybiBgRXJyb3IhICR7ZXJyb3IubWVzc2FnZX1gXG5cbiAgLy8gY29uc29sZS5sb2coZGF0YSlcblxuICAvLyBhc3luY0NhbGwoKS50aGVuKCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZygnaHVycmF5IScpXG4gIC8vIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJBcHAtaGVhZGVyXCI+XG4gICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJBcHAtbG9nb1wiIGFsdD1cImxvZ29cIiAvPlxuICAgICAgICA8cD5cbiAgICAgICAgICBFZGl0IDxjb2RlPnNyYy9BcHAuanM8L2NvZGU+IGFuZCBzYXZlIHRvIHJlbG9hZC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cIkFwcC1saW5rXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZ1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIExlYXJuIFJlYWN0XG4gICAgICAgIDwvYT5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImxvZ28iLCJncWwiLCJ1c2VRdWVyeSIsIkdFVF9VU0VSIiwiVVJMIiwiYXN5bmNDYWxsIiwiSFRUUEVycm9yIiwicmVzcG9uc2UiLCJqc29uIiwiRXJyb3IiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZm9vIiwiaGVhZGVycyIsIm9rIiwic3RhdHVzVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwiY29kZSIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});