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
          component: 'article/HeadlineTextA',
          data: {

          }
        }, {
          component: 'article/HeadlineTextB',
          data: {

          }
        }, {
          component: 'article/HeadlineTextC',
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
      let asyncLoad = () => import(`@/components/organisms/${item.component}`);
      if (index) {
        return {
          asyncComponent: hydrateWhenVisible(
            asyncLoad,
            { observerOptions: { rootMargin: '100px' } }
          ),
          data: item.data
        };
      }
      return {
        asyncComponent: hydrateWhenIdle(asyncLoad),
        data: item.data
      };
    });

  }
};
</script>

<style lang="postcss" scoped>
</style>
