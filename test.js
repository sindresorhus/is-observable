import test from 'ava';
import zenObservable from 'zen-observable';
import fn from './';

// for `zen-observable` on Node.js 0.10
global.Promise = Promise;

test(t => {
	t.true(fn(zenObservable.of(1, 2)));
	t.false(fn(null));
	t.false(fn({foo: true}));
	t.false(fn(function () {}));
	t.end();
});
