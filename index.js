'use strict';
var symbolObservable = require('symbol-observable').default;

module.exports = function (value) {
	return Boolean(value && value[symbolObservable] && value === value[symbolObservable]());
};
