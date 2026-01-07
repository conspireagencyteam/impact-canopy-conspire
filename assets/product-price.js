/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/events.js":
/*!*******************************!*\
  !*** ./src/scripts/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartAddEvent: () => (/* binding */ CartAddEvent),
/* harmony export */   CartErrorEvent: () => (/* binding */ CartErrorEvent),
/* harmony export */   CartUpdateEvent: () => (/* binding */ CartUpdateEvent),
/* harmony export */   DiscountUpdateEvent: () => (/* binding */ DiscountUpdateEvent),
/* harmony export */   FilterUpdateEvent: () => (/* binding */ FilterUpdateEvent),
/* harmony export */   MediaStartedPlayingEvent: () => (/* binding */ MediaStartedPlayingEvent),
/* harmony export */   MegaMenuHoverEvent: () => (/* binding */ MegaMenuHoverEvent),
/* harmony export */   QuantitySelectorUpdateEvent: () => (/* binding */ QuantitySelectorUpdateEvent),
/* harmony export */   SlideshowSelectEvent: () => (/* binding */ SlideshowSelectEvent),
/* harmony export */   ThemeEvents: () => (/* binding */ ThemeEvents),
/* harmony export */   VariantSelectedEvent: () => (/* binding */ VariantSelectedEvent),
/* harmony export */   VariantUpdateEvent: () => (/* binding */ VariantUpdateEvent),
/* harmony export */   ZoomMediaSelectedEvent: () => (/* binding */ ZoomMediaSelectedEvent)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @namespace ThemeEvents
 * @description A collection of theme-specific events that can be used to trigger and listen for changes anywhere in the theme.
 * @example
 * document.dispatchEvent(new VariantUpdateEvent(variant, sectionId, { html }));
 * document.addEventListener(ThemeEvents.variantUpdate, (e) => { console.log(e.detail.variant) });
 */
var ThemeEvents = /*#__PURE__*/_createClass(function ThemeEvents() {
  _classCallCheck(this, ThemeEvents);
});

/**
 * Event fired when a variant is selected
 * @extends {Event}
 */
/** @static @constant {string} Event triggered when a variant is selected */
_defineProperty(ThemeEvents, "variantSelected", 'variant:selected');
/** @static @constant {string} Event triggered when a variant is changed */
_defineProperty(ThemeEvents, "variantUpdate", 'variant:update');
/** @static @constant {string} Event triggered when the cart items or quantities are updated */
_defineProperty(ThemeEvents, "cartUpdate", 'cart:update');
/** @static @constant {string} Event triggered when a cart update fails */
_defineProperty(ThemeEvents, "cartError", 'cart:error');
/** @static @constant {string} Event triggered when a media (video, 3d model) is loaded */
_defineProperty(ThemeEvents, "mediaStartedPlaying", 'media:started-playing');
// Event triggered when quantity-selector value is changed
_defineProperty(ThemeEvents, "quantitySelectorUpdate", 'quantity-selector:update');
/** @static @constant {string} Event triggered when a predictive search is expanded */
_defineProperty(ThemeEvents, "megaMenuHover", 'megaMenu:hover');
/** @static @constant {string} Event triggered when a zoom dialog media is selected */
_defineProperty(ThemeEvents, "zoomMediaSelected", 'zoom-media:selected');
/** @static @constant {string} Event triggered when a discount is applied */
_defineProperty(ThemeEvents, "discountUpdate", 'discount:update');
/** @static @constant {string} Event triggered when changing collection filters */
_defineProperty(ThemeEvents, "FilterUpdate", 'filter:update');
var VariantSelectedEvent = /*#__PURE__*/function (_Event) {
  /**
   * Creates a new VariantSelectedEvent
   * @param {Object} resource - The new variant object
   * @param {string} resource.id - The id of the variant
   */
  function VariantSelectedEvent(resource) {
    var _this;
    _classCallCheck(this, VariantSelectedEvent);
    _this = _callSuper(this, VariantSelectedEvent, [ThemeEvents.variantSelected, {
      bubbles: true
    }]);
    _this.detail = {
      resource: resource
    };
    return _this;
  }
  _inherits(VariantSelectedEvent, _Event);
  return _createClass(VariantSelectedEvent);
}(/*#__PURE__*/_wrapNativeSuper(Event));

/**
 * Event fired after a variant is updated
 * @extends {Event}
 */
