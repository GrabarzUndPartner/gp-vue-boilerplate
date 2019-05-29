<template>
  <picture class="cover">
    <source
      v-for="(item, index) in sorted"
      :key="index"
      :srcset="item.srcset"
      :type="item.mime"
      :media="item.media"
    >
    <img
      src=""
      :alt="alt"
      loading="lazy"
    >
  </picture>
</template>

<script>
import objectFitImages from 'object-fit-images';
import mime from 'mime/lite';
import breakpoint from '../../utils/breakpoint';

export default {
  props: {
    sources: {
      type: Object,
      required: true,
      default () {
        return {};
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

  mounted () {
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
  return {
    srcset: [
      `${require('@/assets/' + item.src)} 2x`,
      `${require('@/assets/' + item.src + '?resize&nonretina')} 1x`
    ].join(','),
    mime: mime.getType((item.src.match(/\.([^.]*?)(?=\?|#|$)/) || [])[1]),
    media: breakpoint[item['media']]
  };
}

function createWebpImageConfig (item) {
  return {
    srcset: [
      `${require('@/assets/' + item.src + '?webp')} 2x`,
      `${require('@/assets/' + item.src + '?webp&resize&nonretina')} 1x`
    ].join(','),
    mime: mime.getType('webp'),
    media: breakpoint[item['media']]
  };
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
