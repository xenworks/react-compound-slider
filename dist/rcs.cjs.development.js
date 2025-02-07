'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('warning');
var React = require('react');
var d3Array = require('d3-array');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var warning__default = /*#__PURE__*/_interopDefaultLegacy(warning);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var prfx = 'react-compound-slider:';
function getSortByVal() {
  var reversed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function sortByVal(a, b) {
    if (a.val > b.val) {
      return reversed ? -1 : 1;
    }

    if (b.val > a.val) {
      return reversed ? 1 : -1;
    }

    return 0;
  };
}
function getUpdatedHandles(handles, updateKey, updateValue) {
  var reversed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var index = handles.findIndex(function (v) {
    return v.key === updateKey;
  });

  if (index !== -1) {
    var _handles$index = handles[index],
        key = _handles$index.key,
        val = _handles$index.val;

    if (val === updateValue) {
      return handles;
    }

    return [].concat(_toConsumableArray(handles.slice(0, index)), [{
      key: key,
      val: updateValue
    }], _toConsumableArray(handles.slice(index + 1))).sort(getSortByVal(reversed));
  }

  return handles;
}
function getSliderDomain(slider, vertical) {
  if (!slider) {
    return [0, 0];
  }

  var s = slider.getBoundingClientRect();
  var d0 = vertical ? s.top : s.left;
  var d1 = vertical ? s.bottom : s.right;
  return [d0, d1];
}
function isNotValidTouch(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? '' : _ref$type,
      touches = _ref.touches;
  return !touches || touches.length > 1 || type.toLowerCase() === 'touchend' && touches.length > 0;
}
function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}
function getHandles() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var reversed = arguments.length > 1 ? arguments[1] : undefined;
  var valueToStep = arguments.length > 2 ? arguments[2] : undefined;
  var warn = arguments.length > 3 ? arguments[3] : undefined;
  var changes = 0;
  var handles = values.map(function (x) {
    var val = valueToStep.getValue(x);

    if (x !== val) {
      changes += 1;
      warning__default['default'](!warn, "".concat(prfx, " Invalid value encountered. Changing ").concat(x, " to ").concat(val, "."));
    }

    return val;
  }).map(function (val, i) {
    return {
      key: "$$-".concat(i),
      val: val
    };
  }).sort(getSortByVal(reversed));
  return {
    handles: handles,
    changes: changes
  };
}

// default mode
function mode1(_, next) {
  return next;
} // prevent duplicate values and crossing

function mode2(curr, next) {
  for (var i = 0; i < curr.length; i++) {
    if (curr[i].key !== next[i].key) {
      return curr;
    }

    if (next[i + 1] && next[i].val === next[i + 1].val) {
      return curr;
    }
  }

  return next;
} // pushable mode

function mode3(curr, next, step, reversed, getValue) {
  var indexForMovingHandle = -1;
  var handleMoveIsPositive = true;

  for (var i = 0; i < curr.length; i++) {
    var c = curr[i];
    var n = next[i]; // make sure keys are in same order if not return curr

    if (!n || n.key !== c.key) {
      return curr;
    } else if (n.val !== c.val) {
      indexForMovingHandle = i;
      handleMoveIsPositive = n.val - c.val > 0;
    }
  } // nothing has changed (shouldn't happen but just in case).


  if (indexForMovingHandle === -1) {
    return curr;
  } else {
    var increment = handleMoveIsPositive ? step : -step;

    for (var _i = 0; _i < next.length; _i++) {
      var n0 = next[_i];
      var n1 = next[_i + 1];

      if (n1 && n0.val === n1.val) {
        if (_i === indexForMovingHandle) {
          var newStep = n1.val + increment;

          if (getValue(newStep) === newStep) {
            var clone = getUpdatedHandles(next, n1.key, n1.val + increment, reversed);
            var check = mode3(next, clone, step, reversed, getValue);

            if (check === next) {
              return curr;
            } else {
              return check;
            }
          } else {
            return curr;
          }
        } else {
          var _newStep = n0.val + increment;

          if (getValue(_newStep) === _newStep) {
            var _clone = getUpdatedHandles(next, n0.key, n0.val + increment, reversed);

            var _check = mode3(next, _clone, step, reversed, getValue);

            if (_check === next) {
              return curr;
            } else {
              return _check;
            }
          } else {
            return curr;
          }
        }
      }
    }
  }

  return next;
}

function callAll() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (e) {
    return fns.forEach(function (fn) {
      return fn && fn(e);
    });
  };
}

var NOOP = function NOOP() {
  return {
    value: 0,
    percent: 0
  };
};

