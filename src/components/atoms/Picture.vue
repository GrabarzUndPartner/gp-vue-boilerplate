<i18n>
{
  "de": {
    "sources": [
      {"media": "default", "src": "retina/sample-a/1152x600.jpg"},
      {"media": "xs", "src": "retina/sample-a/1536x600.jpg"},
      {"media": "sm", "src": "retina/sample-a/1984x600.jpg"},
      {"media": "md", "src": "retina/sample-a/2400x600.jpg"},
      {"media": "lg", "src": "retina/sample-a/3200x600.jpg"},
      {"media": "xl", "src": "retina/sample-a/3840x600.jpg"}
    ],
    "alt": "image description"
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
      type: [
        Array, Object
      ],
      default () {
        return this.$t('sources', 'de');
      }
    },
    alt: {
      type: String,
      required: false,
      default () {
        return this.$t('alt', 'de');
      }
    }
  },

  computed: {
    sorted () {
      let list = convertObjectToArray(this.sources);
      list = sortBy(list, Object.keys(breakpoint), 'media');
      list = completeEntries(list, breakpoint);
      return list.reverse();
    }
  },

  mounted () {
    console.log('PICTURE');
    if ('objectFit' in document.documentElement.style === false) {
      import('object-fit-images').then((objectFitImages) => {
        objectFitImages(this.$el);
      });
    }
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
  return createAsyncSource(
    item,
    import(/* webpackMode: "lazy-once" */'@/assets/' + item.src + '?resize'),
    import(/* webpackMode: "lazy-once" */'@/assets/' + item.src + '?resize&nonretina')
  );
}

function createWebpImageConfig (item) {
  return createAsyncSource(
    item,
    import(/* webpackMode: "lazy-once" */'@/assets/' + item.src + '?webp'),
    import(/* webpackMode: "lazy-once" */'@/assets/' + item.src + '?webp&resize&nonretina')
  );
}

function createAsyncSource (item, retina, nonretina) {
  return {
    asyncComponent: () => {
      return Promise.all([
        retina, nonretina
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
      srcset: `${retinaUrl.default.src} 2x, ${nonRetinaUrl.default.src} 1x`,
      media: breakpoint[item['media']],
      type: mimeTypes[getMimeType(retinaUrl.default.src)]
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
