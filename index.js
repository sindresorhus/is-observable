'use strict';
const symbolObservable = require('symbol-observable');

module.exports = fn => Boolean(fn && fn[symbolObservable]);