var Rail = /*#__PURE__*/function (_Component) {
  _inherits(Rail, _Component);

  var _super = _createSuper(Rail);

  function Rail() {
    var _this;

    _classCallCheck(this, Rail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.getRailProps = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = _this.props,
          emitMouse = _this$props.emitMouse,
          emitTouch = _this$props.emitTouch;
      return _objectSpread2(_objectSpread2({}, props), {}, {
        onMouseDown: callAll(props && props.onMouseDown, emitMouse),
        onTouchStart: callAll(props && props.onTouchStart, emitTouch)
      });
    };

    return _this;
  }

  _createClass(Rail, [{
    key: "render",
    value: function render() {
      var getRailProps = this.getRailProps,
          _this$props2 = this.props,
          getEventData = _this$props2.getEventData,
          _this$props2$activeHa = _this$props2.activeHandleID,
          activeHandleID = _this$props2$activeHa === void 0 ? '' : _this$props2$activeHa,
          children = _this$props2.children;
      var renderedChildren = children({
        getEventData: getEventData || NOOP,
        activeHandleID: activeHandleID,
        getRailProps: getRailProps
      });
      return renderedChildren && React__default['default'].Children.only(renderedChildren);
    }
  }]);

  return Rail;
}(React.Component);

var Handles = /*#__PURE__*/function (_Component) {
  _inherits(Handles, _Component);

  var _super = _createSuper(Handles);

  function Handles() {
    var _this;

    _classCallCheck(this, Handles);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.autofocus = function (e) {
      if (e.target instanceof HTMLElement) {
        e.target.focus();
      }
    };

    _this.getHandleProps = function (id) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props = _this.props,
          emitKeyboard = _this$props.emitKeyboard,
          emitMouse = _this$props.emitMouse,
          emitTouch = _this$props.emitTouch;
      return _objectSpread2(_objectSpread2({}, props), {}, {
        onKeyDown: callAll(props && props.onKeyDown, function (e) {
          return emitKeyboard && emitKeyboard(e, id);
        }),
        onMouseDown: callAll(props && props.onMouseDown, _this.autofocus, function (e) {
          return emitMouse && emitMouse(e, id);
        }),
        onTouchStart: callAll(props && props.onTouchStart, function (e) {
          return emitTouch && emitTouch(e, id);
        })
      });
    };

    return _this;
  }

  _createClass(Handles, [{
    key: "render",
    value: function render() {
      var getHandleProps = this.getHandleProps,
          _this$props2 = this.props,
          _this$props2$activeHa = _this$props2.activeHandleID,
          activeHandleID = _this$props2$activeHa === void 0 ? '' : _this$props2$activeHa,
          children = _this$props2.children,
          _this$props2$handles = _this$props2.handles,
          handles = _this$props2$handles === void 0 ? [] : _this$props2$handles;
      var renderedChildren = children({
        handles: handles,
        activeHandleID: activeHandleID,
        getHandleProps: getHandleProps
      });
      return renderedChildren && React__default['default'].Children.only(renderedChildren);
    }
  }]);

  return Handles;
}(React.Component);

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

