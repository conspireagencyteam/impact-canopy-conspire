/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./src/scripts/performance.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cartPerformance: () => (/* binding */ cartPerformance)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ThemePerformance = /*#__PURE__*/function () {
  /**
   * @param {string} metricPrefix
   */
  function ThemePerformance(metricPrefix) {
    _classCallCheck(this, ThemePerformance);
    this.metricPrefix = metricPrefix;
  }

  /**
   * @param {string} benchmarkName
   * @returns {PerformanceMark}
   */
  return _createClass(ThemePerformance, [{
    key: "createStartingMarker",
    value: function createStartingMarker(benchmarkName) {
      var metricName = "".concat(this.metricPrefix, ":").concat(benchmarkName);
      return performance.mark("".concat(metricName, ":start"));
    }

    /**
     * @param {string} benchmarkName
     * @param {Event} event
     * @returns {void}
     */
  }, {
    key: "measureFromEvent",
    value: function measureFromEvent(benchmarkName, event) {
      var metricName = "".concat(this.metricPrefix, ":").concat(benchmarkName);
      performance.mark("".concat(metricName, ":start"), {
        startTime: event.timeStamp
      });
      performance.mark("".concat(metricName, ":end"));
      performance.measure(metricName, "".concat(metricName, ":start"), "".concat(metricName, ":end"));
    }

    /**
     * @param {PerformanceMark} startMarker
     * @returns {void}
     */
  }, {
    key: "measureFromMarker",
    value: function measureFromMarker(startMarker) {
      var metricName = startMarker.name.replace(/:start$/, '');
      var endMarker = performance.mark("".concat(metricName, ":end"));
      performance.measure(metricName, startMarker.name, endMarker.name);
    }

    /**
     * @param {string} benchmarkName
     * @param {Function} callback
     * @returns {void}
     */
  }, {
    key: "measure",
    value: function measure(benchmarkName, callback) {
      var metricName = "".concat(this.metricPrefix, ":").concat(benchmarkName);
      performance.mark("".concat(metricName, ":start"));
      callback();
      performance.mark("".concat(metricName, ":end"));
      performance.measure(benchmarkName, "".concat(metricName, ":start"), "".concat(metricName, ":end"));
    }
  }]);
}();
var cartPerformance = new ThemePerformance('cart-performance');
/******/ })()
;