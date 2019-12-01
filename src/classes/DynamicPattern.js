
export default class DynamicPattern {
  constructor() {

  }

  update (e, context) {
    console.log('e', e, context.canvas.width, context);

    const w = Math.floor(0.25 * context.canvas.width);
    const h = Math.floor(0.25 * context.canvas.height);
    return context.getImageData(e.layerX - w, e.layerY - h, w * 2, h * 2);
  }

}
