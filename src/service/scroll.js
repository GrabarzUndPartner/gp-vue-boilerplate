import { fromEvent } from 'rxjs';
import { startWith, map, share } from 'rxjs/operators';
import { Victor } from '@js-basics/vector';

const observer = new Map();

export const scrollObserver = getScrollObserver();

export function getScrollObserver (el = global) {
  if (!observer.has(el)) {
    observer.set(el, fromEvent(el, 'scroll'));
  }
  return observer.get(el)
    .pipe(
      startWith(0),
      map(() => {
        return getScrollPos(el);
      }),
      share()
    );
}

export function getScrollPos (el = global) {
  return new Victor(
    el.scrollLeft || global.pageXOffset || global.document.documentElement.scrollLeft,
    el.scrollTop || global.pageYOffset || global.document.documentElement.scrollTop
  );
}
