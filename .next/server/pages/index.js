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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/logo.svg":
/*!****************************!*\
  !*** ./src/pages/logo.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"src\":\"/_next/static/media/logo.7f01b434.svg\",\"height\":595,\"width\":842});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9nby5zdmcuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLENBQUMsdUVBQXVFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2lmdHktdjIvLi9zcmMvcGFnZXMvbG9nby5zdmc/MjlkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvbWVkaWEvbG9nby43ZjAxYjQzNC5zdmdcIixcImhlaWdodFwiOjU5NSxcIndpZHRoXCI6ODQyfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/logo.svg\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.svg */ \"./src/pages/logo.svg\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst GET_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`\n  query GetUsers {\n    users {\n      first_name\n      last_name\n    }\n  }\n`;\nconst URL = \"https://www.amazon.ca/LUTER-Disposable-Cooking-Utensils-Natural/dp/B09KXNVZ2Y/ref=sr_1_2_sspa?crid=1FMO00TGJZFAW&keywords=bamboo%2Btongs&qid=1650921945&s=kitchen&sprefix=bamboo%2Btongs%2Ckitchen%2C100&sr=1-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMDc0Mk40RllHRE1XJmVuY3J5cHRlZElkPUEwOTYyMzk4MU8zTU1EMzkzUldNMyZlbmNyeXB0ZWRBZElkPUEwMjAzOTE5MloxOVpKS0lWNVBVViZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1\";\nasync function asyncCall() {\n    class HTTPError extends Error {\n    }\n    const response = await fetch(URL, {\n        method: \"POST\",\n        body: JSON.stringify({\n            foo: true\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    });\n    if (!response.ok) {\n        throw new HTTPError(`Fetch error: ${response.statusText}`);\n    }\n    const json = await response.json();\n    console.log(json);\n//=> `{data: '🦄'}`\n}\nfunction App() {\n    // useEffect(() => {\n    //   authListener()\n    // }, [])\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(GET_USER);\n    if (loading) return \"Loading...\";\n    if (error) return `Error! ${error.message}`;\n    console.log(data);\n    asyncCall().then(()=>{\n        console.log(\"hurray!\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"App-header\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: _logo_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    className: \"App-logo\",\n                    alt: \"logo\"\n                }, void 0, false, {\n                    fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Edit \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            children: \"src/App.js\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 16\n                        }, this),\n                        \" and save to reload.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"App-link\",\n                    href: \"https://reactjs.org\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: \"Learn React\"\n                }, void 0, false, {\n                    fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNKO0FBRWlCO0FBRTlDLE1BQU1JLFFBQVEsR0FBR0YsK0NBQUcsQ0FBQzs7Ozs7OztBQU9yQixDQUFDO0FBRUQsTUFBTUcsR0FBRyxHQUNQLHliQUF5YjtBQUUzYixlQUFlQyxTQUFTLEdBQUc7SUFDekIsTUFBTUMsU0FBUyxTQUFTQyxLQUFLO0tBQUc7SUFFaEMsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsR0FBRyxFQUFFO1FBQ2hDTSxNQUFNLEVBQUUsTUFBTTtRQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1lBQUVDLEdBQUcsRUFBRSxJQUFJO1NBQUUsQ0FBQztRQUNuQ0MsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztLQUNGLENBQUM7SUFFRixJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSVYsU0FBUyxDQUFDLENBQUMsYUFBYSxFQUFFRSxRQUFRLENBQUNTLFVBQVUsQ0FBQyxDQUFDLENBQUM7S0FDM0Q7SUFFRCxNQUFNQyxJQUFJLEdBQUcsTUFBTVYsUUFBUSxDQUFDVSxJQUFJLEVBQUU7SUFFbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7QUFDakI7Q0FDRDtBQUVELFNBQVNHLEdBQUcsR0FBRztJQUNiLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsU0FBUztJQUVULE1BQU0sRUFBRUMsT0FBTyxHQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRSxHQUFHdEIsd0RBQVEsQ0FBQ0MsUUFBUSxDQUFDO0lBRW5ELElBQUltQixPQUFPLEVBQUUsT0FBTyxZQUFZO0lBQ2hDLElBQUlDLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFQSxLQUFLLENBQUNFLE9BQU8sQ0FBQyxDQUFDO0lBRTNDTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDO0lBRWpCbkIsU0FBUyxFQUFFLENBQUNxQixJQUFJLENBQUMsSUFBTTtRQUNyQlAsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0tBQ3ZCLENBQUM7SUFFRixxQkFDRSw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUMsS0FBSztrQkFDbEIsNEVBQUNDLFFBQU07WUFBQ0QsU0FBUyxFQUFDLFlBQVk7OzhCQUM1Qiw4REFBQ0UsS0FBRztvQkFBQ0MsR0FBRyxFQUFFL0IsaURBQUk7b0JBQUU0QixTQUFTLEVBQUMsVUFBVTtvQkFBQ0ksR0FBRyxFQUFDLE1BQU07Ozs7O3dCQUFHOzhCQUNsRCw4REFBQ0MsR0FBQzs7d0JBQUMsT0FDSTtzQ0FBQSw4REFBQ0MsTUFBSTtzQ0FBQyxZQUFVOzs7OztnQ0FBTzt3QkFBQSxzQkFDOUI7Ozs7Ozt3QkFBSTs4QkFDSiw4REFBQ0MsR0FBQztvQkFDQVAsU0FBUyxFQUFDLFVBQVU7b0JBQ3BCUSxJQUFJLEVBQUMscUJBQXFCO29CQUMxQkMsTUFBTSxFQUFDLFFBQVE7b0JBQ2ZDLEdBQUcsRUFBQyxxQkFBcUI7OEJBQzFCLGFBRUQ7Ozs7O3dCQUFJOzs7Ozs7Z0JBQ0c7Ozs7O1lBQ0wsQ0FDUDtDQUNGO0FBRUQsaUVBQWVqQixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2lmdHktdjIvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBsb2dvIGZyb20gJy4vbG9nby5zdmcnXG5cbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcblxuY29uc3QgR0VUX1VTRVIgPSBncWxgXG4gIHF1ZXJ5IEdldFVzZXJzIHtcbiAgICB1c2VycyB7XG4gICAgICBmaXJzdF9uYW1lXG4gICAgICBsYXN0X25hbWVcbiAgICB9XG4gIH1cbmBcblxuY29uc3QgVVJMID1cbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jYS9MVVRFUi1EaXNwb3NhYmxlLUNvb2tpbmctVXRlbnNpbHMtTmF0dXJhbC9kcC9CMDlLWE5WWjJZL3JlZj1zcl8xXzJfc3NwYT9jcmlkPTFGTU8wMFRHSlpGQVcma2V5d29yZHM9YmFtYm9vJTJCdG9uZ3MmcWlkPTE2NTA5MjE5NDUmcz1raXRjaGVuJnNwcmVmaXg9YmFtYm9vJTJCdG9uZ3MlMkNraXRjaGVuJTJDMTAwJnNyPTEtMi1zcG9ucyZzcExhPVpXNWpjbmx3ZEdWa1VYVmhiR2xtYVdWeVBVRXlNRGMwTWs0MFJsbEhSRTFYSm1WdVkzSjVjSFJsWkVsa1BVRXdPVFl5TXprNE1VOHpUVTFFTXprelVsZE5NeVpsYm1OeWVYQjBaV1JCWkVsa1BVRXdNakF6T1RFNU1sb3hPVnBLUzBsV05WQlZWaVozYVdSblpYUk9ZVzFsUFhOd1gyRjBaaVpoWTNScGIyNDlZMnhwWTJ0U1pXUnBjbVZqZENaa2IwNXZkRXh2WjBOc2FXTnJQWFJ5ZFdVJnRoPTEnXG5cbmFzeW5jIGZ1bmN0aW9uIGFzeW5jQ2FsbCgpIHtcbiAgY2xhc3MgSFRUUEVycm9yIGV4dGVuZHMgRXJyb3Ige31cblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZm9vOiB0cnVlIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSlcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEhUVFBFcnJvcihgRmV0Y2ggZXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKVxuICB9XG5cbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKGpzb24pXG4gIC8vPT4gYHtkYXRhOiAn8J+mhCd9YFxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgYXV0aExpc3RlbmVyKClcbiAgLy8gfSwgW10pXG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1VTRVIpXG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiAnTG9hZGluZy4uLidcbiAgaWYgKGVycm9yKSByZXR1cm4gYEVycm9yISAke2Vycm9yLm1lc3NhZ2V9YFxuXG4gIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgYXN5bmNDYWxsKCkudGhlbigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2h1cnJheSEnKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiQXBwLWhlYWRlclwiPlxuICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiQXBwLWxvZ29cIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRWRpdCA8Y29kZT5zcmMvQXBwLmpzPC9jb2RlPiBhbmQgc2F2ZSB0byByZWxvYWQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJBcHAtbGlua1wiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmdcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBMZWFybiBSZWFjdFxuICAgICAgICA8L2E+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJsb2dvIiwiZ3FsIiwidXNlUXVlcnkiLCJHRVRfVVNFUiIsIlVSTCIsImFzeW5jQ2FsbCIsIkhUVFBFcnJvciIsIkVycm9yIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZm9vIiwiaGVhZGVycyIsIm9rIiwic3RhdHVzVGV4dCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiQXBwIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJ0aGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsImNvZGUiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();