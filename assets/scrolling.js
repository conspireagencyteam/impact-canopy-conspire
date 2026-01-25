/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  !*** ./src/scripts/scrolling.js ***!
  \**********************************/
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
})();

/******/ })()
;