
export default class DynamicPattern {
  constructor() {

  }

  update (e, context) {
    console.log('e', e, context.canvas.width, context);

    const w = 80;
    const h = 80;
    return context.getImageData(e.layerX - w, e.layerY - h, w * 2, h * 2);
  }

}
