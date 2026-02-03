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
/*!*******************************************!*\
  !*** ./src/scripts/shipping-estimator.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * CountrySelector - Handles country and province selection
 */
var CountrySelector = /*#__PURE__*/function () {
  function CountrySelector(countrySelect, provinceSelect) {
    _classCallCheck(this, CountrySelector);
    this.countrySelect = countrySelect;
    this.provinceSelect = provinceSelect;
    if (this.countrySelect && this.provinceSelect) {
      this._attachListeners();
      this._initSelectors();
    }
  }
  return _createClass(CountrySelector, [{
    key: "destroy",
    value: function destroy() {
      if (this.countrySelect) {
        this.countrySelect.removeEventListener('change', this._onCountryChangedListener);
      }
    }
  }, {
    key: "_initSelectors",
    value: function _initSelectors() {
      // Check first the default value of country
      var defaultCountry = this.countrySelect.getAttribute('data-default');
      if (defaultCountry) {
        for (var i = 0; i !== this.countrySelect.options.length; ++i) {
          if (this.countrySelect.options[i].text === defaultCountry) {
            this.countrySelect.selectedIndex = i;
            break;
          }
        }
      } else {
        this.countrySelect.selectedIndex = 0;
      }
      var event = new Event('change', {
        bubbles: true
      });
      this.countrySelect.dispatchEvent(event);

      // Then the province
      var defaultProvince = this.provinceSelect.getAttribute('data-default');
      if (defaultProvince) {
        this.provinceSelect.value = defaultProvince;
      }
    }
  }, {
    key: "_attachListeners",
    value: function _attachListeners() {
      this._onCountryChangedListener = this._onCountryChanged.bind(this);
      this.countrySelect.addEventListener('change', this._onCountryChangedListener);
    }
  }, {
    key: "_onCountryChanged",
    value: function _onCountryChanged() {
      var _this = this;
      var selectedOption = this.countrySelect.options[this.countrySelect.selectedIndex];
      if (!selectedOption) {
        return;
      }
      var provinces = JSON.parse(selectedOption.getAttribute('data-provinces') || '[]');

      // First remove all options
      this.provinceSelect.innerHTML = '';
      if (provinces.length === 0) {
        this.provinceSelect.closest('.form__input-wrapper').style.display = 'none';
        return;
      }

      // We need to build the provinces array
      provinces.forEach(function (data) {
        _this.provinceSelect.options.add(new Option(data[1], data[0]));
      });
      this.provinceSelect.closest('.form__input-wrapper').style.display = 'block';
    }
  }]);
}();
/**
 * ShippingEstimator - Handles shipping rate estimation
 */
