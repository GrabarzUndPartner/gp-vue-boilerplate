<template>
  <picture>
    <source
      v-for="(source, index) in items"
      :key="index"
      v-bind="source"
    >
    <img
      :src="placeholder"
      :alt="alt"
      :title="title"
      :loading="loading"
      :width="width"
      :height="height"
    >
  </picture>
</template>

<script>
import { default as breakpoint } from '../../utils/breakpoint';

const PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

const mimeTypes = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp'
};

export default {
  props: {
    loading: {
      type: String,
      required: false,
      default () {
        return 'auto'; // auto, lazy
      }
    },
    sourceClientOnly: {
      type: Boolean,
      required: false,
      default () {
        return true;
      }
    },
    placeholder: {
      type: String,
      required: false,
      default () {
        return PLACEHOLDER;
      }
    },
    sources: {
      type: [
        Array, Object
      ],
      default () {
        return [
          { 'media': 'default', 'srcset': 'img/1/576x324.jpg' },
          { 'media': 'xs', 'srcset': 'img/1/768x432.jpg' },
          { 'media': 'sm', 'srcset': 'img/1/992x558.jpg' },
          { 'media': 'md', 'srcset': 'img/1/1200x675.jpg' },
          { 'media': 'lg', 'srcset': 'img/1/1600x900.jpg' },
          { 'media': 'xl', 'srcset': 'img/1/1920x1080.jpg' }
        ];
      }
    },
    width: {
      type: Number,
      required: false,
      default () {
        return null;
      }
    },
    height: {
      type: Number,
      required: false,
      default () {
        return null;
      }
    },
    title: {
      type: String,
      required: false,
      default () {
        return 'image title';
      }
    },
    alt: {
      type: String,
      required: false,
      default () {
        return 'image description';
      }
    }
  },

  computed: {
    sorted () {
      let list = this.sources;
      return sortBy(list, Array.from(breakpoint.keys())).reverse();
    },
    items () {
      return this.sorted.map(source => {
        source = Object.assign({}, source);
        source.type = '';
        if (this.sourceClientOnly && !process.client) {
          source.srcset = '';
        } else {
          source.type = mimeTypes[getMimeType(source.srcset)];
        }
        source.media = breakpoint.get(source.media);
        return source;
      });
    }
  },

  mounted () {
    if ('objectFit' in document.documentElement.style === false) {
      import('object-fit-images').then((objectFitImages) => {
        objectFitImages(this.$el);
        return null;
      }).catch((e) => {
        throw e;
      });
    }
  }
};

function sortBy (list, pattern) {
  return list.sort(function (a, b) {
    if (pattern.indexOf(a.media) === pattern.indexOf(b.media)) {
      return 0;
    } else {
      return pattern.indexOf(a.media) > pattern.indexOf(b.media) ? 1 : -1;
    }
  });
}

function getMimeType (url) {
  let mime = /\w+$/.exec(url);
  return mime[0];
}
</script>

<style lang="postcss">
picture {
  & img {
    display: block;
    width: 100%;
    max-width: 100%;
  }
}
</style>
