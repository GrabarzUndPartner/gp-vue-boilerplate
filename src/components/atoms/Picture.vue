<template>
  <picture class="cover">
    <source
      v-for="item in sorted"
      :srcset="require(`@/assets/${item.src}`)"
      :type="item.mime"
      :media="item.media"
      :key="item.type">
    <img
      :src="require('@/assets/' + fallback.src)"
      :alt="alt">
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
      default() {
        return {};
      }
    },
    alt: {
      type: String,
      required: true,
      default: null
    }
  },

  data() {
    return {
      sorted: [],
      fallback: {}
    };
  },

  watch: {
    sources: {
      handler(values) {
        const list = convertObjectToArray(values);
        const sorted = sortBy(list, breakpoint, 'type');
        this.fallback = sorted[0];
        this.sorted = sorted.reverse();
        objectFitImages(this.$el);
      },
      immediate: true
    }
  }
};

function convertObjectToArray(obj) {
  return Object.keys(obj).map((k) => obj[k]);
}

function sortBy(list, by, attrib) {
  return sortArray(list, Object.keys(by), attrib).map((item) => {
    item.media = by[item[attrib]];
    item.mime = mime.getType((item.src.match(/\.([^.]*?)(?=\?|#|$)/) || [])[1]);
    return item;
  });
}

function sortArray (list, pattern, attribute) {
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
  }
}
</style>
