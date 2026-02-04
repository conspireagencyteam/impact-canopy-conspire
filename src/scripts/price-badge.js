import { ThemeEvents, VariantUpdateEvent } from '@theme/events';

/**
 * A custom element that displays a price badge (save amount/percentage).
 * This component listens for variant update events and updates the badge accordingly.
 */
class PriceBadge extends HTMLElement {
  connectedCallback() {
    const closestSection = this.closest('.shopify-section, dialog');
    if (!closestSection) return;
    closestSection.addEventListener(ThemeEvents.variantUpdate, this.updateBadge);
  }

  disconnectedCallback() {
    const closestSection = this.closest('.shopify-section, dialog');
    if (!closestSection) return;
    closestSection.removeEventListener(ThemeEvents.variantUpdate, this.updateBadge);
  }

  /**
   * Updates the badge.
   * @param {VariantUpdateEvent} event - The variant update event.
   */
  updateBadge = (event) => {
    if (event.detail.data.newProduct) {
      this.dataset.productId = event.detail.data.newProduct.id;
    } else if (event.target instanceof HTMLElement && event.target.dataset.productId !== this.dataset.productId) {
      return;
    }

    // Find the matching price-badge element from the new HTML by block ID
    const blockId = this.dataset.blockId;
    let newBadgeContainer = null;

    if (blockId) {
      newBadgeContainer = event.detail.data.html.querySelector(`price-badge[data-block-id="${blockId}"] [ref="badgeContainer"]`);
    }

    // Fallback to first price-badge if no block ID match found
    if (!newBadgeContainer) {
      newBadgeContainer = event.detail.data.html.querySelector('price-badge [ref="badgeContainer"]');
    }

    const currentBadge = this.querySelector('[ref="badgeContainer"]');

    if (!newBadgeContainer || !currentBadge) return;

    // Update only the innerHTML to preserve the container's existing styles
    if (currentBadge.innerHTML !== newBadgeContainer.innerHTML) {
      currentBadge.innerHTML = newBadgeContainer.innerHTML;
    }
  };
}

if (!customElements.get('price-badge')) {
  customElements.define('price-badge', PriceBadge);
}
