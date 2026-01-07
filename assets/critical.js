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
/*!*********************************!*\
  !*** ./src/scripts/critical.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeclarativeShadowElement: () => (/* binding */ DeclarativeShadowElement),
/* harmony export */   OverflowList: () => (/* binding */ OverflowList),
/* harmony export */   OverflowMinimumEvent: () => (/* binding */ OverflowMinimumEvent),
/* harmony export */   ReflowEvent: () => (/* binding */ ReflowEvent),
/* harmony export */   ResizeNotifier: () => (/* binding */ ResizeNotifier),
/* harmony export */   calculateHeaderGroupHeight: () => (/* binding */ calculateHeaderGroupHeight),
/* harmony export */   updateAllHeaderCustomProperties: () => (/* binding */ updateAllHeaderCustomProperties)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
/*
 * Declarative shadow DOM is only initialized on the initial render of the page.
 * If the component is mounted after the browser finishes the initial render,
 * the shadow root needs to be manually hydrated.
 */
var DeclarativeShadowElement = /*#__PURE__*/function (_HTMLElement) {
  function DeclarativeShadowElement() {
    _classCallCheck(this, DeclarativeShadowElement);
    return _callSuper(this, DeclarativeShadowElement, arguments);
  }
  _inherits(DeclarativeShadowElement, _HTMLElement);
  return _createClass(DeclarativeShadowElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (!this.shadowRoot) {
        var template = this.querySelector(':scope > template[shadowrootmode="open"]');
        if (!(template instanceof HTMLTemplateElement)) return;
        var shadow = this.attachShadow({
          mode: 'open'
        });
        shadow.append(template.content.cloneNode(true));
      }
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));

/**
 * A custom ResizeObserver that only calls the callback when the element is resized.
 * By default the ResizeObserver callback is called when the element is first observed.
 */
