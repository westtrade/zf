// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/svelte/internal/index.mjs":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.action_destroyer = action_destroyer;
exports.add_attribute = add_attribute;
exports.add_classes = add_classes;
exports.add_flush_callback = add_flush_callback;
exports.add_location = add_location;
exports.add_render_callback = add_render_callback;
exports.add_resize_listener = add_resize_listener;
exports.add_transform = add_transform;
exports.afterUpdate = afterUpdate;
exports.append = append;
exports.append_dev = append_dev;
exports.assign = assign;
exports.attr = attr;
exports.attr_dev = attr_dev;
exports.beforeUpdate = beforeUpdate;
exports.bind = bind;
exports.blank_object = blank_object;
exports.bubble = bubble;
exports.check_outros = check_outros;
exports.children = children;
exports.claim_component = claim_component;
exports.claim_element = claim_element;
exports.claim_space = claim_space;
exports.claim_text = claim_text;
exports.clear_loops = clear_loops;
exports.component_subscribe = component_subscribe;
exports.compute_rest_props = compute_rest_props;
exports.createEventDispatcher = createEventDispatcher;
exports.create_animation = create_animation;
exports.create_bidirectional_transition = create_bidirectional_transition;
exports.create_component = create_component;
exports.create_in_transition = create_in_transition;
exports.create_out_transition = create_out_transition;
exports.create_slot = create_slot;
exports.create_ssr_component = create_ssr_component;
exports.custom_event = custom_event;
exports.dataset_dev = dataset_dev;
exports.debug = debug;
exports.destroy_block = destroy_block;
exports.destroy_component = destroy_component;
exports.destroy_each = destroy_each;
exports.detach = detach;
exports.detach_after_dev = detach_after_dev;
exports.detach_before_dev = detach_before_dev;
exports.detach_between_dev = detach_between_dev;
exports.detach_dev = detach_dev;
exports.dispatch_dev = dispatch_dev;
exports.each = each;
exports.element = element;
exports.element_is = element_is;
exports.empty = empty;
exports.escape = escape;
exports.exclude_internal_props = exclude_internal_props;
exports.fix_and_destroy_block = fix_and_destroy_block;
exports.fix_and_outro_and_destroy_block = fix_and_outro_and_destroy_block;
exports.fix_position = fix_position;
exports.flush = flush;
exports.getContext = getContext;
exports.get_binding_group_value = get_binding_group_value;
exports.get_current_component = get_current_component;
exports.get_slot_changes = get_slot_changes;
exports.get_slot_context = get_slot_context;
exports.get_spread_object = get_spread_object;
exports.get_spread_update = get_spread_update;
exports.get_store_value = get_store_value;
exports.group_outros = group_outros;
exports.handle_promise = handle_promise;
exports.init = init;
exports.insert = insert;
exports.insert_dev = insert_dev;
exports.is_function = is_function;
exports.is_promise = is_promise;
exports.listen = listen;
exports.listen_dev = listen_dev;
exports.loop = loop;
exports.loop_guard = loop_guard;
exports.mount_component = mount_component;
exports.noop = noop;
exports.not_equal = not_equal;
exports.null_to_empty = null_to_empty;
exports.object_without_properties = object_without_properties;
exports.onDestroy = onDestroy;
exports.onMount = onMount;
exports.once = once;
exports.outro_and_destroy_block = outro_and_destroy_block;
exports.prevent_default = prevent_default;
exports.prop_dev = prop_dev;
exports.query_selector_all = query_selector_all;
exports.run = run;
exports.run_all = run_all;
exports.safe_not_equal = safe_not_equal;
exports.schedule_update = schedule_update;
exports.select_multiple_value = select_multiple_value;
exports.select_option = select_option;
exports.select_options = select_options;
exports.select_value = select_value;
exports.self = self;
exports.setContext = setContext;
exports.set_attributes = set_attributes;
exports.set_current_component = set_current_component;
exports.set_custom_element_data = set_custom_element_data;
exports.set_data = set_data;
exports.set_data_dev = set_data_dev;
exports.set_input_type = set_input_type;
exports.set_input_value = set_input_value;
exports.set_now = set_now;
exports.set_raf = set_raf;
exports.set_store_value = set_store_value;
exports.set_style = set_style;
exports.set_svg_attributes = set_svg_attributes;
exports.space = space;
exports.spread = spread;
exports.stop_propagation = stop_propagation;
exports.subscribe = subscribe;
exports.svg_element = svg_element;
exports.text = text;
exports.tick = tick;
exports.time_ranges_to_array = time_ranges_to_array;
exports.to_number = to_number;
exports.toggle_class = toggle_class;
exports.transition_in = transition_in;
exports.transition_out = transition_out;
exports.update_keyed_each = update_keyed_each;
exports.validate_component = validate_component;
exports.validate_each_argument = validate_each_argument;
exports.validate_each_keys = validate_each_keys;
exports.validate_slots = validate_slots;
exports.validate_store = validate_store;
exports.xlink_attr = xlink_attr;
exports.raf = exports.now = exports.missing_component = exports.is_client = exports.invalid_attribute_name_character = exports.intros = exports.identity = exports.has_prop = exports.globals = exports.escaped = exports.dirty_components = exports.current_component = exports.binding_callbacks = exports.SvelteElement = exports.SvelteComponentDev = exports.SvelteComponent = exports.HtmlTag = void 0;

function noop() {}

const identity = x => x;

exports.identity = identity;

function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];

  return tar;
}

function is_promise(value) {
  return value && typeof value === 'object' && typeof value.then === 'function';
}

function add_location(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file,
      line,
      column,
      char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}

function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== 'function') {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}

function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }

  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

function get_store_value(store) {
  let value;
  subscribe(store, _ => value = _)();
  return value;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (typeof lets === 'object') {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);

      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

function exclude_internal_props(props) {
  const result = {};

  for (const k in props) if (k[0] !== '$') result[k] = props[k];

  return result;
}

function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);

  for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];

  return rest;
}

function once(fn) {
  let ran = false;
  return function (...args) {
    if (ran) return;
    ran = true;
    fn.call(this, ...args);
  };
}

function null_to_empty(value) {
  return value == null ? '' : value;
}

function set_store_value(store, ret, value = ret) {
  store.set(value);
  return ret;
}

const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

exports.has_prop = has_prop;

function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
exports.is_client = is_client;
let now = is_client ? () => window.performance.now() : () => Date.now();
exports.now = now;
let raf = is_client ? cb => requestAnimationFrame(cb) : noop; // used internally for testing

exports.raf = raf;

function set_now(fn) {
  exports.now = now = fn;
}

function set_raf(fn) {
  exports.raf = raf = fn;
}

const tasks = new Set();

function run_tasks(now) {
  tasks.forEach(task => {
    if (!task.c(now)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * For testing purposes only!
 */


function clear_loops() {
  tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */


function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(fulfill => {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),

    abort() {
      tasks.delete(task);
    }

  };
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function element_is(name, is) {
  return document.createElement(name, {
    is
  });
}

function object_without_properties(obj, exclude) {
  const target = {};

  for (const k in obj) {
    if (has_prop(obj, k) // @ts-ignore
    && exclude.indexOf(k) === -1) {
      // @ts-ignore
      target[k] = obj[k];
    }
  }

  return target;
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function prevent_default(fn) {
  return function (event) {
    event.preventDefault(); // @ts-ignore

    return fn.call(this, event);
  };
}

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function self(fn) {
  return function (event) {
    // @ts-ignore
    if (event.target === this) fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key === '__value' || descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function set_svg_attributes(node, attributes) {
  for (const key in attributes) {
    attr(node, key, attributes[key]);
  }
}

function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = value;
  } else {
    attr(node, prop, value);
  }
}

function xlink_attr(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function get_binding_group_value(group) {
  const value = [];

  for (let i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.push(group[i].__value);
  }

  return value;
}

function to_number(value) {
  return value === '' ? undefined : +value;
}

function time_ranges_to_array(ranges) {
  const array = [];

  for (let i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function claim_element(nodes, name, attributes, svg) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeName === name) {
      let j = 0;

      while (j < node.attributes.length) {
        const attribute = node.attributes[j];

        if (attributes[attribute.name]) {
          j++;
        } else {
          node.removeAttribute(attribute.name);
        }
      }

      return nodes.splice(i, 1)[0];
    }
  }

  return svg ? svg_element(name) : element(name);
}

function claim_text(nodes, data) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeType === 3) {
      node.data = '' + data;
      return nodes.splice(i, 1)[0];
    }
  }

  return text(data);
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function set_data(text, data) {
  data = '' + data;
  if (text.data !== data) text.data = data;
}

function set_input_value(input, value) {
  if (value != null || input.value) {
    input.value = value;
  }
}

function set_input_type(input, type) {
  try {
    input.type = type;
  } catch (e) {// do nothing
  }
}

function set_style(node, key, value, important) {
  node.style.setProperty(key, value, important ? 'important' : '');
}

function select_option(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
}

function select_options(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}

function select_value(select) {
  const selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
  return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}

function add_resize_listener(element, fn) {
  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative';
  }

  const object = document.createElement('object');
  object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
  object.setAttribute('aria-hidden', 'true');
  object.type = 'text/html';
  object.tabIndex = -1;
  let win;

  object.onload = () => {
    win = object.contentDocument.defaultView;
    win.addEventListener('resize', fn);
  };

  if (/Trident/.test(navigator.userAgent)) {
    element.appendChild(object);
    object.data = 'about:blank';
  } else {
    object.data = 'about:blank';
    element.appendChild(object);
  }

  return {
    cancel: () => {
      win && win.removeEventListener && win.removeEventListener('resize', fn);
      element.removeChild(object);
    }
  };
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  const e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, false, false, detail);
  return e;
}

function query_selector_all(selector, parent = document.body) {
  return Array.from(parent.querySelectorAll(selector));
}

class HtmlTag {
  constructor(html, anchor = null) {
    this.e = element('div');
    this.a = anchor;
    this.u(html);
  }

  m(target, anchor = null) {
    for (let i = 0; i < this.n.length; i += 1) {
      insert(target, this.n[i], anchor);
    }

    this.t = target;
  }

  u(html) {
    this.e.innerHTML = html;
    this.n = Array.from(this.e.childNodes);
  }

  p(html) {
    this.d();
    this.u(html);
    this.m(this.t, this.a);
  }

  d() {
    this.n.forEach(detach);
  }

}

exports.HtmlTag = HtmlTag;
const active_docs = new Set();
let active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);

  return hash >>> 0;
}

function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = '{\n';

  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
  }

  const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
  const name = `__svelte_${hash(rule)}_${uid}`;
  const doc = node.ownerDocument;
  active_docs.add(doc);
  const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
  const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});

  if (!current_rules[name]) {
    current_rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }

  const animation = node.style.animation || '';
  node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}

function delete_rule(node, name) {
  const previous = (node.style.animation || '').split(', ');
  const next = previous.filter(name ? anim => anim.indexOf(name) < 0 // remove specific animation
  : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
  );
  const deleted = previous.length - next.length;

  if (deleted) {
    node.style.animation = next.join(', ');
    active -= deleted;
    if (!active) clear_rules();
  }
}

function clear_rules() {
  raf(() => {
    if (active) return;
    active_docs.forEach(doc => {
      const stylesheet = doc.__svelte_stylesheet;
      let i = stylesheet.cssRules.length;

      while (i--) stylesheet.deleteRule(i);

      doc.__svelte_rules = {};
    });
    active_docs.clear();
  });
}