var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, ShippingEstimator);
    this.element = element;
    this.options = options;
    this.countrySelector = new CountrySelector(this.element.querySelector('[name="country"]'), this.element.querySelector('[name="province"]'));
    this._attachListeners();
  }
  return _createClass(ShippingEstimator, [{
    key: "destroy",
    value: function destroy() {
      this.element.removeEventListener('click', this._clickHandler);
      this.countrySelector.destroy();
    }
  }, {
    key: "_attachListeners",
    value: function _attachListeners() {
      var _this2 = this;
      this._clickHandler = function (event) {
        if (event.target.closest('[data-action="estimate-shipping"]')) {
          _this2._fetchRates();
        }
      };
      this.element.addEventListener('click', this._clickHandler);
    }
  }, {
    key: "_fetchRates",
    value: function _fetchRates() {
      document.dispatchEvent(new CustomEvent('theme:loading:start'));
      if (this.options['singleProduct']) {
        this._fetchRatesForProduct();
      } else {
        this._fetchRatesForCart();
      }
    }
  }, {
    key: "_fetchRatesForCart",
    value: function _fetchRatesForCart() {
      var _window$theme,
        _this3 = this;
      var country = this.element.querySelector('[name="country"]').value;
      var province = this.element.querySelector('[name="province"]').value;
      var zip = this.element.querySelector('[name="zip"]').value;
      var localeRootUrl = ((_window$theme = window.theme) === null || _window$theme === void 0 ? void 0 : _window$theme.localeRootUrl) || '';
      fetch("".concat(localeRootUrl, "/cart/shipping_rates.json?shipping_address[zip]=").concat(zip, "&shipping_address[country]=").concat(country, "&shipping_address[province]=").concat(province), {
        credentials: 'same-origin',
        method: 'GET'
      }).then(function (response) {
        document.dispatchEvent(new CustomEvent('theme:loading:end'));
        response.json().then(function (result) {
          _this3._formatResults(response.ok, result);
        });
      });
    }

    /**
     * Technique is coming from this website: https://freakdesign.com.au/blogs/news/get-shipping-estimates-on-a-product-page
     */
  }, {
    key: "_fetchRatesForProduct",
    value: function _fetchRatesForProduct() {
      var _window$theme2,
        _this4 = this;
      // grab the current cookie for the cart and we store it
      var cartCookie = this._getCookie('cart');
      var tempCookieValue = 'temp-cart-cookie___' + Date.now() + parseInt(Math.random() * 1000);
      var fakeCookieValue = 'fake-cart-cookie___' + Date.now() + parseInt(Math.random() * 1000);

      // if not found, make a new temp cookie
      if (!cartCookie) {
        this._updateCartCookie(tempCookieValue);
        this._getCookie('cart'), _readOnlyError("cartCookie");
      }

      // if found but has a weird length, bail
      if (cartCookie.length < 32) {
        return;
      }

      // change the cookie value to a new 32 character value
      this._updateCartCookie(fakeCookieValue);

      // add the product to our fake cart
      var formElement = document.querySelector('form[action*="/cart/add"]');
      var localeRootUrl = ((_window$theme2 = window.theme) === null || _window$theme2 === void 0 ? void 0 : _window$theme2.localeRootUrl) || '';
      fetch("".concat(localeRootUrl, "/cart/add.js"), {
        body: JSON.stringify(this._serializeForm(formElement)),
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
        },
        method: 'POST'
      }).then(function (response) {
        response.json().then(function () {
          var country = _this4.element.querySelector('[name="country"]').value;
          var province = _this4.element.querySelector('[name="province"]').value;
          var zip = _this4.element.querySelector('[name="zip"]').value;
          fetch("".concat(localeRootUrl, "/cart/shipping_rates.json?shipping_address[zip]=").concat(zip, "&shipping_address[country]=").concat(country, "&shipping_address[province]=").concat(province), {
            credentials: 'same-origin',
            method: 'GET'
          }).then(function (response) {
            document.dispatchEvent(new CustomEvent('theme:loading:end'));
            response.json().then(function (result) {
              _this4._formatResults(response.ok, result);
            });
            _this4._updateCartCookie(cartCookie); // We can restore the cookie
          }).catch(function () {
            _this4._updateCartCookie(cartCookie);
          });
        });
      }).catch(function () {
        // We have error so we have to reset cookie
        _this4._updateCartCookie(cartCookie);
        document.dispatchEvent(new CustomEvent('theme:loading:end'));
      });
    }
  }, {
    key: "_formatResults",
    value: function _formatResults(isOk, results) {
      var _this5 = this;
      var resultsElement = this.element.querySelector('.shipping-estimator__results');
      resultsElement.innerHTML = '';
      if (isOk) {
        var shippingRates = results['shipping_rates'];
        if (shippingRates.length === 0) {
          resultsElement.innerHTML = '<p>' + window.languages.shippingEstimatorNoResults + '</p>';
        } else {
          if (shippingRates.length === 1) {
            resultsElement.innerHTML = '<p>' + window.languages.shippingEstimatorOneResult + '</p>';
          } else {
            resultsElement.innerHTML = '<p>' + window.languages.shippingEstimatorMultipleResults.replace('{{count}}', shippingRates.length) + '</p>';
          }
          var listRatesHtml = '';
          shippingRates.forEach(function (item) {
            listRatesHtml += '<li>' + item['name'] + ': ' + _this5._formatMoney(item['price'], window.theme.moneyFormat) + '</li>';
          });
          resultsElement.innerHTML += '<ul>' + listRatesHtml + '</ul>';
        }
      } else {
        resultsElement.innerHTML = '<p>' + window.languages.shippingEstimatorErrors + '</p>';
        var errorHtml = '';
        Object.keys(results).forEach(function (key) {
          errorHtml += '<li class="alert__list-item">' + key + ' ' + results[key] + '</li>';
        });
        resultsElement.innerHTML += '<ul>' + errorHtml + '</ul>';
      }
      resultsElement.style.display = 'block';
    }
  }, {
    key: "_getCookie",
    value: function _getCookie(name) {
      var value = '; ' + document.cookie;
      var parts = value.split('; ' + name + '=');
      if (parts.length === 2) {
        return parts.pop().split(';').shift();
      }
    }
  }, {
    key: "_updateCartCookie",
    value: function _updateCartCookie(value) {
      var date = new Date();
      date.setTime(date.getTime() + 14 * 86400000);
      document.cookie = 'cart=' + value + '; expires=' + date.toUTCString() + '; path=/';
    }
  }, {
    key: "_serializeForm",
    value: function _serializeForm(form) {
      var formData = new FormData(form);
      var object = {};
      formData.forEach(function (value, key) {
        if (object[key]) {
          if (!Array.isArray(object[key])) {
            object[key] = [object[key]];
          }
          object[key].push(value);
        } else {
          object[key] = value;
        }
      });
      return object;
    }
  }, {
    key: "_formatMoney",
    value: function _formatMoney(cents, format) {
      if (typeof cents === 'string') {
        cents = cents.replace('.', '');
      }
      var value = '';
      var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
      var formatString = format || '${{amount}}';
      function formatWithDelimiters(number, precision, thousands, decimal) {
        thousands = thousands || ',';
        decimal = decimal || '.';
        if (isNaN(number) || number === null) {
          return 0;
        }
        number = (number / 100.0).toFixed(precision);
        var parts = number.split('.');
        var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
        var centsAmount = parts[1] ? decimal + parts[1] : '';
        return dollarsAmount + centsAmount;
      }
      switch (formatString.match(placeholderRegex)[1]) {
        case 'amount':
          value = formatWithDelimiters(cents, 2);
          break;
        case 'amount_no_decimals':
          value = formatWithDelimiters(cents, 0);
          break;
        case 'amount_with_comma_separator':
          value = formatWithDelimiters(cents, 2, '.', ',');
          break;
        case 'amount_no_decimals_with_comma_separator':
          value = formatWithDelimiters(cents, 0, '.', ',');
          break;
        case 'amount_no_decimals_with_space_separator':
          value = formatWithDelimiters(cents, 0, ' ');
          break;
        case 'amount_with_apostrophe_separator':
          value = formatWithDelimiters(cents, 2, "'");
          break;
      }
      return formatString.replace(placeholderRegex, value);
    }
  }]);
}(); // Initialize shipping estimators when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  var shippingEstimators = document.querySelectorAll('.shipping-estimator');
  shippingEstimators.forEach(function (element) {
    var singleProduct = element.closest('[data-section-type="product"]') !== null;
    new ShippingEstimator(element, {
      singleProduct: singleProduct
    });
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShippingEstimator);
/******/ })()
;