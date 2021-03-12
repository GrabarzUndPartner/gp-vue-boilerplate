
<template>
  <div class="content">
    <component
      :is="item.component"
      v-for="(item, index) in components"
      :key="index"
      v-bind="item.data"
      :critical="index < 1"
    />
  </div>
</template>

<script>
import ComponentsExtend from './Components';
export default {
  // scrollToTop: true,

  extends: ComponentsExtend,

  async asyncData ({ $content, store, app, error, route }) {
    const locale = app.i18n.locale;

    // remove locale (de, en, …) from path
    const path = normalizePath(route.path, locale);

    let data = await $content(path).fetch()
      // eslint-disable-next-line handle-callback-err
      .catch(err => error(err));

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

  head () {
    return {
      title: this.title
    };
  }

};

function normalizePath (path, locale) {
  path = path
    .replace(/^\//, '')
    .replace(locale, '')
    .replace(/^[\\/]?/, '')
    .replace(/^\//, '');
  return `${locale}/${path || 'index'}`;
}

</script>
