<template>
  <canvas
    :width="width"
    :height="height"
  />
</template>

<script>
// import jsfeat from 'jsFeat';

export default {
  components: {

  },

  props: {
    options: {
      type: Object,
      default () {
        return null;
      }
    }
  },

  data () {
    return {
      width: 0,
      height: 0
    };
  },

  watch: {
    options: {
      handler (options) {
        const imageData = this.context.createImageData(options.imageData);
        this.width = imageData.width;
        this.height = imageData.height;

        if (options.matrix) {
          addMatrixToImageData(options.matrix, imageData);
        }

        if (options.corners) {
          const matrix = renderCorners(options.corners.list, options.corners.count, imageData, this.width);
          renderImage(imageData.data, matrix, this.width, this.height);
        }
        this.$nextTick(() => {
          this.context.putImageData(imageData, 0, 0);
        });

      }
    }
  },

  mounted () {
    this.context = this.$el.getContext('2d');
  },

  methods: {

  }
};

function addMatrixToImageData (grayscaleMatrix, imageData) {
  let data_u32 = new Uint32Array(imageData.data.buffer);
  let i = grayscaleMatrix.cols * grayscaleMatrix.rows, pix = 0;

  let alpha = (0xff << 24);
  while (--i >= 0) {
    pix = grayscaleMatrix.data[Number(i)];
    data_u32[Number(i)] = alpha | (pix << 16) | (pix << 8) | pix;
  }
}

function renderCorners (corners, count, img, step) {
  var data_u32 = new Uint32Array(img.data.buffer);
  var pix = (0xff << 24) | (0x00 << 16) | (0xff << 8) | 0x00;
  for (var i = 0; i < count; ++i) {
    var x = corners[Number(i)].x;
    var y = corners[Number(i)].y;
    var off = (x + y * step);
    data_u32[Number(off)] = pix;
    data_u32[off - 1] = pix;
    data_u32[off + 1] = pix;
    data_u32[off - step] = pix;
    data_u32[off + step] = pix;
  }
  return data_u32;
}

function renderImage (src, dst, sw, sh, dw) {
  var alpha = (0xff << 24);
  for (var i = 0; i < sh; ++i) {
    for (var j = 0; j < sw; ++j) {
      var pix = src[i * sw + j];
      dst[i * dw + j] = alpha | (pix << 16) | (pix << 8) | pix;
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>
