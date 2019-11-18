
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
  scrollToTop: true,

  data () {
    return {
      title: 'title of page',
      components: []
    };
  },

  head () {
    return {
      title: this.title
    };
  },

  asyncData ({ store, $axios, app, $payloadURL, route, error }) {
    if (process.static && process.client) {
      return $axios.$get($payloadURL(route)).then(data => {
        if (data) {
          return data;
        } else {
          error({ statusCode: 404, message: 'page not found' });
          return;
        }
      });
    }

    const path = (route.fullPath + '/')
      // remove lang prefix
      .replace(/^\//, '')
      .replace(/^\w{2}\//, '')
      .replace(/\/$/, '') || 'index';

    return import(`@/locales/${app.i18n.locale}/${path}.json`).then(data => {
      if ('routeParams' in data) {
        // set other locale slugs for languageSwitch
        store.dispatch('i18n/setRouteParams', data.routeParams);
      }
      return {
        title: data.title,
        components: data.components
      };
    }).catch(() => {
      error({ statusCode: 404, message: 'local json file not found' });
    });
  },

  created () {
    this.components = getAsyncComponents(this.components);
  }

};

</script>
