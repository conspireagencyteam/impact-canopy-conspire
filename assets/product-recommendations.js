/******/ (() => { // webpackBootstrap
/*!************************************************!*\
  !*** ./src/scripts/product-recommendations.js ***!
  \************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _intersectionObserver = /*#__PURE__*/new WeakMap();
var _mutationObserver = /*#__PURE__*/new WeakMap();
var _cachedRecommendations = /*#__PURE__*/new WeakMap();
var _activeFetch = /*#__PURE__*/new WeakMap();
var _ProductRecommendations_brand = /*#__PURE__*/new WeakSet();
var ProductRecommendations = /*#__PURE__*/function (_HTMLElement) {
  function ProductRecommendations() {
    var _this;
    _classCallCheck(this, ProductRecommendations);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ProductRecommendations, [].concat(args));
    /**
     * Load the product recommendations
     */
    _classPrivateMethodInitSpec(_this, _ProductRecommendations_brand);
    /**
     * The observer for the product recommendations
     * @type {IntersectionObserver}
     */
    _classPrivateFieldInitSpec(_this, _intersectionObserver, new IntersectionObserver(function (entries, observer) {
      var _entries$;
      if (!((_entries$ = entries[0]) !== null && _entries$ !== void 0 && _entries$.isIntersecting)) return;
      observer.disconnect();
      _assertClassBrand(_ProductRecommendations_brand, _this, _loadRecommendations).call(_this);
    }, {
      rootMargin: '0px 0px 400px 0px'
    }));
    /**
     * Observing changes to the elements attributes
     * @type {MutationObserver}
     */
    _classPrivateFieldInitSpec(_this, _mutationObserver, new MutationObserver(function (mutations) {
      var _iterator = _createForOfIteratorHelper(mutations),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;
          // Only attribute changes are interesting
          if (mutation.target !== _this || mutation.type !== 'attributes') continue;

          // Ignore error attribute changes
          if (mutation.attributeName === 'data-error') continue;

          // Ignore addition of hidden class because it means there's an error with the display
          if (mutation.attributeName === 'class' && _this.classList.contains('hidden')) continue;

          // Ignore when the data-recommendations-performed attribute has been set to 'true'
          if (mutation.attributeName === 'data-recommendations-performed' && _this.dataset.recommendationsPerformed === 'true') continue;

          // All other attribute changes trigger a reload
          _assertClassBrand(_ProductRecommendations_brand, _this, _loadRecommendations).call(_this);
          break;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }));
    /**
     * The cached recommendations
     * @type {Record<string, string>}
     */
    _classPrivateFieldInitSpec(_this, _cachedRecommendations, {});
    /**
     * An abort controller for the active fetch (if there is one)
     * @type {AbortController | null}
     */
    _classPrivateFieldInitSpec(_this, _activeFetch, null);
    return _this;
  }
  _inherits(ProductRecommendations, _HTMLElement);
  return _createClass(ProductRecommendations, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _classPrivateFieldGet(_intersectionObserver, this).observe(this);
      _classPrivateFieldGet(_mutationObserver, this).observe(this, {
        attributes: true
      });
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
function _loadRecommendations() {
  var _this2 = this;
  var _this$dataset = this.dataset,
    productId = _this$dataset.productId,
    recommendationsPerformed = _this$dataset.recommendationsPerformed,
    sectionId = _this$dataset.sectionId,
    intent = _this$dataset.intent;
  var id = this.id;
  if (!productId || !id) {
    throw new Error('Product ID and an ID attribute are required');
  }

  // If the recommendations have already been loaded, accounts for the case where the Theme Editor
  // is loaded the section from the editor's visual preview context.
  if (recommendationsPerformed === 'true') {
    return;
  }
  _assertClassBrand(_ProductRecommendations_brand, this, _fetchCachedRecommendations).call(this, productId, sectionId, intent).then(function (result) {
    if (!result.success) {
      // The Theme Editor will place a section element element in the DOM whose section_id is not available
      // to the Section Renderer API. In this case, we can safely ignore the error.
      if (!Shopify.designMode) {
        _assertClassBrand(_ProductRecommendations_brand, _this2, _handleError).call(_this2, new Error("Server returned ".concat(result.status)));
      }
      return;
    }
    var html = document.createElement('div');
    html.innerHTML = result.data || '';
    var recommendations = html.querySelector("product-recommendations[id=\"".concat(id, "\"]"));
    if (recommendations !== null && recommendations !== void 0 && recommendations.innerHTML && recommendations.innerHTML.trim().length) {
      _this2.dataset.recommendationsPerformed = 'true';
      _this2.innerHTML = recommendations.innerHTML;
    } else {
      _assertClassBrand(_ProductRecommendations_brand, _this2, _handleError).call(_this2, new Error('No recommendations available'));
    }
  }).catch(function (e) {
    _assertClassBrand(_ProductRecommendations_brand, _this2, _handleError).call(_this2, e);
  });
}
/**
 * Fetches the recommendations and cached the result for future use
 * @param {string} productId
 * @param {string | undefined} sectionId
 * @param {string | undefined} intent
 * @returns {Promise<{ success: true, data: string } | { success: false, status: number }>}
 */
function _fetchCachedRecommendations(_x, _x2, _x3) {
  return _fetchCachedRecommendations2.apply(this, arguments);
}
function _fetchCachedRecommendations2() {
  _fetchCachedRecommendations2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(productId, sectionId, intent) {
    var _classPrivateFieldGet2;
    var url, cachedResponse, response, text;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          url = "".concat(this.dataset.url, "&product_id=").concat(productId, "&section_id=").concat(sectionId, "&intent=").concat(intent);
          cachedResponse = _classPrivateFieldGet(_cachedRecommendations, this)[url];
          if (!cachedResponse) {
            _context.n = 1;
            break;
          }
          return _context.a(2, {
            success: true,
            data: cachedResponse
          });
        case 1:
          (_classPrivateFieldGet2 = _classPrivateFieldGet(_activeFetch, this)) === null || _classPrivateFieldGet2 === void 0 || _classPrivateFieldGet2.abort();
          _classPrivateFieldSet(_activeFetch, this, new AbortController());
          _context.p = 2;
          _context.n = 3;
          return fetch(url, {
            signal: _classPrivateFieldGet(_activeFetch, this).signal
          });
        case 3:
          response = _context.v;
          if (response.ok) {
            _context.n = 4;
            break;
          }
          return _context.a(2, {
            success: false,
            status: response.status
          });
        case 4:
          _context.n = 5;
          return response.text();
        case 5:
          text = _context.v;
          _classPrivateFieldGet(_cachedRecommendations, this)[url] = text;
          return _context.a(2, {
            success: true,
            data: text
          });
        case 6:
          _context.p = 6;
          _classPrivateFieldSet(_activeFetch, this, null);
          return _context.f(6);
        case 7:
          return _context.a(2);
      }
    }, _callee, this, [[2,, 6, 7]]);
  }));
  return _fetchCachedRecommendations2.apply(this, arguments);
}
/**
 * Handle errors in a consistent way
 * @param {Error} error
 */
function _handleError(error) {
  console.error('Product recommendations error:', error.message);
  this.classList.add('hidden');
  this.dataset.error = 'Error loading product recommendations';
}
if (!customElements.get('product-recommendations')) {
  customElements.define('product-recommendations', ProductRecommendations);
}
/******/ })()
;