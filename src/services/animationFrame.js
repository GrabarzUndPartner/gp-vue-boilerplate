import { Subject, interval } from 'rxjs';
import { throttle as t } from 'rxjs/operators';

const subject = new Subject();
const measureSubject = new Subject();

if (process.browser) {
  console.log(global);
  global.requestAnimationFrame(update);
}

function update(time) {
  window.requestAnimationFrame(update);
  subject.next(time);
  setTimeout(() => {
    measureSubject.next(time);
  }, 0);
}

export const render = subject;
export const measure = measureSubject;

export function subscribeThrottle(callback, frameRate = 60) {
  return subject.pipe(throttle(frameRate)).subscribe(callback);
}

export function throttle(frameRate) {
  return t(() => interval(1000 / frameRate));
}
