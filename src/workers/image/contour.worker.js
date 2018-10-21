import '../image.base';

self.importScripts(
  'https://huningxin.github.io/opencv.js/build/asm.js/opencv.js'
);

// function show(output, mat) {
//   var img = new self.cv.Mat();
//   var depth = mat.type() % 8;
//   var scale =
//     depth <= self.cv.CV_8S ? 1 : depth <= self.cv.CV_32S ? 1 / 256 : 255;
//   var shift = depth === self.cv.CV_8S || depth === self.cv.CV_16S ? 128 : 0;
//   mat.convertTo(img, self.cv.CV_8U, scale, shift);

//   const data = new Uint8ClampedArray(img.data);

//   // data.forEach((v, i) => (output.data[i] = v));

//   for (let i = data.length - 1; i >= 0; i--) {
//     output.data[i] = data[i];
//   }

//   img.delete();
// }

function drawContour(input, output) {
  let src = self.cv.matFromImageData(input);
  for (let i = 0; i < src.data.length; i += 4) {
    if (!src.data[i + 3]) {
      src.data[i + 0] = 0;
      src.data[i + 1] = 0;
      src.data[i + 2] = 0;
    }
  }
  // let src = cv.imread(input);
  let dst = self.cv.Mat.zeros(src.rows, src.cols, self.cv.CV_8UC3);
  self.cv.cvtColor(src, src, self.cv.COLOR_RGBA2GRAY, 0);
  // self.cv.threshold(src, src, 120, 200, self.cv.THRESH_MASK);
  //cv.Canny(src, dst, 20, 180, 3);
  let contours = new self.cv.MatVector();
  let hierarchy = new self.cv.Mat();
  // You can try more different parameters
  self.cv.findContours(
    src,
    contours,
    hierarchy,
    self.cv.RETR_CCOMP,
    self.cv.CHAIN_APPROX_SIMPLE
  );
  // console.warn('contours', contours);
  // draw contours with random Scalar
  let c = 0;

  const sorted = new Array(contours.size())
    .fill(0)
    .map((val, i) => contours.get(i));
  sorted.sort((a, b) => a.width * a.height - b.width * b.height);

  for (let i = 0; i < Math.min(3, sorted.length); i++) {
    let rect = self.cv.boundingRect(sorted[i]);

    // if (rect.width * rect.height > 40) {
    c += 0.2;
    // let color = new cv.Scalar(
    //   Math.round(Math.random() * 255),
    //   Math.round(Math.random() * 255),
    //   Math.round(Math.random() * 255)
    // );
    // cv.drawContours(dst, contours, i, color, 1, cv.LINE_8, hierarchy, 100);

    // let color = [Math.random(), Math.random(), Math.random()];
    let color = [0.2 + (c % 1), 0.2 + (c % 1), 0.2 + (c % 1)];

    for (let x = rect.x; x < rect.x + rect.width; x++) {
      for (let y = rect.y; y < rect.y + rect.height; y++) {
        const index = y * input.width + x;

        output.data[index * 4 + 0] = Math.round(color[0] * 255);
        output.data[index * 4 + 1] = Math.round(color[1] * 255);
        output.data[index * 4 + 2] = Math.round(color[2] * 255);
        output.data[index * 4 + 3] = 255;
      }
    }
    // }
  }

  // show(output, dst);

  // cv.imshow(output, dst);
  src.delete();
  dst.delete();
  contours.delete();
  hierarchy.delete();
}

self.end = function(imageData) {
  drawContour(imageData, imageData);
};
