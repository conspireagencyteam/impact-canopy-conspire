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
/*!****************************************************!*\
  !*** ./src/scripts/paginated-list-aspect-ratio.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginatedListAspectRatioHelper: () => (/* binding */ PaginatedListAspectRatioHelper)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _imageRatioSetting = /*#__PURE__*/new WeakMap();
var _ASPECT_RATIOS = /*#__PURE__*/new WeakMap();
var _PaginatedListAspectRatioHelper_brand = /*#__PURE__*/new WeakSet();
/**
 * A helper class to keep the set aspect ratio in a card gallery element in the theme editor.
 * This applies the aspect ratio to newly loaded product cards even when the setting has changed and is unsaved.
 */
var PaginatedListAspectRatioHelper = /*#__PURE__*/function () {
  /**
   * @param {Object} options - The options object
   * @param {HTMLElement} options.templateCard - The template card gallery element to get the image ratio from
   */
  function PaginatedListAspectRatioHelper(_ref) {
    var _templateCard = _ref.templateCard;
    _classCallCheck(this, PaginatedListAspectRatioHelper);
    /**
     * Store the image ratio from the template card for later use
     * @param {HTMLElement} templateCard - The template card gallery element to get the image ratio from
     */
    _classPrivateMethodInitSpec(this, _PaginatedListAspectRatioHelper_brand);
    /** @type {string | null} */
    _classPrivateFieldInitSpec(this, _imageRatioSetting, null);
    /**
     * Aspect ratio values matching the theme's standardized values
     * @type {Object.<string, string>}
     */
    _classPrivateFieldInitSpec(this, _ASPECT_RATIOS, {
      square: '1',
      portrait: '0.8',
      landscape: '1.778'
    });
    if (!Shopify.designMode) return;
    _assertClassBrand(_PaginatedListAspectRatioHelper_brand, this, _storeImageRatioSettings).call(this, _templateCard);
  }

  /**
   * Process newly added elements and apply correct aspect ratios
   */
  return _createClass(PaginatedListAspectRatioHelper, [{
    key: "processNewElements",
    value: function processNewElements() {
      var _this = this;
      if (!Shopify.designMode) return;
      // Wait for the DOM to update
      requestAnimationFrame(function () {
        _classPrivateFieldGet(_imageRatioSetting, _this) === 'adapt' ? _assertClassBrand(_PaginatedListAspectRatioHelper_brand, _this, _fixAdaptiveAspectRatios).call(_this) : _assertClassBrand(_PaginatedListAspectRatioHelper_brand, _this, _applyFixedAspectRatio).call(_this);
      });
    }
  }]);
}();
function _storeImageRatioSettings(templateCard) {
  _classPrivateFieldSet(_imageRatioSetting, this, templateCard.getAttribute('data-image-ratio'));
}
/**
 * Fix adaptive aspect ratios for newly added cards
 * For the 'adapt' setting, each product should use its own image's aspect ratio
 */
function _fixAdaptiveAspectRatios() {
  var _this2 = this;
  var newCardGalleries = _assertClassBrand(_PaginatedListAspectRatioHelper_brand, this, _getUnprocessedGalleries).call(this);
  if (!newCardGalleries.length) return;
  var productRatioCache = new Map();
  newCardGalleries.forEach(function (gallery) {
    if (!(gallery instanceof HTMLElement)) return;
    var productId = gallery.getAttribute('data-product-id');
    if (productId && productRatioCache.has(productId)) {
      _assertClassBrand(_PaginatedListAspectRatioHelper_brand, _this2, _applyAspectRatioToGallery).call(_this2, gallery, productRatioCache.get(productId));
      return;
    }
    var img = gallery.querySelector('img');
    if (!img) {
      _assertClassBrand(_PaginatedListAspectRatioHelper_brand, _this2, _applyAspectRatioToGallery).call(_this2, gallery, '1');
      return;
    }
    var loadAndSetRatio = function loadAndSetRatio() {
      if (!img.naturalWidth || !img.naturalHeight) return;
      var imgRatio = _assertClassBrand(_PaginatedListAspectRatioHelper_brand, _this2, _getSafeImageAspectRatio).call(_this2, img.naturalWidth, img.naturalHeight);
      if (productId) {
        productRatioCache.set(productId, imgRatio);
      }
      _assertClassBrand(_PaginatedListAspectRatioHelper_brand, _this2, _applyAspectRatioToGallery).call(_this2, gallery, imgRatio);
    };
    if (img.complete) {
      loadAndSetRatio();
    } else {
      img.addEventListener('load', loadAndSetRatio, {
        once: true
      });
    }
  });
}
/**
 * Apply a fixed aspect ratio to all card-gallery and media container elements
 * Only used for non-adaptive modes (square, portrait, landscape)
 */