function create_animation(node, from, fn, params) {
  if (!from) return noop;
  const to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;
  const {
    delay = 0,
    duration = 300,
    easing = identity,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay,
    // @ts-ignore todo:
    end = start_time + duration,
    tick = noop,
    css
  } = fn(node, {
    from,
    to
  }, params);
  let running = true;
  let started = false;
  let name;

  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }

    if (!delay) {
      started = true;
    }
  }

  function stop() {
    if (css) delete_rule(node, name);
    running = false;
  }

  loop(now => {
    if (!started && now >= start_time) {
      started = true;
    }

    if (started && now >= end) {
      tick(1, 0);
      stop();
    }

    if (!running) {
      return false;
    }

    if (started) {
      const p = now - start_time;
      const t = 0 + 1 * easing(p / duration);
      tick(t, 1 - t);
    }

    return true;
  });
  start();
  tick(0, 1);
  return stop;
}

function fix_position(node) {
  const style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    const {
      width,
      height
    } = style;
    const a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a);
  }
}

function add_transform(node, a) {
  const b = node.getBoundingClientRect();

  if (a.left !== b.left || a.top !== b.top) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
  }
}

let current_component;
exports.current_component = current_component;

function set_current_component(component) {
  exports.current_component = current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error(`Function called outside component initialization`);
  return current_component;
}

function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      const event = custom_event(type, detail);
      callbacks.slice().forEach(fn => {
        fn.call(component, event);
      });
    }
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
} // TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism


function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];

  if (callbacks) {
    callbacks.slice().forEach(fn => fn(event));
  }
}

const dirty_components = [];
exports.dirty_components = dirty_components;
const intros = {
  enabled: false
};
exports.intros = intros;
const binding_callbacks = [];
exports.binding_callbacks = binding_callbacks;
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function tick() {
  schedule_update();
  return resolved_promise;
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}

let flushing = false;
const seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    dirty_components.length = 0;

    while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

let promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}

const outroing = new Set();
let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

const null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  let config = fn(node, params);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, 'start'));
    task = loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  let started = false;
  return {
    start() {
      if (started) return;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },

    invalidate() {
      started = false;
    },

    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }

  };
}

function create_out_transition(node, fn, params) {
  let config = fn(node, params);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, 'start'));
    loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(() => {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }

  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  let config = fn(node, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(() => dispatch(node, b, 'start'));
      loop(now => {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            const p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },

    end() {
      clear_animation();
      running_program = pending_program = null;
    }

  };
}

function handle_promise(promise, info) {
  const token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = value;
    let child_ctx = info.ctx;

    if (key !== undefined) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }

    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block, i) => {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, () => {
              info.blocks[i] = null;
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;

    if (needs_flush) {
      flush();
    }
  }

  if (is_promise(promise)) {
    const current_component = get_current_component();
    promise.then(value => {
      set_current_component(current_component);
      update(info.then, 1, info.value, value);
      set_current_component(null);
    }, error => {
      set_current_component(current_component);
      update(info.catch, 2, info.error, error);
      set_current_component(null);
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = promise;
  }
}

const globals = typeof window !== 'undefined' ? window : global;
exports.globals = globals;

function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}

function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}

function fix_and_destroy_block(block, lookup) {
  block.f();
  destroy_block(block, lookup);
}

function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};

  while (i--) old_indexes[old_blocks[i].key] = i;

  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  i = n;

  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  const will_move = new Set();
  const did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next, lookup.has(block.key));
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
  }

  while (n) insert(new_blocks[n - 1]);

  return new_blocks;
}

