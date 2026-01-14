/**
 * CountrySelector - Handles country and province selection
 */
class CountrySelector {
  constructor(countrySelect, provinceSelect) {
    this.countrySelect = countrySelect;
    this.provinceSelect = provinceSelect;

    if (this.countrySelect && this.provinceSelect) {
      this._attachListeners();
      this._initSelectors();
    }
  }

  destroy() {
    if (this.countrySelect) {
      this.countrySelect.removeEventListener('change', this._onCountryChangedListener);
    }
  }

  _initSelectors() {
    // Check first the default value of country
    const defaultCountry = this.countrySelect.getAttribute('data-default');

    if (defaultCountry) {
      for (let i = 0; i !== this.countrySelect.options.length; ++i) {
        if (this.countrySelect.options[i].text === defaultCountry) {
          this.countrySelect.selectedIndex = i;
          break;
        }
      }
    } else {
      this.countrySelect.selectedIndex = 0;
    }

    const event = new Event('change', { bubbles: true });
    this.countrySelect.dispatchEvent(event);

    // Then the province
    const defaultProvince = this.provinceSelect.getAttribute('data-default');

    if (defaultProvince) {
      this.provinceSelect.value = defaultProvince;
    }
  }

  _attachListeners() {
    this._onCountryChangedListener = this._onCountryChanged.bind(this);
    this.countrySelect.addEventListener('change', this._onCountryChangedListener);
  }

  _onCountryChanged() {
    const selectedOption = this.countrySelect.options[this.countrySelect.selectedIndex];

    if (!selectedOption) {
      return;
    }

    const provinces = JSON.parse(selectedOption.getAttribute('data-provinces') || '[]');

    // First remove all options
    this.provinceSelect.innerHTML = '';

    if (provinces.length === 0) {
      this.provinceSelect.closest('.form__input-wrapper').style.display = 'none';
      return;
    }

    // We need to build the provinces array
    provinces.forEach((data) => {
      this.provinceSelect.options.add(new Option(data[1], data[0]));
    });

    this.provinceSelect.closest('.form__input-wrapper').style.display = 'block';
  }
}

/**
 * ShippingEstimator - Handles shipping rate estimation
 */
class ShippingEstimator {
  constructor(element, options = {}) {
    this.element = element;
    this.options = options;
    this.countrySelector = new CountrySelector(
      this.element.querySelector('[name="country"]'),
      this.element.querySelector('[name="province"]')
    );

    this._attachListeners();
  }

  destroy() {
    this.element.removeEventListener('click', this._clickHandler);
    this.countrySelector.destroy();
  }

  _attachListeners() {
    this._clickHandler = (event) => {
      if (event.target.closest('[data-action="estimate-shipping"]')) {
        this._fetchRates();
      }
    };
    this.element.addEventListener('click', this._clickHandler);
  }

  _fetchRates() {
    document.dispatchEvent(new CustomEvent('theme:loading:start'));

    if (this.options['singleProduct']) {
      this._fetchRatesForProduct();
    } else {
      this._fetchRatesForCart();
    }
  }

  _fetchRatesForCart() {
    const country = this.element.querySelector('[name="country"]').value;
    const province = this.element.querySelector('[name="province"]').value;
    const zip = this.element.querySelector('[name="zip"]').value;

    const localeRootUrl = window.theme?.localeRootUrl || '';

    fetch(
      `${localeRootUrl}/cart/shipping_rates.json?shipping_address[zip]=${zip}&shipping_address[country]=${country}&shipping_address[province]=${province}`,
      {
        credentials: 'same-origin',
        method: 'GET',
      }
    ).then((response) => {
      document.dispatchEvent(new CustomEvent('theme:loading:end'));

      response.json().then((result) => {
        this._formatResults(response.ok, result);
      });
    });
  }

