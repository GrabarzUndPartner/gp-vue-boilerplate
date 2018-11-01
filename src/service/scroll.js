import { fromEvent } from 'rxjs';

const observer = new Map();
const pos = { x: 0, y: 0 };

export function subscribeToScroll(fn, el = global) {
  if (!observer.has(el)) {
    observer.set(el, fromEvent(el, 'scroll'));
  }
  return observer.get(el).subscribe(fn);
}

export function getScrollPos(el = global) {
  const w = global;
  const e = global.document.documentElement;
  pos.x = el.scrollLeft || w.pageXOffset || e.scrollLeft;
  pos.y = el.scrollTop || w.pageYOffset || e.scrollTop;
  return pos;
}
