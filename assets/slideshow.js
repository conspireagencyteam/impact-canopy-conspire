/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/component.js":
/*!**********************************!*\
  !*** ./src/scripts/component.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _theme_critical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme/critical */ "./src/scripts/critical.js");
/* harmony import */ var _theme_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme/utilities */ "./src/scripts/utilities.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }



/**
 * @typedef {Record<string, Element | Element[] | undefined>} Refs
 */

/**
 * @template {Refs} T
 * @typedef {T & Refs} RefsType
 */

/**
 * Base class that powers our custom web components.
 *
 * Manages references to child elements with `ref` attributes and sets up mutation observers to keep
 * the refs updated when the DOM changes. Also handles declarative event listeners using.
 *
 * @template {Refs} [T=Refs]
 * @extends {DeclarativeShadowElement}
 */
var _Component_brand = /*#__PURE__*/new WeakSet();
var _mutationObserver = /*#__PURE__*/new WeakMap();
var _isDescendant = /*#__PURE__*/new WeakMap();
var Component = /*#__PURE__*/function (_DeclarativeShadowEle) {
  function Component() {
    var _this;
    _classCallCheck(this, Component);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Component, [].concat(args));
    /**
     * Updates the `refs` object by querying all descendant elements with `ref` attributes and storing references to them.
     *
     * This method is called to keep the `refs` object in sync with the DOM.
     */
    _classPrivateMethodInitSpec(_this, _Component_brand);
    /**
     * An object holding references to child elements with `ref` attributes.
     *
     * @type {RefsType<T>}
     */
    _defineProperty(_this, "refs", /** @type {RefsType<T>} */{});
    /**
     * An array of required refs. If a ref is not found, an error will be thrown.
     *
     * @type {string[] | undefined}
     */
    _defineProperty(_this, "requiredRefs", void 0);
    /**
     * MutationObserver instance to observe changes in the component's DOM subtree and update refs accordingly.
     *
     * @type {MutationObserver}
     */
    _classPrivateFieldInitSpec(_this, _mutationObserver, new MutationObserver(function (mutations) {
      if (mutations.some(function (m) {
        return m.type === 'attributes' && _classPrivateFieldGet(_isDescendant, _this).call(_this, m.target) || m.type === 'childList' && [].concat(_toConsumableArray(m.addedNodes), _toConsumableArray(m.removedNodes)).some(_classPrivateFieldGet(_isDescendant, _this));
      })) {
        _assertClassBrand(_Component_brand, _this, _updateRefs).call(_this);
      }
    }));
    /**
     * Checks if a given node is a descendant of this component.
     *
     * @param {Node} node - The node to check.
     * @returns {boolean} True if the node is a descendant of this component.
     */
    _classPrivateFieldInitSpec(_this, _isDescendant, function (node) {
      return getClosestComponent(getAncestor(node)) === _this;
    });
    return _this;
  }
  _inherits(Component, _DeclarativeShadowEle);
  return _createClass(Component, [{
    key: "roots",
    get:
    /**
     * Gets the root node of the component, which is either its shadow root or the component itself.
     *
     * @returns {(ShadowRoot | Component<T>)[]} The root nodes.
     */
    function get() {
      return this.shadowRoot ? [this, this.shadowRoot] : [this];
    }

    /**
     * Called when the element is connected to the document's DOM.
     *
     * Initializes event listeners and refs.
     */
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;
      _superPropGet(Component, "connectedCallback", this, 3)([]);
      registerEventListeners();
      _assertClassBrand(_Component_brand, this, _updateRefs).call(this);
      (0,_theme_utilities__WEBPACK_IMPORTED_MODULE_1__.requestIdleCallback)(function () {
        var _iterator = _createForOfIteratorHelper(_this2.roots),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var root = _step.value;
            _classPrivateFieldGet(_mutationObserver, _this2).observe(root, {
              childList: true,
              subtree: true,
              attributes: true,
              attributeFilter: ['ref'],
              attributeOldValue: true
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }

    /**
     * Called when the element is re-rendered by the Section Rendering API.
     */
  }, {
    key: "updatedCallback",
    value: function updatedCallback() {
      _classPrivateFieldGet(_mutationObserver, this).takeRecords();
      _assertClassBrand(_Component_brand, this, _updateRefs).call(this);
    }

    /**
     * Called when the element is disconnected from the document's DOM.
     *
     * Disconnects the mutation observer.
     */
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _classPrivateFieldGet(_mutationObserver, this).disconnect();
    }
  }]);
}(_theme_critical__WEBPACK_IMPORTED_MODULE_0__.DeclarativeShadowElement);

/**
 * Get the ancestor of a given node.
 *
 * @param {Node} node - The node to get the ancestor of.
 * @returns {Node | null} The ancestor of the node or null if none is found.
 */
function _updateRefs() {
  var _this3 = this,
    _this$requiredRefs;
  var refs = /** @type any */{};
  var elements = this.roots.reduce(function (acc, root) {
    var _iterator2 = _createForOfIteratorHelper(root.querySelectorAll('[ref]')),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var element = _step2.value;
        if (!_classPrivateFieldGet(_isDescendant, _this3).call(_this3, element)) continue;
        acc.add(element);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return acc;
  }, /** @type {Set<Element>} */new Set());
  var _iterator3 = _createForOfIteratorHelper(elements),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _ref3$getAttribute;
      var _ref3 = _step3.value;
      var refName = (_ref3$getAttribute = _ref3.getAttribute('ref')) !== null && _ref3$getAttribute !== void 0 ? _ref3$getAttribute : '';
      var isArray = refName.endsWith('[]');
      var path = isArray ? refName.slice(0, -2) : refName;
      if (isArray) {
        var array = Array.isArray(refs[path]) ? refs[path] : [];
        array.push(_ref3);
        refs[path] = array;
      } else {
        refs[path] = _ref3;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  if ((_this$requiredRefs = this.requiredRefs) !== null && _this$requiredRefs !== void 0 && _this$requiredRefs.length) {
    var _iterator4 = _createForOfIteratorHelper(this.requiredRefs),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var ref = _step4.value;
        if (!(ref in refs)) {
          throw new MissingRefError(ref, this);
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
  this.refs = /** @type {RefsType<T>} */refs;
}
function getAncestor(node) {
  if (node.parentNode) return node.parentNode;
  var root = node.getRootNode();
  if (root instanceof ShadowRoot) return root.host;
  return null;
}

/**
 * Recursively finds the closest ancestor that is an instance of `Component`.
 *
 * @param {Node | null} node - The starting node to search from.
 * @returns {HTMLElement | null} The closest ancestor `Component` instance or null if none is found.
 */
function getClosestComponent(node) {
  if (!node) return null;
  if (node instanceof Component) return node;
  if (node instanceof HTMLElement && node.tagName.toLowerCase().endsWith('-component')) return node;
  var ancestor = getAncestor(node);
  if (ancestor) return getClosestComponent(ancestor);
  return null;
}

/**
 * Initializes the event listeners for custom event handling.
 *
 * Sets up event listeners for specified events and delegates the handling of those events
 * to methods defined on the closest `Component` instance, based on custom attributes.
 */
var initialized = false;
function registerEventListeners() {
  if (initialized) return;
  initialized = true;
  var events = ['click', 'change', 'select', 'focus', 'blur', 'submit', 'input', 'keydown', 'keyup', 'toggle'];
  var shouldBubble = ['focus', 'blur'];
  var expensiveEvents = ['pointerenter', 'pointerleave'];
  var _loop = function _loop() {
    var eventName = _arr[_i];
    var attribute = "on:".concat(eventName);
    document.addEventListener(eventName, function (event) {
      var _element$getAttribute;
      var element = getElement(event);
      if (!element) return;
      var proxiedEvent = event.target !== element ? new Proxy(event, {
        get: function get(target, property) {
          if (property === 'target') return element;
          var value = Reflect.get(target, property);
          if (typeof value === 'function') {
            return value.bind(target);
          }
          return value;
        }
      }) : event;
      var value = (_element$getAttribute = element.getAttribute(attribute)) !== null && _element$getAttribute !== void 0 ? _element$getAttribute : '';
      var _value$split = value.split('/'),
        _value$split2 = _slicedToArray(_value$split, 2),
        selector = _value$split2[0],
        method = _value$split2[1];
      // Extract the last segment of the attribute value delimited by `?` or `/`
      // Do not use lookback for Safari 16.0 compatibility
      var matches = value.match(/([\/\?][^\/\?]+)([\/\?][^\/\?]+)$/);
      var data = matches ? matches[2] : null;
      var instance = selector ? selector.startsWith('#') ? document.querySelector(selector) : element.closest(selector) : getClosestComponent(element);
      if (!(instance instanceof Component) || !method) return;
      method = method.replace(/\?.*/, '');
      var callback = /** @type {any} */instance[method];
      if (typeof callback === 'function') {
        try {
          /** @type {(Event | Data)[]} */
          var args = [proxiedEvent];
          if (data) args.unshift(parseData(data));
          callback.call.apply(callback, [instance].concat(args));
        } catch (error) {
          console.error(error);
        }
      }
    }, {
      capture: true
    });
  };
  for (var _i = 0, _arr = [].concat(events, expensiveEvents); _i < _arr.length; _i++) {
    _loop();
  }

  /** @param {Event} event */
  function getElement(event) {
    var _event$composedPath$, _event$composedPath;
    var target = (_event$composedPath$ = (_event$composedPath = event.composedPath) === null || _event$composedPath === void 0 ? void 0 : _event$composedPath.call(event)[0]) !== null && _event$composedPath$ !== void 0 ? _event$composedPath$ : event.target;
    if (!(target instanceof Element)) return;
    if (target.hasAttribute("on:".concat(event.type))) {
      return target;
    }
    if (expensiveEvents.includes(event.type)) {
      return null;
    }
    return event.bubbles || shouldBubble.includes(event.type) ? target.closest("[on\\:".concat(event.type, "]")) : null;
  }
}

/**
 * Parses a string to extract data based on a delimiter.
 *
 * @param {string} str - The string to parse.
 * @returns {Object|Array<string|number>|string} The parsed data.
 */
function parseData(str) {
  var delimiter = str[0];
  var data = str.slice(1);
  return delimiter === '?' ? Object.fromEntries(Array.from(new URLSearchParams(data).entries()).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return [key, parseValue(value)];
  })) : parseValue(data);
}

/**
 * @typedef {Object|Array<string|number>|string} Data
 */

/**
 * Parses a string value to its appropriate type.
 *
 * @param {string} str - The string to parse.
 * @returns {Data} The parsed value.
 */
function parseValue(str) {
  if (str === 'true') return true;
  if (str === 'false') return false;
  var maybeNumber = Number(str);
  if (!isNaN(maybeNumber) && str.trim() !== '') return maybeNumber;
  return str;
}

/**
 * Throws a formatted error when a required ref is not found in the component.
 */
var MissingRefError = /*#__PURE__*/function (_Error) {
  /**
   * @param {string} ref
   * @param {Component} component
   */
  function MissingRefError(ref, component) {
    _classCallCheck(this, MissingRefError);
    return _callSuper(this, MissingRefError, ["Required ref \"".concat(ref, "\" not found in component ").concat(component.tagName.toLowerCase())]);
  }
  _inherits(MissingRefError, _Error);
  return _createClass(MissingRefError);
}(/*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),

/***/ "./src/scripts/critical.js":
/*!*********************************!*\
  !*** ./src/scripts/critical.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

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

/***/ }),

/***/ "./src/scripts/scrolling.js":
/*!**********************************!*\
  !*** ./src/scripts/scrolling.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scroller: () => (/* binding */ Scroller),
