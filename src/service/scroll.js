import { fromEvent, startWith, map, share } from 'rxjs';
import { Victor } from '@js-basics/vector';

const observer = new Map();

export const scrollObserver = getScrollObserver();

export function getScrollObserver(el = window) {
  if (!observer.has(el)) {
    observer.set(el, fromEvent(el, 'scroll', { passive: true }));
  }
  return observer.get(el).pipe(
    startWith(0),
    map(() => {
      return getScrollPos(el);
    }),
    share()
  );
}

export function getScrollPos(el = window) {
  const doc = window.document;
  const docElem = (doc && doc.documentElement) || {
    scrollLeft: 0,
    scrollTop: 0
  };
  return new Victor(
    el.scrollLeft || window.pageXOffset || docElem.scrollLeft,
    el.scrollTop || window.pageYOffset || docElem.scrollTop
  );
}