var VariantUpdateEvent = /*#__PURE__*/function (_Event2) {
  /**
   * Creates a new VariantUpdateEvent
   * @param {Object} resource - The new variant object
   * @param {string} resource.id - The id of the variant
   * @param {boolean} resource.available - Whether the variant is available
   * @param {boolean} resource.inventory_management - Whether the variant has inventory management
   * @param {Object} [resource.featured_media] - The featured media of the variant
   * @param {string} [resource.featured_media.id] - The id of the featured media
   * @param {Object} [resource.featured_media.preview_image] - The preview image of the featured media
   * @param {string} [resource.featured_media.preview_image.src] - The src URL of the preview image
   * @param {string} sourceId - The id of the element the action was triggered from
   * @param {Object} data - Additional event data
   * @param {Document} data.html - The new document fragment for the variant
   * @param {string} data.productId - The product ID of the updated variant, used to ensure the correct product form is updated
   * @param {Object} [data.newProduct] - If a new product was loaded as part of the variant update (combined listing)
   * @param {string} data.newProduct.id - The id of the new product
   * @param {string} data.newProduct.url - The url of the new product
   */
  function VariantUpdateEvent(resource, sourceId, data) {
    var _this2;
    _classCallCheck(this, VariantUpdateEvent);
    _this2 = _callSuper(this, VariantUpdateEvent, [ThemeEvents.variantUpdate, {
      bubbles: true
    }]);
    _this2.detail = {
      resource: resource || null,
      sourceId: sourceId,
      data: {
        html: data.html,
        productId: data.productId,
        newProduct: data.newProduct
      }
    };
    return _this2;
  }
  _inherits(VariantUpdateEvent, _Event2);
  return _createClass(VariantUpdateEvent);
}(/*#__PURE__*/_wrapNativeSuper(Event));

/**
 * Event class for cart additions
 * @extends {Event}
 */
var CartAddEvent = /*#__PURE__*/function (_Event3) {
  /**
   * Creates a new CartAddEvent
   * @param {Object} [resource] - The new cart object
   * @param {string} [sourceId] - The id of the element the action was triggered from
   * @param {Object} [data] - Additional event data
   * @param {boolean} [data.didError] - Whether the cart operation failed
   * @param {string} [data.source] - The source of the cart update
   * @param {string} [data.productId] - The id of the product card that was updated
   * @param {number} [data.itemCount] - The number of items in the cart
   * @param {string} [data.variantId] - The id of the product variant that was added
   * @param {Record<string, string>} [data.sections] - The sections affected by the cart operation
   */
  function CartAddEvent(resource, sourceId, data) {
    var _this3;
    _classCallCheck(this, CartAddEvent);
    _this3 = _callSuper(this, CartAddEvent, [CartAddEvent.eventName, {
      bubbles: true
    }]);
    _this3.detail = {
      resource: resource,
      sourceId: sourceId,
      data: _objectSpread({}, data)
    };
    return _this3;
  }
  _inherits(CartAddEvent, _Event3);
  return _createClass(CartAddEvent);
}(/*#__PURE__*/_wrapNativeSuper(Event));

/**
 * Event class for cart updates
 * @extends {Event}
 */
_defineProperty(CartAddEvent, "eventName", ThemeEvents.cartUpdate);
var CartUpdateEvent = /*#__PURE__*/function (_Event4) {
  /**
   * Creates a new CartUpdateEvent
   * @param {Object} resource - The new cart object
   * @param {string} sourceId - The id of the element the action was triggered from
   * @param {Object} [data] - Additional event data
   * @param {boolean} [data.didError] - Whether the cart operation failed
   * @param {string} [data.source] - The source of the cart update
   * @param {string} [data.productId] - The id of the product card that was updated
   * @param {number} [data.itemCount] - The number of items in the cart
   * @param {string} [data.variantId] - The id of the product variant that was updated
   * @param {Record<string, string>} [data.sections] - The sections affected by the cart operation
   */
  function CartUpdateEvent(resource, sourceId, data) {
    var _this4;
    _classCallCheck(this, CartUpdateEvent);
    _this4 = _callSuper(this, CartUpdateEvent, [ThemeEvents.cartUpdate, {
      bubbles: true
    }]);
    _this4.detail = {
      resource: resource,
      sourceId: sourceId,
      data: _objectSpread({}, data)
    };
    return _this4;
  }
  _inherits(CartUpdateEvent, _Event4);
  return _createClass(CartUpdateEvent);
}(/*#__PURE__*/_wrapNativeSuper(Event));

/**
 * Event class for cart errors
 * @extends {Event}
 */
