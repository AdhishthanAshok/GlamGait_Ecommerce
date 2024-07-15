import {
  require_react_dom
} from "./chunk-DN6KFEIY.js";
import {
  require_react
} from "./chunk-O6O4HUXW.js";
import {
  __toESM
} from "./chunk-LQ2VYIYD.js";

// node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var import_react = __toESM(require_react(), 1);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react.default).useLayoutEffect : () => {
};

// node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var import_react2 = __toESM(require_react(), 1);
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = (0, import_react2.useRef)(null);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return (0, import_react2.useCallback)((...args) => {
    const f20 = ref.current;
    return f20 === null || f20 === void 0 ? void 0 : f20(...args);
  }, []);
}

// node_modules/@react-aria/utils/dist/useValueEffect.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useId.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var import_react4 = __toESM(require_react(), 1);
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $b5e257d569688ac6$var$SSRContext = (0, import_react4.default).createContext($b5e257d569688ac6$var$defaultContext);
var $b5e257d569688ac6$var$IsSSRContext = (0, import_react4.default).createContext(false);
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled2 = false) {
  let ctx = (0, import_react4.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, import_react4.useRef)(null);
  if (ref.current === null && !isDisabled2) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react4.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, import_react4.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM)
    console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && false ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, import_react4.default).useId();
  let [didSSR] = (0, import_react4.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, import_react4.default)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, import_react4.default)["useSyncExternalStore"] === "function")
    return (0, import_react4.default)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return (0, import_react4.useContext)($b5e257d569688ac6$var$IsSSRContext);
}

// node_modules/@react-aria/utils/dist/useId.mjs
var $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $bdb11010cef70236$var$idsUpdaterMap = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB)
    return idA;
  let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
  if (setIdA) {
    setIdA(idB);
    return idB;
  }
  let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
  if (setIdB) {
    setIdB(idA);
    return idA;
  }
  return idB;
}

// node_modules/@react-aria/utils/dist/chain.mjs
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
  return (...args) => {
    for (let callback of callbacks)
      if (typeof callback === "function")
        callback(...args);
  };
}

// node_modules/@react-aria/utils/dist/domHelpers.mjs
var $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
var $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
  if (el && "window" in el && el.window === el)
    return el;
  const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
  return doc.defaultView || window;
};

// node_modules/clsx/dist/clsx.mjs
function r(e7) {
  var t14, f20, n13 = "";
  if ("string" == typeof e7 || "number" == typeof e7)
    n13 += e7;
  else if ("object" == typeof e7)
    if (Array.isArray(e7)) {
      var o18 = e7.length;
      for (t14 = 0; t14 < o18; t14++)
        e7[t14] && (f20 = r(e7[t14])) && (n13 && (n13 += " "), n13 += f20);
    } else
      for (f20 in e7)
        e7[f20] && (n13 && (n13 += " "), n13 += f20);
  return n13;
}
function clsx() {
  for (var e7, t14, f20 = 0, n13 = "", o18 = arguments.length; f20 < o18; f20++)
    (e7 = arguments[f20]) && (t14 = r(e7)) && (n13 && (n13 += " "), n13 += t14);
  return n13;
}
var clsx_default = clsx;

// node_modules/@react-aria/utils/dist/mergeProps.mjs
function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
  let result = {
    ...args[0]
  };
  for (let i13 = 1; i13 < args.length; i13++) {
    let props = args[i13];
    for (let key in props) {
      let a15 = result[key];
      let b7 = props[key];
      if (typeof a15 === "function" && typeof b7 === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90)
        result[key] = (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(a15, b7);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a15 === "string" && typeof b7 === "string")
        result[key] = (0, clsx_default)(a15, b7);
      else if (key === "id" && a15 && b7)
        result.id = (0, $bdb11010cef70236$export$cd8c9cb68f842629)(a15, b7);
      else
        result[key] = b7 !== void 0 ? b7 : a15;
    }
  }
  return result;
}

// node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll())
    element.focus({
      preventScroll: true
    });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e7) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth)
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement)
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

// node_modules/@react-aria/utils/dist/platform.mjs
function $c87311424ea30a05$var$testUserAgent(re2) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null)
    return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re2.test(brand.brand))) || re2.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re2) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re2.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$78551043582a6a98() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
}
function $c87311424ea30a05$export$b7d78993b74f766d() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
}

// node_modules/@react-aria/utils/dist/openLink.mjs
var import_react6 = __toESM(require_react(), 1);
var $ea8dcbcb9ea1b556$var$RouterContext = (0, import_react6.createContext)({
  isNative: true,
  open: $ea8dcbcb9ea1b556$var$openSyntheticLink,
  useHref: (href) => href
});
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ((0, $c87311424ea30a05$export$9ac100e40613ea10)())
      metaKey = true;
    else
      ctrlKey = true;
  }
  let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
  (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink(target, open) {
  if (target instanceof HTMLAnchorElement)
    open(target);
  else if (target.hasAttribute("data-href")) {
    let link = document.createElement("a");
    link.href = target.getAttribute("data-href");
    if (target.hasAttribute("data-target"))
      link.target = target.getAttribute("data-target");
    if (target.hasAttribute("data-rel"))
      link.rel = target.getAttribute("data-rel");
    if (target.hasAttribute("data-download"))
      link.download = target.getAttribute("data-download");
    if (target.hasAttribute("data-ping"))
      link.ping = target.getAttribute("data-ping");
    if (target.hasAttribute("data-referrer-policy"))
      link.referrerPolicy = target.getAttribute("data-referrer-policy");
    target.appendChild(link);
    open(link);
    target.removeChild(link);
  }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink(target, modifiers) {
  $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link) => $ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers));
}

// node_modules/@react-aria/utils/dist/runAfterTransition.mjs
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined")
    return;
  function isTransitionEvent(event) {
    return "propertyName" in event;
  }
  let onTransitionStart = (e7) => {
    if (!isTransitionEvent(e7) || !e7.target)
      return;
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e7.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e7.target, transitions);
      e7.target.addEventListener("transitioncancel", onTransitionEnd, {
        once: true
      });
    }
    transitions.add(e7.propertyName);
  };
  let onTransitionEnd = (e7) => {
    if (!isTransitionEvent(e7) || !e7.target)
      return;
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e7.target);
    if (!properties)
      return;
    properties.delete(e7.propertyName);
    if (properties.size === 0) {
      e7.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e7.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)
        cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading")
    $bbed8b41f857bcc0$var$setupGlobalEvents();
  else
    document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
  requestAnimationFrame(() => {
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0)
      fn();
    else
      $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
  });
}

// node_modules/@react-aria/utils/dist/useDrag1D.mjs
var import_react7 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useGlobalListeners.mjs
var import_react8 = __toESM(require_react(), 1);
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = (0, import_react8.useRef)(/* @__PURE__ */ new Map());
  let addGlobalListener = (0, import_react8.useCallback)((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = (0, import_react8.useCallback)((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react8.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react8.useEffect)(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}

// node_modules/@react-aria/utils/dist/useObjectRef.mjs
var import_react9 = __toESM(require_react(), 1);
function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
  const objRef = (0, import_react9.useRef)(null);
  return (0, import_react9.useMemo)(() => ({
    get current() {
      return objRef.current;
    },
    set current(value) {
      objRef.current = value;
      if (typeof forwardedRef === "function")
        forwardedRef(value);
      else if (forwardedRef)
        forwardedRef.current = value;
    }
  }), [
    forwardedRef
  ]);
}

// node_modules/@react-aria/utils/dist/useUpdateEffect.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var import_react11 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useSyncRef.mjs
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        if (context.ref)
          context.ref.current = null;
      };
    }
  });
}

// node_modules/@react-aria/utils/dist/useViewportSize.mjs
var import_react12 = __toESM(require_react(), 1);
var $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;

// node_modules/@react-aria/utils/dist/useDescription.mjs
var import_react13 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useEvent.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
function $6a7db85432448f7f$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted)
    return true;
  if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType)
    return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
  return !(0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}

// node_modules/@react-aria/utils/dist/useDeepMemo.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useFormReset.mjs
var import_react16 = __toESM(require_react(), 1);

// node_modules/@react-stately/utils/dist/useControlledState.mjs
var import_react17 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/textSelection.mjs
var $14c0b72509d70225$var$state = "default";
var $14c0b72509d70225$var$savedUserSelect = "";
var $14c0b72509d70225$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state === "default") {
      const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
      $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
      documentObject.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state = "disabled";
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state !== "disabled")
      return;
    $14c0b72509d70225$var$state = "restoring";
    setTimeout(() => {
      (0, $bbed8b41f857bcc0$export$24490316f764c430)(() => {
        if ($14c0b72509d70225$var$state === "restoring") {
          const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
          if (documentObject.documentElement.style.webkitUserSelect === "none")
            documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
          $14c0b72509d70225$var$savedUserSelect = "";
          $14c0b72509d70225$var$state = "default";
        }
      });
    }, 300);
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
      let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
      if (target.style.userSelect === "none")
        target.style.userSelect = targetOldUserSelect;
      if (target.getAttribute("style") === "")
        target.removeAttribute("style");
      $14c0b72509d70225$var$modifiedElementMap.delete(target);
    }
  }
}

// node_modules/@react-aria/interactions/dist/context.mjs
var import_react18 = __toESM(require_react(), 1);
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, import_react18.default).createContext({
  register: () => {
  }
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";

// node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js
function _class_apply_descriptor_get(receiver, descriptor) {
  if (descriptor.get)
    return descriptor.get.call(receiver);
  return descriptor.value;
}

// node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js
function _class_extract_field_descriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver))
    throw new TypeError("attempted to " + action + " private field on non-instance");
  return privateMap.get(receiver);
}

// node_modules/@swc/helpers/esm/_class_private_field_get.js
function _class_private_field_get(receiver, privateMap) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
  return _class_apply_descriptor_get(receiver, descriptor);
}

// node_modules/@swc/helpers/esm/_check_private_redeclaration.js
function _check_private_redeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_init.js
function _class_private_field_init(obj, privateMap, value) {
  _check_private_redeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

// node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js
function _class_apply_descriptor_set(receiver, descriptor, value) {
  if (descriptor.set)
    descriptor.set.call(receiver, value);
  else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_set.js
function _class_private_field_set(receiver, privateMap, value) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
  _class_apply_descriptor_set(receiver, descriptor, value);
  return value;
}

// node_modules/@react-aria/interactions/dist/usePress.mjs
var import_react19 = __toESM(require_react(), 1);
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = (0, import_react19.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  if (context) {
    let { register, ...contextProps } = context;
    props = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(contextProps, props);
    register();
  }
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, props.ref);
  return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /* @__PURE__ */ new WeakMap();
var $f6c31cce2adf654f$var$PressEvent = class {
  continuePropagation() {
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
  }
  get shouldStopPropagation() {
    return (0, _class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
  }
  constructor(type, pointerType, originalEvent) {
    (0, _class_private_field_init)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
      writable: true,
      value: void 0
    });
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
    this.type = type;
    this.pointerType = pointerType;
    this.target = originalEvent.currentTarget;
    this.shiftKey = originalEvent.shiftKey;
    this.metaKey = originalEvent.metaKey;
    this.ctrlKey = originalEvent.ctrlKey;
    this.altKey = originalEvent.altKey;
  }
};
var $f6c31cce2adf654f$var$LINK_CLICKED = Symbol("linkClicked");
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
  let {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled: isDisabled2,
    isPressed: isPressedProp,
    preventFocusOnPress,
    shouldCancelOnPointerExit,
    allowTextSelectionOnPress,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _6,
    ...domProps
  } = $f6c31cce2adf654f$var$usePressResponderContext(props);
  let [isPressed, setPressed] = (0, import_react19.useState)(false);
  let ref = (0, import_react19.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
  let triggerPressStart = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled2 || state.didFirePressStart)
      return false;
    let shouldStopPropagation = true;
    state.isTriggeringEvent = true;
    if (onPressStart) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressstart", pointerType, originalEvent);
      onPressStart(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange)
      onPressChange(true);
    state.isTriggeringEvent = false;
    state.didFirePressStart = true;
    setPressed(true);
    return shouldStopPropagation;
  });
  let triggerPressEnd = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType, wasPressed = true) => {
    let state = ref.current;
    if (!state.didFirePressStart)
      return false;
    state.ignoreClickAfterPress = true;
    state.didFirePressStart = false;
    state.isTriggeringEvent = true;
    let shouldStopPropagation = true;
    if (onPressEnd) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressend", pointerType, originalEvent);
      onPressEnd(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange)
      onPressChange(false);
    setPressed(false);
    if (onPress && wasPressed && !isDisabled2) {
      let event = new $f6c31cce2adf654f$var$PressEvent("press", pointerType, originalEvent);
      onPress(event);
      shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
    }
    state.isTriggeringEvent = false;
    return shouldStopPropagation;
  });
  let triggerPressUp = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled2)
      return false;
    if (onPressUp) {
      state.isTriggeringEvent = true;
      let event = new $f6c31cce2adf654f$var$PressEvent("pressup", pointerType, originalEvent);
      onPressUp(event);
      state.isTriggeringEvent = false;
      return event.shouldStopPropagation;
    }
    return true;
  });
  let cancel = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e7) => {
    let state = ref.current;
    if (state.isPressed && state.target) {
      if (state.isOverTarget && state.pointerType != null)
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType, false);
      state.isPressed = false;
      state.isOverTarget = false;
      state.activePointerId = null;
      state.pointerType = null;
      removeAllGlobalListeners();
      if (!allowTextSelectionOnPress)
        (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
    }
  });
  let cancelOnPointerExit = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e7) => {
    if (shouldCancelOnPointerExit)
      cancel(e7);
  });
  let pressProps = (0, import_react19.useMemo)(() => {
    let state = ref.current;
    let pressProps2 = {
      onKeyDown(e7) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e7.nativeEvent, e7.currentTarget) && e7.currentTarget.contains(e7.target)) {
          var _state_metaKeyEvents;
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e7.target, e7.key))
            e7.preventDefault();
          let shouldStopPropagation = true;
          if (!state.isPressed && !e7.repeat) {
            state.target = e7.currentTarget;
            state.isPressed = true;
            shouldStopPropagation = triggerPressStart(e7, "keyboard");
            let originalTarget = e7.currentTarget;
            let pressUp = (e8) => {
              if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e8, originalTarget) && !e8.repeat && originalTarget.contains(e8.target) && state.target)
                triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e8), "keyboard");
            };
            addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "keyup", (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(pressUp, onKeyUp), true);
          }
          if (shouldStopPropagation)
            e7.stopPropagation();
          if (e7.metaKey && (0, $c87311424ea30a05$export$9ac100e40613ea10)())
            (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e7.key, e7.nativeEvent);
        } else if (e7.key === "Meta")
          state.metaKeyEvents = /* @__PURE__ */ new Map();
      },
      onClick(e7) {
        if (e7 && !e7.currentTarget.contains(e7.target))
          return;
        if (e7 && e7.button === 0 && !state.isTriggeringEvent && !(0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening) {
          let shouldStopPropagation = true;
          if (isDisabled2)
            e7.preventDefault();
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || (0, $6a7db85432448f7f$export$60278871457622de)(e7.nativeEvent))) {
            if (!isDisabled2 && !preventFocusOnPress)
              (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e7.currentTarget);
            let stopPressStart = triggerPressStart(e7, "virtual");
            let stopPressUp = triggerPressUp(e7, "virtual");
            let stopPressEnd = triggerPressEnd(e7, "virtual");
            shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
          if (shouldStopPropagation)
            e7.stopPropagation();
        }
      }
    };
    let onKeyUp = (e7) => {
      var _state_metaKeyEvents;
      if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e7, state.target)) {
        var _state_metaKeyEvents1;
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e7.target, e7.key))
          e7.preventDefault();
        let target = e7.target;
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), "keyboard", state.target.contains(target));
        removeAllGlobalListeners();
        if (e7.key !== "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && state.target.contains(target) && !e7[$f6c31cce2adf654f$var$LINK_CLICKED]) {
          e7[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
          (0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7)(state.target, e7, false);
        }
        state.isPressed = false;
        (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e7.key);
      } else if (e7.key === "Meta" && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
        var _state_target;
        let events = state.metaKeyEvents;
        state.metaKeyEvents = void 0;
        for (let event of events.values())
          (_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent("keyup", event));
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e7) => {
        if (e7.button !== 0 || !e7.currentTarget.contains(e7.target))
          return;
        if ((0, $6a7db85432448f7f$export$29bf1b5f2c56cf63)(e7.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e7.currentTarget))
          e7.preventDefault();
        state.pointerType = e7.pointerType;
        let shouldStopPropagation = true;
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e7.pointerId;
          state.target = e7.currentTarget;
          if (!isDisabled2 && !preventFocusOnPress)
            (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e7.currentTarget);
          if (!allowTextSelectionOnPress)
            (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
          shouldStopPropagation = triggerPressStart(e7, state.pointerType);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "pointermove", onPointerMove, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "pointerup", onPointerUp, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "pointercancel", onPointerCancel, false);
        }
        if (shouldStopPropagation)
          e7.stopPropagation();
      };
      pressProps2.onMouseDown = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        if (e7.button === 0) {
          if ($f6c31cce2adf654f$var$shouldPreventDefault(e7.currentTarget))
            e7.preventDefault();
          e7.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e7) => {
        if (!e7.currentTarget.contains(e7.target) || state.pointerType === "virtual")
          return;
        if (e7.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e7, e7.currentTarget))
          triggerPressUp(e7, state.pointerType || e7.pointerType);
      };
      let onPointerMove = (e7) => {
        if (e7.pointerId !== state.activePointerId)
          return;
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e7, state.target)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType);
          }
        } else if (state.target && state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType, false);
          cancelOnPointerExit(e7);
        }
      };
      let onPointerUp = (e7) => {
        if (e7.pointerId === state.activePointerId && state.isPressed && e7.button === 0 && state.target) {
          if ($f6c31cce2adf654f$var$isOverTarget(e7, state.target) && state.pointerType != null)
            triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType);
          else if (state.isOverTarget && state.pointerType != null)
            triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress)
            (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        }
      };
      let onPointerCancel = (e7) => {
        cancel(e7);
      };
      pressProps2.onDragStart = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        cancel(e7);
      };
    } else {
      pressProps2.onMouseDown = (e7) => {
        if (e7.button !== 0 || !e7.currentTarget.contains(e7.target))
          return;
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e7.currentTarget))
          e7.preventDefault();
        if (state.ignoreEmulatedMouseEvents) {
          e7.stopPropagation();
          return;
        }
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e7.currentTarget;
        state.pointerType = (0, $6a7db85432448f7f$export$60278871457622de)(e7.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled2 && !preventFocusOnPress)
          (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e7.currentTarget);
        let shouldStopPropagation = triggerPressStart(e7, state.pointerType);
        if (shouldStopPropagation)
          e7.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "mouseup", onMouseUp, false);
      };
      pressProps2.onMouseEnter = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = true;
          shouldStopPropagation = triggerPressStart(e7, state.pointerType);
        }
        if (shouldStopPropagation)
          e7.stopPropagation();
      };
      pressProps2.onMouseLeave = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e7, state.pointerType, false);
          cancelOnPointerExit(e7);
        }
        if (shouldStopPropagation)
          e7.stopPropagation();
      };
      pressProps2.onMouseUp = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        if (!state.ignoreEmulatedMouseEvents && e7.button === 0)
          triggerPressUp(e7, state.pointerType || "mouse");
      };
      let onMouseUp = (e7) => {
        if (e7.button !== 0)
          return;
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e7, state.target) && state.pointerType != null)
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType);
        else if (state.target && state.isOverTarget && state.pointerType != null)
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType, false);
        state.isOverTarget = false;
      };
      pressProps2.onTouchStart = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e7.nativeEvent);
        if (!touch)
          return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e7.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled2 && !preventFocusOnPress)
          (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e7.currentTarget);
        if (!allowTextSelectionOnPress)
          (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
        let shouldStopPropagation = triggerPressStart(e7, state.pointerType);
        if (shouldStopPropagation)
          e7.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7.currentTarget), "scroll", onScroll, true);
      };
      pressProps2.onTouchMove = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        if (!state.isPressed) {
          e7.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e7.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e7.currentTarget)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            shouldStopPropagation = triggerPressStart(e7, state.pointerType);
          }
        } else if (state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e7, state.pointerType, false);
          cancelOnPointerExit(e7);
        }
        if (shouldStopPropagation)
          e7.stopPropagation();
      };
      pressProps2.onTouchEnd = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        if (!state.isPressed) {
          e7.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e7.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e7.currentTarget) && state.pointerType != null) {
          triggerPressUp(e7, state.pointerType);
          shouldStopPropagation = triggerPressEnd(e7, state.pointerType);
        } else if (state.isOverTarget && state.pointerType != null)
          shouldStopPropagation = triggerPressEnd(e7, state.pointerType, false);
        if (shouldStopPropagation)
          e7.stopPropagation();
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (state.target && !allowTextSelectionOnPress)
          (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        removeAllGlobalListeners();
      };
      pressProps2.onTouchCancel = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        e7.stopPropagation();
        if (state.isPressed)
          cancel(e7);
      };
      let onScroll = (e7) => {
        if (state.isPressed && e7.target.contains(state.target))
          cancel({
            currentTarget: state.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
            altKey: false
          });
      };
      pressProps2.onDragStart = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        cancel(e7);
      };
    }
    return pressProps2;
  }, [
    addGlobalListener,
    isDisabled2,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
    cancel,
    cancelOnPointerExit,
    triggerPressEnd,
    triggerPressStart,
    triggerPressUp
  ]);
  (0, import_react19.useEffect)(() => {
    return () => {
      var _ref_current_target;
      if (!allowTextSelectionOnPress)
        (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)((_ref_current_target = ref.current.target) !== null && _ref_current_target !== void 0 ? _ref_current_target : void 0);
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, pressProps)
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
  const { key, code } = event;
  const element = currentTarget;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
  !((role === "link" || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0)
    return targetTouches[0];
  return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i13 = 0; i13 < changedTouches.length; i13++) {
    const touch = changedTouches[i13];
    if (touch.identifier === pointerId)
      return touch;
  }
  return null;
}
function $f6c31cce2adf654f$var$createEvent(target, e7) {
  return {
    currentTarget: target,
    shiftKey: e7.shiftKey,
    ctrlKey: e7.ctrlKey,
    metaKey: e7.metaKey,
    altKey: e7.altKey
  };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
  let offsetX = 0;
  let offsetY = 0;
  if (point.width !== void 0)
    offsetX = point.width / 2;
  else if (point.radiusX !== void 0)
    offsetX = point.radiusX;
  if (point.height !== void 0)
    offsetY = point.height / 2;
  else if (point.radiusY !== void 0)
    offsetY = point.radiusY;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a15, b7) {
  if (a15.left > b7.right || b7.left > a15.right)
    return false;
  if (a15.top > b7.bottom || b7.top > a15.bottom)
    return false;
  return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
  return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
  return !(target instanceof HTMLElement) || !target.hasAttribute("draggable");
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
  if (target instanceof HTMLInputElement)
    return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
  if (target instanceof HTMLButtonElement)
    return target.type !== "submit" && target.type !== "reset";
  if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target))
    return false;
  return true;
}
var $f6c31cce2adf654f$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
  return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}

// node_modules/@react-aria/interactions/dist/Pressable.mjs
var import_react20 = __toESM(require_react(), 1);
var $3b117e43dc0ca95d$export$27c701ed9e449e99 = (0, import_react20.default).forwardRef(({ children, ...props }, ref) => {
  ref = (0, $df56164dff5785e2$export$4338b53315abf666)(ref);
  let { pressProps } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
    ...props,
    ref
  });
  let child = (0, import_react20.default).Children.only(children);
  return (0, import_react20.default).cloneElement(
    child,
    // @ts-ignore
    {
      ref,
      ...(0, $3ef42575df84b30b$export$9d1611c77c2fe928)(child.props, pressProps)
    }
  );
});

// node_modules/@react-aria/interactions/dist/PressResponder.mjs
var import_react21 = __toESM(require_react(), 1);
var $f1ab8c75478c6f73$export$3351871ee4b288b8 = (0, import_react21.default).forwardRef(({ children, ...props }, ref) => {
  let isRegistered = (0, import_react21.useRef)(false);
  let prevContext = (0, import_react21.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  ref = (0, $df56164dff5785e2$export$4338b53315abf666)(ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref));
  let context = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(prevContext || {}, {
    ...props,
    ref,
    register() {
      isRegistered.current = true;
      if (prevContext)
        prevContext.register();
    }
  });
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(prevContext, ref);
  (0, import_react21.useEffect)(() => {
    if (!isRegistered.current) {
      console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
      isRegistered.current = true;
    }
  }, []);
  return (0, import_react21.default).createElement((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5).Provider, {
    value: context
  }, children);
});

// node_modules/@react-aria/interactions/dist/utils.mjs
var import_react22 = __toESM(require_react(), 1);
var $8a9cb279dc87e130$export$905e7fc544a71f36 = class {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = true;
    this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation();
    this.isPropagationStopped = () => true;
  }
  isPropagationStopped() {
    return false;
  }
  persist() {
  }
  constructor(type, nativeEvent) {
    this.nativeEvent = nativeEvent;
    this.target = nativeEvent.target;
    this.currentTarget = nativeEvent.currentTarget;
    this.relatedTarget = nativeEvent.relatedTarget;
    this.bubbles = nativeEvent.bubbles;
    this.cancelable = nativeEvent.cancelable;
    this.defaultPrevented = nativeEvent.defaultPrevented;
    this.eventPhase = nativeEvent.eventPhase;
    this.isTrusted = nativeEvent.isTrusted;
    this.timeStamp = nativeEvent.timeStamp;
    this.type = type;
  }
};
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = (0, import_react22.useRef)({
    isFocused: false,
    observer: null
  });
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  let dispatchBlur = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e7) => {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e7);
  });
  return (0, import_react22.useCallback)((e7) => {
    if (e7.target instanceof HTMLButtonElement || e7.target instanceof HTMLInputElement || e7.target instanceof HTMLTextAreaElement || e7.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e7.target;
      let onBlurHandler = (e8) => {
        stateRef.current.isFocused = false;
        if (target.disabled)
          dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e8));
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}

// node_modules/@react-aria/interactions/dist/useFocus.mjs
var import_react23 = __toESM(require_react(), 1);
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled: isDisabled2, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = (0, import_react23.useCallback)((e7) => {
    if (e7.target === e7.currentTarget) {
      if (onBlurProp)
        onBlurProp(e7);
      if (onFocusChange)
        onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  const onFocus = (0, import_react23.useCallback)((e7) => {
    const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.target);
    if (e7.target === e7.currentTarget && ownerDocument.activeElement === e7.target) {
      if (onFocusProp)
        onFocusProp(e7);
      if (onFocusChange)
        onFocusChange(true);
      onSyntheticFocus(e7);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled2 && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled2 && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}

// node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var import_react24 = __toESM(require_react(), 1);
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e7) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers)
    handler(modality, e7);
}
function $507fabe10e71c6fb$var$isValidKey(e7) {
  return !(e7.metaKey || !(0, $c87311424ea30a05$export$9ac100e40613ea10)() && e7.altKey || e7.ctrlKey || e7.key === "Control" || e7.key === "Shift" || e7.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e7) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e7)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e7);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e7) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e7.type === "mousedown" || e7.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e7);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e7) {
  if ((0, $6a7db85432448f7f$export$60278871457622de)(e7)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e7) {
  if (e7.target === window || e7.target === document)
    return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e7);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element)))
    return;
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  if (loadListener)
    documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject))
    return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let loadListener;
  if (documentObject.readyState !== "loading")
    $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined")
  $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
var $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e7) {
  var _e_target;
  const IHTMLInputElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7 === null || e7 === void 0 ? void 0 : e7.target).HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7 === null || e7 === void 0 ? void 0 : e7.target).HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7 === null || e7 === void 0 ? void 0 : e7.target).HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7 === null || e7 === void 0 ? void 0 : e7.target).KeyboardEvent : KeyboardEvent;
  isTextInput = isTextInput || (e7 === null || e7 === void 0 ? void 0 : e7.target) instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(e7 === null || e7 === void 0 ? void 0 : (_e_target = e7.target) === null || _e_target === void 0 ? void 0 : _e_target.type) || (e7 === null || e7 === void 0 ? void 0 : e7.target) instanceof IHTMLTextAreaElement || (e7 === null || e7 === void 0 ? void 0 : e7.target) instanceof IHTMLElement && (e7 === null || e7 === void 0 ? void 0 : e7.target.isContentEditable);
  return !(isTextInput && modality === "keyboard" && e7 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e7.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  (0, import_react24.useEffect)(() => {
    let handler = (modality, e7) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e7))
        return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}

// node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var import_react25 = __toESM(require_react(), 1);
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled: isDisabled2, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = (0, import_react25.useRef)({
    isFocusWithin: false
  });
  let onBlur = (0, import_react25.useCallback)((e7) => {
    if (state.current.isFocusWithin && !e7.currentTarget.contains(e7.relatedTarget)) {
      state.current.isFocusWithin = false;
      if (onBlurWithin)
        onBlurWithin(e7);
      if (onFocusWithinChange)
        onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state
  ]);
  let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  let onFocus = (0, import_react25.useCallback)((e7) => {
    if (!state.current.isFocusWithin && document.activeElement === e7.target) {
      if (onFocusWithin)
        onFocusWithin(e7);
      if (onFocusWithinChange)
        onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e7);
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus
  ]);
  if (isDisabled2)
    return {
      focusWithinProps: {
        // These should not have been null, that would conflict in mergeProps
        onFocus: void 0,
        onBlur: void 0
      }
    };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}

// node_modules/@react-aria/interactions/dist/useHover.mjs
var import_react26 = __toESM(require_react(), 1);
var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
var $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e7) {
  if (e7.pointerType === "touch")
    $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined")
    return;
  if (typeof PointerEvent !== "undefined")
    document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
  else
    document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  $6179b936705e76d3$var$hoverCount++;
  return () => {
    $6179b936705e76d3$var$hoverCount--;
    if ($6179b936705e76d3$var$hoverCount > 0)
      return;
    if (typeof PointerEvent !== "undefined")
      document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else
      document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled: isDisabled2 } = props;
  let [isHovered, setHovered] = (0, import_react26.useState)(false);
  let state = (0, import_react26.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react26.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { hoverProps, triggerHoverEnd } = (0, import_react26.useMemo)(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled2 || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target))
        return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      if (onHoverStart)
        onHoverStart({
          type: "hoverstart",
          target,
          pointerType
        });
      if (onHoverChange)
        onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered)
        return;
      state.isHovered = false;
      let target = event.currentTarget;
      if (onHoverEnd)
        onHoverEnd({
          type: "hoverend",
          target,
          pointerType
        });
      if (onHoverChange)
        onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e7) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e7.pointerType === "mouse")
          return;
        triggerHoverStart(e7, e7.pointerType);
      };
      hoverProps2.onPointerLeave = (e7) => {
        if (!isDisabled2 && e7.currentTarget.contains(e7.target))
          triggerHoverEnd2(e7, e7.pointerType);
      };
    } else {
      hoverProps2.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps2.onMouseEnter = (e7) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents)
          triggerHoverStart(e7, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps2.onMouseLeave = (e7) => {
        if (!isDisabled2 && e7.currentTarget.contains(e7.target))
          triggerHoverEnd2(e7, "mouse");
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled2,
    state
  ]);
  (0, import_react26.useEffect)(() => {
    if (isDisabled2)
      triggerHoverEnd({
        currentTarget: state.target
      }, state.pointerType);
  }, [
    isDisabled2
  ]);
  return {
    hoverProps,
    isHovered
  };
}

// node_modules/@react-aria/interactions/dist/useInteractOutside.mjs
var import_react27 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useMove.mjs
var import_react28 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useScrollWheel.mjs
var import_react29 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useLongPress.mjs
var import_react30 = __toESM(require_react(), 1);

// node_modules/@react-aria/focus/dist/FocusScope.mjs
var import_react31 = __toESM(require_react(), 1);
var $9bf71ea28793e738$var$FocusContext = (0, import_react31.default).createContext(null);
var $9bf71ea28793e738$var$focusableElements = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
];
var $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
var $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
  if (!element)
    return false;
  if (!scope)
    return false;
  return scope.some((node) => node.contains(element));
}
var $9bf71ea28793e738$var$Tree = class _$9bf71ea28793e738$var$Tree {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(data) {
    return this.fastMap.get(data);
  }
  addTreeNode(scopeRef, parent, nodeToRestore) {
    let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
    if (!parentNode)
      return;
    let node = new $9bf71ea28793e738$var$TreeNode({
      scopeRef
    });
    parentNode.addChild(node);
    node.parent = parentNode;
    this.fastMap.set(scopeRef, node);
    if (nodeToRestore)
      node.nodeToRestore = nodeToRestore;
  }
  addNode(node) {
    this.fastMap.set(node.scopeRef, node);
  }
  removeTreeNode(scopeRef) {
    if (scopeRef === null)
      return;
    let node = this.fastMap.get(scopeRef);
    if (!node)
      return;
    let parentNode = node.parent;
    for (let current of this.traverse())
      if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current))
        current.nodeToRestore = node.nodeToRestore;
    let children = node.children;
    if (parentNode) {
      parentNode.removeChild(node);
      if (children.size > 0)
        children.forEach((child) => parentNode && parentNode.addChild(child));
    }
    this.fastMap.delete(node.scopeRef);
  }
  // Pre Order Depth First
  *traverse(node = this.root) {
    if (node.scopeRef != null)
      yield node;
    if (node.children.size > 0)
      for (let child of node.children)
        yield* this.traverse(child);
  }
  clone() {
    var _node_parent;
    let newTree = new _$9bf71ea28793e738$var$Tree();
    var _node_parent_scopeRef;
    for (let node of this.traverse())
      newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
    return newTree;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map();
    this.root = new $9bf71ea28793e738$var$TreeNode({
      scopeRef: null
    });
    this.fastMap.set(null, this.root);
  }
};
var $9bf71ea28793e738$var$TreeNode = class {
  addChild(node) {
    this.children.add(node);
    node.parent = this;
  }
  removeChild(node) {
    this.children.delete(node);
    node.parent = void 0;
  }
  constructor(props) {
    this.children = /* @__PURE__ */ new Set();
    this.contain = false;
    this.scopeRef = props.scopeRef;
  }
};
var $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();

