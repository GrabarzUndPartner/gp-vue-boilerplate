<template>
  <video
    muted
    autoplay
    playsinline
    @click="toggle()"/>
</template>

<script>
import { getStream, getNextVideoDevice, getVideoStreamSettings/*, getVideoStreamConstraints*/ } from '../../utils/camera.js';

export default {
  props: {
    facingMode: {
      type: String,
      default: 'environment'
    },
    frameRate: {
      type: Number,
      default: null
    },
    width: {
      type: Number,
      default: 160
    }
  },

  data() {
    return {
      config: {
        facingMode: this.facingMode,
        frameRate: this.frameRate,
        width: this.width
      }
    };
  },

  mounted() {
    this.enable();
  },

  methods: {
    enable(conf = {}) {
      this.disable();
      return getStream(Object.assign(this.config, conf)).then((stream) => {
        this.$el.srcObject = stream;
        this.$el.constraints = getVideoStreamSettings(stream);
        return this.$el;
      });
    },

    disable() {
      if (this.$el.srcObject) {
        this.$el.srcObject.getTracks().forEach(track => track.stop());
        this.$el.srcObject = null;
      }
    },

    switchToEnvironment() {
      return this.enable({ facingMode: 'environment' });
    },

    switchToUser() {
      return this.enable({ facingMode: 'user' });
    },

    toggle() {
      getNextVideoDevice(getVideoStreamSettings(this.$el.srcObject)).then((device) => {
        this.enable({ deviceId: { exact: device.deviceId } });
      });
    }
  }
};
</script>

<style lang="postcss">
</style>
