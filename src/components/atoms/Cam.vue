<template>
  <video
    width="320"
    autoplay
    playsinline
  />
</template>

<script>
export default {
  props: {
    constraints: {
      type: Object,
      default () {
        return {
          video: {
            facingMode: 'environment',
            width: 320
          },
          audio: false
        };
      }
    }
  },

  mounted () {
    global.navigator.mediaDevices
      .getUserMedia(this.constraints)
      .then(stream => {
        this.$el.srcObject = stream;
        return navigator.mediaDevices.enumerateDevices();
      })
      .catch(error => {
        console.error(error);
      });
  },

  methods: {
    onSeek () {
      console.log('BOOOM');
    }
  }
};
</script>

<style lang="postcss" scoped>
</style>
