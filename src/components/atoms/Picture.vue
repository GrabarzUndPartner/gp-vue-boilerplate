<template>
  <picture class="cover">
    <source
      v-for="(item, index) in sorted"
      :srcset="item.src"
      :type="item.mime"
      :media="item.media"
      :key="index"
    >
    <img
      :src="fallback.src"
      :alt="alt"
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
      type: Array,
      required: true,
      default () {
        return [];
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

  data () {
    return {
      sorted: [],
      fallback: {}
    };
  },
  watch: {
    sources: {
      handler (values) {
        let list = convertObjectToArray(values);
        list = sortBy(list, Object.keys(breakpoint), 'media');
        list = completeEntries(list, breakpoint);
        list = addWebpSupport(list);
        this.fallback = list[0];
        this.sorted = list.reverse();
        objectFitImages(this.$el);
      },
      immediate: true
    }
  }
};

function convertObjectToArray (obj) {
  return Object.keys(obj).map((k) => obj[k]);
}

function completeEntries (list, breakpoint) {
  return list.map((item) => {
    item.media = breakpoint[item['media']];
    item.mime = mime.getType((item.src.match(/\.([^.]*?)(?=\?|#|$)/) || [])[1]);
    if (item.src.search('http') === -1) item.src = require(`@/assets/${item.src}`);
    return item;
  });
}

function addWebpSupport (list) {
  return list.reduce((result, item) => {
    result.push(item, {
      media: item['media'],
      mime: mime.getType('webp'),
      src: `${item.src}.webp`
    });
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
</script>

<style lang="postcss">
picture {
  & img {
    display: block;
    max-width: 100%;
    height: auto;
  }
}
</style>
