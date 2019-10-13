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
        this.update(options);
      }
    }
  },

  mounted () {
    this.context = this.$el.getContext('2d');
    // console.log(this.options);
    this.update(this.options);

  },

  methods: {
    update (options) {
      if (options && options.matrix) {
        this.width = options.matrix.cols;
        this.height = options.matrix.rows;

        const imageData = this.context.createImageData(this.width, this.height);
        const imageData_u32 = new Uint32Array(imageData.data.buffer);

        addMatrixToImageData(imageData_u32, options.matrix);

        if (options.corners) {
          renderCorners(options.corners.list, options.corners.count, options.corners.scale, imageData_u32, this.width);
        }

        this.$nextTick(() => {
          this.context.putImageData(imageData, 0, 0);
          if (options.matches) {
            render_matches(this.context, options.corners.list, options.pattern.list, options.match_mask, options.matches.list, options.matches.count);
          }

          if (options.shape && options.shape.length) {
            renderShape(this.context, options.shape);
          }
        });
      }
    }
  }
};
function addMatrixToImageData (data_u32, matrix) {
  var alpha = (0xff << 24);
  for (var i = 0; i < matrix.rows; ++i) {
    for (var j = 0; j < matrix.cols; ++j) {
      var pix = matrix.data[i * matrix.cols + j];
      data_u32[i * matrix.cols + j] = alpha | (pix << 16) | (pix << 8) | pix;
    }
  }
}

function renderCorners (corners, count, scale = 1, data_u32, step) {
  var pix = (0xff << 24) | (0x00 << 16) | (0xff << 8) | 0x00;
  for (var i = 0; i < count; ++i) {
    var x = corners[Number(i)].x / scale;
    var y = corners[Number(i)].y / scale;
    var off = (x + y * step);
    data_u32[Number(off)] = pix;
    data_u32[off - 1] = pix;
    data_u32[off + 1] = pix;
    data_u32[off - step] = pix;
    data_u32[off + step] = pix;
  }
}

function render_matches (ctx, screen_corners, pattern_corners, match_mask, matches, count) {
  for (var i = 0; i < count; ++i) {
    var m = matches[Number(i)];
    var s_kp = screen_corners[m.screen_idx];
    // console.log(pattern_corners[m.pattern_lev]);
    var p_kp = pattern_corners[m.pattern_lev];//[m.pattern_idx];

    if (match_mask.data[Number(i)]) {
      ctx.strokeStyle = 'rgb(0,255,0)';
    } else {
      ctx.strokeStyle = 'rgb(255,0,0)';
    }
    ctx.beginPath();
    ctx.moveTo(s_kp.x, s_kp.y);
    ctx.lineTo(p_kp.x * 0.5, p_kp.y * 0.5); // our preview is downscaled
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

function renderShape (ctx, shape_pts) {
  ctx.strokeStyle = 'rgb(0,255,0)';
  ctx.beginPath();
  ctx.moveTo(shape_pts[0].x, shape_pts[0].y);
  ctx.lineTo(shape_pts[1].x, shape_pts[1].y);
  ctx.lineTo(shape_pts[2].x, shape_pts[2].y);
  ctx.lineTo(shape_pts[3].x, shape_pts[3].y);
  ctx.lineTo(shape_pts[0].x, shape_pts[0].y);
  ctx.lineWidth = 4;
  ctx.stroke();
}
</script>

<style lang="postcss" scoped>
</style>
