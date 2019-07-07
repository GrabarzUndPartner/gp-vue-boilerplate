import { fromEvent, timer } from 'rxjs';
import { debounce, map } from 'rxjs/operators';

let x = 0;
let y = 0;
const w = global || {};
const d = w.document || {};
const e = d.documentElement;
let g = null;
if (e) {
  g = d.getElementsByTagName('body')[0];
}

const observer = fromEvent(global, 'resize').pipe(
  debounce(() => timer(350)),
  map(() => {
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    y = w.innerHeight || e.clientHeight || g.clientHeight;
    return { x: x, y: y };
  })
);

export function subscribeToViewport (fn) {
  observer.subscribe(value => fn(value));
}
