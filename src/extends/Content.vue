
<template>
  <base-content-container class="content">
    <component
      :is="item.component"
      v-for="(item, index) in components.slice(0,1)"
      :key="index"
      v-bind="item.data"
      critical
    />
    <base-content-container>
      <component
        :is="item.component"
        v-for="(item, index) in components.slice(1)"
        :key="index"
        v-bind="item.data"
      />
    </base-content-container>
  </base-content-container>
</template>

<script>
import ComponentsExtend from './Components';
import BaseContentContainer from '@/components/base/ContentContainer';
export default {

  components: { BaseContentContainer },
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