function validate_each_keys(ctx, list, get_context, get_key) {
  const keys = new Set();

  for (let i = 0; i < list.length; i++) {
    const key = get_key(get_context(ctx, list, i));

    if (keys.has(key)) {
      throw new Error(`Cannot have duplicate keys in a keyed each`);
    }

    keys.add(key);
  }
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;

  while (i--) {
    const o = levels[i];
    const n = updates[i];

    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html


const boolean_attributes = new Set(['allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected']);
const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u; // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

exports.invalid_attribute_name_character = invalid_attribute_name_character;

function spread(args, classes_to_add) {
  const attributes = Object.assign({}, ...args);

  if (classes_to_add) {
    if (attributes.class == null) {
      attributes.class = classes_to_add;
    } else {
      attributes.class += ' ' + classes_to_add;
    }
  }

  let str = '';
  Object.keys(attributes).forEach(name => {
    if (invalid_attribute_name_character.test(name)) return;
    const value = attributes[name];
    if (value === true) str += " " + name;else if (boolean_attributes.has(name.toLowerCase())) {
      if (value) str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${String(value).replace(/"/g, '&#34;').replace(/'/g, '&#39;')}"`;
    }
  });
  return str;
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
exports.escaped = escaped;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, fn) {
  let str = '';

  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }

  return str;
}

const missing_component = {
  $$render: () => ''
};
exports.missing_component = missing_component;

function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function debug(file, line, column, values) {
  console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console

  console.log(values); // eslint-disable-line no-console

  return '';
}

let on_destroy;

function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : []),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({
      $$
    });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }

  return {
    render: (props = {}, options = {}) => {
      on_destroy = [];
      const result = {
        title: '',
        head: '',
        css: new Set()
      };
      const html = $$render(result, props, {}, options);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map(css => css.code).join('\n'),
          map: null // TODO

        },
        head: result.title + result.head
      };
    },
    $$render
  };
}

function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value) return '';
  return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

function add_classes(classes) {
  return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
  const index = component.$$.props[name];

  if (index !== undefined) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor) {
  const {
    fragment,
    on_mount,
    on_destroy,
    after_update
  } = component.$$;
  fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

  add_render_callback(() => {
    const new_on_destroy = on_mount.map(run).filter(is_function);

    if (on_destroy) {
      on_destroy.push(...new_on_destroy);
    } else {
      // Edge case - component was destroyed immediately,
      // most likely as a result of a binding initialising
      run_all(new_on_destroy);
    }

    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  const $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const prop_values = options.props || {};
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty
  };
  let ready = false;
  $$.ctx = instance ? instance(component, prop_values, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if ($$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }

  set_current_component(parent_component);
}

let SvelteElement;
exports.SvelteElement = SvelteElement;

if (typeof HTMLElement === 'function') {
  exports.SvelteElement = SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
    }

    connectedCallback() {
      // @ts-ignore todo: improve typings
      for (const key in this.$$.slotted) {
        // @ts-ignore todo: improve typings
        this.appendChild(this.$$.slotted[key]);
      }
    }

    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }

    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }

    $on(type, callback) {
      // TODO should this delegate to addEventListener?
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }

    $set() {// overridden by instance, if it has props
    }

  };
}

class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }

  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }

  $set() {// overridden by instance, if it has props
  }

}

exports.SvelteComponent = SvelteComponent;

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({
    version: '3.20.1'
  }, detail)));
}

function append_dev(target, node) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node
  });
  append(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node,
    anchor
  });
  insert(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev("SvelteDOMRemove", {
    node
  });
  detach(node);
}

function detach_between_dev(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    detach_dev(before.nextSibling);
  }
}

function detach_before_dev(after) {
  while (after.previousSibling) {
    detach_dev(after.previousSibling);
  }
}

function detach_after_dev(before) {
  while (before.nextSibling) {
    detach_dev(before.nextSibling);
  }
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev("SvelteDOMAddEventListener", {
    node,
    event,
    handler,
    modifiers
  });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev("SvelteDOMRemoveEventListener", {
      node,
      event,
      handler,
      modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
    node,
    attribute
  });else dispatch_dev("SvelteDOMSetAttribute", {
    node,
    attribute,
    value
  });
}

function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev("SvelteDOMSetProperty", {
    node,
    property,
    value
  });
}

function dataset_dev(node, property, value) {
  node.dataset[property] = value;
  dispatch_dev("SvelteDOMSetDataset", {
    node,
    property,
    value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.data === data) return;
  dispatch_dev("SvelteDOMSetData", {
    node: text,
    data
  });
  text.data = data;
}

function validate_each_argument(arg) {
  if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
    let msg = '{#each} only iterates over array-like objects.';

    if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
      msg += ' You can use a spread to convert this iterable into an array.';
    }

    throw new Error(msg);
  }
}

function validate_slots(name, slot, keys) {
  for (const slot_key of Object.keys(slot)) {
    if (!~keys.indexOf(slot_key)) {
      console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
    }
  }
}

class SvelteComponentDev extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error(`'target' is a required option`);
    }

    super();
  }

  $destroy() {
    super.$destroy();

    this.$destroy = () => {
      console.warn(`Component was already destroyed`); // eslint-disable-line no-console
    };
  }

  $capture_state() {}

  $inject_state() {}

}

exports.SvelteComponentDev = SvelteComponentDev;

function loop_guard(timeout) {
  const start = Date.now();
  return () => {
    if (Date.now() - start > timeout) {
      throw new Error(`Infinite loop detected`);
    }
  };
}
},{}],"../node_modules/svelte/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SvelteComponent", {
  enumerable: true,
  get: function () {
    return _internal.SvelteComponentDev;
  }
});
Object.defineProperty(exports, "afterUpdate", {
  enumerable: true,
  get: function () {
    return _internal.afterUpdate;
  }
});
Object.defineProperty(exports, "beforeUpdate", {
  enumerable: true,
  get: function () {
    return _internal.beforeUpdate;
  }
});
Object.defineProperty(exports, "createEventDispatcher", {
  enumerable: true,
  get: function () {
    return _internal.createEventDispatcher;
  }
});
Object.defineProperty(exports, "getContext", {
  enumerable: true,
  get: function () {
    return _internal.getContext;
  }
});
Object.defineProperty(exports, "onDestroy", {
  enumerable: true,
  get: function () {
    return _internal.onDestroy;
  }
});
Object.defineProperty(exports, "onMount", {
  enumerable: true,
  get: function () {
    return _internal.onMount;
  }
});
Object.defineProperty(exports, "setContext", {
  enumerable: true,
  get: function () {
    return _internal.setContext;
  }
});
Object.defineProperty(exports, "tick", {
  enumerable: true,
  get: function () {
    return _internal.tick;
  }
});

var _internal = require("./internal");
},{"./internal":"../node_modules/svelte/internal/index.mjs"}],"../node_modules/svelte/store/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.derived = derived;
exports.readable = readable;
exports.writable = writable;
Object.defineProperty(exports, "get", {
  enumerable: true,
  get: function () {
    return _internal.get_store_value;
  }
});

var _internal = require("../internal");

const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */

function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */


function writable(value, start = _internal.noop) {
  let stop;
  const subscribers = [];

  function set(new_value) {
    if ((0, _internal.safe_not_equal)(value, new_value)) {
      value = new_value;

      if (stop) {
        // store is ready
        const run_queue = !subscriber_queue.length;

        for (let i = 0; i < subscribers.length; i += 1) {
          const s = subscribers[i];
          s[1]();
          subscriber_queue.push(s, value);
        }

        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }

          subscriber_queue.length = 0;
        }
      }
    }
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run, invalidate = _internal.noop) {
    const subscriber = [run, invalidate];
    subscribers.push(subscriber);

    if (subscribers.length === 1) {
      stop = start(set) || _internal.noop;
    }

    run(value);
    return () => {
      const index = subscribers.indexOf(subscriber);

      if (index !== -1) {
        subscribers.splice(index, 1);
      }

      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }

  return {
    set,
    update,
    subscribe
  };
}

function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, set => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = _internal.noop;

    const sync = () => {
      if (pending) {
        return;
      }

      cleanup();
      const result = fn(single ? values[0] : values, set);

      if (auto) {
        set(result);
      } else {
        cleanup = (0, _internal.is_function)(result) ? result : _internal.noop;
      }
    };

    const unsubscribers = stores_array.map((store, i) => (0, _internal.subscribe)(store, value => {
      values[i] = value;
      pending &= ~(1 << i);

      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      (0, _internal.run_all)(unsubscribers);
      cleanup();
    };
  });
}
},{"../internal":"../node_modules/svelte/internal/index.mjs"}],"../node_modules/svelte-routing/src/contexts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROUTER = exports.LOCATION = void 0;
const LOCATION = {};
exports.LOCATION = LOCATION;
const ROUTER = {};
exports.ROUTER = ROUTER;
},{}],"../node_modules/svelte-routing/src/history.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHistory = createHistory;
exports.createMemorySource = createMemorySource;
exports.navigate = exports.globalHistory = void 0;

/**
 * Adapted from https://github.com/reach/router/blob/b60e6dd781d5d3a4bdaaf4de665649c0f6a7e78d/src/lib/history.js
 *
 * https://github.com/reach/router/blob/master/LICENSE
 * */
function getLocation(source) {
  return { ...source.location,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
}

function createHistory(source, options) {
  const listeners = [];
  let location = getLocation(source);
  return {
    get location() {
      return location;
    },

    listen(listener) {
      listeners.push(listener);

      const popstateListener = () => {
        location = getLocation(source);
        listener({
          location,
          action: "POP"
        });
      };

      source.addEventListener("popstate", popstateListener);
      return () => {
        source.removeEventListener("popstate", popstateListener);
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    },

    navigate(to, {
      state,
      replace = false
    } = {}) {
      state = { ...state,
        key: Date.now() + ""
      }; // try...catch iOS Safari limits to 100 pushState calls

      try {
        if (replace) {
          source.history.replaceState(state, null, to);
        } else {
          source.history.pushState(state, null, to);
        }
      } catch (e) {
        source.location[replace ? "replace" : "assign"](to);
      }

      location = getLocation(source);
      listeners.forEach(listener => listener({
        location,
        action: "PUSH"
      }));
    }

  };
} // Stores history entries in memory for testing or other platforms like Native


function createMemorySource(initialPathname = "/") {
  let index = 0;
  const stack = [{
    pathname: initialPathname,
    search: ""
  }];
  const states = [];
  return {
    get location() {
      return stack[index];
    },

    addEventListener(name, fn) {},

    removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },

      get index() {
        return index;
      },

      get state() {
        return states[index];
      },

      pushState(state, _, uri) {
        const [pathname, search = ""] = uri.split("?");
        index++;
        stack.push({
          pathname,
          search
        });
        states.push(state);
      },

      replaceState(state, _, uri) {
        const [pathname, search = ""] = uri.split("?");
        stack[index] = {
          pathname,
          search
        };
        states[index] = state;
      }

    }
  };
} // Global history uses window.history as the source if available,
// otherwise a memory history


const canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
const globalHistory = createHistory(canUseDOM ? window : createMemorySource());
exports.globalHistory = globalHistory;
const {
  navigate
} = globalHistory;
exports.navigate = navigate;
},{}],"../node_modules/svelte-routing/src/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startsWith = startsWith;
exports.stripSlashes = stripSlashes;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.combinePaths = combinePaths;
exports.shouldNavigate = shouldNavigate;
exports.hostMatches = hostMatches;

/**
 * Adapted from https://github.com/reach/router/blob/b60e6dd781d5d3a4bdaaf4de665649c0f6a7e78d/src/lib/utils.js
 *
 * https://github.com/reach/router/blob/master/LICENSE
 * */
const paramRe = /^:(.+)/;
const SEGMENT_POINTS = 4;
const STATIC_POINTS = 3;
const DYNAMIC_POINTS = 2;
const SPLAT_PENALTY = 1;
const ROOT_POINTS = 1;
/**
 * Check if `string` starts with `search`
 * @param {string} string
 * @param {string} search
 * @return {boolean}
 */

function startsWith(string, search) {
  return string.substr(0, search.length) === search;
}
/**
 * Check if `segment` is a root segment
 * @param {string} segment
 * @return {boolean}
 */


function isRootSegment(segment) {
  return segment === "";
}
/**
 * Check if `segment` is a dynamic segment
 * @param {string} segment
 * @return {boolean}
 */


function isDynamic(segment) {
  return paramRe.test(segment);
}
/**
 * Check if `segment` is a splat
 * @param {string} segment
 * @return {boolean}
 */


function isSplat(segment) {
  return segment[0] === "*";
}
/**
 * Split up the URI into segments delimited by `/`
 * @param {string} uri
 * @return {string[]}
 */


function segmentize(uri) {
  return uri // Strip starting/ending `/`
  .replace(/(^\/+|\/+$)/g, "").split("/");
}
/**
 * Strip `str` of potential start and end `/`
 * @param {string} str
 * @return {string}
 */


function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
}
/**
 * Score a route depending on how its individual segments look
 * @param {object} route
 * @param {number} index
 * @return {object}
 */


function rankRoute(route, index) {
  const score = route.default ? 0 : segmentize(route.path).reduce((score, segment) => {
    score += SEGMENT_POINTS;

    if (isRootSegment(segment)) {
      score += ROOT_POINTS;
    } else if (isDynamic(segment)) {
      score += DYNAMIC_POINTS;
    } else if (isSplat(segment)) {
      score -= SEGMENT_POINTS + SPLAT_PENALTY;
    } else {
      score += STATIC_POINTS;
    }

    return score;
  }, 0);
  return {
    route,
    score,
    index
  };
}
/**
 * Give a score to all routes and sort them on that
 * @param {object[]} routes
 * @return {object[]}
 */


function rankRoutes(routes) {
  return routes.map(rankRoute) // If two routes have the exact same score, we go by index instead
  .sort((a, b) => a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index);
}
/**
 * Ranks and picks the best route to match. Each segment gets the highest
 * amount of points, then the type of segment gets an additional amount of
 * points where
 *
 *  static > dynamic > splat > root
 *
 * This way we don't have to worry about the order of our routes, let the
 * computers do it.
 *
 * A route looks like this
 *
 *  { path, default, value }
 *
 * And a returned match looks like:
 *
 *  { route, params, uri }
 *
 * @param {object[]} routes
 * @param {string} uri
 * @return {?object}
 */


function pick(routes, uri) {
  let match;
  let default_;
  const [uriPathname] = uri.split("?");
  const uriSegments = segmentize(uriPathname);
  const isRootUri = uriSegments[0] === "";
  const ranked = rankRoutes(routes);

  for (let i = 0, l = ranked.length; i < l; i++) {
    const route = ranked[i].route;
    let missed = false;

    if (route.default) {
      default_ = {
        route,
        params: {},
        uri
      };
      continue;
    }

    const routeSegments = segmentize(route.path);
    const params = {};
    const max = Math.max(uriSegments.length, routeSegments.length);
    let index = 0;

    for (; index < max; index++) {
      const routeSegment = routeSegments[index];
      const uriSegment = uriSegments[index];

      if (routeSegment !== undefined && isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/* or /files/*splatname
        const splatName = routeSegment === "*" ? "*" : routeSegment.slice(1);
        params[splatName] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      let dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        const value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route,
        params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
}
/**
 * Check if the `path` matches the `uri`.
 * @param {string} path
 * @param {string} uri
 * @return {?object}
 */


function match(route, uri) {
  return pick([route], uri);
}
/**
 * Add the query to the pathname if a query is given
 * @param {string} pathname
 * @param {string} [query]
 * @return {string}
 */


function addQuery(pathname, query) {
  return pathname + (query ? `?${query}` : "");
}
/**
 * Resolve URIs as though every path is a directory, no files. Relative URIs
 * in the browser can feel awkward because not only can you be "in a directory",
 * you can be "at a file", too. For example:
 *
 *  browserSpecResolve('foo', '/bar/') => /bar/foo
 *  browserSpecResolve('foo', '/bar') => /foo
 *
 * But on the command line of a file system, it's not as complicated. You can't
 * `cd` from a file, only directories. This way, links have to know less about
 * their current path. To go deeper you can do this:
 *
 *  <Link to="deeper"/>
 *  // instead of
 *  <Link to=`{${props.uri}/deeper}`/>
 *
 * Just like `cd`, if you want to go deeper from the command line, you do this:
 *
 *  cd deeper
 *  # not
 *  cd $(pwd)/deeper
 *
 * By treating every path as a directory, linking to relative paths should
 * require less contextual information and (fingers crossed) be more intuitive.
 * @param {string} to
 * @param {string} base
 * @return {string}
 */


function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  const [toPathname, toQuery] = to.split("?");
  const [basePathname] = base.split("?");
  const toSegments = segmentize(toPathname);
  const baseSegments = segmentize(basePathname); // ?a=b, /users?b=c => /users?a=b

  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  } // profile, /users/789 => /users/789/profile


  if (!startsWith(toSegments[0], ".")) {
    const pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  } // ./       , /users/123 => /users/123
  // ../      , /users/123 => /users
  // ../..    , /users/123 => /
  // ../../one, /a/b/c/d   => /a/b/one
  // .././one , /a/b/c/d   => /a/b/c/one


  const allSegments = baseSegments.concat(toSegments);
  const segments = [];
  allSegments.forEach(segment => {
    if (segment === "..") {
      segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return addQuery("/" + segments.join("/"), toQuery);
}
/**
 * Combines the `basepath` and the `path` into one path.
 * @param {string} basepath
 * @param {string} path
 */


function combinePaths(basepath, path) {
  return `${stripSlashes(path === "/" ? basepath : `${stripSlashes(basepath)}/${stripSlashes(path)}`)}/`;
}
/**
 * Decides whether a given `event` should result in a navigation or not.
 * @param {object} event
 */


function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function hostMatches(anchor) {
  const host = location.host;
  return anchor.host == host || // svelte seems to kill anchor.host value in ie11, so fall back to checking href
  anchor.href.indexOf(`https://${host}`) === 0 || anchor.href.indexOf(`http://${host}`) === 0;
}
},{}],"../node_modules/svelte-routing/src/Router.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

var _store = require("svelte/store");

var _contexts = require("./contexts.js");

var _history = require("./history.js");

var _utils = require("./utils.js");

/* ../node_modules/svelte-routing/src/Router.svelte generated by Svelte v3.20.1 */
const file = "../node_modules/svelte-routing/src/Router.svelte";

function create_fragment(ctx) {
  let current;
  const default_slot_template =
  /*$$slots*/
  ctx[16].default;
  const default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[15], null);
  const block = {
    c: function create() {
      if (default_slot) default_slot.c();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, [dirty]) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        32768) {
          default_slot.p((0, _internal.get_slot_context)(default_slot_template, ctx,
          /*$$scope*/
          ctx[15], null), (0, _internal.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[15], dirty, null));
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot) default_slot.d(detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let $base;
  let $location;
  let $routes;
  let {
    basepath = "/"
  } = $$props;
  let {
    url = null
  } = $$props;
  const locationContext = (0, _svelte.getContext)(_contexts.LOCATION);
  const routerContext = (0, _svelte.getContext)(_contexts.ROUTER);
  const routes = (0, _store.writable)([]);
  (0, _internal.validate_store)(routes, "routes");
  (0, _internal.component_subscribe)($$self, routes, value => $$invalidate(8, $routes = value));
  const activeRoute = (0, _store.writable)(null);
  let hasActiveRoute = false; // Used in SSR to synchronously set that a Route is active.
  // If locationContext is not set, this is the topmost Router in the tree.
  // If the `url` prop is given we force the location to it.

  const location = locationContext || (0, _store.writable)(url ? {
    pathname: url
  } : _history.globalHistory.location);
  (0, _internal.validate_store)(location, "location");
  (0, _internal.component_subscribe)($$self, location, value => $$invalidate(7, $location = value)); // If routerContext is set, the routerBase of the parent Router
  // will be the base for this Router's descendants.
  // If routerContext is not set, the path and resolved uri will both
  // have the value of the basepath prop.

  const base = routerContext ? routerContext.routerBase : (0, _store.writable)({
    path: basepath,
    uri: basepath
  });
  (0, _internal.validate_store)(base, "base");
  (0, _internal.component_subscribe)($$self, base, value => $$invalidate(6, $base = value));
  const routerBase = (0, _store.derived)([base, activeRoute], ([base, activeRoute]) => {
    // If there is no activeRoute, the routerBase will be identical to the base.
    if (activeRoute === null) {
      return base;
    }

    const {
      path: basepath
    } = base;
    const {
      route,
      uri
    } = activeRoute; // Remove the potential /* or /*splatname from
    // the end of the child Routes relative paths.

    const path = route.default ? basepath : route.path.replace(/\*.*$/, "");
    return {
      path,
      uri
    };
  });

  function registerRoute(route) {
    const {
      path: basepath
    } = $base;
    let {
      path
    } = route; // We store the original path in the _path property so we can reuse
    // it when the basepath changes. The only thing that matters is that
    // the route reference is intact, so mutation is fine.

    route._path = path;
    route.path = (0, _utils.combinePaths)(basepath, path);

    if (typeof window === "undefined") {
      // In SSR we should set the activeRoute immediately if it is a match.
      // If there are more Routes being registered after a match is found,
      // we just skip them.
      if (hasActiveRoute) {
        return;
      }

      const matchingRoute = (0, _utils.match)(route, $location.pathname);

      if (matchingRoute) {
        activeRoute.set(matchingRoute);
        hasActiveRoute = true;
      }
    } else {
      routes.update(rs => {
        rs.push(route);
        return rs;
      });
    }
  }

  function unregisterRoute(route) {
    routes.update(rs => {
      const index = rs.indexOf(route);
      rs.splice(index, 1);
      return rs;
    });
  }

  if (!locationContext) {
    // The topmost Router in the tree is responsible for updating
    // the location store and supplying it through context.
    (0, _svelte.onMount)(() => {
      const unlisten = _history.globalHistory.listen(history => {
        location.set(history.location);
      });

      return unlisten;
    });
    (0, _svelte.setContext)(_contexts.LOCATION, location);
  }

  (0, _svelte.setContext)(_contexts.ROUTER, {
    activeRoute,
    base,
    routerBase,
    registerRoute,
    unregisterRoute
  });
  const writable_props = ["basepath", "url"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Router> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("Router", $$slots, ['default']);

  $$self.$set = $$props => {
    if ("basepath" in $$props) $$invalidate(3, basepath = $$props.basepath);
    if ("url" in $$props) $$invalidate(4, url = $$props.url);
    if ("$$scope" in $$props) $$invalidate(15, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    getContext: _svelte.getContext,
    setContext: _svelte.setContext,
    onMount: _svelte.onMount,
    writable: _store.writable,
    derived: _store.derived,
    LOCATION: _contexts.LOCATION,
    ROUTER: _contexts.ROUTER,
    globalHistory: _history.globalHistory,
    pick: _utils.pick,
    match: _utils.match,
    stripSlashes: _utils.stripSlashes,
    combinePaths: _utils.combinePaths,
    basepath,
    url,
    locationContext,
    routerContext,
    routes,
    activeRoute,
    hasActiveRoute,
    location,
    base,
    routerBase,
    registerRoute,
    unregisterRoute,
    $base,
    $location,
    $routes
  });

  $$self.$inject_state = $$props => {
    if ("basepath" in $$props) $$invalidate(3, basepath = $$props.basepath);
    if ("url" in $$props) $$invalidate(4, url = $$props.url);
    if ("hasActiveRoute" in $$props) hasActiveRoute = $$props.hasActiveRoute;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*$base*/
    64) {
      // This reactive statement will update all the Routes' path when
      // the basepath changes.
      $: {
        const {
          path: basepath
        } = $base;
        routes.update(rs => {
          rs.forEach(r => r.path = (0, _utils.combinePaths)(basepath, r._path));
          return rs;
        });
      }
    }

    if ($$self.$$.dirty &
    /*$routes, $location*/
    384) {
      // This reactive statement will be run when the Router is created
      // when there are no Routes and then again the following tick, so it
      // will not find an active Route in SSR and in the browser it will only
      // pick an active Route after all Routes have been registered.
      $: {
        const bestMatch = (0, _utils.pick)($routes, $location.pathname);
        activeRoute.set(bestMatch);
      }
    }
  };

  return [routes, location, base, basepath, url, hasActiveRoute, $base, $location, $routes, locationContext, routerContext, activeRoute, routerBase, registerRoute, unregisterRoute, $$scope, $$slots];
}

class Router extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      basepath: 3,
      url: 4
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Router",
      options,
      id: create_fragment.name
    });
  }

  get basepath() {
    throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set basepath(value) {
    throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get url() {
    throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set url(value) {
    throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = Router;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","svelte/store":"../node_modules/svelte/store/index.mjs","./contexts.js":"../node_modules/svelte-routing/src/contexts.js","./history.js":"../node_modules/svelte-routing/src/history.js","./utils.js":"../node_modules/svelte-routing/src/utils.js"}],"../node_modules/svelte-routing/src/Route.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

var _contexts = require("./contexts.js");

/* ../node_modules/svelte-routing/src/Route.svelte generated by Svelte v3.20.1 */
const file = "../node_modules/svelte-routing/src/Route.svelte";

const get_default_slot_changes = dirty => ({
  params: dirty &
  /*routeParams*/
  2,
  location: dirty &
  /*$location*/
  16
});

const get_default_slot_context = ctx => ({
  params:
  /*routeParams*/
  ctx[1],
  location:
  /*$location*/
  ctx[4]
}); // (40:0) {#if $activeRoute !== null && $activeRoute.route === route}


function create_if_block(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_1, create_else_block];
  const if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*component*/
    ctx[0] !== null) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      if_block.c();
      if_block_anchor = (0, _internal.empty)();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      (0, _internal.insert_dev)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        (0, _internal.check_outros)();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        (0, _internal.transition_in)(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) (0, _internal.detach_dev)(if_block_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(40:0) {#if $activeRoute !== null && $activeRoute.route === route}",
    ctx
  });
  return block;
} // (43:2) {:else}


function create_else_block(ctx) {
  let current;
  const default_slot_template =
  /*$$slots*/
  ctx[13].default;
  const default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[12], get_default_slot_context);
  const block = {
    c: function create() {
      if (default_slot) default_slot.c();
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope, routeParams, $location*/
        4114) {
          default_slot.p((0, _internal.get_slot_context)(default_slot_template, ctx,
          /*$$scope*/
          ctx[12], get_default_slot_context), (0, _internal.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[12], dirty, get_default_slot_changes));
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot) default_slot.d(detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(43:2) {:else}",
    ctx
  });
  return block;
} // (41:2) {#if component !== null}


function create_if_block_1(ctx) {
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [{
    location:
    /*$location*/
    ctx[4]
  },
  /*routeParams*/
  ctx[1],
  /*routeProps*/
  ctx[2]];
  var switch_value =
  /*component*/
  ctx[0];

  function switch_props(ctx) {
    let switch_instance_props = {};

    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = (0, _internal.assign)(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props,
      $$inline: true
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props(ctx));
  }

  const block = {
    c: function create() {
      if (switch_instance) (0, _internal.create_component)(switch_instance.$$.fragment);
      switch_instance_anchor = (0, _internal.empty)();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        (0, _internal.mount_component)(switch_instance, target, anchor);
      }

      (0, _internal.insert_dev)(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      const switch_instance_changes = dirty &
      /*$location, routeParams, routeProps*/
      22 ? (0, _internal.get_spread_update)(switch_instance_spread_levels, [dirty &
      /*$location*/
      16 && {
        location:
        /*$location*/
        ctx[4]
      }, dirty &
      /*routeParams*/
      2 && (0, _internal.get_spread_object)(
      /*routeParams*/
      ctx[1]), dirty &
      /*routeProps*/
      4 && (0, _internal.get_spread_object)(
      /*routeProps*/
      ctx[2])]) : {};

      if (switch_value !== (switch_value =
      /*component*/
      ctx[0])) {
        if (switch_instance) {
          (0, _internal.group_outros)();
          const old_component = switch_instance;
          (0, _internal.transition_out)(old_component.$$.fragment, 1, 0, () => {
            (0, _internal.destroy_component)(old_component, 1);
          });
          (0, _internal.check_outros)();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          (0, _internal.create_component)(switch_instance.$$.fragment);
          (0, _internal.transition_in)(switch_instance.$$.fragment, 1);
          (0, _internal.mount_component)(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) (0, _internal.transition_in)(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) (0, _internal.transition_out)(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(switch_instance_anchor);
      if (switch_instance) (0, _internal.destroy_component)(switch_instance, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(41:2) {#if component !== null}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let if_block_anchor;
  let current;
  let if_block =
  /*$activeRoute*/
  ctx[3] !== null &&
  /*$activeRoute*/
  ctx[3].route ===
  /*route*/
  ctx[7] && create_if_block(ctx);
  const block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = (0, _internal.empty)();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      (0, _internal.insert_dev)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, [dirty]) {
      if (
      /*$activeRoute*/
      ctx[3] !== null &&
      /*$activeRoute*/
      ctx[3].route ===
      /*route*/
      ctx[7]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          (0, _internal.transition_in)(if_block, 1);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          (0, _internal.transition_in)(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block, 1, 1, () => {
          if_block = null;
        });
        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) (0, _internal.detach_dev)(if_block_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let $activeRoute;
  let $location;
  let {
    path = ""
  } = $$props;
  let {
    component = null
  } = $$props;
  const {
    registerRoute,
    unregisterRoute,
    activeRoute
  } = (0, _svelte.getContext)(_contexts.ROUTER);
  (0, _internal.validate_store)(activeRoute, "activeRoute");
  (0, _internal.component_subscribe)($$self, activeRoute, value => $$invalidate(3, $activeRoute = value));
  const location = (0, _svelte.getContext)(_contexts.LOCATION);
  (0, _internal.validate_store)(location, "location");
  (0, _internal.component_subscribe)($$self, location, value => $$invalidate(4, $location = value));
  const route = {
    path,
    // If no path prop is given, this Route will act as the default Route
    // that is rendered if no other Route in the Router is a match.
    default: path === ""
  };
  let routeParams = {};
  let routeProps = {};
  registerRoute(route); // There is no need to unregister Routes in SSR since it will all be
  // thrown away anyway.

  if (typeof window !== "undefined") {
    (0, _svelte.onDestroy)(() => {
      unregisterRoute(route);
    });
  }

  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("Route", $$slots, ['default']);

  $$self.$set = $$new_props => {
    $$invalidate(11, $$props = (0, _internal.assign)((0, _internal.assign)({}, $$props), (0, _internal.exclude_internal_props)($$new_props)));
    if ("path" in $$new_props) $$invalidate(8, path = $$new_props.path);
    if ("component" in $$new_props) $$invalidate(0, component = $$new_props.component);
    if ("$$scope" in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = () => ({
    getContext: _svelte.getContext,
    onDestroy: _svelte.onDestroy,
    ROUTER: _contexts.ROUTER,
    LOCATION: _contexts.LOCATION,
    path,
    component,
    registerRoute,
    unregisterRoute,
    activeRoute,
    location,
    route,
    routeParams,
    routeProps,
    $activeRoute,
    $location
  });

  $$self.$inject_state = $$new_props => {
    $$invalidate(11, $$props = (0, _internal.assign)((0, _internal.assign)({}, $$props), $$new_props));
    if ("path" in $$props) $$invalidate(8, path = $$new_props.path);
    if ("component" in $$props) $$invalidate(0, component = $$new_props.component);
    if ("routeParams" in $$props) $$invalidate(1, routeParams = $$new_props.routeParams);
    if ("routeProps" in $$props) $$invalidate(2, routeProps = $$new_props.routeProps);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*$activeRoute*/
    8) {
      $: if ($activeRoute && $activeRoute.route === route) {
        $$invalidate(1, routeParams = $activeRoute.params);
      }
    }

    $: {
      const {
        path,
        component,
        ...rest
      } = $$props;
      $$invalidate(2, routeProps = rest);
    }
  };

  $$props = (0, _internal.exclude_internal_props)($$props);
  return [component, routeParams, routeProps, $activeRoute, $location, activeRoute, location, route, path, registerRoute, unregisterRoute, $$props, $$scope, $$slots];
}

class Route extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      path: 8,
      component: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Route",
      options,
      id: create_fragment.name
    });
  }

  get path() {
    throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set path(value) {
    throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get component() {
    throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set component(value) {
    throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = Route;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","./contexts.js":"../node_modules/svelte-routing/src/contexts.js"}],"../node_modules/svelte-routing/src/Link.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

var _contexts = require("./contexts.js");

var _history = require("./history.js");

var _utils = require("./utils.js");

/* ../node_modules/svelte-routing/src/Link.svelte generated by Svelte v3.20.1 */
const file = "../node_modules/svelte-routing/src/Link.svelte";

function create_fragment(ctx) {
  let a;
  let current;
  let dispose;
  const default_slot_template =
  /*$$slots*/
  ctx[16].default;
  const default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[15], null);
  let a_levels = [{
    href:
    /*href*/
    ctx[0]
  }, {
    "aria-current":
    /*ariaCurrent*/
    ctx[2]
  },
  /*props*/
  ctx[1]];
  let a_data = {};

  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = (0, _internal.assign)(a_data, a_levels[i]);
  }

  const block = {
    c: function create() {
      a = (0, _internal.element)("a");
      if (default_slot) default_slot.c();
      (0, _internal.set_attributes)(a, a_data);
      (0, _internal.add_location)(a, file, 40, 0, 1249);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor, remount) {
      (0, _internal.insert_dev)(target, a, anchor);

      if (default_slot) {
        default_slot.m(a, null);
      }

      current = true;
      if (remount) dispose();
      dispose = (0, _internal.listen_dev)(a, "click",
      /*onClick*/
      ctx[5], false, false, false);
    },
    p: function update(ctx, [dirty]) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        32768) {
          default_slot.p((0, _internal.get_slot_context)(default_slot_template, ctx,
          /*$$scope*/
          ctx[15], null), (0, _internal.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[15], dirty, null));
        }
      }

      (0, _internal.set_attributes)(a, (0, _internal.get_spread_update)(a_levels, [dirty &
      /*href*/
      1 && {
        href:
        /*href*/
        ctx[0]
      }, dirty &
      /*ariaCurrent*/
      4 && {
        "aria-current":
        /*ariaCurrent*/
        ctx[2]
      }, dirty &
      /*props*/
      2 &&
      /*props*/
      ctx[1]]));
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(a);
      if (default_slot) default_slot.d(detaching);
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let $base;
  let $location;
  let {
    to = "#"
  } = $$props;
  let {
    replace = false
  } = $$props;
  let {
    state = {}
  } = $$props;
  let {
    getProps = () => ({})
  } = $$props;
  const {
    base
  } = (0, _svelte.getContext)(_contexts.ROUTER);
  (0, _internal.validate_store)(base, "base");
  (0, _internal.component_subscribe)($$self, base, value => $$invalidate(12, $base = value));
  const location = (0, _svelte.getContext)(_contexts.LOCATION);
  (0, _internal.validate_store)(location, "location");
  (0, _internal.component_subscribe)($$self, location, value => $$invalidate(13, $location = value));
  const dispatch = (0, _svelte.createEventDispatcher)();
  let href, isPartiallyCurrent, isCurrent, props;

  function onClick(event) {
    dispatch("click", event);

    if ((0, _utils.shouldNavigate)(event)) {
      event.preventDefault(); // Don't push another entry to the history stack when the user
      // clicks on a Link to the page they are currently on.

      const shouldReplace = $location.pathname === href || replace;
      (0, _history.navigate)(href, {
        state,
        replace: shouldReplace
      });
    }
  }

  const writable_props = ["to", "replace", "state", "getProps"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Link> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("Link", $$slots, ['default']);

  $$self.$set = $$props => {
    if ("to" in $$props) $$invalidate(6, to = $$props.to);
    if ("replace" in $$props) $$invalidate(7, replace = $$props.replace);
    if ("state" in $$props) $$invalidate(8, state = $$props.state);
    if ("getProps" in $$props) $$invalidate(9, getProps = $$props.getProps);
    if ("$$scope" in $$props) $$invalidate(15, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    getContext: _svelte.getContext,
    createEventDispatcher: _svelte.createEventDispatcher,
    ROUTER: _contexts.ROUTER,
    LOCATION: _contexts.LOCATION,
    navigate: _history.navigate,
    startsWith: _utils.startsWith,
    resolve: _utils.resolve,
    shouldNavigate: _utils.shouldNavigate,
    to,
    replace,
    state,
    getProps,
    base,
    location,
    dispatch,
    href,
    isPartiallyCurrent,
    isCurrent,
    props,
    onClick,
    $base,
    $location,
    ariaCurrent
  });

  $$self.$inject_state = $$props => {
    if ("to" in $$props) $$invalidate(6, to = $$props.to);
    if ("replace" in $$props) $$invalidate(7, replace = $$props.replace);
    if ("state" in $$props) $$invalidate(8, state = $$props.state);
    if ("getProps" in $$props) $$invalidate(9, getProps = $$props.getProps);
    if ("href" in $$props) $$invalidate(0, href = $$props.href);
    if ("isPartiallyCurrent" in $$props) $$invalidate(10, isPartiallyCurrent = $$props.isPartiallyCurrent);
    if ("isCurrent" in $$props) $$invalidate(11, isCurrent = $$props.isCurrent);
    if ("props" in $$props) $$invalidate(1, props = $$props.props);
    if ("ariaCurrent" in $$props) $$invalidate(2, ariaCurrent = $$props.ariaCurrent);
  };

  let ariaCurrent;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*to, $base*/
    4160) {
      $: $$invalidate(0, href = to === "/" ? $base.uri : (0, _utils.resolve)(to, $base.uri));
    }

    if ($$self.$$.dirty &
    /*$location, href*/
    8193) {
      $: $$invalidate(10, isPartiallyCurrent = (0, _utils.startsWith)($location.pathname, href));
    }

    if ($$self.$$.dirty &
    /*href, $location*/
    8193) {
      $: $$invalidate(11, isCurrent = href === $location.pathname);
    }

    if ($$self.$$.dirty &
    /*isCurrent*/
    2048) {
      $: $$invalidate(2, ariaCurrent = isCurrent ? "page" : undefined);
    }

    if ($$self.$$.dirty &
    /*getProps, $location, href, isPartiallyCurrent, isCurrent*/
    11777) {
      $: $$invalidate(1, props = getProps({
        location: $location,
        href,
        isPartiallyCurrent,
        isCurrent
      }));
    }
  };

  return [href, props, ariaCurrent, base, location, onClick, to, replace, state, getProps, isPartiallyCurrent, isCurrent, $base, $location, dispatch, $$scope, $$slots];
}

class Link extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      to: 6,
      replace: 7,
      state: 8,
      getProps: 9
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Link",
      options,
      id: create_fragment.name
    });
  }

  get to() {
    throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set to(value) {
    throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get replace() {
    throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set replace(value) {
    throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get state() {
    throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set state(value) {
    throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get getProps() {
    throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set getProps(value) {
    throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = Link;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","./contexts.js":"../node_modules/svelte-routing/src/contexts.js","./history.js":"../node_modules/svelte-routing/src/history.js","./utils.js":"../node_modules/svelte-routing/src/utils.js"}],"../node_modules/svelte-routing/src/actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.link = link;
exports.links = links;

var _history = require("./history.js");

var _utils = require("./utils.js");

/**
 * A link action that can be added to <a href=""> tags rather
 * than using the <Link> component.
 *
 * Example:
 * ```html
 * <a href="/post/{postId}" use:link>{post.title}</a>
 * ```
 */
function link(node) {
  function onClick(event) {
    const anchor = event.currentTarget;

    if (anchor.target === "" && (0, _utils.hostMatches)(anchor) && (0, _utils.shouldNavigate)(event)) {
      event.preventDefault();
      (0, _history.navigate)(anchor.pathname + anchor.search, {
        replace: anchor.hasAttribute("replace")
      });
    }
  }

  node.addEventListener("click", onClick);
  return {
    destroy() {
      node.removeEventListener("click", onClick);
    }

  };
}
/**
 * An action to be added at a root element of your application to
 * capture all relative links and push them onto the history stack.
 *
 * Example:
 * ```html
 * <div use:links>
 *   <Router>
 *     <Route path="/" component={Home} />
 *     <Route path="/p/:projectId/:docId?" component={ProjectScreen} />
 *     {#each projects as project}
 *       <a href="/p/{project.id}">{project.title}</a>
 *     {/each}
 *   </Router>
 * </div>
 * ```
 */


function links(node) {
  function findClosest(tagName, el) {
    while (el && el.tagName !== tagName) {
      el = el.parentNode;
    }

    return el;
  }

  function onClick(event) {
    const anchor = findClosest("A", event.target);

    if (anchor && anchor.target === "" && (0, _utils.hostMatches)(anchor) && (0, _utils.shouldNavigate)(event) && !anchor.hasAttribute("noroute")) {
      event.preventDefault();
      (0, _history.navigate)(anchor.pathname + anchor.search, {
        replace: anchor.hasAttribute("replace")
      });
    }
  }

  node.addEventListener("click", onClick);
  return {
    destroy() {
      node.removeEventListener("click", onClick);
    }

  };
}
},{"./history.js":"../node_modules/svelte-routing/src/history.js","./utils.js":"../node_modules/svelte-routing/src/utils.js"}],"../node_modules/svelte-routing/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Router", {
  enumerable: true,
  get: function () {
    return _Router.default;
  }
});
Object.defineProperty(exports, "Route", {
  enumerable: true,
  get: function () {
    return _Route.default;
  }
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function () {
    return _Link.default;
  }
});
Object.defineProperty(exports, "navigate", {
  enumerable: true,
  get: function () {
    return _history.navigate;
  }
});
Object.defineProperty(exports, "link", {
  enumerable: true,
  get: function () {
    return _actions.link;
  }
});
Object.defineProperty(exports, "links", {
  enumerable: true,
  get: function () {
    return _actions.links;
  }
});

var _Router = _interopRequireDefault(require("./Router.svelte"));

var _Route = _interopRequireDefault(require("./Route.svelte"));

var _Link = _interopRequireDefault(require("./Link.svelte"));

var _history = require("./history.js");

var _actions = require("./actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Router.svelte":"../node_modules/svelte-routing/src/Router.svelte","./Route.svelte":"../node_modules/svelte-routing/src/Route.svelte","./Link.svelte":"../node_modules/svelte-routing/src/Link.svelte","./history.js":"../node_modules/svelte-routing/src/history.js","./actions.js":"../node_modules/svelte-routing/src/actions.js"}],"client.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchTodos = exports.fetchUsers = void 0;

const fetchUsers = async ({
  page = 1,
  limit = 5
} = {}) => {
  return fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`).then(response => {
    let totalCount = response.headers.get('x-total-count');
    totalCount = parseInt(totalCount);
    let totalPages = totalCount / limit + (totalCount % limit > 0 ? 1 : 0);
    return response.json().then(data => {
      return {
        totalCount,
        totalPages,
        data
      };
    });
  });
};

exports.fetchUsers = fetchUsers;

const fetchTodos = async ({
  userId
} = {}) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`).then(response => {
    return response.json().then(data => {
      console.log(data);
      return {
        data
      };
    });
  });
};

exports.fetchTodos = fetchTodos;
},{}],"stores/catalog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = require("svelte/store");

function dataStore(query) {
  const store = (0, _store.writable)({
    data: [],
    loading: false,
    vars: {}
  });
  return {
    subscribe: store.subscribe.bind(store),
    fetchQuery: async vars => {
      const storeData = (0, _store.get)(store);
      store.set({ ...storeData,
        loading: true,
        vars
      });
      const data = await query(vars);
      store.set({ ...storeData,
        ...data,
        loading: false,
        vars
      });
    }
  };
}

var _default = dataStore;
exports.default = _default;
},{"svelte/store":"../node_modules/svelte/store/index.mjs"}],"../node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel/src/builtins/bundle-url.js"}],"components/Preloader.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

/* components/Preloader.svelte generated by Svelte v3.20.1 */
const file = "components/Preloader.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = "svelte-ao1o5c-style";
  style.textContent = ".lds-ellipsis.svelte-ao1o5c.svelte-ao1o5c{display:inline-block;position:relative;width:80px;height:80px}.lds-ellipsis.svelte-ao1o5c div.svelte-ao1o5c{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:#cef;animation-timing-function:cubic-bezier(0, 1, 1, 0)}.lds-ellipsis.svelte-ao1o5c div.svelte-ao1o5c:nth-child(1){left:8px;animation:svelte-ao1o5c-lds-ellipsis1 0.6s infinite}.lds-ellipsis.svelte-ao1o5c div.svelte-ao1o5c:nth-child(2){left:8px;animation:svelte-ao1o5c-lds-ellipsis2 0.6s infinite}.lds-ellipsis.svelte-ao1o5c div.svelte-ao1o5c:nth-child(3){left:32px;animation:svelte-ao1o5c-lds-ellipsis2 0.6s infinite}.lds-ellipsis.svelte-ao1o5c div.svelte-ao1o5c:nth-child(4){left:56px;animation:svelte-ao1o5c-lds-ellipsis3 0.6s infinite}@keyframes svelte-ao1o5c-lds-ellipsis1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes svelte-ao1o5c-lds-ellipsis3{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes svelte-ao1o5c-lds-ellipsis2{0%{transform:translate(0, 0)}100%{transform:translate(24px, 0)}}\n";
  (0, _internal.append_dev)(document.head, style);
}

function create_fragment(ctx) {
  let div4;
  let div0;
  let t0;
  let div1;
  let t1;
  let div2;
  let t2;
  let div3;
  const block = {
    c: function create() {
      div4 = (0, _internal.element)("div");
      div0 = (0, _internal.element)("div");
      t0 = (0, _internal.space)();
      div1 = (0, _internal.element)("div");
      t1 = (0, _internal.space)();
      div2 = (0, _internal.element)("div");
      t2 = (0, _internal.space)();
      div3 = (0, _internal.element)("div");
      (0, _internal.attr_dev)(div0, "class", "svelte-ao1o5c");
      (0, _internal.add_location)(div0, file, 59, 1, 1027);
      (0, _internal.attr_dev)(div1, "class", "svelte-ao1o5c");
      (0, _internal.add_location)(div1, file, 60, 1, 1036);
      (0, _internal.attr_dev)(div2, "class", "svelte-ao1o5c");
      (0, _internal.add_location)(div2, file, 61, 1, 1045);
      (0, _internal.attr_dev)(div3, "class", "svelte-ao1o5c");
      (0, _internal.add_location)(div3, file, 62, 1, 1054);
      (0, _internal.attr_dev)(div4, "class", "lds-ellipsis svelte-ao1o5c");
      (0, _internal.add_location)(div4, file, 58, 0, 999);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div4, anchor);
      (0, _internal.append_dev)(div4, div0);
      (0, _internal.append_dev)(div4, t0);
      (0, _internal.append_dev)(div4, div1);
      (0, _internal.append_dev)(div4, t1);
      (0, _internal.append_dev)(div4, div2);
      (0, _internal.append_dev)(div4, t2);
      (0, _internal.append_dev)(div4, div3);
    },
    p: _internal.noop,
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div4);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props) {
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Preloader> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("Preloader", $$slots, []);
  return [];
}

class Preloader extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-ao1o5c-style")) add_css();
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Preloader",
      options,
      id: create_fragment.name
    });
  }

}

