import { fromEvent, timer } from 'rxjs';
import { map, debounce, startWith, share } from 'rxjs/operators';
import { Victor } from '@js-basics/vector';
import { getScrollObserver, getScrollPos } from './scroll';

export const resizeObserver = fromEvent(global, 'resize')
  .pipe(
    startWith(0),
    debounce(() => timer(350)),
    map(() => getWindowSize()),
    share()
  );

let lastPosition = getScrollPos();

export const scrollObserver = getScrollObserver().pipe(
  map((position) => {
    const direction = new Victor(() => (position - lastPosition) / Math.abs(position - lastPosition));
    lastPosition = position;
    return {
      position,
      direction
    };
  }),
  share()
);

export const orientationObserver = fromEvent(global, 'orientationchange')
  .pipe(
    startWith(0),
    debounce(() => timer(350)),
    map(() => getWindowSize()),
    share()
  );

function getWindowSize () {
  const win = typeof global !== 'undefined' && global;
  const doc = typeof win.document !== 'undefined' && win.document;
  const docElem = doc && doc.documentElement;
  return new Victor(getSize(docElem.clientWidth, win.innerWidth), getSize(docElem.clientHeight, win.innerHeight));
}

function getSize (a, b) {
  return a < b ? b : a;
}