// node_modules/@react-aria/focus/dist/useFocusRing.mjs
var import_react32 = __toESM(require_react(), 1);
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = (0, import_react32.useRef)({
    isFocused: false,
    isFocusVisible: autoFocus || (0, $507fabe10e71c6fb$export$b9b3dfddab17db27)()
  });
  let [isFocused, setFocused] = (0, import_react32.useState)(false);
  let [isFocusVisibleState, setFocusVisible] = (0, import_react32.useState)(() => state.current.isFocused && state.current.isFocusVisible);
  let updateState = (0, import_react32.useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = (0, import_react32.useCallback)((isFocused2) => {
    state.current.isFocused = isFocused2;
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  (0, $507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = (0, $9ab94262bd0047c7$export$420e68273165f4ec)({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

// node_modules/@react-aria/focus/dist/FocusRing.mjs
var import_react33 = __toESM(require_react(), 1);

// node_modules/@react-aria/focus/dist/useFocusable.mjs
var import_react34 = __toESM(require_react(), 1);
var $e6afbd83fe6ebbd2$var$FocusableContext = (0, import_react34.default).createContext(null);
function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
  let { children, ...otherProps } = props;
  let objRef = (0, $df56164dff5785e2$export$4338b53315abf666)(ref);
  let context = {
    ...otherProps,
    ref: objRef
  };
  return (0, import_react34.default).createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
    value: context
  }, children);
}
var $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = (0, import_react34.default).forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider);

// node_modules/@react-aria/focus/dist/useHasTabbableChild.mjs
var import_react35 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/button/button.js
var import_react43 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
var import_react40 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t14, e7, n13) => e7 in t14 ? i(t14, e7, { enumerable: true, configurable: true, writable: true, value: n13 }) : t14[e7] = n13;
var r2 = (t14, e7, n13) => (d(t14, typeof e7 != "symbol" ? e7 + "" : e7, n13), n13);
var o = class {
  constructor() {
    r2(this, "current", this.detect());
    r2(this, "handoffState", "pending");
    r2(this, "currentId", 0);
  }
  set(e7) {
    this.current !== e7 && (this.handoffState = "pending", this.currentId = 0, this.current = e7);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/utils/owner.js
function u(r15) {
  return s.isServer ? null : r15 instanceof Node ? r15.ownerDocument : r15 != null && r15.hasOwnProperty("current") && r15.current instanceof Node ? r15.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react36 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t(e7) {
  typeof queueMicrotask == "function" ? queueMicrotask(e7) : Promise.resolve().then(e7).catch((o18) => setTimeout(() => {
    throw o18;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n13 = [], r15 = { addEventListener(e7, t14, s16, a15) {
    return e7.addEventListener(t14, s16, a15), r15.add(() => e7.removeEventListener(t14, s16, a15));
  }, requestAnimationFrame(...e7) {
    let t14 = requestAnimationFrame(...e7);
    return r15.add(() => cancelAnimationFrame(t14));
  }, nextFrame(...e7) {
    return r15.requestAnimationFrame(() => r15.requestAnimationFrame(...e7));
  }, setTimeout(...e7) {
    let t14 = setTimeout(...e7);
    return r15.add(() => clearTimeout(t14));
  }, microTask(...e7) {
    let t14 = { current: true };
    return t(() => {
      t14.current && e7[0]();
    }), r15.add(() => {
      t14.current = false;
    });
  }, style(e7, t14, s16) {
    let a15 = e7.style.getPropertyValue(t14);
    return Object.assign(e7.style, { [t14]: s16 }), this.add(() => {
      Object.assign(e7.style, { [t14]: a15 });
    });
  }, group(e7) {
    let t14 = o2();
    return e7(t14), this.add(() => t14.dispose());
  }, add(e7) {
    return n13.includes(e7) || n13.push(e7), () => {
      let t14 = n13.indexOf(e7);
      if (t14 >= 0)
        for (let s16 of n13.splice(t14, 1))
          s16();
    };
  }, dispose() {
    for (let e7 of n13.splice(0))
      e7();
  } };
  return r15;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e7] = (0, import_react36.useState)(o2);
  return (0, import_react36.useEffect)(() => () => e7.dispose(), [e7]), e7;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react39 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react38 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react37 = __toESM(require_react(), 1);
var n = (e7, t14) => {
  s.isServer ? (0, import_react37.useEffect)(e7, t14) : (0, import_react37.useLayoutEffect)(e7, t14);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s3(e7) {
  let r15 = (0, import_react38.useRef)(e7);
  return n(() => {
    r15.current = e7;
  }, [e7]), r15;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o4 = function(t14) {
  let e7 = s3(t14);
  return import_react39.default.useCallback((...r15) => e7.current(...r15), [e7]);
};

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
function E(e7) {
  let t14 = e7.width / 2, n13 = e7.height / 2;
  return { top: e7.clientY - n13, right: e7.clientX + t14, bottom: e7.clientY + n13, left: e7.clientX - t14 };
}
function P(e7, t14) {
  return !(!e7 || !t14 || e7.right < t14.left || e7.left > t14.right || e7.bottom < t14.top || e7.top > t14.bottom);
}
function w({ disabled: e7 = false } = {}) {
  let t14 = (0, import_react40.useRef)(null), [n13, l16] = (0, import_react40.useState)(false), r15 = p(), o18 = o4(() => {
    t14.current = null, l16(false), r15.dispose();
  }), f20 = o4((s16) => {
    if (r15.dispose(), t14.current === null) {
      t14.current = s16.currentTarget, l16(true);
      {
        let i13 = u(s16.currentTarget);
        r15.addEventListener(i13, "pointerup", o18, false), r15.addEventListener(i13, "pointermove", (c13) => {
          if (t14.current) {
            let p8 = E(c13);
            l16(P(p8, t14.current.getBoundingClientRect()));
          }
        }, false), r15.addEventListener(i13, "pointercancel", o18, false);
      }
    }
  });
  return { pressed: n13, pressProps: e7 ? {} : { onPointerDown: f20, onPointerUp: o18, onClick: o18 } };
}

// node_modules/@headlessui/react/dist/internal/disabled.js
var import_react41 = __toESM(require_react(), 1);
var e = (0, import_react41.createContext)(void 0);
function a3() {
  return (0, import_react41.useContext)(e);
}
function l({ value: t14, children: o18 }) {
  return import_react41.default.createElement(e.Provider, { value: t14 }, o18);
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react42 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t3(...r15) {
  return Array.from(new Set(r15.flatMap((n13) => typeof n13 == "string" ? n13.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/match.js
function u2(r15, n13, ...a15) {
  if (r15 in n13) {
    let e7 = n13[r15];
    return typeof e7 == "function" ? e7(...a15) : e7;
  }
  let t14 = new Error(`Tried to handle "${r15}" but there is no handler defined. Only defined handlers are: ${Object.keys(n13).map((e7) => `"${e7}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t14, u2), t14;
}

// node_modules/@headlessui/react/dist/utils/render.js
var O = ((a15) => (a15[a15.None = 0] = "None", a15[a15.RenderStrategy = 1] = "RenderStrategy", a15[a15.Static = 2] = "Static", a15))(O || {});
var M = ((e7) => (e7[e7.Unmount = 0] = "Unmount", e7[e7.Hidden = 1] = "Hidden", e7))(M || {});
function H({ ourProps: r15, theirProps: n13, slot: e7, defaultTag: a15, features: s16, visible: t14 = true, name: l16, mergeRefs: i13 }) {
  i13 = i13 != null ? i13 : A;
  let o18 = N(n13, r15);
  if (t14)
    return b(o18, e7, a15, l16, i13);
  let y9 = s16 != null ? s16 : 0;
  if (y9 & 2) {
    let { static: f20 = false, ...u17 } = o18;
    if (f20)
      return b(u17, e7, a15, l16, i13);
  }
  if (y9 & 1) {
    let { unmount: f20 = true, ...u17 } = o18;
    return u2(f20 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return b({ ...u17, hidden: true, style: { display: "none" } }, e7, a15, l16, i13);
    } });
  }
  return b(o18, e7, a15, l16, i13);
}
function b(r15, n13 = {}, e7, a15, s16) {
  let { as: t14 = e7, children: l16, refName: i13 = "ref", ...o18 } = h(r15, ["unmount", "static"]), y9 = r15.ref !== void 0 ? { [i13]: r15.ref } : {}, f20 = typeof l16 == "function" ? l16(n13) : l16;
  "className" in o18 && o18.className && typeof o18.className == "function" && (o18.className = o18.className(n13)), o18["aria-labelledby"] && o18["aria-labelledby"] === o18.id && (o18["aria-labelledby"] = void 0);
  let u17 = {};
  if (n13) {
    let d16 = false, p8 = [];
    for (let [c13, T12] of Object.entries(n13))
      typeof T12 == "boolean" && (d16 = true), T12 === true && p8.push(c13.replace(/([A-Z])/g, (g8) => `-${g8.toLowerCase()}`));
    if (d16) {
      u17["data-headlessui-state"] = p8.join(" ");
      for (let c13 of p8)
        u17[`data-${c13}`] = "";
    }
  }
  if (t14 === import_react42.Fragment && (Object.keys(m2(o18)).length > 0 || Object.keys(m2(u17)).length > 0))
    if (!(0, import_react42.isValidElement)(f20) || Array.isArray(f20) && f20.length > 1) {
      if (Object.keys(m2(o18)).length > 0)
        throw new Error(['Passing props on "Fragment"!', "", `The current component <${a15} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m2(o18)).concat(Object.keys(m2(u17))).map((d16) => `  - ${d16}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d16) => `  - ${d16}`).join(`
`)].join(`
`));
    } else {
      let d16 = f20.props, p8 = d16 == null ? void 0 : d16.className, c13 = typeof p8 == "function" ? (...F6) => t3(p8(...F6), o18.className) : t3(p8, o18.className), T12 = c13 ? { className: c13 } : {}, g8 = N(f20.props, m2(h(o18, ["ref"])));
      for (let F6 in u17)
        F6 in g8 && delete u17[F6];
      return (0, import_react42.cloneElement)(f20, Object.assign({}, g8, u17, y9, { ref: s16(f20.ref, y9.ref) }, T12));
    }
  return (0, import_react42.createElement)(t14, Object.assign({}, h(o18, ["ref"]), t14 !== import_react42.Fragment && y9, t14 !== import_react42.Fragment && u17), f20);
}
function U() {
  let r15 = (0, import_react42.useRef)([]), n13 = (0, import_react42.useCallback)((e7) => {
    for (let a15 of r15.current)
      a15 != null && (typeof a15 == "function" ? a15(e7) : a15.current = e7);
  }, []);
  return (...e7) => {
    if (!e7.every((a15) => a15 == null))
      return r15.current = e7, n13;
  };
}
function A(...r15) {
  return r15.every((n13) => n13 == null) ? void 0 : (n13) => {
    for (let e7 of r15)
      e7 != null && (typeof e7 == "function" ? e7(n13) : e7.current = n13);
  };
}
function N(...r15) {
  var a15;
  if (r15.length === 0)
    return {};
  if (r15.length === 1)
    return r15[0];
  let n13 = {}, e7 = {};
  for (let s16 of r15)
    for (let t14 in s16)
      t14.startsWith("on") && typeof s16[t14] == "function" ? ((a15 = e7[t14]) != null || (e7[t14] = []), e7[t14].push(s16[t14])) : n13[t14] = s16[t14];
  if (n13.disabled || n13["aria-disabled"])
    for (let s16 in e7)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s16) && (e7[s16] = [(t14) => {
        var l16;
        return (l16 = t14 == null ? void 0 : t14.preventDefault) == null ? void 0 : l16.call(t14);
      }]);
  for (let s16 in e7)
    Object.assign(n13, { [s16](t14, ...l16) {
      let i13 = e7[s16];
      for (let o18 of i13) {
        if ((t14 instanceof Event || (t14 == null ? void 0 : t14.nativeEvent) instanceof Event) && t14.defaultPrevented)
          return;
        o18(t14, ...l16);
      }
    } });
  return n13;
}
function D(...r15) {
  var a15;
  if (r15.length === 0)
    return {};
  if (r15.length === 1)
    return r15[0];
  let n13 = {}, e7 = {};
  for (let s16 of r15)
    for (let t14 in s16)
      t14.startsWith("on") && typeof s16[t14] == "function" ? ((a15 = e7[t14]) != null || (e7[t14] = []), e7[t14].push(s16[t14])) : n13[t14] = s16[t14];
  for (let s16 in e7)
    Object.assign(n13, { [s16](...t14) {
      let l16 = e7[s16];
      for (let i13 of l16)
        i13 == null || i13(...t14);
    } });
  return n13;
}
function I(r15) {
  var n13;
  return Object.assign((0, import_react42.forwardRef)(r15), { displayName: (n13 = r15.displayName) != null ? n13 : r15.name });
}
function m2(r15) {
  let n13 = Object.assign({}, r15);
  for (let e7 in n13)
    n13[e7] === void 0 && delete n13[e7];
  return n13;
}
function h(r15, n13 = []) {
  let e7 = Object.assign({}, r15);
  for (let a15 of n13)
    a15 in e7 && delete e7[a15];
  return e7;
}

// node_modules/@headlessui/react/dist/components/button/button.js
var v2 = "button";
function E3(a15, u17) {
  var p8;
  let l16 = a3(), { disabled: e7 = l16 || false, autoFocus: t14 = false, ...o18 } = a15, { isFocusVisible: r15, focusProps: i13 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: t14 }), { isHovered: s16, hoverProps: T12 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), { pressed: n13, pressProps: f20 } = w({ disabled: e7 }), m13 = D({ ref: u17, type: (p8 = o18.type) != null ? p8 : "button", disabled: e7 || void 0, autoFocus: t14 }, i13, T12, f20), d16 = (0, import_react43.useMemo)(() => ({ disabled: e7, hover: s16, focus: r15, active: n13, autofocus: t14 }), [e7, s16, r15, n13, t14]);
  return H({ ourProps: m13, theirProps: o18, slot: d16, defaultTag: v2, name: "Button" });
}
var h2 = I(E3);

// node_modules/@headlessui/react/dist/components/checkbox/checkbox.js
var import_react52 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react44 = __toESM(require_react(), 1);
function T(l16, r15, c13) {
  let [i13, s16] = (0, import_react44.useState)(c13), e7 = l16 !== void 0, t14 = (0, import_react44.useRef)(e7), u17 = (0, import_react44.useRef)(false), d16 = (0, import_react44.useRef)(false);
  return e7 && !t14.current && !u17.current ? (u17.current = true, t14.current = e7, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e7 && t14.current && !d16.current && (d16.current = true, t14.current = e7, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e7 ? l16 : i13, o4((n13) => (e7 || s16(n13), r15 == null ? void 0 : r15(n13)))];
}

// node_modules/@headlessui/react/dist/hooks/use-default-value.js
var import_react45 = __toESM(require_react(), 1);
function l2(e7) {
  let [t14] = (0, import_react45.useState)(e7);
  return t14;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react46 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/form-fields.js
var import_react47 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/utils/form.js
function e2(i13 = {}, s16 = null, t14 = []) {
  for (let [r15, n13] of Object.entries(i13))
    o6(t14, f3(s16, r15), n13);
  return t14;
}
function f3(i13, s16) {
  return i13 ? i13 + "[" + s16 + "]" : s16;
}
function o6(i13, s16, t14) {
  if (Array.isArray(t14))
    for (let [r15, n13] of t14.entries())
      o6(i13, f3(s16, r15.toString()), n13);
  else
    t14 instanceof Date ? i13.push([s16, t14.toISOString()]) : typeof t14 == "boolean" ? i13.push([s16, t14 ? "1" : "0"]) : typeof t14 == "string" ? i13.push([s16, t14]) : typeof t14 == "number" ? i13.push([s16, `${t14}`]) : t14 == null ? i13.push([s16, ""]) : e2(t14, s16, i13);
}
function p2(i13) {
  var t14, r15;
  let s16 = (t14 = i13 == null ? void 0 : i13.form) != null ? t14 : i13.closest("form");
  if (s16) {
    for (let n13 of s16.elements)
      if (n13 !== i13 && (n13.tagName === "INPUT" && n13.type === "submit" || n13.tagName === "BUTTON" && n13.type === "submit" || n13.nodeName === "INPUT" && n13.type === "image")) {
        n13.click();
        return;
      }
    (r15 = s16.requestSubmit) == null || r15.call(s16);
  }
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a4 = "div";
var s4 = ((e7) => (e7[e7.None = 1] = "None", e7[e7.Focusable = 2] = "Focusable", e7[e7.Hidden = 4] = "Hidden", e7))(s4 || {});
function l3(t14, r15) {
  var n13;
  let { features: d16 = 1, ...e7 } = t14, o18 = { ref: r15, "aria-hidden": (d16 & 2) === 2 ? true : (n13 = e7["aria-hidden"]) != null ? n13 : void 0, hidden: (d16 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(d16 & 4) === 4 && (d16 & 2) !== 2 && { display: "none" } } };
  return H({ ourProps: o18, theirProps: e7, slot: {}, defaultTag: a4, name: "Hidden" });
}
var T2 = I(l3);

// node_modules/@headlessui/react/dist/internal/form-fields.js
var f4 = (0, import_react47.createContext)(null);
function W(t14) {
  let [e7, r15] = (0, import_react47.useState)(null);
  return import_react47.default.createElement(f4.Provider, { value: { target: e7 } }, t14.children, import_react47.default.createElement(T2, { features: s4.Hidden, ref: r15 }));
}
function c2({ children: t14 }) {
  let e7 = (0, import_react47.useContext)(f4);
  if (!e7)
    return import_react47.default.createElement(import_react47.default.Fragment, null, t14);
  let { target: r15 } = e7;
  return r15 ? (0, import_react_dom.createPortal)(import_react47.default.createElement(import_react47.default.Fragment, null, t14), r15) : null;
}
function j2({ data: t14, form: e7, disabled: r15, onReset: n13, overrides: F6 }) {
  let [i13, a15] = (0, import_react47.useState)(null), p8 = p();
  return (0, import_react47.useEffect)(() => {
    if (n13 && i13)
      return p8.addEventListener(i13, "reset", n13);
  }, [i13, e7, n13]), import_react47.default.createElement(c2, null, import_react47.default.createElement(C, { setForm: a15, formId: e7 }), e2(t14).map(([s16, v7]) => import_react47.default.createElement(T2, { features: s4.Hidden, ...m2({ key: s16, as: "input", type: "hidden", hidden: true, readOnly: true, form: e7, disabled: r15, name: s16, value: v7, ...F6 }) })));
}
function C({ setForm: t14, formId: e7 }) {
  return (0, import_react47.useEffect)(() => {
    if (e7) {
      let r15 = document.getElementById(e7);
      r15 && t14(r15);
    }
  }, [t14, e7]), e7 ? null : import_react47.default.createElement(T2, { features: s4.Hidden, as: "input", type: "hidden", hidden: true, readOnly: true, ref: (r15) => {
    if (!r15)
      return;
    let n13 = r15.closest("form");
    n13 && t14(n13);
  } });
}

// node_modules/@headlessui/react/dist/internal/id.js
var import_react48 = __toESM(require_react(), 1);
var e3 = (0, import_react48.createContext)(void 0);
function u5() {
  return (0, import_react48.useContext)(e3);
}
function f5({ id: t14, children: r15 }) {
  return import_react48.default.createElement(e3.Provider, { value: t14 }, r15);
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r5(n13) {
  let e7 = n13.parentElement, l16 = null;
  for (; e7 && !(e7 instanceof HTMLFieldSetElement); )
    e7 instanceof HTMLLegendElement && (l16 = e7), e7 = e7.parentElement;
  let t14 = (e7 == null ? void 0 : e7.getAttribute("disabled")) === "";
  return t14 && i4(l16) ? false : t14;
}
function i4(n13) {
  if (!n13)
    return false;
  let e7 = n13.previousElementSibling;
  for (; e7 !== null; ) {
    if (e7 instanceof HTMLLegendElement)
      return false;
    e7 = e7.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react50 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react49 = __toESM(require_react(), 1);
var u6 = Symbol();
function T3(t14, n13 = true) {
  return Object.assign(t14, { [u6]: n13 });
}
function y(...t14) {
  let n13 = (0, import_react49.useRef)(t14);
  (0, import_react49.useEffect)(() => {
    n13.current = t14;
  }, [t14]);
  let c13 = o4((e7) => {
    for (let o18 of n13.current)
      o18 != null && (typeof o18 == "function" ? o18(e7) : o18.current = e7);
  });
  return t14.every((e7) => e7 == null || (e7 == null ? void 0 : e7[u6])) ? void 0 : c13;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var a5 = (0, import_react50.createContext)(null);
a5.displayName = "DescriptionContext";
function f6() {
  let r15 = (0, import_react50.useContext)(a5);
  if (r15 === null) {
    let e7 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e7, f6), e7;
  }
  return r15;
}
function G() {
  var r15, e7;
  return (e7 = (r15 = (0, import_react50.useContext)(a5)) == null ? void 0 : r15.value) != null ? e7 : void 0;
}
function U2() {
  let [r15, e7] = (0, import_react50.useState)([]);
  return [r15.length > 0 ? r15.join(" ") : void 0, (0, import_react50.useMemo)(() => function(t14) {
    let i13 = o4((n13) => (e7((s16) => [...s16, n13]), () => e7((s16) => {
      let o18 = s16.slice(), p8 = o18.indexOf(n13);
      return p8 !== -1 && o18.splice(p8, 1), o18;
    }))), l16 = (0, import_react50.useMemo)(() => ({ register: i13, slot: t14.slot, name: t14.name, props: t14.props, value: t14.value }), [i13, t14.slot, t14.name, t14.props, t14.value]);
    return import_react50.default.createElement(a5.Provider, { value: l16 }, t14.children);
  }, [e7])];
}
var S2 = "p";
function C2(r15, e7) {
  let d16 = (0, import_react46.useId)(), t14 = a3(), { id: i13 = `headlessui-description-${d16}`, ...l16 } = r15, n13 = f6(), s16 = y(e7);
  n(() => n13.register(i13), [i13, n13.register]);
  let o18 = t14 || false, p8 = (0, import_react50.useMemo)(() => ({ ...n13.slot, disabled: o18 }), [n13.slot, o18]), D9 = { ref: s16, ...n13.props, id: i13 };
  return H({ ourProps: D9, theirProps: l16, slot: p8, defaultTag: S2, name: n13.name || "Description" });
}
var _ = I(C2);
var w3 = Object.assign(_, {});

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r15) => (r15.Space = " ", r15.Enter = "Enter", r15.Escape = "Escape", r15.Backspace = "Backspace", r15.Delete = "Delete", r15.ArrowLeft = "ArrowLeft", r15.ArrowUp = "ArrowUp", r15.ArrowRight = "ArrowRight", r15.ArrowDown = "ArrowDown", r15.Home = "Home", r15.End = "End", r15.PageUp = "PageUp", r15.PageDown = "PageDown", r15.Tab = "Tab", r15))(o8 || {});

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react51 = __toESM(require_react(), 1);
var c4 = (0, import_react51.createContext)(null);
c4.displayName = "LabelContext";
function P4() {
  let r15 = (0, import_react51.useContext)(c4);
  if (r15 === null) {
    let l16 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l16, P4), l16;
  }
  return r15;
}
function I2(r15) {
  var a15, e7, o18;
  let l16 = (e7 = (a15 = (0, import_react51.useContext)(c4)) == null ? void 0 : a15.value) != null ? e7 : void 0;
  return ((o18 = r15 == null ? void 0 : r15.length) != null ? o18 : 0) > 0 ? [l16, ...r15].filter(Boolean).join(" ") : l16;
}
function z({ inherit: r15 = false } = {}) {
  let l16 = I2(), [a15, e7] = (0, import_react51.useState)([]), o18 = r15 ? [l16, ...a15].filter(Boolean) : a15;
  return [o18.length > 0 ? o18.join(" ") : void 0, (0, import_react51.useMemo)(() => function(t14) {
    let s16 = o4((i13) => (e7((p8) => [...p8, i13]), () => e7((p8) => {
      let u17 = p8.slice(), d16 = u17.indexOf(i13);
      return d16 !== -1 && u17.splice(d16, 1), u17;
    }))), m13 = (0, import_react51.useMemo)(() => ({ register: s16, slot: t14.slot, name: t14.name, props: t14.props, value: t14.value }), [s16, t14.slot, t14.name, t14.props, t14.value]);
    return import_react51.default.createElement(c4.Provider, { value: m13 }, t14.children);
  }, [e7])];
}
var N2 = "label";
function G2(r15, l16) {
  var y9;
  let a15 = (0, import_react46.useId)(), e7 = P4(), o18 = u5(), g8 = a3(), { id: t14 = `headlessui-label-${a15}`, htmlFor: s16 = o18 != null ? o18 : (y9 = e7.props) == null ? void 0 : y9.htmlFor, passive: m13 = false, ...i13 } = r15, p8 = y(l16);
  n(() => e7.register(t14), [t14, e7.register]);
  let u17 = o4((L9) => {
    let b7 = L9.currentTarget;
    if (b7 instanceof HTMLLabelElement && L9.preventDefault(), e7.props && "onClick" in e7.props && typeof e7.props.onClick == "function" && e7.props.onClick(L9), b7 instanceof HTMLLabelElement) {
      let n13 = document.getElementById(b7.htmlFor);
      if (n13) {
        let E11 = n13.getAttribute("disabled");
        if (E11 === "true" || E11 === "")
          return;
        let x6 = n13.getAttribute("aria-disabled");
        if (x6 === "true" || x6 === "")
          return;
        (n13 instanceof HTMLInputElement && (n13.type === "radio" || n13.type === "checkbox") || n13.role === "radio" || n13.role === "checkbox" || n13.role === "switch") && n13.click(), n13.focus({ preventScroll: true });
      }
    }
  }), d16 = g8 || false, C7 = (0, import_react51.useMemo)(() => ({ ...e7.slot, disabled: d16 }), [e7.slot, d16]), f20 = { ref: p8, ...e7.props, id: t14, htmlFor: s16, onClick: u17 };
  return m13 && ("onClick" in f20 && (delete f20.htmlFor, delete f20.onClick), "onClick" in i13 && delete i13.onClick), H({ ourProps: f20, theirProps: i13, slot: C7, defaultTag: s16 ? N2 : "div", name: e7.name || "Label" });
}
var U3 = I(G2);
var K = Object.assign(U3, {});

// node_modules/@headlessui/react/dist/components/checkbox/checkbox.js
var se = "span";
function ie(T12, h7) {
  let C7 = (0, import_react46.useId)(), k5 = u5(), x6 = a3(), { id: g8 = k5 || `headlessui-checkbox-${C7}`, disabled: o18 = x6 || false, autoFocus: s16 = false, checked: E11, defaultChecked: v7, onChange: P7, name: d16, value: D9, form: R7, indeterminate: l16 = false, ...A7 } = T12, r15 = l2(v7), [a15, t14] = T(E11, P7, r15 != null ? r15 : false), F6 = I2(), K4 = G(), _6 = p(), [p8, c13] = (0, import_react52.useState)(false), m13 = o4(() => {
    c13(true), t14 == null || t14(!a15), _6.nextFrame(() => {
      c13(false);
    });
  }), H10 = o4((e7) => {
    if (r5(e7.currentTarget))
      return e7.preventDefault();
    e7.preventDefault(), m13();
  }), B3 = o4((e7) => {
    e7.key === o8.Space ? (e7.preventDefault(), m13()) : e7.key === o8.Enter && p2(e7.currentTarget);
  }), L9 = o4((e7) => e7.preventDefault()), { isFocusVisible: u17, focusProps: I5 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: s16 }), { isHovered: f20, hoverProps: M7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: o18 }), { pressed: b7, pressProps: U5 } = w({ disabled: o18 }), O3 = D({ ref: h7, id: g8, role: "checkbox", "aria-checked": l16 ? "mixed" : a15 ? "true" : "false", "aria-labelledby": F6, "aria-describedby": K4, "aria-disabled": o18 ? true : void 0, indeterminate: l16 ? "true" : void 0, tabIndex: 0, onKeyUp: o18 ? void 0 : B3, onKeyPress: o18 ? void 0 : L9, onClick: o18 ? void 0 : H10 }, I5, M7, U5), X3 = (0, import_react52.useMemo)(() => ({ checked: a15, disabled: o18, hover: f20, focus: u17, active: b7, indeterminate: l16, changing: p8, autofocus: s16 }), [a15, l16, o18, f20, u17, b7, p8, s16]), G10 = (0, import_react52.useCallback)(() => {
    if (r15 !== void 0)
      return t14 == null ? void 0 : t14(r15);
  }, [t14, r15]);
  return import_react52.default.createElement(import_react52.default.Fragment, null, d16 != null && import_react52.default.createElement(j2, { disabled: o18, data: { [d16]: D9 || "on" }, overrides: { type: "checkbox", checked: a15 }, form: R7, onReset: G10 }), H({ ourProps: O3, theirProps: A7, slot: X3, defaultTag: se, name: "Checkbox" }));
}
var Re = I(ie);

// node_modules/@headlessui/react/dist/components/close-button/close-button.js
var import_react54 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/close-provider.js
var import_react53 = __toESM(require_react(), 1);
var e4 = (0, import_react53.createContext)(() => {
});
function l5() {
  return (0, import_react53.useContext)(e4);
}
function u8({ value: o18, children: t14 }) {
  return import_react53.default.createElement(e4.Provider, { value: o18 }, t14);
}

// node_modules/@headlessui/react/dist/components/close-button/close-button.js
function l6(t14, e7) {
  let o18 = l5();
  return import_react54.default.createElement(h2, { ref: e7, ...D({ onClick: o18 }, t14) });
}
var y2 = I(l6);

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var React = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  return () => {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts)))
      depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index3) => deps[index3] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts)))
      resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
var approxEqual = (a15, b7) => Math.abs(a15 - b7) < 1;
var debounce = (fn, ms) => {
  let timeoutId2;
  return function(...args) {
    clearTimeout(timeoutId2);
    timeoutId2 = setTimeout(() => fn.apply(this, args), ms);
  };
};

// node_modules/@tanstack/virtual-core/dist/esm/index.js
var defaultKeyExtractor = (index3) => index3;
var defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i13 = start; i13 <= end; i13++) {
    arr.push(i13);
  }
  return arr;
};
var observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(element.getBoundingClientRect());
  if (typeof ResizeObserver === "undefined") {
    return () => {
    };
  }
  const observer = new ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry == null ? void 0 : entry.borderBoxSize) {
      const box = entry.borderBoxSize[0];
      if (box) {
        handler({ width: box.inlineSize, height: box.blockSize });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
var addEventListenerOptions = {
  passive: true
};
var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
var observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  let offset4 = 0;
  const fallback = supportsScrollend ? () => void 0 : debounce(() => {
    cb(offset4, false);
  }, instance.options.isScrollingResetDelay);
  const createHandler = (isScrolling) => () => {
    offset4 = element[instance.options.horizontal ? "scrollLeft" : "scrollTop"];
    fallback();
    cb(offset4, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  return () => {
    element.removeEventListener("scroll", handler);
    element.removeEventListener("scrollend", endHandler);
  };
};
var measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size4 = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size4;
    }
  }
  return Math.round(
    element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
  );
};
var elementScroll = (offset4, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset4 + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
var Virtualizer = class {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.isScrolling = false;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.measureElementCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        } else if (typeof ResizeObserver !== "undefined") {
          return _ro = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
              this._measureElement(entry.target, entry);
            });
          });
        } else {
          return null;
        }
      };
      return {
        disconnect: () => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.disconnect();
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined")
          delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        ...opts2
      };
    };
    this.notify = (force, sync) => {
      var _a, _b;
      const { startIndex, endIndex } = this.range ?? {
        startIndex: void 0,
        endIndex: void 0
      };
      const range = this.calculateRange();
      if (force || startIndex !== (range == null ? void 0 : range.startIndex) || endIndex !== (range == null ? void 0 : range.endIndex)) {
        (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
      }
    };
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d16) => d16());
      this.unsubs = [];
      this.scrollElement = null;
    };
    this._didMount = () => {
      this.measureElementCache.forEach(this.observer.observe);
      return () => {
        this.observer.disconnect();
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      const scrollElement = this.options.getScrollElement();
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        this.scrollElement = scrollElement;
        this._scrollToOffset(this.scrollOffset, {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.notify(false, false);
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset4, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.scrollOffset < offset4 ? "forward" : "backward" : null;
            this.scrollOffset = offset4;
            const prevIsScrolling = this.isScrolling;
            this.isScrolling = isScrolling;
            this.notify(prevIsScrolling !== isScrolling, isScrolling);
          })
        );
      }
    };
    this.getSize = () => {
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey
      ],
      (count2, paddingStart, scrollMargin, getItemKey) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count: count2,
          paddingStart,
          scrollMargin,
          getItemKey
        };
      },
      {
        key: false
      }
    );
    this.getFurthestMeasurement = (measurements, index3) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m13 = index3 - 1; m13 >= 0; m13--) {
        const measurement = measurements[m13];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a15, b7) => {
        if (a15.end === b7.end) {
          return a15.index - b7.index;
        }
        return a15.end - b7.end;
      })[0] : void 0;
    };
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: count2, paddingStart, scrollMargin, getItemKey }, itemSizeCache) => {
        const min2 = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min2);
        for (let i13 = min2; i13 < count2; i13++) {
          const key = getItemKey(i13);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i13 - 1] : this.getFurthestMeasurement(measurements, i13);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size4 = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i13);
          const end = start + size4;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i13 % this.options.lanes;
          measurements[i13] = {
            index: i13,
            start,
            size: size4,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: "getMeasurements",
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
      (measurements, outerSize, scrollOffset) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset
        }) : null;
      },
      {
        key: "calculateRange",
        debug: () => this.options.debug
      }
    );
    this.getIndexes = memo(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (rangeExtractor, range, overscan, count2) => {
        return range === null ? [] : rangeExtractor({
          startIndex: range.startIndex,
          endIndex: range.endIndex,
          overscan,
          count: count2
        });
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const item = this.measurementsCache[this.indexFromElement(node)];
      if (!item || !node.isConnected) {
        this.measureElementCache.forEach((cached, key) => {
          if (cached === node) {
            this.observer.unobserve(node);
            this.measureElementCache.delete(key);
          }
        });
        return;
      }
      const prevNode = this.measureElementCache.get(item.key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.measureElementCache.set(item.key, node);
      }
      const measuredItemSize = this.options.measureElement(node, entry, this);
      this.resizeItem(item, measuredItemSize);
    };
    this.resizeItem = (item, size4) => {
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size4 - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.scrollOffset + this.scrollAdjustments) {
          if (this.options.debug) {
            console.info("correction", delta);
          }
          this._scrollToOffset(this.scrollOffset, {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size4));
        this.notify(true, false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo(
      () => [this.getIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k5 = 0, len = indexes.length; k5 < len; k5++) {
          const i13 = indexes[k5];
          const measurement = measurements[i13];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset4) => {
      const measurements = this.getMeasurements();
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index3) => notUndefined(measurements[index3]).start,
          offset4
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align) => {
      const size4 = this.getSize();
      if (align === "auto") {
        if (toOffset <= this.scrollOffset) {
          align = "start";
        } else if (toOffset >= this.scrollOffset + size4) {
          align = "end";
        } else {
          align = "start";
        }
      }
      if (align === "start") {
        toOffset = toOffset;
      } else if (align === "end") {
        toOffset = toOffset - size4;
      } else if (align === "center") {
        toOffset = toOffset - size4 / 2;
      }
      const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
      const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
      const maxOffset = scrollSize - this.getSize();
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index3, align = "auto") => {
      index3 = Math.max(0, Math.min(index3, this.options.count - 1));
      const measurement = notUndefined(this.getMeasurements()[index3]);
      if (align === "auto") {
        if (measurement.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (measurement.start <= this.scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [this.scrollOffset, align];
        }
      }
      const toOffset = align === "end" ? measurement.end + this.options.scrollPaddingEnd : measurement.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(toOffset, align), align];
    };
    this.isDynamicMode = () => this.measureElementCache.size > 0;
    this.cancelScrollToIndex = () => {
      if (this.scrollToIndexTimeoutId !== null) {
        clearTimeout(this.scrollToIndexTimeoutId);
        this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index3, { align: initialAlign = "auto", behavior } = {}) => {
      index3 = Math.max(0, Math.min(index3, this.options.count - 1));
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      const [toOffset, align] = this.getOffsetForIndex(index3, initialAlign);
      this._scrollToOffset(toOffset, { adjustments: void 0, behavior });
      if (behavior !== "smooth" && this.isDynamicMode()) {
        this.scrollToIndexTimeoutId = setTimeout(() => {
          this.scrollToIndexTimeoutId = null;
          const elementInDOM = this.measureElementCache.has(
            this.options.getItemKey(index3)
          );
          if (elementInDOM) {
            const [toOffset2] = this.getOffsetForIndex(index3, align);
            if (!approxEqual(toOffset2, this.scrollOffset)) {
              this.scrollToIndex(index3, { align, behavior });
            }
          } else {
            this.scrollToIndex(index3, { align, behavior });
          }
        });
      }
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.scrollOffset + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else {
        end = this.options.lanes === 1 ? ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0 : Math.max(
          ...measurements.slice(-this.options.lanes).map((m13) => m13.end)
        );
      }
      return end - this.options.scrollMargin + this.options.paddingEnd;
    };
    this._scrollToOffset = (offset4, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset4, { behavior, adjustments }, this);
    };
    this.measure = () => {
      var _a, _b;
      this.itemSizeCache = /* @__PURE__ */ new Map();
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, false);
    };
    this.setOptions(opts);
    this.scrollRect = this.options.initialRect;
    this.scrollOffset = typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset;
    this.measurementsCache = this.options.initialMeasurementsCache;
    this.measurementsCache.forEach((item) => {
      this.itemSizeCache.set(item.key, item.size);
    });
    this.notify(false, false);
  }
};
var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset
}) {
  const count2 = measurements.length - 1;
  const getOffset = (index3) => measurements[index3].start;
  const startIndex = findNearestBinarySearch(0, count2, getOffset, scrollOffset);
  let endIndex = startIndex;
  while (endIndex < count2 && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return { startIndex, endIndex };
}

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useVirtualizerBase(options) {
  const rerender = React.useReducer(() => ({}), {})[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (sync) {
        (0, import_react_dom2.flushSync)(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = React.useState(
    () => new Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  React.useEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var import_react77 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-by-comparator.js
var import_react55 = __toESM(require_react(), 1);
function l7(e7, r15) {
  return e7 !== null && r15 !== null && typeof e7 == "object" && typeof r15 == "object" && "id" in e7 && "id" in r15 ? e7.id === r15.id : e7 === r15;
}
function u9(e7 = l7) {
  return (0, import_react55.useCallback)((r15, t14) => {
    if (typeof e7 == "string") {
      let o18 = e7;
      return (r15 == null ? void 0 : r15[o18]) === (t14 == null ? void 0 : t14[o18]);
    }
    return e7(r15, t14);
  }, [e7]);
}

// node_modules/@headlessui/react/dist/hooks/use-element-size.js
var import_react56 = __toESM(require_react(), 1);
function s5(e7) {
  if (e7 === null)
    return { width: 0, height: 0 };
  let { width: n13, height: t14 } = e7.getBoundingClientRect();
  return { width: n13, height: t14 };
}
function f7(e7, n13 = false) {
  let t14 = e7 === null ? null : "current" in e7 ? e7.current : e7, [l16, u17] = (0, import_react56.useReducer)(() => ({}), {}), r15 = (0, import_react56.useMemo)(() => s5(t14), [t14, l16]);
  return n(() => {
    if (!t14)
      return;
    let i13 = new ResizeObserver(u17);
    return i13.observe(t14), () => {
      i13.disconnect();
    };
  }, [t14]), n13 ? { width: `${r15.width}px`, height: `${r15.height}px` } : r15;
}

// node_modules/@headlessui/react/dist/hooks/use-frame-debounce.js
function m5() {
  let e7 = p();
  return o4((o18) => {
    e7.dispose(), e7.nextFrame(o18);
  });
}

// node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var f8 = /* @__PURE__ */ new Map();
var u10 = /* @__PURE__ */ new Map();
function l8(t14) {
  var r15;
  let e7 = (r15 = u10.get(t14)) != null ? r15 : 0;
  return u10.set(t14, e7 + 1), e7 !== 0 ? () => p3(t14) : (f8.set(t14, { "aria-hidden": t14.getAttribute("aria-hidden"), inert: t14.inert }), t14.setAttribute("aria-hidden", "true"), t14.inert = true, () => p3(t14));
}
function p3(t14) {
  var n13;
  let e7 = (n13 = u10.get(t14)) != null ? n13 : 1;
  if (e7 === 1 ? u10.delete(t14) : u10.set(t14, e7 - 1), e7 !== 1)
    return;
  let r15 = f8.get(t14);
  r15 && (r15["aria-hidden"] === null ? t14.removeAttribute("aria-hidden") : t14.setAttribute("aria-hidden", r15["aria-hidden"]), t14.inert = r15.inert, f8.delete(t14));
}
function T6({ allowed: t14, disallowed: e7 } = {}, r15 = true) {
  n(() => {
    var s16, c13;
    if (!r15)
      return;
    let n13 = o2();
    for (let i13 of (s16 = e7 == null ? void 0 : e7()) != null ? s16 : [])
      i13 && n13.add(l8(i13));
    let a15 = (c13 = t14 == null ? void 0 : t14()) != null ? c13 : [];
    for (let i13 of a15) {
      if (!i13)
        continue;
      let d16 = u(i13);
      if (!d16)
        continue;
      let o18 = i13.parentElement;
      for (; o18 && o18 !== d16.body; ) {
        for (let h7 of o18.children)
          a15.some((E11) => h7.contains(E11)) || n13.add(l8(h7));
        o18 = o18.parentElement;
      }
    }
    return n13.dispose;
  }, [r15, t14, e7]);
}

// node_modules/@headlessui/react/dist/hooks/use-on-disappear.js
var import_react57 = __toESM(require_react(), 1);
function m6(n13, l16, s16 = true) {
  let i13 = s3((t14) => {
    let e7 = t14.getBoundingClientRect();
    e7.x === 0 && e7.y === 0 && e7.width === 0 && e7.height === 0 && l16();
  });
  (0, import_react57.useEffect)(() => {
    if (!s16)
      return;
    let t14 = n13 === null ? null : n13 instanceof HTMLElement ? n13 : n13.current;
    if (!t14)
      return;
    let e7 = o2();
    if (typeof ResizeObserver != "undefined") {
      let r15 = new ResizeObserver(() => i13.current(t14));
      r15.observe(t14), e7.add(() => r15.disconnect());
    }
    if (typeof IntersectionObserver != "undefined") {
      let r15 = new IntersectionObserver(() => i13.current(t14));
      r15.observe(t14), e7.add(() => r15.disconnect());
    }
    return () => e7.dispose();
  }, [n13, i13, s16]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react60 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/focus-management.js
var f9 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e7) => `${e7}:not([tabindex='-1'])`).join(",");
var p4 = ["[data-autofocus]"].map((e7) => `${e7}:not([tabindex='-1'])`).join(",");
var F = ((n13) => (n13[n13.First = 1] = "First", n13[n13.Previous = 2] = "Previous", n13[n13.Next = 4] = "Next", n13[n13.Last = 8] = "Last", n13[n13.WrapAround = 16] = "WrapAround", n13[n13.NoScroll = 32] = "NoScroll", n13[n13.AutoFocus = 64] = "AutoFocus", n13))(F || {});
var T7 = ((o18) => (o18[o18.Error = 0] = "Error", o18[o18.Overflow = 1] = "Overflow", o18[o18.Success = 2] = "Success", o18[o18.Underflow = 3] = "Underflow", o18))(T7 || {});
var y3 = ((t14) => (t14[t14.Previous = -1] = "Previous", t14[t14.Next = 1] = "Next", t14))(y3 || {});
function b2(e7 = document.body) {
  return e7 == null ? [] : Array.from(e7.querySelectorAll(f9)).sort((r15, t14) => Math.sign((r15.tabIndex || Number.MAX_SAFE_INTEGER) - (t14.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function S3(e7 = document.body) {
  return e7 == null ? [] : Array.from(e7.querySelectorAll(p4)).sort((r15, t14) => Math.sign((r15.tabIndex || Number.MAX_SAFE_INTEGER) - (t14.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h4 = ((t14) => (t14[t14.Strict = 0] = "Strict", t14[t14.Loose = 1] = "Loose", t14))(h4 || {});
function A2(e7, r15 = 0) {
  var t14;
  return e7 === ((t14 = u(e7)) == null ? void 0 : t14.body) ? false : u2(r15, { [0]() {
    return e7.matches(f9);
  }, [1]() {
    let u17 = e7;
    for (; u17 !== null; ) {
      if (u17.matches(f9))
        return true;
      u17 = u17.parentElement;
    }
    return false;
  } });
}
function G3(e7) {
  let r15 = u(e7);
  o2().nextFrame(() => {
    r15 && !A2(r15.activeElement, 0) && I3(e7);
  });
}
var H3 = ((t14) => (t14[t14.Keyboard = 0] = "Keyboard", t14[t14.Mouse = 1] = "Mouse", t14))(H3 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e7) => {
  e7.metaKey || e7.altKey || e7.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e7) => {
  e7.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e7.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function I3(e7) {
  e7 == null || e7.focus({ preventScroll: true });
}
var w5 = ["textarea", "input"].join(",");
function O2(e7) {
  var r15, t14;
  return (t14 = (r15 = e7 == null ? void 0 : e7.matches) == null ? void 0 : r15.call(e7, w5)) != null ? t14 : false;
}
function _2(e7, r15 = (t14) => t14) {
  return e7.slice().sort((t14, u17) => {
    let o18 = r15(t14), c13 = r15(u17);
    if (o18 === null || c13 === null)
      return 0;
    let l16 = o18.compareDocumentPosition(c13);
    return l16 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l16 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function j3(e7, r15) {
  return P5(b2(), r15, { relativeTo: e7 });
}
function P5(e7, r15, { sorted: t14 = true, relativeTo: u17 = null, skipElements: o18 = [] } = {}) {
  let c13 = Array.isArray(e7) ? e7.length > 0 ? e7[0].ownerDocument : document : e7.ownerDocument, l16 = Array.isArray(e7) ? t14 ? _2(e7) : e7 : r15 & 64 ? S3(e7) : b2(e7);
  o18.length > 0 && l16.length > 1 && (l16 = l16.filter((s16) => !o18.some((a15) => a15 != null && "current" in a15 ? (a15 == null ? void 0 : a15.current) === s16 : a15 === s16))), u17 = u17 != null ? u17 : c13.activeElement;
  let n13 = (() => {
    if (r15 & 5)
      return 1;
    if (r15 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x6 = (() => {
    if (r15 & 1)
      return 0;
    if (r15 & 2)
      return Math.max(0, l16.indexOf(u17)) - 1;
    if (r15 & 4)
      return Math.max(0, l16.indexOf(u17)) + 1;
    if (r15 & 8)
      return l16.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M7 = r15 & 32 ? { preventScroll: true } : {}, m13 = 0, d16 = l16.length, i13;
  do {
    if (m13 >= d16 || m13 + d16 <= 0)
      return 0;
    let s16 = x6 + m13;
    if (r15 & 16)
      s16 = (s16 + d16) % d16;
    else {
      if (s16 < 0)
        return 3;
      if (s16 >= d16)
        return 1;
    }
    i13 = l16[s16], i13 == null || i13.focus(M7), m13 += n13;
  } while (i13 !== c13.activeElement);
  return r15 & 6 && O2(i13) && i13.select(), 2;
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t4() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i8() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n7() {
  return t4() || i8();
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react58 = __toESM(require_react(), 1);
function d3(e7, r15, n13) {
  let o18 = s3(r15);
  (0, import_react58.useEffect)(() => {
    function t14(u17) {
      o18.current(u17);
    }
    return document.addEventListener(e7, t14, n13), () => document.removeEventListener(e7, t14, n13);
  }, [e7, n13]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react59 = __toESM(require_react(), 1);
function s6(e7, r15, n13) {
  let o18 = s3(r15);
  (0, import_react59.useEffect)(() => {
    function t14(i13) {
      o18.current(i13);
    }
    return window.addEventListener(e7, t14, n13), () => window.removeEventListener(e7, t14, n13);
  }, [e7, n13]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function w6(s16, m13, a15 = true) {
  let i13 = (0, import_react60.useRef)(false);
  (0, import_react60.useEffect)(() => {
    requestAnimationFrame(() => {
      i13.current = a15;
    });
  }, [a15]);
  function c13(e7, r15) {
    if (!i13.current || e7.defaultPrevented)
      return;
    let t14 = r15(e7);
    if (t14 === null || !t14.getRootNode().contains(t14) || !t14.isConnected)
      return;
    let E11 = function u17(n13) {
      return typeof n13 == "function" ? u17(n13()) : Array.isArray(n13) || n13 instanceof Set ? n13 : [n13];
    }(s16);
    for (let u17 of E11) {
      if (u17 === null)
        continue;
      let n13 = u17 instanceof HTMLElement ? u17 : u17.current;
      if (n13 != null && n13.contains(t14) || e7.composed && e7.composedPath().includes(n13))
        return;
    }
    return !A2(t14, h4.Loose) && t14.tabIndex !== -1 && e7.preventDefault(), m13(e7, t14);
  }
  let o18 = (0, import_react60.useRef)(null);
  d3("pointerdown", (e7) => {
    var r15, t14;
    i13.current && (o18.current = ((t14 = (r15 = e7.composedPath) == null ? void 0 : r15.call(e7)) == null ? void 0 : t14[0]) || e7.target);
  }, true), d3("mousedown", (e7) => {
    var r15, t14;
    i13.current && (o18.current = ((t14 = (r15 = e7.composedPath) == null ? void 0 : r15.call(e7)) == null ? void 0 : t14[0]) || e7.target);
  }, true), d3("click", (e7) => {
    n7() || o18.current && (c13(e7, () => o18.current), o18.current = null);
  }, true), d3("touchend", (e7) => c13(e7, () => e7.target instanceof HTMLElement ? e7.target : null), true), s6("blur", (e7) => c13(e7, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react61 = __toESM(require_react(), 1);
function n8(...e7) {
  return (0, import_react61.useMemo)(() => u(...e7), [...e7]);
}

// node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
var import_react63 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react62 = __toESM(require_react(), 1);
function E5(n13, e7, a15, t14) {
  let i13 = s3(a15);
  (0, import_react62.useEffect)(() => {
    n13 = n13 != null ? n13 : window;
    function r15(o18) {
      i13.current(o18);
    }
    return n13.addEventListener(e7, r15, t14), () => n13.removeEventListener(e7, r15, t14);
  }, [n13, e7, t14]);
}

// node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
function f11(l16) {
  let n13 = (0, import_react63.useRef)({ value: "", selectionStart: null, selectionEnd: null });
  return E5(l16.current, "blur", (e7) => {
    let t14 = e7.target;
    t14 instanceof HTMLInputElement && (n13.current = { value: t14.value, selectionStart: t14.selectionStart, selectionEnd: t14.selectionEnd });
  }), o4(() => {
    let e7 = l16.current;
    if (document.activeElement !== e7 && e7 instanceof HTMLInputElement && e7.isConnected) {
      if (e7.focus({ preventScroll: true }), e7.value !== n13.current.value)
        e7.setSelectionRange(e7.value.length, e7.value.length);
      else {
        let { selectionStart: t14, selectionEnd: u17 } = n13.current;
        t14 !== null && u17 !== null && e7.setSelectionRange(t14, u17);
      }
      n13.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react64 = __toESM(require_react(), 1);
function i9(t14) {
  var n13;
  if (t14.type)
    return t14.type;
  let e7 = (n13 = t14.as) != null ? n13 : "button";
  if (typeof e7 == "string" && e7.toLowerCase() === "button")
    return "button";
}
function T8(t14, e7) {
  let [n13, u17] = (0, import_react64.useState)(() => i9(t14));
  return n(() => {
    u17(i9(t14));
  }, [t14.type, t14.as]), n(() => {
    n13 || e7.current && e7.current instanceof HTMLButtonElement && !e7.current.hasAttribute("type") && u17("button");
  }, [n13, e7]), n13;
}

// node_modules/@headlessui/react/dist/hooks/use-store.js
var import_react65 = __toESM(require_react(), 1);
function o12(t14) {
  return (0, import_react65.useSyncExternalStore)(t14.subscribe, t14.getSnapshot, t14.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a6(o18, r15) {
  let t14 = o18(), n13 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t14;
  }, subscribe(e7) {
    return n13.add(e7), () => n13.delete(e7);
  }, dispatch(e7, ...s16) {
    let i13 = r15[e7].call(t14, ...s16);
    i13 && (t14 = i13, n13.forEach((c13) => c13()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function d7() {
  let r15;
  return { before({ doc: e7 }) {
    var l16;
    let o18 = e7.documentElement, t14 = (l16 = e7.defaultView) != null ? l16 : window;
    r15 = Math.max(0, t14.innerWidth - o18.clientWidth);
  }, after({ doc: e7, d: o18 }) {
    let t14 = e7.documentElement, l16 = Math.max(0, t14.clientWidth - t14.offsetWidth), n13 = Math.max(0, r15 - l16);
    o18.style(t14, "paddingRight", `${n13}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function d8() {
  return t4() ? { before({ doc: r15, d: n13, meta: c13 }) {
    function o18(a15) {
      return c13.containers.flatMap((l16) => l16()).some((l16) => l16.contains(a15));
    }
    n13.microTask(() => {
      var s16;
      if (window.getComputedStyle(r15.documentElement).scrollBehavior !== "auto") {
        let t14 = o2();
        t14.style(r15.documentElement, "scrollBehavior", "auto"), n13.add(() => n13.microTask(() => t14.dispose()));
      }
      let a15 = (s16 = window.scrollY) != null ? s16 : window.pageYOffset, l16 = null;
      n13.addEventListener(r15, "click", (t14) => {
        if (t14.target instanceof HTMLElement)
          try {
            let e7 = t14.target.closest("a");
            if (!e7)
              return;
            let { hash: f20 } = new URL(e7.href), i13 = r15.querySelector(f20);
            i13 && !o18(i13) && (l16 = i13);
          } catch {
          }
      }, true), n13.addEventListener(r15, "touchstart", (t14) => {
        if (t14.target instanceof HTMLElement)
          if (o18(t14.target)) {
            let e7 = t14.target;
            for (; e7.parentElement && o18(e7.parentElement); )
              e7 = e7.parentElement;
            n13.style(e7, "overscrollBehavior", "contain");
          } else
            n13.style(t14.target, "touchAction", "none");
      }), n13.addEventListener(r15, "touchmove", (t14) => {
        if (t14.target instanceof HTMLElement) {
          if (t14.target.tagName === "INPUT")
            return;
          if (o18(t14.target)) {
            let e7 = t14.target;
            for (; e7.parentElement && e7.dataset.headlessuiPortal !== "" && !(e7.scrollHeight > e7.clientHeight || e7.scrollWidth > e7.clientWidth); )
              e7 = e7.parentElement;
            e7.dataset.headlessuiPortal === "" && t14.preventDefault();
          } else
            t14.preventDefault();
        }
      }, { passive: false }), n13.add(() => {
        var e7;
        let t14 = (e7 = window.scrollY) != null ? e7 : window.pageYOffset;
        a15 !== t14 && window.scrollTo(0, a15), l16 && l16.isConnected && (l16.scrollIntoView({ block: "nearest" }), l16 = null);
      });
    });
  } } : {};
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function r8() {
  return { before({ doc: e7, d: o18 }) {
    o18.style(e7.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m8(e7) {
  let n13 = {};
  for (let t14 of e7)
    Object.assign(n13, t14(n13));
  return n13;
}
var a7 = a6(() => /* @__PURE__ */ new Map(), { PUSH(e7, n13) {
  var o18;
  let t14 = (o18 = this.get(e7)) != null ? o18 : { doc: e7, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t14.count++, t14.meta.add(n13), this.set(e7, t14), this;
}, POP(e7, n13) {
  let t14 = this.get(e7);
  return t14 && (t14.count--, t14.meta.delete(n13)), this;
}, SCROLL_PREVENT({ doc: e7, d: n13, meta: t14 }) {
  let o18 = { doc: e7, d: n13, meta: m8(t14) }, c13 = [d8(), d7(), r8()];
  c13.forEach(({ before: r15 }) => r15 == null ? void 0 : r15(o18)), c13.forEach(({ after: r15 }) => r15 == null ? void 0 : r15(o18));
}, SCROLL_ALLOW({ d: e7 }) {
  e7.dispose();
}, TEARDOWN({ doc: e7 }) {
  this.delete(e7);
} });
a7.subscribe(() => {
  let e7 = a7.getSnapshot(), n13 = /* @__PURE__ */ new Map();
  for (let [t14] of e7)
    n13.set(t14, t14.documentElement.style.overflow);
  for (let t14 of e7.values()) {
    let o18 = n13.get(t14.doc) === "hidden", c13 = t14.count !== 0;
    (c13 && !o18 || !c13 && o18) && a7.dispatch(t14.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t14), t14.count === 0 && a7.dispatch("TEARDOWN", t14);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function a8(e7, r15, n13 = () => ({ containers: [] })) {
  let f20 = o12(a7), o18 = e7 ? f20.get(e7) : void 0, i13 = o18 ? o18.count > 0 : false;
  return n(() => {
    if (!(!e7 || !r15))
      return a7.dispatch("PUSH", e7, n13), () => a7.dispatch("POP", e7, n13);
  }, [r15, e7]), i13;
}

// node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js
function u11(e7, n13, c13 = () => [document.body]) {
  a8(e7, n13, (t14) => {
    var o18;
    return { containers: [...(o18 = t14.containers) != null ? o18 : [], c13] };
  });
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react66 = __toESM(require_react(), 1);
function t6(e7) {
  return [e7.screenX, e7.screenY];
}
function u12() {
  let e7 = (0, import_react66.useRef)([-1, -1]);
  return { wasMoved(r15) {
    let n13 = t6(r15);
    return e7.current[0] === n13[0] && e7.current[1] === n13[1] ? false : (e7.current = n13, true);
  }, update(r15) {
    e7.current = t6(r15);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react67 = __toESM(require_react(), 1);
function F2({ container: e7, accept: t14, walk: r15, enabled: c13 = true }) {
  let o18 = (0, import_react67.useRef)(t14), l16 = (0, import_react67.useRef)(r15);
  (0, import_react67.useEffect)(() => {
    o18.current = t14, l16.current = r15;
  }, [t14, r15]), n(() => {
    if (!e7 || !c13)
      return;
    let n13 = u(e7);
    if (!n13)
      return;
    let f20 = o18.current, p8 = l16.current, d16 = Object.assign((i13) => f20(i13), { acceptNode: f20 }), u17 = n13.createTreeWalker(e7, NodeFilter.SHOW_ELEMENT, d16, false);
    for (; u17.nextNode(); )
      p8(u17.currentNode);
  }, [e7, c13, o18, l16]);
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react68 = __toESM(require_react(), 1);
function m10(u17, t14) {
  let e7 = (0, import_react68.useRef)([]), r15 = o4(u17);
  (0, import_react68.useEffect)(() => {
    let o18 = [...e7.current];
    for (let [a15, l16] of t14.entries())
      if (e7.current[a15] !== l16) {
        let n13 = r15(t14, o18);
        return e7.current = t14, n13;
      }
  }, [r15, ...t14]);
}

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var React3 = __toESM(require_react(), 1);
var import_react70 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v7) => ({
  x: v7,
  y: v7
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt2 = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt2;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x6,
    y: y9,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y9,
    left: x6,
    right: x6 + width,
    bottom: y9 + height,
    x: x6,
    y: y9
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x6,
    y: y9
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i13 = 0; i13 < validMiddleware.length; i13++) {
    const {
      name,
      fn
    } = validMiddleware[i13];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x6,
      y: y9,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x6 = nextX != null ? nextX : x6;
    y9 = nextY != null ? nextY : y9;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x6,
          y: y9
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i13 = -1;
    }
  }
  return {
    x: x6,
    y: y9,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x6,
    y: y9,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x6,
    y: y9,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d16) => d16.overflows[0] <= 0).sort((a15, b7) => a15.overflows[1] - b7.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d16) => [d16.placement, d16.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a15, b7) => a15[1] - b7[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x6,
        y: y9,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x6 + diffCoords.x,
        y: y9 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x6,
        y: y9,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x7,
              y: y10
            } = _ref;
            return {
              x: x7,
              y: y10
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x6,
        y: y9
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x6,
          y: limitedCoords.y - y9
        }
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $5
  } = getCssDimensions(domElement);
  let x6 = ($5 ? round(rect.width) : rect.width) / width;
  let y9 = ($5 ? round(rect.height) : rect.height) / height;
  if (!x6 || !Number.isFinite(x6)) {
    x6 = 1;
  }
  if (!y9 || !Number.isFinite(y9)) {
    y9 = 1;
  }
  return {
    x: x6,
    y: y9
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x6 = (clientRect.left + visualOffsets.x) / scale.x;
  let y9 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x6 *= iframeScale.x;
      y9 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x6 += left;
      y9 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x6,
    y: y9
  });
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (e7) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x6 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y9 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x6 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x6,
    y: y9
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x6 = 0;
  let y9 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x6 = visualViewport.offsetLeft;
      y9 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x6,
    y: y9
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x6 = left * scale.x;
  const y9 = top * scale.y;
  return {
    width,
    height,
    x: x6,
    y: y9
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x6 = rect.left + scroll.scrollLeft - offsets.x;
  const y9 = rect.top + scroll.scrollTop - offsets.y;
  return {
    x: x6,
    y: y9,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId2;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId2);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId2 = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e7) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var detectOverflow2 = detectOverflow;
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React2 = __toESM(require_react(), 1);
var import_react69 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var index = typeof document !== "undefined" ? import_react69.useLayoutEffect : import_react69.useEffect;
function deepEqual(a15, b7) {
  if (a15 === b7) {
    return true;
  }
  if (typeof a15 !== typeof b7) {
    return false;
  }
  if (typeof a15 === "function" && a15.toString() === b7.toString()) {
    return true;
  }
  let length;
  let i13;
  let keys;
  if (a15 && b7 && typeof a15 === "object") {
    if (Array.isArray(a15)) {
      length = a15.length;
      if (length !== b7.length)
        return false;
      for (i13 = length; i13-- !== 0; ) {
        if (!deepEqual(a15[i13], b7[i13])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a15);
    length = keys.length;
    if (length !== Object.keys(b7).length) {
      return false;
    }
    for (i13 = length; i13-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b7, keys[i13])) {
        return false;
      }
    }
    for (i13 = length; i13-- !== 0; ) {
      const key = keys[i13];
      if (key === "_owner" && a15.$$typeof) {
        continue;
      }
      if (!deepEqual(a15[key], b7[key])) {
        return false;
      }
    }
    return true;
  }
  return a15 !== a15 && b7 !== b7;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React2.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React2.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React2.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React2.useState(null);
  const [_floating, _setFloating] = React2.useState(null);
  const setReference = React2.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React2.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React2.useRef(null);
  const floatingRef = React2.useRef(null);
  const dataRef = React2.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React2.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React2.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React2.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React2.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React2.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x6 = roundByDPR(elements.floating, data.x);
    const y9 = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x6 + "px, " + y9 + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x6,
      top: y9
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React2.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
});

// node_modules/tabbable/dist/index.esm.js
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var focusableCandidateSelector = candidateSelectors.concat("iframe").join(",");

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var import_react_dom5 = __toESM(require_react_dom(), 1);
function useMergeRefs(refs) {
  return React3.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }, refs);
}
var SafeReact = {
  ...React3
};
var useInsertionEffect = SafeReact.useInsertionEffect;
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React3.useRef(() => {
    if (true) {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React3.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index3, cols, prevRow) {
  return Math.floor(index3 / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index3) {
  return index3 < 0 || index3 >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index3 = startingIndex;
  do {
    index3 += decrement ? -amount : amount;
  } while (index3 >= 0 && index3 <= list.length - 1 && isDisabled(list, index3, disabledIndices));
  return index3;
}
function getGridNavigatedIndex(elementsRef, _ref) {
  let {
    event,
    orientation,
    loop,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent: stop = false
  } = _ref;
  let nextIndex = prevIndex;
  if (event.key === ARROW_UP) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = maxIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: nextIndex,
        amount: cols,
        decrement: true,
        disabledIndices
      });
      if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
        const col = prevIndex % cols;
        const maxCol = maxIndex % cols;
        const offset4 = maxIndex - (maxCol - col);
        if (maxCol === col) {
          nextIndex = maxIndex;
        } else {
          nextIndex = maxCol > col ? offset4 : offset4 - cols;
        }
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (event.key === ARROW_DOWN) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = minIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices
      });
      if (loop && prevIndex + cols > maxIndex) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex % cols - cols,
          amount: cols,
          disabledIndices
        });
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (orientation === "both") {
    const prevRow = floor(prevIndex / cols);
    if (event.key === ARROW_RIGHT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === ARROW_LEFT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      if (loop && lastRow) {
        nextIndex = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}
function buildCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach((_ref2, index3) => {
    let {
      width,
      height
    } = _ref2;
    if (width > cols) {
      if (true) {
        throw new Error("[Floating UI]: Invalid grid - item width at index " + index3 + " is greater than grid columns");
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i13 = 0; i13 < width; i13++) {
        for (let j11 = 0; j11 < height; j11++) {
          targetCells.push(startIndex + i13 + j11 * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every((cell) => cellMap[cell] == null)) {
        targetCells.forEach((cell) => {
          cellMap[cell] = index3;
        });
        itemPlaced = true;
      } else {
        startIndex++;
      }
    }
  });
  return [...cellMap];
}
function getCellIndexOfCorner(index3, sizes, cellMap, cols, corner) {
  if (index3 === -1)
    return -1;
  const firstCellIndex = cellMap.indexOf(index3);
  const sizeItem = sizes[index3];
  switch (corner) {
    case "tl":
      return firstCellIndex;
    case "tr":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + sizeItem.width - 1;
    case "bl":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + (sizeItem.height - 1) * cols;
    case "br":
      return cellMap.lastIndexOf(index3);
  }
}
function getCellIndices(indices, cellMap) {
  return cellMap.flatMap((index3, cellIndex) => indices.includes(index3) ? [cellIndex] : []);
}
function isDisabled(list, index3, disabledIndices) {
  if (disabledIndices) {
    return disabledIndices.includes(index3);
  }
  const element = list[index3];
  return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}
var rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = () => el == null ? void 0 : el.focus({
    preventScroll
  });
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}
var index2 = typeof document !== "undefined" ? import_react70.useLayoutEffect : import_react70.useEffect;
function sortByDocumentPosition(a15, b7) {
  const position = a15.compareDocumentPosition(b7);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1.entries()) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
var FloatingListContext = React3.createContext({
  register: () => {
  },
  unregister: () => {
  },
  map: /* @__PURE__ */ new Map(),
  elementsRef: {
    current: []
  }
});
function FloatingList(props) {
  const {
    children,
    elementsRef,
    labelsRef
  } = props;
  const [map, setMap] = React3.useState(() => /* @__PURE__ */ new Map());
  const register = React3.useCallback((node) => {
    setMap((prevMap) => new Map(prevMap).set(node, null));
  }, []);
  const unregister = React3.useCallback((node) => {
    setMap((prevMap) => {
      const map2 = new Map(prevMap);
      map2.delete(node);
      return map2;
    });
  }, []);
  index2(() => {
    const newMap = new Map(map);
    const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
    nodes.forEach((node, index3) => {
      newMap.set(node, index3);
    });
    if (!areMapsEqual(map, newMap)) {
      setMap(newMap);
    }
  }, [map]);
  return React3.createElement(FloatingListContext.Provider, {
    value: React3.useMemo(() => ({
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }), [register, unregister, map, elementsRef, labelsRef])
  }, children);
}
function useListItem(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    label
  } = props;
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = React3.useContext(FloatingListContext);
  const [index$1, setIndex] = React3.useState(null);
  const componentRef = React3.useRef(null);
  const ref = React3.useCallback((node) => {
    componentRef.current = node;
    if (index$1 !== null) {
      elementsRef.current[index$1] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== void 0;
        labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index$1, elementsRef, labelsRef, label]);
  index2(() => {
    const node = componentRef.current;
    if (node) {
      register(node);
      return () => {
        unregister(node);
      };
    }
  }, [register, unregister]);
  index2(() => {
    const index3 = componentRef.current ? map.get(componentRef.current) : null;
    if (index3 != null) {
      setIndex(index3);
    }
  }, [map]);
  return React3.useMemo(() => ({
    ref,
    index: index$1 == null ? -1 : index$1
  }), [index$1, ref]);
}
function renderJsx(render, computedProps) {
  if (typeof render === "function") {
    return render(computedProps);
  }
  if (render) {
    return React3.cloneElement(render, computedProps);
  }
  return React3.createElement("div", computedProps);
}
var CompositeContext = React3.createContext({
  activeIndex: 0,
  onNavigate: () => {
  }
});
var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
var verticalKeys = [ARROW_UP, ARROW_DOWN];
var allKeys = [...horizontalKeys, ...verticalKeys];
var Composite = React3.forwardRef(function Composite2(props, forwardedRef) {
  const {
    render,
    orientation = "both",
    loop = true,
    cols = 1,
    disabledIndices,
    activeIndex: externalActiveIndex,
    onNavigate: externalSetActiveIndex,
    itemSizes,
    dense = false,
    ...domProps
  } = props;
  const [internalActiveIndex, internalSetActiveIndex] = React3.useState(0);
  const activeIndex = externalActiveIndex != null ? externalActiveIndex : internalActiveIndex;
  const onNavigate = useEffectEvent(externalSetActiveIndex != null ? externalSetActiveIndex : internalSetActiveIndex);
  const elementsRef = React3.useRef([]);
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const contextValue = React3.useMemo(() => ({
    activeIndex,
    onNavigate
  }), [activeIndex, onNavigate]);
  const isGrid = cols > 1;
  function handleKeyDown(event) {
    if (!allKeys.includes(event.key))
      return;
    let nextIndex = activeIndex;
    const minIndex = getMinIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxIndex(elementsRef, disabledIndices);
    if (isGrid) {
      const sizes = itemSizes || Array.from({
        length: elementsRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex((index3) => index3 != null && !isDisabled(elementsRef.current, index3, disabledIndices));
      const maxGridIndex = cellMap.reduce((foundIndex, index3, cellIndex) => index3 != null && !isDisabled(elementsRef.current, index3, disabledIndices) ? cellIndex : foundIndex, -1);
      nextIndex = cellMap[getGridNavigatedIndex({
        current: cellMap.map((itemIndex) => itemIndex ? elementsRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...disabledIndices || elementsRef.current.map((_6, index3) => isDisabled(elementsRef.current, index3) ? index3 : void 0), void 0], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(
          activeIndex > maxIndex ? minIndex : activeIndex,
          sizes,
          cellMap,
          cols,
          // use a corner matching the edge closest to the direction we're
          // moving in so we don't end up in the same item. Prefer
          // top/left over bottom/right.
          event.key === ARROW_DOWN ? "bl" : event.key === ARROW_RIGHT ? "tr" : "tl"
        )
      })];
    }
    const toEndKeys = {
      horizontal: [ARROW_RIGHT],
      vertical: [ARROW_DOWN],
      both: [ARROW_RIGHT, ARROW_DOWN]
    }[orientation];
    const toStartKeys = {
      horizontal: [ARROW_LEFT],
      vertical: [ARROW_UP],
      both: [ARROW_LEFT, ARROW_UP]
    }[orientation];
    const preventedKeys = isGrid ? allKeys : {
      horizontal: horizontalKeys,
      vertical: verticalKeys,
      both: allKeys
    }[orientation];
    if (nextIndex === activeIndex && [...toEndKeys, ...toStartKeys].includes(event.key)) {
      if (loop && nextIndex === maxIndex && toEndKeys.includes(event.key)) {
        nextIndex = minIndex;
      } else if (loop && nextIndex === minIndex && toStartKeys.includes(event.key)) {
        nextIndex = maxIndex;
      } else {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: nextIndex,
          decrement: toStartKeys.includes(event.key),
          disabledIndices
        });
      }
    }
    if (nextIndex !== activeIndex && !isIndexOutOfBounds(elementsRef, nextIndex)) {
      event.stopPropagation();
      if (preventedKeys.includes(event.key)) {
        event.preventDefault();
      }
      onNavigate(nextIndex);
      queueMicrotask(() => {
        enqueueFocus(elementsRef.current[nextIndex]);
      });
    }
  }
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: forwardedRef,
    "aria-orientation": orientation === "both" ? void 0 : orientation,
    onKeyDown(e7) {
      domProps.onKeyDown == null || domProps.onKeyDown(e7);
      renderElementProps.onKeyDown == null || renderElementProps.onKeyDown(e7);
      handleKeyDown(e7);
    }
  };
  return React3.createElement(CompositeContext.Provider, {
    value: contextValue
  }, React3.createElement(FloatingList, {
    elementsRef
  }, renderJsx(render, computedProps)));
});
var CompositeItem = React3.forwardRef(function CompositeItem2(props, forwardedRef) {
  const {
    render,
    ...domProps
  } = props;
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const {
    activeIndex,
    onNavigate
  } = React3.useContext(CompositeContext);
  const {
    ref,
    index: index3
  } = useListItem();
  const mergedRef = useMergeRefs([ref, forwardedRef, renderElementProps.ref]);
  const isActive = activeIndex === index3;
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: mergedRef,
    tabIndex: isActive ? 0 : -1,
    "data-active": isActive ? "" : void 0,
    onFocus(e7) {
      domProps.onFocus == null || domProps.onFocus(e7);
      renderElementProps.onFocus == null || renderElementProps.onFocus(e7);
      onNavigate(index3);
    }
  };
  return renderJsx(render, computedProps);
});
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i13 = 1; i13 < arguments.length; i13++) {
      var source = arguments[i13];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var serverHandoffComplete = false;
var count = 0;
var genId = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
);
function useFloatingId() {
  const [id, setId] = React3.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React3.useEffect(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
var useReactId = SafeReact.useId;
var useId = useReactId || useFloatingId;
var devMessageSet;
if (true) {
  devMessageSet = /* @__PURE__ */ new Set();
}
function warn() {
  var _devMessageSet;
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
    console.warn(message);
  }
}
function error() {
  var _devMessageSet3;
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
    console.error(message);
  }
}
var FloatingArrow = React3.forwardRef(function FloatingArrow2(props, ref) {
  const {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow: arrow4
      }
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d: d16,
    style: {
      transform,
      ...restStyle
    } = {},
    ...rest
  } = props;
  if (true) {
    if (!ref) {
      warn("The `ref` prop is required for `FloatingArrow`.");
    }
  }
  const clipPathId = useId();
  if (!floating) {
    return null;
  }
  const computedStrokeWidth = strokeWidth * 2;
  const halfStrokeWidth = computedStrokeWidth / 2;
  const svgX = width / 2 * (tipRadius / -8 + 1);
  const svgY = height / 2 * tipRadius / 4;
  const [side, alignment] = placement.split("-");
  const isRTL2 = platform.isRTL(floating);
  const isCustomShape = !!d16;
  const isVerticalSide = side === "top" || side === "bottom";
  const yOffsetProp = staticOffset && alignment === "end" ? "bottom" : "top";
  let xOffsetProp = staticOffset && alignment === "end" ? "right" : "left";
  if (staticOffset && isRTL2) {
    xOffsetProp = alignment === "end" ? "left" : "right";
  }
  const arrowX = (arrow4 == null ? void 0 : arrow4.x) != null ? staticOffset || arrow4.x : "";
  const arrowY = (arrow4 == null ? void 0 : arrow4.y) != null ? staticOffset || arrow4.y : "";
  const dValue = d16 || "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
  const rotation = {
    top: isCustomShape ? "rotate(180deg)" : "",
    left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: isCustomShape ? "" : "rotate(180deg)",
    right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
  }[side];
  return React3.createElement("svg", _extends({}, rest, {
    "aria-hidden": true,
    ref,
    width: isCustomShape ? width : width + computedStrokeWidth,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [xOffsetProp]: arrowX,
      [yOffsetProp]: arrowY,
      [side]: isVerticalSide || isCustomShape ? "100%" : "calc(100% - " + computedStrokeWidth / 2 + "px)",
      transform: "" + rotation + (transform != null ? transform : ""),
      ...restStyle
    }
  }), computedStrokeWidth > 0 && React3.createElement("path", {
    clipPath: "url(#" + clipPathId + ")",
    fill: "none",
    stroke,
    strokeWidth: computedStrokeWidth + (d16 ? 0 : 1),
    d: dValue
  }), React3.createElement("path", {
    stroke: computedStrokeWidth && !d16 ? rest.fill : "none",
    d: dValue
  }), React3.createElement("clipPath", {
    id: clipPathId
  }, React3.createElement("rect", {
    x: -halfStrokeWidth,
    y: halfStrokeWidth * (isCustomShape ? -1 : 1),
    width: width + computedStrokeWidth,
    height: width
  })));
});
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l16) => l16 !== listener)) || []);
    }
  };
}
var FloatingNodeContext = React3.createContext(null);
var FloatingTreeContext = React3.createContext(null);
var useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React3.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
var useFloatingTree = () => React3.useContext(FloatingTreeContext);
function createAttribute(name) {
  return "data-floating-ui-" + name;
}
var safePolygonIdentifier = createAttribute("safe-polygon");
var NOOP = () => {
};
var FloatingDelayGroupContext = React3.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: NOOP,
  setState: NOOP,
  isInstantPhase: false
});
var HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
var timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    event.target;
    clearTimeout(timeoutId);
  }
}
var FocusGuard = React3.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React3.useState();
  index2(() => {
    if (isSafari()) {
      setRole("button");
    }
    document.addEventListener("keydown", setActiveElementOnTab);
    return () => {
      document.removeEventListener("keydown", setActiveElementOnTab);
    };
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    "aria-hidden": role ? void 0 : true,
    [createAttribute("focus-guard")]: "",
    style: HIDDEN_STYLES
  };
  return React3.createElement("span", _extends({}, props, restProps));
});
var PortalContext = React3.createContext(null);
var attr = createAttribute("portal");
var VisuallyHiddenDismiss = React3.forwardRef(function VisuallyHiddenDismiss2(props, ref) {
  return React3.createElement("button", _extends({}, props, {
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
});
var activeLocks = /* @__PURE__ */ new Set();
var FloatingOverlay = React3.forwardRef(function FloatingOverlay2(props, ref) {
  const {
    lockScroll = false,
    ...rest
  } = props;
  const lockId = useId();
  index2(() => {
    if (!lockScroll)
      return;
    activeLocks.add(lockId);
    const isIOS = /iP(hone|ad|od)|iOS/.test(getPlatform());
    const bodyStyle = document.body.style;
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.pageXOffset;
    const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.pageYOffset;
    bodyStyle.overflow = "hidden";
    if (scrollbarWidth) {
      bodyStyle[paddingProp] = scrollbarWidth + "px";
    }
    if (isIOS) {
      var _window$visualViewpor, _window$visualViewpor2;
      const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
      const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
      Object.assign(bodyStyle, {
        position: "fixed",
        top: -(scrollY - Math.floor(offsetTop)) + "px",
        left: -(scrollX - Math.floor(offsetLeft)) + "px",
        right: "0"
      });
    }
    return () => {
      activeLocks.delete(lockId);
      if (activeLocks.size === 0) {
        Object.assign(bodyStyle, {
          overflow: "",
          [paddingProp]: ""
        });
        if (isIOS) {
          Object.assign(bodyStyle, {
            position: "",
            top: "",
            left: "",
            right: ""
          });
          window.scrollTo(scrollX, scrollY);
        }
      }
    };
  }, [lockId, lockScroll]);
  return React3.createElement("div", _extends({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId();
  const dataRef = React3.useRef({});
  const [events] = React3.useState(() => createPubSub());
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elementsProp.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
    }
  }
  const [positionReference, setPositionReference] = React3.useState(elementsProp.reference);
  const onOpenChange = useEffectEvent((open2, event, reason) => {
    dataRef.current.openEvent = open2 ? event : void 0;
    events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
  });
  const refs = React3.useMemo(() => ({
    setPositionReference
  }), []);
  const elements = React3.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return React3.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}
function useFloating2(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = React3.useState(null);
  const [positionReference, _setPositionReference] = React3.useState(null);
  const optionDomReference = computedElements == null ? void 0 : computedElements.reference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = React3.useRef(null);
  const tree = useFloatingTree();
  index2(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = useFloating({
    ...options,
    elements: {
      ...computedElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = React3.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = React3.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React3.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React3.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React3.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index2(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React3.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
var ACTIVE_KEY = "active";
var SELECTED_KEY = "selected";
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  const isItem = elementKey === "item";
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _6,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...elementKey === "floating" && {
      tabIndex: -1
    },
    ...domUserProps,
    ...propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const deps = propsList;
  const getReferenceProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  const getFloatingProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  const getItemProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    propsList.map((key) => key == null ? void 0 : key.item)
  );
  return React3.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
var inner = (props) => ({
  name: "inner",
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index: index3 = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = props;
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index3];
    if (true) {
      if (!state.placement.startsWith("bottom")) {
        warn('`placement` side must be "bottom" when using the `inner`', "middleware.");
      }
    }
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...await offset3(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
    };
    const el = (scrollRef == null ? void 0 : scrollRef.current) || floating;
    const overflow = await detectOverflow2(getArgsWithCustomFloatingHeight(nextArgs, el.scrollHeight), detectOverflowOptions);
    const refOverflow = await detectOverflow2(nextArgs, {
      ...detectOverflowOptions,
      elementContext: "reference"
    });
    const diffY = Math.max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const maxHeight = Math.max(0, el.scrollHeight - diffY - Math.max(0, overflow.bottom));
    el.style.maxHeight = maxHeight + "px";
    el.scrollTop = diffY;
    if (onFallbackChange) {
      if (el.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current.length - 1) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold) {
        (0, import_react_dom5.flushSync)(() => onFallbackChange(true));
      } else {
        (0, import_react_dom5.flushSync)(() => onFallbackChange(false));
      }
    }
    if (overflowRef) {
      overflowRef.current = await detectOverflow2(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, el.offsetHeight), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
});
function useInnerOffset(context, props) {
  const {
    open,
    elements
  } = context;
  const {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props;
  const onChange = useEffectEvent(unstable_onChange);
  const controlledScrollingRef = React3.useRef(false);
  const prevScrollTopRef = React3.useRef(null);
  const initialOverflowRef = React3.useRef(null);
  React3.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onWheel(e7) {
      if (e7.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e7.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? "max" : "min";
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e7.preventDefault();
        (0, import_react_dom5.flushSync)(() => {
          onChange((d16) => d16 + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        el.scrollTop += dY;
      }
    }
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener("wheel", onWheel);
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  return React3.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      floating: {
        onKeyDown() {
          controlledScrollingRef.current = true;
        },
        onWheel() {
          controlledScrollingRef.current = false;
        },
        onPointerMove() {
          controlledScrollingRef.current = false;
        },
        onScroll() {
          const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
          if (!overflowRef.current || !el || !controlledScrollingRef.current) {
            return;
          }
          if (prevScrollTopRef.current !== null) {
            const scrollDiff = el.scrollTop - prevScrollTopRef.current;
            if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
              (0, import_react_dom5.flushSync)(() => onChange((d16) => d16 + scrollDiff));
            }
          }
          requestAnimationFrame(() => {
            prevScrollTopRef.current = el.scrollTop;
          });
        }
      }
    };
  }, [enabled, overflowRef, elements.floating, scrollRef, onChange]);
}

// node_modules/@headlessui/react/dist/internal/floating.js
var j4 = __toESM(require_react(), 1);
var import_react72 = __toESM(require_react(), 1);
var y4 = (0, import_react72.createContext)({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
y4.displayName = "FloatingContext";
var S4 = (0, import_react72.createContext)(null);
S4.displayName = "PlacementContext";
function xe(e7) {
  return (0, import_react72.useMemo)(() => e7 ? typeof e7 == "string" ? { to: e7 } : e7 : null, [e7]);
}
function ye() {
  return (0, import_react72.useContext)(y4).setReference;
}
function Fe() {
  return (0, import_react72.useContext)(y4).getReferenceProps;
}
function be() {
  let { getFloatingProps: e7, slot: t14 } = (0, import_react72.useContext)(y4);
  return (0, import_react72.useCallback)((...n13) => Object.assign({}, e7(...n13), { "data-anchor": t14.anchor }), [e7, t14]);
}
function Re2(e7 = null) {
  e7 === false && (e7 = null), typeof e7 == "string" && (e7 = { to: e7 });
  let t14 = (0, import_react72.useContext)(S4), n13 = (0, import_react72.useMemo)(() => e7, [JSON.stringify(e7, typeof HTMLElement != "undefined" ? (a15, r15) => r15 instanceof HTMLElement ? r15.outerHTML : r15 : void 0)]);
  n(() => {
    t14 == null || t14(n13 != null ? n13 : null);
  }, [t14, n13]);
  let l16 = (0, import_react72.useContext)(y4);
  return (0, import_react72.useMemo)(() => [l16.setFloating, e7 ? l16.styles : {}], [l16.setFloating, e7, l16.styles]);
}
var q = 4;
function ve({ children: e7, enabled: t14 = true }) {
  let [n13, l16] = (0, import_react72.useState)(null), [a15, r15] = (0, import_react72.useState)(0), c13 = (0, import_react72.useRef)(null), [u17, i13] = (0, import_react72.useState)(null);
  pe(u17);
  let o18 = t14 && n13 !== null && u17 !== null, { to: F6 = "bottom", gap: C7 = 0, offset: M7 = 0, padding: p8 = 0, inner: P7 } = ce(n13, u17), [s16, f20 = "center"] = F6.split(" ");
  n(() => {
    o18 && r15(0);
  }, [o18]);
  let { refs: b7, floatingStyles: $5, context: g8 } = useFloating2({ open: o18, placement: s16 === "selection" ? f20 === "center" ? "bottom" : `bottom-${f20}` : f20 === "center" ? `${s16}` : `${s16}-${f20}`, strategy: "absolute", transform: false, middleware: [offset3({ mainAxis: s16 === "selection" ? 0 : C7, crossAxis: M7 }), shift3({ padding: p8 }), s16 !== "selection" && flip3({ padding: p8 }), s16 === "selection" && P7 ? inner({ ...P7, padding: p8, overflowRef: c13, offset: a15, minItemsVisible: q, referenceOverflowThreshold: p8, onFallbackChange(h7) {
    var W6, k5;
    if (!h7)
      return;
    let d16 = g8.elements.floating;
    if (!d16)
      return;
    let T12 = parseFloat(getComputedStyle(d16).scrollPaddingBottom) || 0, w10 = Math.min(q, d16.childElementCount), B3 = 0, O3 = 0;
    for (let m13 of (k5 = (W6 = g8.elements.floating) == null ? void 0 : W6.childNodes) != null ? k5 : [])
      if (m13 instanceof HTMLElement) {
        let x6 = m13.offsetTop, N5 = x6 + m13.clientHeight + T12, H10 = d16.scrollTop, U5 = H10 + d16.clientHeight;
        if (x6 >= H10 && N5 <= U5)
          w10--;
        else {
          O3 = Math.max(0, Math.min(N5, U5) - Math.max(x6, H10)), B3 = m13.clientHeight;
          break;
        }
      }
    w10 >= 1 && r15((m13) => {
      let x6 = B3 * w10 - O3 + T12;
      return m13 >= x6 ? m13 : x6;
    });
  } }) : null, size3({ padding: p8, apply({ availableWidth: h7, availableHeight: d16, elements: T12 }) {
    Object.assign(T12.floating.style, { overflow: "auto", maxWidth: `${h7}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${d16}px)` });
  } })].filter(Boolean), whileElementsMounted: autoUpdate }), [I5 = s16, V6 = f20] = g8.placement.split("-");
  s16 === "selection" && (I5 = "selection");
  let G10 = (0, import_react72.useMemo)(() => ({ anchor: [I5, V6].filter(Boolean).join(" ") }), [I5, V6]), K4 = useInnerOffset(g8, { overflowRef: c13, onChange: r15 }), { getReferenceProps: Q6, getFloatingProps: X3 } = useInteractions([K4]), Y4 = o4((h7) => {
    i13(h7), b7.setFloating(h7);
  });
  return j4.createElement(S4.Provider, { value: l16 }, j4.createElement(y4.Provider, { value: { setFloating: Y4, setReference: b7.setReference, styles: $5, getReferenceProps: Q6, getFloatingProps: X3, slot: G10 } }, e7));
}
function pe(e7) {
  n(() => {
    if (!e7)
      return;
    let t14 = new MutationObserver(() => {
      let n13 = e7.style.maxHeight;
      parseFloat(n13) !== parseInt(n13) && (e7.style.maxHeight = `${Math.ceil(parseFloat(n13))}px`);
    });
    return t14.observe(e7, { attributes: true, attributeFilter: ["style"] }), () => {
      t14.disconnect();
    };
  }, [e7]);
}
function ce(e7, t14) {
  var r15, c13, u17;
  let n13 = L((r15 = e7 == null ? void 0 : e7.gap) != null ? r15 : "var(--anchor-gap, 0)", t14), l16 = L((c13 = e7 == null ? void 0 : e7.offset) != null ? c13 : "var(--anchor-offset, 0)", t14), a15 = L((u17 = e7 == null ? void 0 : e7.padding) != null ? u17 : "var(--anchor-padding, 0)", t14);
  return { ...e7, gap: n13, offset: l16, padding: a15 };
}
function L(e7, t14, n13 = void 0) {
  let l16 = p(), a15 = o4((i13, o18) => {
    if (i13 == null)
      return [n13, null];
    if (typeof i13 == "number")
      return [i13, null];
    if (typeof i13 == "string") {
      if (!o18)
        return [n13, null];
      let F6 = J(i13, o18);
      return [F6, (C7) => {
        let M7 = D3(i13);
        {
          let p8 = M7.map((P7) => window.getComputedStyle(o18).getPropertyValue(P7));
          l16.requestAnimationFrame(function P7() {
            l16.nextFrame(P7);
            let s16 = false;
            for (let [b7, $5] of M7.entries()) {
              let g8 = window.getComputedStyle(o18).getPropertyValue($5);
              if (p8[b7] !== g8) {
                p8[b7] = g8, s16 = true;
                break;
              }
            }
            if (!s16)
              return;
            let f20 = J(i13, o18);
            F6 !== f20 && (C7(f20), F6 = f20);
          });
        }
        return l16.dispose;
      }];
    }
    return [n13, null];
  }), r15 = (0, import_react72.useMemo)(() => a15(e7, t14)[0], [e7, t14]), [c13 = r15, u17] = (0, import_react72.useState)();
  return n(() => {
    let [i13, o18] = a15(e7, t14);
    if (u17(i13), !!o18)
      return o18(u17);
  }, [e7, t14]), c13;
}
function D3(e7) {
  let t14 = /var\((.*)\)/.exec(e7);
  if (t14) {
    let n13 = t14[1].indexOf(",");
    if (n13 === -1)
      return [t14[1]];
    let l16 = t14[1].slice(0, n13).trim(), a15 = t14[1].slice(n13 + 1).trim();
    return a15 ? [l16, ...D3(a15)] : [l16];
  }
  return [];
}
function J(e7, t14) {
  let n13 = document.createElement("div");
  t14.appendChild(n13), n13.style.setProperty("margin-top", "0px", "important"), n13.style.setProperty("margin-top", e7, "important");
  let l16 = parseFloat(window.getComputedStyle(n13).marginTop) || 0;
  return t14.removeChild(n13), l16;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react73 = __toESM(require_react(), 1);
var n9 = (0, import_react73.createContext)(null);
n9.displayName = "OpenClosedContext";
var d9 = ((e7) => (e7[e7.Open = 1] = "Open", e7[e7.Closed = 2] = "Closed", e7[e7.Closing = 4] = "Closing", e7[e7.Opening = 8] = "Opening", e7))(d9 || {});
function u13() {
  return (0, import_react73.useContext)(n9);
}
function s8({ value: o18, children: r15 }) {
  return import_react73.default.createElement(n9.Provider, { value: o18 }, r15);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t8(n13) {
  function e7() {
    document.readyState !== "loading" && (n13(), document.removeEventListener("DOMContentLoaded", e7));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e7), e7());
}

// node_modules/@headlessui/react/dist/utils/active-element-history.js
var t9 = [];
t8(() => {
  function e7(n13) {
    n13.target instanceof HTMLElement && n13.target !== document.body && t9[0] !== n13.target && (t9.unshift(n13.target), t9 = t9.filter((r15) => r15 != null && r15.isConnected), t9.splice(10));
  }
  window.addEventListener("click", e7, { capture: true }), window.addEventListener("mousedown", e7, { capture: true }), window.addEventListener("focus", e7, { capture: true }), document.body.addEventListener("click", e7, { capture: true }), document.body.addEventListener("mousedown", e7, { capture: true }), document.body.addEventListener("focus", e7, { capture: true });
});

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u14(l16) {
  throw new Error("Unexpected object: " + l16);
}
var c6 = ((i13) => (i13[i13.First = 0] = "First", i13[i13.Previous = 1] = "Previous", i13[i13.Next = 2] = "Next", i13[i13.Last = 3] = "Last", i13[i13.Specific = 4] = "Specific", i13[i13.Nothing = 5] = "Nothing", i13))(c6 || {});
function f13(l16, n13) {
  let t14 = n13.resolveItems();
  if (t14.length <= 0)
    return null;
  let r15 = n13.resolveActiveIndex(), s16 = r15 != null ? r15 : -1;
  switch (l16.focus) {
    case 0: {
      for (let e7 = 0; e7 < t14.length; ++e7)
        if (!n13.resolveDisabled(t14[e7], e7, t14))
          return e7;
      return r15;
    }
    case 1: {
      s16 === -1 && (s16 = t14.length);
      for (let e7 = s16 - 1; e7 >= 0; --e7)
        if (!n13.resolveDisabled(t14[e7], e7, t14))
          return e7;
      return r15;
    }
    case 2: {
      for (let e7 = s16 + 1; e7 < t14.length; ++e7)
        if (!n13.resolveDisabled(t14[e7], e7, t14))
          return e7;
      return r15;
    }
    case 3: {
      for (let e7 = t14.length - 1; e7 >= 0; --e7)
        if (!n13.resolveDisabled(t14[e7], e7, t14))
          return e7;
      return r15;
    }
    case 4: {
      for (let e7 = 0; e7 < t14.length; ++e7)
        if (n13.resolveId(t14[e7], e7, t14) === l16.id)
          return e7;
      return r15;
    }
    case 5:
      return null;
    default:
      u14(l16);
  }
}

// node_modules/@headlessui/react/dist/components/mouse.js
var g2 = ((f20) => (f20[f20.Left = 0] = "Left", f20[f20.Right = 2] = "Right", f20))(g2 || {});

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react76 = __toESM(require_react(), 1);
var import_react_dom6 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react74 = __toESM(require_react(), 1);
function c7(t14) {
  let r15 = o4(t14), e7 = (0, import_react74.useRef)(false);
  (0, import_react74.useEffect)(() => (e7.current = false, () => {
    e7.current = true, t(() => {
      e7.current && r15();
    });
  }), [r15]);
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t10 = __toESM(require_react(), 1);
function s9() {
  let r15 = typeof document == "undefined";
  return "useSyncExternalStore" in t10 ? ((o18) => o18.useSyncExternalStore)(t10)(() => () => {
  }, () => false, () => !r15) : false;
}
function l10() {
  let r15 = s9(), [e7, n13] = t10.useState(s.isHandoffComplete);
  return e7 && s.isHandoffComplete === false && n13(false), t10.useEffect(() => {
    e7 !== true && n13(true);
  }, [e7]), t10.useEffect(() => s.handoff(), []), r15 ? false : e7;
}

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react75 = __toESM(require_react(), 1);
var e6 = (0, import_react75.createContext)(false);
function a9() {
  return (0, import_react75.useContext)(e6);
}
function l11(o18) {
  return import_react75.default.createElement(e6.Provider, { value: o18.force }, o18.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function D4(p8) {
  let r15 = a9(), l16 = (0, import_react76.useContext)(v4), e7 = n8(p8), [o18, n13] = (0, import_react76.useState)(() => {
    var t14;
    if (!r15 && l16 !== null)
      return (t14 = l16.current) != null ? t14 : null;
    if (s.isServer)
      return null;
    let u17 = e7 == null ? void 0 : e7.getElementById("headlessui-portal-root");
    if (u17)
      return u17;
    if (e7 === null)
      return null;
    let a15 = e7.createElement("div");
    return a15.setAttribute("id", "headlessui-portal-root"), e7.body.appendChild(a15);
  });
  return (0, import_react76.useEffect)(() => {
    o18 !== null && (e7 != null && e7.body.contains(o18) || e7 == null || e7.body.appendChild(o18));
  }, [o18, e7]), (0, import_react76.useEffect)(() => {
    r15 || l16 !== null && n13(l16.current);
  }, [l16, n13, r15]), o18;
}
var M2 = import_react76.Fragment;
var N4 = I(function(r15, l16) {
  let e7 = r15, o18 = (0, import_react76.useRef)(null), n13 = y(T3((i13) => {
    o18.current = i13;
  }), l16), u17 = n8(o18), a15 = D4(o18), [t14] = (0, import_react76.useState)(() => {
    var i13;
    return s.isServer ? null : (i13 = u17 == null ? void 0 : u17.createElement("div")) != null ? i13 : null;
  }), s16 = (0, import_react76.useContext)(y5), b7 = l10();
  return n(() => {
    !a15 || !t14 || a15.contains(t14) || (t14.setAttribute("data-headlessui-portal", ""), a15.appendChild(t14));
  }, [a15, t14]), n(() => {
    if (t14 && s16)
      return s16.register(t14);
  }, [s16, t14]), c7(() => {
    var i13;
    !a15 || !t14 || (t14 instanceof Node && a15.contains(t14) && a15.removeChild(t14), a15.childNodes.length <= 0 && ((i13 = a15.parentElement) == null || i13.removeChild(a15)));
  }), b7 ? !a15 || !t14 ? null : (0, import_react_dom6.createPortal)(H({ ourProps: { ref: n13 }, theirProps: e7, slot: {}, defaultTag: M2, name: "Portal" }), t14) : null;
});
function S5(p8, r15) {
  let l16 = y(r15), { enabled: e7 = true, ...o18 } = p8;
  return e7 ? import_react76.default.createElement(N4, { ...o18, ref: l16 }) : H({ ourProps: { ref: l16 }, theirProps: o18, slot: {}, defaultTag: M2, name: "Portal" });
}
var j5 = import_react76.Fragment;
var v4 = (0, import_react76.createContext)(null);
function W2(p8, r15) {
  let { target: l16, ...e7 } = p8, n13 = { ref: y(r15) };
  return import_react76.default.createElement(v4.Provider, { value: l16 }, H({ ourProps: n13, theirProps: e7, defaultTag: j5, name: "Popover.Group" }));
}
var y5 = (0, import_react76.createContext)(null);
function ee() {
  let p8 = (0, import_react76.useContext)(y5), r15 = (0, import_react76.useRef)([]), l16 = o4((n13) => (r15.current.push(n13), p8 && p8.register(n13), () => e7(n13))), e7 = o4((n13) => {
    let u17 = r15.current.indexOf(n13);
    u17 !== -1 && r15.current.splice(u17, 1), p8 && p8.unregister(n13);
  }), o18 = (0, import_react76.useMemo)(() => ({ register: l16, unregister: e7, portals: r15 }), [l16, e7, r15]);
  return [r15, (0, import_react76.useMemo)(() => function({ children: u17 }) {
    return import_react76.default.createElement(y5.Provider, { value: o18 }, u17);
  }, [o18])];
}
var I4 = I(S5);
var J2 = I(W2);
var te = Object.assign(I4, { Group: J2 });

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var xo = ((e7) => (e7[e7.Open = 0] = "Open", e7[e7.Closed = 1] = "Closed", e7))(xo || {});
var To = ((e7) => (e7[e7.Single = 0] = "Single", e7[e7.Multi = 1] = "Multi", e7))(To || {});
var go = ((t14) => (t14[t14.Pointer = 0] = "Pointer", t14[t14.Focus = 1] = "Focus", t14[t14.Other = 2] = "Other", t14))(go || {});
var vo = ((i13) => (i13[i13.OpenCombobox = 0] = "OpenCombobox", i13[i13.CloseCombobox = 1] = "CloseCombobox", i13[i13.GoToOption = 2] = "GoToOption", i13[i13.RegisterOption = 3] = "RegisterOption", i13[i13.UnregisterOption = 4] = "UnregisterOption", i13[i13.SetActivationTrigger = 5] = "SetActivationTrigger", i13[i13.UpdateVirtualConfiguration = 6] = "UpdateVirtualConfiguration", i13))(vo || {});
function Te(o18, r15 = (e7) => e7) {
  let e7 = o18.activeOptionIndex !== null ? o18.options[o18.activeOptionIndex] : null, t14 = r15(o18.options.slice()), c13 = t14.length > 0 && t14[0].dataRef.current.order !== null ? t14.sort((d16, i13) => d16.dataRef.current.order - i13.dataRef.current.order) : _2(t14, (d16) => d16.dataRef.current.domRef.current), s16 = e7 ? c13.indexOf(e7) : null;
  return s16 === -1 && (s16 = null), { options: c13, activeOptionIndex: s16 };
}
var Oo = { [1](o18) {
  var r15;
  return (r15 = o18.dataRef.current) != null && r15.disabled || o18.comboboxState === 1 ? o18 : { ...o18, activeOptionIndex: null, comboboxState: 1, activationTrigger: 2, __demoMode: false };
}, [0](o18) {
  var r15, e7;
  if ((r15 = o18.dataRef.current) != null && r15.disabled || o18.comboboxState === 0)
    return o18;
  if ((e7 = o18.dataRef.current) != null && e7.value) {
    let t14 = o18.dataRef.current.calculateIndex(o18.dataRef.current.value);
    if (t14 !== -1)
      return { ...o18, activeOptionIndex: t14, comboboxState: 0, __demoMode: false };
  }
  return { ...o18, comboboxState: 0, __demoMode: false };
}, [2](o18, r15) {
  var s16, d16, i13, m13, n13;
  if ((s16 = o18.dataRef.current) != null && s16.disabled || (d16 = o18.dataRef.current) != null && d16.optionsRef.current && !((i13 = o18.dataRef.current) != null && i13.optionsPropsRef.current.static) && o18.comboboxState === 1)
    return o18;
  if (o18.virtual) {
    let { options: p8, disabled: f20 } = o18.virtual, _6 = r15.focus === c6.Specific ? r15.idx : f13(r15, { resolveItems: () => p8, resolveActiveIndex: () => {
      var u17, x6;
      return (x6 = (u17 = o18.activeOptionIndex) != null ? u17 : p8.findIndex((V6) => !f20(V6))) != null ? x6 : null;
    }, resolveDisabled: f20, resolveId() {
      throw new Error("Function not implemented.");
    } }), F6 = (m13 = r15.trigger) != null ? m13 : 2;
    return o18.activeOptionIndex === _6 && o18.activationTrigger === F6 ? o18 : { ...o18, activeOptionIndex: _6, activationTrigger: F6, __demoMode: false };
  }
  let e7 = Te(o18);
  if (e7.activeOptionIndex === null) {
    let p8 = e7.options.findIndex((f20) => !f20.dataRef.current.disabled);
    p8 !== -1 && (e7.activeOptionIndex = p8);
  }
  let t14 = r15.focus === c6.Specific ? r15.idx : f13(r15, { resolveItems: () => e7.options, resolveActiveIndex: () => e7.activeOptionIndex, resolveId: (p8) => p8.id, resolveDisabled: (p8) => p8.dataRef.current.disabled }), c13 = (n13 = r15.trigger) != null ? n13 : 2;
  return o18.activeOptionIndex === t14 && o18.activationTrigger === c13 ? o18 : { ...o18, ...e7, activeOptionIndex: t14, activationTrigger: c13, __demoMode: false };
}, [3]: (o18, r15) => {
  var s16, d16, i13;
  if ((s16 = o18.dataRef.current) != null && s16.virtual)
    return { ...o18, options: [...o18.options, r15.payload] };
  let e7 = r15.payload, t14 = Te(o18, (m13) => (m13.push(e7), m13));
  o18.activeOptionIndex === null && (d16 = o18.dataRef.current) != null && d16.isSelected(r15.payload.dataRef.current.value) && (t14.activeOptionIndex = t14.options.indexOf(e7));
  let c13 = { ...o18, ...t14, activationTrigger: 2 };
  return (i13 = o18.dataRef.current) != null && i13.__demoMode && o18.dataRef.current.value === void 0 && (c13.activeOptionIndex = 0), c13;
}, [4]: (o18, r15) => {
  var t14;
  if ((t14 = o18.dataRef.current) != null && t14.virtual)
    return { ...o18, options: o18.options.filter((c13) => c13.id !== r15.id) };
  let e7 = Te(o18, (c13) => {
    let s16 = c13.findIndex((d16) => d16.id === r15.id);
    return s16 !== -1 && c13.splice(s16, 1), c13;
  });
  return { ...o18, ...e7, activationTrigger: 2 };
}, [5]: (o18, r15) => o18.activationTrigger === r15.trigger ? o18 : { ...o18, activationTrigger: r15.trigger }, [6]: (o18, r15) => {
  var t14, c13;
  if (o18.virtual === null)
    return { ...o18, virtual: { options: r15.options, disabled: (t14 = r15.disabled) != null ? t14 : () => false } };
  if (o18.virtual.options === r15.options && o18.virtual.disabled === r15.disabled)
    return o18;
  let e7 = o18.activeOptionIndex;
  if (o18.activeOptionIndex !== null) {
    let s16 = r15.options.indexOf(o18.virtual.options[o18.activeOptionIndex]);
    s16 !== -1 ? e7 = s16 : e7 = null;
  }
  return { ...o18, activeOptionIndex: e7, virtual: { options: r15.options, disabled: (c13 = r15.disabled) != null ? c13 : () => false } };
} };
var ge = (0, import_react77.createContext)(null);
ge.displayName = "ComboboxActionsContext";
function oe(o18) {
  let r15 = (0, import_react77.useContext)(ge);
  if (r15 === null) {
    let e7 = new Error(`<${o18} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e7, oe), e7;
  }
  return r15;
}
var Le = (0, import_react77.createContext)(null);
function Co(o18) {
  let r15 = Q("VirtualProvider"), { options: e7 } = r15.virtual, [t14, c13] = (0, import_react77.useMemo)(() => {
    let n13 = r15.optionsRef.current;
    if (!n13)
      return [0, 0];
    let p8 = window.getComputedStyle(n13);
    return [parseFloat(p8.paddingBlockStart || p8.paddingTop), parseFloat(p8.paddingBlockEnd || p8.paddingBottom)];
  }, [r15.optionsRef.current]), s16 = useVirtualizer({ scrollPaddingStart: t14, scrollPaddingEnd: c13, count: e7.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    var n13;
    return (n13 = r15.optionsRef.current) != null ? n13 : null;
  }, overscan: 12 }), [d16, i13] = (0, import_react77.useState)(0);
  n(() => {
    i13((n13) => n13 + 1);
  }, [e7]);
  let m13 = s16.getVirtualItems();
  return m13.length === 0 ? null : import_react77.default.createElement(Le.Provider, { value: s16 }, import_react77.default.createElement("div", { style: { position: "relative", width: "100%", height: `${s16.getTotalSize()}px` }, ref: (n13) => {
    if (n13) {
      if (typeof process != "undefined" && process.env.JEST_WORKER_ID !== void 0 || r15.activationTrigger === 0)
        return;
      r15.activeOptionIndex !== null && e7.length > r15.activeOptionIndex && s16.scrollToIndex(r15.activeOptionIndex);
    }
  } }, m13.map((n13) => {
    var p8;
    return import_react77.default.createElement(import_react77.Fragment, { key: n13.key }, import_react77.default.cloneElement((p8 = o18.children) == null ? void 0 : p8.call(o18, { option: e7[n13.index], open: r15.comboboxState === 0 }), { key: `${d16}-${n13.key}`, "data-index": n13.index, "aria-setsize": e7.length, "aria-posinset": n13.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${n13.start}px)`, overflowAnchor: "none" } }));
  })));
}
var se2 = (0, import_react77.createContext)(null);
se2.displayName = "ComboboxDataContext";
function Q(o18) {
  let r15 = (0, import_react77.useContext)(se2);
  if (r15 === null) {
    let e7 = new Error(`<${o18} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e7, Q), e7;
  }
  return r15;
}
function yo(o18, r15) {
  return u2(r15.type, Oo, o18, r15);
}
var Ro = import_react77.Fragment;
function So(o18, r15) {
  var D9, U5;
  let e7 = a3(), { value: t14, defaultValue: c13, onChange: s16, form: d16, name: i13, by: m13, disabled: n13 = e7 || false, onClose: p8, __demoMode: f20 = false, multiple: _6 = false, immediate: F6 = false, virtual: u17 = null, nullable: x6, ...V6 } = o18, P7 = l2(c13), [C7 = _6 ? [] : void 0, y9] = T(t14, s16, P7), [I5, A7] = (0, import_react77.useReducer)(yo, { dataRef: (0, import_react77.createRef)(), comboboxState: f20 ? 0 : 1, options: [], virtual: u17 ? { options: u17.options, disabled: (D9 = u17.disabled) != null ? D9 : () => false } : null, activeOptionIndex: null, activationTrigger: 2, __demoMode: f20 }), h7 = (0, import_react77.useRef)(false), w10 = (0, import_react77.useRef)({ static: false, hold: false }), O3 = (0, import_react77.useRef)(null), W6 = (0, import_react77.useRef)(null), z7 = (0, import_react77.useRef)(null), g8 = u9(m13), $5 = o4((b7) => u17 ? m13 === null ? u17.options.indexOf(b7) : u17.options.findIndex((v7) => g8(v7, b7)) : I5.options.findIndex((v7) => g8(v7.dataRef.current.value, b7))), X3 = (0, import_react77.useCallback)((b7) => u2(a15.mode, { [1]: () => C7.some((v7) => g8(v7, b7)), [0]: () => g8(C7, b7) }), [C7]), J6 = o4((b7) => I5.activeOptionIndex === $5(b7)), a15 = (0, import_react77.useMemo)(() => ({ ...I5, immediate: F6, optionsPropsRef: w10, inputRef: O3, buttonRef: W6, optionsRef: z7, value: C7, defaultValue: P7, disabled: n13, mode: _6 ? 1 : 0, virtual: u17 ? I5.virtual : null, get activeOptionIndex() {
    if (h7.current && I5.activeOptionIndex === null && (u17 ? u17.options.length > 0 : I5.options.length > 0)) {
      if (u17) {
        let v7 = u17.options.findIndex((N5) => {
          var ae6, ve5;
          return !((ve5 = (ae6 = u17.disabled) == null ? void 0 : ae6.call(u17, N5)) != null && ve5);
        });
        if (v7 !== -1)
          return v7;
      }
      let b7 = I5.options.findIndex((v7) => !v7.dataRef.current.disabled);
      if (b7 !== -1)
        return b7;
    }
    return I5.activeOptionIndex;
  }, calculateIndex: $5, compare: g8, isSelected: X3, isActive: J6 }), [C7, P7, n13, _6, f20, I5, u17]);
  n(() => {
    var b7;
    u17 && A7({ type: 6, options: u17.options, disabled: (b7 = u17.disabled) != null ? b7 : null });
  }, [u17, u17 == null ? void 0 : u17.options, u17 == null ? void 0 : u17.disabled]), n(() => {
    I5.dataRef.current = a15;
  }, [a15]), w6([a15.buttonRef, a15.inputRef, a15.optionsRef], () => l16.closeCombobox(), a15.comboboxState === 0);
  let j11 = (0, import_react77.useMemo)(() => {
    var b7, v7, N5;
    return { open: a15.comboboxState === 0, disabled: n13, activeIndex: a15.activeOptionIndex, activeOption: a15.activeOptionIndex === null ? null : a15.virtual ? a15.virtual.options[(b7 = a15.activeOptionIndex) != null ? b7 : 0] : (N5 = (v7 = a15.options[a15.activeOptionIndex]) == null ? void 0 : v7.dataRef.current.value) != null ? N5 : null, value: C7 };
  }, [a15, n13, C7]), de4 = o4(() => {
    if (a15.activeOptionIndex !== null) {
      if (a15.virtual)
        q6(a15.virtual.options[a15.activeOptionIndex]);
      else {
        let { dataRef: b7 } = a15.options[a15.activeOptionIndex];
        q6(b7.current.value);
      }
      l16.goToOption(c6.Specific, a15.activeOptionIndex);
    }
  }), be4 = o4(() => {
    A7({ type: 0 }), h7.current = true;
  }), te4 = o4(() => {
    A7({ type: 1 }), h7.current = false, p8 == null || p8();
  }), ne3 = o4((b7, v7, N5) => (h7.current = false, b7 === c6.Specific ? A7({ type: 2, focus: c6.Specific, idx: v7, trigger: N5 }) : A7({ type: 2, focus: b7, trigger: N5 }))), re2 = o4((b7, v7) => (A7({ type: 3, payload: { id: b7, dataRef: v7 } }), () => {
    a15.isActive(v7.current.value) && (h7.current = true), A7({ type: 4, id: b7 });
  })), q6 = o4((b7) => u2(a15.mode, { [0]() {
    return y9 == null ? void 0 : y9(b7);
  }, [1]() {
    let v7 = a15.value.slice(), N5 = v7.findIndex((ae6) => g8(ae6, b7));
    return N5 === -1 ? v7.push(b7) : v7.splice(N5, 1), y9 == null ? void 0 : y9(v7);
  } })), ie3 = o4((b7) => {
    A7({ type: 5, trigger: b7 });
  }), l16 = (0, import_react77.useMemo)(() => ({ onChange: q6, registerOption: re2, goToOption: ne3, closeCombobox: te4, openCombobox: be4, setActivationTrigger: ie3, selectActiveOption: de4 }), []), [B3, E11] = z(), k5 = r15 === null ? {} : { ref: r15 }, R7 = (0, import_react77.useCallback)(() => {
    if (P7 !== void 0)
      return y9 == null ? void 0 : y9(P7);
  }, [y9, P7]);
  return import_react77.default.createElement(E11, { value: B3, props: { htmlFor: (U5 = a15.inputRef.current) == null ? void 0 : U5.id }, slot: { open: a15.comboboxState === 0, disabled: n13 } }, import_react77.default.createElement(ve, null, import_react77.default.createElement(ge.Provider, { value: l16 }, import_react77.default.createElement(se2.Provider, { value: a15 }, import_react77.default.createElement(s8, { value: u2(a15.comboboxState, { [0]: d9.Open, [1]: d9.Closed }) }, i13 != null && import_react77.default.createElement(j2, { disabled: n13, data: C7 != null ? { [i13]: C7 } : {}, form: d16, onReset: R7 }), H({ ourProps: k5, theirProps: V6, slot: j11, defaultTag: Ro, name: "Combobox" }))))));
}
var Po = "input";
function Io(o18, r15) {
  var te4, ne3, re2, q6, ie3;
  let e7 = Q("Combobox.Input"), t14 = oe("Combobox.Input"), c13 = (0, import_react46.useId)(), s16 = u5(), { id: d16 = s16 || `headlessui-combobox-input-${c13}`, onChange: i13, displayValue: m13, disabled: n13 = e7.disabled || false, autoFocus: p8 = false, type: f20 = "text", ..._6 } = o18, F6 = y(e7.inputRef, r15, ye()), u17 = n8(e7.inputRef), x6 = (0, import_react77.useRef)(false), V6 = p(), P7 = o4(() => {
    t14.onChange(null), e7.optionsRef.current && (e7.optionsRef.current.scrollTop = 0), t14.goToOption(c6.Nothing);
  }), C7 = (0, import_react77.useMemo)(() => {
    var l16;
    return typeof m13 == "function" && e7.value !== void 0 ? (l16 = m13(e7.value)) != null ? l16 : "" : typeof e7.value == "string" ? e7.value : "";
  }, [e7.value, m13]);
  m10(([l16, B3], [E11, k5]) => {
    if (x6.current)
      return;
    let R7 = e7.inputRef.current;
    R7 && ((k5 === 0 && B3 === 1 || l16 !== E11) && (R7.value = l16), requestAnimationFrame(() => {
      if (x6.current || !R7 || (u17 == null ? void 0 : u17.activeElement) !== R7)
        return;
      let { selectionStart: D9, selectionEnd: U5 } = R7;
      Math.abs((U5 != null ? U5 : 0) - (D9 != null ? D9 : 0)) === 0 && D9 === 0 && R7.setSelectionRange(R7.value.length, R7.value.length);
    }));
  }, [C7, e7.comboboxState, u17]), m10(([l16], [B3]) => {
    if (l16 === 0 && B3 === 1) {
      if (x6.current)
        return;
      let E11 = e7.inputRef.current;
      if (!E11)
        return;
      let k5 = E11.value, { selectionStart: R7, selectionEnd: D9, selectionDirection: U5 } = E11;
      E11.value = "", E11.value = k5, U5 !== null ? E11.setSelectionRange(R7, D9, U5) : E11.setSelectionRange(R7, D9);
    }
  }, [e7.comboboxState]);
  let y9 = (0, import_react77.useRef)(false), I5 = o4(() => {
    y9.current = true;
  }), A7 = o4(() => {
    V6.nextFrame(() => {
      y9.current = false;
    });
  }), h7 = m5(), w10 = o4((l16) => {
    switch (x6.current = true, h7(() => {
      x6.current = false;
    }), l16.key) {
      case o8.Enter:
        if (x6.current = false, e7.comboboxState !== 0 || y9.current)
          return;
        if (l16.preventDefault(), l16.stopPropagation(), e7.activeOptionIndex === null) {
          t14.closeCombobox();
          return;
        }
        t14.selectActiveOption(), e7.mode === 0 && t14.closeCombobox();
        break;
      case o8.ArrowDown:
        return x6.current = false, l16.preventDefault(), l16.stopPropagation(), u2(e7.comboboxState, { [0]: () => t14.goToOption(c6.Next), [1]: () => t14.openCombobox() });
      case o8.ArrowUp:
        return x6.current = false, l16.preventDefault(), l16.stopPropagation(), u2(e7.comboboxState, { [0]: () => t14.goToOption(c6.Previous), [1]: () => {
          t14.openCombobox(), V6.nextFrame(() => {
            e7.value || t14.goToOption(c6.Last);
          });
        } });
      case o8.Home:
        if (l16.shiftKey)
          break;
        return x6.current = false, l16.preventDefault(), l16.stopPropagation(), t14.goToOption(c6.First);
      case o8.PageUp:
        return x6.current = false, l16.preventDefault(), l16.stopPropagation(), t14.goToOption(c6.First);
      case o8.End:
        if (l16.shiftKey)
          break;
        return x6.current = false, l16.preventDefault(), l16.stopPropagation(), t14.goToOption(c6.Last);
      case o8.PageDown:
        return x6.current = false, l16.preventDefault(), l16.stopPropagation(), t14.goToOption(c6.Last);
      case o8.Escape:
        return x6.current = false, e7.comboboxState !== 0 ? void 0 : (l16.preventDefault(), e7.optionsRef.current && !e7.optionsPropsRef.current.static && l16.stopPropagation(), e7.mode === 0 && e7.value === null && P7(), t14.closeCombobox());
      case o8.Tab:
        if (x6.current = false, e7.comboboxState !== 0)
          return;
        e7.mode === 0 && e7.activationTrigger !== 1 && t14.selectActiveOption(), t14.closeCombobox();
        break;
    }
  }), O3 = o4((l16) => {
    i13 == null || i13(l16), e7.mode === 0 && l16.target.value === "" && P7(), t14.openCombobox();
  }), W6 = o4((l16) => {
    var E11, k5, R7;
    let B3 = (E11 = l16.relatedTarget) != null ? E11 : t9.find((D9) => D9 !== l16.currentTarget);
    if (x6.current = false, !((k5 = e7.optionsRef.current) != null && k5.contains(B3)) && !((R7 = e7.buttonRef.current) != null && R7.contains(B3)) && e7.comboboxState === 0)
      return l16.preventDefault(), e7.mode === 0 && e7.value === null && P7(), t14.closeCombobox();
  }), z7 = o4((l16) => {
    var E11, k5, R7;
    let B3 = (E11 = l16.relatedTarget) != null ? E11 : t9.find((D9) => D9 !== l16.currentTarget);
    (k5 = e7.buttonRef.current) != null && k5.contains(B3) || (R7 = e7.optionsRef.current) != null && R7.contains(B3) || e7.disabled || e7.immediate && e7.comboboxState !== 0 && (t14.openCombobox(), V6.nextFrame(() => {
      t14.setActivationTrigger(1);
    }));
  }), g8 = I2(), $5 = G(), { isFocused: X3, focusProps: J6 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: p8 }), { isHovered: a15, hoverProps: j11 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: n13 }), de4 = (0, import_react77.useMemo)(() => ({ open: e7.comboboxState === 0, disabled: n13, hover: a15, focus: X3, autofocus: p8 }), [e7, a15, X3, p8, n13]), be4 = D({ ref: F6, id: d16, role: "combobox", type: f20, "aria-controls": (te4 = e7.optionsRef.current) == null ? void 0 : te4.id, "aria-expanded": e7.comboboxState === 0, "aria-activedescendant": e7.activeOptionIndex === null ? void 0 : e7.virtual ? (ne3 = e7.options.find((l16) => !l16.dataRef.current.disabled && e7.compare(l16.dataRef.current.value, e7.virtual.options[e7.activeOptionIndex]))) == null ? void 0 : ne3.id : (re2 = e7.options[e7.activeOptionIndex]) == null ? void 0 : re2.id, "aria-labelledby": g8, "aria-describedby": $5, "aria-autocomplete": "list", defaultValue: (ie3 = (q6 = o18.defaultValue) != null ? q6 : e7.defaultValue !== void 0 ? m13 == null ? void 0 : m13(e7.defaultValue) : null) != null ? ie3 : e7.defaultValue, disabled: n13 || void 0, autoFocus: p8, onCompositionStart: I5, onCompositionEnd: A7, onKeyDown: w10, onChange: O3, onFocus: z7, onBlur: W6 }, J6, j11);
  return H({ ourProps: be4, theirProps: _6, slot: de4, defaultTag: Po, name: "Combobox.Input" });
}
var Ao = "button";
function Eo(o18, r15) {
  var w10;
  let e7 = Q("Combobox.Button"), t14 = oe("Combobox.Button"), c13 = y(e7.buttonRef, r15), s16 = (0, import_react46.useId)(), { id: d16 = `headlessui-combobox-button-${s16}`, disabled: i13 = e7.disabled || false, autoFocus: m13 = false, ...n13 } = o18, p8 = p(), f20 = f11(e7.inputRef), _6 = o4((O3) => {
    switch (O3.key) {
      case o8.Space:
      case o8.Enter:
        return O3.preventDefault(), O3.stopPropagation(), e7.comboboxState === 1 && t14.openCombobox(), p8.nextFrame(() => f20());
      case o8.ArrowDown:
        return O3.preventDefault(), O3.stopPropagation(), e7.comboboxState === 1 && (t14.openCombobox(), p8.nextFrame(() => {
          e7.value || t14.goToOption(c6.First);
        })), p8.nextFrame(() => f20());
      case o8.ArrowUp:
        return O3.preventDefault(), O3.stopPropagation(), e7.comboboxState === 1 && (t14.openCombobox(), p8.nextFrame(() => {
          e7.value || t14.goToOption(c6.Last);
        })), p8.nextFrame(() => f20());
      case o8.Escape:
        return e7.comboboxState !== 0 ? void 0 : (O3.preventDefault(), e7.optionsRef.current && !e7.optionsPropsRef.current.static && O3.stopPropagation(), t14.closeCombobox(), p8.nextFrame(() => f20()));
      default:
        return;
    }
  }), F6 = o4((O3) => {
    O3.preventDefault(), !r5(O3.currentTarget) && (O3.button === g2.Left && (e7.comboboxState === 0 ? t14.closeCombobox() : t14.openCombobox()), f20());
  }), u17 = I2([d16]), { isFocusVisible: x6, focusProps: V6 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: m13 }), { isHovered: P7, hoverProps: C7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i13 }), { pressed: y9, pressProps: I5 } = w({ disabled: i13 }), A7 = (0, import_react77.useMemo)(() => ({ open: e7.comboboxState === 0, active: y9 || e7.comboboxState === 0, disabled: i13, value: e7.value, hover: P7, focus: x6 }), [e7, P7, x6, y9, i13]), h7 = D({ ref: c13, id: d16, type: T8(o18, e7.buttonRef), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (w10 = e7.optionsRef.current) == null ? void 0 : w10.id, "aria-expanded": e7.comboboxState === 0, "aria-labelledby": u17, disabled: i13 || void 0, autoFocus: m13, onMouseDown: F6, onKeyDown: _6 }, V6, C7, I5);
  return H({ ourProps: h7, theirProps: n13, slot: A7, defaultTag: Ao, name: "Combobox.Button" });
}
var _o = "div";
var Fo = O.RenderStrategy | O.Static;
function ho(o18, r15) {
  var z7;
  let e7 = (0, import_react46.useId)(), { id: t14 = `headlessui-combobox-options-${e7}`, hold: c13 = false, anchor: s16, portal: d16 = false, modal: i13 = true, ...m13 } = o18, n13 = Q("Combobox.Options"), p8 = oe("Combobox.Options"), f20 = xe(s16);
  f20 && (d16 = true);
  let [_6, F6] = Re2(f20), u17 = be(), x6 = y(n13.optionsRef, r15, f20 ? _6 : null), V6 = n8(n13.optionsRef), P7 = u13(), C7 = (() => P7 !== null ? (P7 & d9.Open) === d9.Open : n13.comboboxState === 0)();
  m6(n13.inputRef, p8.closeCombobox, C7), u11(V6, n13.__demoMode ? false : i13 && n13.comboboxState === 0), T6({ allowed: o4(() => [n13.inputRef.current, n13.buttonRef.current, n13.optionsRef.current]) }, n13.__demoMode ? false : i13 && n13.comboboxState === 0), n(() => {
    var g8;
    n13.optionsPropsRef.current.static = (g8 = o18.static) != null ? g8 : false;
  }, [n13.optionsPropsRef, o18.static]), n(() => {
    n13.optionsPropsRef.current.hold = c13;
  }, [n13.optionsPropsRef, c13]), F2({ container: n13.optionsRef.current, enabled: n13.comboboxState === 0, accept(g8) {
    return g8.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : g8.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(g8) {
    g8.setAttribute("role", "none");
  } });
  let y9 = I2([(z7 = n13.buttonRef.current) == null ? void 0 : z7.id]), I5 = (0, import_react77.useMemo)(() => ({ open: n13.comboboxState === 0, option: void 0 }), [n13]), A7 = o4(() => {
    p8.setActivationTrigger(0);
  }), h7 = D(f20 ? u17() : {}, { "aria-labelledby": y9, role: "listbox", "aria-multiselectable": n13.mode === 1 ? true : void 0, id: t14, ref: x6, style: { ...F6, "--input-width": f7(n13.inputRef, true).width, "--button-width": f7(n13.buttonRef, true).width }, onWheel: A7 });
  n13.virtual && C7 && Object.assign(m13, { children: import_react77.default.createElement(Co, null, m13.children) });
  let [w10, O3] = (0, import_react77.useState)(n13.value);
  n13.value !== w10 && n13.comboboxState === 0 && n13.mode !== 1 && O3(n13.value);
  let W6 = o4((g8) => n13.compare(w10, g8));
  return import_react77.default.createElement(te, { enabled: d16 ? o18.static || C7 : false }, import_react77.default.createElement(se2.Provider, { value: n13.mode === 1 ? n13 : { ...n13, isSelected: W6 } }, H({ ourProps: h7, theirProps: m13, slot: I5, defaultTag: _o, features: Fo, visible: C7, name: "Combobox.Options" })));
}
var Do = "div";
function Mo(o18, r15) {
  var g8, $5, X3, J6;
  let e7 = Q("Combobox.Option"), t14 = oe("Combobox.Option"), c13 = (0, import_react46.useId)(), { id: s16 = `headlessui-combobox-option-${c13}`, value: d16, disabled: i13 = (X3 = ($5 = (g8 = e7.virtual) == null ? void 0 : g8.disabled) == null ? void 0 : $5.call(g8, d16)) != null ? X3 : false, order: m13 = null, ...n13 } = o18, p8 = f11(e7.inputRef), f20 = e7.virtual ? e7.activeOptionIndex === e7.calculateIndex(d16) : e7.activeOptionIndex === null ? false : ((J6 = e7.options[e7.activeOptionIndex]) == null ? void 0 : J6.id) === s16, _6 = e7.isSelected(d16), F6 = (0, import_react77.useRef)(null), u17 = s3({ disabled: i13, value: d16, domRef: F6, order: m13 }), x6 = (0, import_react77.useContext)(Le), V6 = y(r15, F6, x6 ? x6.measureElement : null), P7 = o4(() => t14.onChange(d16));
  n(() => t14.registerOption(s16, u17), [u17, s16]);
  let C7 = (0, import_react77.useRef)(!(e7.virtual || e7.__demoMode));
  n(() => {
    if (!e7.virtual && !e7.__demoMode)
      return o2().requestAnimationFrame(() => {
        C7.current = true;
      });
  }, [e7.virtual, e7.__demoMode]), n(() => {
    if (C7.current && e7.comboboxState === 0 && f20 && e7.activationTrigger !== 0)
      return o2().requestAnimationFrame(() => {
        var a15, j11;
        (j11 = (a15 = F6.current) == null ? void 0 : a15.scrollIntoView) == null || j11.call(a15, { block: "nearest" });
      });
  }, [F6, f20, e7.comboboxState, e7.activationTrigger, e7.activeOptionIndex]);
  let y9 = o4((a15) => {
    a15.preventDefault(), a15.button === g2.Left && (i13 || (P7(), n7() || requestAnimationFrame(() => p8()), e7.mode === 0 && t14.closeCombobox()));
  }), I5 = o4(() => {
    if (i13)
      return t14.goToOption(c6.Nothing);
    let a15 = e7.calculateIndex(d16);
    t14.goToOption(c6.Specific, a15);
  }), A7 = u12(), h7 = o4((a15) => A7.update(a15)), w10 = o4((a15) => {
    if (!A7.wasMoved(a15) || i13 || f20)
      return;
    let j11 = e7.calculateIndex(d16);
    t14.goToOption(c6.Specific, j11, 0);
  }), O3 = o4((a15) => {
    A7.wasMoved(a15) && (i13 || f20 && (e7.optionsPropsRef.current.hold || t14.goToOption(c6.Nothing)));
  }), W6 = (0, import_react77.useMemo)(() => ({ active: f20, focus: f20, selected: _6, disabled: i13 }), [f20, _6, i13]);
  return H({ ourProps: { id: s16, ref: V6, role: "option", tabIndex: i13 === true ? void 0 : -1, "aria-disabled": i13 === true ? true : void 0, "aria-selected": _6, disabled: void 0, onMouseDown: y9, onFocus: I5, onPointerEnter: h7, onMouseEnter: h7, onPointerMove: w10, onMouseMove: w10, onPointerLeave: O3, onMouseLeave: O3 }, theirProps: n13, slot: W6, defaultTag: Do, name: "Combobox.Option" });
}
var Vo = I(So);
var Lo = I(Eo);
var wo = I(Io);
var Bo = K;
var ko = I(ho);
var No = I(Mo);
var ht = Object.assign(Vo, { Input: wo, Button: Lo, Label: Bo, Options: ko, Option: No });

// node_modules/@headlessui/react/dist/components/data-interactive/data-interactive.js
var import_react78 = __toESM(require_react(), 1);
var E9 = import_react78.Fragment;
function _4(o18, n13) {
  let { ...p8 } = o18, e7 = false, { isFocusVisible: t14, focusProps: s16 } = $f7dceffc5ad7768b$export$4e328f61c538687f(), { isHovered: r15, hoverProps: i13 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), { pressed: a15, pressProps: T12 } = w({ disabled: e7 }), l16 = D({ ref: n13 }, s16, i13, T12), m13 = (0, import_react78.useMemo)(() => ({ hover: r15, focus: t14, active: a15 }), [r15, t14, a15]);
  return H({ ourProps: l16, theirProps: p8, slot: m13, defaultTag: E9, name: "DataInteractive" });
}
var C3 = I(_4);

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react85 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js
var import_react79 = __toESM(require_react(), 1);
function f16() {
  var t14;
  let [e7] = (0, import_react79.useState)(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o18, c13] = (0, import_react79.useState)((t14 = e7 == null ? void 0 : e7.matches) != null ? t14 : false);
  return n(() => {
    if (!e7)
      return;
    function n13(r15) {
      c13(r15.matches);
    }
    return e7.addEventListener("change", n13), () => e7.removeEventListener("change", n13);
  }, [e7]), o18;
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react80 = __toESM(require_react(), 1);
function j6({ defaultContainers: o18 = [], portals: r15, mainTreeNodeRef: u17 } = {}) {
  var f20;
  let t14 = (0, import_react80.useRef)((f20 = u17 == null ? void 0 : u17.current) != null ? f20 : null), l16 = n8(t14), c13 = o4(() => {
    var i13, s16, a15;
    let n13 = [];
    for (let e7 of o18)
      e7 !== null && (e7 instanceof HTMLElement ? n13.push(e7) : "current" in e7 && e7.current instanceof HTMLElement && n13.push(e7.current));
    if (r15 != null && r15.current)
      for (let e7 of r15.current)
        n13.push(e7);
    for (let e7 of (i13 = l16 == null ? void 0 : l16.querySelectorAll("html > *, body > *")) != null ? i13 : [])
      e7 !== document.body && e7 !== document.head && e7 instanceof HTMLElement && e7.id !== "headlessui-portal-root" && (e7.contains(t14.current) || e7.contains((a15 = (s16 = t14.current) == null ? void 0 : s16.getRootNode()) == null ? void 0 : a15.host) || n13.some((L9) => e7.contains(L9)) || n13.push(e7));
    return n13;
  });
  return { resolveContainers: c13, contains: o4((n13) => c13().some((i13) => i13.contains(n13))), mainTreeNodeRef: t14, MainTreeNode: (0, import_react80.useMemo)(() => function() {
    return u17 != null ? null : import_react80.default.createElement(T2, { features: s4.Hidden, ref: t14 });
  }, [t14, u17]) };
}
function y6() {
  let o18 = (0, import_react80.useRef)(null);
  return { mainTreeNodeRef: o18, MainTreeNode: (0, import_react80.useMemo)(() => function() {
    return import_react80.default.createElement(T2, { features: s4.Hidden, ref: o18 });
  }, [o18]) };
}

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react81 = __toESM(require_react(), 1);
var a10 = (0, import_react81.createContext)(() => {
});
a10.displayName = "StackContext";
var s10 = ((e7) => (e7[e7.Add = 0] = "Add", e7[e7.Remove = 1] = "Remove", e7))(s10 || {});
function x2() {
  return (0, import_react81.useContext)(a10);
}
function b3({ children: i13, onUpdate: r15, type: e7, element: n13, enabled: u17 }) {
  let l16 = x2(), o18 = o4((...t14) => {
    r15 == null || r15(...t14), l16(...t14);
  });
  return n(() => {
    let t14 = u17 === void 0 || u17 === true;
    return t14 && o18(0, e7, n13), () => {
      t14 && o18(1, e7, n13);
    };
  }, [o18, e7, n13, u17]), import_react81.default.createElement(a10.Provider, { value: o18 }, i13);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react84 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react82 = __toESM(require_react(), 1);
function f17() {
  let e7 = (0, import_react82.useRef)(false);
  return n(() => (e7.current = true, () => {
    e7.current = false;
  }), []), e7;
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react83 = __toESM(require_react(), 1);
var s11 = ((r15) => (r15[r15.Forwards = 0] = "Forwards", r15[r15.Backwards = 1] = "Backwards", r15))(s11 || {});
function n11() {
  let e7 = (0, import_react83.useRef)(0);
  return s6("keydown", (o18) => {
    o18.key === "Tab" && (e7.current = o18.shiftKey ? 1 : 0);
  }, true), e7;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function S6(t14) {
  if (!t14)
    return /* @__PURE__ */ new Set();
  if (typeof t14 == "function")
    return new Set(t14());
  let o18 = /* @__PURE__ */ new Set();
  for (let e7 of t14.current)
    e7.current instanceof HTMLElement && o18.add(e7.current);
  return o18;
}
var z2 = "div";
var h5 = ((r15) => (r15[r15.None = 1] = "None", r15[r15.InitialFocus = 2] = "InitialFocus", r15[r15.TabLock = 4] = "TabLock", r15[r15.FocusLock = 8] = "FocusLock", r15[r15.RestoreFocus = 16] = "RestoreFocus", r15[r15.AutoFocus = 32] = "AutoFocus", r15[r15.All = 30] = "All", r15))(h5 || {});
function Q2(t14, o18) {
  let e7 = (0, import_react84.useRef)(null), n13 = y(e7, o18), { initialFocus: c13, initialFocusFallback: p8, containers: u17, features: r15 = 30, ...l16 } = t14;
  l10() || (r15 = 1);
  let s16 = n8(e7);
  $({ ownerDocument: s16 }, !!(r15 & 16));
  let U5 = D6({ ownerDocument: s16, container: e7, initialFocus: c13, initialFocusFallback: p8 }, r15);
  w7({ ownerDocument: s16, container: e7, containers: u17, previousActiveElement: U5 }, !!(r15 & 8));
  let b7 = n11(), A7 = o4((a15) => {
    let m13 = e7.current;
    if (!m13)
      return;
    ((N5) => N5())(() => {
      u2(b7.current, { [s11.Forwards]: () => {
        P5(m13, F.First, { skipElements: [a15.relatedTarget, p8] });
      }, [s11.Backwards]: () => {
        P5(m13, F.Last, { skipElements: [a15.relatedTarget, p8] });
      } });
    });
  }), B3 = p(), H10 = (0, import_react84.useRef)(false), x6 = { ref: n13, onKeyDown(a15) {
    a15.key == "Tab" && (H10.current = true, B3.requestAnimationFrame(() => {
      H10.current = false;
    }));
  }, onBlur(a15) {
    if (!(r15 & 8))
      return;
    let m13 = S6(u17);
    e7.current instanceof HTMLElement && m13.add(e7.current);
    let E11 = a15.relatedTarget;
    E11 instanceof HTMLElement && E11.dataset.headlessuiFocusGuard !== "true" && (j7(m13, E11) || (H10.current ? P5(e7.current, u2(b7.current, { [s11.Forwards]: () => F.Next, [s11.Backwards]: () => F.Previous }) | F.WrapAround, { relativeTo: a15.target }) : a15.target instanceof HTMLElement && I3(a15.target)));
  } };
  return import_react84.default.createElement(import_react84.default.Fragment, null, !!(r15 & 4) && import_react84.default.createElement(T2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: A7, features: s4.Focusable }), H({ ourProps: x6, theirProps: l16, defaultTag: z2, name: "FocusTrap" }), !!(r15 & 4) && import_react84.default.createElement(T2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: A7, features: s4.Focusable }));
}
var Y = I(Q2);
var Le2 = Object.assign(Y, { features: h5 });
function Z(t14 = true) {
  let o18 = (0, import_react84.useRef)(t9.slice());
  return m10(([e7], [n13]) => {
    n13 === true && e7 === false && t(() => {
      o18.current.splice(0);
    }), n13 === false && e7 === true && (o18.current = t9.slice());
  }, [t14, t9, o18]), o4(() => {
    var e7;
    return (e7 = o18.current.find((n13) => n13 != null && n13.isConnected)) != null ? e7 : null;
  });
}
function $({ ownerDocument: t14 }, o18) {
  let e7 = Z(o18);
  m10(() => {
    o18 || (t14 == null ? void 0 : t14.activeElement) === (t14 == null ? void 0 : t14.body) && I3(e7());
  }, [o18]), c7(() => {
    o18 && I3(e7());
  });
}
function D6({ ownerDocument: t14, container: o18, initialFocus: e7, initialFocusFallback: n13 }, c13) {
  let p8 = !!(c13 & 2), u17 = (0, import_react84.useRef)(null), r15 = f17();
  return m10(() => {
    if (!p8) {
      n13 != null && n13.current && I3(n13.current);
      return;
    }
    let l16 = o18.current;
    l16 && t(() => {
      if (!r15.current)
        return;
      let s16 = t14 == null ? void 0 : t14.activeElement;
      if (e7 != null && e7.current) {
        if ((e7 == null ? void 0 : e7.current) === s16) {
          u17.current = s16;
          return;
        }
      } else if (l16.contains(s16)) {
        u17.current = s16;
        return;
      }
      if (e7 != null && e7.current)
        I3(e7.current);
      else {
        if (c13 & 32) {
          if (P5(l16, F.First | F.AutoFocus) !== T7.Error)
            return;
        } else if (P5(l16, F.First) !== T7.Error)
          return;
        if (n13 != null && n13.current && (I3(n13.current), (t14 == null ? void 0 : t14.activeElement) === n13.current))
          return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      u17.current = t14 == null ? void 0 : t14.activeElement;
    });
  }, [n13, p8, c13]), u17;
}
function w7({ ownerDocument: t14, container: o18, containers: e7, previousActiveElement: n13 }, c13) {
  let p8 = f17();
  E5(t14 == null ? void 0 : t14.defaultView, "focus", (u17) => {
    if (!c13 || !p8.current)
      return;
    let r15 = S6(e7);
    o18.current instanceof HTMLElement && r15.add(o18.current);
    let l16 = n13.current;
    if (!l16)
      return;
    let s16 = u17.target;
    s16 && s16 instanceof HTMLElement ? j7(r15, s16) ? (n13.current = s16, I3(s16)) : (u17.preventDefault(), u17.stopPropagation(), I3(l16)) : I3(n13.current);
  }, true);
}
function j7(t14, o18) {
  for (let e7 of t14)
    if (e7.contains(o18))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var He = ((r15) => (r15[r15.Open = 0] = "Open", r15[r15.Closed = 1] = "Closed", r15))(He || {});
var Ne = ((t14) => (t14[t14.SetTitleId = 0] = "SetTitleId", t14))(Ne || {});
var ke2 = { [0](o18, t14) {
  return o18.titleId === t14.id ? o18 : { ...o18, titleId: t14.id };
} };
var b4 = (0, import_react85.createContext)(null);
b4.displayName = "DialogContext";
function M4(o18) {
  let t14 = (0, import_react85.useContext)(b4);
  if (t14 === null) {
    let r15 = new Error(`<${o18} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r15, M4), r15;
  }
  return t14;
}
function Ue(o18, t14) {
  return u2(t14.type, ke2, o18, t14);
}
var $e = "div";
var je = O.RenderStrategy | O.Static;
function We(o18, t14) {
  let r15 = (0, import_react46.useId)(), { id: d16 = `headlessui-dialog-${r15}`, open: i13, onClose: s16, initialFocus: f20, role: a15 = "dialog", autoFocus: D9 = true, __demoMode: p8 = false, ...G10 } = o18, [R7, H10] = (0, import_react85.useState)(0), N5 = (0, import_react85.useRef)(false);
  a15 = function() {
    return a15 === "dialog" || a15 === "alertdialog" ? a15 : (N5.current || (N5.current = true, console.warn(`Invalid role [${a15}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let P7 = u13();
  i13 === void 0 && P7 !== null && (i13 = (P7 & d9.Open) === d9.Open);
  let u17 = (0, import_react85.useRef)(null), z7 = y(u17, t14), y9 = n8(u17), k5 = o18.hasOwnProperty("open") || P7 !== null, U5 = o18.hasOwnProperty("onClose");
  if (!k5 && !U5)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!k5)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!U5)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof i13 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i13}`);
  if (typeof s16 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${s16}`);
  let n13 = i13 ? 0 : 1, [E11, Q6] = (0, import_react85.useReducer)(Ue, { titleId: null, descriptionId: null, panelRef: (0, import_react85.createRef)() }), m13 = o4(() => s16(false)), $5 = o4((e7) => Q6({ type: 0, id: e7 })), v7 = l10() ? n13 === 0 : false, C7 = R7 > 1, Z7 = (0, import_react85.useContext)(b4) !== null, [ee6, te4] = ee(), oe3 = { get current() {
    var e7;
    return (e7 = E11.panelRef.current) != null ? e7 : u17.current;
  } }, { resolveContainers: S8, mainTreeNodeRef: re2, MainTreeNode: le4 } = j6({ portals: ee6, defaultContainers: [oe3] }), ne3 = C7 ? "parent" : "leaf", j11 = P7 !== null ? (P7 & d9.Closing) === d9.Closing : false, ae6 = /* @__PURE__ */ (() => C7 || j11 ? false : v7)();
  T6({ allowed: o4(() => {
    var e7, g8;
    return [(g8 = (e7 = u17.current) == null ? void 0 : e7.closest("[data-headlessui-portal]")) != null ? g8 : null];
  }), disallowed: o4(() => {
    var e7, g8;
    return [(g8 = (e7 = re2.current) == null ? void 0 : e7.closest("body > *:not(#headlessui-portal-root)")) != null ? g8 : null];
  }) }, p8 ? false : ae6);
  let ie3 = /* @__PURE__ */ (() => !(!v7 || C7))();
  w6(S8, (e7) => {
    e7.preventDefault(), m13();
  }, ie3);
  let se5 = /* @__PURE__ */ (() => !(C7 || n13 !== 0))();
  E5(y9 == null ? void 0 : y9.defaultView, "keydown", (e7) => {
    se5 && (e7.defaultPrevented || e7.key === o8.Escape && (e7.preventDefault(), e7.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), m13()));
  });
  let pe6 = /* @__PURE__ */ (() => !(j11 || n13 !== 0 || Z7))();
  u11(y9, p8 ? false : pe6, S8), m6(u17, m13, n13 === 0);
  let [ue3, de4] = U2(), fe4 = (0, import_react85.useMemo)(() => [{ dialogState: n13, close: m13, setTitleId: $5 }, E11], [n13, E11, m13, $5]), W6 = (0, import_react85.useMemo)(() => ({ open: n13 === 0 }), [n13]), ge4 = { ref: z7, id: d16, role: a15, tabIndex: -1, "aria-modal": p8 ? void 0 : n13 === 0 ? true : void 0, "aria-labelledby": E11.titleId, "aria-describedby": ue3 }, Te4 = !f16(), A7 = v7 ? u2(ne3, { parent: h5.RestoreFocus, leaf: h5.All & ~h5.FocusLock }) : h5.None;
  return D9 && (A7 |= h5.AutoFocus), Te4 || (A7 &= ~h5.InitialFocus), p8 && (A7 = h5.None), import_react85.default.createElement(b3, { type: "Dialog", enabled: n13 === 0, element: u17, onUpdate: o4((e7, g8) => {
    g8 === "Dialog" && u2(e7, { [s10.Add]: () => H10((x6) => x6 + 1), [s10.Remove]: () => H10((x6) => x6 - 1) });
  }) }, import_react85.default.createElement(l11, { force: true }, import_react85.default.createElement(te, null, import_react85.default.createElement(b4.Provider, { value: fe4 }, import_react85.default.createElement(te.Group, { target: u17 }, import_react85.default.createElement(l11, { force: false }, import_react85.default.createElement(de4, { slot: W6, name: "Dialog.Description" }, import_react85.default.createElement(te4, null, import_react85.default.createElement(Le2, { initialFocus: f20, initialFocusFallback: p8 ? void 0 : u17, containers: S8, features: A7 }, import_react85.default.createElement(u8, { value: m13 }, H({ ourProps: ge4, theirProps: G10, slot: W6, defaultTag: $e, features: je, visible: n13 === 0, name: "Dialog" })))))))))), import_react85.default.createElement(c2, null, import_react85.default.createElement(le4, null)));
}
var Ye = "div";
function Je(o18, t14) {
  let r15 = (0, import_react46.useId)(), { id: d16 = `headlessui-dialog-panel-${r15}`, ...i13 } = o18, [{ dialogState: s16 }, f20] = M4("Dialog.Panel"), a15 = y(t14, f20.panelRef), D9 = (0, import_react85.useMemo)(() => ({ open: s16 === 0 }), [s16]), p8 = o4((R7) => {
    R7.stopPropagation();
  });
  return H({ ourProps: { ref: a15, id: d16, onClick: p8 }, theirProps: i13, slot: D9, defaultTag: Ye, name: "Dialog.Panel" });
}
var Xe = "h2";
function Be2(o18, t14) {
  let r15 = (0, import_react46.useId)(), { id: d16 = `headlessui-dialog-title-${r15}`, ...i13 } = o18, [{ dialogState: s16, setTitleId: f20 }] = M4("Dialog.Title"), a15 = y(t14);
  (0, import_react85.useEffect)(() => (f20(d16), () => f20(null)), [d16, f20]);
  let D9 = (0, import_react85.useMemo)(() => ({ open: s16 === 0 }), [s16]);
  return H({ ourProps: { ref: a15, id: d16 }, theirProps: i13, slot: D9, defaultTag: Xe, name: "Dialog.Title" });
}
var Ke = I(We);
var Ve = I(Je);
var qe = I(Be2);
var At = w3;
var _t = Object.assign(Ke, { Panel: Ve, Title: qe, Description: w3 });

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react87 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react86 = __toESM(require_react(), 1);
var t13;
var a11 = (t13 = import_react86.default.startTransition) != null ? t13 : function(i13) {
  i13();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var ae2 = ((o18) => (o18[o18.Open = 0] = "Open", o18[o18.Closed = 1] = "Closed", o18))(ae2 || {});
var pe2 = ((t14) => (t14[t14.ToggleDisclosure = 0] = "ToggleDisclosure", t14[t14.CloseDisclosure = 1] = "CloseDisclosure", t14[t14.SetButtonId = 2] = "SetButtonId", t14[t14.SetPanelId = 3] = "SetPanelId", t14[t14.LinkPanel = 4] = "LinkPanel", t14[t14.UnlinkPanel = 5] = "UnlinkPanel", t14))(pe2 || {});
var ce4 = { [0]: (e7) => ({ ...e7, disclosureState: u2(e7.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e7) => e7.disclosureState === 1 ? e7 : { ...e7, disclosureState: 1 }, [4](e7) {
  return e7.linkedPanel === true ? e7 : { ...e7, linkedPanel: true };
}, [5](e7) {
  return e7.linkedPanel === false ? e7 : { ...e7, linkedPanel: false };
}, [2](e7, n13) {
  return e7.buttonId === n13.buttonId ? e7 : { ...e7, buttonId: n13.buttonId };
}, [3](e7, n13) {
  return e7.panelId === n13.panelId ? e7 : { ...e7, panelId: n13.panelId };
} };
var M5 = (0, import_react87.createContext)(null);
M5.displayName = "DisclosureContext";
function F3(e7) {
  let n13 = (0, import_react87.useContext)(M5);
  if (n13 === null) {
    let o18 = new Error(`<${e7} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o18, F3), o18;
  }
  return n13;
}
var k2 = (0, import_react87.createContext)(null);
k2.displayName = "DisclosureAPIContext";
function V2(e7) {
  let n13 = (0, import_react87.useContext)(k2);
  if (n13 === null) {
    let o18 = new Error(`<${e7} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o18, V2), o18;
  }
  return n13;
}
var H6 = (0, import_react87.createContext)(null);
H6.displayName = "DisclosurePanelContext";
function de() {
  return (0, import_react87.useContext)(H6);
}
function fe2(e7, n13) {
  return u2(n13.type, ce4, e7, n13);
}
var Te2 = import_react87.Fragment;
function De2(e7, n13) {
  let { defaultOpen: o18 = false, ...d16 } = e7, u17 = (0, import_react87.useRef)(null), r15 = y(n13, T3((c13) => {
    u17.current = c13;
  }, e7.as === void 0 || e7.as === import_react87.Fragment)), t14 = (0, import_react87.useRef)(null), l16 = (0, import_react87.useRef)(null), i13 = (0, import_react87.useReducer)(fe2, { disclosureState: o18 ? 0 : 1, linkedPanel: false, buttonRef: l16, panelRef: t14, buttonId: null, panelId: null }), [{ disclosureState: f20, buttonId: s16 }, T12] = i13, p8 = o4((c13) => {
    T12({ type: 1 });
    let P7 = u(u17);
    if (!P7 || !s16)
      return;
    let y9 = (() => c13 ? c13 instanceof HTMLElement ? c13 : c13.current instanceof HTMLElement ? c13.current : P7.getElementById(s16) : P7.getElementById(s16))();
    y9 == null || y9.focus();
  }), m13 = (0, import_react87.useMemo)(() => ({ close: p8 }), [p8]), D9 = (0, import_react87.useMemo)(() => ({ open: f20 === 0, close: p8 }), [f20, p8]), I5 = { ref: r15 };
  return import_react87.default.createElement(M5.Provider, { value: i13 }, import_react87.default.createElement(k2.Provider, { value: m13 }, import_react87.default.createElement(u8, { value: p8 }, import_react87.default.createElement(s8, { value: u2(f20, { [0]: d9.Open, [1]: d9.Closed }) }, H({ ourProps: I5, theirProps: d16, slot: D9, defaultTag: Te2, name: "Disclosure" })))));
}
var Pe2 = "button";
function ye4(e7, n13) {
  let o18 = (0, import_react46.useId)(), { id: d16 = `headlessui-disclosure-button-${o18}`, disabled: u17 = false, autoFocus: r15 = false, ...t14 } = e7, [l16, i13] = F3("Disclosure.Button"), f20 = de(), s16 = f20 === null ? false : f20 === l16.panelId, T12 = (0, import_react87.useRef)(null), p8 = y(T12, n13, s16 ? null : l16.buttonRef), m13 = U();
  (0, import_react87.useEffect)(() => {
    if (!s16)
      return i13({ type: 2, buttonId: d16 }), () => {
        i13({ type: 2, buttonId: null });
      };
  }, [d16, i13, s16]);
  let D9 = o4((a15) => {
    var E11;
    if (s16) {
      if (l16.disclosureState === 1)
        return;
      switch (a15.key) {
        case o8.Space:
        case o8.Enter:
          a15.preventDefault(), a15.stopPropagation(), i13({ type: 0 }), (E11 = l16.buttonRef.current) == null || E11.focus();
          break;
      }
    } else
      switch (a15.key) {
        case o8.Space:
        case o8.Enter:
          a15.preventDefault(), a15.stopPropagation(), i13({ type: 0 });
          break;
      }
  }), I5 = o4((a15) => {
    switch (a15.key) {
      case o8.Space:
        a15.preventDefault();
        break;
    }
  }), c13 = o4((a15) => {
    var E11;
    r5(a15.currentTarget) || u17 || (s16 ? (i13({ type: 0 }), (E11 = l16.buttonRef.current) == null || E11.focus()) : i13({ type: 0 }));
  }), { isFocusVisible: P7, focusProps: y9 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r15 }), { isHovered: U5, hoverProps: h7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: u17 }), { pressed: N5, pressProps: w10 } = w({ disabled: u17 }), q6 = (0, import_react87.useMemo)(() => ({ open: l16.disclosureState === 0, hover: U5, active: N5, disabled: u17, focus: P7, autofocus: r15 }), [l16, U5, N5, P7, u17, r15]), G10 = T8(e7, T12), z7 = s16 ? D({ ref: p8, type: G10, disabled: u17 || void 0, autoFocus: r15, onKeyDown: D9, onClick: c13 }, y9, h7, w10) : D({ ref: p8, id: d16, type: G10, "aria-expanded": l16.disclosureState === 0, "aria-controls": l16.linkedPanel ? l16.panelId : void 0, disabled: u17 || void 0, autoFocus: r15, onKeyDown: D9, onKeyUp: I5, onClick: c13 }, y9, h7, w10);
  return H({ mergeRefs: m13, ourProps: z7, theirProps: t14, slot: q6, defaultTag: Pe2, name: "Disclosure.Button" });
}
var me2 = "div";
var Ee = O.RenderStrategy | O.Static;
function ge2(e7, n13) {
  let o18 = (0, import_react46.useId)(), { id: d16 = `headlessui-disclosure-panel-${o18}`, ...u17 } = e7, [r15, t14] = F3("Disclosure.Panel"), { close: l16 } = V2("Disclosure.Panel"), i13 = U(), f20 = y(n13, r15.panelRef, (D9) => {
    a11(() => t14({ type: D9 ? 4 : 5 }));
  });
  (0, import_react87.useEffect)(() => (t14({ type: 3, panelId: d16 }), () => {
    t14({ type: 3, panelId: null });
  }), [d16, t14]);
  let s16 = u13(), T12 = (() => s16 !== null ? (s16 & d9.Open) === d9.Open : r15.disclosureState === 0)(), p8 = (0, import_react87.useMemo)(() => ({ open: r15.disclosureState === 0, close: l16 }), [r15, l16]), m13 = { ref: f20, id: d16 };
  return import_react87.default.createElement(H6.Provider, { value: r15.panelId }, H({ mergeRefs: i13, ourProps: m13, theirProps: u17, slot: p8, defaultTag: me2, features: Ee, visible: T12, name: "Disclosure.Panel" }));
}
var Se2 = I(De2);
var be2 = I(ye4);
var Re4 = I(ge2);
var we = Object.assign(Se2, { Button: be2, Panel: Re4 });

// node_modules/@headlessui/react/dist/components/field/field.js
var import_react88 = __toESM(require_react(), 1);
var A4 = "div";
function L5(d16, l16) {
  let t14 = `headlessui-control-${(0, import_react46.useId)()}`, [s16, p8] = z(), [n13, a15] = U2(), m13 = a3(), { disabled: e7 = m13 || false, ...o18 } = d16, i13 = (0, import_react88.useMemo)(() => ({ disabled: e7 }), [e7]);
  return import_react88.default.createElement(l, { value: e7 }, import_react88.default.createElement(p8, { value: s16 }, import_react88.default.createElement(a15, { value: n13 }, import_react88.default.createElement(f5, { id: t14 }, H({ ourProps: { ref: l16, disabled: e7 || void 0, "aria-disabled": e7 || void 0 }, theirProps: { ...o18, children: import_react88.default.createElement(W, null, typeof o18.children == "function" ? o18.children(i13) : o18.children) }, slot: i13, defaultTag: A4, name: "Field" })))));
}
var H7 = I(L5);

// node_modules/@headlessui/react/dist/components/fieldset/fieldset.js
var import_react90 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-resolved-tag.js
var import_react89 = __toESM(require_react(), 1);
function l13(t14) {
  let e7 = typeof t14 == "string" ? t14 : void 0, [s16, o18] = (0, import_react89.useState)(e7);
  return [e7 != null ? e7 : s16, (0, import_react89.useCallback)((n13) => {
    e7 || n13 instanceof HTMLElement && o18(n13.tagName.toLowerCase());
  }, [e7])];
}

// node_modules/@headlessui/react/dist/components/fieldset/fieldset.js
var d13 = "fieldset";
function A5(t14, i13) {
  var s16;
  let a15 = a3(), { disabled: e7 = a15 || false, ...p8 } = t14, [n13, T12] = l13((s16 = t14.as) != null ? s16 : d13), l16 = y(i13, T12), [r15, f20] = z(), m13 = (0, import_react90.useMemo)(() => ({ disabled: e7 }), [e7]);
  return import_react90.default.createElement(l, { value: e7 }, import_react90.default.createElement(f20, null, H({ ourProps: n13 === "fieldset" ? { ref: l16, "aria-labelledby": r15, disabled: e7 || void 0 } : { ref: l16, role: "group", "aria-labelledby": r15, "aria-disabled": e7 || void 0 }, theirProps: p8, slot: m13, defaultTag: d13, name: "Fieldset" })));
}
var C4 = I(A5);

// node_modules/@headlessui/react/dist/components/input/input.js
var import_react91 = __toESM(require_react(), 1);
var x4 = "input";
function h6(n13, s16) {
  let a15 = (0, import_react46.useId)(), l16 = u5(), i13 = a3(), { id: d16 = l16 || `headlessui-input-${a15}`, disabled: e7 = i13 || false, autoFocus: o18 = false, invalid: t14 = false, ...u17 } = n13, f20 = I2(), m13 = G(), { isFocused: r15, focusProps: T12 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: o18 }), { isHovered: p8, hoverProps: b7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), y9 = D({ ref: s16, id: d16, "aria-labelledby": f20, "aria-describedby": m13, "aria-invalid": t14 ? "" : void 0, disabled: e7 || void 0, autoFocus: o18 }, T12, b7), I5 = (0, import_react91.useMemo)(() => ({ disabled: e7, invalid: t14, hover: p8, focus: r15, autofocus: o18 }), [e7, t14, p8, r15, o18]);
  return H({ ourProps: y9, theirProps: u17, slot: I5, defaultTag: x4, name: "Input" });
}
var J4 = I(h6);

// node_modules/@headlessui/react/dist/components/legend/legend.js
var import_react92 = __toESM(require_react(), 1);
function o15(t14, n13) {
  return import_react92.default.createElement(K, { as: "div", ref: n13, ...t14 });
}
var d14 = I(o15);

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react96 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react93 = __toESM(require_react(), 1);
function i11(e7, o18) {
  let [u17, t14] = (0, import_react93.useState)(e7), r15 = s3(e7);
  return n(() => t14(r15.current), [r15, t14, ...o18]), u17;
}

// node_modules/@headlessui/react/dist/hooks/use-did-element-move.js
var import_react94 = __toESM(require_react(), 1);
function p7(e7, r15 = true) {
  let t14 = (0, import_react94.useRef)({ left: 0, top: 0 });
  if (n(() => {
    let u17 = e7.current;
    if (!u17)
      return;
    let l16 = u17.getBoundingClientRect();
    l16 && (t14.current = l16);
  }, [r15]), e7.current == null || !r15 || e7.current === document.activeElement)
    return false;
  let n13 = e7.current.getBoundingClientRect();
  return n13.top !== t14.current.top || n13.left !== t14.current.left;
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react95 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a13 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o17(e7) {
  var r15, i13;
  let n13 = (r15 = e7.innerText) != null ? r15 : "", t14 = e7.cloneNode(true);
  if (!(t14 instanceof HTMLElement))
    return n13;
  let u17 = false;
  for (let f20 of t14.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f20.remove(), u17 = true;
  let l16 = u17 ? (i13 = t14.innerText) != null ? i13 : "" : n13;
  return a13.test(l16) && (l16 = l16.replace(a13, "")), l16;
}
function g6(e7) {
  let n13 = e7.getAttribute("aria-label");
  if (typeof n13 == "string")
    return n13.trim();
  let t14 = e7.getAttribute("aria-labelledby");
  if (t14) {
    let u17 = t14.split(" ").map((l16) => {
      let r15 = document.getElementById(l16);
      if (r15) {
        let i13 = r15.getAttribute("aria-label");
        return typeof i13 == "string" ? i13.trim() : o17(r15).trim();
      }
      return null;
    }).filter(Boolean);
    if (u17.length > 0)
      return u17.join(", ");
  }
  return o17(e7).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s13(c13) {
  let t14 = (0, import_react95.useRef)(""), r15 = (0, import_react95.useRef)("");
  return o4(() => {
    let e7 = c13.current;
    if (!e7)
      return "";
    let u17 = e7.innerText;
    if (t14.current === u17)
      return r15.current;
    let n13 = g6(e7).trim().toLowerCase();
    return t14.current = u17, r15.current = n13, n13;
  });
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var bt = ((o18) => (o18[o18.Open = 0] = "Open", o18[o18.Closed = 1] = "Closed", o18))(bt || {});
var Tt = ((o18) => (o18[o18.Single = 0] = "Single", o18[o18.Multi = 1] = "Multi", o18))(Tt || {});
var xt = ((o18) => (o18[o18.Pointer = 0] = "Pointer", o18[o18.Other = 1] = "Other", o18))(xt || {});
var mt = ((i13) => (i13[i13.OpenListbox = 0] = "OpenListbox", i13[i13.CloseListbox = 1] = "CloseListbox", i13[i13.GoToOption = 2] = "GoToOption", i13[i13.Search = 3] = "Search", i13[i13.ClearSearch = 4] = "ClearSearch", i13[i13.RegisterOption = 5] = "RegisterOption", i13[i13.UnregisterOption = 6] = "UnregisterOption", i13))(mt || {});
function ae3(e7, a15 = (o18) => o18) {
  let o18 = e7.activeOptionIndex !== null ? e7.options[e7.activeOptionIndex] : null, n13 = _2(a15(e7.options.slice()), (T12) => T12.dataRef.current.domRef.current), u17 = o18 ? n13.indexOf(o18) : null;
  return u17 === -1 && (u17 = null), { options: n13, activeOptionIndex: u17 };
}
var Ot = { [1](e7) {
  return e7.dataRef.current.disabled || e7.listboxState === 1 ? e7 : { ...e7, activeOptionIndex: null, listboxState: 1, __demoMode: false };
}, [0](e7) {
  if (e7.dataRef.current.disabled || e7.listboxState === 0)
    return e7;
  let a15 = e7.activeOptionIndex, { isSelected: o18 } = e7.dataRef.current, n13 = e7.options.findIndex((u17) => o18(u17.dataRef.current.value));
  return n13 !== -1 && (a15 = n13), { ...e7, listboxState: 0, activeOptionIndex: a15, __demoMode: false };
}, [2](e7, a15) {
  var T12, O3, i13, l16, t14;
  if (e7.dataRef.current.disabled || e7.listboxState === 1)
    return e7;
  let o18 = { ...e7, searchQuery: "", activationTrigger: (T12 = a15.trigger) != null ? T12 : 1, __demoMode: false };
  if (a15.focus === c6.Nothing)
    return { ...o18, activeOptionIndex: null };
  if (a15.focus === c6.Specific)
    return { ...o18, activeOptionIndex: e7.options.findIndex((r15) => r15.id === a15.id) };
  if (a15.focus === c6.Previous) {
    let r15 = e7.activeOptionIndex;
    if (r15 !== null) {
      let R7 = e7.options[r15].dataRef.current.domRef, c13 = f13(a15, { resolveItems: () => e7.options, resolveActiveIndex: () => e7.activeOptionIndex, resolveId: (d16) => d16.id, resolveDisabled: (d16) => d16.dataRef.current.disabled });
      if (c13 !== null) {
        let d16 = e7.options[c13].dataRef.current.domRef;
        if (((O3 = R7.current) == null ? void 0 : O3.previousElementSibling) === d16.current || ((i13 = d16.current) == null ? void 0 : i13.previousElementSibling) === null)
          return { ...o18, activeOptionIndex: c13 };
      }
    }
  } else if (a15.focus === c6.Next) {
    let r15 = e7.activeOptionIndex;
    if (r15 !== null) {
      let R7 = e7.options[r15].dataRef.current.domRef, c13 = f13(a15, { resolveItems: () => e7.options, resolveActiveIndex: () => e7.activeOptionIndex, resolveId: (d16) => d16.id, resolveDisabled: (d16) => d16.dataRef.current.disabled });
      if (c13 !== null) {
        let d16 = e7.options[c13].dataRef.current.domRef;
        if (((l16 = R7.current) == null ? void 0 : l16.nextElementSibling) === d16.current || ((t14 = d16.current) == null ? void 0 : t14.nextElementSibling) === null)
          return { ...o18, activeOptionIndex: c13 };
      }
    }
  }
  let n13 = ae3(e7), u17 = f13(a15, { resolveItems: () => n13.options, resolveActiveIndex: () => n13.activeOptionIndex, resolveId: (r15) => r15.id, resolveDisabled: (r15) => r15.dataRef.current.disabled });
  return { ...o18, ...n13, activeOptionIndex: u17 };
}, [3]: (e7, a15) => {
  if (e7.dataRef.current.disabled || e7.listboxState === 1)
    return e7;
  let n13 = e7.searchQuery !== "" ? 0 : 1, u17 = e7.searchQuery + a15.value.toLowerCase(), O3 = (e7.activeOptionIndex !== null ? e7.options.slice(e7.activeOptionIndex + n13).concat(e7.options.slice(0, e7.activeOptionIndex + n13)) : e7.options).find((l16) => {
    var t14;
    return !l16.dataRef.current.disabled && ((t14 = l16.dataRef.current.textValue) == null ? void 0 : t14.startsWith(u17));
  }), i13 = O3 ? e7.options.indexOf(O3) : -1;
  return i13 === -1 || i13 === e7.activeOptionIndex ? { ...e7, searchQuery: u17 } : { ...e7, searchQuery: u17, activeOptionIndex: i13, activationTrigger: 1 };
}, [4](e7) {
  return e7.dataRef.current.disabled || e7.listboxState === 1 || e7.searchQuery === "" ? e7 : { ...e7, searchQuery: "" };
}, [5]: (e7, a15) => {
  let o18 = { id: a15.id, dataRef: a15.dataRef }, n13 = ae3(e7, (u17) => [...u17, o18]);
  return e7.activeOptionIndex === null && e7.dataRef.current.isSelected(a15.dataRef.current.value) && (n13.activeOptionIndex = n13.options.indexOf(o18)), { ...e7, ...n13 };
}, [6]: (e7, a15) => {
  let o18 = ae3(e7, (n13) => {
    let u17 = n13.findIndex((T12) => T12.id === a15.id);
    return u17 !== -1 && n13.splice(u17, 1), n13;
  });
  return { ...e7, ...o18, activationTrigger: 1 };
} };
var le = (0, import_react96.createContext)(null);
le.displayName = "ListboxActionsContext";
function $2(e7) {
  let a15 = (0, import_react96.useContext)(le);
  if (a15 === null) {
    let o18 = new Error(`<${e7} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o18, $2), o18;
  }
  return a15;
}
var q2 = (0, import_react96.createContext)(null);
q2.displayName = "ListboxDataContext";
function W3(e7) {
  let a15 = (0, import_react96.useContext)(q2);
  if (a15 === null) {
    let o18 = new Error(`<${e7} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o18, W3), o18;
  }
  return a15;
}
function yt(e7, a15) {
  return u2(a15.type, Ot, e7, a15);
}
var vt = import_react96.Fragment;
function gt(e7, a15) {
  var se5;
  let o18 = a3(), { value: n13, defaultValue: u17, form: T12, name: O3, onChange: i13, by: l16, invalid: t14 = false, disabled: r15 = o18 || false, horizontal: R7 = false, multiple: c13 = false, __demoMode: d16 = false, ...E11 } = e7;
  const U5 = R7 ? "horizontal" : "vertical";
  let w10 = y(a15), _6 = l2(u17), [g8 = c13 ? [] : void 0, y9] = T(n13, i13, _6), [I5, v7] = (0, import_react96.useReducer)(yt, { dataRef: (0, import_react96.createRef)(), listboxState: d16 ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, optionsVisible: false, __demoMode: d16 }), B3 = (0, import_react96.useRef)({ static: false, hold: false }), M7 = (0, import_react96.useRef)(null), x6 = (0, import_react96.useRef)(null), A7 = (0, import_react96.useRef)(/* @__PURE__ */ new Map()), h7 = u9(l16), N5 = (0, import_react96.useCallback)((b7) => u2(p8.mode, { [1]: () => g8.some((L9) => h7(L9, b7)), [0]: () => h7(g8, b7) }), [g8]), p8 = (0, import_react96.useMemo)(() => ({ ...I5, value: g8, disabled: r15, invalid: t14, mode: c13 ? 1 : 0, orientation: U5, compare: h7, isSelected: N5, optionsPropsRef: B3, buttonRef: M7, optionsRef: x6, listRef: A7 }), [g8, r15, t14, c13, I5, A7]);
  n(() => {
    I5.dataRef.current = p8;
  }, [p8]), w6([p8.buttonRef, p8.optionsRef], (b7, L9) => {
    var F6;
    v7({ type: 1 }), A2(L9, h4.Loose) || (b7.preventDefault(), (F6 = p8.buttonRef.current) == null || F6.focus());
  }, p8.listboxState === 0);
  let G10 = (0, import_react96.useMemo)(() => ({ open: p8.listboxState === 0, disabled: r15, invalid: t14, value: g8 }), [p8, r15, g8, t14]), Y4 = o4((b7) => {
    let L9 = p8.options.find((F6) => F6.id === b7);
    L9 && Z7(L9.dataRef.current.value);
  }), Q6 = o4(() => {
    if (p8.activeOptionIndex !== null) {
      let { dataRef: b7, id: L9 } = p8.options[p8.activeOptionIndex];
      Z7(b7.current.value), v7({ type: 2, focus: c6.Specific, id: L9 });
    }
  }), s16 = o4(() => v7({ type: 0 })), P7 = o4(() => v7({ type: 1 })), C7 = p(), Te4 = o4((b7, L9, F6) => {
    C7.dispose(), C7.microTask(() => b7 === c6.Specific ? v7({ type: 2, focus: c6.Specific, id: L9, trigger: F6 }) : v7({ type: 2, focus: b7, trigger: F6 }));
  }), xe4 = o4((b7, L9) => (v7({ type: 5, id: b7, dataRef: L9 }), () => v7({ type: 6, id: b7 }))), Z7 = o4((b7) => u2(p8.mode, { [0]() {
    return y9 == null ? void 0 : y9(b7);
  }, [1]() {
    let L9 = p8.value.slice(), F6 = L9.findIndex((Re7) => h7(Re7, b7));
    return F6 === -1 ? L9.push(b7) : L9.splice(F6, 1), y9 == null ? void 0 : y9(L9);
  } })), me4 = o4((b7) => v7({ type: 3, value: b7 })), Oe2 = o4(() => v7({ type: 4 })), ye7 = (0, import_react96.useMemo)(() => ({ onChange: Z7, registerOption: xe4, goToOption: Te4, closeListbox: P7, openListbox: s16, selectActiveOption: Q6, selectOption: Y4, search: me4, clearSearch: Oe2 }), []), [ve5, ge4] = z({ inherit: true }), Le6 = { ref: w10 }, Se5 = (0, import_react96.useCallback)(() => {
    if (_6 !== void 0)
      return y9 == null ? void 0 : y9(_6);
  }, [y9, _6]);
  return import_react96.default.createElement(ge4, { value: ve5, props: { htmlFor: (se5 = p8.buttonRef.current) == null ? void 0 : se5.id }, slot: { open: p8.listboxState === 0, disabled: r15 } }, import_react96.default.createElement(ve, null, import_react96.default.createElement(le.Provider, { value: ye7 }, import_react96.default.createElement(q2.Provider, { value: p8 }, import_react96.default.createElement(s8, { value: u2(p8.listboxState, { [0]: d9.Open, [1]: d9.Closed }) }, O3 != null && g8 != null && import_react96.default.createElement(j2, { disabled: r15, data: { [O3]: g8 }, form: T12, onReset: Se5 }), H({ ourProps: Le6, theirProps: E11, slot: G10, defaultTag: vt, name: "Listbox" }))))));
}
var Lt = "button";
function St(e7, a15) {
  var N5;
  let o18 = W3("Listbox.Button"), n13 = $2("Listbox.Button"), u17 = (0, import_react46.useId)(), T12 = u5(), { id: O3 = T12 || `headlessui-listbox-button-${u17}`, disabled: i13 = o18.disabled || false, autoFocus: l16 = false, ...t14 } = e7, r15 = y(o18.buttonRef, a15, ye()), R7 = Fe(), c13 = p(), d16 = o4((p8) => {
    switch (p8.key) {
      case o8.Enter:
        p2(p8.currentTarget);
        break;
      case o8.Space:
      case o8.ArrowDown:
        p8.preventDefault(), n13.openListbox(), c13.nextFrame(() => {
          o18.value || n13.goToOption(c6.First);
        });
        break;
      case o8.ArrowUp:
        p8.preventDefault(), n13.openListbox(), c13.nextFrame(() => {
          o18.value || n13.goToOption(c6.Last);
        });
        break;
    }
  }), E11 = o4((p8) => {
    switch (p8.key) {
      case o8.Space:
        p8.preventDefault();
        break;
    }
  }), U5 = o4((p8) => {
    if (r5(p8.currentTarget))
      return p8.preventDefault();
    o18.listboxState === 0 ? (n13.closeListbox(), c13.nextFrame(() => {
      var G10;
      return (G10 = o18.buttonRef.current) == null ? void 0 : G10.focus({ preventScroll: true });
    })) : (p8.preventDefault(), n13.openListbox());
  }), w10 = o4((p8) => p8.preventDefault()), _6 = I2([O3]), g8 = G(), { isFocusVisible: y9, focusProps: I5 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: l16 }), { isHovered: v7, hoverProps: B3 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i13 }), { pressed: M7, pressProps: x6 } = w({ disabled: i13 }), A7 = (0, import_react96.useMemo)(() => ({ open: o18.listboxState === 0, active: M7 || o18.listboxState === 0, disabled: i13, invalid: o18.invalid, value: o18.value, hover: v7, focus: y9, autofocus: l16 }), [o18.listboxState, o18.value, i13, v7, y9, M7, o18.invalid, l16]), h7 = D(R7(), { ref: r15, id: O3, type: T8(e7, o18.buttonRef), "aria-haspopup": "listbox", "aria-controls": (N5 = o18.optionsRef.current) == null ? void 0 : N5.id, "aria-expanded": o18.listboxState === 0, "aria-labelledby": _6, "aria-describedby": g8, disabled: i13 || void 0, autoFocus: l16, onKeyDown: d16, onKeyUp: E11, onKeyPress: w10, onClick: U5 }, I5, B3, x6);
  return H({ ourProps: h7, theirProps: t14, slot: A7, defaultTag: Lt, name: "Listbox.Button" });
}
var be3 = (0, import_react96.createContext)(false);
var Rt = "div";
var Pt = O.RenderStrategy | O.Static;
function At2(e7, a15) {
  var Q6;
  let o18 = (0, import_react46.useId)(), { id: n13 = `headlessui-listbox-options-${o18}`, anchor: u17, portal: T12 = false, modal: O3 = true, ...i13 } = e7, l16 = xe(u17);
  l16 && (T12 = true);
  let t14 = W3("Listbox.Options"), r15 = $2("Listbox.Options"), R7 = n8(t14.optionsRef), c13 = u13(), d16 = (() => c13 !== null ? (c13 & d9.Open) === d9.Open : t14.listboxState === 0)();
  m6(t14.buttonRef, r15.closeListbox, d16), u11(R7, t14.__demoMode ? false : O3 && t14.listboxState === 0), T6({ allowed: o4(() => [t14.buttonRef.current, t14.optionsRef.current]) }, t14.__demoMode ? false : O3 && t14.listboxState === 0);
  let E11 = (0, import_react96.useRef)(null);
  (0, import_react96.useEffect)(() => {
    var P7;
    if (!((P7 = l16 == null ? void 0 : l16.to) != null && P7.includes("selection")))
      return;
    if (!d16) {
      E11.current = null;
      return;
    }
    let s16 = Array.from(t14.listRef.current.values());
    E11.current = s16.findIndex((C7) => (C7 == null ? void 0 : C7.dataset.selected) === ""), E11.current === -1 && (E11.current = s16.findIndex((C7) => (C7 == null ? void 0 : C7.dataset.disabled) === void 0), r15.goToOption(c6.First));
  }, [d16, t14.listRef]);
  let w10 = p7(t14.buttonRef, t14.listboxState !== 0) ? false : d16, _6 = (() => {
    if (l16 == null)
      return;
    if (t14.listRef.current.size <= 0)
      return { ...l16, inner: void 0 };
    let s16 = Array.from(t14.listRef.current.values());
    return { ...l16, inner: { listRef: { current: s16 }, index: E11.current } };
  })(), [g8, y9] = Re2(_6), I5 = be(), v7 = y(t14.optionsRef, a15, l16 ? g8 : null), B3 = p(), M7 = p();
  (0, import_react96.useEffect)(() => {
    var P7;
    let s16 = t14.optionsRef.current;
    s16 && t14.listboxState === 0 && s16 !== ((P7 = u(s16)) == null ? void 0 : P7.activeElement) && (s16 == null || s16.focus({ preventScroll: true }));
  }, [t14.listboxState, t14.optionsRef, t14.optionsRef.current]);
  let x6 = o4((s16) => {
    switch (M7.dispose(), s16.key) {
      case o8.Space:
        if (t14.searchQuery !== "")
          return s16.preventDefault(), s16.stopPropagation(), r15.search(s16.key);
      case o8.Enter:
        if (s16.preventDefault(), s16.stopPropagation(), t14.activeOptionIndex !== null) {
          let { dataRef: P7 } = t14.options[t14.activeOptionIndex];
          r15.onChange(P7.current.value);
        }
        t14.mode === 0 && (r15.closeListbox(), o2().nextFrame(() => {
          var P7;
          return (P7 = t14.buttonRef.current) == null ? void 0 : P7.focus({ preventScroll: true });
        }));
        break;
      case u2(t14.orientation, { vertical: o8.ArrowDown, horizontal: o8.ArrowRight }):
        return s16.preventDefault(), s16.stopPropagation(), r15.goToOption(c6.Next);
      case u2(t14.orientation, { vertical: o8.ArrowUp, horizontal: o8.ArrowLeft }):
        return s16.preventDefault(), s16.stopPropagation(), r15.goToOption(c6.Previous);
      case o8.Home:
      case o8.PageUp:
        return s16.preventDefault(), s16.stopPropagation(), r15.goToOption(c6.First);
      case o8.End:
      case o8.PageDown:
        return s16.preventDefault(), s16.stopPropagation(), r15.goToOption(c6.Last);
      case o8.Escape:
        return s16.preventDefault(), s16.stopPropagation(), r15.closeListbox(), B3.nextFrame(() => {
          var P7;
          return (P7 = t14.buttonRef.current) == null ? void 0 : P7.focus({ preventScroll: true });
        });
      case o8.Tab:
        s16.preventDefault(), s16.stopPropagation();
        break;
      default:
        s16.key.length === 1 && (r15.search(s16.key), M7.setTimeout(() => r15.clearSearch(), 350));
        break;
    }
  }), A7 = i11(() => {
    var s16;
    return (s16 = t14.buttonRef.current) == null ? void 0 : s16.id;
  }, [t14.buttonRef.current]), h7 = (0, import_react96.useMemo)(() => ({ open: t14.listboxState === 0 }), [t14]), N5 = D(l16 ? I5() : {}, { id: n13, ref: v7, "aria-activedescendant": t14.activeOptionIndex === null || (Q6 = t14.options[t14.activeOptionIndex]) == null ? void 0 : Q6.id, "aria-multiselectable": t14.mode === 1 ? true : void 0, "aria-labelledby": A7, "aria-orientation": t14.orientation, onKeyDown: x6, role: "listbox", tabIndex: 0, style: { ...y9, "--button-width": f7(t14.buttonRef, true).width } }), [p8, G10] = (0, import_react96.useState)(t14.value);
  t14.value !== p8 && t14.listboxState === 0 && t14.mode !== 1 && G10(t14.value);
  let Y4 = o4((s16) => t14.compare(p8, s16));
  return import_react96.default.createElement(te, { enabled: T12 ? e7.static || d16 : false }, import_react96.default.createElement(q2.Provider, { value: t14.mode === 1 ? t14 : { ...t14, isSelected: Y4 } }, H({ ourProps: N5, theirProps: i13, slot: h7, defaultTag: Rt, features: Pt, visible: w10, name: "Listbox.Options" })));
}
var Et = "div";
function ht2(e7, a15) {
  let o18 = (0, import_react46.useId)(), { id: n13 = `headlessui-listbox-option-${o18}`, disabled: u17 = false, value: T12, ...O3 } = e7, i13 = (0, import_react96.useContext)(be3) === true, l16 = W3("Listbox.Option"), t14 = $2("Listbox.Option"), r15 = l16.activeOptionIndex !== null ? l16.options[l16.activeOptionIndex].id === n13 : false, R7 = l16.isSelected(T12), c13 = (0, import_react96.useRef)(null), d16 = s13(c13), E11 = s3({ disabled: u17, value: T12, domRef: c13, get textValue() {
    return d16();
  } }), U5 = y(a15, c13, (x6) => {
    x6 ? l16.listRef.current.set(n13, x6) : l16.listRef.current.delete(n13);
  });
  n(() => {
    if (l16.__demoMode || l16.listboxState !== 0 || !r15 || l16.activationTrigger === 0)
      return;
    let x6 = o2();
    return x6.requestAnimationFrame(() => {
      var A7, h7;
      (h7 = (A7 = c13.current) == null ? void 0 : A7.scrollIntoView) == null || h7.call(A7, { block: "nearest" });
    }), x6.dispose;
  }, [c13, r15, l16.__demoMode, l16.listboxState, l16.activationTrigger, l16.activeOptionIndex]), n(() => {
    if (!i13)
      return t14.registerOption(n13, E11);
  }, [E11, n13, i13]);
  let w10 = o4((x6) => {
    if (u17)
      return x6.preventDefault();
    t14.onChange(T12), l16.mode === 0 && (t14.closeListbox(), o2().nextFrame(() => {
      var A7;
      return (A7 = l16.buttonRef.current) == null ? void 0 : A7.focus({ preventScroll: true });
    }));
  }), _6 = o4(() => {
    if (u17)
      return t14.goToOption(c6.Nothing);
    t14.goToOption(c6.Specific, n13);
  }), g8 = u12(), y9 = o4((x6) => {
    g8.update(x6), !u17 && (r15 || t14.goToOption(c6.Specific, n13, 0));
  }), I5 = o4((x6) => {
    g8.wasMoved(x6) && (u17 || r15 || t14.goToOption(c6.Specific, n13, 0));
  }), v7 = o4((x6) => {
    g8.wasMoved(x6) && (u17 || r15 && t14.goToOption(c6.Nothing));
  }), B3 = (0, import_react96.useMemo)(() => ({ active: r15, focus: r15, selected: R7, disabled: u17, selectedOption: R7 && i13 }), [r15, R7, u17, i13]), M7 = i13 ? {} : { id: n13, ref: U5, role: "option", tabIndex: u17 === true ? void 0 : -1, "aria-disabled": u17 === true ? true : void 0, "aria-selected": R7, disabled: void 0, onClick: w10, onFocus: _6, onPointerEnter: y9, onMouseEnter: y9, onPointerMove: I5, onMouseMove: I5, onPointerLeave: v7, onMouseLeave: v7 };
  return !R7 && i13 ? null : H({ ourProps: M7, theirProps: O3, slot: B3, defaultTag: Et, name: "Listbox.Option" });
}
var Dt = import_react96.Fragment;
function _t2(e7, a15) {
  let { options: o18, placeholder: n13, ...u17 } = e7, O3 = { ref: y(a15) }, i13 = W3("ListboxSelectedOption"), l16 = (0, import_react96.useMemo)(() => ({}), []), t14 = i13.value === void 0 || i13.value === null || i13.mode === 1 && Array.isArray(i13.value) && i13.value.length === 0;
  return import_react96.default.createElement(be3.Provider, { value: true }, H({ ourProps: O3, theirProps: { ...u17, children: import_react96.default.createElement(import_react96.default.Fragment, null, n13 && t14 ? n13 : o18) }, slot: l16, defaultTag: Dt, name: "ListboxSelectedOption" }));
}
var It = I(gt);
var Ct = I(St);
var Ft = K;
var Mt = I(At2);
var wt = I(ht2);
var Bt = I(_t2);
var Po2 = Object.assign(It, { Button: Ct, Label: Ft, Options: Mt, Option: wt, SelectedOption: Bt });

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react97 = __toESM(require_react(), 1);
var He2 = ((r15) => (r15[r15.Open = 0] = "Open", r15[r15.Closed = 1] = "Closed", r15))(He2 || {});
var Ne2 = ((r15) => (r15[r15.Pointer = 0] = "Pointer", r15[r15.Other = 1] = "Other", r15))(Ne2 || {});
var Be3 = ((n13) => (n13[n13.OpenMenu = 0] = "OpenMenu", n13[n13.CloseMenu = 1] = "CloseMenu", n13[n13.GoToItem = 2] = "GoToItem", n13[n13.Search = 3] = "Search", n13[n13.ClearSearch = 4] = "ClearSearch", n13[n13.RegisterItem = 5] = "RegisterItem", n13[n13.UnregisterItem = 6] = "UnregisterItem", n13))(Be3 || {});
function j9(e7, a15 = (r15) => r15) {
  let r15 = e7.activeItemIndex !== null ? e7.items[e7.activeItemIndex] : null, s16 = _2(a15(e7.items.slice()), (p8) => p8.dataRef.current.domRef.current), o18 = r15 ? s16.indexOf(r15) : null;
  return o18 === -1 && (o18 = null), { items: s16, activeItemIndex: o18 };
}
var ke3 = { [1](e7) {
  return e7.menuState === 1 ? e7 : { ...e7, activeItemIndex: null, menuState: 1 };
}, [0](e7) {
  return e7.menuState === 0 ? e7 : { ...e7, __demoMode: false, menuState: 0 };
}, [2]: (e7, a15) => {
  var p8, d16, n13, u17, t14;
  if (e7.menuState === 1)
    return e7;
  let r15 = { ...e7, searchQuery: "", activationTrigger: (p8 = a15.trigger) != null ? p8 : 1, __demoMode: false };
  if (a15.focus === c6.Nothing)
    return { ...r15, activeItemIndex: null };
  if (a15.focus === c6.Specific)
    return { ...r15, activeItemIndex: e7.items.findIndex((l16) => l16.id === a15.id) };
  if (a15.focus === c6.Previous) {
    let l16 = e7.activeItemIndex;
    if (l16 !== null) {
      let g8 = e7.items[l16].dataRef.current.domRef, c13 = f13(a15, { resolveItems: () => e7.items, resolveActiveIndex: () => e7.activeItemIndex, resolveId: (m13) => m13.id, resolveDisabled: (m13) => m13.dataRef.current.disabled });
      if (c13 !== null) {
        let m13 = e7.items[c13].dataRef.current.domRef;
        if (((d16 = g8.current) == null ? void 0 : d16.previousElementSibling) === m13.current || ((n13 = m13.current) == null ? void 0 : n13.previousElementSibling) === null)
          return { ...r15, activeItemIndex: c13 };
      }
    }
  } else if (a15.focus === c6.Next) {
    let l16 = e7.activeItemIndex;
    if (l16 !== null) {
      let g8 = e7.items[l16].dataRef.current.domRef, c13 = f13(a15, { resolveItems: () => e7.items, resolveActiveIndex: () => e7.activeItemIndex, resolveId: (m13) => m13.id, resolveDisabled: (m13) => m13.dataRef.current.disabled });
      if (c13 !== null) {
        let m13 = e7.items[c13].dataRef.current.domRef;
        if (((u17 = g8.current) == null ? void 0 : u17.nextElementSibling) === m13.current || ((t14 = m13.current) == null ? void 0 : t14.nextElementSibling) === null)
          return { ...r15, activeItemIndex: c13 };
      }
    }
  }
  let s16 = j9(e7), o18 = f13(a15, { resolveItems: () => s16.items, resolveActiveIndex: () => s16.activeItemIndex, resolveId: (l16) => l16.id, resolveDisabled: (l16) => l16.dataRef.current.disabled });
  return { ...r15, ...s16, activeItemIndex: o18 };
}, [3]: (e7, a15) => {
  let s16 = e7.searchQuery !== "" ? 0 : 1, o18 = e7.searchQuery + a15.value.toLowerCase(), d16 = (e7.activeItemIndex !== null ? e7.items.slice(e7.activeItemIndex + s16).concat(e7.items.slice(0, e7.activeItemIndex + s16)) : e7.items).find((u17) => {
    var t14;
    return ((t14 = u17.dataRef.current.textValue) == null ? void 0 : t14.startsWith(o18)) && !u17.dataRef.current.disabled;
  }), n13 = d16 ? e7.items.indexOf(d16) : -1;
  return n13 === -1 || n13 === e7.activeItemIndex ? { ...e7, searchQuery: o18 } : { ...e7, searchQuery: o18, activeItemIndex: n13, activationTrigger: 1 };
}, [4](e7) {
  return e7.searchQuery === "" ? e7 : { ...e7, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e7, a15) => {
  let r15 = j9(e7, (s16) => [...s16, { id: a15.id, dataRef: a15.dataRef }]);
  return { ...e7, ...r15 };
}, [6]: (e7, a15) => {
  let r15 = j9(e7, (s16) => {
    let o18 = s16.findIndex((p8) => p8.id === a15.id);
    return o18 !== -1 && s16.splice(o18, 1), s16;
  });
  return { ...e7, ...r15, activationTrigger: 1 };
} };
var Q3 = (0, import_react97.createContext)(null);
Q3.displayName = "MenuContext";
function w8(e7) {
  let a15 = (0, import_react97.useContext)(Q3);
  if (a15 === null) {
    let r15 = new Error(`<${e7} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r15, w8), r15;
  }
  return a15;
}
function we2(e7, a15) {
  return u2(a15.type, ke3, e7, a15);
}
var Ke2 = import_react97.Fragment;
function We2(e7, a15) {
  let { __demoMode: r15 = false, ...s16 } = e7, o18 = (0, import_react97.useReducer)(we2, { __demoMode: r15, menuState: r15 ? 0 : 1, buttonRef: (0, import_react97.createRef)(), itemsRef: (0, import_react97.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: p8, itemsRef: d16, buttonRef: n13 }, u17] = o18, t14 = y(a15);
  w6([n13, d16], (m13, E11) => {
    var I5;
    u17({ type: 1 }), A2(E11, h4.Loose) || (m13.preventDefault(), (I5 = n13.current) == null || I5.focus());
  }, p8 === 0);
  let l16 = o4(() => {
    u17({ type: 1 });
  }), g8 = (0, import_react97.useMemo)(() => ({ open: p8 === 0, close: l16 }), [p8, l16]), c13 = { ref: t14 };
  return import_react97.default.createElement(ve, null, import_react97.default.createElement(Q3.Provider, { value: o18 }, import_react97.default.createElement(s8, { value: u2(p8, { [0]: d9.Open, [1]: d9.Closed }) }, H({ ourProps: c13, theirProps: s16, slot: g8, defaultTag: Ke2, name: "Menu" }))));
}
var je2 = "button";
function Qe(e7, a15) {
  var D9;
  let r15 = (0, import_react46.useId)(), { id: s16 = `headlessui-menu-button-${r15}`, disabled: o18 = false, autoFocus: p8 = false, ...d16 } = e7, [n13, u17] = w8("Menu.Button"), t14 = Fe(), l16 = y(n13.buttonRef, a15, ye()), g8 = p(), c13 = o4((f20) => {
    switch (f20.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        f20.preventDefault(), f20.stopPropagation(), u17({ type: 0 }), g8.nextFrame(() => u17({ type: 2, focus: c6.First }));
        break;
      case o8.ArrowUp:
        f20.preventDefault(), f20.stopPropagation(), u17({ type: 0 }), g8.nextFrame(() => u17({ type: 2, focus: c6.Last }));
        break;
    }
  }), m13 = o4((f20) => {
    switch (f20.key) {
      case o8.Space:
        f20.preventDefault();
        break;
    }
  }), E11 = o4((f20) => {
    if (r5(f20.currentTarget))
      return f20.preventDefault();
    o18 || (n13.menuState === 0 ? (u17({ type: 1 }), g8.nextFrame(() => {
      var h7;
      return (h7 = n13.buttonRef.current) == null ? void 0 : h7.focus({ preventScroll: true });
    })) : (f20.preventDefault(), u17({ type: 0 })));
  }), { isFocusVisible: I5, focusProps: P7 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: p8 }), { isHovered: S8, hoverProps: b7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: o18 }), { pressed: _6, pressProps: F6 } = w({ disabled: o18 }), C7 = (0, import_react97.useMemo)(() => ({ open: n13.menuState === 0, active: _6 || n13.menuState === 0, disabled: o18, hover: S8, focus: I5, autofocus: p8 }), [n13, S8, I5, _6, o18, p8]), O3 = D(t14(), { ref: l16, id: s16, type: T8(e7, n13.buttonRef), "aria-haspopup": "menu", "aria-controls": (D9 = n13.itemsRef.current) == null ? void 0 : D9.id, "aria-expanded": n13.menuState === 0, disabled: o18 || void 0, autoFocus: p8, onKeyDown: c13, onKeyUp: m13, onClick: E11 }, P7, b7, F6);
  return H({ ourProps: O3, theirProps: d16, slot: C7, defaultTag: je2, name: "Menu.Button" });
}
var Je2 = "div";
var Ve2 = O.RenderStrategy | O.Static;
function Xe2(e7, a15) {
  var h7, M7;
  let r15 = (0, import_react46.useId)(), { id: s16 = `headlessui-menu-items-${r15}`, anchor: o18, portal: p8 = false, modal: d16 = true, ...n13 } = e7, u17 = xe(o18), [t14, l16] = w8("Menu.Items"), [g8, c13] = Re2(u17), m13 = be(), E11 = y(t14.itemsRef, a15, u17 ? g8 : null), I5 = n8(t14.itemsRef);
  u17 && (p8 = true);
  let P7 = p(), S8 = u13(), b7 = (() => S8 !== null ? (S8 & d9.Open) === d9.Open : t14.menuState === 0)();
  m6(t14.buttonRef, () => l16({ type: 1 }), b7), u11(I5, t14.__demoMode ? false : d16 && t14.menuState === 0), T6({ allowed: o4(() => [t14.buttonRef.current, t14.itemsRef.current]) }, t14.__demoMode ? false : d16 && t14.menuState === 0);
  let F6 = p7(t14.buttonRef, t14.menuState !== 0) ? false : b7;
  (0, import_react97.useEffect)(() => {
    let i13 = t14.itemsRef.current;
    i13 && t14.menuState === 0 && i13 !== (I5 == null ? void 0 : I5.activeElement) && i13.focus({ preventScroll: true });
  }, [t14.menuState, t14.itemsRef, I5, t14.itemsRef.current]), F2({ container: t14.itemsRef.current, enabled: t14.menuState === 0, accept(i13) {
    return i13.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : i13.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(i13) {
    i13.setAttribute("role", "none");
  } });
  let C7 = o4((i13) => {
    var L9, J6;
    switch (P7.dispose(), i13.key) {
      case o8.Space:
        if (t14.searchQuery !== "")
          return i13.preventDefault(), i13.stopPropagation(), l16({ type: 3, value: i13.key });
      case o8.Enter:
        if (i13.preventDefault(), i13.stopPropagation(), l16({ type: 1 }), t14.activeItemIndex !== null) {
          let { dataRef: G10 } = t14.items[t14.activeItemIndex];
          (J6 = (L9 = G10.current) == null ? void 0 : L9.domRef.current) == null || J6.click();
        }
        G3(t14.buttonRef.current);
        break;
      case o8.ArrowDown:
        return i13.preventDefault(), i13.stopPropagation(), l16({ type: 2, focus: c6.Next });
      case o8.ArrowUp:
        return i13.preventDefault(), i13.stopPropagation(), l16({ type: 2, focus: c6.Previous });
      case o8.Home:
      case o8.PageUp:
        return i13.preventDefault(), i13.stopPropagation(), l16({ type: 2, focus: c6.First });
      case o8.End:
      case o8.PageDown:
        return i13.preventDefault(), i13.stopPropagation(), l16({ type: 2, focus: c6.Last });
      case o8.Escape:
        i13.preventDefault(), i13.stopPropagation(), l16({ type: 1 }), o2().nextFrame(() => {
          var G10;
          return (G10 = t14.buttonRef.current) == null ? void 0 : G10.focus({ preventScroll: true });
        });
        break;
      case o8.Tab:
        i13.preventDefault(), i13.stopPropagation(), l16({ type: 1 }), o2().microTask(() => {
          j3(t14.buttonRef.current, i13.shiftKey ? F.Previous : F.Next);
        });
        break;
      default:
        i13.key.length === 1 && (l16({ type: 3, value: i13.key }), P7.setTimeout(() => l16({ type: 4 }), 350));
        break;
    }
  }), O3 = o4((i13) => {
    switch (i13.key) {
      case o8.Space:
        i13.preventDefault();
        break;
    }
  }), D9 = (0, import_react97.useMemo)(() => ({ open: t14.menuState === 0 }), [t14]), f20 = D(u17 ? m13() : {}, { "aria-activedescendant": t14.activeItemIndex === null || (h7 = t14.items[t14.activeItemIndex]) == null ? void 0 : h7.id, "aria-labelledby": (M7 = t14.buttonRef.current) == null ? void 0 : M7.id, id: s16, onKeyDown: C7, onKeyUp: O3, role: "menu", tabIndex: 0, ref: E11, style: { ...c13, "--button-width": f7(t14.buttonRef, true).width } });
  return import_react97.default.createElement(te, { enabled: p8 ? e7.static || b7 : false }, H({ ourProps: f20, theirProps: n13, slot: D9, defaultTag: Je2, features: Ve2, visible: F6, name: "Menu.Items" }));
}
var $e2 = import_react97.Fragment;
function qe2(e7, a15) {
  let r15 = (0, import_react46.useId)(), { id: s16 = `headlessui-menu-item-${r15}`, disabled: o18 = false, ...p8 } = e7, [d16, n13] = w8("Menu.Item"), u17 = d16.activeItemIndex !== null ? d16.items[d16.activeItemIndex].id === s16 : false, t14 = (0, import_react97.useRef)(null), l16 = y(a15, t14);
  n(() => {
    if (d16.__demoMode || d16.menuState !== 0 || !u17 || d16.activationTrigger === 0)
      return;
    let M7 = o2();
    return M7.requestAnimationFrame(() => {
      var i13, L9;
      (L9 = (i13 = t14.current) == null ? void 0 : i13.scrollIntoView) == null || L9.call(i13, { block: "nearest" });
    }), M7.dispose;
  }, [d16.__demoMode, t14, u17, d16.menuState, d16.activationTrigger, d16.activeItemIndex]);
  let g8 = s13(t14), c13 = (0, import_react97.useRef)({ disabled: o18, domRef: t14, get textValue() {
    return g8();
  } });
  n(() => {
    c13.current.disabled = o18;
  }, [c13, o18]), n(() => (n13({ type: 5, id: s16, dataRef: c13 }), () => n13({ type: 6, id: s16 })), [c13, s16]);
  let m13 = o4(() => {
    n13({ type: 1 });
  }), E11 = o4((M7) => {
    if (o18)
      return M7.preventDefault();
    n13({ type: 1 }), G3(d16.buttonRef.current);
  }), I5 = o4(() => {
    if (o18)
      return n13({ type: 2, focus: c6.Nothing });
    n13({ type: 2, focus: c6.Specific, id: s16 });
  }), P7 = u12(), S8 = o4((M7) => {
    P7.update(M7), !o18 && (u17 || n13({ type: 2, focus: c6.Specific, id: s16, trigger: 0 }));
  }), b7 = o4((M7) => {
    P7.wasMoved(M7) && (o18 || u17 || n13({ type: 2, focus: c6.Specific, id: s16, trigger: 0 }));
  }), _6 = o4((M7) => {
    P7.wasMoved(M7) && (o18 || u17 && n13({ type: 2, focus: c6.Nothing }));
  }), [F6, C7] = z(), [O3, D9] = U2(), f20 = (0, import_react97.useMemo)(() => ({ active: u17, focus: u17, disabled: o18, close: m13 }), [u17, o18, m13]);
  return import_react97.default.createElement(C7, null, import_react97.default.createElement(D9, null, H({ ourProps: { id: s16, ref: l16, role: "menuitem", tabIndex: o18 === true ? void 0 : -1, "aria-disabled": o18 === true ? true : void 0, "aria-labelledby": F6, "aria-describedby": O3, disabled: void 0, onClick: E11, onFocus: I5, onPointerEnter: S8, onMouseEnter: S8, onPointerMove: b7, onMouseMove: b7, onPointerLeave: _6, onMouseLeave: _6 }, theirProps: p8, slot: f20, defaultTag: $e2, name: "Menu.Item" })));
}
var ze = "div";
function Ye2(e7, a15) {
  let [r15, s16] = z();
  return import_react97.default.createElement(s16, null, H({ ourProps: { ref: a15, "aria-labelledby": r15, role: "group" }, theirProps: e7, slot: {}, defaultTag: ze, name: "Menu.Section" }));
}
var Ze = "header";
function et(e7, a15) {
  let r15 = (0, import_react46.useId)(), { id: s16 = `headlessui-menu-heading-${r15}`, ...o18 } = e7, p8 = P4();
  n(() => p8.register(s16), [s16, p8.register]);
  let d16 = { id: s16, ref: a15, role: "presentation", ...p8.props };
  return H({ ourProps: d16, theirProps: o18, slot: {}, defaultTag: Ze, name: "Menu.Heading" });
}
var tt = "div";
function nt(e7, a15) {
  return H({ ourProps: { ref: a15, role: "separator" }, theirProps: e7, slot: {}, defaultTag: tt, name: "Menu.Separator" });
}
var rt = I(We2);
var ot = I(Qe);
var at = I(Xe2);
var it = I(qe2);
var st = I(Ye2);
var lt = I(et);
var ut = I(nt);
var Kt = Object.assign(rt, { Button: ot, Items: at, Item: it, Section: st, Heading: lt, Separator: ut });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react98 = __toESM(require_react(), 1);
var ze2 = ((u17) => (u17[u17.Open = 0] = "Open", u17[u17.Closed = 1] = "Closed", u17))(ze2 || {});
var Qe2 = ((i13) => (i13[i13.TogglePopover = 0] = "TogglePopover", i13[i13.ClosePopover = 1] = "ClosePopover", i13[i13.SetButton = 2] = "SetButton", i13[i13.SetButtonId = 3] = "SetButtonId", i13[i13.SetPanel = 4] = "SetPanel", i13[i13.SetPanelId = 5] = "SetPanelId", i13))(Qe2 || {});
var Ze2 = { [0]: (t14) => ({ ...t14, popoverState: u2(t14.popoverState, { [0]: 1, [1]: 0 }), __demoMode: false }), [1](t14) {
  return t14.popoverState === 1 ? t14 : { ...t14, popoverState: 1, __demoMode: false };
}, [2](t14, a15) {
  return t14.button === a15.button ? t14 : { ...t14, button: a15.button };
}, [3](t14, a15) {
  return t14.buttonId === a15.buttonId ? t14 : { ...t14, buttonId: a15.buttonId };
}, [4](t14, a15) {
  return t14.panel === a15.panel ? t14 : { ...t14, panel: a15.panel };
}, [5](t14, a15) {
  return t14.panelId === a15.panelId ? t14 : { ...t14, panelId: a15.panelId };
} };
var ce5 = (0, import_react98.createContext)(null);
ce5.displayName = "PopoverContext";
function ne(t14) {
  let a15 = (0, import_react98.useContext)(ce5);
  if (a15 === null) {
    let u17 = new Error(`<${t14} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u17, ne), u17;
  }
  return a15;
}
var le3 = (0, import_react98.createContext)(null);
le3.displayName = "PopoverAPIContext";
function ve2(t14) {
  let a15 = (0, import_react98.useContext)(le3);
  if (a15 === null) {
    let u17 = new Error(`<${t14} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u17, ve2), u17;
  }
  return a15;
}
var Te3 = (0, import_react98.createContext)(null);
Te3.displayName = "PopoverGroupContext";
function Ae() {
  return (0, import_react98.useContext)(Te3);
}
var ae5 = (0, import_react98.createContext)(null);
ae5.displayName = "PopoverPanelContext";
function et2() {
  return (0, import_react98.useContext)(ae5);
}
function tt2(t14, a15) {
  return u2(a15.type, Ze2, t14, a15);
}
var ot2 = "div";
function rt2(t14, a15) {
  var E11;
  let { __demoMode: u17 = false, ...C7 } = t14, T12 = (0, import_react98.useRef)(null), S8 = y(a15, T3((o18) => {
    T12.current = o18;
  })), i13 = (0, import_react98.useRef)([]), l16 = (0, import_react98.useReducer)(tt2, { __demoMode: u17, popoverState: u17 ? 0 : 1, buttons: i13, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react98.createRef)(), afterPanelSentinel: (0, import_react98.createRef)(), afterButtonSentinel: (0, import_react98.createRef)() }), [{ popoverState: f20, button: e7, buttonId: P7, panel: v7, panelId: M7, beforePanelSentinel: m13, afterPanelSentinel: j11, afterButtonSentinel: n13 }, s16] = l16, y9 = n8((E11 = T12.current) != null ? E11 : e7), _6 = (0, import_react98.useMemo)(() => {
    if (!e7 || !v7)
      return false;
    for (let b7 of document.querySelectorAll("body > *"))
      if (Number(b7 == null ? void 0 : b7.contains(e7)) ^ Number(b7 == null ? void 0 : b7.contains(v7)))
        return true;
    let o18 = b2(), p8 = o18.indexOf(e7), B3 = (p8 + o18.length - 1) % o18.length, r15 = (p8 + 1) % o18.length, d16 = o18[B3], A7 = o18[r15];
    return !v7.contains(d16) && !v7.contains(A7);
  }, [e7, v7]), x6 = s3(P7), h7 = s3(M7), F6 = (0, import_react98.useMemo)(() => ({ buttonId: x6, panelId: h7, close: () => s16({ type: 1 }) }), [x6, h7, s16]), O3 = Ae(), D9 = O3 == null ? void 0 : O3.registerPopover, L9 = o4(() => {
    var o18;
    return (o18 = O3 == null ? void 0 : O3.isFocusWithinPopoverGroup()) != null ? o18 : (y9 == null ? void 0 : y9.activeElement) && ((e7 == null ? void 0 : e7.contains(y9.activeElement)) || (v7 == null ? void 0 : v7.contains(y9.activeElement)));
  });
  (0, import_react98.useEffect)(() => D9 == null ? void 0 : D9(F6), [D9, F6]);
  let [K4, $5] = ee(), H10 = j6({ mainTreeNodeRef: O3 == null ? void 0 : O3.mainTreeNodeRef, portals: K4, defaultContainers: [e7, v7] });
  E5(y9 == null ? void 0 : y9.defaultView, "focus", (o18) => {
    var p8, B3, r15, d16, A7, b7;
    o18.target !== window && o18.target instanceof HTMLElement && f20 === 0 && (L9() || e7 && v7 && (H10.contains(o18.target) || (B3 = (p8 = m13.current) == null ? void 0 : p8.contains) != null && B3.call(p8, o18.target) || (d16 = (r15 = j11.current) == null ? void 0 : r15.contains) != null && d16.call(r15, o18.target) || (b7 = (A7 = n13.current) == null ? void 0 : A7.contains) != null && b7.call(A7, o18.target) || s16({ type: 1 })));
  }, true), w6(H10.resolveContainers, (o18, p8) => {
    s16({ type: 1 }), A2(p8, h4.Loose) || (o18.preventDefault(), e7 == null || e7.focus());
  }, f20 === 0);
  let I5 = o4((o18) => {
    s16({ type: 1 });
    let p8 = (() => o18 ? o18 instanceof HTMLElement ? o18 : "current" in o18 && o18.current instanceof HTMLElement ? o18.current : e7 : e7)();
    p8 == null || p8.focus();
  }), J6 = (0, import_react98.useMemo)(() => ({ close: I5, isPortalled: _6 }), [I5, _6]), N5 = (0, import_react98.useMemo)(() => ({ open: f20 === 0, close: I5 }), [f20, I5]), c13 = { ref: S8 };
  return import_react98.default.createElement(ve, null, import_react98.default.createElement(ae5.Provider, { value: null }, import_react98.default.createElement(ce5.Provider, { value: l16 }, import_react98.default.createElement(le3.Provider, { value: J6 }, import_react98.default.createElement(u8, { value: I5 }, import_react98.default.createElement(s8, { value: u2(f20, { [0]: d9.Open, [1]: d9.Closed }) }, import_react98.default.createElement($5, null, H({ ourProps: c13, theirProps: C7, slot: N5, defaultTag: ot2, name: "Popover" }), import_react98.default.createElement(H10.MainTreeNode, null))))))));
}
var nt2 = "button";
function lt2(t14, a15) {
  let u17 = (0, import_react46.useId)(), { id: C7 = `headlessui-popover-button-${u17}`, disabled: T12 = false, autoFocus: S8 = false, ...i13 } = t14, [l16, f20] = ne("Popover.Button"), { isPortalled: e7 } = ve2("Popover.Button"), P7 = (0, import_react98.useRef)(null), v7 = `headlessui-focus-sentinel-${(0, import_react46.useId)()}`, M7 = Ae(), m13 = M7 == null ? void 0 : M7.closeOthers, n13 = et2() !== null;
  (0, import_react98.useEffect)(() => {
    if (!n13)
      return f20({ type: 3, buttonId: C7 }), () => {
        f20({ type: 3, buttonId: null });
      };
  }, [n13, C7, f20]);
  let [s16] = (0, import_react98.useState)(() => Symbol()), y9 = y(P7, a15, ye(), n13 ? null : (r15) => {
    if (r15)
      l16.buttons.current.push(s16);
    else {
      let d16 = l16.buttons.current.indexOf(s16);
      d16 !== -1 && l16.buttons.current.splice(d16, 1);
    }
    l16.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), r15 && f20({ type: 2, button: r15 });
  }), _6 = y(P7, a15), x6 = n8(P7), h7 = o4((r15) => {
    var d16, A7, b7;
    if (n13) {
      if (l16.popoverState === 1)
        return;
      switch (r15.key) {
        case o8.Space:
        case o8.Enter:
          r15.preventDefault(), (A7 = (d16 = r15.target).click) == null || A7.call(d16), f20({ type: 1 }), (b7 = l16.button) == null || b7.focus();
          break;
      }
    } else
      switch (r15.key) {
        case o8.Space:
        case o8.Enter:
          r15.preventDefault(), r15.stopPropagation(), l16.popoverState === 1 && (m13 == null || m13(l16.buttonId)), f20({ type: 0 });
          break;
        case o8.Escape:
          if (l16.popoverState !== 0)
            return m13 == null ? void 0 : m13(l16.buttonId);
          if (!P7.current || x6 != null && x6.activeElement && !P7.current.contains(x6.activeElement))
            return;
          r15.preventDefault(), r15.stopPropagation(), f20({ type: 1 });
          break;
      }
  }), F6 = o4((r15) => {
    n13 || r15.key === o8.Space && r15.preventDefault();
  }), O3 = o4((r15) => {
    var d16, A7;
    r5(r15.currentTarget) || T12 || (n13 ? (f20({ type: 1 }), (d16 = l16.button) == null || d16.focus()) : (r15.preventDefault(), r15.stopPropagation(), l16.popoverState === 1 && (m13 == null || m13(l16.buttonId)), f20({ type: 0 }), (A7 = l16.button) == null || A7.focus()));
  }), D9 = o4((r15) => {
    r15.preventDefault(), r15.stopPropagation();
  }), { isFocusVisible: L9, focusProps: K4 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: S8 }), { isHovered: $5, hoverProps: H10 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: T12 }), { pressed: I5, pressProps: J6 } = w({ disabled: T12 }), N5 = l16.popoverState === 0, c13 = (0, import_react98.useMemo)(() => ({ open: N5, active: I5 || N5, disabled: T12, hover: $5, focus: L9, autofocus: S8 }), [N5, $5, L9, I5, T12, S8]), E11 = T8(t14, P7), o18 = n13 ? D({ ref: _6, type: E11, onKeyDown: h7, onClick: O3, disabled: T12 || void 0, autoFocus: S8 }, K4, H10, J6) : D({ ref: y9, id: l16.buttonId, type: E11, "aria-expanded": l16.popoverState === 0, "aria-controls": l16.panel ? l16.panelId : void 0, disabled: T12 || void 0, autoFocus: S8, onKeyDown: h7, onKeyUp: F6, onClick: O3, onMouseDown: D9 }, K4, H10, J6), p8 = n11(), B3 = o4(() => {
    let r15 = l16.panel;
    if (!r15)
      return;
    function d16() {
      u2(p8.current, { [s11.Forwards]: () => P5(r15, F.First), [s11.Backwards]: () => P5(r15, F.Last) }) === T7.Error && P5(b2().filter((b7) => b7.dataset.headlessuiFocusGuard !== "true"), u2(p8.current, { [s11.Forwards]: F.Next, [s11.Backwards]: F.Previous }), { relativeTo: l16.button });
    }
    d16();
  });
  return import_react98.default.createElement(import_react98.default.Fragment, null, H({ ourProps: o18, theirProps: i13, slot: c13, defaultTag: nt2, name: "Popover.Button" }), N5 && !n13 && e7 && import_react98.default.createElement(T2, { id: v7, ref: l16.afterButtonSentinel, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: B3 }));
}
var at2 = "div";
var pt = O.RenderStrategy | O.Static;
function st2(t14, a15) {
  let u17 = (0, import_react46.useId)(), { id: C7 = `headlessui-popover-overlay-${u17}`, ...T12 } = t14, [{ popoverState: S8 }, i13] = ne("Popover.Overlay"), l16 = y(a15), f20 = u13(), e7 = (() => f20 !== null ? (f20 & d9.Open) === d9.Open : S8 === 0)(), P7 = o4((m13) => {
    if (r5(m13.currentTarget))
      return m13.preventDefault();
    i13({ type: 1 });
  }), v7 = (0, import_react98.useMemo)(() => ({ open: S8 === 0 }), [S8]);
  return H({ ourProps: { ref: l16, id: C7, "aria-hidden": true, onClick: P7 }, theirProps: T12, slot: v7, defaultTag: at2, features: pt, visible: e7, name: "Popover.Overlay" });
}
var ut2 = "div";
var it2 = O.RenderStrategy | O.Static;
function ft(t14, a15) {
  let u17 = (0, import_react46.useId)(), { id: C7 = `headlessui-popover-panel-${u17}`, focus: T12 = false, anchor: S8, portal: i13 = false, modal: l16 = false, ...f20 } = t14, [e7, P7] = ne("Popover.Panel"), { close: v7, isPortalled: M7 } = ve2("Popover.Panel"), m13 = `headlessui-focus-sentinel-before-${u17}`, j11 = `headlessui-focus-sentinel-after-${u17}`, n13 = (0, import_react98.useRef)(null), s16 = xe(S8), [y9, _6] = Re2(s16), x6 = be();
  s16 && (i13 = true);
  let h7 = y(n13, a15, s16 ? y9 : null, (c13) => {
    P7({ type: 4, panel: c13 });
  }), F6 = n8(n13), O3 = U();
  n(() => (P7({ type: 5, panelId: C7 }), () => {
    P7({ type: 5, panelId: null });
  }), [C7, P7]);
  let D9 = u13(), L9 = (() => D9 !== null ? (D9 & d9.Open) === d9.Open : e7.popoverState === 0)();
  m6(e7.button, () => P7({ type: 1 }), L9), u11(F6, e7.__demoMode ? false : l16 && L9);
  let K4 = o4((c13) => {
    var E11;
    switch (c13.key) {
      case o8.Escape:
        if (e7.popoverState !== 0 || !n13.current || F6 != null && F6.activeElement && !n13.current.contains(F6.activeElement))
          return;
        c13.preventDefault(), c13.stopPropagation(), P7({ type: 1 }), (E11 = e7.button) == null || E11.focus();
        break;
    }
  });
  (0, import_react98.useEffect)(() => {
    var c13;
    t14.static || e7.popoverState === 1 && ((c13 = t14.unmount) == null || c13) && P7({ type: 4, panel: null });
  }, [e7.popoverState, t14.unmount, t14.static, P7]), (0, import_react98.useEffect)(() => {
    if (e7.__demoMode || !T12 || e7.popoverState !== 0 || !n13.current)
      return;
    let c13 = F6 == null ? void 0 : F6.activeElement;
    n13.current.contains(c13) || P5(n13.current, F.First);
  }, [e7.__demoMode, T12, n13, e7.popoverState]);
  let $5 = (0, import_react98.useMemo)(() => ({ open: e7.popoverState === 0, close: v7 }), [e7, v7]), H10 = D(s16 ? x6() : {}, { ref: h7, id: C7, onKeyDown: K4, onBlur: T12 && e7.popoverState === 0 ? (c13) => {
    var o18, p8, B3, r15, d16;
    let E11 = c13.relatedTarget;
    E11 && n13.current && ((o18 = n13.current) != null && o18.contains(E11) || (P7({ type: 1 }), ((B3 = (p8 = e7.beforePanelSentinel.current) == null ? void 0 : p8.contains) != null && B3.call(p8, E11) || (d16 = (r15 = e7.afterPanelSentinel.current) == null ? void 0 : r15.contains) != null && d16.call(r15, E11)) && E11.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1, style: { ..._6, "--button-width": f7(e7.button, true).width } }), I5 = n11(), J6 = o4(() => {
    let c13 = n13.current;
    if (!c13)
      return;
    function E11() {
      u2(I5.current, { [s11.Forwards]: () => {
        var p8;
        P5(c13, F.First) === T7.Error && ((p8 = e7.afterPanelSentinel.current) == null || p8.focus());
      }, [s11.Backwards]: () => {
        var o18;
        (o18 = e7.button) == null || o18.focus({ preventScroll: true });
      } });
    }
    E11();
  }), N5 = o4(() => {
    let c13 = n13.current;
    if (!c13)
      return;
    function E11() {
      u2(I5.current, { [s11.Forwards]: () => {
        var A7;
        if (!e7.button)
          return;
        let o18 = b2(), p8 = o18.indexOf(e7.button), B3 = o18.slice(0, p8 + 1), d16 = [...o18.slice(p8 + 1), ...B3];
        for (let b7 of d16.slice())
          if (b7.dataset.headlessuiFocusGuard === "true" || (A7 = e7.panel) != null && A7.contains(b7)) {
            let me4 = d16.indexOf(b7);
            me4 !== -1 && d16.splice(me4, 1);
          }
        P5(d16, F.First, { sorted: false });
      }, [s11.Backwards]: () => {
        var p8;
        P5(c13, F.Previous) === T7.Error && ((p8 = e7.button) == null || p8.focus());
      } });
    }
    E11();
  });
  return import_react98.default.createElement(ae5.Provider, { value: C7 }, import_react98.default.createElement(le3.Provider, { value: { close: v7, isPortalled: M7 } }, import_react98.default.createElement(te, { enabled: i13 ? t14.static || L9 : false }, L9 && M7 && import_react98.default.createElement(T2, { id: m13, ref: e7.beforePanelSentinel, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: J6 }), H({ mergeRefs: O3, ourProps: H10, theirProps: f20, slot: $5, defaultTag: ut2, features: it2, visible: L9, name: "Popover.Panel" }), L9 && M7 && import_react98.default.createElement(T2, { id: j11, ref: e7.afterPanelSentinel, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: N5 }))));
}
var Pt2 = "div";
function dt(t14, a15) {
  let u17 = (0, import_react98.useRef)(null), C7 = y(u17, a15), [T12, S8] = (0, import_react98.useState)([]), i13 = y6(), l16 = o4((n13) => {
    S8((s16) => {
      let y9 = s16.indexOf(n13);
      if (y9 !== -1) {
        let _6 = s16.slice();
        return _6.splice(y9, 1), _6;
      }
      return s16;
    });
  }), f20 = o4((n13) => (S8((s16) => [...s16, n13]), () => l16(n13))), e7 = o4(() => {
    var y9;
    let n13 = u(u17);
    if (!n13)
      return false;
    let s16 = n13.activeElement;
    return (y9 = u17.current) != null && y9.contains(s16) ? true : T12.some((_6) => {
      var x6, h7;
      return ((x6 = n13.getElementById(_6.buttonId.current)) == null ? void 0 : x6.contains(s16)) || ((h7 = n13.getElementById(_6.panelId.current)) == null ? void 0 : h7.contains(s16));
    });
  }), P7 = o4((n13) => {
    for (let s16 of T12)
      s16.buttonId.current !== n13 && s16.close();
  }), v7 = (0, import_react98.useMemo)(() => ({ registerPopover: f20, unregisterPopover: l16, isFocusWithinPopoverGroup: e7, closeOthers: P7, mainTreeNodeRef: i13.mainTreeNodeRef }), [f20, l16, e7, P7, i13.mainTreeNodeRef]), M7 = (0, import_react98.useMemo)(() => ({}), []), m13 = t14, j11 = { ref: C7 };
  return import_react98.default.createElement(Te3.Provider, { value: v7 }, H({ ourProps: j11, theirProps: m13, slot: M7, defaultTag: Pt2, name: "Popover.Group" }), import_react98.default.createElement(i13.MainTreeNode, null));
}
var ct = I(rt2);
var vt2 = I(lt2);
var Tt2 = I(st2);
var mt2 = I(ft);
var yt2 = I(dt);
var qt = Object.assign(ct, { Button: vt2, Overlay: Tt2, Panel: mt2, Group: yt2 });

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react99 = __toESM(require_react(), 1);
var Le3 = ((e7) => (e7[e7.RegisterOption = 0] = "RegisterOption", e7[e7.UnregisterOption = 1] = "UnregisterOption", e7))(Le3 || {});
var ke4 = { [0](o18, t14) {
  let e7 = [...o18.options, { id: t14.id, element: t14.element, propsRef: t14.propsRef }];
  return { ...o18, options: _2(e7, (a15) => a15.element.current) };
}, [1](o18, t14) {
  let e7 = o18.options.slice(), a15 = o18.options.findIndex((O3) => O3.id === t14.id);
  return a15 === -1 ? o18 : (e7.splice(a15, 1), { ...o18, options: e7 });
} };
var j10 = (0, import_react99.createContext)(null);
j10.displayName = "RadioGroupDataContext";
function J5(o18) {
  let t14 = (0, import_react99.useContext)(j10);
  if (t14 === null) {
    let e7 = new Error(`<${o18} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e7, J5), e7;
  }
  return t14;
}
var X2 = (0, import_react99.createContext)(null);
X2.displayName = "RadioGroupActionsContext";
function z3(o18) {
  let t14 = (0, import_react99.useContext)(X2);
  if (t14 === null) {
    let e7 = new Error(`<${o18} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e7, z3), e7;
  }
  return t14;
}
function Fe2(o18, t14) {
  return u2(t14.type, ke4, o18, t14);
}
var Ie = "div";
function Ue2(o18, t14) {
  let e7 = (0, import_react46.useId)(), a15 = a3(), { id: O3 = `headlessui-radiogroup-${e7}`, value: m13, form: P7, name: i13, onChange: f20, by: c13, disabled: p8 = a15 || false, defaultValue: I5, ...y9 } = o18, T12 = u9(c13), [v7, C7] = (0, import_react99.useReducer)(Fe2, { options: [] }), n13 = v7.options, [U5, h7] = z(), [D9, L9] = U2(), A7 = (0, import_react99.useRef)(null), M7 = y(A7, t14), l16 = l2(I5), [s16, _6] = T(m13, f20, l16), R7 = (0, import_react99.useMemo)(() => n13.find((r15) => !r15.propsRef.current.disabled), [n13]), b7 = (0, import_react99.useMemo)(() => n13.some((r15) => T12(r15.propsRef.current.value, s16)), [n13, s16]), d16 = o4((r15) => {
    var u17;
    if (p8 || T12(r15, s16))
      return false;
    let k5 = (u17 = n13.find((H10) => T12(H10.propsRef.current.value, r15))) == null ? void 0 : u17.propsRef.current;
    return k5 != null && k5.disabled ? false : (_6 == null || _6(r15), true);
  }), de4 = o4((r15) => {
    let k5 = A7.current;
    if (!k5)
      return;
    let u17 = u(k5), H10 = n13.filter((g8) => g8.propsRef.current.disabled === false).map((g8) => g8.element.current);
    switch (r15.key) {
      case o8.Enter:
        p2(r15.currentTarget);
        break;
      case o8.ArrowLeft:
      case o8.ArrowUp:
        if (r15.preventDefault(), r15.stopPropagation(), P5(H10, F.Previous | F.WrapAround) === T7.Success) {
          let E11 = n13.find((N5) => N5.element.current === (u17 == null ? void 0 : u17.activeElement));
          E11 && d16(E11.propsRef.current.value);
        }
        break;
      case o8.ArrowRight:
      case o8.ArrowDown:
        if (r15.preventDefault(), r15.stopPropagation(), P5(H10, F.Next | F.WrapAround) === T7.Success) {
          let E11 = n13.find((N5) => N5.element.current === (u17 == null ? void 0 : u17.activeElement));
          E11 && d16(E11.propsRef.current.value);
        }
        break;
      case o8.Space:
        {
          r15.preventDefault(), r15.stopPropagation();
          let g8 = n13.find((E11) => E11.element.current === (u17 == null ? void 0 : u17.activeElement));
          g8 && d16(g8.propsRef.current.value);
        }
        break;
    }
  }), q6 = o4((r15) => (C7({ type: 0, ...r15 }), () => C7({ type: 1, id: r15.id }))), ue3 = (0, import_react99.useMemo)(() => ({ value: s16, firstOption: R7, containsCheckedOption: b7, disabled: p8, compare: T12, ...v7 }), [s16, R7, b7, p8, T12, v7]), ce8 = (0, import_react99.useMemo)(() => ({ registerOption: q6, change: d16 }), [q6, d16]), fe4 = { ref: M7, id: O3, role: "radiogroup", "aria-labelledby": U5, "aria-describedby": D9, onKeyDown: de4 }, Te4 = (0, import_react99.useMemo)(() => ({ value: s16 }), [s16]), me4 = (0, import_react99.useCallback)(() => {
    if (l16 !== void 0)
      return d16(l16);
  }, [d16, l16]);
  return import_react99.default.createElement(L9, { name: "RadioGroup.Description" }, import_react99.default.createElement(h7, { name: "RadioGroup.Label" }, import_react99.default.createElement(X2.Provider, { value: ce8 }, import_react99.default.createElement(j10.Provider, { value: ue3 }, i13 != null && import_react99.default.createElement(j2, { disabled: p8, data: { [i13]: s16 || "on" }, overrides: { type: "radio", checked: s16 != null }, form: P7, onReset: me4 }), H({ ourProps: fe4, theirProps: y9, slot: Te4, defaultTag: Ie, name: "RadioGroup" })))));
}
var Me = "div";
function Se3(o18, t14) {
  var R7;
  let e7 = J5("RadioGroup.Option"), a15 = z3("RadioGroup.Option"), O3 = (0, import_react46.useId)(), { id: m13 = `headlessui-radiogroup-option-${O3}`, value: P7, disabled: i13 = e7.disabled || false, autoFocus: f20 = false, ...c13 } = o18, p8 = (0, import_react99.useRef)(null), I5 = y(p8, t14), [y9, T12] = z(), [v7, C7] = U2(), n13 = s3({ value: P7, disabled: i13 });
  n(() => a15.registerOption({ id: m13, element: p8, propsRef: n13 }), [m13, a15, p8, n13]);
  let U5 = o4((b7) => {
    var d16;
    if (r5(b7.currentTarget))
      return b7.preventDefault();
    a15.change(P7) && ((d16 = p8.current) == null || d16.focus());
  }), h7 = ((R7 = e7.firstOption) == null ? void 0 : R7.id) === m13, { isFocusVisible: D9, focusProps: L9 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: f20 }), { isHovered: A7, hoverProps: M7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i13 }), l16 = e7.compare(e7.value, P7), s16 = D({ ref: I5, id: m13, role: "radio", "aria-checked": l16 ? "true" : "false", "aria-labelledby": y9, "aria-describedby": v7, "aria-disabled": i13 ? true : void 0, tabIndex: (() => i13 ? -1 : l16 || !e7.containsCheckedOption && h7 ? 0 : -1)(), onClick: i13 ? void 0 : U5, autoFocus: f20 }, L9, M7), _6 = (0, import_react99.useMemo)(() => ({ checked: l16, disabled: i13, active: D9, hover: A7, focus: D9, autofocus: f20 }), [l16, i13, A7, D9, f20]);
  return import_react99.default.createElement(C7, { name: "RadioGroup.Description" }, import_react99.default.createElement(T12, { name: "RadioGroup.Label" }, H({ ourProps: s16, theirProps: c13, slot: _6, defaultTag: Me, name: "RadioGroup.Option" })));
}
var He3 = "span";
function we3(o18, t14) {
  var R7;
  let e7 = J5("Radio"), a15 = z3("Radio"), O3 = (0, import_react46.useId)(), m13 = u5(), P7 = a3(), { id: i13 = m13 || `headlessui-radio-${O3}`, value: f20, disabled: c13 = e7.disabled || P7 || false, autoFocus: p8 = false, ...I5 } = o18, y9 = (0, import_react99.useRef)(null), T12 = y(y9, t14), v7 = I2(), C7 = G(), n13 = s3({ value: f20, disabled: c13 });
  n(() => a15.registerOption({ id: i13, element: y9, propsRef: n13 }), [i13, a15, y9, n13]);
  let U5 = o4((b7) => {
    var d16;
    if (r5(b7.currentTarget))
      return b7.preventDefault();
    a15.change(f20) && ((d16 = y9.current) == null || d16.focus());
  }), { isFocusVisible: h7, focusProps: D9 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: p8 }), { isHovered: L9, hoverProps: A7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: c13 }), M7 = ((R7 = e7.firstOption) == null ? void 0 : R7.id) === i13, l16 = e7.compare(e7.value, f20), s16 = D({ ref: T12, id: i13, role: "radio", "aria-checked": l16 ? "true" : "false", "aria-labelledby": v7, "aria-describedby": C7, "aria-disabled": c13 ? true : void 0, tabIndex: (() => c13 ? -1 : l16 || !e7.containsCheckedOption && M7 ? 0 : -1)(), autoFocus: p8, onClick: c13 ? void 0 : U5 }, D9, A7), _6 = (0, import_react99.useMemo)(() => ({ checked: l16, disabled: c13, hover: L9, focus: h7, autofocus: p8 }), [l16, c13, L9, h7, p8]);
  return H({ ourProps: s16, theirProps: I5, slot: _6, defaultTag: He3, name: "Radio" });
}
var Ne3 = I(Ue2);
var We3 = I(Se3);
var Be4 = I(we3);
var Ve3 = K;
var Ke3 = w3;
var Tt3 = Object.assign(Ne3, { Option: We3, Radio: Be4, Label: Ve3, Description: Ke3 });

// node_modules/@headlessui/react/dist/components/select/select.js
var import_react100 = __toESM(require_react(), 1);
var H8 = "select";
function B(a15, i13) {
  let p8 = (0, import_react46.useId)(), d16 = u5(), n13 = a3(), { id: c13 = d16 || `headlessui-select-${p8}`, disabled: e7 = n13 || false, invalid: t14 = false, autoFocus: o18 = false, ...f20 } = a15, m13 = I2(), u17 = G(), { isFocusVisible: r15, focusProps: T12 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: o18 }), { isHovered: l16, hoverProps: b7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), { pressed: s16, pressProps: y9 } = w({ disabled: e7 }), P7 = D({ ref: i13, id: c13, "aria-labelledby": m13, "aria-describedby": u17, "aria-invalid": t14 ? "" : void 0, disabled: e7 || void 0, autoFocus: o18 }, T12, b7, y9), S8 = (0, import_react100.useMemo)(() => ({ disabled: e7, invalid: t14, hover: l16, focus: r15, active: s16, autofocus: o18 }), [e7, t14, l16, r15, s16, o18]);
  return H({ ourProps: P7, theirProps: f20, slot: S8, defaultTag: H8, name: "Select" });
}
var $4 = I(B);

// node_modules/@headlessui/react/dist/components/switch/switch.js
var import_react101 = __toESM(require_react(), 1);
var S7 = (0, import_react101.createContext)(null);
S7.displayName = "GroupContext";
var _e = import_react101.Fragment;
function Pe3(n13) {
  var a15;
  let [o18, p8] = (0, import_react101.useState)(null), [f20, b7] = z(), [h7, t14] = U2(), c13 = (0, import_react101.useMemo)(() => ({ switch: o18, setSwitch: p8 }), [o18, p8]), T12 = {}, y9 = n13;
  return import_react101.default.createElement(t14, { name: "Switch.Description", value: h7 }, import_react101.default.createElement(b7, { name: "Switch.Label", value: f20, props: { htmlFor: (a15 = c13.switch) == null ? void 0 : a15.id, onClick(u17) {
    o18 && (u17.currentTarget instanceof HTMLLabelElement && u17.preventDefault(), o18.click(), o18.focus({ preventScroll: true }));
  } } }, import_react101.default.createElement(S7.Provider, { value: c13 }, H({ ourProps: T12, theirProps: y9, slot: {}, defaultTag: _e, name: "Switch.Group" }))));
}
var Ee3 = "button";
function De4(n13, o18) {
  var C7;
  let p8 = (0, import_react46.useId)(), f20 = u5(), b7 = a3(), { id: h7 = f20 || `headlessui-switch-${p8}`, disabled: t14 = b7 || false, checked: c13, defaultChecked: T12, onChange: y9, name: a15, value: u17, form: F6, autoFocus: d16 = false, ...k5 } = n13, w10 = (0, import_react101.useContext)(S7), _6 = (0, import_react101.useRef)(null), H10 = y(_6, o18, w10 === null ? null : w10.setSwitch), l16 = l2(T12), [s16, r15] = T(c13, y9, l16 != null ? l16 : false), M7 = p(), [P7, E11] = (0, import_react101.useState)(false), D9 = o4(() => {
    E11(true), r15 == null || r15(!s16), M7.nextFrame(() => {
      E11(false);
    });
  }), U5 = o4((e7) => {
    if (r5(e7.currentTarget))
      return e7.preventDefault();
    e7.preventDefault(), D9();
  }), I5 = o4((e7) => {
    e7.key === o8.Space ? (e7.preventDefault(), D9()) : e7.key === o8.Enter && p2(e7.currentTarget);
  }), B3 = o4((e7) => e7.preventDefault()), K4 = I2(), W6 = G(), { isFocusVisible: g8, focusProps: O3 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: d16 }), { isHovered: v7, hoverProps: N5 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: t14 }), { pressed: x6, pressProps: J6 } = w({ disabled: t14 }), V6 = (0, import_react101.useMemo)(() => ({ checked: s16, disabled: t14, hover: v7, focus: g8, active: x6, autofocus: d16, changing: P7 }), [s16, v7, g8, x6, t14, P7, d16]), X3 = D({ id: h7, ref: H10, role: "switch", type: T8(n13, _6), tabIndex: n13.tabIndex === -1 ? 0 : (C7 = n13.tabIndex) != null ? C7 : 0, "aria-checked": s16, "aria-labelledby": K4, "aria-describedby": W6, disabled: t14 || void 0, autoFocus: d16, onClick: U5, onKeyUp: I5, onKeyPress: B3 }, O3, N5, J6), j11 = (0, import_react101.useCallback)(() => {
    if (l16 !== void 0)
      return r15 == null ? void 0 : r15(l16);
  }, [r15, l16]);
  return import_react101.default.createElement(import_react101.default.Fragment, null, a15 != null && import_react101.default.createElement(j2, { disabled: t14, data: { [a15]: u17 || "on" }, overrides: { type: "checkbox", checked: s16 }, form: F6, onReset: j11 }), H({ ourProps: X3, theirProps: k5, slot: V6, defaultTag: Ee3, name: "Switch" }));
}
var ge3 = I(De4);
var ve3 = Pe3;
var xe2 = K;
var Ce2 = w3;
var qe3 = Object.assign(ge3, { Group: ve3, Label: xe2, Description: Ce2 });

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var import_react103 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/focus-sentinel.js
var import_react102 = __toESM(require_react(), 1);
function b6({ onFocus: n13 }) {
  let [r15, o18] = (0, import_react102.useState)(true), u17 = f17();
  return r15 ? import_react102.default.createElement(T2, { as: "button", type: "button", features: s4.Focusable, onFocus: (a15) => {
    a15.preventDefault();
    let e7, i13 = 50;
    function t14() {
      if (i13-- <= 0) {
        e7 && cancelAnimationFrame(e7);
        return;
      }
      if (n13()) {
        if (cancelAnimationFrame(e7), !u17.current)
          return;
        o18(false);
        return;
      }
      e7 = requestAnimationFrame(t14);
    }
    e7 = requestAnimationFrame(t14);
  } }) : null;
}

// node_modules/@headlessui/react/dist/utils/stable-collection.js
var r14 = __toESM(require_react(), 1);
var s15 = r14.createContext(null);
function a14() {
  return { groups: /* @__PURE__ */ new Map(), get(n13, t14) {
    var c13;
    let e7 = this.groups.get(n13);
    e7 || (e7 = /* @__PURE__ */ new Map(), this.groups.set(n13, e7));
    let l16 = (c13 = e7.get(t14)) != null ? c13 : 0;
    e7.set(t14, l16 + 1);
    let o18 = Array.from(e7.keys()).indexOf(t14);
    function i13() {
      let u17 = e7.get(t14);
      u17 > 1 ? e7.set(t14, u17 - 1) : e7.delete(t14);
    }
    return [o18, i13];
  } };
}
function C5({ children: n13 }) {
  let t14 = r14.useRef(a14());
  return r14.createElement(s15.Provider, { value: t14 }, n13);
}
function d15(n13) {
  let t14 = r14.useContext(s15);
  if (!t14)
    throw new Error("You must wrap your component in a <StableCollection>");
  let e7 = f18(), [l16, o18] = t14.current.get(n13, e7);
  return r14.useEffect(() => o18, []), l16;
}
function f18() {
  var l16, o18, i13;
  let n13 = (i13 = (o18 = (l16 = r14.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : l16.ReactCurrentOwner) == null ? void 0 : o18.current) != null ? i13 : null;
  if (!n13)
    return Symbol();
  let t14 = [], e7 = n13;
  for (; e7; )
    t14.push(e7.index), e7 = e7.return;
  return "$." + t14.join(".");
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var Ae2 = ((t14) => (t14[t14.Forwards = 0] = "Forwards", t14[t14.Backwards = 1] = "Backwards", t14))(Ae2 || {});
var Ee4 = ((o18) => (o18[o18.Less = -1] = "Less", o18[o18.Equal = 0] = "Equal", o18[o18.Greater = 1] = "Greater", o18))(Ee4 || {});
var Re6 = ((n13) => (n13[n13.SetSelectedIndex = 0] = "SetSelectedIndex", n13[n13.RegisterTab = 1] = "RegisterTab", n13[n13.UnregisterTab = 2] = "UnregisterTab", n13[n13.RegisterPanel = 3] = "RegisterPanel", n13[n13.UnregisterPanel = 4] = "UnregisterPanel", n13))(Re6 || {});
var Le4 = { [0](e7, r15) {
  var c13;
  let t14 = _2(e7.tabs, (T12) => T12.current), o18 = _2(e7.panels, (T12) => T12.current), a15 = t14.filter((T12) => {
    var d16;
    return !((d16 = T12.current) != null && d16.hasAttribute("disabled"));
  }), n13 = { ...e7, tabs: t14, panels: o18 };
  if (r15.index < 0 || r15.index > t14.length - 1) {
    let T12 = u2(Math.sign(r15.index - e7.selectedIndex), { [-1]: () => 1, [0]: () => u2(Math.sign(r15.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    if (a15.length === 0)
      return n13;
    let d16 = u2(T12, { [0]: () => t14.indexOf(a15[0]), [1]: () => t14.indexOf(a15[a15.length - 1]) });
    return { ...n13, selectedIndex: d16 === -1 ? e7.selectedIndex : d16 };
  }
  let u17 = t14.slice(0, r15.index), x6 = [...t14.slice(r15.index), ...u17].find((T12) => a15.includes(T12));
  if (!x6)
    return n13;
  let f20 = (c13 = t14.indexOf(x6)) != null ? c13 : e7.selectedIndex;
  return f20 === -1 && (f20 = e7.selectedIndex), { ...n13, selectedIndex: f20 };
}, [1](e7, r15) {
  if (e7.tabs.includes(r15.tab))
    return e7;
  let t14 = e7.tabs[e7.selectedIndex], o18 = _2([...e7.tabs, r15.tab], (n13) => n13.current), a15 = e7.selectedIndex;
  return e7.info.current.isControlled || (a15 = o18.indexOf(t14), a15 === -1 && (a15 = e7.selectedIndex)), { ...e7, tabs: o18, selectedIndex: a15 };
}, [2](e7, r15) {
  return { ...e7, tabs: e7.tabs.filter((t14) => t14 !== r15.tab) };
}, [3](e7, r15) {
  return e7.panels.includes(r15.panel) ? e7 : { ...e7, panels: _2([...e7.panels, r15.panel], (t14) => t14.current) };
}, [4](e7, r15) {
  return { ...e7, panels: e7.panels.filter((t14) => t14 !== r15.panel) };
} };
var z5 = (0, import_react103.createContext)(null);
z5.displayName = "TabsDataContext";
function C6(e7) {
  let r15 = (0, import_react103.useContext)(z5);
  if (r15 === null) {
    let t14 = new Error(`<${e7} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t14, C6), t14;
  }
  return r15;
}
var V5 = (0, import_react103.createContext)(null);
V5.displayName = "TabsActionsContext";
function Q5(e7) {
  let r15 = (0, import_react103.useContext)(V5);
  if (r15 === null) {
    let t14 = new Error(`<${e7} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t14, Q5), t14;
  }
  return r15;
}
function _e2(e7, r15) {
  return u2(r15.type, Le4, e7, r15);
}
var De5 = "div";
function Se4(e7, r15) {
  let { defaultIndex: t14 = 0, vertical: o18 = false, manual: a15 = false, onChange: n13, selectedIndex: u17 = null, ..._6 } = e7;
  const x6 = o18 ? "vertical" : "horizontal", f20 = a15 ? "manual" : "auto";
  let c13 = u17 !== null, T12 = s3({ isControlled: c13 }), d16 = y(r15), [i13, s16] = (0, import_react103.useReducer)(_e2, { info: T12, selectedIndex: u17 != null ? u17 : t14, tabs: [], panels: [] }), F6 = (0, import_react103.useMemo)(() => ({ selectedIndex: i13.selectedIndex }), [i13.selectedIndex]), M7 = s3(n13 || (() => {
  })), b7 = s3(i13.tabs), m13 = (0, import_react103.useMemo)(() => ({ orientation: x6, activation: f20, ...i13 }), [x6, f20, i13]), E11 = o4((p8) => (s16({ type: 1, tab: p8 }), () => s16({ type: 2, tab: p8 }))), I5 = o4((p8) => (s16({ type: 3, panel: p8 }), () => s16({ type: 4, panel: p8 }))), g8 = o4((p8) => {
    R7.current !== p8 && M7.current(p8), c13 || s16({ type: 0, index: p8 });
  }), R7 = s3(c13 ? e7.selectedIndex : i13.selectedIndex), J6 = (0, import_react103.useMemo)(() => ({ registerTab: E11, registerPanel: I5, change: g8 }), []);
  n(() => {
    s16({ type: 0, index: u17 != null ? u17 : t14 });
  }, [u17]), n(() => {
    if (R7.current === void 0 || i13.tabs.length <= 0)
      return;
    let p8 = _2(i13.tabs, (L9) => L9.current);
    p8.some((L9, B3) => i13.tabs[B3] !== L9) && g8(p8.indexOf(i13.tabs[R7.current]));
  });
  let k5 = { ref: d16 };
  return import_react103.default.createElement(C5, null, import_react103.default.createElement(V5.Provider, { value: J6 }, import_react103.default.createElement(z5.Provider, { value: m13 }, m13.tabs.length <= 0 && import_react103.default.createElement(b6, { onFocus: () => {
    var p8, h7;
    for (let L9 of b7.current)
      if (((p8 = L9.current) == null ? void 0 : p8.tabIndex) === 0)
        return (h7 = L9.current) == null || h7.focus(), true;
    return false;
  } }), H({ ourProps: k5, theirProps: _6, slot: F6, defaultTag: De5, name: "Tabs" }))));
}
var Fe3 = "div";
function Ie2(e7, r15) {
  let { orientation: t14, selectedIndex: o18 } = C6("Tab.List"), a15 = y(r15), n13 = (0, import_react103.useMemo)(() => ({ selectedIndex: o18 }), [o18]);
  return H({ ourProps: { ref: a15, role: "tablist", "aria-orientation": t14 }, theirProps: e7, slot: n13, defaultTag: Fe3, name: "Tabs.List" });
}
var he2 = "button";
function ve4(e7, r15) {
  var Y4, Z7;
  let t14 = (0, import_react46.useId)(), { id: o18 = `headlessui-tabs-tab-${t14}`, disabled: a15 = false, autoFocus: n13 = false, ...u17 } = e7, { orientation: _6, activation: x6, selectedIndex: f20, tabs: c13, panels: T12 } = C6("Tab"), d16 = Q5("Tab"), i13 = C6("Tab"), s16 = (0, import_react103.useRef)(null), F6 = y(s16, r15);
  n(() => d16.registerTab(s16), [d16, s16]);
  let M7 = d15("tabs"), b7 = c13.indexOf(s16);
  b7 === -1 && (b7 = M7);
  let m13 = b7 === f20, E11 = o4((l16) => {
    var X3;
    let A7 = l16();
    if (A7 === T7.Success && x6 === "auto") {
      let $5 = (X3 = u(s16)) == null ? void 0 : X3.activeElement, ee6 = i13.tabs.findIndex((Te4) => Te4.current === $5);
      ee6 !== -1 && d16.change(ee6);
    }
    return A7;
  }), I5 = o4((l16) => {
    let A7 = c13.map(($5) => $5.current).filter(Boolean);
    if (l16.key === o8.Space || l16.key === o8.Enter) {
      l16.preventDefault(), l16.stopPropagation(), d16.change(b7);
      return;
    }
    switch (l16.key) {
      case o8.Home:
      case o8.PageUp:
        return l16.preventDefault(), l16.stopPropagation(), E11(() => P5(A7, F.First));
      case o8.End:
      case o8.PageDown:
        return l16.preventDefault(), l16.stopPropagation(), E11(() => P5(A7, F.Last));
    }
    if (E11(() => u2(_6, { vertical() {
      return l16.key === o8.ArrowUp ? P5(A7, F.Previous | F.WrapAround) : l16.key === o8.ArrowDown ? P5(A7, F.Next | F.WrapAround) : T7.Error;
    }, horizontal() {
      return l16.key === o8.ArrowLeft ? P5(A7, F.Previous | F.WrapAround) : l16.key === o8.ArrowRight ? P5(A7, F.Next | F.WrapAround) : T7.Error;
    } })) === T7.Success)
      return l16.preventDefault();
  }), g8 = (0, import_react103.useRef)(false), R7 = o4(() => {
    var l16;
    g8.current || (g8.current = true, (l16 = s16.current) == null || l16.focus({ preventScroll: true }), d16.change(b7), t(() => {
      g8.current = false;
    }));
  }), J6 = o4((l16) => {
    l16.preventDefault();
  }), { isFocusVisible: k5, focusProps: p8 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: n13 }), { isHovered: h7, hoverProps: L9 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: a15 }), { pressed: B3, pressProps: ie3 } = w({ disabled: a15 }), pe6 = (0, import_react103.useMemo)(() => ({ selected: m13, hover: h7, active: B3, focus: k5, autofocus: n13, disabled: a15 }), [m13, h7, k5, B3, n13, a15]), ue3 = D({ ref: F6, onKeyDown: I5, onMouseDown: J6, onClick: R7, id: o18, role: "tab", type: T8(e7, s16), "aria-controls": (Z7 = (Y4 = T12[b7]) == null ? void 0 : Y4.current) == null ? void 0 : Z7.id, "aria-selected": m13, tabIndex: m13 ? 0 : -1, disabled: a15 || void 0, autoFocus: n13 }, p8, L9, ie3);
  return H({ ourProps: ue3, theirProps: u17, slot: pe6, defaultTag: he2, name: "Tabs.Tab" });
}
var Ce3 = "div";
function Me2(e7, r15) {
  let { selectedIndex: t14 } = C6("Tab.Panels"), o18 = y(r15), a15 = (0, import_react103.useMemo)(() => ({ selectedIndex: t14 }), [t14]);
  return H({ ourProps: { ref: o18 }, theirProps: e7, slot: a15, defaultTag: Ce3, name: "Tabs.Panels" });
}
var Ge = "div";
var Ue3 = O.RenderStrategy | O.Static;
function He4(e7, r15) {
  var E11, I5, g8, R7;
  let t14 = (0, import_react46.useId)(), { id: o18 = `headlessui-tabs-panel-${t14}`, tabIndex: a15 = 0, ...n13 } = e7, { selectedIndex: u17, tabs: _6, panels: x6 } = C6("Tab.Panel"), f20 = Q5("Tab.Panel"), c13 = (0, import_react103.useRef)(null), T12 = y(c13, r15);
  n(() => f20.registerPanel(c13), [f20, c13]);
  let d16 = d15("panels"), i13 = x6.indexOf(c13);
  i13 === -1 && (i13 = d16);
  let s16 = i13 === u17, { isFocusVisible: F6, focusProps: M7 } = $f7dceffc5ad7768b$export$4e328f61c538687f(), b7 = (0, import_react103.useMemo)(() => ({ selected: s16, focus: F6 }), [s16, F6]), m13 = D({ ref: T12, id: o18, role: "tabpanel", "aria-labelledby": (I5 = (E11 = _6[i13]) == null ? void 0 : E11.current) == null ? void 0 : I5.id, tabIndex: s16 ? a15 : -1 }, M7);
  return !s16 && ((g8 = n13.unmount) == null || g8) && !((R7 = n13.static) != null && R7) ? import_react103.default.createElement(T2, { as: "span", "aria-hidden": "true", ...m13 }) : H({ ourProps: m13, theirProps: n13, slot: b7, defaultTag: Ge, features: Ue3, visible: s16, name: "Tabs.Panel" });
}
var we4 = I(ve4);
var Oe = I(Se4);
var Ne4 = I(Ie2);
var ke5 = I(Me2);
var Be5 = I(He4);
var st3 = Object.assign(we4, { Group: Oe, List: Ne4, Panels: ke5, Panel: Be5 });

// node_modules/@headlessui/react/dist/components/textarea/textarea.js
var import_react104 = __toESM(require_react(), 1);
var L7 = "textarea";
function H9(s16, l16) {
  let i13 = (0, import_react46.useId)(), p8 = u5(), d16 = a3(), { id: n13 = p8 || `headlessui-textarea-${i13}`, disabled: e7 = d16 || false, autoFocus: r15 = false, invalid: a15 = false, ...T12 } = s16, f20 = I2(), m13 = G(), { isFocused: o18, focusProps: u17 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r15 }), { isHovered: t14, hoverProps: b7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), y9 = D({ ref: l16, id: n13, "aria-labelledby": f20, "aria-describedby": m13, "aria-invalid": a15 ? "" : void 0, disabled: e7 || void 0, autoFocus: r15 }, u17, b7), x6 = (0, import_react104.useMemo)(() => ({ disabled: e7, invalid: a15, hover: t14, focus: o18, autofocus: r15 }), [e7, a15, t14, o18, r15]);
  return H({ ourProps: y9, theirProps: T12, slot: x6, defaultTag: L7, name: "Textarea" });
}
var w9 = I(H9);

// node_modules/@headlessui/react/dist/components/transition/transition.js
var import_react107 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react105 = __toESM(require_react(), 1);
function c12(a15 = 0) {
  let [l16, r15] = (0, import_react105.useState)(a15), t14 = f17(), o18 = (0, import_react105.useCallback)((e7) => {
    t14.current && r15((u17) => u17 | e7);
  }, [l16, t14]), m13 = (0, import_react105.useCallback)((e7) => !!(l16 & e7), [l16]), s16 = (0, import_react105.useCallback)((e7) => {
    t14.current && r15((u17) => u17 & ~e7);
  }, [r15, t14]), g8 = (0, import_react105.useCallback)((e7) => {
    t14.current && r15((u17) => u17 ^ e7);
  }, [r15]);
  return { flags: l16, addFlag: o18, hasFlag: m13, removeFlag: s16, toggleFlag: g8 };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var import_react106 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l15(r15) {
  let e7 = { called: false };
  return (...t14) => {
    if (!e7.called)
      return e7.called = true, r15(...t14);
  };
}

// node_modules/@headlessui/react/dist/components/transition/utils/transition.js
function v5(t14, ...r15) {
  t14 && r15.length > 0 && t14.classList.add(...r15);
}
function T10(t14, ...r15) {
  t14 && r15.length > 0 && t14.classList.remove(...r15);
}
function L8(t14, r15) {
  let n13 = l15(r15), e7 = o2();
  if (!t14)
    return e7.dispose;
  let { transitionDuration: o18, transitionDelay: m13 } = getComputedStyle(t14), [s16, u17] = [o18, m13].map((a15) => {
    let [i13 = 0] = a15.split(",").filter(Boolean).map((l16) => l16.includes("ms") ? parseFloat(l16) : parseFloat(l16) * 1e3).sort((l16, f20) => f20 - l16);
    return i13;
  }), p8 = s16 + u17;
  if (p8 !== 0) {
    let a15 = e7.group((i13) => {
      let l16 = i13.setTimeout(() => {
        n13(), i13.dispose();
      }, p8);
      i13.addEventListener(t14, "transitionrun", (f20) => {
        f20.target === f20.currentTarget && (l16(), i13.addEventListener(t14, "transitioncancel", (b7) => {
          b7.target === b7.currentTarget && (n13(), a15());
        }));
      });
    });
    e7.addEventListener(t14, "transitionend", (i13) => {
      i13.target === i13.currentTarget && (n13(), e7.dispose());
    });
  } else
    n13();
  return e7.dispose;
}
function F5(t14, { direction: r15, done: n13, classes: e7, inFlight: o18 }) {
  let m13 = o2(), s16 = n13 !== void 0 ? l15(n13) : () => {
  };
  r15 === "enter" && (t14.removeAttribute("hidden"), t14.style.display = "");
  let u17 = u2(r15, { enter: () => e7.enter, leave: () => e7.leave }), p8 = u2(r15, { enter: () => e7.enterTo, leave: () => e7.leaveTo }), a15 = u2(r15, { enter: () => e7.enterFrom, leave: () => e7.leaveFrom });
  return M6(t14, { prepare() {
    T10(t14, ...e7.base, ...e7.enter, ...e7.enterTo, ...e7.enterFrom, ...e7.leave, ...e7.leaveFrom, ...e7.leaveTo, ...e7.entered), v5(t14, ...e7.base, ...u17, ...a15);
  }, inFlight: o18 }), o18 && (o18.current = true), m13.nextFrame(() => {
    m13.add(L8(t14, () => (T10(t14, ...e7.base, ...u17), v5(t14, ...e7.base, ...e7.entered, ...p8), o18 && (o18.current = false), s16()))), T10(t14, ...e7.base, ...u17, ...a15), v5(t14, ...e7.base, ...u17, ...p8);
  }), m13.dispose;
}
function M6(t14, { inFlight: r15, prepare: n13 }) {
  if (r15 != null && r15.current) {
    n13();
    return;
  }
  let e7 = t14.style.transition;
  t14.style.transition = "none", n13(), t14.offsetHeight, t14.style.transition = e7;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function v6({ container: i13, direction: e7, classes: s16, onStart: o18, onStop: t14 }) {
  let a15 = f17(), r15 = p(), l16 = (0, import_react106.useRef)(false);
  n(() => {
    if (e7 === "idle" || !a15.current)
      return;
    o18.current(e7);
    let n13 = i13.current;
    return n13 ? r15.add(F5(n13, { direction: e7, classes: s16.current, inFlight: l16, done() {
      t14.current(e7);
    } })) : t14.current(e7), r15.dispose;
  }, [e7]);
}

// node_modules/@headlessui/react/dist/components/transition/transition.js
function y8(t14 = "") {
  return t14.split(/\s+/).filter((n13) => n13.length > 1);
}
function de3(t14) {
  var n13;
  return !!(t14.enter || t14.enterFrom || t14.enterTo || t14.leave || t14.leaveFrom || t14.leaveTo) || ((n13 = t14.as) != null ? n13 : me3) !== import_react107.Fragment || import_react107.default.Children.count(t14.children) === 1;
}
var W5 = (0, import_react107.createContext)(null);
W5.displayName = "TransitionContext";
var xe3 = ((r15) => (r15.Visible = "visible", r15.Hidden = "hidden", r15))(xe3 || {});
function Fe4() {
  let t14 = (0, import_react107.useContext)(W5);
  if (t14 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t14;
}
function _e3() {
  let t14 = (0, import_react107.useContext)(k4);
  if (t14 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t14;
}
var k4 = (0, import_react107.createContext)(null);
k4.displayName = "NestingContext";
function q5(t14) {
  return "children" in t14 ? q5(t14.children) : t14.current.filter(({ el: n13 }) => n13.current !== null).filter(({ state: n13 }) => n13 === "visible").length > 0;
}
function fe3(t14, n13) {
  let r15 = s3(t14), a15 = (0, import_react107.useRef)([]), H10 = f17(), L9 = p(), d16 = o4((i13, e7 = M.Hidden) => {
    let o18 = a15.current.findIndex(({ el: s16 }) => s16 === i13);
    o18 !== -1 && (u2(e7, { [M.Unmount]() {
      a15.current.splice(o18, 1);
    }, [M.Hidden]() {
      a15.current[o18].state = "hidden";
    } }), L9.microTask(() => {
      var s16;
      !q5(a15) && H10.current && ((s16 = r15.current) == null || s16.call(r15));
    }));
  }), F6 = o4((i13) => {
    let e7 = a15.current.find(({ el: o18 }) => o18 === i13);
    return e7 ? e7.state !== "visible" && (e7.state = "visible") : a15.current.push({ el: i13, state: "visible" }), () => d16(i13, M.Unmount);
  }), R7 = (0, import_react107.useRef)([]), f20 = (0, import_react107.useRef)(Promise.resolve()), C7 = (0, import_react107.useRef)({ enter: [], leave: [], idle: [] }), m13 = o4((i13, e7, o18) => {
    R7.current.splice(0), n13 && (n13.chains.current[e7] = n13.chains.current[e7].filter(([s16]) => s16 !== i13)), n13 == null || n13.chains.current[e7].push([i13, new Promise((s16) => {
      R7.current.push(s16);
    })]), n13 == null || n13.chains.current[e7].push([i13, new Promise((s16) => {
      Promise.all(C7.current[e7].map(([g8, c13]) => c13)).then(() => s16());
    })]), e7 === "enter" ? f20.current = f20.current.then(() => n13 == null ? void 0 : n13.wait.current).then(() => o18(e7)) : o18(e7);
  }), h7 = o4((i13, e7, o18) => {
    Promise.all(C7.current[e7].splice(0).map(([s16, g8]) => g8)).then(() => {
      var s16;
      (s16 = R7.current.shift()) == null || s16();
    }).then(() => o18(e7));
  });
  return (0, import_react107.useMemo)(() => ({ children: a15, register: F6, unregister: d16, onStart: m13, onStop: h7, wait: f20, chains: C7 }), [F6, d16, a15, m13, h7, C7, f20]);
}
var me3 = import_react107.Fragment;
var ce7 = O.RenderStrategy;
function De6(t14, n13) {
  var ne3, re2, ie3;
  let { beforeEnter: r15, afterEnter: a15, beforeLeave: H10, afterLeave: L9, enter: d16, enterFrom: F6, enterTo: R7, entered: f20, leave: C7, leaveFrom: m13, leaveTo: h7, ...i13 } = t14, e7 = (0, import_react107.useRef)(null), o18 = de3(t14), s16 = y(...o18 ? [e7, n13] : n13 === null ? [] : [n13]), g8 = (ne3 = i13.unmount) == null || ne3 ? M.Unmount : M.Hidden, { show: c13, appear: V6, initial: v7 } = Fe4(), [P7, J6] = (0, import_react107.useState)(c13 ? "visible" : "hidden"), $5 = _e3(), { register: w10, unregister: M7 } = $5;
  n(() => w10(e7), [w10, e7]), n(() => {
    if (g8 === M.Hidden && e7.current) {
      if (c13 && P7 !== "visible") {
        J6("visible");
        return;
      }
      return u2(P7, { ["hidden"]: () => M7(e7), ["visible"]: () => w10(e7) });
    }
  }, [P7, e7, w10, M7, c13, g8]);
  let _6 = s3({ base: y8(i13.className), enter: y8(d16), enterFrom: y8(F6), enterTo: y8(R7), entered: y8(f20), leave: y8(C7), leaveFrom: y8(m13), leaveTo: y8(h7) }), U5 = s3({ beforeEnter: r15, afterEnter: a15, beforeLeave: H10, afterLeave: L9 }), X3 = l10();
  n(() => {
    if (o18 && X3 && P7 === "visible" && e7.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e7, P7, X3, o18]);
  let Ce4 = v7 && !V6, ee6 = V6 && c13 && v7, te4 = /* @__PURE__ */ (() => ee6 ? "enter" : !X3 || Ce4 ? "idle" : c13 ? "enter" : "leave")(), A7 = c12(0), he3 = o4((b7) => u2(b7, { enter: () => {
    var l16, u17;
    A7.addFlag(d9.Opening), (u17 = (l16 = U5.current).beforeEnter) == null || u17.call(l16);
  }, leave: () => {
    var l16, u17;
    A7.addFlag(d9.Closing), (u17 = (l16 = U5.current).beforeLeave) == null || u17.call(l16);
  }, idle: () => {
  } })), ge4 = o4((b7) => u2(b7, { enter: () => {
    var l16, u17;
    A7.removeFlag(d9.Opening), (u17 = (l16 = U5.current).afterEnter) == null || u17.call(l16);
  }, leave: () => {
    var l16, u17;
    A7.removeFlag(d9.Closing), (u17 = (l16 = U5.current).afterLeave) == null || u17.call(l16);
  }, idle: () => {
  } })), j11 = (0, import_react107.useRef)(false), G10 = fe3(() => {
    j11.current || (J6("hidden"), M7(e7));
  }, $5);
  v6({ container: e7, classes: _6, direction: te4, onStart: s3((b7) => {
    j11.current = true, G10.onStart(e7, b7, he3);
  }), onStop: s3((b7) => {
    j11.current = false, G10.onStop(e7, b7, ge4), b7 === "leave" && !q5(G10) && (J6("hidden"), M7(e7));
  }) });
  let p8 = i13, ve5 = { ref: s16 };
  return ee6 ? p8 = { ...p8, className: t3(i13.className, ..._6.current.enter, ..._6.current.enterFrom) } : j11.current ? (p8.className = t3(i13.className, (re2 = e7.current) == null ? void 0 : re2.className), p8.className === "" && delete p8.className) : (p8.className = t3(i13.className, (ie3 = e7.current) == null ? void 0 : ie3.className, ...u2(te4, { enter: [..._6.current.enterTo, ..._6.current.entered], leave: _6.current.leaveTo, idle: [] })), p8.className === "" && delete p8.className), import_react107.default.createElement(k4.Provider, { value: G10 }, import_react107.default.createElement(s8, { value: u2(P7, { ["visible"]: d9.Open, ["hidden"]: d9.Closed }) | A7.flags }, H({ ourProps: ve5, theirProps: p8, defaultTag: me3, features: ce7, visible: P7 === "visible", name: "Transition.Child" })));
}
function He5(t14, n13) {
  let { show: r15, appear: a15 = false, unmount: H10 = true, ...L9 } = t14, d16 = (0, import_react107.useRef)(null), F6 = de3(t14), R7 = y(...F6 ? [d16, n13] : n13 === null ? [] : [n13]);
  l10();
  let f20 = u13();
  if (r15 === void 0 && f20 !== null && (r15 = (f20 & d9.Open) === d9.Open), r15 === void 0)
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [C7, m13] = (0, import_react107.useState)(r15 ? "visible" : "hidden"), h7 = fe3(() => {
    r15 || m13("hidden");
  }), [i13, e7] = (0, import_react107.useState)(true), o18 = (0, import_react107.useRef)([r15]);
  n(() => {
    i13 !== false && o18.current[o18.current.length - 1] !== r15 && (o18.current.push(r15), e7(false));
  }, [o18, r15]);
  let s16 = (0, import_react107.useMemo)(() => ({ show: r15, appear: a15, initial: i13 }), [r15, a15, i13]);
  m6(d16, () => m13("hidden")), n(() => {
    r15 ? m13("visible") : !q5(h7) && d16.current !== null && m13("hidden");
  }, [r15, h7]);
  let g8 = { unmount: H10 }, c13 = o4(() => {
    var v7;
    i13 && e7(false), (v7 = t14.beforeEnter) == null || v7.call(t14);
  }), V6 = o4(() => {
    var v7;
    i13 && e7(false), (v7 = t14.beforeLeave) == null || v7.call(t14);
  });
  return import_react107.default.createElement(k4.Provider, { value: h7 }, import_react107.default.createElement(W5.Provider, { value: s16 }, H({ ourProps: { ...g8, as: import_react107.Fragment, children: import_react107.default.createElement(pe5, { ref: R7, ...g8, ...L9, beforeEnter: c13, beforeLeave: V6 }) }, theirProps: {}, defaultTag: import_react107.Fragment, features: ce7, visible: C7 === "visible", name: "Transition" })));
}
function Le5(t14, n13) {
  let r15 = (0, import_react107.useContext)(W5) !== null, a15 = u13() !== null;
  return import_react107.default.createElement(import_react107.default.Fragment, null, !r15 && a15 ? import_react107.default.createElement(Z6, { ref: n13, ...t14 }) : import_react107.default.createElement(pe5, { ref: n13, ...t14 }));
}
var Z6 = I(He5);
var pe5 = I(De6);
var Ae3 = I(Le5);
var Ke4 = Object.assign(Z6, { Child: Ae3, Root: Z6 });
export {
  h2 as Button,
  Re as Checkbox,
  y2 as CloseButton,
  ht as Combobox,
  Lo as ComboboxButton,
  wo as ComboboxInput,
  Bo as ComboboxLabel,
  No as ComboboxOption,
  ko as ComboboxOptions,
  C3 as DataInteractive,
  w3 as Description,
  _t as Dialog,
  At as DialogDescription,
  Ve as DialogPanel,
  qe as DialogTitle,
  we as Disclosure,
  be2 as DisclosureButton,
  Re4 as DisclosurePanel,
  H7 as Field,
  C4 as Fieldset,
  Le2 as FocusTrap,
  h5 as FocusTrapFeatures,
  J4 as Input,
  K as Label,
  d14 as Legend,
  Po2 as Listbox,
  Ct as ListboxButton,
  Ft as ListboxLabel,
  wt as ListboxOption,
  Mt as ListboxOptions,
  Bt as ListboxSelectedOption,
  Kt as Menu,
  ot as MenuButton,
  lt as MenuHeading,
  it as MenuItem,
  at as MenuItems,
  st as MenuSection,
  ut as MenuSeparator,
  qt as Popover,
  vt2 as PopoverButton,
  yt2 as PopoverGroup,
  Tt2 as PopoverOverlay,
  mt2 as PopoverPanel,
  te as Portal,
  Be4 as Radio,
  Tt3 as RadioGroup,
  Ke3 as RadioGroupDescription,
  Ve3 as RadioGroupLabel,
  We3 as RadioGroupOption,
  $4 as Select,
  qe3 as Switch,
  Ce2 as SwitchDescription,
  ve3 as SwitchGroup,
  xe2 as SwitchLabel,
  st3 as Tab,
  Oe as TabGroup,
  Ne4 as TabList,
  Be5 as TabPanel,
  ke5 as TabPanels,
  w9 as Textarea,
  Ke4 as Transition,
  Ae3 as TransitionChild,
  l5 as useClose
};
/*! Bundled license information:

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
//# sourceMappingURL=@headlessui_react.js.map
