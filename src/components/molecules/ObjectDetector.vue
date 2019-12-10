<template>
  <div>
    <h2>Pattern: Original + Canvas</h2>
    <atom-canvas-image
      url="/original3_square.jpg"
      @imagedata="onPatternUpdate"
    />
    <h2>Detected Corners</h2>
    <atom-canvas-debug
      v-for="(config, index) in options"
      :key="index"
      :options="config"
    />

    <h2>Cam: Original + Canvas</h2>
    <atom-canvas-video
      :fps="Number(10)"
      @load="onVideoLoad"
      @imagedata="onUpdate"
    />
    <h2>Detected Corners</h2>
    <atom-canvas-debug :options="debugOptionsA" />
    <h2>Matches</h2>
    <atom-canvas-debug :options="debugOptionsB" />
  </div>
</template>

<script>
import AtomCanvasImage from '@/components/atoms/canvas/Image';
import AtomCanvasVideo from '@/components/atoms/canvas/Video';
import AtomCanvasDebug from '@/components/atoms/canvas/Debug';
import jsfeat from 'jsFeat';
import Pattern from '@/classes/Pattern';
// import Source from '@/classes/Source';
import Source from '@/classes/SplitSource';
import DynamicPattern from '@/classes/DynamicPattern';

export default {
  components: {
    AtomCanvasImage,
    AtomCanvasVideo,
    AtomCanvasDebug
  },

  data () {
    return {
      pipeline: null,
      options: [],
      imageData: null,
      pattern: new Pattern(),
      source: new Source(),
      dynamic: new DynamicPattern(),
      debugOptionsA: null,
      debugOptionsB: null,
      matches: [],
      matchesPattern: [],
      corners: null,
      cornersPattern: null
    };
  },

  watch: {
    'pipeline.running': (e) => {
      console.log('RUNNING', e);
    }
  },

  mounted () {
    jsfeat.fast_corners.set_threshold(20);
    jsfeat.yape06.laplacian_threshold = 30 | 0;
    jsfeat.yape06.min_eigen_value_threshold = 25 | 0;
    this.screen_descriptors = new jsfeat.matrix_t(32, 500, jsfeat.U8_t | jsfeat.C1_t);
    this.pattern_descriptors = new jsfeat.matrix_t(32, 300, jsfeat.U8_t | jsfeat.C1_t);
  },

  methods: {
    onPatternUpdate (e) {
      this.imageData = e;
      this.pattern.setup(e);
      const matrices = this.pattern.train();
      this.options = this.pattern.corners.map((corners, index) => {
        return {
          matrix: matrices[Number(index)],
          corners: {
            list: corners,
            count: this.pattern.cornersCount[Number(index)],
            scale: this.pattern.scales[Number(index)]
          }
        };
      });
      console.log(e);
      // Uint8ClampedArray
      // const sharedBuffer = new global.SharedArrayBuffer(e.data.length);
      // const sharedArray = new Uint8ClampedArray(sharedBuffer);
      // sharedArray.set(e.data);
      // // console.log(sharedArray);

    },

    onVideoLoad (dimension) {
      // console.log(dimension);
      this.source.setup(dimension);
    },

    updateDynamicSource ({ x, y, context }) {
      const img = this.dynamic.updateSource({ x, y }, context);
      this.pattern = new Pattern(true);
      this.onPatternUpdate(img);
    },

    updateDynamic ({ x, y, context }) {
      const img = this.dynamic.update({ x, y }, context);
      if (!img) {
        return;
      }
      this.pattern = new Pattern(true);
      this.onPatternUpdate(img);
    },

    onUpdate (options) {
      this.source.detect(options, this.pattern).then((option) => {

        option.clickListener = (e) => {
          this.updateDynamicSource({ x: e.layerX, y: e.layerY, context: options.context });
        };
        if (option.point) {
          this.updateDynamic({ x: option.point.x, y: option.point.y, context: options.context });
        }
        this.debugOptionsA = option;
        return;
      }).catch((e) => { console.error(e); });
    }
  }
};
</script>

<style lang="postcss" scoped>
canvas {
  display: block;
}
</style>
