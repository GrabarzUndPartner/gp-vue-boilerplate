import { fromEvent } from 'rxjs';

fromEvent(self, 'message').subscribe((e) => {
  const array = new Uint8ClampedArray(e.data.buffer);
  setTimeout(() => {
    self.postMessage(array);
  }, 2000);
});

