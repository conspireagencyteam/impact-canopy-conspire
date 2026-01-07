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
/*!*************************************************!*\
  !*** ./src/scripts/recently-viewed-products.js ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentlyViewed: () => (/* binding */ RecentlyViewed)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
/**
 * Updates the recently viewed products in localStorage.
 */
var RecentlyViewed = /*#__PURE__*/function () {
  function RecentlyViewed() {
    _classCallCheck(this, RecentlyViewed);
  }
  return _createClass(RecentlyViewed, null, [{
    key: "addProduct",
    value:
    /**
     * Adds a product to the recently viewed products list.
     * @param {string} productId - The ID of the product to add.
     */
    function addProduct(productId) {
      var viewedProducts = this.getProducts();
      viewedProducts = viewedProducts.filter(function (/** @type {string} */id) {
        return id !== productId;
      });
      viewedProducts.unshift(productId);
      viewedProducts = viewedProducts.slice(0, _assertClassBrand(RecentlyViewed, this, _MAX_PRODUCTS)._);
      localStorage.setItem(_assertClassBrand(RecentlyViewed, this, _STORAGE_KEY)._, JSON.stringify(viewedProducts));
    }
  }, {
    key: "clearProducts",
    value: function clearProducts() {
      localStorage.removeItem(_assertClassBrand(RecentlyViewed, this, _STORAGE_KEY)._);
    }

    /**
     * Retrieves the list of recently viewed products from session storage.
     * @returns {string[]} The list of viewed products.
     */
  }, {
    key: "getProducts",
    value: function getProducts() {
      return JSON.parse(localStorage.getItem(_assertClassBrand(RecentlyViewed, this, _STORAGE_KEY)._) || '[]');
    }
  }]);
}();
/** @static @constant {string} The key used to store the viewed products in session storage */
var _STORAGE_KEY = {
  _: 'viewedProducts'
};
/** @static @constant {number} The maximum number of products to store */
var _MAX_PRODUCTS = {
  _: 4
};
/******/ })()
;