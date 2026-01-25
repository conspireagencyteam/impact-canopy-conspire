import { Component } from '@theme/component';
import { debounce } from '@theme/utilities';

const ANIMATION_OPTIONS = {
  duration: 500,
};

const MOBILE_BREAKPOINT = 750;

/**
 * A custom element that displays a marquee with blur effects on left and right sides.
 * The marquee scrolls continuously from right to left without gaps.
 * Items are duplicated to fill the column count for seamless looping.
 *
 * @typedef {object} Refs
 * @property {HTMLElement} wrapper - The wrapper element.
 * @property {HTMLElement} content - The content element.
 * @property {HTMLElement} marqueeItems - The marquee items container.
 *
 * @extends Component<Refs>
 */
class MarqueeBlurComponent extends Component {
  requiredRefs = ['wrapper', 'content', 'marqueeItems'];

  /** @type {HTMLElement[]} */
  #originalItems = [];

  connectedCallback() {
    super.connectedCallback();

    const { marqueeItems } = this.refs;
    if (!marqueeItems) return;

    // Store original items before any manipulation
    this.#originalItems = Array.from(marqueeItems.children);

    if (this.#originalItems.length === 0) return;

    this.#fillColumnsWithItems();
    this.#duplicateContent();
    this.#setSpeed();

    window.addEventListener('resize', this.#handleResize);
    this.addEventListener('pointerenter', this.#slowDown);
    this.addEventListener('pointerleave', this.#speedUp);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.#handleResize);
    this.removeEventListener('pointerenter', this.#slowDown);
    this.removeEventListener('pointerleave', this.#speedUp);
  }

  /**
   * Get current column count based on viewport
   * @returns {number}
   */
  #getColumnCount() {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const columnsDesktop = Number(this.getAttribute('data-columns-desktop')) || 8;
    const columnsMobile = Number(this.getAttribute('data-columns-mobile')) || 3;
    return isMobile ? columnsMobile : columnsDesktop;
  }

  /**
   * Fill the container with enough items to match column count
   * If we have 7 items but need 8 columns, duplicate items to fill
   */
  #fillColumnsWithItems() {
    const { marqueeItems } = this.refs;
    if (!marqueeItems || this.#originalItems.length === 0) return;

    const columnCount = this.#getColumnCount();
    const originalCount = this.#originalItems.length;

    // Clear current items
    marqueeItems.innerHTML = '';

    // Calculate how many items we need to fill columns
    // We need at least columnCount items, and ideally a multiple of originalCount
    // to ensure seamless looping
    let targetCount = columnCount;

    // If original items don't evenly fill columns, we need to repeat them
    // to create a seamless loop. Find LCM-like behavior.
    if (originalCount < columnCount) {
      // Need to fill up to column count
      targetCount = columnCount;
    } else {
      // If we have more items than columns, use all items
      targetCount = originalCount;
    }

    // Add items, cycling through originals if needed
    for (let i = 0; i < targetCount; i++) {
      const originalIndex = i % originalCount;
      const clone = this.#originalItems[originalIndex].cloneNode(true);
      marqueeItems.appendChild(clone);
    }
  }

  /**
   * @type {{ cancel: () => void, current: number } | null}
   */
  #animation = null;

  #slowDown = debounce(() => {
    if (this.#animation) return;

    const animation = this.refs.wrapper.getAnimations()[0];

    if (!animation) return;

    this.#animation = animateValue({
      ...ANIMATION_OPTIONS,
      from: 1,
      to: 0,
      onUpdate: (value) => animation.updatePlaybackRate(value),
      onComplete: () => {
        this.#animation = null;
      },
    });
  }, ANIMATION_OPTIONS.duration);

  #speedUp() {
    this.#slowDown.cancel();

    const animation = this.refs.wrapper.getAnimations()[0];

    if (!animation || animation.playbackRate === 1) return;

    const from = this.#animation?.current ?? 0;
    this.#animation?.cancel();

    this.#animation = animateValue({
      ...ANIMATION_OPTIONS,
      from,
      to: 1,
      onUpdate: (value) => animation.updatePlaybackRate(value),
      onComplete: () => {
        this.#animation = null;
      },
    });
  }

  get clonedContent() {
    const { content, wrapper } = this.refs;
    const lastChild = wrapper.lastElementChild;

    return content !== lastChild ? lastChild : null;
  }

  #setSpeed(value = this.#calculateSpeed()) {
    this.style.setProperty('--marquee-speed', `${value}s`);
  }

  #calculateSpeed() {
    const speedFactor = Number(this.getAttribute('data-speed-factor')) || 25;
    const columnCount = this.#getColumnCount();
    // Speed based on number of columns - more columns = slower
    const speed = Math.sqrt(columnCount) * speedFactor;
    return speed;
  }

  #handleResize = debounce(() => {
    // Refill items based on new column count
    this.#fillColumnsWithItems();
    this.#duplicateContent();
    this.#setSpeed();
    this.#restartAnimation();
  }, 250);

  #restartAnimation() {
    const animations = this.refs.wrapper.getAnimations();

    requestAnimationFrame(() => {
      for (const animation of animations) {
        animation.currentTime = 0;
      }
    });
  }

  #duplicateContent() {
    const { wrapper, content } = this.refs;

    // Remove any existing clones
    this.clonedContent?.remove();

    const clone = /** @type {HTMLElement} */ (content.cloneNode(true));

    clone.setAttribute('aria-hidden', 'true');
    clone.removeAttribute('ref');

    wrapper.appendChild(clone);
  }
}

/**
 * Animate a numeric property smoothly.
 * @param {Object} params - The parameters for the animation.
 * @param {number} params.from - The starting value.
 * @param {number} params.to - The ending value.
 * @param {number} params.duration - The duration of the animation in milliseconds.
 * @param {function(number): void} params.onUpdate - The function to call on each update.
 * @param {function(number): number} [params.easing] - The easing function.
 * @param {function(): void} [params.onComplete] - The function to call when the animation completes.
 */
function animateValue({ from, to, duration, onUpdate, easing = (t) => t * t * (3 - 2 * t), onComplete }) {
  const startTime = performance.now();
  let cancelled = false;
  let currentValue = from;

  /**
   * @param {number} currentTime - The current time in milliseconds.
   */
  function animate(currentTime) {
    if (cancelled) return;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easing(progress);
    currentValue = from + (to - from) * easedProgress;

    onUpdate(currentValue);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else if (typeof onComplete === 'function') {
      onComplete();
    }
  }

  requestAnimationFrame(animate);

  return {
    get current() {
      return currentValue;
    },
    cancel() {
      cancelled = true;
    },
  };
}

if (!customElements.get('marquee-blur-component')) {
  customElements.define('marquee-blur-component', MarqueeBlurComponent);
}
