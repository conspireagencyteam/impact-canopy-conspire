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
/*!******************************!*\
  !*** ./src/scripts/focus.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cycleFocus: () => (/* binding */ cycleFocus),
/* harmony export */   removeTrapFocus: () => (/* binding */ removeTrapFocus),
/* harmony export */   trapFocus: () => (/* binding */ trapFocus)
/* harmony export */ });
// Store references to our event handlers so we can remove them.
/** @type {Record<string, (event: Event) => void>} */
var trapFocusHandlers = {};

/**
 * Get all focusable elements within a container.
 * @param {HTMLElement} container - The container to get focusable elements from.
 * @returns {HTMLElement[]} An array of focusable elements.
 */
function getFocusableElements(container) {
  return Array.from(container.querySelectorAll("summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"));
}

/**
 * Trap focus within the given container.
 * @param {HTMLElement} container - The container to trap focus within.
 */
function trapFocus(container) {
  // Clean up any previously set traps.
  removeTrapFocus();

  // Gather focusable elements.
  var focusable = getFocusableElements(container);
  if (!focusable.length) {
    // If nothing is focusable, just abort—no need to trap.
    return;
  }
  var first = focusable[0];
  var last = focusable[focusable.length - 1];

  // Keydown handler for cycling focus with Tab and Shift+Tab
  /** @type {(event: KeyboardEvent) => void} */
  trapFocusHandlers.keydown = function (event) {
    if (event.key !== 'Tab') return;
    var activeEl = document.activeElement;

    // If on the last focusable and tabbing forward, go to first
    if (!event.shiftKey && activeEl === last) {
      event.preventDefault();
      first === null || first === void 0 || first.focus();
    }
    // If on the first (or the container) and shift-tabbing, go to last
    else if (event.shiftKey && (activeEl === first || activeEl === container)) {
      event.preventDefault();
      last === null || last === void 0 || last.focus();
    }
  };

  // Focusin (capturing) handler to forcibly keep focus in the container
  /** @type {(event: FocusEvent) => void} */
  trapFocusHandlers.focusin = function (event) {
    // If the newly focused element isn't inside the container, redirect focus back.
    if (event.target instanceof Node && !container.contains(event.target)) {
      event.stopPropagation();
      // E.g., refocus the first focusable element:
      first === null || first === void 0 || first.focus();
    }
  };

  // Attach the handlers
  document.addEventListener('keydown', trapFocusHandlers.keydown, true);
  // Use capture phase for focusin so we can catch it before it lands outside
  document.addEventListener('focusin', trapFocusHandlers.focusin, true);

  // Finally, put focus where you want it.
  container.focus();
}

/**
 * Remove focus trap and optionally refocus another element.
 */
function removeTrapFocus() {
  trapFocusHandlers.keydown && document.removeEventListener('keydown', trapFocusHandlers.keydown, true);
  trapFocusHandlers.focusin && document.removeEventListener('focusin', trapFocusHandlers.focusin, true);
}

/**
 * Cycle focus to the next or previous link
 *
 * @param {HTMLElement[]} items
 * @param {number} increment
 */
function cycleFocus(items, increment) {
  var currentIndex = items.findIndex(function (item) {
    return item.matches(':focus');
  });
  var targetIndex = currentIndex + increment;
  if (targetIndex >= items.length) {
    targetIndex = 0;
  } else if (targetIndex < 0) {
    targetIndex = items.length - 1;
  }
  var targetItem = items[targetIndex];
  if (!targetItem) return;
  targetItem.focus();
}
/******/ })()
;