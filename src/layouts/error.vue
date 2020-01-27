
<template>
  <div class="content">
    <component
      :is="item.asyncComponent"
      v-for="(item, index) in components"
      :key="index"
      v-bind="item.data"
    />
  </div>
</template>

<script>

import { getAsyncComponents } from '@/utils/async-components';
export default {

  props: {
    error: {
      type: Object,
      default () {
        return {};
      }
    }
  },

  data () {
    return {
      components: []
    };
  },

  computed: {
    dataComponents () {
      return [
        {
          component: 'StagePicture',
          data: {
            picture: {
              sourceClientOnly: false,
              sources: [
                {
                  media: 'default',
                  srcset: 'img/error.jpg'
                }
              ]
            }
          }
        },
        {
          component: 'Text',
          data: {
            article: {
              headline: {
                overline: null,
                headline: String(this.error.statusCode),
                subline: null
              },
              content: `<p>${this.error.message}</p>`
            }
          }
        }
      ];
    }
  },

  created () {
    this.components = getAsyncComponents(this.dataComponents);
  },

  head () {
    return {
      title: this.error.statusCode
    };
  }
};
</script>

<style>
</style>
