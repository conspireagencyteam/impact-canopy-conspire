/**
 * Static Form Properties
 * Collects values from static form fields (outside the product form)
 * and injects them as cart line item properties during add to cart.
 *
 * Listens for 'cart:add-properties' event dispatched by product-form.js
 */

// Store uploaded file URLs
const uploadedFiles = new Map();

/**
 * Uploads a file to Shopify's file upload endpoint
 * @param {File} file - The file to upload
 * @returns {Promise<string|null>} The uploaded file URL or null if failed
 */
async function uploadFileToShopify(file) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('/cart/prepare', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('File upload failed');
    }

    const data = await response.json();
    return data.url || null;
  } catch (error) {
    console.error('Error uploading file:', error);
    return null;
  }
}

/**
 * Handles file input change - uploads file immediately
 * @param {Event} event - The change event
 */
async function handleFileChange(event) {
  const input = event.target;
  const propertyName = input.getAttribute('data-cart-property-file');
  if (!propertyName) return;

  const file = input.files?.[0];
  if (!file) {
    uploadedFiles.delete(input.id);
    return;
  }

  // Upload file to Shopify
  const fileUrl = await uploadFileToShopify(file);
  if (fileUrl) {
    uploadedFiles.set(input.id, { propertyName, url: fileUrl });
  } else {
    uploadedFiles.delete(input.id);
    console.error('Failed to upload file:', file.name);
  }
}

/**
 * Collects all cart properties from static form fields
 * @returns {Object} Object containing property name-value pairs
 */
function collectCartProperties() {
  const properties = {};

  // Find all elements with data-cart-property attribute (text inputs, textareas, date inputs)
  const propertyElements = document.querySelectorAll('[data-cart-property]');

  propertyElements.forEach((element) => {
    const propertyName = element.getAttribute('data-cart-property');
    if (!propertyName) return;

    // Skip disabled elements
    if (element.disabled) return;

    // For text inputs, textareas, date inputs, etc.
    const value = element.value?.trim() || '';

    // Only add non-empty values
    if (value) {
      properties[propertyName] = value;
    }
  });

  // Add uploaded file URLs
  uploadedFiles.forEach(({ propertyName, url }) => {
    properties[propertyName] = url;
  });

  return properties;
}

/**
 * Injects cart properties into FormData
 * @param {FormData} formData - The form data to inject properties into
 * @param {Object} properties - Object containing property name-value pairs
 */
function injectPropertiesToFormData(formData, properties) {
  Object.entries(properties).forEach(([name, value]) => {
    formData.append(`properties[${name}]`, value);
  });
}

/**
 * Handles the cart:add-properties event
 * @param {CustomEvent} event - The custom event with formData in detail
 */
function handleAddProperties(event) {
  const { formData } = event.detail;
  if (!formData) return;

  const properties = collectCartProperties();
  injectPropertiesToFormData(formData, properties);
}

/**
 * Initialize file upload listeners
 */
function initFileUploads() {
  const fileInputs = document.querySelectorAll('[data-cart-property-file]');
  fileInputs.forEach((input) => {
    input.addEventListener('change', handleFileChange);
  });
}

// Listen for the cart:add-properties event on document
document.addEventListener('cart:add-properties', handleAddProperties);

// Initialize file uploads when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFileUploads);
} else {
  initFileUploads();
}