var _default = Preloader;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","_css_loader":"../node_modules/parcel/src/builtins/css-loader.js"}],"components/Catalog.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelteRouting = require("svelte-routing");

var _client = require("../client.js");

var _catalog = _interopRequireDefault(require("../stores/catalog.js"));

var _store = require("svelte/store");

var _Preloader = _interopRequireDefault(require("./Preloader.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/Catalog.svelte generated by Svelte v3.20.1 */
const file = "components/Catalog.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = "svelte-uox16z-style";
  style.textContent = ".preloader.svelte-uox16z{text-align:center;height:250px}.pager.svelte-uox16z{display:flex;justify-content:space-around}\n";
  (0, _internal.append_dev)(document.head, style);
}

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
} // (60:4) {:else}


function create_else_block(ctx) {
  let tr;
  let td;
  let current;
  const preloader = new _Preloader.default({
    $$inline: true
  });
  const block = {
    c: function create() {
      tr = (0, _internal.element)("tr");
      td = (0, _internal.element)("td");
      (0, _internal.create_component)(preloader.$$.fragment);
      (0, _internal.attr_dev)(td, "colspan", "3");
      (0, _internal.attr_dev)(td, "class", "preloader svelte-uox16z");
      (0, _internal.add_location)(td, file, 61, 6, 1104);
      (0, _internal.add_location)(tr, file, 60, 5, 1093);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, tr, anchor);
      (0, _internal.append_dev)(tr, td);
      (0, _internal.mount_component)(preloader, td, null);
      current = true;
    },
    p: _internal.noop,
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(preloader.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(preloader.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(tr);
      (0, _internal.destroy_component)(preloader);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(60:4) {:else}",
    ctx
  });
  return block;
} // (49:4) {#if !$catalog.loading}