/* harmony export */   scrollIntoView: () => (/* binding */ scrollIntoView)
/* harmony export */ });
/* harmony import */ var _theme_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme/utilities */ "./src/scripts/utilities.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateGetter(s, r, a) { return a(_assertClassBrand(s, r)); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }


/**
 * Timeout duration (in milliseconds) after which scroll is considered to have ended.
 * @constant {number}
 */
var SCROLL_END_TIMEOUT = 50;

/**
 * Class representing a Scroller that handles smooth scrolling and detects scroll end events.
 *
 * @class
 */
var _promise = /*#__PURE__*/new WeakMap();
var _resolve = /*#__PURE__*/new WeakMap();
var _throttledCallback = /*#__PURE__*/new WeakMap();
var _endCallback = /*#__PURE__*/new WeakMap();
var _onScrollInit = /*#__PURE__*/new WeakMap();
var _onScrollEnd = /*#__PURE__*/new WeakMap();
var _userEvent = /*#__PURE__*/new WeakMap();
var _ignore = /*#__PURE__*/new WeakMap();
var _isScrolling = /*#__PURE__*/new WeakMap();
var _Scroller_brand = /*#__PURE__*/new WeakSet();
var _reset = /*#__PURE__*/new WeakMap();
var _handleScroll = /*#__PURE__*/new WeakMap();
var _handleScrollEnd = /*#__PURE__*/new WeakMap();
var Scroller = /*#__PURE__*/function () {
  /**
   * Creates a Scroller instance.
   *
   * @param {HTMLElement} element - The element to apply scrolling to.
   * @param {Object} options - The options for the scroller.
   * @param {() => void} options.onScroll - Function to call while scrolling and after scrolling ends.
   * @param {() => void} [options.onScrollStart] - Function to call when scrolling starts.
   * @param {() => void} [options.onScrollEnd] - Function to call after scrolling ends.
   */
  function Scroller(element, _options) {
    var _this2 = this;
    _classCallCheck(this, Scroller);
    /**
     * Scrolls the element.
     * @param {Object} options - The options for the scroll.
     * @param {'scrollTo' | 'scrollBy'} options.method - The method to use to scroll.
     * @param {number} options.value - The value to scroll to.
     * @param {boolean} [options.instant] - Whether to scroll instantly.
     */
    _classPrivateMethodInitSpec(this, _Scroller_brand);
    /**
     * The element to apply scrolling to.
     * @type {HTMLElement}
     */
    _defineProperty(this, "element", void 0);
    /**
     * Promise that resolves when scrolling ends.
     * @type {Promise<void>|undefined}
     */
    _classPrivateFieldInitSpec(this, _promise, undefined);
    /**
     * Function to resolve the scroll end promise.
     * @type {Function|undefined}
     */
    _classPrivateFieldInitSpec(this, _resolve, undefined);
    /**
     * Callback function to call while user is scrolling, throttled every 50ms.
     * @type {() => void}
     */
    _classPrivateFieldInitSpec(this, _throttledCallback, void 0);
    /**
     * Callback function invoked after user scroll ends.
     * @type {() => void}
     */
    _classPrivateFieldInitSpec(this, _endCallback, void 0);
    /**
     * Callback function invoked when scrolling starts, regardless of whether it was triggered by a user event.
     * @type {(() => void) | undefined}
     */
    _classPrivateFieldInitSpec(this, _onScrollInit, void 0);
    /**
     * Callback function invoked when scrolling ends, regardless of whether it was triggered by a user event.
     * @type {(() => void) | undefined}
     */
    _classPrivateFieldInitSpec(this, _onScrollEnd, void 0);
    /**
     * Whether the scroll was triggered by a user event.
     * @type {boolean}
     */
    _classPrivateFieldInitSpec(this, _userEvent, true);
    /**
     * Whether the next scroll event should be ignored.
     * @type {boolean}
     */
    _classPrivateFieldInitSpec(this, _ignore, false);
    /**
     * Whether the element is currently scrolling.
     * @type {boolean}
     */
    _classPrivateFieldInitSpec(this, _isScrolling, false);
    _classPrivateFieldInitSpec(this, _reset, function () {
      var _classPrivateFieldGet2;
      _classPrivateFieldGet(_handleScrollEnd, _this2).cancel();
      (_classPrivateFieldGet2 = _classPrivateFieldGet(_resolve, _this2)) === null || _classPrivateFieldGet2 === void 0 || _classPrivateFieldGet2.call(_this2);
      _classPrivateFieldSet(_promise, _this2, undefined);
      _classPrivateFieldSet(_resolve, _this2, undefined);
      _classPrivateFieldSet(_userEvent, _this2, true);
      _classPrivateFieldSet(_ignore, _this2, false);
    });
    /**
     * Event handler for the 'scroll' event.
     */
    _classPrivateFieldInitSpec(this, _handleScroll, function () {
      if (!_classPrivateFieldGet(_isScrolling, _this2)) {
        var _classPrivateFieldGet3;
        (_classPrivateFieldGet3 = _classPrivateFieldGet(_onScrollInit, _this2)) === null || _classPrivateFieldGet3 === void 0 || _classPrivateFieldGet3.call(_this2);
        _classPrivateFieldSet(_isScrolling, _this2, true);
      }
      if (_classPrivateFieldGet(_ignore, _this2)) {
        _classPrivateFieldGet(_reset, _this2).call(_this2);
        _classPrivateFieldGet(_handleScrollEnd, _this2).call(_this2, false);
        return;
      }
      var userEvent = _classPrivateFieldGet(_userEvent, _this2);
      _assertClassBrand(_Scroller_brand, _this2, _setup).call(_this2);
      if (userEvent) _classPrivateFieldGet(_throttledCallback, _this2).call(_this2);
      _classPrivateFieldGet(_handleScrollEnd, _this2).call(_this2, userEvent);
    });
    /**
     * Handler called when scrolling has ended.
     */
    _classPrivateFieldInitSpec(this, _handleScrollEnd, (0,_theme_utilities__WEBPACK_IMPORTED_MODULE_0__.debounce)(
    /**
     * @param {boolean} userEvent
     */
    function (userEvent) {
      var _classPrivateFieldGet4;
      (_classPrivateFieldGet4 = _classPrivateFieldGet(_resolve, _this2)) === null || _classPrivateFieldGet4 === void 0 || _classPrivateFieldGet4.call(_this2);
      if (userEvent) _classPrivateFieldGet(_endCallback, _this2).call(_this2);
      _classPrivateFieldGet(_reset, _this2).call(_this2);
      if (_classPrivateFieldGet(_isScrolling, _this2)) {
        var _classPrivateFieldGet5;
        (_classPrivateFieldGet5 = _classPrivateFieldGet(_onScrollEnd, _this2)) === null || _classPrivateFieldGet5 === void 0 || _classPrivateFieldGet5.call(_this2);
        _classPrivateFieldSet(_isScrolling, _this2, false);
      }
    }, SCROLL_END_TIMEOUT));
    _classPrivateFieldSet(_throttledCallback, this, (0,_theme_utilities__WEBPACK_IMPORTED_MODULE_0__.throttle)(_options.onScroll, SCROLL_END_TIMEOUT));
    _classPrivateFieldSet(_endCallback, this, _options.onScroll);
    _classPrivateFieldSet(_onScrollInit, this, _options.onScrollStart);
    _classPrivateFieldSet(_onScrollEnd, this, _options.onScrollEnd);
    this.element = element;
    this.element.addEventListener('scroll', _classPrivateFieldGet(_handleScroll, this));
  }

  /**
   * Scrolls to a specific position or element.
   * @param {number | HTMLElement} input - The position in pixels or an element to scroll to.
   * @param {Object} [options] - Options for the scroll.
   * @param {boolean} [options.instant] - Whether to scroll instantly.
   */
  return _createClass(Scroller, [{
    key: "to",
    value: (function () {
      var _to = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(input, options) {
        var value, paddingStart, currentPosition, willChange;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (input instanceof HTMLElement) {
                paddingStart = calculatePaddingStart(this.element, this.axis);
                value = input["offset".concat(_classPrivateGetter(_Scroller_brand, this, _get_edge))] - paddingStart;
              } else {
                value = input;
              }
              currentPosition = this.element["scroll".concat(_classPrivateGetter(_Scroller_brand, this, _get_edge))];
              willChange = currentPosition !== value;
              if (willChange) {
                _assertClassBrand(_Scroller_brand, this, _scroll).call(this, _objectSpread(_objectSpread({}, options), {}, {
                  method: 'scrollTo',
                  value: value
                }));
              } else if (_classPrivateFieldGet(_isScrolling, this)) {
                // If the scroll has started but then it's released in the same original position,
                // the scroll event will not fire, so we need to manually trigger the scroll end.
                _classPrivateFieldGet(_handleScrollEnd, this).call(this, false);
              }
            case 1:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function to(_x, _x2) {
        return _to.apply(this, arguments);
      }
      return to;
    }()
    /**
     * Scrolls by a certain number of pixels.
     * @param {number} value - The number of pixels to scroll by.
     * @param {Object} [options] - Options for the scroll.
     * @param {boolean} [options.instant] - Whether to scroll instantly.
     */
    )
  }, {
    key: "by",
    value: function by(value, options) {
      _assertClassBrand(_Scroller_brand, this, _scroll).call(this, _objectSpread(_objectSpread({}, options), {}, {
        method: 'scrollBy',
        value: value
      }));
    }
  }, {
    key: "axis",
    get:
    /**
     * Gets the scrolling axis ('x' or 'y') based on the element's dimensions.
     * @type {'x' | 'y'}
     * @readonly
     */
    function get() {
      return getScrollAxis(this.element);
    }

    /**
     * Promise that resolves when scrolling ends.
     * @type {Promise<void>}
     * @readonly
     */
  }, {
    key: "finished",
    get: function get() {
      var _classPrivateFieldGet6;
      return (_classPrivateFieldGet6 = _classPrivateFieldGet(_promise, this)) !== null && _classPrivateFieldGet6 !== void 0 ? _classPrivateFieldGet6 : Promise.resolve();
    }

    /**
     * Gets the scroll edge property ('Left' or 'Top') based on the axis.
     * @returns {'Left' | 'Top'}
     */
  }, {
    key: "snap",
    set:
    /**
     * Sets the scroll snap behavior of the element.
     * @param {boolean} value - Whether to enable scroll snap.
     */
    function set(value) {
      // Changing the snap behavior will trigger a scroll event, which we should ignore
      _classPrivateFieldSet(_ignore, this, true);
      this.element.style.setProperty('scroll-snap-type', value ? "".concat(this.axis, " mandatory") : 'none');
    }

    /**
     * Destroys the Scroller instance.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.element.removeEventListener('scroll', _classPrivateFieldGet(_handleScroll, this));
    }
  }]);
}();

/**
 * Gets the scroll axis ('x' or 'y') based on the element's dimensions.
 * @param {HTMLElement} el - The element to get the scroll axis of.
 * @returns {'x' | 'y'}
 */
function _scroll(options) {
  var method = options.method,
    value = options.value,
    _options$instant = options.instant,
    instant = _options$instant === void 0 ? (0,_theme_utilities__WEBPACK_IMPORTED_MODULE_0__.prefersReducedMotion)() : _options$instant;
  _classPrivateFieldGet(_reset, this).call(this);
  _classPrivateFieldSet(_ignore, this, instant);
  _classPrivateFieldSet(_userEvent, this, false);

  // Check if we need to scroll at all
  var currentPosition = this.element["scroll".concat(_classPrivateGetter(_Scroller_brand, this, _get_edge))];
  var targetPosition = method === 'scrollBy' ? currentPosition + value : value;
  var scrollDistance = Math.abs(targetPosition - currentPosition);

  // If the distance is negligible, don't scroll and resolve immediately
  if (scrollDistance < 1) {
    return Promise.resolve();
  }
  if (!instant) _assertClassBrand(_Scroller_brand, this, _setup).call(this);
  this.element[method](_defineProperty(_defineProperty({}, _classPrivateGetter(_Scroller_brand, this, _get_edge).toLowerCase(), value), "behavior", instant ? 'instant' : 'smooth'));
}
function _get_edge(_this) {
  return _this.axis === 'x' ? 'Left' : 'Top';
}
/**
 * Sets up the scroll end promise if not already set.
 */
function _setup() {
  var _this5 = this;
  if (_classPrivateFieldGet(_promise, this)) {
    return;
  }
  _classPrivateFieldSet(_promise, this, new Promise(function (resolve) {
    return _classPrivateFieldSet(_resolve, _this5, resolve);
  }));
}
function getScrollAxis(el) {
  if (el.scrollHeight > el.clientHeight && el.scrollWidth === el.clientWidth) {
    return 'y';
  }
  if (el.scrollWidth > el.clientWidth && el.scrollHeight === el.clientHeight) {
    return 'x';
  }
  return el.scrollWidth > el.scrollHeight ? 'x' : 'y';
}

/**
 * Calculates the padding-start around an element to update the scroll offset.
 * @param {HTMLElement} element - The element to calculate the padding-start of.
 * @param {'x' | 'y'} axis - The axis to calculate the padding-start of.
 * @returns {number} The padding-start in pixels.
 */
function calculatePaddingStart(element, axis) {
  var computedStyle = getComputedStyle(element);
  var value = axis === 'x' ? computedStyle.paddingInlineStart : computedStyle.paddingBlockStart;
  return parseFloat(value);
}

/**
 * Scrolls an element into view.
 * @param {Element} element - The element to scroll into view.
 * @param {Object} options - The options for the scroll.
 * @param {ScrollBehavior} [options.behavior='smooth'] - The behavior of the scroll.
 * @param {'start' | 'center' | 'end'} [options.block='start'] - The block alignment of the element.
 * @param {'start' | 'center' | 'end'} [options.inline='start'] - The inline alignment of the element.
 * @param {Element} [options.ancestor] - The ancestor element to scroll into view.
 */
function scrollIntoView(element) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    ancestor = _ref.ancestor,
    _ref$behavior = _ref.behavior,
    behavior = _ref$behavior === void 0 ? 'smooth' : _ref$behavior,
    _ref$block = _ref.block,
    block = _ref$block === void 0 ? 'start' : _ref$block,
    _ref$inline = _ref.inline,
    inline = _ref$inline === void 0 ? 'start' : _ref$inline;
  if (!ancestor) {
    return element.scrollIntoView({
      behavior: behavior,
      block: block,
      inline: inline
    });
  }
  var elemRect = element.getBoundingClientRect();
  var ancestorRect = ancestor.getBoundingClientRect();

  /**
   * Calculates the scroll offset for an element.
   * @param {'start' | 'center' | 'end'} alignment - The alignment of the element.
   * @param {number} ancestorStart - The start of the ancestor element.
   * @param {number} ancestorLength - The length of the ancestor element.
   * @param {number} elemStart - The start of the element.
   * @param {number} elemLength - The length of the element.
   * @param {number} currentScroll - The current scroll position.
   * @returns {number} The scroll offset.
   */
  var calculateScrollOffset = function calculateScrollOffset(alignment, ancestorStart, ancestorLength, elemStart, elemLength, currentScroll) {
    switch (alignment) {
      case 'start':
        return currentScroll + elemStart - ancestorStart;
      case 'center':
        return currentScroll + elemStart - ancestorStart - ancestorLength / 2 + elemLength / 2;
      case 'end':
        return currentScroll + elemStart - ancestorStart - ancestorLength + elemLength;
      default:
        return currentScroll;
    }
  };
  var scrollTop = ancestor.scrollHeight > ancestor.clientHeight ? calculateScrollOffset(block, ancestorRect.top, ancestor.clientHeight, elemRect.top, elemRect.height, ancestor.scrollTop) : ancestor.scrollTop;
  var scrollLeft = ancestor.scrollWidth > ancestor.clientWidth ? calculateScrollOffset(inline, ancestorRect.left, ancestor.clientWidth, elemRect.left, elemRect.width, ancestor.scrollLeft) : ancestor.scrollLeft;
  ancestor.scrollTo({
    top: scrollTop,
    left: scrollLeft,
    behavior: behavior
  });
}
var _update = /*#__PURE__*/new WeakMap();
var _resizeObserver = /*#__PURE__*/new WeakMap();
var ScrollHint = /*#__PURE__*/function (_HTMLElement) {
  function ScrollHint() {
    var _this3;
    _classCallCheck(this, ScrollHint);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this3 = _callSuper(this, ScrollHint, [].concat(args));
    _classPrivateFieldInitSpec(_this3, _update, function () {
      var _this4 = _this3,
        scrollTop = _this4.scrollTop,
        scrollHeight = _this4.scrollHeight,
        clientHeight = _this4.clientHeight,
        scrollLeft = _this4.scrollLeft,
        scrollWidth = _this4.scrollWidth,
        clientWidth = _this4.clientWidth;
      var scrollDirection = scrollWidth > clientWidth ? 'horizontal' : 'vertical';
      var scrollPercentage = scrollDirection === 'vertical' ? scrollTop / (scrollHeight - clientHeight) : scrollLeft / (scrollWidth - clientWidth);
      _this3.style.maskImage = Number.isNaN(scrollPercentage) ? '' : "linear-gradient(\n        to ".concat(scrollDirection === 'vertical' ? 'bottom' : 'right', ",\n        transparent ").concat(scrollPercentage > 0 ? 1 : 0, "%,\n        black ").concat(scrollPercentage < 0.1 ? scrollPercentage * 100 : 10, "%,\n        black ").concat(scrollPercentage > 0.9 ? scrollPercentage * 100 : 90, "%,\n        transparent 100%\n      )");
    });
    _classPrivateFieldInitSpec(_this3, _resizeObserver, new ResizeObserver(_classPrivateFieldGet(_update, _this3)));
    return _this3;
  }
  _inherits(ScrollHint, _HTMLElement);
  return _createClass(ScrollHint, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.addEventListener('scroll', _classPrivateFieldGet(_update, this));
      _classPrivateFieldGet(_resizeObserver, this).observe(this);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.removeEventListener('scroll', _classPrivateFieldGet(_update, this));
      _classPrivateFieldGet(_resizeObserver, this).disconnect();
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
if (!customElements.get('scroll-hint')) {
  customElements.define('scroll-hint', ScrollHint);
}

/***/ }),

/***/ "./src/scripts/utilities.js":
/*!**********************************!*\
  !*** ./src/scripts/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextComponent: () => (/* binding */ TextComponent),
/* harmony export */   center: () => (/* binding */ center),
/* harmony export */   changeMetaThemeColor: () => (/* binding */ changeMetaThemeColor),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   closest: () => (/* binding */ closest),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   fetchConfig: () => (/* binding */ fetchConfig),
/* harmony export */   formatMoney: () => (/* binding */ formatMoney),
/* harmony export */   getIOSVersion: () => (/* binding */ getIOSVersion),
/* harmony export */   getViewParameterValue: () => (/* binding */ getViewParameterValue),
/* harmony export */   getVisibleElements: () => (/* binding */ getVisibleElements),
/* harmony export */   isClickedOutside: () => (/* binding */ isClickedOutside),
/* harmony export */   isDesktopBreakpoint: () => (/* binding */ isDesktopBreakpoint),
/* harmony export */   isLowPowerDevice: () => (/* binding */ isLowPowerDevice),
/* harmony export */   isMobileBreakpoint: () => (/* binding */ isMobileBreakpoint),
/* harmony export */   isPointWithinElement: () => (/* binding */ isPointWithinElement),
/* harmony export */   mediaQueryLarge: () => (/* binding */ mediaQueryLarge),
/* harmony export */   normalizeString: () => (/* binding */ normalizeString),
/* harmony export */   onAnimationEnd: () => (/* binding */ onAnimationEnd),
/* harmony export */   onDocumentLoaded: () => (/* binding */ onDocumentLoaded),
/* harmony export */   onDocumentReady: () => (/* binding */ onDocumentReady),
/* harmony export */   prefersReducedMotion: () => (/* binding */ prefersReducedMotion),
/* harmony export */   preloadImage: () => (/* binding */ preloadImage),
/* harmony export */   preventDefault: () => (/* binding */ preventDefault),
/* harmony export */   requestIdleCallback: () => (/* binding */ requestIdleCallback),
/* harmony export */   requestYieldCallback: () => (/* binding */ requestYieldCallback),
/* harmony export */   resetShimmer: () => (/* binding */ resetShimmer),
/* harmony export */   scheduler: () => (/* binding */ scheduler),
/* harmony export */   start: () => (/* binding */ start),
/* harmony export */   startViewTransition: () => (/* binding */ startViewTransition),
/* harmony export */   supportsViewTransitions: () => (/* binding */ supportsViewTransitions),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   viewTransition: () => (/* binding */ viewTransition)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * Request an idle callback or fallback to setTimeout
 * @returns {function} The requestIdleCallback function
 */
var requestIdleCallback = typeof window.requestIdleCallback == 'function' ? window.requestIdleCallback : setTimeout;

/**
 * Executes a callback in a separate task after the next frame.
 * Using to defer non-critical tasks until after the interaction is complete.
 * @see https://web.dev/articles/optimize-inp#yield_to_allow_rendering_work_to_occur_sooner
 * @param {() => any} callback - The callback to execute
 */
var requestYieldCallback = function requestYieldCallback(callback) {
  requestAnimationFrame(function () {
    setTimeout(callback, 0);
  });
};

/**
 * Tells if we are on a low power device based on the number of CPU cores and RAM
 * @returns {boolean} True if the device is a low power device, false otherwise
 */
function isLowPowerDevice() {
  return Number(navigator.hardwareConcurrency) <= 2 || Number(navigator.deviceMemory) <= 2;
}

/**
 * Check if the browser supports View Transitions API
 * @returns {boolean} True if the browser supports View Transitions API, false otherwise
 */
function supportsViewTransitions() {
  return typeof document.startViewTransition === 'function';
}

/**
 * The current view transition
 * @type {{ current: Promise<void> | undefined }}
 */
var viewTransition = {
  current: undefined
};

/**
 * Functions to run when a view transition of a given type is started
 * @type {{ [key: string]: () => Promise<(() => void) | undefined> }}
 */
var viewTransitionTypes = {
  'product-grid': function () {
    var _productGrid = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var grid, productCards;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            grid = document.querySelector('.product-grid');
            productCards = /** @type {HTMLElement[]} */_toConsumableArray(document.querySelectorAll('.product-grid .product-grid__item'));
            if (!(!grid || !productCards.length)) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.n = 2;
            return new Promise(function (resolve) {
              return requestIdleCallback(function () {
                var cardsToAnimate = getCardsToAnimate(grid, productCards);
                productCards.forEach(function (card, index) {
                  if (index < cardsToAnimate) {
                    card.style.setProperty('view-transition-name', "product-card-".concat(card.dataset.productId));
                  } else {
                    card.style.setProperty('content-visibility', 'hidden');
                  }
                });
                resolve(null);
              });
            });
          case 2:
            return _context.a(2, function () {
              return productCards.forEach(function (card) {
                card.style.removeProperty('view-transition-name');
                card.style.removeProperty('content-visibility');
              });
            });
        }
      }, _callee);
    }));
    function productGrid() {
      return _productGrid.apply(this, arguments);
    }
    return productGrid;
  }()
};

