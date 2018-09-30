import { Subject, interval } from 'rxjs';
import { throttle as t } from 'rxjs/operators';

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

export function subscribeThrottle(cb1, cb2, frameRate = 60) {
  return subject.pipe(throttle(frameRate)).subscribe(time => {
    cb1(time);
    setTimeout(() => {
      cb2();
    }, 0);
  });
}

export function throttle(frameRate) {
  return t(() => interval(1000 / frameRate));
}
