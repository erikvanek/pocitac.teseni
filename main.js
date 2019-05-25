/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/timeago.js/lib/format.js":
/*!***********************************************!*\
  !*** ./node_modules/timeago.js/lib/format.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.format = void 0;\n\nvar _date = __webpack_require__(/*! ./utils/date */ \"./node_modules/timeago.js/lib/utils/date.js\");\n\nvar _locales = __webpack_require__(/*! ./locales.js */ \"./node_modules/timeago.js/lib/locales.js\");\n\nvar format = function format(date, locale, nowDate) {\n  // diff seconds\n  var sec = (0, _date.diffSec)(date, nowDate); // format it with locale\n\n  return (0, _date.formatDiff)(sec, (0, _locales.getLocale)(locale));\n};\n\nexports.format = format;\n\n//# sourceURL=webpack:///./node_modules/timeago.js/lib/format.js?");

/***/ }),

/***/ "./node_modules/timeago.js/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/timeago.js/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"format\", {\n  enumerable: true,\n  get: function get() {\n    return _format.format;\n  }\n});\nObject.defineProperty(exports, \"render\", {\n  enumerable: true,\n  get: function get() {\n    return _realtime.render;\n  }\n});\nObject.defineProperty(exports, \"cancel\", {\n  enumerable: true,\n  get: function get() {\n    return _realtime.cancel;\n  }\n});\nObject.defineProperty(exports, \"register\", {\n  enumerable: true,\n  get: function get() {\n    return _locales.register;\n  }\n});\nexports.version = void 0;\n\nvar _format = __webpack_require__(/*! ./format */ \"./node_modules/timeago.js/lib/format.js\");\n\nvar _realtime = __webpack_require__(/*! ./realtime */ \"./node_modules/timeago.js/lib/realtime.js\");\n\nvar _locales = __webpack_require__(/*! ./locales */ \"./node_modules/timeago.js/lib/locales.js\");\n\n/**\n * Created by hustcc on 18/5/20.\n * Contract: i@hust.cc\n */\nvar version = \"4.0.0-beta.2\";\nexports.version = version;\n\n//# sourceURL=webpack:///./node_modules/timeago.js/lib/index.js?");

/***/ }),

/***/ "./node_modules/timeago.js/lib/locales.js":
/*!************************************************!*\
  !*** ./node_modules/timeago.js/lib/locales.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getLocale = exports.register = void 0;\n\n/**\n * Created by hustcc on 18/5/20.\n * Contract: i@hust.cc\n */\nvar EN = 'second_minute_hour_day_week_month_year'.split('_');\nvar ZH = '秒_分钟_小时_天_周_个月_年'.split('_');\n\nvar zh_CN = function zh_CN(number, index) {\n  if (index === 0) return ['刚刚', '片刻后'];\n  var unit = ZH[parseInt(index / 2)];\n  return [\"\".concat(number, \" \").concat(unit, \"\\u524D\"), \"\".concat(number, \" \").concat(unit, \"\\u540E\")];\n};\n\nvar en_US = function en_US(number, index) {\n  if (index === 0) return ['just now', 'right now'];\n  var unit = EN[parseInt(index / 2)];\n  if (number > 1) unit += 's';\n  return [\"\".concat(number, \" \").concat(unit, \" ago\"), \"in \".concat(number, \" \").concat(unit)];\n};\n/**\n * 所有的语言\n * @type {{en: function(*, *), zh_CN: function(*, *)}}\n */\n\n\nvar Locales = {\n  en_US: en_US,\n  zh_CN: zh_CN\n};\n/**\n * 注册语言\n * @param locale\n * @param func\n */\n\nvar register = function register(locale, func) {\n  Locales[locale] = func;\n};\n/**\n * 获取语言函数\n * @param locale\n * @returns {*}\n */\n\n\nexports.register = register;\n\nvar getLocale = function getLocale(locale) {\n  return Locales[locale] || en_US;\n};\n\nexports.getLocale = getLocale;\n\n//# sourceURL=webpack:///./node_modules/timeago.js/lib/locales.js?");

/***/ }),

