import test from 'ava';
import isObservable from '..';

const fake1 = {'@@observable': true};
const fake2 = {undefined: true};
const fake3 = {
	undefined() {
		return this;
	}
};

test('strict', t => {
	// Symbol.observable is defined via AVA
	delete Symbol.observable;
	// eslint-disable-next-line no-use-extend-native/no-use-extend-native
	t.is(Symbol.observable, undefined);
	t.false(isObservable(fake1));
	t.false(isObservable(fake2));
	t.false(isObservable(fake3));
});