var LinearScale = /*#__PURE__*/function () {
  function LinearScale() {
    var _this = this;

    _classCallCheck(this, LinearScale);

    this.interpolator = void 0;
    this.domain = [0, 1];
    this.range = [0, 1];
    this.curved = true;

    this.getPositionFromPrice = function (y) {
      // for our code, a to z is y axis i.e., price
      // r to s is x axis i.e., slider
      var _this$domain = _slicedToArray(_this.domain, 2),
          a = _this$domain[0],
          z = _this$domain[1],
          _this$range = _slicedToArray(_this.range, 2);
          _this$range[0];
          var s = _this$range[1]; // const r = 0;
      // const s = 100;
      // standard ellipse eq: x^2/a^2 + y^2/b^2 = 1 where -a<=x<=a
      // converting to our coordinates:
      //         |
      //         |z    *
      //         |    *
      //         |  .*
      // –―–―–―–―|*―–―–―–―
      //         |r    s
      //         |
      //         |-z
      //         |
      // standard eq becomes a z unit translate in y axis hence the (y-z)^2 instead of y^2
      // we also need to do a (z-a) in the bottom since our domain does not always start from zero; but a.
      // https://www.desmos.com/calculator/j7glwotha2


      return s * Math.sqrt(1 - (y - z) * (y - z) / ((z - a) * (z - a))); //x
    };

    this.getValueFromPosition = function (x) {
      var _this$domain2 = _slicedToArray(_this.domain, 2),
          a = _this$domain2[0],
          z = _this$domain2[1],
          _this$range2 = _slicedToArray(_this.range, 2);
          _this$range2[0];
          var s = _this$range2[1]; // @ts-ignore
      // const r = 0;
      // const s = 100;
      // we add a - at start since we want the bottom part of curve and a +z transform along y


      return Math.round(-(z - a) * Math.sqrt(1 - x * x / (s * s)) + z); // y
    };

    this.getValueFromPixel = function (x) {
      var _this$domain3 = _slicedToArray(_this.domain, 2),
          a = _this$domain3[0],
          z = _this$domain3[1],
          _this$range3 = _slicedToArray(_this.range, 2),
          r = _this$range3[0],
          s = _this$range3[1];

      var step = 100;
      var p = (clamp(x, r, s) - r) / (s - r); // percentage (0 to 1)

      var b = step * Math.round(_this.getValueFromPosition(p * 100) / step); // round to step int
      // console.log(`P->X->Y||= x: ${x} | Domain: ${this.domain} | Range: ${this.range} | Ret Val: ${b}`);

      return clamp(b, a < z ? a : z, z > a ? z : a);
    };

    this.domain = [0, 1];
    this.range = [0, 1];
    this.interpolator = null;
  }

  _createClass(LinearScale, [{
    key: "createInterpolator",
    value: function createInterpolator(domain, range) {
      var _this2 = this;

      var d0 = domain[0];
      var d1 = domain[1];
      var r0 = range[0];
      var r1 = range[1];

      if (d1 < d0) {
        return function (x) {
          return _this2.interpolateValue(r1, r0)(_this2.deinterpolateValue(d1, d0)(x));
        };
      } else {
        return function (x) {
          return _this2.interpolateValue(r0, r1)(_this2.deinterpolateValue(d0, d1)(x));
        };
      }
    }
  }, {
    key: "interpolateValue",
    value: function interpolateValue(a, b) {
      return a = +a, b -= a, function i(t) {
        return a + b * t;
      };
    }
  }, {
    key: "deinterpolateValue",
    value: function deinterpolateValue(a, b) {
      return (b -= a = +a) ? function (x) {
        return (x - a) / b;
      } : function () {
        return b;
      };
    }
  }, {
    key: "rescale",
    value: function rescale() {
      this.interpolator = null;
      return this;
    }
  }, {
    key: "getValue",
    value: function getValue(x) {
      if (!this.curved) {
        var domain = this.domain,
            range = this.range;
        return (this.interpolator || (this.interpolator = this.createInterpolator(domain, range)))(+x);
      } // for our code, x axis is slider (0 to 100); y axis is price (min to max price)
      // for this part, even tho var name is "x", it is referring to our price (y)
      // here domain is price; range is slider
      // given a price (y), we want to find the position in the slider range (x)
      // const { domain, range } = this;


      var retVal = this.getPositionFromPrice(x); // console.log(`Y->X||= x: ${x} | Domain: ${domain} | Range: ${range} | Ret Val: ${retVal}`);

      return retVal;
    }
  }, {
    key: "setDomain",
    value: function setDomain(val) {
      this.domain = [val[0], val[1]];
      this.rescale();
      return this;
    }
  }, {
    key: "getDomain",
    value: function getDomain() {
      return this.domain;
    }
  }, {
    key: "setRange",
    value: function setRange(val) {
      this.range = [val[0], val[1]];
      return this;
    }
  }, {
    key: "getRange",
    value: function getRange() {
      return this.range;
    }
  }, {
    key: "getTicks",
    value: function getTicks(count) {
      var d = this.curved ? this.range : this.domain; // we want to use slider values as our stuff is curved

      return d3Array.ticks(d[0], d[d.length - 1], count ? count : 10);
    }
  }]);

  return LinearScale;
}();

var defaultGetEventData = function defaultGetEventData() {
  return {
    value: 0,
    percent: 0
  };
};

var Ticks = /*#__PURE__*/function (_Component) {
  _inherits(Ticks, _Component);

  var _super = _createSuper(Ticks);

  function Ticks() {
    _classCallCheck(this, Ticks);

    return _super.apply(this, arguments);
  }

  _createClass(Ticks, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          values = _this$props.values,
          _this$props$scale = _this$props.scale,
          scale = _this$props$scale === void 0 ? new LinearScale() : _this$props$scale,
          _this$props$count = _this$props.count,
          count = _this$props$count === void 0 ? 10 : _this$props$count,
          _this$props$getEventD = _this$props.getEventData,
          getEventData = _this$props$getEventD === void 0 ? defaultGetEventData : _this$props$getEventD,
          _this$props$activeHan = _this$props.activeHandleID,
          activeHandleID = _this$props$activeHan === void 0 ? '' : _this$props$activeHan;
      var ticks = (values ? values : scale.getTicks(count)).map(function (value) {
        return {
          id: "$$-".concat(value),
          value: scale.getValueFromPixel(value),
          percent: value
        };
      });
      var renderedChildren = children({
        getEventData: getEventData,
        activeHandleID: activeHandleID,
        ticks: ticks
      });
      return renderedChildren && React__default['default'].Children.only(renderedChildren);
    }
  }]);

  return Ticks;
}(React.Component);

var defaultGetEventData$1 = function defaultGetEventData() {
  return {
    value: 0,
    percent: 0
  };
};

