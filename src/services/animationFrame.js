import { Subject, interval } from 'rxjs';
import { throttle as t, first } from 'rxjs/operators';

const subject = new Subject();
const measureSubject = new Subject();

if (process.browser) {
  global.requestAnimationFrame(update);
}

function update(time) {
  subject.next(time);
  setTimeout(() => {
    measureSubject.next(time);
    window.requestAnimationFrame(update);
  }, 0);
}

export const render = subject;
export const measure = measureSubject;

export function subscribe(renderFn, measureFn, renderPipes = []) {
  return subject.pipe(...renderPipes).subscribe(time => {
    renderFn(time);
    measureSubject.pipe(first()).subscribe(measureFn);
  });
}

export function subscribeThrottle(cb1, cb2, frameRate = 60) {
  subscribe(cb1, cb2, [throttle(frameRate)]);
}

export function throttle(frameRate) {
  return t(() => interval(1000 / frameRate));
}