/***/ "./node_modules/timeago.js/lib/realtime.js":
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/lib/realtime.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = exports.cancel = void 0;\n\nvar _dom = __webpack_require__(/*! ./utils/dom */ \"./node_modules/timeago.js/lib/utils/dom.js\");\n\nvar _date = __webpack_require__(/*! ./utils/date */ \"./node_modules/timeago.js/lib/utils/date.js\");\n\nvar _locales = __webpack_require__(/*! ./locales */ \"./node_modules/timeago.js/lib/locales.js\");\n\n// 所有的 timer\nvar TimerPool = {};\n\nvar clear = function clear(tid) {\n  clearTimeout(tid);\n  delete TimerPool[tid];\n}; // 定时运行\n\n\nvar run = function run(node, date, localeFunc, nowDate) {\n  // 先清理掉之前的\n  clear((0, _dom.getTimerId)(node)); // get diff seconds\n\n  var diff = (0, _date.diffSec)(date, nowDate); // render\n\n  node.innerHTML = (0, _date.formatDiff)(diff, localeFunc);\n  var tid = setTimeout(function () {\n    run(node, date, localeFunc, nowDate);\n  }, (0, _date.nextInterval)(diff) * 1000, 0x7FFFFFFF); // there is no need to save node in object. Just save the key\n\n  TimerPool[tid] = 0;\n  (0, _dom.saveTimerId)(node, tid);\n}; // 取消一个 node 的实时渲染\n\n\nvar cancel = function cancel(node) {\n  if (node) clear((0, _dom.getTimerId)(node)); // get the timer of DOM node(native / jq).\n  else for (var tid in TimerPool) {\n      clear(tid);\n    }\n}; // 实时渲染一系列节点\n\n\nexports.cancel = cancel;\n\nvar render = function render(nodes, locale, nowDate) {\n  // by .length\n  if (nodes.length === undefined) nodes = [nodes];\n  var node;\n\n  for (var i = 0; i < nodes.length; i++) {\n    node = nodes[i];\n    var date = (0, _dom.getDateAttribute)(node);\n    var localeFunc = (0, _locales.getLocale)(locale);\n    run(node, date, localeFunc, nowDate);\n  }\n\n  return nodes;\n};\n\nexports.render = render;\n\n//# sourceURL=webpack:///./node_modules/timeago.js/lib/realtime.js?");

/***/ }),

