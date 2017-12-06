import test from 'ava';
import zenObservable from 'zen-observable';
import Rx from 'rxjs';
import * as most from 'most';
import {Stream as xstream} from 'xstream';

// eslint-disable-next-line import/extensions
import isObservable from './index.node.js';

test(t => {
	t.true(isObservable(zenObservable.of(1, 2)));
	t.true(isObservable(Rx.Observable.of(1)));
	t.true(isObservable(most.of(1)));
	t.true(isObservable(xstream.of(1)));
	t.false(isObservable(null));
	t.false(isObservable({foo: true}));
	t.false(isObservable(() => {}));
});
