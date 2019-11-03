<template>
  <div class="content">
    <headline-text-a class="visible" />
    <div
      v-for="(item, index) in components"
      :key="index"
    >
      <component
        :is="item.asyncComponent"
        :content="item.data.content"
      />
    </div>
  </div>
</template>

<script>

import {
  hydrateWhenIdle,
  hydrateWhenVisible
} from 'vue-lazy-hydration';

export default {
  components: {
    HeadlineTextA: hydrateWhenIdle(() => import('@/components/organisms/article/HeadlineTextA')),
  },

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
    this.components = this.components.map((item) => {
      return {
        asyncComponent: hydrateWhenVisible(
          () => import(`@/components/organisms/${item.c}`),
          { observerOptions: { rootMargin: '100px' } }
        ),
        data: item.data
      };
    });

  }
};
</script>

<style lang="postcss" scoped>
</style>