function create_if_block_2(ctx) {
  let each_1_anchor;
  let current;
  let each_value =
  /*$catalog*/
  ctx[1].data;
  (0, _internal.validate_each_argument)(each_value);
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const out = i => (0, _internal.transition_out)(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      each_1_anchor = (0, _internal.empty)();
    },
    m: function mount(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }

      (0, _internal.insert_dev)(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*$catalog*/
      2) {
        each_value =
        /*$catalog*/
        ctx[1].data;
        (0, _internal.validate_each_argument)(each_value);
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            (0, _internal.transition_in)(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            (0, _internal.transition_in)(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        (0, _internal.group_outros)();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (let i = 0; i < each_value.length; i += 1) {
        (0, _internal.transition_in)(each_blocks[i]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        (0, _internal.transition_out)(each_blocks[i]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_each)(each_blocks, detaching);
      if (detaching) (0, _internal.detach_dev)(each_1_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(49:4) {#if !$catalog.loading}",
    ctx
  });
  return block;
} // (53:8) <Link to={`/user/${item.id}`}>


function create_default_slot(ctx) {
  let t_value =
  /*item*/
  ctx[9].name + "";
  let t;
  const block = {
    c: function create() {
      t = (0, _internal.text)(t_value);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*$catalog*/
      2 && t_value !== (t_value =
      /*item*/
      ctx[9].name + "")) (0, _internal.set_data_dev)(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(t);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(53:8) <Link to={`/user/${item.id}`}>",
    ctx
  });
  return block;
} // (50:5) {#each $catalog.data as item}


function create_each_block(ctx) {
  let tr;
  let td0;
  let t0;
  let td1;
  let t1_value =
  /*item*/
  ctx[9].email + "";
  let t1;
  let t2;
  let td2;
  let t3_value =
  /*item*/
  ctx[9].phone + "";
  let t3;
  let t4;
  let current;
  const link = new _svelteRouting.Link({
    props: {
      to: `/user/${
      /*item*/
      ctx[9].id}`,
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx
      }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      tr = (0, _internal.element)("tr");
      td0 = (0, _internal.element)("td");
      (0, _internal.create_component)(link.$$.fragment);
      t0 = (0, _internal.space)();
      td1 = (0, _internal.element)("td");
      t1 = (0, _internal.text)(t1_value);
      t2 = (0, _internal.space)();
      td2 = (0, _internal.element)("td");
      t3 = (0, _internal.text)(t3_value);
      t4 = (0, _internal.space)();
      (0, _internal.add_location)(td0, file, 51, 7, 917);
      (0, _internal.add_location)(td1, file, 55, 7, 1000);
      (0, _internal.add_location)(td2, file, 56, 7, 1029);
      (0, _internal.add_location)(tr, file, 50, 6, 905);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, tr, anchor);
      (0, _internal.append_dev)(tr, td0);
      (0, _internal.mount_component)(link, td0, null);
      (0, _internal.append_dev)(tr, t0);
      (0, _internal.append_dev)(tr, td1);
      (0, _internal.append_dev)(td1, t1);
      (0, _internal.append_dev)(tr, t2);
      (0, _internal.append_dev)(tr, td2);
      (0, _internal.append_dev)(td2, t3);
      (0, _internal.append_dev)(tr, t4);
      current = true;
    },
    p: function update(ctx, dirty) {
      const link_changes = {};
      if (dirty &
      /*$catalog*/
      2) link_changes.to = `/user/${
      /*item*/
      ctx[9].id}`;

      if (dirty &
      /*$$scope, $catalog*/
      4098) {
        link_changes.$$scope = {
          dirty,
          ctx
        };
      }

      link.$set(link_changes);
      if ((!current || dirty &
      /*$catalog*/
      2) && t1_value !== (t1_value =
      /*item*/
      ctx[9].email + "")) (0, _internal.set_data_dev)(t1, t1_value);
      if ((!current || dirty &
      /*$catalog*/
      2) && t3_value !== (t3_value =
      /*item*/
      ctx[9].phone + "")) (0, _internal.set_data_dev)(t3, t3_value);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(link.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(link.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(tr);
      (0, _internal.destroy_component)(link);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(50:5) {#each $catalog.data as item}",
    ctx
  });
  return block;
} // (79:1) {#if page > 1}


function create_if_block_1(ctx) {
  let a;
  let t0_value =
  /*page*/
  ctx[0] - 1 + "";
  let t0;
  let t1;
  let dispose;
  const block = {
    c: function create() {
      a = (0, _internal.element)("a");
      t0 = (0, _internal.text)(t0_value);
      t1 = (0, _internal.text)("\n\t\t ");
      (0, _internal.attr_dev)(a, "class", "button");
      (0, _internal.attr_dev)(a, "href", "#");
      (0, _internal.add_location)(a, file, 79, 2, 1380);
    },
    m: function mount(target, anchor, remount) {
      (0, _internal.insert_dev)(target, a, anchor);
      (0, _internal.append_dev)(a, t0);
      (0, _internal.insert_dev)(target, t1, anchor);
      if (remount) dispose();
      dispose = (0, _internal.listen_dev)(a, "click", (0, _internal.prevent_default)(
      /*click_handler_1*/
      ctx[6]), false, true, false);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*page*/
      1 && t0_value !== (t0_value =
      /*page*/
      ctx[0] - 1 + "")) (0, _internal.set_data_dev)(t0, t0_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(a);
      if (detaching) (0, _internal.detach_dev)(t1);
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(79:1) {#if page > 1}",
    ctx
  });
  return block;
} // (91:1) {#if page + 1 <= $catalog.totalPages}


function create_if_block(ctx) {
  let a;
  let t0_value =
  /*page*/
  ctx[0] + 1 + "";
  let t0;
  let t1;
  let dispose;
  const block = {
    c: function create() {
      a = (0, _internal.element)("a");
      t0 = (0, _internal.text)(t0_value);
      t1 = (0, _internal.text)("\n\t\t ");
      (0, _internal.attr_dev)(a, "class", "button");
      (0, _internal.attr_dev)(a, "href", "#");
      (0, _internal.add_location)(a, file, 91, 2, 1609);
    },
    m: function mount(target, anchor, remount) {
      (0, _internal.insert_dev)(target, a, anchor);
      (0, _internal.append_dev)(a, t0);
      (0, _internal.insert_dev)(target, t1, anchor);
      if (remount) dispose();
      dispose = (0, _internal.listen_dev)(a, "click", (0, _internal.prevent_default)(
      /*click_handler_2*/
      ctx[7]), false, true, false);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*page*/
      1 && t0_value !== (t0_value =
      /*page*/
      ctx[0] + 1 + "")) (0, _internal.set_data_dev)(t0, t0_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(a);
      if (detaching) (0, _internal.detach_dev)(t1);
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(91:1) {#if page + 1 <= $catalog.totalPages}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div1;
  let div0;
  let table;
  let thead;
  let tr;
  let th0;
  let t1;
  let th1;
  let t3;
  let th2;
  let t5;
  let tbody;
  let current_block_type_index;
  let if_block0;
  let t6;
  let div2;
  let a0;
  let t8;
  let t9;
  let a1;
  let t10;
  let t11;
  let t12;
  let a2;
  let current;
  let dispose;
  const if_block_creators = [create_if_block_2, create_else_block];
  const if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (!
    /*$catalog*/
    ctx[1].loading) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx, -1);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block1 =
  /*page*/
  ctx[0] > 1 && create_if_block_1(ctx);
  let if_block2 =
  /*page*/
  ctx[0] + 1 <=
  /*$catalog*/
  ctx[1].totalPages && create_if_block(ctx);
  const block = {
    c: function create() {
      div1 = (0, _internal.element)("div");
      div0 = (0, _internal.element)("div");
      table = (0, _internal.element)("table");
      thead = (0, _internal.element)("thead");
      tr = (0, _internal.element)("tr");
      th0 = (0, _internal.element)("th");
      th0.textContent = "Name";
      t1 = (0, _internal.space)();
      th1 = (0, _internal.element)("th");
      th1.textContent = "E-Mail";
      t3 = (0, _internal.space)();
      th2 = (0, _internal.element)("th");
      th2.textContent = "Phone";
      t5 = (0, _internal.space)();
      tbody = (0, _internal.element)("tbody");
      if_block0.c();
      t6 = (0, _internal.space)();
      div2 = (0, _internal.element)("div");
      a0 = (0, _internal.element)("a");
      a0.textContent = "««";
      t8 = (0, _internal.text)("\n\t \n\t");
      if (if_block1) if_block1.c();
      t9 = (0, _internal.space)();
      a1 = (0, _internal.element)("a");
      t10 = (0, _internal.text)(
      /*page*/
      ctx[0]);
      t11 = (0, _internal.text)("\n\t \n\t");
      if (if_block2) if_block2.c();
      t12 = (0, _internal.space)();
      a2 = (0, _internal.element)("a");
      a2.textContent = "»»";
      (0, _internal.add_location)(th0, file, 42, 5, 748);
      (0, _internal.add_location)(th1, file, 43, 5, 767);
      (0, _internal.add_location)(th2, file, 44, 5, 788);
      (0, _internal.add_location)(tr, file, 41, 4, 738);
      (0, _internal.add_location)(thead, file, 40, 3, 726);
      (0, _internal.add_location)(tbody, file, 47, 3, 828);
      (0, _internal.add_location)(table, file, 39, 2, 715);
      (0, _internal.attr_dev)(div0, "class", "column");
      (0, _internal.add_location)(div0, file, 38, 1, 692);
      (0, _internal.attr_dev)(div1, "class", "row");
      (0, _internal.add_location)(div1, file, 37, 0, 673);
      (0, _internal.attr_dev)(a0, "class", "button");
      (0, _internal.attr_dev)(a0, "href", "#");
      (0, _internal.add_location)(a0, file, 74, 1, 1259);
      (0, _internal.attr_dev)(a1, "class", "button button-outline");
      (0, _internal.attr_dev)(a1, "href", "#");
      (0, _internal.add_location)(a1, file, 88, 1, 1507);
      (0, _internal.attr_dev)(a2, "class", "button");
      (0, _internal.attr_dev)(a2, "href", "#");
      (0, _internal.add_location)(a2, file, 100, 1, 1736);
      (0, _internal.attr_dev)(div2, "class", "row pager svelte-uox16z");
      (0, _internal.add_location)(div2, file, 73, 0, 1234);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor, remount) {
      (0, _internal.insert_dev)(target, div1, anchor);
      (0, _internal.append_dev)(div1, div0);
      (0, _internal.append_dev)(div0, table);
      (0, _internal.append_dev)(table, thead);
      (0, _internal.append_dev)(thead, tr);
      (0, _internal.append_dev)(tr, th0);
      (0, _internal.append_dev)(tr, t1);
      (0, _internal.append_dev)(tr, th1);
      (0, _internal.append_dev)(tr, t3);
      (0, _internal.append_dev)(tr, th2);
      (0, _internal.append_dev)(table, t5);
      (0, _internal.append_dev)(table, tbody);
      if_blocks[current_block_type_index].m(tbody, null);
      (0, _internal.insert_dev)(target, t6, anchor);
      (0, _internal.insert_dev)(target, div2, anchor);
      (0, _internal.append_dev)(div2, a0);
      (0, _internal.append_dev)(div2, t8);
      if (if_block1) if_block1.m(div2, null);
      (0, _internal.append_dev)(div2, t9);
      (0, _internal.append_dev)(div2, a1);
      (0, _internal.append_dev)(a1, t10);
      (0, _internal.append_dev)(div2, t11);
      if (if_block2) if_block2.m(div2, null);
      (0, _internal.append_dev)(div2, t12);
      (0, _internal.append_dev)(div2, a2);
      current = true;
      if (remount) (0, _internal.run_all)(dispose);
      dispose = [(0, _internal.listen_dev)(a0, "click", (0, _internal.prevent_default)(
      /*click_handler*/
      ctx[5]), false, true, false), (0, _internal.listen_dev)(a2, "click", (0, _internal.prevent_default)(
      /*click_handler_3*/
      ctx[8]), false, true, false)];
    },
    p: function update(ctx, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        (0, _internal.check_outros)();
        if_block0 = if_blocks[current_block_type_index];

        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block0.c();
        }

        (0, _internal.transition_in)(if_block0, 1);
        if_block0.m(tbody, null);
      }

      if (
      /*page*/
      ctx[0] > 1) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_1(ctx);
          if_block1.c();
          if_block1.m(div2, t9);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (!current || dirty &
      /*page*/
      1) (0, _internal.set_data_dev)(t10,
      /*page*/
      ctx[0]);

      if (
      /*page*/
      ctx[0] + 1 <=
      /*$catalog*/
      ctx[1].totalPages) {
        if (if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2 = create_if_block(ctx);
          if_block2.c();
          if_block2.m(div2, t12);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block0);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div1);
      if_blocks[current_block_type_index].d();
      if (detaching) (0, _internal.detach_dev)(t6);
      if (detaching) (0, _internal.detach_dev)(div2);
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let $catalog;
  const catalog = (0, _catalog.default)(_client.fetchUsers);
  (0, _internal.validate_store)(catalog, "catalog");
  (0, _internal.component_subscribe)($$self, catalog, value => $$invalidate(1, $catalog = value));
  let {
    page = parseInt(new URLSearchParams(location.search).get("page")) || 1
  } = $$props;
  let limit = 5;

  function showPage(currentPage = 1) {
    $$invalidate(0, page = currentPage);
    catalog.fetchQuery({
      page,
      limit
    });
    localStorage.setItem("lp", page);
  }

  showPage(page);
  const writable_props = ["page"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Catalog> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("Catalog", $$slots, []);

  const click_handler = () => showPage(1);

  const click_handler_1 = () => showPage(page - 1);

  const click_handler_2 = () => showPage(page + 1);

  const click_handler_3 = () => showPage($catalog.totalPages);

  $$self.$set = $$props => {
    if ("page" in $$props) $$invalidate(0, page = $$props.page);
  };

  $$self.$capture_state = () => ({
    Link: _svelteRouting.Link,
    fetchUsers: _client.fetchUsers,
    dataStore: _catalog.default,
    writable: _store.writable,
    get: _store.get,
    Preloader: _Preloader.default,
    catalog,
    page,
    limit,
    showPage,
    $catalog
  });

  $$self.$inject_state = $$props => {
    if ("page" in $$props) $$invalidate(0, page = $$props.page);
    if ("limit" in $$props) limit = $$props.limit;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [page, $catalog, catalog, showPage, limit, click_handler, click_handler_1, click_handler_2, click_handler_3];
}

class Catalog extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-uox16z-style")) add_css();
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      page: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Catalog",
      options,
      id: create_fragment.name
    });
  }

  get page() {
    throw new Error("<Catalog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set page(value) {
    throw new Error("<Catalog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = Catalog;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte-routing":"../node_modules/svelte-routing/src/index.js","../client.js":"client.js","../stores/catalog.js":"stores/catalog.js","svelte/store":"../node_modules/svelte/store/index.mjs","./Preloader.svelte":"components/Preloader.svelte","_css_loader":"../node_modules/parcel/src/builtins/css-loader.js"}],"components/User.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelteRouting = require("svelte-routing");

var _client = require("../client.js");

var _catalog = _interopRequireDefault(require("../stores/catalog.js"));

var _store = require("svelte/store");

var _Preloader = _interopRequireDefault(require("./Preloader.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/User.svelte generated by Svelte v3.20.1 */
const {
  console: console_1
} = _internal.globals;
const file = "components/User.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = "svelte-u395qc-style";
  style.textContent = ".header.svelte-u395qc{display:flex;flex:row}\n";
  (0, _internal.append_dev)(document.head, style);
}

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
} // (45:0) {:else}


function create_else_block(ctx) {
  let div1;
  let div0;
  let t0;
  let h1;
  let t1_value =
  /*$catalog*/
  ctx[1].data.find(
  /*func*/
  ctx[6]).name + "";
  let t1;
  let t2;
  let hr;
  let t3;
  let each_1_anchor;
  let current;
  const link = new _svelteRouting.Link({
    props: {
      to: `/?page=${
      /*lastPage*/
      ctx[3] || 1}`,
      class: "button button-small",
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx
      }
    },
    $$inline: true
  });
  let each_value =
  /*$userInfo*/
  ctx[2].data;
  (0, _internal.validate_each_argument)(each_value);
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const block = {
    c: function create() {
      div1 = (0, _internal.element)("div");
      div0 = (0, _internal.element)("div");
      (0, _internal.create_component)(link.$$.fragment);
      t0 = (0, _internal.text)("\n\t\t\t \n\t\t\t");
      h1 = (0, _internal.element)("h1");
      t1 = (0, _internal.text)(t1_value);
      t2 = (0, _internal.space)();
      hr = (0, _internal.element)("hr");
      t3 = (0, _internal.space)();

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      each_1_anchor = (0, _internal.empty)();
      (0, _internal.add_location)(h1, file, 51, 3, 996);
      (0, _internal.attr_dev)(div0, "class", "column header svelte-u395qc");
      (0, _internal.add_location)(div0, file, 46, 2, 866);
      (0, _internal.attr_dev)(div1, "class", "row");
      (0, _internal.add_location)(div1, file, 45, 1, 846);
      (0, _internal.add_location)(hr, file, 61, 1, 1130);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div1, anchor);
      (0, _internal.append_dev)(div1, div0);
      (0, _internal.mount_component)(link, div0, null);
      (0, _internal.append_dev)(div0, t0);
      (0, _internal.append_dev)(div0, h1);
      (0, _internal.append_dev)(h1, t1);
      (0, _internal.insert_dev)(target, t2, anchor);
      (0, _internal.insert_dev)(target, hr, anchor);
      (0, _internal.insert_dev)(target, t3, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }

      (0, _internal.insert_dev)(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      const link_changes = {};

      if (dirty &
      /*$$scope*/
      1024) {
        link_changes.$$scope = {
          dirty,
          ctx
        };
      }

      link.$set(link_changes);
      if ((!current || dirty &
      /*$catalog, userId*/
      3) && t1_value !== (t1_value =
      /*$catalog*/
      ctx[1].data.find(
      /*func*/
      ctx[6]).name + "")) (0, _internal.set_data_dev)(t1, t1_value);

      if (dirty &
      /*$userInfo*/
      4) {
        each_value =
        /*$userInfo*/
        ctx[2].data;
        (0, _internal.validate_each_argument)(each_value);
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(link.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(link.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div1);
      (0, _internal.destroy_component)(link);
      if (detaching) (0, _internal.detach_dev)(t2);
      if (detaching) (0, _internal.detach_dev)(hr);
      if (detaching) (0, _internal.detach_dev)(t3);
      (0, _internal.destroy_each)(each_blocks, detaching);
      if (detaching) (0, _internal.detach_dev)(each_1_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(45:0) {:else}",
    ctx
  });
  return block;
} // (43:0) {#if $catalog.loading || $userInfo.loading}


function create_if_block(ctx) {
  let current;
  const preloader = new _Preloader.default({
    $$inline: true
  });
  const block = {
    c: function create() {
      (0, _internal.create_component)(preloader.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(preloader, target, anchor);
      current = true;
    },
    p: _internal.noop,
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(preloader.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(preloader.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(preloader, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(43:0) {#if $catalog.loading || $userInfo.loading}",
    ctx
  });
  return block;
} // (48:3) <Link to={`/?page=${lastPage || 1}`} class="button button-small">


function create_default_slot(ctx) {
  let t;
  const block = {
    c: function create() {
      t = (0, _internal.text)("back");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(t);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(48:3) <Link to={`/?page=${lastPage || 1}`} class=\\\"button button-small\\\">",
    ctx
  });
  return block;
} // (64:1) {#each $userInfo.data as item}


function create_each_block(ctx) {
  let div2;
  let div0;
  let t0_value = (
  /*item*/
  ctx[7].completed ? "✔" : "\t○") + "";
  let t0;
  let t1;
  let div1;
  let t2_value =
  /*item*/
  ctx[7].title + "";
  let t2;
  let t3;
  const block = {
    c: function create() {
      div2 = (0, _internal.element)("div");
      div0 = (0, _internal.element)("div");
      t0 = (0, _internal.text)(t0_value);
      t1 = (0, _internal.space)();
      div1 = (0, _internal.element)("div");
      t2 = (0, _internal.text)(t2_value);
      t3 = (0, _internal.space)();
      (0, _internal.attr_dev)(div0, "class", "column");
      (0, _internal.add_location)(div0, file, 65, 3, 1193);
      (0, _internal.attr_dev)(div1, "class", "column");
      (0, _internal.add_location)(div1, file, 66, 3, 1252);
      (0, _internal.attr_dev)(div2, "class", "row");
      (0, _internal.add_location)(div2, file, 64, 2, 1172);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div2, anchor);
      (0, _internal.append_dev)(div2, div0);
      (0, _internal.append_dev)(div0, t0);
      (0, _internal.append_dev)(div2, t1);
      (0, _internal.append_dev)(div2, div1);
      (0, _internal.append_dev)(div1, t2);
      (0, _internal.append_dev)(div2, t3);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*$userInfo*/
      4 && t0_value !== (t0_value = (
      /*item*/
      ctx[7].completed ? "✔" : "\t○") + "")) (0, _internal.set_data_dev)(t0, t0_value);
      if (dirty &
      /*$userInfo*/
      4 && t2_value !== (t2_value =
      /*item*/
      ctx[7].title + "")) (0, _internal.set_data_dev)(t2, t2_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div2);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(64:1) {#each $userInfo.data as item}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*$catalog*/
    ctx[1].loading ||
    /*$userInfo*/
    ctx[2].loading) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      if_block.c();
      if_block_anchor = (0, _internal.empty)();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      (0, _internal.insert_dev)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        (0, _internal.check_outros)();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        (0, _internal.transition_in)(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) (0, _internal.detach_dev)(if_block_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let $catalog;
  let $userInfo;
  const lastPage = localStorage.getItem("lp");
  const catalog = (0, _catalog.default)(_client.fetchUsers);
  (0, _internal.validate_store)(catalog, "catalog");
  (0, _internal.component_subscribe)($$self, catalog, value => $$invalidate(1, $catalog = value));
  catalog.fetchQuery({
    page: lastPage
  });
  const userInfo = (0, _catalog.default)(_client.fetchTodos);
  (0, _internal.validate_store)(userInfo, "userInfo");
  (0, _internal.component_subscribe)($$self, userInfo, value => $$invalidate(2, $userInfo = value));
  let {
    userId
  } = $$props;
  userInfo.fetchQuery({
    userId
  });
  const writable_props = ["userId"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<User> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("User", $$slots, []);

  const func = user => {
    console.log(user);
    return userId == user.id;
  };

  $$self.$set = $$props => {
    if ("userId" in $$props) $$invalidate(0, userId = $$props.userId);
  };

  $$self.$capture_state = () => ({
    Link: _svelteRouting.Link,
    fetchTodos: _client.fetchTodos,
    fetchUsers: _client.fetchUsers,
    dataStore: _catalog.default,
    writable: _store.writable,
    get: _store.get,
    Preloader: _Preloader.default,
    lastPage,
    catalog,
    userInfo,
    userId,
    $catalog,
    $userInfo
  });

  $$self.$inject_state = $$props => {
    if ("userId" in $$props) $$invalidate(0, userId = $$props.userId);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [userId, $catalog, $userInfo, lastPage, catalog, userInfo, func];
}

class User extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-u395qc-style")) add_css();
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      userId: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "User",
      options,
      id: create_fragment.name
    });
    const {
      ctx
    } = this.$$;
    const props = options.props || {};

    if (
    /*userId*/
    ctx[0] === undefined && !("userId" in props)) {
      console_1.warn("<User> was created without expected prop 'userId'");
    }
  }

  get userId() {
    throw new Error("<User>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set userId(value) {
    throw new Error("<User>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = User;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte-routing":"../node_modules/svelte-routing/src/index.js","../client.js":"client.js","../stores/catalog.js":"stores/catalog.js","svelte/store":"../node_modules/svelte/store/index.mjs","./Preloader.svelte":"components/Preloader.svelte","_css_loader":"../node_modules/parcel/src/builtins/css-loader.js"}],"components/App.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelteRouting = require("svelte-routing");

var _Catalog = _interopRequireDefault(require("./Catalog.svelte"));

var _User = _interopRequireDefault(require("./User.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/App.svelte generated by Svelte v3.20.1 */
const file = "components/App.svelte"; // (10:1) <Router {url}>

function create_default_slot(ctx) {
  let t;
  let current;
  const route0 = new _svelteRouting.Route({
    props: {
      path: "/user/:userId",
      component: _User.default
    },
    $$inline: true
  });
  const route1 = new _svelteRouting.Route({
    props: {
      path: "/",
      component: _Catalog.default
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      (0, _internal.create_component)(route0.$$.fragment);
      t = (0, _internal.space)();
      (0, _internal.create_component)(route1.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(route0, target, anchor);
      (0, _internal.insert_dev)(target, t, anchor);
      (0, _internal.mount_component)(route1, target, anchor);
      current = true;
    },
    p: _internal.noop,
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(route0.$$.fragment, local);
      (0, _internal.transition_in)(route1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(route0.$$.fragment, local);
      (0, _internal.transition_out)(route1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(route0, detaching);
      if (detaching) (0, _internal.detach_dev)(t);
      (0, _internal.destroy_component)(route1, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(10:1) <Router {url}>",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div;
  let current;
  const router = new _svelteRouting.Router({
    props: {
      url:
      /*url*/
      ctx[0],
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx
      }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      (0, _internal.create_component)(router.$$.fragment);
      (0, _internal.attr_dev)(div, "class", "container");
      (0, _internal.add_location)(div, file, 8, 0, 170);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
      (0, _internal.mount_component)(router, div, null);
      current = true;
    },
    p: function update(ctx, [dirty]) {
      const router_changes = {};
      if (dirty &
      /*url*/
      1) router_changes.url =
      /*url*/
      ctx[0];

      if (dirty &
      /*$$scope*/
      2) {
        router_changes.$$scope = {
          dirty,
          ctx
        };
      }

      router.$set(router_changes);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(router.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(router.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      (0, _internal.destroy_component)(router);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    url = ""
  } = $$props;
  const writable_props = ["url"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("App", $$slots, []);

  $$self.$set = $$props => {
    if ("url" in $$props) $$invalidate(0, url = $$props.url);
  };

  $$self.$capture_state = () => ({
    Router: _svelteRouting.Router,
    Link: _svelteRouting.Link,
    Route: _svelteRouting.Route,
    Catalog: _Catalog.default,
    User: _User.default,
    url
  });

  $$self.$inject_state = $$props => {
    if ("url" in $$props) $$invalidate(0, url = $$props.url);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [url];
}

class App extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      url: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "App",
      options,
      id: create_fragment.name
    });
  }

  get url() {
    throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set url(value) {
    throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = App;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte-routing":"../node_modules/svelte-routing/src/index.js","./Catalog.svelte":"components/Catalog.svelte","./User.svelte":"components/User.svelte"}],"entry.js":[function(require,module,exports) {
"use strict";

var _App = _interopRequireDefault(require("./components/App.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mount = () => new _App.default({
  target: document.body
});

mount(); // import * as client from './client'
// const main = async () => {
// 	const result = await client.fetchTodos()
// 	console.log(result)
// }
// main()
},{"./components/App.svelte":"components/App.svelte"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39175" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","entry.js"], null)
//# sourceMappingURL=/entry.87c11fe2.js.map