import ImageBuffer from '../../classes/ImageBuffer';

self.values = null;
const imageBuffer = new ImageBuffer();

function process(source) {
  imageBuffer.setBuffer(source.buffer);
  imageBuffer.doFilter(self.tick, self.start, self.end);
  return source;
}

self.addEventListener('message', e => {
  self.postMessage(process(e.data));
});