function _applyFixedAspectRatio() {
  var _this3 = this;
  if (!_classPrivateFieldGet(_imageRatioSetting, this)) return;
  var aspectRatio = _assertClassBrand(_PaginatedListAspectRatioHelper_brand, this, _getAspectRatioValue).call(this, _classPrivateFieldGet(_imageRatioSetting, this));
  if (!aspectRatio) return;
  var newCardGalleries = _assertClassBrand(_PaginatedListAspectRatioHelper_brand, this, _getUnprocessedGalleries).call(this);
  if (!newCardGalleries.length) return;

  // Batch DOM operations for better performance
  requestAnimationFrame(function () {
    newCardGalleries.forEach(function (gallery) {
      if (!(gallery instanceof HTMLElement)) return;
      _assertClassBrand(_PaginatedListAspectRatioHelper_brand, _this3, _applyAspectRatioToGallery).call(_this3, gallery, aspectRatio);
    });
  });
}
/**
 * Calculate a safe aspect ratio value from image dimensions
 * Ensures the ratio stays within reasonable bounds and has consistent decimal places
 * @param {number} width - Natural width of the image
 * @param {number} height - Natural height of the image
 * @returns {string} Normalized aspect ratio as a string
 */
function _getSafeImageAspectRatio(width, height) {
  var rawRatio = width / height;
  return Math.max(0.1, Math.min(10, rawRatio)).toFixed(3);
}
/**
 * Get aspect ratio value based on setting
 * @param {string} ratioSetting - The ratio setting name
 * @returns {string|null} - The aspect ratio value or null
 */
function _getAspectRatioValue(ratioSetting) {
  return _classPrivateFieldGet(_ASPECT_RATIOS, this)[ratioSetting] || null;
}
/**
 * Apply an aspect ratio to a gallery and all its media containers
 * @param {HTMLElement} gallery - The gallery element
 * @param {string} aspectRatio - The aspect ratio to apply
 */
function _applyAspectRatioToGallery(gallery, aspectRatio) {
  if (!(gallery instanceof HTMLElement)) return;
  gallery.style.setProperty('--gallery-aspect-ratio', aspectRatio);
  var mediaContainers = gallery.querySelectorAll('.product-media-container');
  mediaContainers.forEach(function (container) {
    if (container instanceof HTMLElement) {
      container.style.aspectRatio = aspectRatio;
    }
  });
  _assertClassBrand(_PaginatedListAspectRatioHelper_brand, this, _markAsProcessed).call(this, gallery);
}
/**
 * Get all unprocessed card galleries
 * @returns {NodeListOf<Element>} List of unprocessed galleries
 */
function _getUnprocessedGalleries() {
  return document.querySelectorAll('.card-gallery:not([data-aspect-ratio-applied])');
}
/**
 * Mark gallery as processed
 * @param {HTMLElement} gallery - The gallery element to mark as processed
 */
function _markAsProcessed(gallery) {
  if (!(gallery instanceof HTMLElement)) return;
  gallery.setAttribute('data-aspect-ratio-applied', 'true');
}
/******/ })()
;