'use strict';
const $$observable = require('symbol-observable').default;

module.exports = value => Boolean(value && value[$$observable] && value === value[$$observable]());