var CartErrorEvent = /*#__PURE__*/function (_Event5) {
  /**
   * Creates a new CartErrorEvent
   * @param {string} sourceId - The id of the element the action was triggered from
   * @param {string} message - A message from the server response
   * @param {Object} description - Description from the server response
   * @param {Object} errors - Errors from the server response
   */
  function CartErrorEvent(sourceId, message, description, errors) {
    var _this5;
    _classCallCheck(this, CartErrorEvent);
    _this5 = _callSuper(this, CartErrorEvent, [ThemeEvents.cartError, {
      bubbles: true
    }]);
    _this5.detail = {
      sourceId: sourceId,
      data: {
        message: message,
        errors: errors,
        description: description
      }
    };
    return _this5;
  }
  _inherits(CartErrorEvent, _Event5);
  return _createClass(CartErrorEvent);
}(/*#__PURE__*/_wrapNativeSuper(Event));

/**
 * Event class for quantity-selector updates
 * @extends {Event}
 */
var QuantitySelectorUpdateEvent = /*#__PURE__*/function (_Event6) {
  /**
   * Creates a new QuantitySelectorUpdateEvent
   * @param {number} quantity - Quantity value
   * @param {number} [cartLine] - The id of the updated cart line
   */
  function QuantitySelectorUpdateEvent(quantity, cartLine) {
    var _this6;
    _classCallCheck(this, QuantitySelectorUpdateEvent);
    _this6 = _callSuper(this, QuantitySelectorUpdateEvent, [ThemeEvents.quantitySelectorUpdate, {
      bubbles: true
    }]);
    _this6.detail = {
      quantity: quantity,
      cartLine: cartLine
    };
    return _this6;
  }
  _inherits(QuantitySelectorUpdateEvent, _Event6);
  return _createClass(QuantitySelectorUpdateEvent);
}(/*#__PURE__*/_wrapNativeSuper(Event));

/**
 * Event class for quantity-selector updates
 * @extends {Event}
 */
var DiscountUpdateEvent = /*#__PURE__*/function (_Event7) {
  /**
   * Creates a new DiscountUpdateEvent
   * @param {Object} resource - The new cart object
   * @param {string} sourceId - The id of the element the action was triggered from
   */
  function DiscountUpdateEvent(resource, sourceId) {
    var _this7;
    _classCallCheck(this, DiscountUpdateEvent);
    _this7 = _callSuper(this, DiscountUpdateEvent, [ThemeEvents.discountUpdate, {
      bubbles: true
    }]);
    _this7.detail = {
      resource: resource,
      sourceId: sourceId
    };
    return _this7;
  }
  _inherits(DiscountUpdateEvent, _Event7);
  return _createClass(DiscountUpdateEvent);
}(/*#__PURE__*/_wrapNativeSuper(Event));

/**
 * Event class for media playback starts
 * @extends {Event}
 */
var MediaStartedPlayingEvent = /*#__PURE__*/function (_Event8) {
  /**
   * Creates a new MediaStartedPlayingEvent
   * @param {HTMLElement} resource - The element containing the video that emitted the event
   */
  function MediaStartedPlayingEvent(resource) {
    var _this8;
    _classCallCheck(this, MediaStartedPlayingEvent);
    _this8 = _callSuper(this, MediaStartedPlayingEvent, [ThemeEvents.mediaStartedPlaying, {
      bubbles: true
    }]);
    _this8.detail = {
      resource: resource
    };
    return _this8;
  }
  _inherits(MediaStartedPlayingEvent, _Event8);
  return _createClass(MediaStartedPlayingEvent);
}(/*#__PURE__*/_wrapNativeSuper(Event));

/**
 * @typedef {Object} SlideshowSelectEventData
 * @property {number} index
 * @property {string | null} id
 * @property {Element} slide
 * @property {number} previousIndex
 * @property {boolean} userInitiated
 * @property {'select' | 'scroll' | 'drag'} trigger
 */

var SlideshowSelectEvent = /*#__PURE__*/function (_Event9) {
  /**  @param {SlideshowSelectEventData} data */
  function SlideshowSelectEvent(data) {
    var _this9;
    _classCallCheck(this, SlideshowSelectEvent);
    _this9 = _callSuper(this, SlideshowSelectEvent, [SlideshowSelectEvent.eventName, {
      bubbles: true
    }]);
    /** @type {SlideshowSelectEventData} */
    _defineProperty(_this9, "detail", void 0);
    _this9.detail = data;
    return _this9;
  }
  _inherits(SlideshowSelectEvent, _Event9);
  return _createClass(SlideshowSelectEvent);
}(/*#__PURE__*/_wrapNativeSuper(Event));

