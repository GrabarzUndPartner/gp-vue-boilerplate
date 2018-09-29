<template>
  <div>
    <no-ssr>
      <canvas-base
        ref="debug"
        :source="source"
        :filter-name="['image/default']"
        class="debug"/>
    </no-ssr>
    <no-ssr>
      <canvas-base
        :source="source"
        :filter-name="['image/greyscale']"
        class="debug"/>
    </no-ssr>
    <no-ssr>
      <canvas-base
        :source="source"
        :filter-name="['image/labcie']"
        class="debug"/>
    </no-ssr>
    <no-ssr>
      <canvas-base
        ref="debug"
        :source="source"
        :filter-name="['image/labcie', 'image/contour']"
        class="debug"/>
    </no-ssr>
    <camera
      class="camera"
      @loadedmetadata.native="setup"/>
  </div>
</template>

<script>
import Camera from '../atoms/Camera';
import CanvasBase from '../atoms/Canvas';
import { subscribeThrottle } from '../../services/animationFrame';
import WorkerPipeline from '../../classes/WorkerPipeline';

export default {
  components: {
    Camera,
    CanvasBase
  },

  data() {
    return {
      source: null
    };
  },
  mounted() {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');


    let pipeline = new WorkerPipeline(['test1', ['test2', 'test3', 'test4'], 'test5']);

    pipeline.subscribe((data) => {
      console.log(data);
    });
    setTimeout(() => {
      pipeline.send('hello');
    }, 1000);

    setTimeout(() => {
      pipeline.send('huhu');
    }, 2000);

  },
  destroyed() {
    this.subscription.unsubscribe();
  },
  methods: {
    setup(e) {
      this.video = e.target;
      this.canvas.constraints = e.target.constraints;
      this.subscription = subscribeThrottle(update.bind(this), this.canvas.constraints.frameRate);
    }
  }
};

function update() {
  this.canvas.width = this.video.constraints.width;
  this.canvas.height = this.video.constraints.height;
  this.context.drawImage(this.video, 0, 0);
  setTimeout(() => {
    if (!this.source) {
      this.source = this.canvas;
    }
    this.canvas.data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
  }, 0);

}
</script>

<style lang="postcss" scoped>
.camera {
  position: fixed;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
}
</style>
