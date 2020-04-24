<template>
  <picture class="atom-responsive-image">
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
      @load="onLoad"
    >
  </picture>
</template>

<story
  name="ResponsiveImage"
  group="Atoms"
  knobs="{
    sources: {
      default: select('Images', {
        'ImageSet Unknown': [],
        'ImageSet A': [
          { 'media': 'xl', 'srcset': 'https://picsum.photos/id/237/1920/200' },
          { 'media': 'l', 'srcset': 'https://picsum.photos/id/237/1599/200' },
          { 'media': 'md', 'srcset': 'https://picsum.photos/id/237/1199/200' },
          { 'media': 'sm', 'srcset': 'https://picsum.photos/id/237/991/200' },
          { 'media': 'xs', 'srcset': 'https://picsum.photos/id/237/767/200' },
          { 'media': 'default', 'srcset': 'https://picsum.photos/id/237/575/200' }
        ],
        'ImageSet B': [
          { 'media': 'xl', 'srcset': 'https://picsum.photos/id/238/1920/200' },
          { 'media': 'l', 'srcset': 'https://picsum.photos/id/238/1599/200' },
          { 'media': 'md', 'srcset': 'https://picsum.photos/id/238/1199/200' },
          { 'media': 'sm', 'srcset': 'https://picsum.photos/id/238/991/200' },
          { 'media': 'xs', 'srcset': 'https://picsum.photos/id/238/767/200' },
          { 'media': 'default', 'srcset': 'https://picsum.photos/id/238/575/200' }
        ]
      }, [
          { 'media': 'xl', 'srcset': 'https://picsum.photos/id/237/1920/200' },
          { 'media': 'l', 'srcset': 'https://picsum.photos/id/237/1599/200' },
          { 'media': 'md', 'srcset': 'https://picsum.photos/id/237/1199/200' },
          { 'media': 'sm', 'srcset': 'https://picsum.photos/id/237/991/200' },
          { 'media': 'xs', 'srcset': 'https://picsum.photos/id/237/767/200' },
          { 'media': 'default', 'srcset': 'https://picsum.photos/id/237/575/200' }
        ])
    },
    title: {
      default: text('Title', 'Sample Title')
    },
    description: {
      default: text('Description', 'Sample Description')
    }
  }">
  <picture-static :sources="sources" :title="title" :alt="description"/>
</story>

<script>
import breakpoint from '../../utils/breakpoint';

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
          { media: 'default', srcset: 'img/sample-a-16-9/412x232.jpg' },
          { media: 'xs', srcset: 'img/sample-a-16-9/768x432.jpg' },
          { media: 'sm', srcset: 'img/sample-a-16-9/992x558.jpg' },
          { media: 'md', srcset: 'img/sample-a-16-9/1200x675.jpg' },
          { media: 'lg', srcset: 'img/sample-a-16-9/1600x900.jpg' },
          { media: 'xl', srcset: 'img/sample-a-16-9/1920x1080.jpg' }
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
      const list = [].concat(this.sources);
      return sortBy(list, Array.from(breakpoint.keys())).reverse();
    },
    items () {
      const test = this.sorted.map((source) => {
        source = Object.assign({}, source);
        source.type = '';

        if (this.sourceClientOnly && !process.client) {
          source.srcset = '';
        } else {
          source.type = mimeTypes[getMimeType(source.srcset.replace(/.*\.(\w{3,4}).*$/, '$1'))];
        }
        source.media = breakpoint.get(source.media);
        return source;
      });
      return test;
    }
  },

  methods: {
    onLoad () {
      if ('objectFitImages' in global) {
        global.objectFitImages(this.$el.querySelector('img'));
      }
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
  const mime = /\w+$/.exec(url);
  return mime[0];
}
</script>

<style lang="postcss">
picture {
  display: block;

  & img {
    display: block;
    width: 100%;
    max-width: 100%;
  }
}
</style>