/**
 * Starts a view transition
 * @param {() => void} callback The callback to call when the view transition starts
 * @param {string[]} [types] The types of view transition to use
 * @returns {Promise<void>} A promise that resolves when the view transition finishes
 */
function startViewTransition(callback, types) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(resolve) {
      var cleanupFunctions, _iterator, _step, type, cleanupFunction, transition, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!(supportsViewTransitions() && !prefersReducedMotion())) {
              _context2.n = 9;
              break;
            }
            cleanupFunctions = [];
            if (!types) {
              _context2.n = 8;
              break;
            }
            _iterator = _createForOfIteratorHelper(types);
            _context2.p = 1;
            _iterator.s();
          case 2:
            if ((_step = _iterator.n()).done) {
              _context2.n = 5;
              break;
            }
            type = _step.value;
            if (!viewTransitionTypes[type]) {
              _context2.n = 4;
              break;
            }
            _context2.n = 3;
            return viewTransitionTypes[type]();
          case 3:
            cleanupFunction = _context2.v;
            if (cleanupFunction) cleanupFunctions.push(cleanupFunction);
          case 4:
            _context2.n = 2;
            break;
          case 5:
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t = _context2.v;
            _iterator.e(_t);
          case 7:
            _context2.p = 7;
            _iterator.f();
            return _context2.f(7);
          case 8:
            transition = document.startViewTransition(callback);
            if (!viewTransition.current) {
              viewTransition.current = transition.finished;
            }
            if (types) types.forEach(function (type) {
              return transition.types.add(type);
            });
            transition.finished.then(function () {
              viewTransition.current = undefined;
              cleanupFunctions.forEach(function (cleanupFunction) {
                return cleanupFunction();
              });
              resolve();
            });
            return _context2.a(2);
          case 9:
            // Fallback for browsers that don't support this API yet
            callback();
            resolve();
          case 10:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 6, 7, 8]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