var Tracks = /*#__PURE__*/function (_Component) {
  _inherits(Tracks, _Component);

  var _super = _createSuper(Tracks);

  function Tracks() {
    var _this;

    _classCallCheck(this, Tracks);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.getTrackProps = function (props) {
      var _this$props = _this.props,
          emitMouse = _this$props.emitMouse,
          emitTouch = _this$props.emitTouch;
      return _objectSpread2(_objectSpread2({}, props || {}), {}, {
        onMouseDown: callAll(props && props.onMouseDown, emitMouse),
        onTouchStart: callAll(props && props.onTouchStart, emitTouch)
      });
    };

    return _this;
  }

  _createClass(Tracks, [{
    key: "render",
    value: function render() {
      var getTrackProps = this.getTrackProps,
          _this$props2 = this.props,
          children = _this$props2.children,
          _this$props2$left = _this$props2.left,
          left = _this$props2$left === void 0 ? true : _this$props2$left,
          _this$props2$right = _this$props2.right,
          right = _this$props2$right === void 0 ? true : _this$props2$right,
          _this$props2$scale = _this$props2.scale,
          scale = _this$props2$scale === void 0 ? new LinearScale() : _this$props2$scale,
          _this$props2$handles = _this$props2.handles,
          handles = _this$props2$handles === void 0 ? [] : _this$props2$handles,
          _this$props2$getEvent = _this$props2.getEventData,
          getEventData = _this$props2$getEvent === void 0 ? defaultGetEventData$1 : _this$props2$getEvent,
          _this$props2$activeHa = _this$props2.activeHandleID,
          activeHandleID = _this$props2$activeHa === void 0 ? '' : _this$props2$activeHa;
      var domain = scale.getDomain();
      var tracks = [];

      for (var i = 0; i < handles.length + 1; i++) {
        var source = handles[i - 1];
        var target = handles[i];

        if (i === 0 && left === true) {
          source = {
            id: '$',
            value: domain[0],
            percent: 0
          };
        } else if (i === handles.length && right === true) {
          target = {
            id: '$',
            value: domain[1],
            percent: 100
          };
        }

        if (source && target) {
          tracks.push({
            id: "".concat(source.id, "-").concat(target.id),
            source: source,
            target: target
          });
        }
      }

      var renderedChildren = children({
        getEventData: getEventData,
        activeHandleID: activeHandleID,
        tracks: tracks,
        getTrackProps: getTrackProps
      });
      return renderedChildren && React__default['default'].Children.only(renderedChildren);
    }
  }]);

  return Tracks;
}(React.Component);

