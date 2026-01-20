/******/ (() => { // webpackBootstrap
/*!******************************************!*\
  !*** ./src/scripts/product-card-link.js ***!
  \******************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _handleClick = /*#__PURE__*/new WeakMap();
var _ProductCardLink_brand = /*#__PURE__*/new WeakSet();
// Create a new custom element for product links with images for transitions to PDP
var ProductCardLink = /*#__PURE__*/function (_HTMLElement) {
  function ProductCardLink() {
    var _this;
    _classCallCheck(this, ProductCardLink);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ProductCardLink, [].concat(args));
    /**
     * Sets the srcset for the image
     * @param {HTMLImageElement} image
     */
    _classPrivateMethodInitSpec(_this, _ProductCardLink_brand);
    /**
     * Handles the click event for the product link
     * @param {Event} event
     */
    _classPrivateFieldInitSpec(_this, _handleClick, function (event) {
      // If the event has been prevented, don't do anything, another component is handling the click
      if (event.defaultPrevented) return;

      // If the event was on an interactive element, don't do anything, this is not a navigation
      if (event.target instanceof Element) {
        var interactiveElement = event.target.closest('button, input, label, select, [tabindex="1"]');
        if (interactiveElement) return;
      }
      var gallery = _this.querySelector('[data-view-transition-to-main-product]');
      if (!_this.productTransitionEnabled || !(gallery instanceof HTMLElement)) return;

      // Check on the current active image, whether it's a product card image or a resource card image
      var activeImage = gallery.querySelector('slideshow-slide[aria-hidden="false"] [transitionToProduct="true"]') || gallery.querySelector('[transitionToProduct="true"]:last-child');
      if (activeImage instanceof HTMLImageElement) _assertClassBrand(_ProductCardLink_brand, _this, _setImageSrcset).call(_this, activeImage);
      gallery.setAttribute('data-view-transition-type', 'product-image-transition');
      gallery.setAttribute('data-view-transition-triggered', 'true');
    });
    return _this;
  }
  _inherits(ProductCardLink, _HTMLElement);
  return _createClass(ProductCardLink, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.addEventListener('click', _classPrivateFieldGet(_handleClick, this));
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.removeEventListener('click', _classPrivateFieldGet(_handleClick, this));
    }
  }, {
    key: "productTransitionEnabled",
    get: function get() {
      return this.getAttribute('data-product-transition') === 'true';
    }
  }, {
    key: "featuredMediaUrl",
    get: function get() {
      return this.getAttribute('data-featured-media-url');
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
function _setImageSrcset(image) {
  var _this2 = this;
  if (!this.featuredMediaUrl) return;
  var currentImageUrl = new URL(image.currentSrc);

  // Deliberately not using origin, as it includes the protocol, which is usually skipped for featured media
  var currentImageRawUrl = currentImageUrl.host + currentImageUrl.pathname;
  if (!this.featuredMediaUrl.includes(currentImageRawUrl)) {
    var imageFade = image.animate([{
      opacity: 0.8
    }, {
      opacity: 1
    }], {
      duration: 125,
      easing: 'ease-in-out'
    });
    imageFade.onfinish = function () {
      var _this2$featuredMediaU;
      image.srcset = (_this2$featuredMediaU = _this2.featuredMediaUrl) !== null && _this2$featuredMediaU !== void 0 ? _this2$featuredMediaU : '';
    };
  }
}
if (!customElements.get('product-card-link')) {
  customElements.define('product-card-link', ProductCardLink);
}
/******/ })()
;