/**
 * @typedef {{ [key: string]: string | undefined }} Headers
 */

/**
 * @typedef {Object} FetchConfig
 * @property {string} method
 * @property {Headers} headers
 * @property {string | FormData | undefined} [body]
 */

/**
 * Creates a fetch configuration object
 * @param {string} [type] The type of response to expect
 * @param {Object} [config] The config of the request
 * @param {FetchConfig['body']} [config.body] The body of the request
 * @param {FetchConfig['headers']} [config.headers] The headers of the request
 * @returns {RequestInit} The fetch configuration object
 */
function fetchConfig() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'json';
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  /** @type {Headers} */
  var headers = _objectSpread({
    'Content-Type': 'application/json',
    Accept: "application/".concat(type)
  }, config.headers);
  if (type === 'javascript') {
    headers['X-Requested-With'] = 'XMLHttpRequest';
    delete headers['Content-Type'];
  }
  return {
    method: 'POST',
    headers: (/** @type {HeadersInit} */headers),
    body: config.body
  };
}

/**
 * Creates a debounced function that delays calling the provided function (fn)
 * until after wait milliseconds have elapsed since the last time
 * the debounced function was invoked. The returned function has a .cancel()
 * method to cancel any pending calls.
 *
 * @template {(...args: any[]) => any} T
 * @param {T} fn The function to debounce
 * @param {number} wait The time (in milliseconds) to wait before calling fn
 * @returns {T & { cancel(): void }} A debounced version of fn with a .cancel() method
 */
function debounce(fn, wait) {
  /** @type {number | undefined} */
  var timeout;

  /** @param {...any} args */
  function debounced() {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return fn.apply(_this, args);
    }, wait);
  }

  // Add the .cancel method:
  debounced.cancel = function () {
    clearTimeout(timeout);
  };
  return /** @type {T & { cancel(): void }} */debounced;
}

/**
 * Creates a throttled function that calls the provided function (fn) at most once per every wait milliseconds
 *
 * @template {(...args: any[]) => any} T
 * @param {T} fn The function to throttle
 * @param {number} delay The time (in milliseconds) to wait before calling fn
 * @returns {T & { cancel(): void }} A throttled version of fn with a .cancel() method
 */
function throttle(fn, delay) {
  var lastCall = 0;

  /** @param {...any} args */
  function throttled() {
    var now = performance.now();
    // If the time since the last call exceeds the delay, execute the callback
    if (now - lastCall >= delay) {
      lastCall = now;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      fn.apply(this, args);
    }
  }
  throttled.cancel = function () {
    lastCall = performance.now();
  };
  return /** @type {T & { cancel(): void }} */throttled;
}

/**
 * A media query for reduced motion
 * @type {MediaQueryList}
 */
var reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

/**
 * Check if the user prefers reduced motion
 * @returns {boolean} True if the user prefers reduced motion, false otherwise
 */
function prefersReducedMotion() {
  return reducedMotion.matches;
}

/**
 * Normalize a string
 * @param {string} str The string to normalize
 * @returns {string} The normalized string
 */
function normalizeString(str) {
  return str.normalize('NFD').replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u0898-\u089F\u08C9-\u08D2\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C3C\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E3A\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u1714\u1715\u1734\u17C9-\u17D3\u17DD\u1939-\u193B\u1A60\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABE\u1AC1-\u1ACB\u1ACF-\u1ADD\u1AE0-\u1AEB\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1BE6\u1BF2\u1BF3\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1D9B-\u1DBE\u1DC4-\u1DCF\u1DF5-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F1\uA7F8\uA7F9\uA806\uA82C\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDD4E\uDD69-\uDD6D\uDEFA\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC46\uDC70\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3B\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74\uDFCE-\uDFD0\uDFD2\uDFD3\uDFE1\uDFE2]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97\uDDD9\uDF41\uDF42\uDF5A]|\uD80D[\uDC47-\uDC55]|\uD818\uDD2F|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDD6B\uDD6C\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDC30-\uDC6D\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDDEE\uDDEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g, '').toLowerCase();
}

/**
 * Format a money value
 * @param {string} value The value to format
 * @returns {string} The formatted value
 */
function formatMoney(value) {
  var valueWithNoSpaces = value.replace(' ', '');
  if (valueWithNoSpaces.indexOf(',') === -1) return valueWithNoSpaces;
  if (valueWithNoSpaces.indexOf(',') < valueWithNoSpaces.indexOf('.')) return valueWithNoSpaces.replace(',', '');
  if (valueWithNoSpaces.indexOf('.') < valueWithNoSpaces.indexOf(',')) return valueWithNoSpaces.replace('.', '').replace(',', '.');
  if (valueWithNoSpaces.indexOf(',') !== -1) return valueWithNoSpaces.replace(',', '.');
  return valueWithNoSpaces;
}

/**
 * Check if the document is ready/loaded and call the callback when it is.
 * @param {() => void} callback The function to call when the document is ready.
 */
function onDocumentLoaded(callback) {
  if (document.readyState === 'complete') {
    callback();
  } else {
    window.addEventListener('load', callback);
  }
}

/**
 * Check if the DOM is ready and call the callback when it is.
 * This fires when the DOM is fully parsed but before all resources are loaded.
 * @param {() => void} callback The function to call when the DOM is ready.
 */
function onDocumentReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

/**
 * Wait for all animations to finish before calling the callback.
 * @param {Element | Element[]} elements The element(s) whose animations to wait for.
 * @param {() => void} [callback] The function to call when all animations are finished.
 * @param {Object} [options] The options to pass to `Element.getAnimations`.
 * @returns {Promise<void>} A promise that resolves when all animations are finished.
 */
function onAnimationEnd(elements, callback) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    subtree: true
  };
  var animations = Array.isArray(elements) ? elements.flatMap(function (element) {
    return element.getAnimations(options);
  }) : elements.getAnimations(options);
  var animationPromises = animations.reduce(function (acc, animation) {
    // Ignore ViewTimeline animations
    if (animation.timeline instanceof DocumentTimeline) {
      acc.push(animation.finished);
    }
    return acc;
  }, /** @type {Promise<Animation>[]} */[]);
  return Promise.allSettled(animationPromises).then(callback);
}

/**
 * Check if the click is outside the element.
 * @param {MouseEvent} event The mouse event.
 * @param {Element} element The element to check.
 * @returns {boolean} True if the click is outside the element, false otherwise.
 */
function isClickedOutside(event, element) {
  if (event.target instanceof HTMLDialogElement || !(event.target instanceof Element)) {
    return !isPointWithinElement(event.clientX, event.clientY, element);
  }
  return !element.contains(event.target);
}

/**
 * Check if a point is within an element.
 * @param {number} x The x coordinate of the point.
 * @param {number} y The y coordinate of the point.
 * @param {Element} element The element to check.
 * @returns {boolean} True if the point is within the element, false otherwise.
 */
function isPointWithinElement(x, y, element) {
  var _element$getBoundingC = element.getBoundingClientRect(),
    left = _element$getBoundingC.left,
    right = _element$getBoundingC.right,
    top = _element$getBoundingC.top,
    bottom = _element$getBoundingC.bottom;
  return x >= left && x <= right && y >= top && y <= bottom;
}

/**
 * A media query for large screens
 * @type {MediaQueryList}
 */
var mediaQueryLarge = matchMedia('(min-width: 750px)');

/**
 * Check if the current breakpoint is mobile
 * @returns {boolean} True if the current breakpoint is mobile, false otherwise
 */
function isMobileBreakpoint() {
  return !mediaQueryLarge.matches;
}

/**
 * Check if the current breakpoint is desktop
 * @returns {boolean} True if the current breakpoint is desktop, false otherwise
 */
function isDesktopBreakpoint() {
  return mediaQueryLarge.matches;
}

/**
 * Clamps a number between a minimum and maximum value.
 * @param {number} value - The input number to clamp.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} The clamped value.
 */
function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

/**
 * Calculates the center point of an element along the specified axis.
 * @param {Element} element - The DOM element to find the center of.
 * @param {'x' | 'y'} [axis] - The axis ('x' or 'y') to get the center for. If not provided, returns both axes.
 * @template {('x' | 'y')} T
 * @param {T} [axis]
 * @returns {T extends ('x' | 'y') ? number : {x: number, y: number}} The center point along the axis or an object with x and y coordinates.
 */
function center(element, axis) {
  var _element$getBoundingC2 = element.getBoundingClientRect(),
    left = _element$getBoundingC2.left,
    width = _element$getBoundingC2.width,
    top = _element$getBoundingC2.top,
    height = _element$getBoundingC2.height;
  var point = {
    x: left + width / 2,
    y: top + height / 2
  };
  if (axis) return /**  @type {any} */point[axis];
  return /**  @type {any} */point;
}

