'use strict';

module.exports = value => {
	if (!value) {
		return false;
	}

	// eslint-disable-next-line no-use-extend-native/no-use-extend-native
	if (value[Symbol.observable] && value === value[Symbol.observable]()) {
		return true;
	}

	if (value['@@observable'] && value === value['@@observable']()) {
		return true;
	}

	return false;
};
