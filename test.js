import test from 'ava';
import zenObservable from 'zen-observable';
import m from '.';

test(t => {
	t.true(m(zenObservable.of(1, 2)));
	t.false(m(null));
	t.false(m({foo: true}));
	t.false(m(() => {}));
});
