"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Foo", {
  enumerable: true,
  get: function get() {
    return _Foo.default;
  }
});
Object.defineProperty(exports, "Bar", {
  enumerable: true,
  get: function get() {
    return _Bar.default;
  }
});

var _Foo = _interopRequireDefault(require("./Foo"));

var _Bar = _interopRequireDefault(require("./Bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }