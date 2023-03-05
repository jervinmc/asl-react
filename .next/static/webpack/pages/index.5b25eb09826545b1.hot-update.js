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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service */ \"./services/service.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// We'll limit the processing size to 200px.\nconst maxVideoSize = 224;\nconst LETTERS = [\n    \"A\",\n    \"B\",\n    \"C\",\n    \"D\",\n    \"A\",\n    \"B\",\n    \"H\",\n    \"H\",\n    \"J\",\n    \"J\",\n    \"K\",\n    \"L\",\n    \"A\",\n    \"A\",\n    \"O\",\n    \"P\",\n    \"C\",\n    \"R\",\n    \"A\",\n    \"A\",\n    \"U\",\n    \"V\",\n    \"W\",\n    \"X\",\n    \"Y\",\n    \"D\",\n    \"_NOTHING\",\n    \"_SPACE\"\n];\nconst THRESHOLD = 5;\nconst THRESHOLDS = {\n    S: 3,\n    E: 5,\n    A: 5,\n    N: 6,\n    R: 5\n};\n/**\n * What we're going to render is:\n *\n * 1. A video component so the user can see what's on the camera.\n *\n * 2. A button to generate an image of the video, load OpenCV and\n * process the image.\n *\n * 3. A canvas to allow us to capture the image of the video and\n * show it to the user.\n */ function Page() {\n    _s();\n    const videoElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const canvasEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const outputCanvasEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let [letter, setLetter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    let [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    let [fps, setFps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    let [words, setWords] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    /**\n   * In the onClick event we'll capture a frame within\n   * the video to pass it to our service.\n   */ async function processImage() {\n        if (videoElement !== null && canvasEl !== null && typeof videoElement.current !== \"undefined\" && videoElement.current !== null) {\n            let frames = 0;\n            let start = Date.now();\n            let prevLetter = \"\";\n            let count = 0;\n            let _words = \"\";\n            const processWord = ()=>{\n                let wordsSplit = _words.split(\" \");\n                fetch(\"/api/autocorrect?word=\".concat(wordsSplit[wordsSplit.length - 1])).then((res)=>res.json()).then((json)=>{\n                    const correctedWord = json[\"correctedWord\"];\n                    speechSynthesis.speak(new SpeechSynthesisUtterance(correctedWord));\n                    wordsSplit.pop();\n                    _words = wordsSplit.join(\" \") + \" \" + correctedWord.toUpperCase() + \" \";\n                    setWords(wordsSplit.join(\" \") + \" \" + correctedWord.toUpperCase() + \" \");\n                });\n            };\n            videoElement.current.addEventListener(\"ended\", ()=>processWord());\n            var counter = 0;\n            while(true){\n                if (counter < 10) {\n                    counter = counter + 1;\n                } else {\n                    counter = 0;\n                    const ctx = canvasEl.current.getContext(\"2d\");\n                    ctx.drawImage(videoElement.current, 0, 0, maxVideoSize, maxVideoSize);\n                    const image = ctx.getImageData(0, 0, maxVideoSize, maxVideoSize);\n                    // Processing image\n                    const processedImage = await _services_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].imageProcessing(image);\n                    // Render the processed image to the canvas\n                    const ctxOutput = outputCanvasEl.current.getContext(\"2d\");\n                    ctxOutput.putImageData(processedImage.data.payload, 0, 0);\n                    const prediction = await _services_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].predict(processedImage.data.payload);\n                    const predictedLetter = prediction.data.payload;\n                    const letterValue = LETTERS[predictedLetter];\n                    setLetter(letterValue);\n                    if (letterValue !== prevLetter) {\n                        if (!THRESHOLDS[prevLetter] ? count > THRESHOLD : count > THRESHOLDS[prevLetter]) {\n                            if (prevLetter === \"_SPACE\") processWord();\n                            else {\n                                _words = _words + (prevLetter === \"_NOTHING\" ? \"\" : prevLetter);\n                                setWords((state, props)=>state + (prevLetter === \"_NOTHING\" ? \"\" : prevLetter));\n                            }\n                        }\n                        count = 0;\n                    } else {\n                        count++;\n                    }\n                    prevLetter = letterValue;\n                    frames++;\n                    if (frames === 10) {\n                        setFps(10 / ((Date.now() - start) / 1000));\n                        frames = 0;\n                        start = Date.now();\n                    }\n                }\n            }\n        }\n    }\n    /**\n   * In the useEffect hook we'll load the video\n   * element to show what's on camera.\n   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function initCamera() {\n            videoElement.current.width = maxVideoSize;\n            videoElement.current.height = maxVideoSize;\n            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {\n                const stream = await navigator.mediaDevices.getUserMedia({\n                    audio: false,\n                    video: {\n                        facingMode: \"environment\",\n                        width: maxVideoSize,\n                        height: maxVideoSize\n                    }\n                });\n                videoElement.current.srcObject = stream;\n                return new Promise((resolve)=>{\n                    videoElement.current.onloadedmetadata = ()=>{\n                        resolve(videoElement.current);\n                    };\n                });\n            }\n            const errorMessage = \"This browser does not support video capture, or this device does not have a camera\";\n            alert(errorMessage);\n            return Promise.reject(errorMessage);\n        }\n        async function load() {\n            const videoLoaded = await initCamera();\n            await _services_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].load();\n            videoLoaded.play();\n            setTimeout(processImage, 0);\n            setLoading(false);\n            return videoLoaded;\n        }\n        load();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginTop: \"2em\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center text-heading\",\n                style: {\n                    marginBottom: \"0.5em\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                lineNumber: 201,\n                columnNumber: 7\n            }, this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row justify-content-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"spinner-border\",\n                        style: {\n                            width: \"8em\",\n                            height: \"8em\",\n                            marginBottom: \"2em\"\n                        },\n                        role: \"status\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                        lineNumber: 210,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                    lineNumber: 209,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                lineNumber: 208,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: loading ? \"none\" : \"block\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row justify-content-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-xs-12 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                    className: \"video\",\n                                    playsInline: true,\n                                    ref: videoElement\n                                }, void 0, false, {\n                                    fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                                    lineNumber: 221,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                                lineNumber: 220,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                                style: {\n                                    display: \"none\"\n                                },\n                                ref: canvasEl,\n                                width: maxVideoSize,\n                                height: maxVideoSize\n                            }, void 0, false, {\n                                fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                                lineNumber: 223,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                                className: \"col-xs-12\",\n                                style: {\n                                    display: \"none\"\n                                },\n                                ref: outputCanvasEl,\n                                width: maxVideoSize,\n                                height: maxVideoSize\n                            }, void 0, false, {\n                                fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                                lineNumber: 229,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                        lineNumber: 219,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row justify-content-center text-center\",\n                        style: {\n                            marginTop: \"2em\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-xs-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"text-letter\",\n                                    children: \"Predicted Letter:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                                    lineNumber: 243,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"text-letter\",\n                                    style: {\n                                        borderRadius: 10,\n                                        border: \"2px solid #FFFFFF\",\n                                        padding: \"0.5em\"\n                                    },\n                                    children: letter\n                                }, void 0, false, {\n                                    fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                                    lineNumber: 244,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                            lineNumber: 242,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                        lineNumber: 238,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row justify-content-center text-center\",\n                        style: {\n                            marginTop: \"2em\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                        lineNumber: 256,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n                lineNumber: 218,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jervinmacalawa/Signify/pages/index.js\",\n        lineNumber: 200,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"You5jxfnGUYTS45/UZO6ZjMBiGM=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBTWlCLFdBQVU7b0NBQVFJLFdBQVc7b0NBQUNDLEtBQUtwRjs7Ozs7Ozs7Ozs7MENBRTVDLDhEQUFDcUY7Z0NBQ0NULE9BQU87b0NBQUVNLFNBQVM7Z0NBQU87Z0NBQ3pCRSxLQUFLbkY7Z0NBQ0xzRCxPQUFPakU7Z0NBQ1BrRSxRQUFRbEU7Ozs7OzswQ0FFViw4REFBQytGO2dDQUNDTixXQUFVO2dDQUNWSCxPQUFPO29DQUFFTSxTQUFTO2dDQUFPO2dDQUN6QkUsS0FBS2xGO2dDQUNMcUQsT0FBT2pFO2dDQUNQa0UsUUFBUWxFOzs7Ozs7Ozs7Ozs7a0NBSVosOERBQUNxRjt3QkFDQ0ksV0FBVTt3QkFDVkgsT0FBTzs0QkFBRUMsV0FBVzt3QkFBTTtrQ0FFMUIsNEVBQUNGOzRCQUFJSSxXQUFVOzs4Q0FDYiw4REFBQ087b0NBQUdQLFdBQVU7OENBQWM7Ozs7Ozs4Q0FDNUIsOERBQUNRO29DQUNDUixXQUFVO29DQUNWSCxPQUFPO3dDQUNMWSxjQUFjO3dDQUNkQyxRQUFRO3dDQUNSQyxTQUFTO29DQUNYOzhDQUVDdkY7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlQLDhEQUFDd0U7d0JBQ0NJLFdBQVU7d0JBQ1ZILE9BQU87NEJBQUVDLFdBQVc7d0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CcEMsQ0FBQztHQTVOdUI5RTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL3NlcnZpY2VcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhSGFuZFBhcGVyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG4vLyBXZSdsbCBsaW1pdCB0aGUgcHJvY2Vzc2luZyBzaXplIHRvIDIwMHB4LlxuY29uc3QgbWF4VmlkZW9TaXplID0gMjI0O1xuY29uc3QgTEVUVEVSUyA9IFtcbiAgXCJBXCIsXG4gIFwiQlwiLFxuICBcIkNcIixcbiAgXCJEXCIsXG4gIFwiQVwiLCAvL0VcbiAgXCJCXCIsIC8vRlxuICBcIkhcIiwgLy9HXG4gIFwiSFwiLFxuICBcIkpcIiwgLy9JXG4gIFwiSlwiLFxuICBcIktcIixcbiAgXCJMXCIsXG4gIFwiQVwiLCAvL01cbiAgXCJBXCIsIC8vTlxuICBcIk9cIixcbiAgXCJQXCIsXG4gIFwiQ1wiLCAvL1FcbiAgXCJSXCIsXG4gIFwiQVwiLCAvL1NcbiAgXCJBXCIsIC8vVFxuICBcIlVcIixcbiAgXCJWXCIsXG4gIFwiV1wiLFxuICBcIlhcIixcbiAgXCJZXCIsXG4gIFwiRFwiLCAvL1pcbiAgXCJfTk9USElOR1wiLFxuICBcIl9TUEFDRVwiLFxuXTtcbmNvbnN0IFRIUkVTSE9MRCA9IDU7XG5cbmNvbnN0IFRIUkVTSE9MRFMgPSB7XG4gIFM6IDMsXG4gIEU6IDUsXG4gIEE6IDUsXG4gIE46IDYsXG4gIFI6IDUsXG59O1xuLyoqXG4gKiBXaGF0IHdlJ3JlIGdvaW5nIHRvIHJlbmRlciBpczpcbiAqXG4gKiAxLiBBIHZpZGVvIGNvbXBvbmVudCBzbyB0aGUgdXNlciBjYW4gc2VlIHdoYXQncyBvbiB0aGUgY2FtZXJhLlxuICpcbiAqIDIuIEEgYnV0dG9uIHRvIGdlbmVyYXRlIGFuIGltYWdlIG9mIHRoZSB2aWRlbywgbG9hZCBPcGVuQ1YgYW5kXG4gKiBwcm9jZXNzIHRoZSBpbWFnZS5cbiAqXG4gKiAzLiBBIGNhbnZhcyB0byBhbGxvdyB1cyB0byBjYXB0dXJlIHRoZSBpbWFnZSBvZiB0aGUgdmlkZW8gYW5kXG4gKiBzaG93IGl0IHRvIHRoZSB1c2VyLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCB2aWRlb0VsZW1lbnQgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGNhbnZhc0VsID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBvdXRwdXRDYW52YXNFbCA9IHVzZVJlZihudWxsKTtcbiAgbGV0IFtsZXR0ZXIsIHNldExldHRlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgbGV0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBsZXQgW2Zwcywgc2V0RnBzXSA9IHVzZVN0YXRlKDApO1xuICBsZXQgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvKipcbiAgICogSW4gdGhlIG9uQ2xpY2sgZXZlbnQgd2UnbGwgY2FwdHVyZSBhIGZyYW1lIHdpdGhpblxuICAgKiB0aGUgdmlkZW8gdG8gcGFzcyBpdCB0byBvdXIgc2VydmljZS5cbiAgICovXG4gIGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NJbWFnZSgpIHtcbiAgICBpZiAoXG4gICAgICB2aWRlb0VsZW1lbnQgIT09IG51bGwgJiZcbiAgICAgIGNhbnZhc0VsICE9PSBudWxsICYmXG4gICAgICB0eXBlb2YgdmlkZW9FbGVtZW50LmN1cnJlbnQgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIHZpZGVvRWxlbWVudC5jdXJyZW50ICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBsZXQgZnJhbWVzID0gMDtcbiAgICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICBsZXQgcHJldkxldHRlciA9IFwiXCI7XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgbGV0IF93b3JkcyA9IFwiXCI7XG5cbiAgICAgIGNvbnN0IHByb2Nlc3NXb3JkID0gKCkgPT4ge1xuICAgICAgICBsZXQgd29yZHNTcGxpdCA9IF93b3Jkcy5zcGxpdChcIiBcIik7XG4gICAgICAgIGZldGNoKGAvYXBpL2F1dG9jb3JyZWN0P3dvcmQ9JHt3b3Jkc1NwbGl0W3dvcmRzU3BsaXQubGVuZ3RoIC0gMV19YClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb3JyZWN0ZWRXb3JkID0ganNvbltcImNvcnJlY3RlZFdvcmRcIl07XG4gICAgICAgICAgICBzcGVlY2hTeW50aGVzaXMuc3BlYWsobmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZShjb3JyZWN0ZWRXb3JkKSk7XG4gICAgICAgICAgICB3b3Jkc1NwbGl0LnBvcCgpO1xuICAgICAgICAgICAgX3dvcmRzID1cbiAgICAgICAgICAgICAgd29yZHNTcGxpdC5qb2luKFwiIFwiKSArIFwiIFwiICsgY29ycmVjdGVkV29yZC50b1VwcGVyQ2FzZSgpICsgXCIgXCI7XG4gICAgICAgICAgICBzZXRXb3JkcyhcbiAgICAgICAgICAgICAgd29yZHNTcGxpdC5qb2luKFwiIFwiKSArIFwiIFwiICsgY29ycmVjdGVkV29yZC50b1VwcGVyQ2FzZSgpICsgXCIgXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB2aWRlb0VsZW1lbnQuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgKCkgPT4gcHJvY2Vzc1dvcmQoKSk7XG4gICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBpZihjb3VudGVyIDwgMTApe1xuICAgICAgICAgIGNvdW50ZXIgPSBjb3VudGVyICsgMSA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzRWwuY3VycmVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZSh2aWRlb0VsZW1lbnQuY3VycmVudCwgMCwgMCwgbWF4VmlkZW9TaXplLCBtYXhWaWRlb1NpemUpO1xuICAgICAgICAgIGNvbnN0IGltYWdlID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBtYXhWaWRlb1NpemUsIG1heFZpZGVvU2l6ZSk7XG4gICAgICAgICAgLy8gUHJvY2Vzc2luZyBpbWFnZVxuICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZEltYWdlID0gYXdhaXQgc2VydmljZS5pbWFnZVByb2Nlc3NpbmcoaW1hZ2UpO1xuICAgICAgICAgIC8vIFJlbmRlciB0aGUgcHJvY2Vzc2VkIGltYWdlIHRvIHRoZSBjYW52YXNcbiAgICAgICAgICBjb25zdCBjdHhPdXRwdXQgPSBvdXRwdXRDYW52YXNFbC5jdXJyZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICBjdHhPdXRwdXQucHV0SW1hZ2VEYXRhKHByb2Nlc3NlZEltYWdlLmRhdGEucGF5bG9hZCwgMCwgMCk7XG5cbiAgICAgICAgICBjb25zdCBwcmVkaWN0aW9uID0gYXdhaXQgc2VydmljZS5wcmVkaWN0KHByb2Nlc3NlZEltYWdlLmRhdGEucGF5bG9hZCk7XG5cbiAgICAgICAgICBjb25zdCBwcmVkaWN0ZWRMZXR0ZXIgPSBwcmVkaWN0aW9uLmRhdGEucGF5bG9hZDtcbiAgICAgICAgICBjb25zdCBsZXR0ZXJWYWx1ZSA9IExFVFRFUlNbcHJlZGljdGVkTGV0dGVyXTtcblxuICAgICAgICAgIHNldExldHRlcihsZXR0ZXJWYWx1ZSk7XG4gICAgICAgICAgaWYgKGxldHRlclZhbHVlICE9PSBwcmV2TGV0dGVyKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICFUSFJFU0hPTERTW3ByZXZMZXR0ZXJdXG4gICAgICAgICAgICAgICAgPyBjb3VudCA+IFRIUkVTSE9MRFxuICAgICAgICAgICAgICAgIDogY291bnQgPiBUSFJFU0hPTERTW3ByZXZMZXR0ZXJdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKHByZXZMZXR0ZXIgPT09IFwiX1NQQUNFXCIpIHByb2Nlc3NXb3JkKCk7XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF93b3JkcyA9IF93b3JkcyArIChwcmV2TGV0dGVyID09PSBcIl9OT1RISU5HXCIgPyBcIlwiIDogcHJldkxldHRlcik7XG4gICAgICAgICAgICAgICAgc2V0V29yZHMoXG4gICAgICAgICAgICAgICAgICAoc3RhdGUsIHByb3BzKSA9PlxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSArIChwcmV2TGV0dGVyID09PSBcIl9OT1RISU5HXCIgPyBcIlwiIDogcHJldkxldHRlcilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHByZXZMZXR0ZXIgPSBsZXR0ZXJWYWx1ZTtcbiAgICAgICAgICBmcmFtZXMrKztcbiAgICAgICAgICBpZiAoZnJhbWVzID09PSAxMCkge1xuICAgICAgICAgICAgc2V0RnBzKDEwIC8gKChEYXRlLm5vdygpIC0gc3RhcnQpIC8gMTAwMCkpO1xuICAgICAgICAgICAgZnJhbWVzID0gMDtcbiAgICAgICAgICAgIHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW4gdGhlIHVzZUVmZmVjdCBob29rIHdlJ2xsIGxvYWQgdGhlIHZpZGVvXG4gICAqIGVsZW1lbnQgdG8gc2hvdyB3aGF0J3Mgb24gY2FtZXJhLlxuICAgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBpbml0Q2FtZXJhKCkge1xuICAgICAgdmlkZW9FbGVtZW50LmN1cnJlbnQud2lkdGggPSBtYXhWaWRlb1NpemU7XG4gICAgICB2aWRlb0VsZW1lbnQuY3VycmVudC5oZWlnaHQgPSBtYXhWaWRlb1NpemU7XG5cbiAgICAgIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICAgIGZhY2luZ01vZGU6IFwiZW52aXJvbm1lbnRcIixcbiAgICAgICAgICAgIHdpZHRoOiBtYXhWaWRlb1NpemUsXG4gICAgICAgICAgICBoZWlnaHQ6IG1heFZpZGVvU2l6ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdmlkZW9FbGVtZW50LmN1cnJlbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIHZpZGVvRWxlbWVudC5jdXJyZW50Lm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHZpZGVvRWxlbWVudC5jdXJyZW50KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XG4gICAgICAgIFwiVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdmlkZW8gY2FwdHVyZSwgb3IgdGhpcyBkZXZpY2UgZG9lcyBub3QgaGF2ZSBhIGNhbWVyYVwiO1xuICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvck1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICBjb25zdCB2aWRlb0xvYWRlZCA9IGF3YWl0IGluaXRDYW1lcmEoKTtcbiAgICAgIGF3YWl0IHNlcnZpY2UubG9hZCgpO1xuICAgICAgdmlkZW9Mb2FkZWQucGxheSgpO1xuICAgICAgc2V0VGltZW91dChwcm9jZXNzSW1hZ2UsIDApO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICByZXR1cm4gdmlkZW9Mb2FkZWQ7XG4gICAgfVxuXG4gICAgbG9hZCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyZW1cIiB9fT5cbiAgICAgIDxoMVxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWhlYWRpbmdcIlxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMC41ZW1cIiB9fVxuICAgICAgPlxuICAgICAgICB7LyogPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhhbmRQYXBlcn0gLz4gKi99XG4gICAgICA8L2gxPlxuICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI4ZW1cIiwgaGVpZ2h0OiBcIjhlbVwiLCBtYXJnaW5Cb3R0b206IFwiMmVtXCIgfX1cbiAgICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogbG9hZGluZyA/IFwibm9uZVwiIDogXCJibG9ja1wiIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDx2aWRlbyBjbGFzc05hbWU9XCJ2aWRlb1wiIHBsYXlzSW5saW5lIHJlZj17dmlkZW9FbGVtZW50fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICByZWY9e2NhbnZhc0VsfVxuICAgICAgICAgICAgd2lkdGg9e21heFZpZGVvU2l6ZX1cbiAgICAgICAgICAgIGhlaWdodD17bWF4VmlkZW9TaXplfVxuICAgICAgICAgID48L2NhbnZhcz5cbiAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wteHMtMTJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICAgIHJlZj17b3V0cHV0Q2FudmFzRWx9XG4gICAgICAgICAgICB3aWR0aD17bWF4VmlkZW9TaXplfVxuICAgICAgICAgICAgaGVpZ2h0PXttYXhWaWRlb1NpemV9XG4gICAgICAgICAgPjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyZW1cIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWxldHRlclwiPlByZWRpY3RlZCBMZXR0ZXI6PC9oNT5cbiAgICAgICAgICAgIDxoNFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxldHRlclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNGRkZGRkZcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuNWVtXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsZXR0ZXJ9XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMmVtXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtd29yZHNcIj5QcmVkaWN0ZWQgV29yZHM6PC9oMz5cbiAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdvcmRzXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjRkZGRkZGJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMWVtJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3dvcmRzfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZnBzXCI+RlBTOiB7ZnBzLnRvRml4ZWQoMyl9PC9wPlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNlcnZpY2UiLCJGb250QXdlc29tZUljb24iLCJmYUhhbmRQYXBlciIsIm1heFZpZGVvU2l6ZSIsIkxFVFRFUlMiLCJUSFJFU0hPTEQiLCJUSFJFU0hPTERTIiwiUyIsIkUiLCJBIiwiTiIsIlIiLCJQYWdlIiwidmlkZW9FbGVtZW50IiwiY2FudmFzRWwiLCJvdXRwdXRDYW52YXNFbCIsImxldHRlciIsInNldExldHRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZnBzIiwic2V0RnBzIiwid29yZHMiLCJzZXRXb3JkcyIsInByb2Nlc3NJbWFnZSIsImN1cnJlbnQiLCJmcmFtZXMiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJwcmV2TGV0dGVyIiwiY291bnQiLCJfd29yZHMiLCJwcm9jZXNzV29yZCIsIndvcmRzU3BsaXQiLCJzcGxpdCIsImZldGNoIiwibGVuZ3RoIiwidGhlbiIsInJlcyIsImpzb24iLCJjb3JyZWN0ZWRXb3JkIiwic3BlZWNoU3ludGhlc2lzIiwic3BlYWsiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJwb3AiLCJqb2luIiwidG9VcHBlckNhc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiY291bnRlciIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJpbWFnZSIsImdldEltYWdlRGF0YSIsInByb2Nlc3NlZEltYWdlIiwiaW1hZ2VQcm9jZXNzaW5nIiwiY3R4T3V0cHV0IiwicHV0SW1hZ2VEYXRhIiwiZGF0YSIsInBheWxvYWQiLCJwcmVkaWN0aW9uIiwicHJlZGljdCIsInByZWRpY3RlZExldHRlciIsImxldHRlclZhbHVlIiwic3RhdGUiLCJwcm9wcyIsImluaXRDYW1lcmEiLCJ3aWR0aCIsImhlaWdodCIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInN0cmVhbSIsImF1ZGlvIiwidmlkZW8iLCJmYWNpbmdNb2RlIiwic3JjT2JqZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJvbmxvYWRlZG1ldGFkYXRhIiwiZXJyb3JNZXNzYWdlIiwiYWxlcnQiLCJyZWplY3QiLCJsb2FkIiwidmlkZW9Mb2FkZWQiLCJwbGF5Iiwic2V0VGltZW91dCIsImRpdiIsInN0eWxlIiwibWFyZ2luVG9wIiwiaDEiLCJjbGFzc05hbWUiLCJtYXJnaW5Cb3R0b20iLCJyb2xlIiwiZGlzcGxheSIsInBsYXlzSW5saW5lIiwicmVmIiwiY2FudmFzIiwiaDUiLCJoNCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInBhZGRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});