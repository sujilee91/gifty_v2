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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.svg */ \"./src/pages/logo.svg\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst GET_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`\n  query GetUsers {\n    users {\n      first_name\n      last_name\n    }\n  }\n`;\nconst URL = \"https://www.amazon.ca/LUTER-Disposable-Cooking-Utensils-Natural/dp/B09KXNVZ2Y/ref=sr_1_2_sspa?crid=1FMO00TGJZFAW&keywords=bamboo%2Btongs&qid=1650921945&s=kitchen&sprefix=bamboo%2Btongs%2Ckitchen%2C100&sr=1-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMDc0Mk40RllHRE1XJmVuY3J5cHRlZElkPUEwOTYyMzk4MU8zTU1EMzkzUldNMyZlbmNyeXB0ZWRBZElkPUEwMjAzOTE5MloxOVpKS0lWNVBVViZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1\";\nasync function asyncCall() {\n    class HTTPError extends Error {\n    }\n    const response = await fetch(URL, {\n        method: \"POST\",\n        body: JSON.stringify({\n            foo: true\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    });\n    if (!response.ok) {\n        throw new HTTPError(`Fetch error: ${response.statusText}`);\n    }\n    const json = await response.json();\n    console.log(json);\n//=> `{data: '🦄'}`\n}\nfunction App() {\n    // useEffect(() => {\n    //   authListener()\n    // }, [])\n    // const { loading, error, data } = useQuery(GET_USER)\n    // if (loading) return 'Loading...'\n    // if (error) return `Error! ${error.message}`\n    // console.log(data)\n    // asyncCall().then(() => {\n    //   console.log('hurray!')\n    // })\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"App-header\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: _logo_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    className: \"App-logo\",\n                    alt: \"logo\"\n                }, void 0, false, {\n                    fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Edit \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            children: \"src/App.js\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 16\n                        }, this),\n                        \" and save to reload.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"App-link\",\n                    href: \"https://reactjs.org\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: \"Learn React\"\n                }, void 0, false, {\n                    fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sujilee/gifty-v2/src/pages/index.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNKO0FBRWlCO0FBRTlDLE1BQU1JLFFBQVEsR0FBR0YsK0NBQUcsQ0FBQzs7Ozs7OztBQU9yQixDQUFDO0FBRUQsTUFBTUcsR0FBRyxHQUNQLHliQUF5YjtBQUUzYixlQUFlQyxTQUFTLEdBQUc7SUFDekIsTUFBTUMsU0FBUyxTQUFTQyxLQUFLO0tBQUc7SUFFaEMsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsR0FBRyxFQUFFO1FBQ2hDTSxNQUFNLEVBQUUsTUFBTTtRQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1lBQUVDLEdBQUcsRUFBRSxJQUFJO1NBQUUsQ0FBQztRQUNuQ0MsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztLQUNGLENBQUM7SUFFRixJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSVYsU0FBUyxDQUFDLENBQUMsYUFBYSxFQUFFRSxRQUFRLENBQUNTLFVBQVUsQ0FBQyxDQUFDLENBQUM7S0FDM0Q7SUFFRCxNQUFNQyxJQUFJLEdBQUcsTUFBTVYsUUFBUSxDQUFDVSxJQUFJLEVBQUU7SUFFbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7QUFDakI7Q0FDRDtBQUVELFNBQVNHLEdBQUcsR0FBRztJQUNiLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsU0FBUztJQUVULHNEQUFzRDtJQUV0RCxtQ0FBbUM7SUFDbkMsOENBQThDO0lBRTlDLG9CQUFvQjtJQUVwQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLEtBQUs7SUFFTCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsS0FBSztrQkFDbEIsNEVBQUNDLFFBQU07WUFBQ0QsU0FBUyxFQUFDLFlBQVk7OzhCQUM1Qiw4REFBQ0UsS0FBRztvQkFBQ0MsR0FBRyxFQUFFMUIsaURBQUk7b0JBQUV1QixTQUFTLEVBQUMsVUFBVTtvQkFBQ0ksR0FBRyxFQUFDLE1BQU07Ozs7O3dCQUFHOzhCQUNsRCw4REFBQ0MsR0FBQzs7d0JBQUMsT0FDSTtzQ0FBQSw4REFBQ0MsTUFBSTtzQ0FBQyxZQUFVOzs7OztnQ0FBTzt3QkFBQSxzQkFDOUI7Ozs7Ozt3QkFBSTs4QkFDSiw4REFBQ0MsR0FBQztvQkFDQVAsU0FBUyxFQUFDLFVBQVU7b0JBQ3BCUSxJQUFJLEVBQUMscUJBQXFCO29CQUMxQkMsTUFBTSxFQUFDLFFBQVE7b0JBQ2ZDLEdBQUcsRUFBQyxxQkFBcUI7OEJBQzFCLGFBRUQ7Ozs7O3dCQUFJOzs7Ozs7Z0JBQ0c7Ozs7O1lBQ0wsQ0FDUDtDQUNGO0FBRUQsaUVBQWVaLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naWZ0eS12Mi8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9sb2dvLnN2ZydcblxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuXG5jb25zdCBHRVRfVVNFUiA9IGdxbGBcbiAgcXVlcnkgR2V0VXNlcnMge1xuICAgIHVzZXJzIHtcbiAgICAgIGZpcnN0X25hbWVcbiAgICAgIGxhc3RfbmFtZVxuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBVUkwgPVxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNhL0xVVEVSLURpc3Bvc2FibGUtQ29va2luZy1VdGVuc2lscy1OYXR1cmFsL2RwL0IwOUtYTlZaMlkvcmVmPXNyXzFfMl9zc3BhP2NyaWQ9MUZNTzAwVEdKWkZBVyZrZXl3b3Jkcz1iYW1ib28lMkJ0b25ncyZxaWQ9MTY1MDkyMTk0NSZzPWtpdGNoZW4mc3ByZWZpeD1iYW1ib28lMkJ0b25ncyUyQ2tpdGNoZW4lMkMxMDAmc3I9MS0yLXNwb25zJnNwTGE9Wlc1amNubHdkR1ZrVVhWaGJHbG1hV1Z5UFVFeU1EYzBNazQwUmxsSFJFMVhKbVZ1WTNKNWNIUmxaRWxrUFVFd09UWXlNems0TVU4elRVMUVNemt6VWxkTk15WmxibU55ZVhCMFpXUkJaRWxrUFVFd01qQXpPVEU1TWxveE9WcEtTMGxXTlZCVlZpWjNhV1JuWlhST1lXMWxQWE53WDJGMFppWmhZM1JwYjI0OVkyeHBZMnRTWldScGNtVmpkQ1prYjA1dmRFeHZaME5zYVdOclBYUnlkV1UmdGg9MSdcblxuYXN5bmMgZnVuY3Rpb24gYXN5bmNDYWxsKCkge1xuICBjbGFzcyBIVFRQRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmb286IHRydWUgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KVxuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgSFRUUEVycm9yKGBGZXRjaCBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApXG4gIH1cblxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgY29uc29sZS5sb2coanNvbilcbiAgLy89PiBge2RhdGE6ICfwn6aEJ31gXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBhdXRoTGlzdGVuZXIoKVxuICAvLyB9LCBbXSlcblxuICAvLyBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfVVNFUilcblxuICAvLyBpZiAobG9hZGluZykgcmV0dXJuICdMb2FkaW5nLi4uJ1xuICAvLyBpZiAoZXJyb3IpIHJldHVybiBgRXJyb3IhICR7ZXJyb3IubWVzc2FnZX1gXG5cbiAgLy8gY29uc29sZS5sb2coZGF0YSlcblxuICAvLyBhc3luY0NhbGwoKS50aGVuKCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZygnaHVycmF5IScpXG4gIC8vIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJBcHAtaGVhZGVyXCI+XG4gICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJBcHAtbG9nb1wiIGFsdD1cImxvZ29cIiAvPlxuICAgICAgICA8cD5cbiAgICAgICAgICBFZGl0IDxjb2RlPnNyYy9BcHAuanM8L2NvZGU+IGFuZCBzYXZlIHRvIHJlbG9hZC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cIkFwcC1saW5rXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZ1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIExlYXJuIFJlYWN0XG4gICAgICAgIDwvYT5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImxvZ28iLCJncWwiLCJ1c2VRdWVyeSIsIkdFVF9VU0VSIiwiVVJMIiwiYXN5bmNDYWxsIiwiSFRUUEVycm9yIiwiRXJyb3IiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb28iLCJoZWFkZXJzIiwib2siLCJzdGF0dXNUZXh0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwiY29kZSIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

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