/**
 * Calculates the start point of an element along the specified axis.
 * @param {Element} element - The DOM element to find the start of.
 * @param {'x' | 'y'} [axis] - The axis ('x' or 'y') to get the start for. If not provided, returns both axes.
 * @returns {number | {x: number, y: number}} The start point along the axis or an object with x and y coordinates.
 */
function start(element, axis) {
  var _element$getBoundingC3 = element.getBoundingClientRect(),
    left = _element$getBoundingC3.left,
    top = _element$getBoundingC3.top;
  var point = {
    x: left,
    y: top
  };
  if (axis) return /**  @type {any} */point[axis];
  return /**  @type {any} */point;
}

/**
 * Finds the value in an array that is closest to a target value.
 * @param {number[]} values - An array of numbers.
 * @param {number} target - The target number to find the closest value to.
 * @returns {number} The value from the array closest to the target.
 */
function closest(values, target) {
  return values.reduce(function (prev, curr) {
    return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev;
  });
}

/**
 * Prevents the default action of an event.
 * @param {Event} event - The event to prevent the default action of.
 */
function preventDefault(event) {
  event.preventDefault();
}

/**
 * Get the visible elements within a root element.
 * @template {Element} T
 * @param {Element} root - The element within which elements should be visible.
 * @param {T[] | undefined} elements - The elements to check for visibility.
 * @param {number} [ratio=1] - The minimum percentage of the element that must be visible.
 * @param {'x' | 'y'} [axis] - Whether to only check along 'x' axis, 'y' axis, or both if undefined.
 * @returns {T[]} An array containing the visible elements.
 */
function getVisibleElements(root, elements) {
  var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var axis = arguments.length > 3 ? arguments[3] : undefined;
  if (!(elements !== null && elements !== void 0 && elements.length)) return [];
  var rootRect = root.getBoundingClientRect();
  return elements.filter(function (element) {
    var _element$getBoundingC4 = element.getBoundingClientRect(),
      width = _element$getBoundingC4.width,
      height = _element$getBoundingC4.height,
      top = _element$getBoundingC4.top,
      right = _element$getBoundingC4.right,
      left = _element$getBoundingC4.left,
      bottom = _element$getBoundingC4.bottom;
    if (ratio < 1) {
      var intersectionLeft = Math.max(rootRect.left, left);
      var intersectionRight = Math.min(rootRect.right, right);
      var intersectionWidth = Math.max(0, intersectionRight - intersectionLeft);
      if (axis === 'x') {
        return width > 0 && intersectionWidth / width >= ratio;
      }
      var intersectionTop = Math.max(rootRect.top, top);
      var intersectionBottom = Math.min(rootRect.bottom, bottom);
      var intersectionHeight = Math.max(0, intersectionBottom - intersectionTop);
      if (axis === 'y') {
        return height > 0 && intersectionHeight / height >= ratio;
      }
      var intersectionArea = intersectionWidth * intersectionHeight;
      var elementArea = width * height;

      // Check that at least the specified ratio of the element is visible
      return elementArea > 0 && intersectionArea / elementArea >= ratio;
    }
    var isWithinX = left >= rootRect.left && right <= rootRect.right;
    if (axis === 'x') {
      return isWithinX;
    }
    var isWithinY = top >= rootRect.top && bottom <= rootRect.bottom;
    if (axis === 'y') {
      return isWithinY;
    }
    return isWithinX && isWithinY;
  });
}
function getIOSVersion() {
  var _userAgent$match;
  var _navigator = navigator,
    userAgent = _navigator.userAgent;
  var isIOS = /(iPhone|iPad)/i.test(userAgent);
  if (!isIOS) return null;
  var version = (_userAgent$match = userAgent.match(/OS ([\d_]+)/)) === null || _userAgent$match === void 0 ? void 0 : _userAgent$match[1];
  var _ref2 = (version === null || version === void 0 ? void 0 : version.split('_')) || [],
    _ref3 = _slicedToArray(_ref2, 2),
    major = _ref3[0],
    minor = _ref3[1];
  if (!version || !major) return null;
  return {
    fullString: version.replace('_', '.'),
    major: parseInt(major, 10),
    minor: minor ? parseInt(minor, 10) : 0
  };
}

/**
 * Determines which grid items should be animated during a transition.
 * It makes an estimation based on the zoom-out card size because it's
 * the common denominator for both transition states. I.e. transitioning either
 * from 10 to 20 cards the other way around, both need 20 cards to be animated.
 * @param {Element} grid - The grid element
 * @param {Element[]} cards - The cards to animate
 * @returns {number} - Number of cards that should be animated
 */
function getCardsToAnimate(grid, cards) {
  var _cardSample$refs, _cardSample$refs2;
  if (!grid || !cards || cards.length === 0) return 0;
  var itemSample = cards[0];
  if (!itemSample) return 0;

  // Calculate the visible area of the grid for the Y axis. Assume X is always fully visible:
  var gridRect = grid.getBoundingClientRect();
  var visibleArea = {
    top: Math.max(0, gridRect.top),
    bottom: Math.min(window.innerHeight, gridRect.bottom)
  };
  var visibleHeight = Math.round(visibleArea.bottom - visibleArea.top);
  if (visibleHeight <= 0) return 0;

  /** @type {import('product-card').ProductCard | null} */
  var cardSample = itemSample.querySelector('product-card');
  var gridStyle = getComputedStyle(grid);
  var galleryAspectRatio = (cardSample === null || cardSample === void 0 || (_cardSample$refs = cardSample.refs) === null || _cardSample$refs === void 0 || (_cardSample$refs = _cardSample$refs.cardGallery) === null || _cardSample$refs === void 0 ? void 0 : _cardSample$refs.style.getPropertyValue('--gallery-aspect-ratio')) || '';
  var aspectRatio = parseFloat(galleryAspectRatio) || 0.5;
  if (galleryAspectRatio !== null && galleryAspectRatio !== void 0 && galleryAspectRatio.includes('/')) {
    var _galleryAspectRatio$s = galleryAspectRatio.split('/'),
      _galleryAspectRatio$s2 = _slicedToArray(_galleryAspectRatio$s, 2),
      _galleryAspectRatio$s3 = _galleryAspectRatio$s2[0],
      width = _galleryAspectRatio$s3 === void 0 ? '1' : _galleryAspectRatio$s3,
      _galleryAspectRatio$s4 = _galleryAspectRatio$s2[1],
      height = _galleryAspectRatio$s4 === void 0 ? '2' : _galleryAspectRatio$s4;
    aspectRatio = parseInt(width, 10) / parseInt(height, 10);
  }
  var cardGap = parseInt((cardSample === null || cardSample === void 0 || (_cardSample$refs2 = cardSample.refs) === null || _cardSample$refs2 === void 0 || (_cardSample$refs2 = _cardSample$refs2.productCardLink) === null || _cardSample$refs2 === void 0 ? void 0 : _cardSample$refs2.style.getPropertyValue('--product-card-gap')) || '') || 12;
  var gridGap = parseInt(gridStyle.getPropertyValue('--product-grid-gap')) || 12;

  // Assume only a couple of lines of text in the card details (title and price).
  // If the title wraps into more lines, we might just animate more cards, but that's fine.
  var detailsSize = ((parseInt(gridStyle.fontSize) || 16) + 2) * 2;
  var isMobile = window.innerWidth < 750;

  // Always use the zoom-out state card width
  var cardWidth = isMobile ? Math.round((gridRect.width - gridGap) / 2) : 100;
  var cardHeight = Math.round(cardWidth / aspectRatio) + cardGap + detailsSize;

  // Calculate the number of cards that fit in the visible area:
  // - The width estimation is pretty accurate, we can ignore decimals.
  // - The height estimation needs to account for peeking rows, so we round up.
  var columnsInGrid = isMobile ? 2 : Math.floor((gridRect.width + gridGap) / (cardWidth + gridGap));
  var rowsInGrid = Math.ceil((visibleHeight - gridGap) / (cardHeight + gridGap));
  return columnsInGrid * rowsInGrid;
}

/**
 * Preloads an image
 * @param {string} src - The source of the image to preload
 */
function preloadImage(src) {
  var image = new Image();
  image.src = src;
}
var TextComponent = /*#__PURE__*/function (_HTMLElement) {
  function TextComponent() {
    _classCallCheck(this, TextComponent);
    return _callSuper(this, TextComponent, arguments);
  }
  _inherits(TextComponent, _HTMLElement);
  return _createClass(TextComponent, [{
    key: "shimmer",
    value: function shimmer() {
      this.setAttribute('shimmer', '');
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
if (!customElements.get('text-component')) {
  customElements.define('text-component', TextComponent);
}

/**
 * Resets the shimmer attribute on all elements in the container.
 * @param {Element} [container] - The container to reset the shimmer attribute on.
 */
function resetShimmer() {
  var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
  var shimmer = container.querySelectorAll('[shimmer]');
  shimmer.forEach(function (item) {
    return item.removeAttribute('shimmer');
  });
}

/**
 * Change the meta theme color of the header.
 * @param {Element} colorSourceElement - The HTML element whose background-color will determine the new theme-color.
 */
function changeMetaThemeColor(colorSourceElement) {
  var metaThemeColor = document.head.querySelector('meta[name="theme-color"]');
  var containerStyle = window.getComputedStyle(colorSourceElement);
  if (metaThemeColor) metaThemeColor.setAttribute('content', containerStyle.backgroundColor);
}

/**
 * Gets the `view` URL search parameter value, if it exists.
 * Useful for Section Rendering API calls to get HTML markup for the correct template view.
 * Primarily used in testing alternative template views.
 * @returns {string | null} The view parameter value, or null if it doesn't exist
 */
function getViewParameterValue() {
  return new URLSearchParams(window.location.search).get('view');
}
var _queue = /*#__PURE__*/new WeakMap();
var _scheduled = /*#__PURE__*/new WeakMap();
var Scheduler = /*#__PURE__*/_createClass(function Scheduler() {
  var _this2 = this;
  _classCallCheck(this, Scheduler);
  /** @type {Set<() => void>} */
  _classPrivateFieldInitSpec(this, _queue, new Set());
  /** @type {boolean} */
  _classPrivateFieldInitSpec(this, _scheduled, false);
  /** @param {() => void} task */
  _defineProperty(this, "schedule", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(task) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _classPrivateFieldGet(_queue, _this2).add(task);
            if (_classPrivateFieldGet(_scheduled, _this2)) {
              _context3.n = 2;
              break;
            }
            _classPrivateFieldSet(_scheduled, _this2, true);

            // Wait for any in-progress view transitions to finish
            if (!viewTransition.current) {
              _context3.n = 1;
              break;
            }
            _context3.n = 1;
            return viewTransition.current;
          case 1:
            requestAnimationFrame(_this2.flush);
          case 2:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function (_x2) {
      return _ref4.apply(this, arguments);
    };
  }());
  _defineProperty(this, "flush", function () {
    var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(_queue, _this2)),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var task = _step2.value;
        task();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    _classPrivateFieldGet(_queue, _this2).clear();
    _classPrivateFieldSet(_scheduled, _this2, false);
  });
});
var scheduler = new Scheduler();
Theme.utilities = _objectSpread(_objectSpread({}, Theme.utilities), {}, {
  scheduler: scheduler
});

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
/*!**********************************!*\
  !*** ./src/scripts/slideshow.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slideshow: () => (/* binding */ Slideshow)
/* harmony export */ });
/* harmony import */ var _theme_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme/component */ "./src/scripts/component.js");
/* harmony import */ var _theme_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme/utilities */ "./src/scripts/utilities.js");
/* harmony import */ var _theme_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @theme/scrolling */ "./src/scripts/scrolling.js");
/* harmony import */ var _theme_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @theme/events */ "./src/scripts/events.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }





