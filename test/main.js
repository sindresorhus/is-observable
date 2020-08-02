import test from 'ava';
import zenObservable from 'zen-observable';
import {of as rxOf} from 'rxjs';
import * as most from 'most';
import {Stream as xstream} from 'xstream';
import {IndefiniteObservable} from 'indefinite-observable';
import isObservable from '..';

test('main', t => {
	t.true(isObservable(zenObservable.of(1)));
	t.true(isObservable(rxOf(1)));
	t.true(isObservable(most.of(1)));
	t.true(isObservable(xstream.of(1)));
	t.true(isObservable(new IndefiniteObservable(() => {})));

	t.false(isObservable(undefined));
	t.false(isObservable({foo: true}));
	t.false(isObservable(() => {}));
});
