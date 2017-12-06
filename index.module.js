import $$observable from 'symbol-observable';

export const isObservable = value => Boolean(value && value[$$observable]) && value === value[$$observable]();
export default isObservable;
