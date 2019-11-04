<template>
  <div class="content">
    <component
      :is="item.asyncComponent"
      v-for="(item, index) in components"
      :key="index"
      :content="item.data.content"
    />
  </div>
</template>

<script>

import {
  hydrateWhenIdle,
  hydrateWhenVisible
} from 'vue-lazy-hydration';

export default {
  head () {
    return {
      title: 'title of page'
    };
  },

  data () {
    return {

    };
  },

  asyncData () {
    return new Promise((resolve) => {
      resolve([
        {
          c: 'article/HeadlineTextA',
          data: {

          }
        }, {
          c: 'article/HeadlineTextB',
          data: {

          }
        }, {
          c: 'article/HeadlineTextC',
          data: {

          }
        }
      ]);
    }).then((components) => {
      return {
        components: components
      };
    });
  },

  created () {
    this.components = this.components.map((item, index) => {
      if (index) {
        return {
          asyncComponent: hydrateWhenVisible(
            () => import(`@/components/organisms/${item.c}`),
            { observerOptions: { rootMargin: '100px' } }
          ),
          data: item.data
        };
      }
      return {
        asyncComponent: hydrateWhenIdle(() => import(`@/components/organisms/${item.c}`)),
        data: item.data
      };
    });

  }
};
</script>

<style lang="postcss" scoped>
</style>
