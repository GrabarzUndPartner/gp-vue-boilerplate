import { fromEvent, timer } from 'rxjs';
import { map, debounce, startWith, share } from 'rxjs/operators';
import verge from 'verge';
import { Victor } from '@js-basics/vector';
import { getScrollObserver } from './scroll';

export const resizeObserver = fromEvent(global, 'resize')
  .pipe(
    startWith(0),
    debounce(() => timer(350)),
    map(() => new Victor(verge.viewportW(), verge.viewportH())),
    share()
  );

let lastPosition = new Victor(verge.scrollX(), verge.scrollY());

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
    map(() => new Victor(verge.viewportW(), verge.viewportH())),
    share()
  );