// The threshold for determining visibility of slides.
var SLIDE_VISIBLITY_THRESHOLD = 0.7;

/**
 * Slideshow custom element that allows sliding between content.
 *
 * @typedef {Object} Refs
 * @property {HTMLElement} scroller
 * @property {HTMLElement} slideshowContainer
 * @property {HTMLElement[]} [slides]
 * @property {HTMLElement} [current]
 * @property {HTMLElement[]} [thumbnails]
 * @property {HTMLElement[]} [dots]
 * @property {HTMLButtonElement} [previous]
 * @property {HTMLButtonElement} [next]
 *
 * @extends {Component<Refs>}
 */
var _current = /*#__PURE__*/new WeakMap();
var _disabled = /*#__PURE__*/new WeakMap();
var _interval = /*#__PURE__*/new WeakMap();
var _scroll = /*#__PURE__*/new WeakMap();
var _resizeObserver = /*#__PURE__*/new WeakMap();
var _Slideshow_brand = /*#__PURE__*/new WeakSet();
var _handleScroll = /*#__PURE__*/new WeakMap();
var _onTransitionInit = /*#__PURE__*/new WeakMap();
var _onTransitionEnd = /*#__PURE__*/new WeakMap();
var _sync = /*#__PURE__*/new WeakMap();
var _dragging = /*#__PURE__*/new WeakMap();
var _handleMouseDown = /*#__PURE__*/new WeakMap();
var _handlePointerEnter = /*#__PURE__*/new WeakMap();
var _handleVisibilityChange = /*#__PURE__*/new WeakMap();
var Slideshow = /*#__PURE__*/function (_Component) {
  function Slideshow() {
    var _this;
    _classCallCheck(this, Slideshow);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Slideshow, [].concat(args));
    /**
     * Setup the slideshow without controls for zero or one slides
     */
    _classPrivateMethodInitSpec(_this, _Slideshow_brand);
    _defineProperty(_this, "requiredRefs", ['scroller']);
    /**
     * The current slide index.
     * @type {number}
     */
    _classPrivateFieldInitSpec(_this, _current, 0);
    /**
     * Indicates whether the slideshow is temporarily disabled (e.g., during infinite loop transition).
     * @type {boolean}
     */
    _classPrivateFieldInitSpec(_this, _disabled, false);
    /**
     * The interval ID for automatic playback.
     * @type {number|undefined}
     */
    _classPrivateFieldInitSpec(_this, _interval, undefined);
    /**
     * The Scroller instance that manages scrolling.
     * @type {Scroller}
     */
    _classPrivateFieldInitSpec(_this, _scroll, void 0);
    /**
     * The ResizeObserver instance for monitoring scroller size changes
     * @type {ResizeObserver}
     */
    _classPrivateFieldInitSpec(_this, _resizeObserver, void 0);
    /**
     * Callback invoked on user initiated scroll to sync the current slide index
     * and emit a slide change event if the index has changed.
     */
    _classPrivateFieldInitSpec(_this, _handleScroll, function () {
      var _this$slides;
      var previousIndex = _classPrivateFieldGet(_current, _this);
      var index = _classPrivateFieldGet(_sync, _this).call(_this);
      if (index === previousIndex) return;
      var slide = (_this$slides = _this.slides) === null || _this$slides === void 0 ? void 0 : _this$slides[index];
      if (!slide) return;
      _this.dispatchEvent(new _theme_events__WEBPACK_IMPORTED_MODULE_3__.SlideshowSelectEvent({
        index: index,
        previousIndex: previousIndex,
        userInitiated: true,
        trigger: 'scroll',
        slide: slide,
        id: slide.getAttribute('slide-id')
      }));
    });
    _classPrivateFieldInitSpec(_this, _onTransitionInit, function () {
      _this.setAttribute('transitioning', '');
    });
    _classPrivateFieldInitSpec(_this, _onTransitionEnd, function () {
      _assertClassBrand(_Slideshow_brand, _this, _updateVisibleSlides).call(_this);
      _this.removeAttribute('transitioning');
    });
    /**
     * Synchronizes the scroll position and updates the current slide index.
     * @returns {number} The index of the current slide.
     */
    _classPrivateFieldInitSpec(_this, _sync, function () {
      var _this2 = _this,
        slides = _this2.slides;
      if (!slides) return _this.current = 0;
      if (!_classPrivateFieldGet(_scroll, _this)) return _this.current = 0;
      var visibleSlides = _this.visibleSlides;
      if (!visibleSlides.length) return _this.current;
      var _classPrivateFieldGet2 = _classPrivateFieldGet(_scroll, _this),
        axis = _classPrivateFieldGet2.axis;
      var scroller = _this.refs.scroller;
      var centers = visibleSlides.map(function (slide) {
        return (0,_theme_utilities__WEBPACK_IMPORTED_MODULE_1__.center)(slide, axis);
      });
      var referencePoint = visibleSlides.length > 1 ? scroller.getBoundingClientRect()[axis] : (0,_theme_utilities__WEBPACK_IMPORTED_MODULE_1__.center)(scroller, axis);
      var closestCenter = (0,_theme_utilities__WEBPACK_IMPORTED_MODULE_1__.closest)(centers, referencePoint);
      var closestVisibleSlide = visibleSlides[centers.indexOf(closestCenter)];
      if (!closestVisibleSlide) return _this.current = 0;
      var index = slides.indexOf(closestVisibleSlide);
      return _this.current = index;
    });
    _classPrivateFieldInitSpec(_this, _dragging, false);
    /**
     * Handles the 'mousedown' event to start dragging slides.
     * @param {MouseEvent} event - The mousedown event.
     */
    _classPrivateFieldInitSpec(_this, _handleMouseDown, function (event) {
      var _this3 = _this,
        slides = _this3.slides;
      if (!slides || slides.length <= 1) return;
      if (!(event.target instanceof Element)) return;
      if (_this.disabled || _classPrivateFieldGet(_dragging, _this)) return;

      // Check if the event target is within a 3D model interactive element
      // This prevents the slideshow from capturing drag events when interacting with 3D models
      if (event.target.closest('model-viewer')) {
        return;
      }
      event.preventDefault();
      // Store initial position but don't start handling yet
      var _classPrivateFieldGet3 = _classPrivateFieldGet(_scroll, _this),
        axis = _classPrivateFieldGet3.axis;
      var startPosition = event[axis];
      var controller = new AbortController();
      var signal = controller.signal;
      var startTime = performance.now();
      var previous = startPosition;
      var velocity = 0;
      var moved = false;
      var distanceTravelled = 0;
      _classPrivateFieldSet(_dragging, _this, true);

      /**
       * Handles the 'pointermove' event to update the scroll position.
       * @param {PointerEvent} event - The pointermove event.
       */
      var onPointerMove = function onPointerMove(event) {
        var current = event[axis];
        var initialDelta = startPosition - current;
        if (!initialDelta) return;
        if (!moved) {
          var _this$parentElement;
          moved = true;
          _this.setPointerCapture(event.pointerId);

          // Prevent clicks once the user starts dragging
          document.addEventListener('click', _theme_utilities__WEBPACK_IMPORTED_MODULE_1__.preventDefault, {
            once: true,
            signal: signal
          });
          var movingRight = initialDelta < 0;
          var movingLeft = initialDelta > 0;

          // Check if the current slideshow should handle this drag
          var closestSlideshow = (_this$parentElement = _this.parentElement) === null || _this$parentElement === void 0 ? void 0 : _this$parentElement.closest('slideshow-component');
          var isNested = closestSlideshow instanceof Slideshow && closestSlideshow !== _this;
          var cannotMoveInDirection = movingRight && _this.atStart || movingLeft && _this.atEnd;

          // Abort and let the parent slideshow handle the drag if we're moving in a direction where nested slideshow can't move
          if (isNested && cannotMoveInDirection) {
            controller.abort();
            return;
          }
          _this.pause();
          _this.setAttribute('dragging', '');
        }

        // Stop the event from bubbling up to parent slideshow components
        event.stopImmediatePropagation();
        var delta = previous - current;
        var timeDelta = performance.now() - startTime;
        velocity = Math.round(delta / timeDelta * 1000);
        previous = current;
        distanceTravelled += Math.abs(delta);
        _classPrivateFieldGet(_scroll, _this).by(delta, {
          instant: true
        });
      };

      /**
       * Handles the 'pointerup' event to stop dragging slides.
       * @param {PointerEvent} event - The pointerup event.
       */
      var onPointerUp = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
          var _this4, current, slides, scroller, direction, next, modifier, newIndex, newSlide, currentIndex;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                controller.abort();
                _this4 = _this, current = _this4.current, slides = _this4.slides;
                scroller = _this.refs.scroller;
                _classPrivateFieldSet(_dragging, _this, false);
                if (!(!(slides !== null && slides !== void 0 && slides.length) || !scroller)) {
                  _context.n = 1;
                  break;
                }
                return _context.a(2);
              case 1:
                direction = Math.sign(velocity);
                next = _classPrivateFieldGet(_sync, _this).call(_this);
                modifier = current !== next || Math.abs(velocity) < 10 || distanceTravelled < 10 ? 0 : direction;
                newIndex = (0,_theme_utilities__WEBPACK_IMPORTED_MODULE_1__.clamp)(next + modifier, 0, slides.length - 1);
                newSlide = slides[newIndex];
                currentIndex = _this.current;
                if (newSlide) {
                  _context.n = 2;
                  break;
                }
                throw new Error("Slide not found at index ".concat(newIndex));
              case 2:
                _classPrivateFieldGet(_scroll, _this).to(newSlide);
                _this.removeAttribute('dragging');
                _this.releasePointerCapture(event.pointerId);
                _assertClassBrand(_Slideshow_brand, _this, _centerSelectedThumbnail).call(_this, newIndex);
                _this.dispatchEvent(new _theme_events__WEBPACK_IMPORTED_MODULE_3__.SlideshowSelectEvent({
                  index: newIndex,
                  previousIndex: currentIndex,
                  userInitiated: true,
                  trigger: 'drag',
                  slide: newSlide,
                  id: newSlide.getAttribute('slide-id')
                }));
                _this.current = newIndex;
                _context.n = 3;
                return _classPrivateFieldGet(_scroll, _this).finished;
              case 3:
                if (!_classPrivateFieldGet(_dragging, _this)) {
                  _context.n = 4;
                  break;
                }
                return _context.a(2);
              case 4:
                _classPrivateFieldGet(_scroll, _this).snap = true;
                _this.resume();
              case 5:
                return _context.a(2);
            }
          }, _callee);
        }));
        return function onPointerUp(_x) {
          return _ref.apply(this, arguments);
        };
      }();
      _classPrivateFieldGet(_scroll, _this).snap = false;
      document.addEventListener('pointermove', onPointerMove, {
        signal: signal
      });
      document.addEventListener('pointerup', onPointerUp, {
        signal: signal
      });
      /**
       * pointerDown calls onPointerUp to fix an issue where the first tap-and-drag
       * on the zoom dialog is captured by the pointerMove/pointerUp listeners,
       * sometimes causing the slideshow to change slides unexpectedly
       */
      document.addEventListener('pointerdown', onPointerUp, {
        signal: signal
      });
      document.addEventListener('pointercancel', onPointerUp, {
        signal: signal
      });
      document.addEventListener('pointercapturelost', onPointerUp, {
        signal: signal
      });
    });
    _classPrivateFieldInitSpec(_this, _handlePointerEnter, function () {
      _this.setAttribute('actioned', '');
    });
    /**
     * Pause the slideshow when the page is hidden.
     */
    _classPrivateFieldInitSpec(_this, _handleVisibilityChange, function () {
      return document.hidden ? _this.pause() : _this.resume();
    });
    return _this;
  }
  _inherits(Slideshow, _Component);
  return _createClass(Slideshow, [{
    key: "attributeChangedCallback",
    value:
    /**
     * @param {string} name
     * @param {string} oldValue
     * @param {string} newValue
     */
    function attributeChangedCallback(name, oldValue, newValue) {
      var _this5 = this;
      // Collection page filtering will Morph slideshow galleries in place, updating
      // the slideshow[initial-slide] and slideshow-slide[hidden] attributes.
      // We need to re-select() the slide after the morph is complete, but not before
      // slideshow-slide elements have their [hidden] attribute updated.
      if (name === 'initial-slide' && oldValue !== newValue) {
        queueMicrotask(function () {
          var _this5$refs$slides$in;
          // Only select if the component is connected and initialized
          if (!_this5.isConnected || !_classPrivateFieldGet(_scroll, _this5) || !_this5.refs.slides) return;
          var index = parseInt(newValue, 10) || 0;
          var slide_id = (_this5$refs$slides$in = _this5.refs.slides[index]) === null || _this5$refs$slides$in === void 0 ? void 0 : _this5$refs$slides$in.getAttribute('slide-id');
          if (slide_id) {
            _this5.select({
              id: slide_id
            }, undefined, {
              animate: false
            });
          }
        });
      }
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this$slides2;
        var slideCount;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _superPropGet(Slideshow, "connectedCallback", this, 3)([]);

              // Wait for any in-progress view transitions to finish
              if (!_theme_utilities__WEBPACK_IMPORTED_MODULE_1__.viewTransition.current) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return _theme_utilities__WEBPACK_IMPORTED_MODULE_1__.viewTransition.current;
            case 1:
              if (this.isConnected) {
                _context2.n = 2;
                break;
              }
              return _context2.a(2);
            case 2:
              slideCount = ((_this$slides2 = this.slides) === null || _this$slides2 === void 0 ? void 0 : _this$slides2.length) || 0;
              slideCount <= 1 ? _assertClassBrand(_Slideshow_brand, this, _setupSlideshowWithoutControls).call(this) : _assertClassBrand(_Slideshow_brand, this, _setupSlideshow).call(this);
            case 3:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }
      return connectedCallback;
    }()
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this$slides3;
      _superPropGet(Slideshow, "disconnectedCallback", this, 3)([]);
      if (_classPrivateFieldGet(_scroll, this)) {
        var scroller = this.refs.scroller;
        scroller.removeEventListener('mousedown', _classPrivateFieldGet(_handleMouseDown, this));
        _classPrivateFieldGet(_scroll, this).destroy();
      }
      var slideCount = ((_this$slides3 = this.slides) === null || _this$slides3 === void 0 ? void 0 : _this$slides3.length) || 0;
      if (slideCount > 1) {
        this.removeEventListener('mouseenter', this.suspend);
        this.removeEventListener('mouseleave', this.resume);
        this.removeEventListener('pointerenter', _classPrivateFieldGet(_handlePointerEnter, this));
        document.removeEventListener('visibilitychange', _classPrivateFieldGet(_handleVisibilityChange, this));
      }
      if (_classPrivateFieldGet(_resizeObserver, this)) {
        _classPrivateFieldGet(_resizeObserver, this).disconnect();
      }
    }

    /** Indicates whether the slideshow is nested inside another slideshow. */
  }, {
    key: "isNested",
    get: function get() {
      var _this$parentElement2;
      return ((_this$parentElement2 = this.parentElement) === null || _this$parentElement2 === void 0 ? void 0 : _this$parentElement2.closest('slideshow-component')) !== null;
    }
  }, {
    key: "initialSlide",
    get: function get() {
      var _this$refs$slides;
      return (_this$refs$slides = this.refs.slides) === null || _this$refs$slides === void 0 ? void 0 : _this$refs$slides[this.initialSlideIndex];
    }

    /**
     * Selects a slide based on the input index.
     * @param {number|string|{id: string}} input - The index or id of the slide to select.
     * @param {Event} [event] - The event that triggered the selection.
     * @param {Object} [options] - The options for the selection.
     * @param {boolean} [options.animate=true] - Whether to animate the selection.
     */
  }, {
    key: "select",
    value: (function () {
      var _select = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(input, event) {
        var _this$refs$slides2,
          _this$slides4,
          _this6 = this,
          _this$slides5;
        var options,
          currentSlide,
          _iterator,
          _step,
          _slide,
          requestedIndex,
          current,
          slides,
          requestedSlideElement,
          _options$animate,
          animate,
          lastIndex,
          index,
          isAdjacentSlide,
          visibleSlides,
          instant,
          targetSlide,
          placeholder,
          slide,
          previousIndex,
          _args4 = arguments;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
              if (!(_classPrivateFieldGet(_disabled, this) || !((_this$refs$slides2 = this.refs.slides) !== null && _this$refs$slides2 !== void 0 && _this$refs$slides2.length))) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              if (_classPrivateFieldGet(_scroll, this)) {
                _context4.n = 2;
                break;
              }
              return _context4.a(2);
            case 2:
              // Store the actual current slide before any mutations
              currentSlide = (_this$slides4 = this.slides) === null || _this$slides4 === void 0 ? void 0 : _this$slides4[this.current];
              _iterator = _createForOfIteratorHelper(this.refs.slides);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _slide = _step.value;
                  if (_slide.hasAttribute('reveal')) {
                    _slide.removeAttribute('reveal');
                    _slide.setAttribute('aria-hidden', 'true');
                  }
                }

                // Figure out the raw desired index (could be -1 if user is on first slide and clicks prev)
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              requestedIndex = function () {
                if (typeof input === 'number') return input;
                if (typeof input === 'string') return parseInt(input, 10);
                if ('id' in input) {
                  var requestedSlide = _this6.refs.slides.find(function (slide) {
                    return slide.getAttribute('slide-id') == input.id;
                  });
                  if (!requestedSlide || !_this6.slides) return;

                  // Force the slide to be revealed if it is hidden
                  if (requestedSlide.hasAttribute('hidden')) {
                    requestedSlide.setAttribute('reveal', '');
                    requestedSlide.setAttribute('aria-hidden', 'false');
                  }
                  return _this6.slides.indexOf(requestedSlide);
                }
              }();
              current = this.current;
              slides = this.slides; // Guard checks: no slides, invalid index, or selecting the same slide
              if (!(!(slides !== null && slides !== void 0 && slides.length) || requestedIndex === undefined || isNaN(requestedIndex))) {
                _context4.n = 3;
                break;
              }
              return _context4.a(2);
            case 3:
              requestedSlideElement = slides === null || slides === void 0 ? void 0 : slides[requestedIndex];
              if (!(currentSlide === requestedSlideElement)) {
                _context4.n = 4;
                break;
              }
              return _context4.a(2);
            case 4:
              if (!this.infinite) requestedIndex = (0,_theme_utilities__WEBPACK_IMPORTED_MODULE_1__.clamp)(requestedIndex, 0, slides.length - 1);
              event === null || event === void 0 || event.preventDefault();
              _options$animate = options.animate, animate = _options$animate === void 0 ? true : _options$animate;
              lastIndex = slides.length - 1; // Decide the actual target index (clamp for infinite loop)
              index = requestedIndex;
              if (requestedIndex < 0) index = lastIndex;else if (requestedIndex > lastIndex) index = 0;
              isAdjacentSlide = Math.abs(index - current) <= 1 && requestedIndex >= 0 && requestedIndex <= lastIndex;
              visibleSlides = this.visibleSlides;
              instant = (0,_theme_utilities__WEBPACK_IMPORTED_MODULE_1__.prefersReducedMotion)() || !animate; // If jump is more than 1 or we looped, do the placeholder + reorder trick
              if (!(!instant && !isAdjacentSlide && visibleSlides.length === 1)) {
                _context4.n = 7;
                break;
              }
              _classPrivateFieldSet(_disabled, this, true);
              _context4.n = 5;
              return _classPrivateFieldGet(_scroll, this).finished;
            case 5:
              // ensure we're not mid-scroll
              targetSlide = slides[index];
              if (!(!targetSlide || !currentSlide)) {
                _context4.n = 6;
                break;
              }
              return _context4.a(2);
            case 6:
              // Create a placeholder in the original DOM position of targetSlide
              placeholder = document.createElement('slideshow-slide');
              targetSlide.before(placeholder);

              // Decide whether targetSlide goes before or after currentSlide
              // so that we scroll a short distance in the correct direction
              if (requestedIndex < current) {
                currentSlide.before(targetSlide);
              } else {
                currentSlide.after(targetSlide);
              }
              if (current === 0) _classPrivateFieldGet(_scroll, this).to(currentSlide, {
                instant: true
              });

              // Once that scroll finishes, restore the DOM
              queueMicrotask(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.n) {
                    case 0:
                      _context3.n = 1;
                      return _classPrivateFieldGet(_scroll, _this6).finished;
                    case 1:
                      _classPrivateFieldSet(_disabled, _this6, false);

                      // Restore the slide back to its original position. This triggers a scroll event.
                      placeholder.replaceWith(targetSlide);

                      // Instantly scroll to the target slide as its position will have changed
                      _classPrivateFieldGet(_scroll, _this6).to(targetSlide, {
                        instant: true
                      });
                    case 2:
                      return _context3.a(2);
                  }
                }, _callee3);
              })));
            case 7:
              slide = slides[index];
              if (slide) {
                _context4.n = 8;
                break;
              }
              return _context4.a(2);
            case 8:
              previousIndex = this.current;
              slide.setAttribute('aria-hidden', 'false');
              if (_classPrivateFieldGet(_scroll, this)) {
                _classPrivateFieldGet(_scroll, this).to(slide, {
                  instant: instant
                });
              }
              this.current = ((_this$slides5 = this.slides) === null || _this$slides5 === void 0 ? void 0 : _this$slides5.indexOf(slide)) || 0;
              _assertClassBrand(_Slideshow_brand, this, _centerSelectedThumbnail).call(this, index, instant ? 'instant' : 'smooth');
              this.dispatchEvent(new _theme_events__WEBPACK_IMPORTED_MODULE_3__.SlideshowSelectEvent({
                index: index,
                previousIndex: previousIndex,
                userInitiated: event != null,
                trigger: 'select',
                slide: slide,
                id: slide.getAttribute('slide-id')
              }));
            case 9:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function select(_x2, _x3) {
        return _select.apply(this, arguments);
      }
      return select;
    }()
    /**
     * Advances to the next slide.
     * @param {Event} [event] - The event that triggered the next slide.
     * @param {Object} [options] - The options for the next slide.
     * @param {boolean} [options.animate=true] - Whether to animate the next slide.
     */
    )
  }, {
    key: "next",
    value: function next(event, options) {
      event === null || event === void 0 || event.preventDefault();
      this.select(this.nextIndex, event, options);
    }

    /**
     * Goes back to the previous slide.
     * @param {Event} [event] - The event that triggered the previous slide.
     * @param {Object} [options] - The options for the previous slide.
     * @param {boolean} [options.animate=true] - Whether to animate the previous slide.
     */
  }, {
    key: "previous",
    value: function previous(event, options) {
      event === null || event === void 0 || event.preventDefault();
      this.select(this.previousIndex, event, options);
    }

    /**
     * Starts automatic slide playback.
     * @param {number} [interval] - The time interval in seconds between slides.
     */
  }, {
    key: "play",
    value: function play() {
      var _this7 = this;
      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.autoplayInterval;
      if (_classPrivateFieldGet(_interval, this)) return;
      this.paused = false;
      _classPrivateFieldSet(_interval, this, setInterval(function () {
        if (_this7.matches(':hover') || document.hidden) return;
        _this7.next();
      }, interval));
    }

    /**
     * Pauses automatic slide playback.
     */
  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
      this.suspend();
    }
  }, {
    key: "paused",
    get: function get() {
      return this.hasAttribute('paused');
    },
    set: function set(value) {
      if (value) {
        this.setAttribute('paused', '');
      } else {
        this.removeAttribute('paused');
      }
    }

    /**
     * Suspends automatic slide playback.
     */
  }, {
    key: "suspend",
    value: function suspend() {
      clearInterval(_classPrivateFieldGet(_interval, this));
      _classPrivateFieldSet(_interval, this, undefined);
    }

    /**
     * Resumes automatic slide playback if autoplay is enabled.
     */
  }, {
    key: "resume",
    value: function resume() {
      if (!this.autoplay || this.paused) return;
      this.pause();
      this.play();
    }
  }, {
    key: "autoplay",
    get: function get() {
      return Boolean(this.autoplayInterval);
    }
  }, {
    key: "autoplayInterval",
    get: function get() {
      var interval = this.getAttribute('autoplay');
      var value = parseInt("".concat(interval), 10);
      if (Number.isNaN(value)) return undefined;
      return value * 1000;
    }
  }, {
    key: "current",
    get: function get() {
      return _classPrivateFieldGet(_current, this);
    }

    /**
     * Sets the current slide index and update the DOM
     * @type {number}
     */,
    set: function set(value) {
      var _this$refs = this.refs,
        current = _this$refs.current,
        thumbnails = _this$refs.thumbnails,
        dots = _this$refs.dots,
        slides = _this$refs.slides,
        previous = _this$refs.previous,
        next = _this$refs.next;
      _classPrivateFieldSet(_current, this, value);
      if (current) current.textContent = "".concat(value + 1);
      for (var _i = 0, _arr = [thumbnails, dots]; _i < _arr.length; _i++) {
        var controls = _arr[_i];
        controls === null || controls === void 0 || controls.forEach(function (el, i) {
          return el.setAttribute('aria-selected', "".concat(i === value));
        });
      }
      if (previous) previous.disabled = Boolean(!this.infinite && value === 0);
      if (next) next.disabled = Boolean(!this.infinite && slides && this.nextIndex >= slides.length);
    }
  }, {
    key: "infinite",
    get: function get() {
      return this.getAttribute('infinite') != null;
    }
  }, {
    key: "visibleSlides",
    get: function get() {
      return (0,_theme_utilities__WEBPACK_IMPORTED_MODULE_1__.getVisibleElements)(this.refs.scroller, this.slides, SLIDE_VISIBLITY_THRESHOLD, 'x');
    }
  }, {
    key: "previousIndex",
    get: function get() {
      var current = this.current,
        visibleSlides = this.visibleSlides;
      var modifier = visibleSlides.length > 1 ? visibleSlides.length : 1;
      return current - modifier;
    }
  }, {
    key: "nextIndex",
    get: function get() {
      var current = this.current,
        visibleSlides = this.visibleSlides;
      var modifier = visibleSlides.length > 1 ? visibleSlides.length : 1;
      return current + modifier;
    }
  }, {
    key: "atStart",
    get: function get() {
      var current = this.current,
        slides = this.slides;
      return slides !== null && slides !== void 0 && slides.length ? current === 0 : false;
    }
  }, {
    key: "atEnd",
    get: function get() {
      var current = this.current,
        slides = this.slides;
      return slides !== null && slides !== void 0 && slides.length ? current === slides.length - 1 : false;
    }

    /**
     * Sets the disabled attribute.
     * @param {boolean} value - The value to set the disabled attribute to.
     */
  }, {
    key: "disabled",
    get:
    /**
     * Whether the slideshow is disabled.
     * @type {boolean}
     */
    function get() {
      return this.getAttribute('disabled') === 'true' || this.hasAttribute('mobile-disabled') && !_theme_utilities__WEBPACK_IMPORTED_MODULE_1__.mediaQueryLarge.matches;
    },
    set: function set(value) {
      this.setAttribute('disabled', String(value));
    }
  }, {
    key: "slides",
    get: function get() {
      var _this$refs$slides3;
      return (_this$refs$slides3 = this.refs.slides) === null || _this$refs$slides3 === void 0 ? void 0 : _this$refs$slides3.filter(function (slide) {
        return !slide.hasAttribute('hidden') || slide.hasAttribute('reveal');
      });
    }

    /**
     * The initial slide index.
     * @type {number}
     */
  }, {
    key: "initialSlideIndex",
    get: function get() {
      var initialSlide = this.getAttribute('initial-slide');
      if (initialSlide == null) return 0;
      return parseInt(initialSlide, 10);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['initial-slide'];
    }
  }]);
}(_theme_component__WEBPACK_IMPORTED_MODULE_0__.Component);
function _setupSlideshowWithoutControls() {
  var _this$refs$slides4;
  this.current = 0;
  if (this.hasAttribute('auto-hide-controls')) {
    var slideshowControls = this.refs.slideshowControls;
    if (slideshowControls instanceof HTMLElement) {
      slideshowControls.hidden = true;
    }
  }
  if ((_this$refs$slides4 = this.refs.slides) !== null && _this$refs$slides4 !== void 0 && _this$refs$slides4[0]) {
    this.refs.slides[0].setAttribute('aria-hidden', 'false');
  }
}
/**
 * Setup the slideshow with controls for when there are multiple slides
 */
