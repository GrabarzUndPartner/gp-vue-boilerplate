
export default class DynamicPattern {
  constructor() {

  }

  updateSource (e, context) {
    this.lastTime = new Date().getTime();

    const size = Math.min(context.canvas.width, context.canvas.height) / 2;
    return context.getImageData(e.x - size, e.y - size, size * 2, size * 2);
  }
  update (e, context) {
    let lastTime = this.lastTime || new Date().getTime();
    let time = new Date().getTime();
    if (time - lastTime > 2000) {
      return this.updateSource(e, context);
    }
  }
}
