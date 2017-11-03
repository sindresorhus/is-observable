'use strict';
const symbolObservable = require('symbol-observable').default;

module.exports = fn => Boolean(fn && fn[symbolObservable]);
