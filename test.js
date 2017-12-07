import test from 'ava';
import zenObservable from 'zen-observable';
import Rx from 'rxjs';
import * as most from 'most';
import {Stream as xstream} from 'xstream';
import {IndefiniteObservable} from 'indefinite-observable';
import m from '.';

test(t => {
	t.true(m(zenObservable.of(1)));
	t.true(m(Rx.Observable.of(1)));
	t.true(m(most.of(1)));
	t.true(m(xstream.of(1)));
	t.true(m(new IndefiniteObservable(() => {})));

	t.false(m(null));
	t.false(m({foo: true}));
	t.false(m(() => {}));
});
