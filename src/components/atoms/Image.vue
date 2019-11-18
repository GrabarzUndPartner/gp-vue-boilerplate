<template>
  <img
    class="gp-atom-image"
    :src="path"
    :title="title"
    :alt="alt"
  >
</template>

<script>
export default {
  props: {
    sourceClientOnly: {
      type: Boolean,
      required: false,
      default () {
        return true;
      }
    },
    src: {
      type: String,
      required: false,
      default () {
        return 'https://picsum.photos/id/18/416/234';
      }
    },
    title: {
      type: String,
      required: false,
      default () {
        return '';
      }
    },
    alt: {
      type: String,
      required: false,
      default () {
        return '';
      }
    }
  },

  computed: {
    path () {
      if (!this.sourceClientOnly || this.sourceClientOnly && process.client) {
        return this.src;
      }
      return '';
    }
  }
};

</script>

<style lang="postcss">
.gp-atom-image {
  width: 100%;
}
</style>