function clamp$1(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

var DiscreteScale = function DiscreteScale() {
  var _this = this;

  _classCallCheck(this, DiscreteScale);

  this.step = 1;
  this.domain = [0, 1];
  this.range = [0, 1];

  this.setDomain = function (val) {
    _this.domain = [val[0], val[1]];
    return _this;
  };

  this.setRange = function (val) {
    _this.range = [val[0], val[1]];
    return _this;
  };

  this.setStep = function (val) {
    _this.step = val;
    return _this;
  };

  this.getValue = function (x) {
    var _this$domain = _slicedToArray(_this.domain, 2),
        d0 = _this$domain[0],
        d1 = _this$domain[1],
        _this$range = _slicedToArray(_this.range, 2),
        r0 = _this$range[0],
        r1 = _this$range[1],
        step = _this.step;

    var p = (clamp$1(x, d0, d1) - d0) / (d1 - d0);
    var b = step * Math.round(p * (r1 - r0) / step) + r0;
    return clamp$1(b, r0 < r1 ? r0 : r1, r1 > r0 ? r1 : r0);
  };
};

function clamp$2(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

var CurvedScale = /*#__PURE__*/function () {
  function CurvedScale() {
    var _this = this;

    _classCallCheck(this, CurvedScale);

    this.step = 1;
    this.domain = [0, 1];
    this.range = [0, 1];

    this.setDomain = function (val) {
      _this.domain = [val[0], val[1]];
      return _this;
    };

    this.setRange = function (val) {
      _this.range = [val[0], val[1]];
      return _this;
    };

    this.setStep = function (val) {
      _this.step = val;
      return _this;
    };

    this.getValue = function (x) {
      var _this$domain = _slicedToArray(_this.domain, 2),
          a = _this$domain[0],
          z = _this$domain[1],
          _this$range = _slicedToArray(_this.range, 2),
          r = _this$range[0],
          s = _this$range[1],
          step = _this.step;

      var p = (clamp$2(x, a, z) - a) / (z - a);
      var b = step * Math.round(_this.getValueFromPosition(p * 100) / step); // console.log(`(C)X->Y||= x: ${x} | Domain: ${this.domain} | Range: ${this.range} | Ret Val: ${b}`);

      return clamp$2(b, r < s ? r : s, s > r ? s : r);
    };

    this.getValueFromPosition = function (x) {
      var _this$range2 = _slicedToArray(_this.range, 2),
          a = _this$range2[0],
          z = _this$range2[1]; // @ts-ignore
      var s = 100;
      return Math.round(-(z - a) * Math.sqrt(1 - x * x / (s * s)) + z); // y
    };
  }

  _createClass(CurvedScale, [{
    key: "getRange",
    value: function getRange() {
      return this.range;
    }
  }, {
    key: "getDomain",
    value: function getDomain() {
      return this.domain;
    }
  }]);

  return CurvedScale;
}();

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var noop = function noop() {};

var compare = function compare(b) {
  return function (m, d, i) {
    return m && b[i] === d;
  };
};

var equal = function equal(a, b) {
  return a === b || a.length === b.length && a.reduce(compare(b), true);
};

var isRCSComponent = function isRCSComponent(item) {
  if (! /*#__PURE__*/React.isValidElement(item)) {
    return false;
  }

  var type = item.type;
  var name = type ? type.name : '';
  return name === Handles.name || name === Rail.name || name === Ticks.name || name === Tracks.name;
};

var getNextValue = function getNextValue(curr, step, domain, reversed) {
  var newVal = reversed ? curr - step : curr + step;
  return reversed ? Math.max(domain[0], newVal) : Math.min(domain[1], newVal);
};

var getPrevValue = function getPrevValue(curr, step, domain, reversed) {
  var newVal = reversed ? curr + step : curr - step;
  return reversed ? Math.min(domain[1], newVal) : Math.max(domain[0], newVal);
};

var defaultDomain = [0, 100];
var Slider = /*#__PURE__*/function (_PureComponent) {
  _inherits(Slider, _PureComponent);

  var _super = _createSuper(Slider);

  function Slider() {
    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      step: 0.1,
      values: [],
      domain: defaultDomain,
      handles: [],
      reversed: false,
      activeHandleID: '',
      valueToPerc: null,
      valueToStep: null,
      pixelToStep: null
    };
    _this.slider = /*#__PURE__*/React__default['default'].createRef();

    _this.onKeyDown = function (e, handleID) {
      var validUpKeys = ['ArrowRight', 'ArrowUp'];
      var validDownKeys = ['ArrowDown', 'ArrowLeft'];

      var _assertThisInitialize = _assertThisInitialized(_this),
          handles = _assertThisInitialize.state.handles,
          _assertThisInitialize2 = _assertThisInitialize.props,
          _assertThisInitialize3 = _assertThisInitialize2.step,
          step = _assertThisInitialize3 === void 0 ? 0.1 : _assertThisInitialize3,
          _assertThisInitialize4 = _assertThisInitialize2.reversed,
          reversed = _assertThisInitialize4 === void 0 ? false : _assertThisInitialize4,
          _assertThisInitialize5 = _assertThisInitialize2.vertical,
          vertical = _assertThisInitialize5 === void 0 ? false : _assertThisInitialize5,
          _assertThisInitialize6 = _assertThisInitialize2.domain,
          domain = _assertThisInitialize6 === void 0 ? [0, 100] : _assertThisInitialize6;

      var key = e.key || "".concat(e.keyCode);

      if (!validUpKeys.concat(validDownKeys).includes(key)) {
        return;
      }

      if (vertical) {
        var _ref = [validDownKeys, validUpKeys];
        validUpKeys = _ref[0];
        validDownKeys = _ref[1];
      }

      e.stopPropagation && e.stopPropagation();
      e.preventDefault && e.preventDefault();
      var found = handles.find(function (value) {
        return value.key === handleID;
      });

      if (!found) {
        return;
      }

      var currVal = found.val;
      var newVal = currVal;

      if (validUpKeys.includes(key)) {
        newVal = getNextValue(currVal, step, domain, reversed);
      } else if (validDownKeys.includes(key)) {
        newVal = getPrevValue(currVal, step, domain, reversed);
      }

      var nextHandles = handles.map(function (v) {
        return v.key === handleID ? {
          key: v.key,
          val: newVal
        } : v;
      });

      _this.submitUpdate(nextHandles, true);
    };

    _this.onMouseDown = function (e, handleID) {
      _this.onStart(e, handleID, false);
    };

    _this.onTouchStart = function (e, handleID) {
      if (isNotValidTouch(e)) {
        return;
      }

      _this.onStart(e, handleID, true);
    };

    _this.getEventData = function (e, isTouch) {
      var _assertThisInitialize7 = _assertThisInitialized(_this),
          _assertThisInitialize8 = _assertThisInitialize7.state,
          pixelToStep = _assertThisInitialize8.pixelToStep,
          valueToPerc = _assertThisInitialize8.valueToPerc,
          vertical = _assertThisInitialize7.props.vertical; // double check the dimensions of the slider
      // @ts-ignore


      pixelToStep.setDomain(getSliderDomain(_this.slider.current, vertical));
      var value;

      if (isTouch && e instanceof TouchEvent) {
        // @ts-ignore
        value = pixelToStep.getValue(getTouchPosition(vertical, e));
      } else if (e instanceof MouseEvent) {
        // @ts-ignore
        value = pixelToStep.getValue(vertical ? e.clientY : e.pageX);
      }

      return {
        value: value,
        // @ts-ignore
        percent: valueToPerc.getValue(value)
      };
    };

    _this.onMouseMove = function (e) {
      var _assertThisInitialize9 = _assertThisInitialized(_this),
          _assertThisInitialize10 = _assertThisInitialize9.state,
          curr = _assertThisInitialize10.handles,
          pixelToStep = _assertThisInitialize10.pixelToStep,
          _assertThisInitialize11 = _assertThisInitialize10.activeHandleID,
          activeHandleID = _assertThisInitialize11 === void 0 ? '' : _assertThisInitialize11,
          _assertThisInitialize12 = _assertThisInitialize9.props,
          vertical = _assertThisInitialize12.vertical,
          _assertThisInitialize13 = _assertThisInitialize12.reversed,
          reversed = _assertThisInitialize13 === void 0 ? false : _assertThisInitialize13; // double check the dimensions of the slider
      // @ts-ignore


      pixelToStep.setDomain(getSliderDomain(_this.slider.current, vertical)); // find the closest value (aka step) to the event location
      // @ts-ignore

      var updateValue = pixelToStep.getValue(vertical ? e.clientY : e.pageX); // generate a "candidate" set of values - a suggestion of what to do

      var nextHandles = getUpdatedHandles(curr, activeHandleID, updateValue, reversed); // submit the candidate values

      _this.submitUpdate(nextHandles);
    };

    _this.onTouchMove = function (e) {
      var _assertThisInitialize14 = _assertThisInitialized(_this),
          _assertThisInitialize15 = _assertThisInitialize14.state,
          curr = _assertThisInitialize15.handles,
          pixelToStep = _assertThisInitialize15.pixelToStep,
          activeHandleID = _assertThisInitialize15.activeHandleID,
          _assertThisInitialize16 = _assertThisInitialize14.props,
          vertical = _assertThisInitialize16.vertical,
          reversed = _assertThisInitialize16.reversed;

      if (pixelToStep === null || isNotValidTouch(e)) {
        return;
      } // double check the dimensions of the slider
      // @ts-ignore


      pixelToStep.setDomain(getSliderDomain(_this.slider.current, vertical)); // find the closest value (aka step) to the event location
      // @ts-ignore

      var updateValue = pixelToStep.getValue(getTouchPosition(vertical, e)); // generate a "candidate" set of values - a suggestion of what to do

      var nextHandles = getUpdatedHandles(curr, activeHandleID, updateValue, reversed); // submit the candidate values

      _this.submitUpdate(nextHandles);
    };

    _this.onMouseUp = function () {
      var _assertThisInitialize17 = _assertThisInitialized(_this),
          _assertThisInitialize18 = _assertThisInitialize17.state,
          _assertThisInitialize19 = _assertThisInitialize18.handles,
          handles = _assertThisInitialize19 === void 0 ? [] : _assertThisInitialize19,
          activeHandleID = _assertThisInitialize18.activeHandleID,
          _assertThisInitialize20 = _assertThisInitialize17.props,
          _assertThisInitialize21 = _assertThisInitialize20.onChange,
          onChange = _assertThisInitialize21 === void 0 ? noop : _assertThisInitialize21,
          _assertThisInitialize22 = _assertThisInitialize20.onSlideEnd,
          onSlideEnd = _assertThisInitialize22 === void 0 ? noop : _assertThisInitialize22;

      onChange(handles.map(function (d) {
        return d.val;
      }));
      onSlideEnd(handles.map(function (d) {
        return d.val;
      }), {
        activeHandleID: activeHandleID
      });

      _this.setState({
        activeHandleID: ''
      });

      if (isBrowser) {
        document.removeEventListener('mousemove', _this.onMouseMove);
        document.removeEventListener('mouseup', _this.onMouseUp);
      }
    };

    _this.onTouchEnd = function () {
      var _assertThisInitialize23 = _assertThisInitialized(_this),
          _assertThisInitialize24 = _assertThisInitialize23.state,
          handles = _assertThisInitialize24.handles,
          activeHandleID = _assertThisInitialize24.activeHandleID,
          _assertThisInitialize25 = _assertThisInitialize23.props,
          _assertThisInitialize26 = _assertThisInitialize25.onChange,
          onChange = _assertThisInitialize26 === void 0 ? noop : _assertThisInitialize26,
          _assertThisInitialize27 = _assertThisInitialize25.onSlideEnd,
          onSlideEnd = _assertThisInitialize27 === void 0 ? noop : _assertThisInitialize27;

      onChange(handles.map(function (d) {
        return d.val;
      }));
      onSlideEnd(handles.map(function (d) {
        return d.val;
      }), {
        activeHandleID: activeHandleID
      });

      _this.setState({
        activeHandleID: ''
      });

      if (isBrowser) {
        document.removeEventListener('touchmove', _this.onTouchMove);
        document.removeEventListener('touchend', _this.onTouchEnd);
      }
    };

    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pixelToStep = this.state.pixelToStep;
      var vertical = this.props.vertical; // @ts-ignore

      pixelToStep.setDomain(getSliderDomain(this.slider.current, vertical));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeListeners();
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      if (isBrowser) {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "onStart",
    value: function onStart(e, handleID, isTouch) {
      var handles = this.state.handles,
          _this$props$onSlideSt = this.props.onSlideStart,
          onSlideStart = _this$props$onSlideSt === void 0 ? noop : _this$props$onSlideSt;

      if (!isTouch) {
        e.preventDefault && e.preventDefault();
      }

      e.stopPropagation && e.stopPropagation();
      var found = handles.find(function (value) {
        return value.key === handleID;
      });

      if (found) {
        this.setState({
          activeHandleID: handleID
        });
        onSlideStart(handles.map(function (d) {
          return d.val;
        }), {
          activeHandleID: handleID
        });
        isTouch ? this.addTouchEvents() : this.addMouseEvents();
      } else {
        this.setState({
          activeHandleID: ''
        });
        this.handleRailAndTrackClicks(e, isTouch);
      }
    }
  }, {
    key: "handleRailAndTrackClicks",
    value: function handleRailAndTrackClicks(e, isTouch) {
      var _this2 = this;

      var _this$state = this.state,
          curr = _this$state.handles,
          pixelToStep = _this$state.pixelToStep,
          _this$props = this.props,
          vertical = _this$props.vertical,
          _this$props$reversed = _this$props.reversed,
          reversed = _this$props$reversed === void 0 ? false : _this$props$reversed;
      var slider = this.slider; // double check the dimensions of the slider
      // @ts-ignore

      pixelToStep.setDomain(getSliderDomain(slider.current, vertical)); // find the closest value (aka step) to the event location

      var updateValue;

      if (isTouch) {
        // @ts-ignore
        updateValue = pixelToStep.getValue(getTouchPosition(vertical, e));
      } else {
        // @ts-ignore
        updateValue = pixelToStep.getValue(vertical ? e.clientY : e.pageX);
      } // find the closest handle key


      var updateKey = '';
      var minDiff = Infinity;

      for (var i = 0; i < curr.length; i++) {
        var _curr$i = curr[i],
            key = _curr$i.key,
            val = _curr$i.val;
        var diff = Math.abs(val - updateValue);

        if (diff < minDiff) {
          updateKey = key;
          minDiff = diff;
        }
      } // generate a "candidate" set of values - a suggestion of what to do


      var nextHandles = getUpdatedHandles(curr, updateKey, updateValue, reversed); // submit the candidate values

      this.setState({
        activeHandleID: updateKey
      }, function () {
        _this2.submitUpdate(nextHandles, true);

        isTouch ? _this2.addTouchEvents() : _this2.addMouseEvents();
      });
    }
  }, {
    key: "addMouseEvents",
    value: function addMouseEvents() {
      if (isBrowser) {
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
      }
    }
  }, {
    key: "addTouchEvents",
    value: function addTouchEvents() {
      if (isBrowser) {
        document.addEventListener('touchmove', this.onTouchMove);
        document.addEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "submitUpdate",
    value: function submitUpdate(next) {
      var callOnChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props2 = this.props,
          _this$props2$mode = _this$props2.mode,
          mode = _this$props2$mode === void 0 ? 1 : _this$props2$mode,
          _this$props2$step = _this$props2.step,
          step = _this$props2$step === void 0 ? 0.1 : _this$props2$step,
          _this$props2$onUpdate = _this$props2.onUpdate,
          onUpdate = _this$props2$onUpdate === void 0 ? noop : _this$props2$onUpdate,
          _this$props2$onChange = _this$props2.onChange,
          onChange = _this$props2$onChange === void 0 ? noop : _this$props2$onChange,
          _this$props2$reversed = _this$props2.reversed,
          reversed = _this$props2$reversed === void 0 ? false : _this$props2$reversed; //@ts-ignore

      var getValue = this.state.valueToStep.getValue;
      this.setState(function (_ref2) {
        var curr = _ref2.handles;
        var handles = []; // given the current handles and a candidate set, decide what to do

        if (typeof mode === 'function') {
          handles = mode(curr, next, step, reversed, getValue);
          warning__default['default'](Array.isArray(handles), 'Custom mode function did not return an array.');
        } else {
          switch (mode) {
            case 1:
              handles = mode1(curr, next);
              break;

            case 2:
              handles = mode2(curr, next);
              break;

            case 3:
              handles = mode3(curr, next, step, reversed, getValue);
              break;

            default:
              handles = next;
              warning__default['default'](false, "".concat(prfx, " Invalid mode value."));
          }
        }

        onUpdate(handles.map(function (d) {
          return d.val;
        }));

        if (callOnChange) {
          onChange(handles.map(function (d) {
            return d.val;
          }));
        }

        return {
          handles: handles
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          handles = _this$state2.handles,
          valueToPerc = _this$state2.valueToPerc,
          activeHandleID = _this$state2.activeHandleID,
          _this$props3 = this.props,
          className = _this$props3.className,
          _this$props3$rootStyl = _this$props3.rootStyle,
          rootStyle = _this$props3$rootStyl === void 0 ? {} : _this$props3$rootStyl,
          _this$props3$rootProp = _this$props3.rootProps,
          rootProps = _this$props3$rootProp === void 0 ? {} : _this$props3$rootProp,
          _this$props3$componen = _this$props3.component,
          Comp = _this$props3$componen === void 0 ? 'div' : _this$props3$componen,
          _this$props3$disabled = _this$props3.disabled,
          disabled = _this$props3$disabled === void 0 ? false : _this$props3$disabled,
          _this$props3$flatten = _this$props3.flatten,
          flatten = _this$props3$flatten === void 0 ? false : _this$props3$flatten;
      var mappedHandles = handles.map(function (_ref3) {
        var key = _ref3.key,
            val = _ref3.val;
        // @ts-ignore
        return {
          id: key,
          value: val,
          percent: valueToPerc.getValue(val)
        };
      });
      var children = React__default['default'].Children.map(this.props.children, function (child) {
        if (isRCSComponent(child) === true) {
          return /*#__PURE__*/React__default['default'].cloneElement(child, {
            scale: valueToPerc,
            handles: mappedHandles,
            activeHandleID: activeHandleID,
            getEventData: _this3.getEventData,
            emitKeyboard: disabled ? noop : _this3.onKeyDown,
            emitMouse: disabled ? noop : _this3.onMouseDown,
            emitTouch: disabled ? noop : _this3.onTouchStart
          });
        } else {
          return child;
        }
      });
      return flatten ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Comp, _objectSpread2(_objectSpread2({}, rootProps), {}, {
        style: rootStyle,
        className: className,
        ref: this.slider
      })), children) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Comp, _objectSpread2(_objectSpread2({}, rootProps), {}, {
        style: rootStyle,
        className: className,
        ref: this.slider
      }), children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var _nextProps$step = nextProps.step,
          step = _nextProps$step === void 0 ? 0.1 : _nextProps$step,
          values = nextProps.values,
          _nextProps$domain = nextProps.domain,
          domain = _nextProps$domain === void 0 ? defaultDomain : _nextProps$domain,
          _nextProps$reversed = nextProps.reversed,
          reversed = _nextProps$reversed === void 0 ? false : _nextProps$reversed,
          _nextProps$onUpdate = nextProps.onUpdate,
          onUpdate = _nextProps$onUpdate === void 0 ? noop : _nextProps$onUpdate,
          _nextProps$onChange = nextProps.onChange,
          onChange = _nextProps$onChange === void 0 ? noop : _nextProps$onChange,
          _nextProps$warnOnChan = nextProps.warnOnChanges,
          warnOnChanges = _nextProps$warnOnChan === void 0 ? false : _nextProps$warnOnChan;
      var valueToPerc = prevState.valueToPerc;
      var valueToStep = prevState.valueToStep;
      var pixelToStep = prevState.pixelToStep;
      var nextState = {};

      if (!valueToPerc || !valueToStep || !pixelToStep) {
        valueToPerc = new LinearScale();
        valueToStep = new DiscreteScale();
        pixelToStep = new CurvedScale();
        nextState.valueToPerc = valueToPerc;
        nextState.valueToStep = valueToStep;
        nextState.pixelToStep = pixelToStep;
      }

      if (prevState.domain === defaultDomain || prevState.step === null || prevState.domain === null || prevState.reversed === null || step !== prevState.step || domain[0] !== prevState.domain[0] || domain[1] !== prevState.domain[1] || reversed !== prevState.reversed) {
        var _domain = _slicedToArray(domain, 2),
            min = _domain[0],
            max = _domain[1];

        valueToStep.setStep(step).setRange([min, max]).setDomain([min, max]);

        if (reversed === true) {
          valueToPerc.setDomain([min, max]).setRange([100, 0]);
          pixelToStep.setStep(step).setRange([max, min]);
        } else {
          valueToPerc.setDomain([min, max]).setRange([0, 100]);
          pixelToStep.setStep(step).setRange([min, max]);
        }

        warning__default['default'](max > min, "".concat(prfx, " Max must be greater than min (even if reversed). Max is ").concat(max, ". Min is ").concat(min, "."));

        var _getHandles = getHandles(values || prevState.values, reversed, valueToStep, warnOnChanges),
            handles = _getHandles.handles,
            changes = _getHandles.changes;

        if (changes || values === undefined || values === prevState.values) {
          onUpdate(handles.map(function (d) {
            return d.val;
          }));
          onChange(handles.map(function (d) {
            return d.val;
          }));
        }

        nextState.step = step;
        nextState.values = values;
        nextState.domain = domain === defaultDomain ? _toConsumableArray(domain) : domain;
        nextState.handles = handles;
        nextState.reversed = reversed;
      } else if (!equal(values, prevState.values)) {
        var _getHandles2 = getHandles(values, reversed, valueToStep, warnOnChanges),
            _handles = _getHandles2.handles,
            _changes = _getHandles2.changes;

        if (_changes) {
          onUpdate(_handles.map(function (d) {
            return d.val;
          }));
          onChange(_handles.map(function (d) {
            return d.val;
          }));
        }

        nextState.values = values;
        nextState.handles = _handles;
      }

      if (Object.keys(nextState).length) {
        return nextState;
      }

      return null;
    }
  }]);

  return Slider;
}(React.PureComponent);

exports.Handles = Handles;
exports.Rail = Rail;
exports.Slider = Slider;
exports.Ticks = Ticks;
exports.Tracks = Tracks;
exports.mode1 = mode1;
exports.mode2 = mode2;
exports.mode3 = mode3;
//# sourceMappingURL=rcs.cjs.development.js.map
