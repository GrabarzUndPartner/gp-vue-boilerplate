<i18n>
{
  "en": {
    "sources": [
      {"media": "default", "src": "retina/1152x600.jpg"},
      {"media": "xs", "src": "retina/1536x600.jpg"},
      {"media": "sm", "src": "retina/1984x600.jpg"},
      {"media": "md", "src": "retina/2400x600.jpg"},
      {"media": "lg", "src": "retina/3200x600.jpg"},
      {"media": "xl", "src": "retina/3840x600.jpg"}
    ]
  }
}
</i18n>
<template>
  <picture class="cover">
    <component
      :is="item.asyncComponent"
      v-for="(item, index) in sorted"
      :key="index"
    />

    <img
      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
      :alt="alt"
      loading="lazy"
    >
  </picture>
</template>

<script>
import objectFitImages from 'object-fit-images';
import breakpoint from '../../utils/breakpoint';

const mimeTypes = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp'
};

export default {
  props: {
    sources: {
      type: Object,
      default () {
        return this.$t('sources', 'en');
      }
    },
    alt: {
      type: String,
      required: false,
      default: null
    },
    webp: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    sorted () {
      let list = convertObjectToArray(this.sources);
      list = sortBy(list, Object.keys(breakpoint), 'media');
      list = completeEntries(list, breakpoint);
      return list.reverse();
    },

    // fallback () {
    //   let list = convertObjectToArray(this.sources);
    //   list = sortBy(list, Object.keys(breakpoint), 'media');

    //   return require(`@/assets/${list[0].src}?inline`);
    // }
  },

  created () {
    objectFitImages(this.$el);
  }
};

function convertObjectToArray (obj) {
  return Object.keys(obj).map((k) => obj[k]);
}

function completeEntries (list) {
  return list.reduce((result, item) => {
    if (item.src.search('http') === -1) {
      result.push(createDefaultImageConfig(item));
      result.push(createWebpImageConfig(item));
    }
    return result;
  }, []);
}

function sortBy (list, pattern, attribute) {
  return list.sort(function (a, b) {
    if (pattern.indexOf(a[attribute]) === pattern.indexOf(b[attribute])) {
      return 0;
    } else {
      return pattern.indexOf(a[attribute]) > pattern.indexOf(b[attribute]) ? 1 : -1;
    }
  });
}

function createDefaultImageConfig (item) {
  const retina = require.context('@/assets/', true, /\.(png|jpe?g)$/);
  const nonretina = require.context('@/assets/?resize&nonretina', true, /\.(png|jpe?g)$/);

  return createAsyncSource(item, retina, nonretina);
}

function createWebpImageConfig (item) {
  const retina = require.context('@/assets/?webp', true, /\.(png|jpe?g)$/);
  const nonretina = require.context('@/assets/?webp&resize&nonretina', true, /\.(png|jpe?g)$/);

  return createAsyncSource(item, retina, nonretina);
}

function createAsyncSource (item, retina, nonretina) {
  return {
    asyncComponent: () => {
      return Promise.all([
        retina('./' + item.src), nonretina('./' + item.src)
      ]).then((urls) => {
        return {
          render (create) {
            return createSourceElement(create, item, urls);
          }
        };
      });
    }
  };
}

function createSourceElement (create, item, [
  retinaUrl, nonRetinaUrl
]) {
  return create('source', {
    attrs: {
      srcset: `${retinaUrl} 2x, ${nonRetinaUrl} 1x`,
      media: breakpoint[item['media']],
      type: mimeTypes[getMimeType(retinaUrl)]
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
    max-width: 100%;
  }
}
</style>
