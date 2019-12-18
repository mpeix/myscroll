/*! For license information please see main.js.LICENSE */
!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="./js/scroll/scroll.js")}({"./enums/browsers.js":function(module,exports){eval("module.exports = {\r\n    firefox :'FIREFOX',\r\n    webkit: 'WEBKIT',\r\n    ie: 'IE',\r\n    edge: 'EDGE'\r\n}\n\n//# sourceURL=webpack:///./enums/browsers.js?")},"./js/scroll/browserUtils.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _browsers = _interopRequireDefault(__webpack_require__(/*! ../../enums/browsers */ "./enums/browsers.js"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar detectBrowser = function detectBrowser() {\n  if (!!navigator.userAgent.match(/firefox/i)) return _browsers["default"].firefox;else if (\'webkitTransformOriginZ\' in document.documentElement.style) return _browsers["default"].webkit;else if (\n  /*@cc_on!@*/\n   false || window.navigator.msPointerEnabled) return _browsers["default"].ie;\n};\n\nmodule.exports = {\n  detectBrowser: detectBrowser\n};\n\n//# sourceURL=webpack:///./js/scroll/browserUtils.js?')},"./js/scroll/scroll.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports["default"] = void 0;\n\nvar _browsers = _interopRequireDefault(__webpack_require__(/*! ../../enums/browsers */ "./enums/browsers.js"));\n\nvar _browserUtils = __webpack_require__(/*! ./browserUtils */ "./js/scroll/browserUtils.js");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Scroll =\n/*#__PURE__*/\nfunction () {\n  function Scroll(options) {\n    _classCallCheck(this, Scroll);\n\n    var selector = options.selector,\n        scrollWidth = options.scrollWidth,\n        scrollTrackColor = options.scrollTrackColor,\n        scrollThumbBackground = options.scrollThumbBackground,\n        scrollThumbHoverBackground = options.scrollThumbHoverBackground,\n        useArrows = options.useArrows;\n    this.createStylesSheet = this.createStylesSheet.bind(this);\n    this.addStylesSheetToHeadSection = this.addStylesSheetToHeadSection.bind(this);\n    this.addWebkitStyles = this.addWebkitStyles.bind(this);\n    this.addFirefoxStyles = this.addFirefoxStyles.bind(this);\n    this.addIEStyles = this.addIEStyles.bind(this);\n    this.addStylesToElement = this.addStylesToElement.bind(this);\n    this.options = {\n      selector: selector || \'\',\n      scrollWidth: scrollWidth || 5,\n      scrollTrackColor: scrollTrackColor || \'#888\',\n      scrollThumbBackground: scrollThumbBackground || \'black\',\n      scrollThumbHoverBackground: scrollThumbHoverBackground || \'lightgray\',\n      useArrows: useArrows || false\n    };\n    this.addStylesToElement(this.options);\n  }\n\n  _createClass(Scroll, [{\n    key: "createStylesSheet",\n    value: function createStylesSheet() {\n      return document.createElement(\'style\').sheet;\n    }\n  }, {\n    key: "addStylesSheetToHeadSection",\n    value: function addStylesSheetToHeadSection(stylesheet) {\n      document.head.appendChild(stylesheet);\n    }\n  }, {\n    key: "addFirefoxStyles",\n    value: function addFirefoxStyles() {\n      return "".concat(this.options.selector, "{\\n      scrollbar-color: ").concat(this.options.scrollThumbBackground, " ").concat(this.options.scrollTrackColor, ";\\n      scrollbar-width: ").concat(this.options.scrollWidth, ";\\n    }");\n    }\n  }, {\n    key: "addWebkitStyles",\n    value: function addWebkitStyles() {\n      var webkitCssRulesCollection = [];\n      webkitCssRulesCollection.push("".concat(this.options.selector, "::-webkit-scrollbar{\\n                                      width:").concat(this.options.scrollWidth, "px;}"));\n      webkitCssRulesCollection.push("".concat(this.options.selector, "::-webkit-scrollbar-track{\\n                                      background:").concat(this.options.scrollTrackColor, ";}"));\n      webkitCssRulesCollection.push("".concat(this.options.selector, "::-webkit-scrollbar-thumb{\\n                                      background:").concat(this.options.scrollThumbBackground, ";}"));\n      webkitCssRulesCollection.push("".concat(this.options.selector, "::-webkit-scrollbar-thumb:hover{\\n                                      background:").concat(this.options.scrollThumbHoverBackground, ";}"));\n\n      if (this.options.useArrows) {\n        webkitCssRulesCollection.push("".concat(this.options.selector, "::-webkit-scrollbar-button:vertical:increment{\\n                                      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMiA5LjI5TDEyIDEzLjE3bDMuODgtMy44OGMuMzktLjM5IDEuMDItLjM5IDEuNDEgMCAuMzkuMzkuMzkgMS4wMiAwIDEuNDFsLTQuNTkgNC41OWMtLjM5LjM5LTEuMDIuMzktMS40MSAwTDYuNyAxMC43Yy0uMzktLjM5LS4zOS0xLjAyIDAtMS40MS4zOS0uMzggMS4wMy0uMzkgMS40MiAweiIvPjwvc3ZnPg==) center center no-repeat;\\n                                      display: block;\\n                                      background-size: contain; }"));\n        webkitCssRulesCollection.push("".concat(this.options.selector, "::-webkit-scrollbar-button:vertical:decrement{\\n                                    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMiAxNC43MUwxMiAxMC44M2wzLjg4IDMuODhjLjM5LjM5IDEuMDIuMzkgMS40MSAwIC4zOS0uMzkuMzktMS4wMiAwLTEuNDFMMTIuNyA4LjcxYy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEw2LjcgMTMuM2MtLjM5LjM5LS4zOSAxLjAyIDAgMS40MS4zOS4zOCAxLjAzLjM5IDEuNDIgMHoiLz48L3N2Zz4=) center center no-repeat;\\n                                    display: block;\\n                                    background-size: contain;}"));\n      }\n\n      return webkitCssRulesCollection;\n    }\n  }, {\n    key: "addIEStyles",\n    value: function addIEStyles() {\n      return "".concat(this.options.selector, "{\\n      scrollbar-face-color:").concat(this.options.scrollThumbBackground, ";\\n      scrollbar-arrow-color:#05B7FF;\\n      scrollbar-track-color:").concat(this.options.scrollTrackColor, ";\\n      scrollbar-shadow-color:#05B7FF;\\n      scrollbar-highlight-color:#05B7FF;\\n      scrollbar-3dlight-color:#808080;\\n      scrollbar-darkshadow-Color:#202020;\\n    }");\n    }\n  }, {\n    key: "addStylesToElement",\n    value: function addStylesToElement() {\n      var cssRulesCollection = []; //Create stylessheet and at it to head section\n\n      var stylesheet = this.createStylesSheet();\n      addStylesSheetToHeadSection(stylesheet); //General styling\n\n      var generalStyling = "".concat(this.options.selector, "{\\n                            overflow:auto;\\n                          }");\n      cssRulesCollection.push(generalStyling);\n\n      switch ((0, _browserUtils.detectBrowser)()) {\n        case _browsers["default"].firefox:\n          cssRulesCollection.push(this.addFirefoxStyles());\n          break;\n\n        case _browsers["default"].webkit:\n          //Rules for webkit browsers (Chrome, Safari, Opera)   \n          cssRulesCollection.concat(this.addWebkitStyles());\n          break;\n\n        case _browsers["default"].ie:\n          cssRulesCollection.push(this.addIEStyles());\n          break;\n\n        default:\n          console.log(\'%cNot supported browser\', "color:red;font-size:18px;font:weight:600");\n          break;\n      }\n\n      console.log(\'%cFeel free to contribute here: =>\', "color:blue;font-size:18px;font:weight:600");\n\n      for (var i = 0; i < cssRulesCollection.length; i++) {\n        stylesheet.insertRule(cssRulesCollection[i], i);\n      }\n    }\n  }]);\n\n  return Scroll;\n}();\n\nexports["default"] = Scroll;\n\n//# sourceURL=webpack:///./js/scroll/scroll.js?')}});