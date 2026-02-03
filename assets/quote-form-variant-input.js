/******/ (() => { // webpackBootstrap
/*!*************************************************!*\
  !*** ./src/scripts/quote-form-variant-input.js ***!
  \*************************************************/
/**
 * Quote Form Variant Input
 * Injects hidden inputs for product handle and selected variant options into .custom-quote-form forms
 */

(function () {
  var PRODUCT_HANDLE_INPUT_NAME = 'product-handle';
  var SELECTED_VARIANT_INPUT_NAME = 'selected-variant';

  /**
   * Gets the product handle from the page
   * @returns {string} The product handle or empty string
   */
  function getProductHandle() {
    // Try to get from URL path (e.g., /products/my-product)
    var pathMatch = window.location.pathname.match(/\/products\/([^/?#]+)/);
    if (pathMatch) {
      return pathMatch[1];
    }

    // Fallback: try to get from variant-picker data-product-url attribute
    var variantPicker = document.querySelector('variant-picker[data-product-url]');
    if (variantPicker) {
      var productUrl = variantPicker.dataset.productUrl;
      var urlMatch = productUrl === null || productUrl === void 0 ? void 0 : productUrl.match(/\/products\/([^/?#]+)/);
      if (urlMatch) {
        return urlMatch[1];
      }
    }
    return '';
  }

  /**
   * Gets the selected variant options from the variant picker
   * Returns a string like "Frame Type: Industrial Aluminium - ML Series, Color: Red"
   * @returns {string} The formatted variant options string
   */
  function getSelectedVariantOptions() {
    var variantPicker = document.querySelector('variant-picker');
    if (!variantPicker) return 'default';
    var options = [];

    // Method 1: Handle button/swatch style (fieldsets with legend)
    var fieldsets = variantPicker.querySelectorAll('fieldset');
    fieldsets.forEach(function (fieldset) {
      // Get the option name from the legend (first text node or direct text)
      var legend = fieldset.querySelector('legend');
      if (!legend) return;

      // Get only the direct text content of legend, not child elements
      var optionName = '';
      legend.childNodes.forEach(function (node) {
        if (node.nodeType === Node.TEXT_NODE) {
          optionName += node.textContent;
        }
      });
      optionName = optionName.trim();

      // Get the selected value from checked input
      var checkedInput = fieldset.querySelector('input:checked');
      if (checkedInput && optionName) {
        var selectedValue = checkedInput.value || '';
        if (selectedValue) {
          options.push("".concat(optionName, ": ").concat(selectedValue));
        }
      }
    });

    // Method 2: Handle dropdown style (div.variant-option--dropdowns)
    var dropdowns = variantPicker.querySelectorAll('.variant-option--dropdowns');
    dropdowns.forEach(function (dropdown) {
      var _label$textContent;
      // Get the option name from the label > b element
      var label = dropdown.querySelector('label b');
      var optionName = (label === null || label === void 0 || (_label$textContent = label.textContent) === null || _label$textContent === void 0 ? void 0 : _label$textContent.trim()) || '';

      // Get the selected value from the select element
      var select = dropdown.querySelector('select');
      if (select && optionName) {
        var _selectedOption$textC;
        var selectedOption = select.options[select.selectedIndex];
        var selectedValue = (selectedOption === null || selectedOption === void 0 || (_selectedOption$textC = selectedOption.textContent) === null || _selectedOption$textC === void 0 ? void 0 : _selectedOption$textC.trim()) || '';
        // Remove " - Unavailable" suffix if present
        selectedValue = selectedValue.replace(/\s*-\s*(Unavailable|unavailable)$/, '');
        if (selectedValue) {
          options.push("".concat(optionName, ": ").concat(selectedValue));
        }
      }
    });
    return options.length > 0 ? options.join(', ') : 'default';
  }

  /**
   * Creates a hidden input element
   * @param {string} name - The input name
   * @param {string} value - The input value
   * @returns {HTMLInputElement} The created input element
   */
  function createHiddenInput(name, value) {
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    return input;
  }

  /**
   * Injects or updates hidden inputs in a form
   * @param {HTMLFormElement} form - The form element
   * @param {string} productHandle - The product handle
   * @param {string} variantValue - The variant options string
   */
  function injectInputs(form, productHandle, variantValue) {
    // Product handle input
    var handleInput = form.querySelector("input[name=\"".concat(PRODUCT_HANDLE_INPUT_NAME, "\"]"));
    if (!handleInput) {
      handleInput = createHiddenInput(PRODUCT_HANDLE_INPUT_NAME, productHandle);
      form.insertBefore(handleInput, form.firstChild);
    } else {
      handleInput.value = productHandle;
    }

    // Selected variant input
    var variantInput = form.querySelector("input[name=\"".concat(SELECTED_VARIANT_INPUT_NAME, "\"]"));
    if (!variantInput) {
      variantInput = createHiddenInput(SELECTED_VARIANT_INPUT_NAME, variantValue);
      form.insertBefore(variantInput, form.firstChild);
    } else {
      variantInput.value = variantValue;
    }
  }

  /**
   * Updates all quote forms with current product/variant data
   */
  function updateAllQuoteForms() {
    var quoteForms = document.querySelectorAll('.custom-quote-form form');
    if (quoteForms.length === 0) return;
    var productHandle = getProductHandle();
    var variantValue = getSelectedVariantOptions();
    quoteForms.forEach(function (form) {
      injectInputs(form, productHandle, variantValue);
    });
  }

  /**
   * Updates variant value in all quote forms
   */
  function updateVariantInForms() {
    var quoteForms = document.querySelectorAll('.custom-quote-form form');
    var variantValue = getSelectedVariantOptions();
    var productHandle = getProductHandle();
    quoteForms.forEach(function (form) {
      injectInputs(form, productHandle, variantValue);
    });
  }

  /**
   * Initialize the script
   */
  function init() {
    // Initial injection on page load (with delay to ensure variant picker is ready)
    setTimeout(updateAllQuoteForms, 100);

    // Listen for variant updates (from variant-picker.js)
    document.addEventListener('variant:update', function () {
      // Delay to ensure DOM is updated with new checked state
      setTimeout(updateVariantInForms, 100);
    });

    // Also listen for variant selected event (fires earlier)
    document.addEventListener('variant:selected', function () {
      setTimeout(updateVariantInForms, 100);
    });

    // Listen for change events on variant picker directly
    document.addEventListener('change', function (event) {
      var target = event.target;
      if (target.closest('variant-picker')) {
        setTimeout(updateVariantInForms, 50);
      }
    });

    // Listen for dialog open events (from dialog.js DialogOpenEvent)
    document.addEventListener('dialog:open', function () {
      // Small delay to ensure the dialog content is rendered
      setTimeout(updateAllQuoteForms, 100);
    });

    // Handle dynamically added forms (e.g., when dialog opens)
    var observer = new MutationObserver(function (mutations) {
      var shouldUpdate = false;
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            var _element$classList, _element$querySelecto;
            var element = /** @type {Element} */node;
            if ((_element$classList = element.classList) !== null && _element$classList !== void 0 && _element$classList.contains('custom-quote-form') || (_element$querySelecto = element.querySelector) !== null && _element$querySelecto !== void 0 && _element$querySelecto.call(element, '.custom-quote-form form')) {
              shouldUpdate = true;
            }
          }
        });

        // Also check for attribute changes on dialogs (open state)
        if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
          var target = mutation.target;
          if (target.tagName === 'DIALOG' && target.hasAttribute('open')) {
            shouldUpdate = true;
          }
        }
      });
      if (shouldUpdate) {
        setTimeout(updateAllQuoteForms, 100);
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['open']
    });
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
/******/ })()
;