function _setupSlideshow() {
  var _this8 = this;
  // Setup the scroll instance
  var scroller = this.refs.scroller;
  _classPrivateFieldSet(_scroll, this, new _theme_scrolling__WEBPACK_IMPORTED_MODULE_2__.Scroller(scroller, {
    onScroll: _classPrivateFieldGet(_handleScroll, this),
    onScrollStart: _classPrivateFieldGet(_onTransitionInit, this),
    onScrollEnd: _classPrivateFieldGet(_onTransitionEnd, this)
  }));
  scroller.addEventListener('mousedown', _classPrivateFieldGet(_handleMouseDown, this));
  this.addEventListener('mouseenter', this.suspend);
  this.addEventListener('mouseleave', this.resume);
  this.addEventListener('pointerenter', _classPrivateFieldGet(_handlePointerEnter, this));
  document.addEventListener('visibilitychange', _classPrivateFieldGet(_handleVisibilityChange, this));
  _assertClassBrand(_Slideshow_brand, this, _updateControlsVisibility).call(this);
  this.disabled = this.isNested || this.disabled;
  this.resume();
  this.current = this.initialSlideIndex;

  // Batch reads and writes to the DOM
  _theme_utilities__WEBPACK_IMPORTED_MODULE_1__.scheduler.schedule(function () {
    var _this8$initialSlide;
    var visibleSlidesAmount = 0;
    var initialSlideId = (_this8$initialSlide = _this8.initialSlide) === null || _this8$initialSlide === void 0 ? void 0 : _this8$initialSlide.getAttribute('slide-id');

    // Wait for next frame to ensure layout is fully calculated before setting initial scroll position
    // This prevents race conditions on Safari mobile when section_width is 'full-width'
    requestAnimationFrame(function () {
      if (_this8.initialSlideIndex !== 0 && initialSlideId) {
        _this8.select({
          id: initialSlideId
        }, undefined, {
          animate: false
        });
        visibleSlidesAmount = 1;
      } else {
        visibleSlidesAmount = _assertClassBrand(_Slideshow_brand, _this8, _updateVisibleSlides).call(_this8);
        if (visibleSlidesAmount === 0) {
          _this8.select(0, undefined, {
            animate: false
          });
          visibleSlidesAmount = 1;
        }
      }
    });
    _classPrivateFieldSet(_resizeObserver, _this8, new ResizeObserver(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            if (!_theme_utilities__WEBPACK_IMPORTED_MODULE_1__.viewTransition.current) {
              _context5.n = 1;
              break;
            }
            _context5.n = 1;
            return _theme_utilities__WEBPACK_IMPORTED_MODULE_1__.viewTransition.current;
          case 1:
            if (visibleSlidesAmount > 1) {
              _assertClassBrand(_Slideshow_brand, _this8, _updateVisibleSlides).call(_this8);
            }
            if (_this8.hasAttribute('auto-hide-controls')) {
              _assertClassBrand(_Slideshow_brand, _this8, _updateControlsVisibility).call(_this8);
            }
          case 2:
            return _context5.a(2);
        }
      }, _callee5);
    }))));
    _classPrivateFieldGet(_resizeObserver, _this8).observe(_this8.refs.slideshowContainer);
  });
}
function _updateControlsVisibility() {
  if (!this.hasAttribute('auto-hide-controls')) return;
  var _this$refs2 = this.refs,
    scroller = _this$refs2.scroller,
    slideshowControls = _this$refs2.slideshowControls;
  if (!(slideshowControls instanceof HTMLElement)) return;
  slideshowControls.hidden = scroller.scrollWidth <= scroller.offsetWidth;
}
/**
 * Centers the selected thumbnail in the thumbnails container
 * @param {number} index - The index of the selected thumbnail
 * @param {ScrollBehavior} [behavior] - The scroll behavior.
 */
