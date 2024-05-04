import { fromEvent, timer } from 'rxjs';
import { map, debounce, startWith, share } from 'rxjs/operators';
import { Victor, ipoint } from '@js-basics/vector';
import { getScrollObserver, getScrollPos } from './scroll';

export const resizeObserver = fromEvent(window, 'resize').pipe(
  startWith(0),
  debounce(() => timer(350)),
  map(() => getWindowSize()),
  share()
);

let lastPosition = getScrollPos();

export const scrollObserver = getScrollObserver().pipe(
  map(position => {
    const clampPosition = ipoint(
      position.x,
      Math.max(position.y, 0),
      position.z
    );
    const direction = new Victor(
      () =>
        (clampPosition - lastPosition) / Math.abs(clampPosition - lastPosition)
    );
    lastPosition = clampPosition;
    return {
      position,
      direction
    };
  }),
  share()
);

export const orientationObserver = fromEvent(window, 'orientationchange').pipe(
  startWith(0),
  debounce(() => timer(350)),
  map(() => getWindowSize()),
  share()
);

function getWindowSize() {
  const win = typeof window !== 'undefined' && window;
  const doc = typeof win.document !== 'undefined' && win.document;
  const docElem = doc && doc.documentElement;
  return new Victor(
    getSize(docElem.clientWidth, win.innerWidth),
    getSize(docElem.clientHeight, win.innerHeight)
  );
}

function getSize(a, b) {
  return a < b ? b : a;
}
