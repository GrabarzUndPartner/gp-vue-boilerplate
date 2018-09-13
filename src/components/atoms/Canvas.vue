<template>
  <canvas
    :width="width"
    :height="height"/>
</template>

<script>
// import greyscale from '../../filter/greyscale.js';
import labcie from '../../filter/labcie.js';
import { subscribeThrottle } from '../../services/animationFrame';

export default {
  props: {
    source: {
      type: global.HTMLVideoElement,
      default: function () {
        return new global.HTMLVideoElement();
      }
    }
  },
  data() {
    return {
      context: null,
      raw: null,
      result: null,
      width: 0,
      height: 0
    };
  },

  watch: {
    source: {
      handler(source) {
        console.log('SOURCE CHANGE', source);
        if (source) {
          this.setup(source);
        }
      },
      immediate: false
    },
  },

  mounted() {
    console.log('MOUNTED', this.$el, this.source);
    this.context = this.$el.getContext('2d');
    if (this.source) {
      this.setup(this.source);
    }
  },
  destroyed() {
    this.raw = null;
    this.result = null;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    console.log('DESTROY BASE12');
  },
  methods: {
    setup(source) {
      // if (this.$el) {
      console.log('SETUP', source, this.$el);


      let frameRate = this.source.constraints.frameRate;
      this.width = source.width || source.videoWidth;
      this.height = source.height || source.videoHeight;
      this.raw = createImageBuffer(this.context, this.width, this.height);
      this.result = createImageBuffer(this.context, this.width, this.height);

      this.subscription = subscribeThrottle(update.bind(this), frameRate);
      // }
    },

    update(source, width, height) {
      this.context.drawImage(source, 0, 0, width, height);
      this.rgb = this.context.getImageData(0, 0, width, height);
      let filter = labcie(this.rgb, this.raw, this.result);
      this.context.putImageData(filter, 0, 0);
    }
  }
};

function createImageBuffer(context, width, height) {
  const buffer = context.createImageData(width, height);
  buffer.average = [0, 0, 0];
  buffer.count = 0;
  return buffer;
}

function update() {
  this.context.drawImage(this.source, 0, 0, this.width, this.height);
  this.rgb = this.context.getImageData(0, 0, this.width, this.height);
  let filter = labcie(this.rgb, this.raw, this.result);
  this.context.putImageData(filter, 0, 0);
}
</script>

<style lang="postcss">
</style>
