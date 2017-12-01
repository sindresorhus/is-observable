'use strict';
var symbolObservable = require('symbol-observable').default;

module.exports = function (fn) {
  return Boolean(fn && fn[symbolObservable]);
}