/***/ "./node_modules/timeago.js/lib/utils/date.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/lib/utils/date.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.nextInterval = exports.diffSec = exports.formatDiff = exports.toDate = exports.toInt = void 0;\n\n/**\n * Created by hustcc on 18/5/20.\n * Contract: i@hust.cc\n */\nvar SEC_ARRAY = [60, 60, 24, 7, 365 / 7 / 12, 12];\n/**\n * change f into int, remove decimal. Just for code compression\n * @param f\n * @returns {number}\n */\n\nvar toInt = function toInt(f) {\n  return parseInt(f);\n};\n/**\n * format Date / string / timestamp to Date instance.\n * @param input\n * @returns {*}\n */\n\n\nexports.toInt = toInt;\n\nvar toDate = function toDate(input) {\n  if (input instanceof Date) return input;\n  if (!isNaN(input) || /^\\d+$/.test(input)) return new Date(toInt(input));\n  input = (input || '').trim().replace(/\\.\\d+/, '') // remove milliseconds\n  .replace(/-/, '/').replace(/-/, '/').replace(/(\\d)T(\\d)/, '$1 $2').replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC\n  .replace(/([\\+\\-]\\d\\d)\\:?(\\d\\d)/, ' $1$2'); // -04:00 -> -0400\n\n  return new Date(input);\n};\n/**\n * format the diff second to *** time ago, with setting locale\n * @param diff\n * @param localeFunc\n * @returns {string | void | *}\n */\n\n\nexports.toDate = toDate;\n\nvar formatDiff = function formatDiff(diff, localeFunc) {\n  // if locale is not exist, use defaultLocale.\n  // if defaultLocale is not exist, use build-in `en`.\n  // be sure of no error when locale is not exist.\n  var i = 0,\n      agoin = diff < 0 ? 1 : 0,\n      // timein or timeago\n  total_sec = diff = Math.abs(diff);\n\n  for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {\n    diff /= SEC_ARRAY[i];\n  }\n\n  diff = toInt(diff);\n  i *= 2;\n  if (diff > (i === 0 ? 9 : 1)) i += 1;\n  return localeFunc(diff, i, total_sec)[agoin].replace('%s', diff);\n};\n/**\n * calculate the diff second between date to be formatted an now date.\n * @param date\n * @param nowDate\n * @returns {number}\n */\n\n\nexports.formatDiff = formatDiff;\n\nvar diffSec = function diffSec(date, nowDate) {\n  nowDate = nowDate ? toDate(nowDate) : new Date();\n  return (nowDate - toDate(date)) / 1000;\n};\n/**\n * nextInterval: calculate the next interval time.\n * - diff: the diff sec between now and date to be formatted.\n *\n * What's the meaning?\n * diff = 61 then return 59\n * diff = 3601 (an hour + 1 second), then return 3599\n * make the interval with high performance.\n **/\n\n\nexports.diffSec = diffSec;\n\nvar nextInterval = function nextInterval(diff) {\n  var rst = 1,\n      i = 0,\n      d = Math.abs(diff);\n\n  for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {\n    diff /= SEC_ARRAY[i];\n    rst *= SEC_ARRAY[i];\n  }\n\n  d = d % rst;\n  d = d ? rst - d : rst;\n  return Math.ceil(d);\n};\n\nexports.nextInterval = nextInterval;\n\n//# sourceURL=webpack:///./node_modules/timeago.js/lib/utils/date.js?");

/***/ }),

