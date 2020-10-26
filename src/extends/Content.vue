
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
  async asyncData ({ $content, store, app, error, route }) {
    const locale = app.i18n.locale;

    // remove locale (de, en, …) from path
    const path = normalizePath(route.path, locale);

    let data = await $content(path).fetch()
      // eslint-disable-next-line handle-callback-err
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' });
      });

    if (Array.isArray(data)) {
      data = data.find(({ slug }) => slug === 'index');
    }

    if ('routeParams' in data) {
      // set other locale slugs for languageSwitch
      store.dispatch('i18n/setRouteParams', data.routeParams);
    }
    return {
      title: data.title,
      components: data.components
    };
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

function normalizePath (path, locale) {
  path = path.replace(/^\//, '')
    .replace(locale, '')
    .replace(/^\//, '');
  return `${locale}/${path || 'index'}`;
}

</script>