function _centerSelectedThumbnail(index) {
  var _this$refs$thumbnails;
  var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'smooth';
  var selectedThumbnail = (_this$refs$thumbnails = this.refs.thumbnails) === null || _this$refs$thumbnails === void 0 ? void 0 : _this$refs$thumbnails[index];
  if (!selectedThumbnail) return;
  var thumbnailsContainer = this.refs.thumbnailsContainer;
  if (!thumbnailsContainer || !(thumbnailsContainer instanceof HTMLElement)) return;
  var slideshowControls = this.refs.slideshowControls;
  if (!slideshowControls || !(slideshowControls instanceof HTMLElement)) return;
  (0,_theme_scrolling__WEBPACK_IMPORTED_MODULE_2__.scrollIntoView)(selectedThumbnail, {
    ancestor: thumbnailsContainer,
    behavior: behavior,
    block: 'center',
    inline: 'center'
  });
}
function _updateVisibleSlides() {
  var slides = this.slides;
  if (!slides || !slides.length) return 0;
  var visibleSlides = this.visibleSlides;

  // Batch writes to the DOM
  _theme_utilities__WEBPACK_IMPORTED_MODULE_1__.scheduler.schedule(function () {
    // Update aria-hidden based on visibility
    slides.forEach(function (slide) {
      var isVisible = visibleSlides.includes(slide);
      slide.setAttribute('aria-hidden', "".concat(!isVisible));
    });
  });
  return visibleSlides.length;
}
if (!customElements.get('slideshow-component')) {
  customElements.define('slideshow-component', Slideshow);
}
})();

/******/ })()
;