/***/ "./node_modules/timeago.js/lib/utils/dom.js":
/*!**************************************************!*\
  !*** ./node_modules/timeago.js/lib/utils/dom.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getTimerId = exports.saveTimerId = exports.getDateAttribute = void 0;\nvar ATTR_TIMEAGO_TID = 'timeago-tid';\nvar ATTR_DATETIME = 'datetime';\n/**\n * get the node attribute, native DOM and jquery supported.\n * @param node\n * @param name\n * @returns {*}\n */\n\nvar getAttribute = function getAttribute(node, name) {\n  if (node.getAttribute) return node.getAttribute(name); // native dom\n\n  if (node.attr) return node.attr(name); // jquery dom\n};\n/**\n * get the datetime attribute, `data-timeagp` / `datetime` are supported.\n * @param node\n * @returns {*}\n */\n\n\nvar getDateAttribute = function getDateAttribute(node) {\n  return getAttribute(node, ATTR_DATETIME);\n};\n/**\n * set the node attribute, native DOM and jquery supported.\n * @param node\n * @param timerId\n * @returns {*}\n */\n\n\nexports.getDateAttribute = getDateAttribute;\n\nvar saveTimerId = function saveTimerId(node, timerId) {\n  if (node.setAttribute) return node.setAttribute(ATTR_TIMEAGO_TID, timerId);\n  if (node.attr) return node.attr(ATTR_TIMEAGO_TID, timerId);\n};\n\nexports.saveTimerId = saveTimerId;\n\nvar getTimerId = function getTimerId(node) {\n  return getAttribute(node, ATTR_TIMEAGO_TID);\n};\n\nexports.getTimerId = getTimerId;\n\n//# sourceURL=webpack:///./node_modules/timeago.js/lib/utils/dom.js?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! timeago.js */ \"./node_modules/timeago.js/lib/index.js\");\n/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(timeago_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar e = React.createElement;\nvar bindings = [\"což bude\", \"kterou uvidím\", \"kterého uvidím\", \"co se stane\"];\nvar storagePrefix = \"pleasure-counter-items\";\n\nvar Counter =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Counter, _React$Component);\n\n  function Counter(props) {\n    var _this;\n\n    _classCallCheck(this, Counter);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Counter).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"componentDidMount\", function () {\n      var itemsFromStorage = localStorage.getItem(storagePrefix);\n\n      if (itemsFromStorage && itemsFromStorage.length) {\n        var items = JSON.parse(itemsFromStorage);\n        items = items.map(function (item) {\n          return _objectSpread({}, item, {\n            remaining: Object(timeago_js__WEBPACK_IMPORTED_MODULE_0__[\"format\"])(item.when, 'en_US')\n          });\n        });\n\n        _this.setState(_objectSpread({}, _this.state, {\n          items: items.sort(_this.sortFunction)\n        }));\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"sortFunction\", function (a, b) {\n      return new Date(a.when).getTime() - new Date(b.when).getTime();\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"render\", function () {\n      var items = _this.state.items.map(function (item) {\n        return React.createElement(\"div\", {\n          key: item.timestamp\n        }, item.wish, \" \", item.binding, \" \", item.remaining);\n      });\n\n      return React.createElement(\"div\", {\n        id: \"wishlist-counter-app\"\n      }, React.createElement(\"h1\", null, \"Po\\u010D\\xEDta\\u010D t\\u011B\\u0161en\\xED \\uD83C\\uDF08\"), React.createElement(\"div\", {\n        className: \"row\"\n      }, \"T\\u011B\\u0161\\xEDm se na\", \" \", React.createElement(\"input\", {\n        type: \"text\",\n        placeholder: \"n\\u011Bco super\",\n        onChange: _this.wishChanged\n      })), React.createElement(\"div\", {\n        className: \"row\"\n      }, \"co\\u017E bude\", \" \", React.createElement(\"input\", {\n        type: \"datetime-local\",\n        min: _this.now,\n        onChange: _this.dateChanged,\n        required: true\n      })), React.createElement(\"button\", {\n        disabled: !!_this.isValid,\n        onClick: _this.saveWish\n      }, \"T\\u011B\\u0161it se!\"), React.createElement(\"button\", {\n        onClick: _this.deleteAll\n      }, \"V\\u0161e smazat\"), React.createElement(\"div\", {\n        className: \"row\"\n      }, React.createElement(\"h2\", null, \"Na co u\\u017E se t\\u011B\\u0161\\xEDm?\"), items));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"saveWish\", function () {\n      var newWish = {\n        wish: _this.state.wish,\n        when: _this.state.when,\n        timestamp: new Date().getTime()\n      };\n      newWish.remaining = Object(timeago_js__WEBPACK_IMPORTED_MODULE_0__[\"format\"])(newWish.when, 'en_US');\n      console.log(newWish);\n      var withNewWish = [].concat(_toConsumableArray(_this.state.items), [newWish]);\n      localStorage.setItem(storagePrefix, JSON.stringify(withNewWish));\n\n      _this.setState(_objectSpread({}, _this.state, {\n        items: withNewWish.sort(_this.sortFunction)\n      }));\n\n      console.log(_this.state);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"deleteAll\", function () {\n      localStorage.removeItem(storagePrefix);\n\n      _this.setState(_objectSpread({}, _this.state, {\n        items: []\n      }));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"wishChanged\", function (wish) {\n      _this.setState(_objectSpread({}, _this.state, {\n        wish: wish.target.value\n      }));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"dateChanged\", function (date) {\n      //console.log(date.target.value);\n      _this.setState(_objectSpread({}, _this.state, {\n        when: new Date(date.target.value)\n      }));\n    });\n\n    _this.state = {\n      wish: \"něco super\",\n      when: undefined,\n      binding: bindings[0],\n      now: new Date().toISOString(),\n      disabled: true,\n      items: []\n    };\n    return _this;\n  }\n\n  return Counter;\n}(React.Component);\n\nReactDOM.render(React.createElement(Counter, null), document.getElementById(\"app\"));\n\n//# sourceURL=webpack:///./src/index.jsx?");

/***/ })

/******/ });