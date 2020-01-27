
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

  asyncData ({ store, app, error }) {
    const path = getRoutePath(app)
      .replace(RegExp(`^/${app.i18n.locale}`), '')
      .replace(/^\/([^?.#]*)[\\/?#]{0,1}[^\\/]*$/, '$1')
      .replace(/\/index|\/$/, '') || 'index';

    return import(/* webpackMode: "lazy" */'@/virtual-locales/' + app.i18n.locale + '/' + path + '.json').then((data) => {
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

  data () {
    return {
      title: 'title of page',
      components: []
    };
  },

  created () {
    this.components = getAsyncComponents(this.components);
  },

  head () {
    return {
      title: this.title
    };
  }

};

function getRoutePath (app) {
  return app.router.matcher.match(app.localePath(app.getRouteBaseName())).path;
}

</script>
