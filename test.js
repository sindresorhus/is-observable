import test from 'ava';
import zenObservable from 'zen-observable';
import Rx from 'rxjs';
import * as most from 'most';
import {Stream as xstream} from 'xstream';

/* eslint-disable import/extensions */
import {isObservable as asModule} from './index.module.js';
import asCommonJS from './index.node.js';
/* eslint-enable import/extensions */

[asCommonJS, asModule].forEach(
	isObservable => {
		test(t => {
			t.true(isObservable(zenObservable.of(1, 2)));
			t.true(isObservable(Rx.Observable.of(1)));
			t.true(isObservable(most.of(1)));
			t.true(isObservable(xstream.of(1)));
			t.false(isObservable(null));
			t.false(isObservable({foo: true}));
			t.false(isObservable(() => {}));
		});
	}
);