/**
 * Event class for zoom dialog media selection
 * @extends {Event}
 */
_defineProperty(SlideshowSelectEvent, "eventName", 'slideshow:select');
var ZoomMediaSelectedEvent = /*#__PURE__*/function (_Event0) {
  /**
   * Creates a new ZoomMediaSelectedEvent
   * @param {number} index - The index of the selected media
   */
  function ZoomMediaSelectedEvent(index) {
    var _this0;
    _classCallCheck(this, ZoomMediaSelectedEvent);
    _this0 = _callSuper(this, ZoomMediaSelectedEvent, [ThemeEvents.zoomMediaSelected, {
      bubbles: true
    }]);
    _this0.detail = {
      index: index
    };
    return _this0;
  }
  _inherits(ZoomMediaSelectedEvent, _Event0);
  return _createClass(ZoomMediaSelectedEvent);
}(/*#__PURE__*/_wrapNativeSuper(Event));

/**
 * Event class for mega menu hover being hovered over
 * @extends {Event}
 */
var MegaMenuHoverEvent = /*#__PURE__*/function (_Event1) {
  function MegaMenuHoverEvent() {
    _classCallCheck(this, MegaMenuHoverEvent);
    return _callSuper(this, MegaMenuHoverEvent, [ThemeEvents.megaMenuHover, {
      bubbles: true
    }]);
  }
  _inherits(MegaMenuHoverEvent, _Event1);
  return _createClass(MegaMenuHoverEvent);
}(/*#__PURE__*/_wrapNativeSuper(Event));

/** Event class for facet filtering updates */
var FilterUpdateEvent = /*#__PURE__*/function (_Event10) {
  /** @param {URLSearchParams} queryParams */
  function FilterUpdateEvent(queryParams) {
    var _this1;
    _classCallCheck(this, FilterUpdateEvent);
    _this1 = _callSuper(this, FilterUpdateEvent, [ThemeEvents.FilterUpdate, {
      bubbles: true
    }]);
    _this1.detail = {
      queryParams: queryParams
    };
    return _this1;
  }
  _inherits(FilterUpdateEvent, _Event10);
  return _createClass(FilterUpdateEvent, [{
    key: "shouldShowClearAll",
    value: function shouldShowClearAll() {
      return _toConsumableArray(this.detail.queryParams.entries()).filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
          key = _ref2[0];
        return key.startsWith('filter.');
      }).length > 0;
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(Event));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/scripts/product-price.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme/events */ "./src/scripts/events.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * A custom element that displays a product price.
 * This component listens for variant update events and updates the price display accordingly.
 * It handles price updates from two different sources:
 * 1. Variant picker (in quick add modal or product page)
 * 2. Swatches variant picker (in product cards)
 */
var ProductPrice = /*#__PURE__*/function (_HTMLElement) {
  function ProductPrice() {
    var _this;
    _classCallCheck(this, ProductPrice);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ProductPrice, [].concat(args));
    /**
     * Updates the price.
     * @param {VariantUpdateEvent} event - The variant update event.
     */
    _defineProperty(_this, "updatePrice", function (event) {
      if (event.detail.data.newProduct) {
        _this.dataset.productId = event.detail.data.newProduct.id;
      } else if (event.target instanceof HTMLElement && event.target.dataset.productId !== _this.dataset.productId) {
        return;
      }
      var newPrice = event.detail.data.html.querySelector('product-price [ref="priceContainer"]');
      var currentPrice = _this.querySelector('[ref="priceContainer"]');
      if (!newPrice || !currentPrice) return;
      if (currentPrice.innerHTML !== newPrice.innerHTML) {
        currentPrice.replaceWith(newPrice);
      }
    });
    return _this;
  }
  _inherits(ProductPrice, _HTMLElement);
  return _createClass(ProductPrice, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var closestSection = this.closest('.shopify-section, dialog');
      if (!closestSection) return;
      closestSection.addEventListener(_theme_events__WEBPACK_IMPORTED_MODULE_0__.ThemeEvents.variantUpdate, this.updatePrice);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var closestSection = this.closest('.shopify-section, dialog');
      if (!closestSection) return;
      closestSection.removeEventListener(_theme_events__WEBPACK_IMPORTED_MODULE_0__.ThemeEvents.variantUpdate, this.updatePrice);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
if (!customElements.get('product-price')) {
  customElements.define('product-price', ProductPrice);
}
})();

/******/ })()
;