  /**
   * Technique is coming from this website: https://freakdesign.com.au/blogs/news/get-shipping-estimates-on-a-product-page
   */
  _fetchRatesForProduct() {
    // grab the current cookie for the cart and we store it
    const cartCookie = this._getCookie('cart');
    const tempCookieValue = 'temp-cart-cookie___' + Date.now() + parseInt(Math.random() * 1000);
    const fakeCookieValue = 'fake-cart-cookie___' + Date.now() + parseInt(Math.random() * 1000);

    // if not found, make a new temp cookie
    if (!cartCookie) {
      this._updateCartCookie(tempCookieValue);
      cartCookie = this._getCookie('cart');
    }

    // if found but has a weird length, bail
    if (cartCookie.length < 32) {
      return;
    }

    // change the cookie value to a new 32 character value
    this._updateCartCookie(fakeCookieValue);

    // add the product to our fake cart
    const formElement = document.querySelector('form[action*="/cart/add"]');
    const localeRootUrl = window.theme?.localeRootUrl || '';

    fetch(`${localeRootUrl}/cart/add.js`, {
      body: JSON.stringify(this._serializeForm(formElement)),
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest', // This is needed as currently there is a bug in Shopify that assumes this header
      },
      method: 'POST',
    })
      .then((response) => {
        response.json().then(() => {
          const country = this.element.querySelector('[name="country"]').value;
          const province = this.element.querySelector('[name="province"]').value;
          const zip = this.element.querySelector('[name="zip"]').value;

          fetch(
            `${localeRootUrl}/cart/shipping_rates.json?shipping_address[zip]=${zip}&shipping_address[country]=${country}&shipping_address[province]=${province}`,
            {
              credentials: 'same-origin',
              method: 'GET',
            }
          )
            .then((response) => {
              document.dispatchEvent(new CustomEvent('theme:loading:end'));

              response.json().then((result) => {
                this._formatResults(response.ok, result);
              });

              this._updateCartCookie(cartCookie); // We can restore the cookie
            })
            .catch(() => {
              this._updateCartCookie(cartCookie);
            });
        });
      })
      .catch(() => {
        // We have error so we have to reset cookie
        this._updateCartCookie(cartCookie);
        document.dispatchEvent(new CustomEvent('theme:loading:end'));
      });
  }

  _formatResults(isOk, results) {
    const resultsElement = this.element.querySelector('.shipping-estimator__results');

    resultsElement.innerHTML = '';

    if (isOk) {
      const shippingRates = results['shipping_rates'];

      if (shippingRates.length === 0) {
        resultsElement.innerHTML = '<p>' + window.languages.shippingEstimatorNoResults + '</p>';
      } else {
        if (shippingRates.length === 1) {
          resultsElement.innerHTML = '<p>' + window.languages.shippingEstimatorOneResult + '</p>';
        } else {
          resultsElement.innerHTML =
            '<p>' +
            window.languages.shippingEstimatorMultipleResults.replace('{{count}}', shippingRates.length) +
            '</p>';
        }

        let listRatesHtml = '';

        shippingRates.forEach((item) => {
          listRatesHtml +=
            '<li>' + item['name'] + ': ' + this._formatMoney(item['price'], window.theme.moneyFormat) + '</li>';
        });

        resultsElement.innerHTML += '<ul>' + listRatesHtml + '</ul>';
      }
    } else {
      resultsElement.innerHTML = '<p>' + window.languages.shippingEstimatorErrors + '</p>';

      let errorHtml = '';

      Object.keys(results).forEach((key) => {
        errorHtml += '<li class="alert__list-item">' + key + ' ' + results[key] + '</li>';
      });

      resultsElement.innerHTML += '<ul>' + errorHtml + '</ul>';
    }

    resultsElement.style.display = 'block';
  }

  _getCookie(name) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');

    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }

  _updateCartCookie(value) {
    const date = new Date();
    date.setTime(date.getTime() + 14 * 86400000);

    document.cookie = 'cart=' + value + '; expires=' + date.toUTCString() + '; path=/';
  }

  _serializeForm(form) {
    const formData = new FormData(form);
    const object = {};

    formData.forEach((value, key) => {
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

  _formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }

    let value = '';
    const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    const formatString = format || '${{amount}}';

    function formatWithDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ',';
      decimal = decimal || '.';

      if (isNaN(number) || number === null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      const parts = number.split('.');
      const dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      const centsAmount = parts[1] ? decimal + parts[1] : '';

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
}

// Initialize shipping estimators when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const shippingEstimators = document.querySelectorAll('.shipping-estimator');

  shippingEstimators.forEach((element) => {
    const singleProduct = element.closest('[data-section-type="product"]') !== null;
    new ShippingEstimator(element, { singleProduct });
  });
});

export default ShippingEstimator;