var _initialized = /*#__PURE__*/new WeakMap();
var ResizeNotifier = /*#__PURE__*/function (_ResizeObserver) {
  /**
   * @param {ResizeObserverCallback} callback
   */
  function ResizeNotifier(callback) {
    var _this;
    _classCallCheck(this, ResizeNotifier);
    _this = _callSuper(this, ResizeNotifier, [function (entries) {
      if (_classPrivateFieldGet(_initialized, _assertThisInitialized(_this))) return callback(entries, _assertThisInitialized(_this));
      _classPrivateFieldSet(_initialized, _assertThisInitialized(_this), true);
    }]);
    _classPrivateFieldInitSpec(_this, _initialized, false);
    return _this;
  }
  _inherits(ResizeNotifier, _ResizeObserver);
  return _createClass(ResizeNotifier, [{
    key: "disconnect",
    value: function disconnect() {
      _classPrivateFieldSet(_initialized, this, false);
      _superPropGet(ResizeNotifier, "disconnect", this, 3)([]);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(ResizeObserver));

/**
 * Event class for overflow minimum items updates
 * @extends {Event}
 */
var OverflowMinimumEvent = /*#__PURE__*/function (_Event) {
  /**
   * Creates a new OverflowMinimumEvent
   * @param {boolean} minimumReached - Whether the minimum number of visible items has been reached
   */
  function OverflowMinimumEvent(minimumReached) {
    var _this2;
    _classCallCheck(this, OverflowMinimumEvent);
    _this2 = _callSuper(this, OverflowMinimumEvent, ['overflowMinimum', {
      bubbles: true
    }]);
    _this2.detail = {
      minimumReached: minimumReached
    };
    return _this2;
  }
  _inherits(OverflowMinimumEvent, _Event);
  return _createClass(OverflowMinimumEvent);
}(/*#__PURE__*/_wrapNativeSuper(Event));
var ReflowEvent = /*#__PURE__*/function (_Event2) {
  /**
   * @param {HTMLElement} lastVisibleElement - The element to move to the last visible position
   */
  function ReflowEvent(lastVisibleElement) {
    var _this3;
    _classCallCheck(this, ReflowEvent);
    _this3 = _callSuper(this, ReflowEvent, ['reflow', {
      bubbles: true
    }]);
    _this3.detail = {
      lastVisibleElement: lastVisibleElement
    };
    return _this3;
  }
  _inherits(ReflowEvent, _Event2);
  return _createClass(ReflowEvent);
}(/*#__PURE__*/_wrapNativeSuper(Event));

/**
 * A custom element that wraps a list of items and moves them to an overflow slot when they don't fit.
 * This component is used in the header section, it needs to be render-blocking to avoid layout shifts.
 * @attr {string | null} minimum-items When set, the element enters a 'minimum-reached' state when visible items are at or below this number.
 * @example
 * <overflow-list minimum-items="2">
 *   <!-- list items -->
 * </overflow-list>
 */
var _OverflowList_brand = /*#__PURE__*/new WeakSet();
var _scheduled = /*#__PURE__*/new WeakMap();
var _lastDimensions = /*#__PURE__*/new WeakMap();
var _handleChange = /*#__PURE__*/new WeakMap();
var _reflowItems = /*#__PURE__*/new WeakMap();
var _refs = /*#__PURE__*/new WeakMap();
var _resizeObserver = /*#__PURE__*/new WeakMap();
var _mutationObserver = /*#__PURE__*/new WeakMap();
var OverflowList = /*#__PURE__*/function (_DeclarativeShadowEle) {
  function OverflowList() {
    var _this4;
    _classCallCheck(this, OverflowList);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this4 = _callSuper(this, OverflowList, [].concat(args));
    /**
     * Initialize the element
     */
    _classPrivateMethodInitSpec(_this4, _OverflowList_brand);
    _classPrivateFieldInitSpec(_this4, _scheduled, false);
    /**
     * @type {{width: number | null, height: number | null}}
     */
    _classPrivateFieldInitSpec(_this4, _lastDimensions, {
      width: null,
      height: null
    });
    /**
     * @type {ResizeObserverCallback & MutationCallback}
     */
    _classPrivateFieldInitSpec(_this4, _handleChange, function (event) {
      if (_classPrivateFieldGet(_scheduled, _this4)) return;
      var width = null;
      var height = null;
      var isResize = false;
      var _iterator = _createForOfIteratorHelper(event.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            entry = _step$value[1];
          if (!(entry instanceof ResizeObserverEntry)) break;
          // There should only be one entry
          isResize = true;
          width = Math.round(entry.contentRect.width);
          height = Math.round(entry.contentRect.height);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (isResize) {
        if (!width || !height || width === _classPrivateFieldGet(_lastDimensions, _this4).width && height === _classPrivateFieldGet(_lastDimensions, _this4).height) {
          // Skip reflow if dimensions are 0 or the same as the last reflow
          return;
        }
        _classPrivateFieldSet(_lastDimensions, _this4, {
          width: Math.round(width),
          height: Math.round(height)
        });
      }
      _classPrivateFieldSet(_scheduled, _this4, true);
      _this4.schedule(function () {
        _classPrivateFieldGet(_reflowItems, _this4).call(_this4);
        _classPrivateFieldSet(_scheduled, _this4, false);
      });
    });
    /**
     * Reflow items based on available space within the list.
     * @param {HTMLElement} [lastVisibleElement] Optional element to place in last visible position
     */
    _classPrivateFieldInitSpec(_this4, _reflowItems, function (lastVisibleElement) {
      var _this4$firstElementCh, _this4$firstElementCh2;
      var _classPrivateFieldGet2 = _classPrivateFieldGet(_refs, _this4),
        defaultSlot = _classPrivateFieldGet2.defaultSlot,
        overflowSlot = _classPrivateFieldGet2.overflowSlot,
        moreSlot = _classPrivateFieldGet2.moreSlot,
        list = _classPrivateFieldGet2.list,
        placeholder = _classPrivateFieldGet2.placeholder;
      _classPrivateFieldGet(_resizeObserver, _this4).disconnect();
      _classPrivateFieldGet(_mutationObserver, _this4).disconnect();

      // Avoid layout shifts while reflowing the list
      var _ref = (_this4$firstElementCh = (_this4$firstElementCh2 = _this4.firstElementChild) === null || _this4$firstElementCh2 === void 0 ? void 0 : _this4$firstElementCh2.getBoundingClientRect()) !== null && _this4$firstElementCh !== void 0 ? _this4$firstElementCh : {},
        height = _ref.height;
      if (height) list.style.height = "".concat(height, "px");
      list.style.setProperty('overflow', 'hidden');

      // Move all elements to the default slot so we can check which ones overflow
      _assertClassBrand(_OverflowList_brand, _this4, _moveItemsToDefaultSlot).call(_this4);
      var elements = defaultSlot.assignedElements();

      // Make sure the "More" item and placeholder are hidden
      moreSlot.hidden = true;
      placeholder.hidden = true;

      // First, check if all the items fit
      var rootRect = list.getBoundingClientRect();

      // Store the initial dimensions for comparison later
      _classPrivateFieldSet(_lastDimensions, _this4, {
        width: Math.round(rootRect.width),
        height: Math.round(rootRect.height)
      });
      var getVisibleElements = function getVisibleElements() {
        return elements.filter(function (el) {
          return el.getBoundingClientRect().top <= rootRect.top;
        });
      };
      var visibleElements = getVisibleElements();

      // If not all items fit or we have a lastVisibleElement, let's calculate with "More" button
      if (visibleElements.length !== elements.length || lastVisibleElement) {
        // Putting the "More" item (and lastVisibleElement, if provided) at the start of the list lets us see which items will fit on the same row
        moreSlot.style.setProperty('order', '-1');
        moreSlot.hidden = false;
        moreSlot.style.setProperty('height', "".concat(height, "px"));
        if (lastVisibleElement) {
          lastVisibleElement.style.setProperty('order', '-1');
        }

        // Recalculate the visible elements
        visibleElements = getVisibleElements();

        // Reset the order
        moreSlot.style.removeProperty('order');
        if (lastVisibleElement) {
          lastVisibleElement.style.removeProperty('order');
        }

        // If we have a lastVisibleElement, ensure it's in the last visible position
        if (lastVisibleElement) {
          var visibleIndex = visibleElements.indexOf(lastVisibleElement);
          if (visibleIndex !== -1) {
            // Remove lastVisibleElement from its current position
            visibleElements.splice(visibleIndex, 1);
            // Add it to the end of visible elements
            visibleElements.push(lastVisibleElement);
          }
        }
        moreSlot.style.setProperty('height', 'auto');
      }
      var overflowingElements = elements.filter(function (element) {
        return !visibleElements.includes(element);
      });
      var _overflowingElements = _slicedToArray(overflowingElements, 1),
        firstOverflowingElement = _overflowingElements[0];
      var hasOverflow = overflowingElements.length > 0;
      var placeholderWidth = firstOverflowingElement ? firstOverflowingElement.clientWidth : 0;

      // Move the elements to the correct slot
      var _iterator2 = _createForOfIteratorHelper(elements),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;
          element.slot = overflowingElements.includes(element) ? overflowSlot.name : defaultSlot.name;
        }

        // If there are overflowing elements
        // Show more button and placeholder if needed
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      moreSlot.hidden = !hasOverflow;
      if (hasOverflow) {
        // Set the width and height of the placeholder so the list can grow if there is space
        placeholder.style.width = "".concat(placeholderWidth, "px");
        placeholder.hidden = false;
      }
      list.style.setProperty('counter-reset', "overflow-count ".concat(overflowingElements.length));
      _this4.style.setProperty('--overflow-count', "".concat(overflowingElements.length));
      list.style.removeProperty('overflow');

      // Check if the minimum-reached state should be updated
      hasOverflow && _assertClassBrand(_OverflowList_brand, _this4, _updateMinimumReached).call(_this4, visibleElements);

      // Observe the list for changes in size
      _classPrivateFieldGet(_resizeObserver, _this4).observe(_this4);
      _classPrivateFieldGet(_mutationObserver, _this4).observe(_this4, {
        childList: true
      });
    });
    /**
     * @type {{
     *   defaultSlot: HTMLSlotElement;
     *   overflowSlot: HTMLSlotElement;
     *   moreSlot: HTMLSlotElement;
     *   overflow: HTMLElement;
     *   list: HTMLUListElement;
     *   placeholder: HTMLLIElement;
     * }}
     */
    _classPrivateFieldInitSpec(_this4, _refs, void 0);
    /**
     * @type {ResizeObserver}
     */
    _classPrivateFieldInitSpec(_this4, _resizeObserver, new ResizeNotifier(_classPrivateFieldGet(_handleChange, _this4)));
    /**
     * @type {MutationObserver}
     */
    _classPrivateFieldInitSpec(_this4, _mutationObserver, new MutationObserver(_classPrivateFieldGet(_handleChange, _this4)));
    return _this4;
  }
  _inherits(OverflowList, _DeclarativeShadowEle);
  return _createClass(OverflowList, [{
    key: "attributeChangedCallback",
    value:
    /**
     * @param {string} name
     * @param {string} oldValue
     * @param {string} newValue
     */
    function attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'disabled') {
        if (newValue === 'true') {
          _assertClassBrand(_OverflowList_brand, this, _reset).call(this);
        } else {
          _classPrivateFieldGet(_reflowItems, this).call(this);
        }
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this5 = this;
      _superPropGet(OverflowList, "connectedCallback", this, 3)([]);
      if (this.hasAttribute('defer')) {
        var deferredReflow = function deferredReflow() {
          // Remove attribute first to change layout before calculating the actual size
          _this5.removeAttribute('defer');
          _assertClassBrand(_OverflowList_brand, _this5, _initialize).call(_this5);
        };
        var schedule = this.schedule;
        var requestIdleCallback = typeof window.requestIdleCallback === 'function' ? window.requestIdleCallback : setTimeout;
        requestIdleCallback(function () {
          return schedule(deferredReflow);
        });
      } else if (this.shadowRoot) {
        _assertClassBrand(_OverflowList_brand, this, _initialize).call(this);
      } else {
        // Not all element children has been parsed yet, try again in the next tick
        // <overflow-list> is a special case as critical.js can execute before DOMContentLoaded
        setTimeout(function () {
          _assertClassBrand(_OverflowList_brand, _this5, _initialize).call(_this5);
        }, 0);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _classPrivateFieldGet(_resizeObserver, this).disconnect();
    }
  }, {
    key: "schedule",
    get: function get() {
      var _Theme;
      return typeof ((_Theme = Theme) === null || _Theme === void 0 || (_Theme = _Theme.utilities) === null || _Theme === void 0 || (_Theme = _Theme.scheduler) === null || _Theme === void 0 ? void 0 : _Theme.schedule) === 'function' ? Theme.utilities.scheduler.schedule : /** @param {FrameRequestCallback} callback */function (callback) {
        return requestAnimationFrame(function () {
          return setTimeout(callback, 0);
        });
      };
    }
  }, {
    key: "minimumItems",
    get:
    /**
     * Get the minimum number of items before changing the minimum-reached state
     * @returns {number | null}
     */
    function get() {
      var value = this.getAttribute('minimum-items');
      return value ? parseInt(value, 10) : null;
    }
  }, {
    key: "overflowSlot",
    get: function get() {
      var _classPrivateFieldGet3 = _classPrivateFieldGet(_refs, this),
        overflowSlot = _classPrivateFieldGet3.overflowSlot;
      return overflowSlot;
    }
  }, {
    key: "defaultSlot",
    get: function get() {
      var _classPrivateFieldGet4 = _classPrivateFieldGet(_refs, this),
        defaultSlot = _classPrivateFieldGet4.defaultSlot;
      return defaultSlot;
    }
  }, {
    key: "showAll",
    value:
    /**
     * Show all items in the list.
     */
    function showAll() {
      var _classPrivateFieldGet5 = _classPrivateFieldGet(_refs, this),
        placeholder = _classPrivateFieldGet5.placeholder;
      placeholder.style.setProperty('width', '0');
      placeholder.style.setProperty('display', 'none');
      this.setAttribute('disabled', 'true');
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['disabled', 'minimum-items'];
    }
  }]);
}(DeclarativeShadowElement);
function _initialize() {
  var _this6 = this;
  var shadowRoot = this.shadowRoot;
  if (!shadowRoot) throw new Error('Missing shadow root');
  var defaultSlot = shadowRoot.querySelector('slot:not([name])');
  var overflowSlot = shadowRoot.querySelector('slot[name="overflow"]');
  var moreSlot = shadowRoot.querySelector('slot[name="more"]');
  var overflow = shadowRoot.querySelector('[part="overflow"]');
  var list = shadowRoot.querySelector('[part="list"]');
  var placeholder = shadowRoot.querySelector('[part="placeholder"]');
  if (!(defaultSlot instanceof HTMLSlotElement) || !(overflowSlot instanceof HTMLSlotElement) || !(moreSlot instanceof HTMLSlotElement) || !(overflow instanceof HTMLElement) || !(list instanceof HTMLUListElement) || !(placeholder instanceof HTMLLIElement)) {
    throw new Error('Invalid element types in <OverflowList />');
  }
  _classPrivateFieldSet(_refs, this, {
    defaultSlot: defaultSlot,
    overflowSlot: overflowSlot,
    moreSlot: moreSlot,
    overflow: overflow,
    list: list,
    placeholder: placeholder
  });

  // Add event listener for reflow requests
  this.addEventListener('reflow', /** @param {ReflowEvent} event */function (event) {
    _classPrivateFieldGet(_reflowItems, _this6).call(_this6, event.detail.lastVisibleElement);
  });
  _classPrivateFieldGet(_reflowItems, this).call(this);
}
/**
 * Move all items to the default slot.
 */
function _moveItemsToDefaultSlot() {
  var _classPrivateFieldGet6 = _classPrivateFieldGet(_refs, this),
    defaultSlot = _classPrivateFieldGet6.defaultSlot,
    overflowSlot = _classPrivateFieldGet6.overflowSlot;
  var _iterator3 = _createForOfIteratorHelper(overflowSlot.assignedElements()),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var element = _step3.value;
      element.slot = defaultSlot.name;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}
/**
 * Reset the list to its initial state and disconnect the observers.
 */
function _reset() {
  var _classPrivateFieldGet7 = _classPrivateFieldGet(_refs, this),
    list = _classPrivateFieldGet7.list;
  _classPrivateFieldGet(_mutationObserver, this).disconnect();
  _classPrivateFieldGet(_resizeObserver, this).disconnect();
  _assertClassBrand(_OverflowList_brand, this, _moveItemsToDefaultSlot).call(this);
  list.style.removeProperty('height');
  this.style.setProperty('--overflow-count', '0');
}
/**
 * Sets the minimum-reached attribute and dispatches a custom event based on visible elements count
 * @param {Element[]} visibleElements - The currently visible elements
 */
function _updateMinimumReached(visibleElements) {
  if (this.minimumItems !== null) {
    var minimumReached = visibleElements.length < this.minimumItems;
    if (minimumReached) {
      this.setAttribute('minimum-reached', '');
    } else {
      this.removeAttribute('minimum-reached');
    }
    this.dispatchEvent(new OverflowMinimumEvent(minimumReached));
  }
}
if (!customElements.get('overflow-list')) {
  customElements.define('overflow-list', OverflowList);
}

// Function to calculate total height of header group children
function calculateHeaderGroupHeight() {
  var _header$parentElement;
  var header = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('#header-component');
  var headerGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.querySelector('#header-group');
  if (!headerGroup) return 0;
  var totalHeight = 0;
  var children = headerGroup.children;
  for (var i = 0; i < children.length; i++) {
    var element = children[i];
    if (element === header || !(element instanceof HTMLElement)) continue;
    totalHeight += element.offsetHeight;
  }

  // If the header is transparent and has a sibling section, add the height of the header to the total height
  if (header instanceof HTMLElement && header.hasAttribute('transparent') && (_header$parentElement = header.parentElement) !== null && _header$parentElement !== void 0 && _header$parentElement.nextElementSibling) {
    return totalHeight + header.offsetHeight;
  }
  return totalHeight;
}

/**
 * Initialize and maintain header height CSS variables.
 * This is critical for preventing layout shifts during page load.
 * There is a `ResizeObserver` and `MutationObserver` that kicks in post hydration in header.js
 * Note: header-group uses display: contents, so we must observe all children.
 */
function updateHeaderHeights() {
  var header = document.querySelector('header-component');

  // Early exit if no header - nothing to do
  if (!(header instanceof HTMLElement)) return;

  // Calculate initial height(s
  var headerHeight = header.offsetHeight;
  var headerGroupHeight = calculateHeaderGroupHeight(header);
  document.body.style.setProperty('--header-height', "".concat(headerHeight, "px"));
  document.body.style.setProperty('--header-group-height', "".concat(headerGroupHeight, "px"));
}

/**
 * Updates CSS custom properties for transparent header offset calculation
 * Avoids expensive :has() selectors
 */
function updateTransparentHeaderOffset() {
  var _hasHeaderSection$nex;
  var header = document.querySelector('#header-component');
  var headerGroup = document.querySelector('#header-group');
  var hasHeaderSection = headerGroup === null || headerGroup === void 0 ? void 0 : headerGroup.querySelector('.header-section');
  if (!hasHeaderSection || !(header !== null && header !== void 0 && header.hasAttribute('transparent'))) {
    document.body.style.setProperty('--transparent-header-offset-boolean', '0');
    return;
  }
  var hasImmediateSection = (_hasHeaderSection$nex = hasHeaderSection.nextElementSibling) === null || _hasHeaderSection$nex === void 0 ? void 0 : _hasHeaderSection$nex.classList.contains('shopify-section');
  var shouldApplyOffset = !hasImmediateSection ? '1' : '0';
  document.body.style.setProperty('--transparent-header-offset-boolean', shouldApplyOffset);
}
function updateAllHeaderCustomProperties() {
  updateHeaderHeights();
  updateTransparentHeaderOffset();
}

// Run both functions on page load
updateAllHeaderCustomProperties();
/******/ })()
;