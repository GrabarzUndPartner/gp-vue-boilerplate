<template>
  <picture class="atom-responsive-image">
    <component
      :is="item.asyncComponent"
      v-for="(item, index) in sorted"
      :key="index"
    />
    <img
      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
      :alt="alt"
      @load="onLoad"
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
        return [
          { media: 'default', src: 'sample-a-16-9/retina/824x464.jpg' },
          { media: 'xs', src: 'sample-a-16-9/retina/1536x864.jpg' },
          { media: 'sm', src: 'sample-a-16-9/retina/1984x1116.jpg' },
          { media: 'md', src: 'sample-a-16-9/retina/2400x1350.jpg' },
          { media: 'lg', src: 'sample-a-16-9/retina/3200x1800.jpg' },
          { media: 'xl', src: 'sample-a-16-9/retina/3840x2160.jpg' }
        ];
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
      list = sortBy(list, Array.from(breakpoint.keys()));
      list = completeEntries(list);
      return list.reverse();
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

function completeEntries (list) {
  return list.reduce((result, item) => {
    if (item.src) {
      if (item.src.search('http') === -1) {
        result.push(createDefaultImageConfig(item));
        result.push(createWebpImageConfig(item));
      } else {
        result.push(createAsyncSource(
          item,
          Promise.all([
            Promise.resolve({ default: { src: item.src } })
          ])
        ));
      }
    } else {
      const srcsetMap = new Map(Object.entries(item.srcset));
      result.push(createAsyncSource(
        item,
        Promise.all(Array.from(srcsetMap.keys(), (key) => {
          return Promise.resolve({ default: { src: srcsetMap.get(key) } });
        })
        )
      ));
    }
    return result;
  }, []);
}

function sortBy (list, pattern) {
  return list.sort(function (a, b) {
    if (pattern.indexOf(a.media) === pattern.indexOf(b.media)) {
      return 0;
    } else {
      return pattern.indexOf(a.media) > pattern.indexOf(b.media) ? 1 : -1;
    }
  });
}

function createDefaultImageConfig (item) {
  return createAsyncSource(
    item,
    Promise.all([
      import(/* webpackMode: "lazy-once" */'@/assets/img/' + item.src + '?resize'),
      import(/* webpackMode: "lazy-once" */'@/assets/img/' + item.src + '?resize&nonretina')
    ])
  );
}

function createWebpImageConfig (item) {
  return createAsyncSource(
    item,
    Promise.all([
      import(/* webpackMode: "lazy-once" */'@/assets/img/' + item.src + '?webp'),
      import(/* webpackMode: "lazy-once" */'@/assets/img/' + item.src + '?webp&resize&nonretina')
    ])
  );
}

function createAsyncSource (item, urls) {
  return {
    asyncComponent: () => {
      return urls.then((urls) => {
        return {
          render (create) {
            return createSourceElement(create, item, urls);
          }
        };
      });
    }
  };
}

function createSourceElement (create, item, urls) {
  return create('source', {
    attrs: Object.assign({
      media: breakpoint.get(item.media),
      type: mimeTypes[getMimeType(urls[0].default.src)]
    }, getSource(urls))
  });
}

function getSource (urls) {
  if (urls.length > 1) {
    return {
      srcset: urls.map((url, index) => {
        return `${url.default.src} ${urls.length - index}x`;
      }).join(',')
    };
  } else {
    return {
      srcset: `${urls[0].default.src}`
    };
  }
}

function getMimeType (url) {
  const mime = /\w+$/.exec(url);
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
