/******/ (() => { // webpackBootstrap
/*!*****************************************!*\
  !*** ./src/scripts/popover-polyfill.js ***!
  \*****************************************/
var _excluded = ["oldState", "newState"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
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
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// src/events.ts
// @ts-nocheck

/**
 * @fileoverview
 * - Polyfill for the popover attribute, which is not supported in older Safari versions.
 *
 * @see https://popover.oddbird.net/
 */

var ToggleEvent = /*#__PURE__*/function (_Event) {
  function ToggleEvent(type) {
    var _this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$oldState = _ref.oldState,
      oldState = _ref$oldState === void 0 ? '' : _ref$oldState,
      _ref$newState = _ref.newState,
      newState = _ref$newState === void 0 ? '' : _ref$newState,
      init = _objectWithoutProperties(_ref, _excluded);
    _classCallCheck(this, ToggleEvent);
    _this = _callSuper(this, ToggleEvent, [type, init]);
    _defineProperty(_this, "oldState", void 0);
    _defineProperty(_this, "newState", void 0);
    _this.oldState = String(oldState || '');
    _this.newState = String(newState || '');
    return _this;
  }
  _inherits(ToggleEvent, _Event);
  return _createClass(ToggleEvent);
}(/*#__PURE__*/_wrapNativeSuper(Event));
var popoverToggleTaskQueue = /* @__PURE__ */new WeakMap();
function queuePopoverToggleEventTask(element, oldState, newState) {
  popoverToggleTaskQueue.set(element, setTimeout(function () {
    if (!popoverToggleTaskQueue.has(element)) return;
    element.dispatchEvent(new ToggleEvent('toggle', {
      cancelable: false,
      oldState: oldState,
      newState: newState
    }));
  }, 0));
}

// src/popover-helpers.ts
var ShadowRoot = globalThis.ShadowRoot || function () {};
var HTMLDialogElement = globalThis.HTMLDialogElement || function () {};
var topLayerElements = /* @__PURE__ */new WeakMap();
var autoPopoverList = /* @__PURE__ */new WeakMap();
var hintPopoverList = /* @__PURE__ */new WeakMap();
var visibilityState = /* @__PURE__ */new WeakMap();
function getPopoverVisibilityState(popover) {
  return visibilityState.get(popover) || 'hidden';
}
var popoverInvoker = /* @__PURE__ */new WeakMap();
function lastSetElement(set) {
  return _toConsumableArray(set).pop();
}
function popoverTargetAttributeActivationBehavior(element) {
  var popover = element.popoverTargetElement;
  if (!(popover instanceof HTMLElement)) {
    return;
  }
  var visibility = getPopoverVisibilityState(popover);
  if (element.popoverTargetAction === 'show' && visibility === 'showing') {
    return;
  }
  if (element.popoverTargetAction === 'hide' && visibility === 'hidden') return;
  if (visibility === 'showing') {
    hidePopover(popover, true, true);
  } else if (checkPopoverValidity(popover, false)) {
    popoverInvoker.set(popover, element);
    showPopover(popover);
  }
}
function checkPopoverValidity(element, expectedToBeShowing) {
  if (element.popover !== 'auto' && element.popover !== 'manual' && element.popover !== 'hint') {
    return false;
  }
  if (!element.isConnected) return false;
  if (expectedToBeShowing && getPopoverVisibilityState(element) !== 'showing') {
    return false;
  }
  if (!expectedToBeShowing && getPopoverVisibilityState(element) !== 'hidden') {
    return false;
  }
  if (element instanceof HTMLDialogElement && element.hasAttribute('open')) {
    return false;
  }
  if (document.fullscreenElement === element) return false;
  return true;
}
function getStackPosition(popover) {
  if (!popover) return 0;
  var autoPopovers = autoPopoverList.get(document) || /* @__PURE__ */new Set();
  var hintPopovers = hintPopoverList.get(document) || /* @__PURE__ */new Set();
  if (hintPopovers.has(popover)) {
    return _toConsumableArray(hintPopovers).indexOf(popover) + autoPopovers.size + 1;
  }
  if (autoPopovers.has(popover)) {
    return _toConsumableArray(autoPopovers).indexOf(popover) + 1;
  }
  return 0;
}
function topMostClickedPopover(target) {
  var clickedPopover = nearestInclusiveOpenPopover(target);
  var invokerPopover = nearestInclusiveTargetPopoverForInvoker(target);
  if (getStackPosition(clickedPopover) > getStackPosition(invokerPopover)) {
    return clickedPopover;
  }
  return invokerPopover;
}
function topmostAutoOrHintPopover(document2) {
  var topmostPopover;
  var hintPopovers = hintPopoverList.get(document2) || /* @__PURE__ */new Set();
  var autoPopovers = autoPopoverList.get(document2) || /* @__PURE__ */new Set();
  var usedStack = hintPopovers.size > 0 ? hintPopovers : autoPopovers.size > 0 ? autoPopovers : null;
  if (usedStack) {
    topmostPopover = lastSetElement(usedStack);
    if (!topmostPopover.isConnected) {
      usedStack.delete(topmostPopover);
      return topmostAutoOrHintPopover(document2);
    }
    return topmostPopover;
  }
  return null;
}
function topMostPopoverInList(list) {
  var _iterator = _createForOfIteratorHelper(list || []),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var popover = _step.value;
      if (!popover.isConnected) {
        list.delete(popover);
      } else {
        return popover;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return null;
}
function getRootNode(node) {
  if (typeof node.getRootNode === 'function') {
    return node.getRootNode();
  }
  if (node.parentNode) return getRootNode(node.parentNode);
  return node;
}
function nearestInclusiveOpenPopover(node) {
  while (node) {
    if (node instanceof HTMLElement && node.popover === 'auto' && visibilityState.get(node) === 'showing') {
      return node;
    }
    node = node instanceof Element && node.assignedSlot || node.parentElement || getRootNode(node);
    if (node instanceof ShadowRoot) node = node.host;
    if (node instanceof Document) return;
  }
}
function nearestInclusiveTargetPopoverForInvoker(node) {
  while (node) {
    var nodePopover = node.popoverTargetElement;
    if (nodePopover instanceof HTMLElement) return nodePopover;
    node = node.parentElement || getRootNode(node);
    if (node instanceof ShadowRoot) node = node.host;
    if (node instanceof Document) return;
  }
}
function topMostPopoverAncestor(newPopover, list) {
  var popoverPositions = /* @__PURE__ */new Map();
  var i = 0;
  var _iterator2 = _createForOfIteratorHelper(list || []),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var popover = _step2.value;
      popoverPositions.set(popover, i);
      i += 1;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  popoverPositions.set(newPopover, i);
  i += 1;
  var topMostPopoverAncestor2 = null;
  function checkAncestor(candidate) {
    if (!candidate) return;
    var okNesting = false;
    var candidateAncestor = null;
    var candidatePosition = null;
    while (!okNesting) {
      candidateAncestor = nearestInclusiveOpenPopover(candidate) || null;
      if (candidateAncestor === null) return;
      if (!popoverPositions.has(candidateAncestor)) return;
      if (newPopover.popover === 'hint' || candidateAncestor.popover === 'auto') {
        okNesting = true;
      }
      if (!okNesting) {
        candidate = candidateAncestor.parentElement;
      }
    }
    candidatePosition = popoverPositions.get(candidateAncestor);
    if (topMostPopoverAncestor2 === null || popoverPositions.get(topMostPopoverAncestor2) < candidatePosition) {
      topMostPopoverAncestor2 = candidateAncestor;
    }
  }
  checkAncestor(newPopover.parentElement || getRootNode(newPopover));
  return topMostPopoverAncestor2;
}
function isFocusable(focusTarget) {
  if (focusTarget.hidden || focusTarget instanceof ShadowRoot) return false;
  if (focusTarget instanceof HTMLButtonElement || focusTarget instanceof HTMLInputElement || focusTarget instanceof HTMLSelectElement || focusTarget instanceof HTMLTextAreaElement || focusTarget instanceof HTMLOptGroupElement || focusTarget instanceof HTMLOptionElement || focusTarget instanceof HTMLFieldSetElement) {
    if (focusTarget.disabled) return false;
  }
  if (focusTarget instanceof HTMLInputElement && focusTarget.type === 'hidden') {
    return false;
  }
  if (focusTarget instanceof HTMLAnchorElement && focusTarget.href === '') {
    return false;
  }
  return typeof focusTarget.tabIndex === 'number' && focusTarget.tabIndex !== -1;
}
function focusDelegate(focusTarget) {
  if (focusTarget.shadowRoot && focusTarget.shadowRoot.delegatesFocus !== true) {
    return null;
  }
  var whereToLook = focusTarget;
  if (whereToLook.shadowRoot) {
    whereToLook = whereToLook.shadowRoot;
  }
  var autoFocusDelegate = whereToLook.querySelector('[autofocus]');
  if (autoFocusDelegate) {
    return autoFocusDelegate;
  } else {
    var slots = whereToLook.querySelectorAll('slot');
    var _iterator3 = _createForOfIteratorHelper(slots),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var slot = _step3.value;
        var assignedElements = slot.assignedElements({
          flatten: true
        });
        var _iterator4 = _createForOfIteratorHelper(assignedElements),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var el = _step4.value;
            if (el.hasAttribute('autofocus')) {
              return el;
            } else {
              autoFocusDelegate = el.querySelector('[autofocus]');
              if (autoFocusDelegate) {
                return autoFocusDelegate;
              }
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
  var walker = focusTarget.ownerDocument.createTreeWalker(whereToLook, NodeFilter.SHOW_ELEMENT);
  var descendant = walker.currentNode;
  while (descendant) {
    if (isFocusable(descendant)) {
      return descendant;
    }
    descendant = walker.nextNode();
  }
}
function popoverFocusingSteps(subject) {
  var _a;
  (_a = focusDelegate(subject)) == null ? void 0 : _a.focus();
}
var previouslyFocusedElements = /* @__PURE__ */new WeakMap();
function showPopover(element) {
  if (!checkPopoverValidity(element, false)) {
    return;
  }
  var document2 = element.ownerDocument;
  if (!element.dispatchEvent(new ToggleEvent('beforetoggle', {
    cancelable: true,
    oldState: 'closed',
    newState: 'open'
  }))) {
    return;
  }
  if (!checkPopoverValidity(element, false)) {
    return;
  }
  var shouldRestoreFocus = false;
  var originalType = element.popover;
  var stackToAppendTo = null;
  var autoAncestor = topMostPopoverAncestor(element, autoPopoverList.get(document2) || /* @__PURE__ */new Set());
  var hintAncestor = topMostPopoverAncestor(element, hintPopoverList.get(document2) || /* @__PURE__ */new Set());
  if (originalType === 'auto') {
    closeAllOpenPopoversInList(hintPopoverList.get(document2) || /* @__PURE__ */new Set(), shouldRestoreFocus, true);
    var ancestor = autoAncestor || document2;
    hideAllPopoversUntil(ancestor, shouldRestoreFocus, true);
    stackToAppendTo = 'auto';
  }
  if (originalType === 'hint') {
    if (hintAncestor) {
      hideAllPopoversUntil(hintAncestor, shouldRestoreFocus, true);
      stackToAppendTo = 'hint';
    } else {
      closeAllOpenPopoversInList(hintPopoverList.get(document2) || /* @__PURE__ */new Set(), shouldRestoreFocus, true);
      if (autoAncestor) {
        hideAllPopoversUntil(autoAncestor, shouldRestoreFocus, true);
        stackToAppendTo = 'auto';
      } else {
        stackToAppendTo = 'hint';
      }
    }
  }
  if (originalType === 'auto' || originalType === 'hint') {
    if (originalType !== element.popover || !checkPopoverValidity(element, false)) {
      return;
    }
    if (!topmostAutoOrHintPopover(document2)) {
      shouldRestoreFocus = true;
    }
    if (stackToAppendTo === 'auto') {
      if (!autoPopoverList.has(document2)) {
        autoPopoverList.set(document2, /* @__PURE__ */new Set());
      }
      autoPopoverList.get(document2).add(element);
    } else if (stackToAppendTo === 'hint') {
      if (!hintPopoverList.has(document2)) {
        hintPopoverList.set(document2, /* @__PURE__ */new Set());
      }
      hintPopoverList.get(document2).add(element);
    }
  }
  previouslyFocusedElements.delete(element);
  var originallyFocusedElement = document2.activeElement;
  element.classList.add(':popover-open');
  visibilityState.set(element, 'showing');
  if (!topLayerElements.has(document2)) {
    topLayerElements.set(document2, /* @__PURE__ */new Set());
  }
  topLayerElements.get(document2).add(element);
  setInvokerAriaExpanded(popoverInvoker.get(element), true);
  popoverFocusingSteps(element);
  if (shouldRestoreFocus && originallyFocusedElement && element.popover === 'auto') {
    previouslyFocusedElements.set(element, originallyFocusedElement);
  }
  queuePopoverToggleEventTask(element, 'closed', 'open');
}
function hidePopover(element) {
  var focusPreviousElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var fireEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var _a, _b;
  if (!checkPopoverValidity(element, true)) {
    return;
  }
  var document2 = element.ownerDocument;
  if (['auto', 'hint'].includes(element.popover)) {
    hideAllPopoversUntil(element, focusPreviousElement, fireEvents);
    if (!checkPopoverValidity(element, true)) {
      return;
    }
  }
  var autoList = autoPopoverList.get(document2) || /* @__PURE__ */new Set();
  var autoPopoverListContainsElement = autoList.has(element) && lastSetElement(autoList) === element;
  setInvokerAriaExpanded(popoverInvoker.get(element), false);
  popoverInvoker.delete(element);
  if (fireEvents) {
    element.dispatchEvent(new ToggleEvent('beforetoggle', {
      oldState: 'open',
      newState: 'closed'
    }));
    if (autoPopoverListContainsElement && lastSetElement(autoList) !== element) {
      hideAllPopoversUntil(element, focusPreviousElement, fireEvents);
    }
    if (!checkPopoverValidity(element, true)) {
      return;
    }
  }
  (_a = topLayerElements.get(document2)) == null ? void 0 : _a.delete(element);
  autoList.delete(element);
  (_b = hintPopoverList.get(document2)) == null ? void 0 : _b.delete(element);
  element.classList.remove(':popover-open');
  visibilityState.set(element, 'hidden');
  if (fireEvents) {
    queuePopoverToggleEventTask(element, 'open', 'closed');
  }
  var previouslyFocusedElement = previouslyFocusedElements.get(element);
  if (previouslyFocusedElement) {
    previouslyFocusedElements.delete(element);
    if (focusPreviousElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function closeAllOpenPopovers(document2) {
  var focusPreviousElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var fireEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var popover = topmostAutoOrHintPopover(document2);
  while (popover) {
    hidePopover(popover, focusPreviousElement, fireEvents);
    popover = topmostAutoOrHintPopover(document2);
  }
}
function closeAllOpenPopoversInList(list) {
  var focusPreviousElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var fireEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var popover = topMostPopoverInList(list);
  while (popover) {
    hidePopover(popover, focusPreviousElement, fireEvents);
    popover = topMostPopoverInList(list);
  }
}
function hidePopoverStackUntil(endpoint, set, focusPreviousElement, fireEvents) {
  var repeatingHide = false;
  var hasRunOnce = false;
  while (repeatingHide || !hasRunOnce) {
    hasRunOnce = true;
    var lastToHide = null;
    var foundEndpoint = false;
    var _iterator5 = _createForOfIteratorHelper(set),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var popover = _step5.value;
        if (popover === endpoint) {
          foundEndpoint = true;
        } else if (foundEndpoint) {
          lastToHide = popover;
          break;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (!lastToHide) return;
    while (getPopoverVisibilityState(lastToHide) === 'showing' && set.size) {
      hidePopover(lastSetElement(set), focusPreviousElement, fireEvents);
    }
    if (set.has(endpoint) && lastSetElement(set) !== endpoint) {
      repeatingHide = true;
    }
    if (repeatingHide) {
      fireEvents = false;
    }
  }
}
function hideAllPopoversUntil(endpoint, focusPreviousElement, fireEvents) {
  var _a, _b;
  var document2 = endpoint.ownerDocument || endpoint;
  if (endpoint instanceof Document) {
    return closeAllOpenPopovers(document2, focusPreviousElement, fireEvents);
  }
  if ((_a = hintPopoverList.get(document2)) == null ? void 0 : _a.has(endpoint)) {
    hidePopoverStackUntil(endpoint, hintPopoverList.get(document2), focusPreviousElement, fireEvents);
    return;
  }
  closeAllOpenPopoversInList(hintPopoverList.get(document2) || /* @__PURE__ */new Set(), focusPreviousElement, fireEvents);
  if (!((_b = autoPopoverList.get(document2)) == null ? void 0 : _b.has(endpoint))) {
    return;
  }
  hidePopoverStackUntil(endpoint, autoPopoverList.get(document2), focusPreviousElement, fireEvents);
}
var popoverPointerDownTargets = /* @__PURE__ */new WeakMap();
function lightDismissOpenPopovers(event) {
  if (!event.isTrusted) return;
  var target = event.composedPath()[0];
  if (!target) return;
  var document2 = target.ownerDocument;
  var topMostPopover = topmostAutoOrHintPopover(document2);
  if (!topMostPopover) return;
  var ancestor = topMostClickedPopover(target);
  if (ancestor && event.type === 'pointerdown') {
    popoverPointerDownTargets.set(document2, ancestor);
  } else if (event.type === 'pointerup') {
    var sameTarget = popoverPointerDownTargets.get(document2) === ancestor;
    popoverPointerDownTargets.delete(document2);
    if (sameTarget) {
      hideAllPopoversUntil(ancestor || document2, false, true);
    }
  }
}
var initialAriaExpandedValue = /* @__PURE__ */new WeakMap();
function setInvokerAriaExpanded(el) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!el) return;
  if (!initialAriaExpandedValue.has(el)) {
    initialAriaExpandedValue.set(el, el.getAttribute('aria-expanded'));
  }
  var popover = el.popoverTargetElement;
  if (popover instanceof HTMLElement && popover.popover === 'auto') {
    el.setAttribute('aria-expanded', String(force));
  } else {
    var initialValue = initialAriaExpandedValue.get(el);
    if (!initialValue) {
      el.removeAttribute('aria-expanded');
    } else {
      el.setAttribute('aria-expanded', initialValue);
    }
  }
}

// src/popover.ts
var ShadowRoot2 = globalThis.ShadowRoot || function () {};
function isSupported() {
  return typeof HTMLElement !== 'undefined' && _typeof(HTMLElement.prototype) === 'object' && 'popover' in HTMLElement.prototype;
}
function patchSelectorFn(object, name, mapper) {
  var original = object[name];
  Object.defineProperty(object, name, {
    value: function value(selector) {
      return original.call(this, mapper(selector));
    }
  });
}
var nonEscapedPopoverSelector = /(^|[^\\]):popover-open\b/g;
function hasLayerSupport() {
  return typeof globalThis.CSSLayerBlockRule === 'function';
}
function getStyles() {
  var useLayer = hasLayerSupport();
  return "\n".concat(useLayer ? '@layer popover-polyfill {' : '', "\n  :where([popover]) {\n    position: fixed;\n    z-index: 2147483647;\n    inset: 0;\n    padding: 0.25em;\n    width: fit-content;\n    height: fit-content;\n    border-width: initial;\n    border-color: initial;\n    border-image: initial;\n    border-style: solid;\n    background-color: canvas;\n    color: canvastext;\n    overflow: auto;\n    margin: auto;\n  }\n\n  :where([popover]:not(.\\:popover-open)) {\n    display: none;\n  }\n\n  :where(dialog[popover].\\:popover-open) {\n    display: block;\n  }\n\n  :where(dialog[popover][open]) {\n    display: revert;\n  }\n\n  :where([anchor].\\:popover-open) {\n    inset: auto;\n  }\n\n  :where([anchor]:popover-open) {\n    inset: auto;\n  }\n\n  @supports not (background-color: canvas) {\n    :where([popover]) {\n      background-color: white;\n      color: black;\n    }\n  }\n\n  @supports (width: -moz-fit-content) {\n    :where([popover]) {\n      width: -moz-fit-content;\n      height: -moz-fit-content;\n    }\n  }\n\n  @supports not (inset: 0) {\n    :where([popover]) {\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n    }\n  }\n").concat(useLayer ? '}' : '', "\n");
}
var popoverStyleSheet = null;
function injectStyles(root) {
  var styles = getStyles();
  if (popoverStyleSheet === null) {
    try {
      popoverStyleSheet = new CSSStyleSheet();
      popoverStyleSheet.replaceSync(styles);
    } catch (_unused) {
      popoverStyleSheet = false;
    }
  }
  if (popoverStyleSheet === false) {
    var sheet = document.createElement('style');
    sheet.textContent = styles;
    if (root instanceof Document) {
      root.head.prepend(sheet);
    } else {
      root.prepend(sheet);
    }
  } else {
    root.adoptedStyleSheets = [popoverStyleSheet].concat(_toConsumableArray(root.adoptedStyleSheets));
  }
}
function apply() {
  if (typeof window === 'undefined') return;
  window.ToggleEvent = window.ToggleEvent || ToggleEvent;
  function rewriteSelector(selector) {
    if (selector == null ? void 0 : selector.includes(':popover-open')) {
      selector = selector.replace(nonEscapedPopoverSelector, '$1.\\:popover-open');
    }
    return selector;
  }
  patchSelectorFn(Document.prototype, 'querySelector', rewriteSelector);
  patchSelectorFn(Document.prototype, 'querySelectorAll', rewriteSelector);
  patchSelectorFn(Element.prototype, 'querySelector', rewriteSelector);
  patchSelectorFn(Element.prototype, 'querySelectorAll', rewriteSelector);
  patchSelectorFn(Element.prototype, 'matches', rewriteSelector);
  patchSelectorFn(Element.prototype, 'closest', rewriteSelector);
  patchSelectorFn(DocumentFragment.prototype, 'querySelectorAll', rewriteSelector);
  Object.defineProperties(HTMLElement.prototype, {
    popover: {
      enumerable: true,
      configurable: true,
      get: function get() {
        if (!this.hasAttribute('popover')) return null;
        var value = (this.getAttribute('popover') || '').toLowerCase();
        if (value === '' || value == 'auto') return 'auto';
        if (value == 'hint') return 'hint';
        return 'manual';
      },
      set: function set(value) {
        if (value === null) {
          this.removeAttribute('popover');
        } else {
          this.setAttribute('popover', value);
        }
      }
    },
    showPopover: {
      enumerable: true,
      configurable: true,
      value: function value() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        showPopover(this);
      }
    },
    hidePopover: {
      enumerable: true,
      configurable: true,
      value: function value() {
        hidePopover(this, true, true);
      }
    },
    togglePopover: {
      enumerable: true,
      configurable: true,
      value: function value() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (typeof options === 'boolean') {
          options = {
            force: options
          };
        }
        if (visibilityState.get(this) === 'showing' && options.force === void 0 || options.force === false) {
          hidePopover(this, true, true);
        } else if (options.force === void 0 || options.force === true) {
          showPopover(this);
        }
        return visibilityState.get(this) === 'showing';
      }
    }
  });
  var originalAttachShadow = Element.prototype.attachShadow;
  if (originalAttachShadow) {
    Object.defineProperties(Element.prototype, {
      attachShadow: {
        enumerable: true,
        configurable: true,
        writable: true,
        value: function value(options) {
          var shadowRoot = originalAttachShadow.call(this, options);
          injectStyles(shadowRoot);
          return shadowRoot;
        }
      }
    });
  }
  var originalAttachInternals = HTMLElement.prototype.attachInternals;
  if (originalAttachInternals) {
    Object.defineProperties(HTMLElement.prototype, {
      attachInternals: {
        enumerable: true,
        configurable: true,
        writable: true,
        value: function value() {
          var internals = originalAttachInternals.call(this);
          if (internals.shadowRoot) {
            injectStyles(internals.shadowRoot);
          }
          return internals;
        }
      }
    });
  }
  var popoverTargetAssociatedElements = /* @__PURE__ */new WeakMap();
  function applyPopoverInvokerElementMixin(ElementClass) {
    Object.defineProperties(ElementClass.prototype, {
      popoverTargetElement: {
        enumerable: true,
        configurable: true,
        set: function set(targetElement) {
          if (targetElement === null) {
            this.removeAttribute('popovertarget');
            popoverTargetAssociatedElements.delete(this);
          } else if (!(targetElement instanceof Element)) {
            throw new TypeError("popoverTargetElement must be an element or null");
          } else {
            this.setAttribute('popovertarget', '');
            popoverTargetAssociatedElements.set(this, targetElement);
          }
        },
        get: function get() {
          if (this.localName !== 'button' && this.localName !== 'input') {
            return null;
          }
          if (this.localName === 'input' && this.type !== 'reset' && this.type !== 'image' && this.type !== 'button') {
            return null;
          }
          if (this.disabled) {
            return null;
          }
          if (this.form && this.type === 'submit') {
            return null;
          }
          var targetElement = popoverTargetAssociatedElements.get(this);
          if (targetElement && targetElement.isConnected) {
            return targetElement;
          } else if (targetElement && !targetElement.isConnected) {
            popoverTargetAssociatedElements.delete(this);
            return null;
          }
          var root = getRootNode(this);
          var idref = this.getAttribute('popovertarget');
          if ((root instanceof Document || root instanceof ShadowRoot2) && idref) {
            return root.getElementById(idref) || null;
          }
          return null;
        }
      },
      popoverTargetAction: {
        enumerable: true,
        configurable: true,
        get: function get() {
          var value = (this.getAttribute('popovertargetaction') || '').toLowerCase();
          if (value === 'show' || value === 'hide') return value;
          return 'toggle';
        },
        set: function set(value) {
          this.setAttribute('popovertargetaction', value);
        }
      }
    });
  }
  applyPopoverInvokerElementMixin(HTMLButtonElement);
  applyPopoverInvokerElementMixin(HTMLInputElement);
  var handleInvokerActivation = function handleInvokerActivation(event) {
    if (event.defaultPrevented) {
      return;
    }
    var composedPath = event.composedPath();
    var target = composedPath[0];
    if (!(target instanceof Element) || (target == null ? void 0 : target.shadowRoot)) {
      return;
    }
    var root = getRootNode(target);
    if (!(root instanceof ShadowRoot2 || root instanceof Document)) {
      return;
    }
    var invoker = composedPath.find(function (el) {
      var _a;
      return (_a = el.matches) == null ? void 0 : _a.call(el, '[popovertargetaction],[popovertarget]');
    });
    if (invoker) {
      popoverTargetAttributeActivationBehavior(invoker);
      event.preventDefault();
      return;
    }
  };
  var onKeydown = function onKeydown(event) {
    var key = event.key;
    var target = event.target;
    if (!event.defaultPrevented && target && (key === 'Escape' || key === 'Esc')) {
      hideAllPopoversUntil(target.ownerDocument, true, true);
    }
  };
  var addEventListeners = function addEventListeners(root) {
    root.addEventListener('click', handleInvokerActivation);
    root.addEventListener('keydown', onKeydown);
    root.addEventListener('pointerdown', lightDismissOpenPopovers);
    root.addEventListener('pointerup', lightDismissOpenPopovers);
  };
  addEventListeners(document);
  injectStyles(document);
}

// src/index.ts
if (!isSupported()) apply();
/******/ })()
;