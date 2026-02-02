/**
 * Quote Form Variant Input
 * Injects hidden inputs for product handle and selected variant options into .custom-quote-form forms
 */

(function () {
  const PRODUCT_HANDLE_INPUT_NAME = 'product-handle';
  const SELECTED_VARIANT_INPUT_NAME = 'selected-variant';

  /**
   * Gets the product handle from the page
   * @returns {string} The product handle or empty string
   */
  function getProductHandle() {
    // Try to get from URL path (e.g., /products/my-product)
    const pathMatch = window.location.pathname.match(/\/products\/([^/?#]+)/);
    if (pathMatch) {
      return pathMatch[1];
    }

    // Fallback: try to get from variant-picker data-product-url attribute
    const variantPicker = document.querySelector('variant-picker[data-product-url]');
    if (variantPicker) {
      const productUrl = variantPicker.dataset.productUrl;
      const urlMatch = productUrl?.match(/\/products\/([^/?#]+)/);
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
    const variantPicker = document.querySelector('variant-picker');
    if (!variantPicker) return 'default';

    const options = [];

    // Method 1: Handle button/swatch style (fieldsets with legend)
    const fieldsets = variantPicker.querySelectorAll('fieldset');
    fieldsets.forEach((fieldset) => {
      // Get the option name from the legend (first text node or direct text)
      const legend = fieldset.querySelector('legend');
      if (!legend) return;

      // Get only the direct text content of legend, not child elements
      let optionName = '';
      legend.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          optionName += node.textContent;
        }
      });
      optionName = optionName.trim();

      // Get the selected value from checked input
      const checkedInput = fieldset.querySelector('input:checked');
      if (checkedInput && optionName) {
        const selectedValue = checkedInput.value || '';
        if (selectedValue) {
          options.push(`${optionName}: ${selectedValue}`);
        }
      }
    });

    // Method 2: Handle dropdown style (div.variant-option--dropdowns)
    const dropdowns = variantPicker.querySelectorAll('.variant-option--dropdowns');
    dropdowns.forEach((dropdown) => {
      // Get the option name from the label > b element
      const label = dropdown.querySelector('label b');
      const optionName = label?.textContent?.trim() || '';

      // Get the selected value from the select element
      const select = dropdown.querySelector('select');
      if (select && optionName) {
        const selectedOption = select.options[select.selectedIndex];
        let selectedValue = selectedOption?.textContent?.trim() || '';
        // Remove " - Unavailable" suffix if present
        selectedValue = selectedValue.replace(/\s*-\s*(Unavailable|unavailable)$/, '');
        if (selectedValue) {
          options.push(`${optionName}: ${selectedValue}`);
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
    const input = document.createElement('input');
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
    let handleInput = form.querySelector(`input[name="${PRODUCT_HANDLE_INPUT_NAME}"]`);
    if (!handleInput) {
      handleInput = createHiddenInput(PRODUCT_HANDLE_INPUT_NAME, productHandle);
      form.insertBefore(handleInput, form.firstChild);
    } else {
      handleInput.value = productHandle;
    }

    // Selected variant input
    let variantInput = form.querySelector(`input[name="${SELECTED_VARIANT_INPUT_NAME}"]`);
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
    const quoteForms = document.querySelectorAll('.custom-quote-form form');
    if (quoteForms.length === 0) return;

    const productHandle = getProductHandle();
    const variantValue = getSelectedVariantOptions();

    quoteForms.forEach((form) => {
      injectInputs(form, productHandle, variantValue);
    });
  }

  /**
   * Updates variant value in all quote forms
   */
  function updateVariantInForms() {
    const quoteForms = document.querySelectorAll('.custom-quote-form form');
    const variantValue = getSelectedVariantOptions();
    const productHandle = getProductHandle();

    quoteForms.forEach((form) => {
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
    document.addEventListener('variant:update', () => {
      // Delay to ensure DOM is updated with new checked state
      setTimeout(updateVariantInForms, 100);
    });

    // Also listen for variant selected event (fires earlier)
    document.addEventListener('variant:selected', () => {
      setTimeout(updateVariantInForms, 100);
    });

    // Listen for change events on variant picker directly
    document.addEventListener('change', (event) => {
      const target = event.target;
      if (target.closest('variant-picker')) {
        setTimeout(updateVariantInForms, 50);
      }
    });

    // Listen for dialog open events (from dialog.js DialogOpenEvent)
    document.addEventListener('dialog:open', () => {
      // Small delay to ensure the dialog content is rendered
      setTimeout(updateAllQuoteForms, 100);
    });

    // Handle dynamically added forms (e.g., when dialog opens)
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = /** @type {Element} */ (node);
            if (
              element.classList?.contains('custom-quote-form') ||
              element.querySelector?.('.custom-quote-form form')
            ) {
              shouldUpdate = true;
            }
          }
        });

        // Also check for attribute changes on dialogs (open state)
        if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
          const target = mutation.target;
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
      attributeFilter: ['open'],
    });
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
