import { useRoute, useI18n, queryContent } from '#imports';

export function usePageContent() {
  const route = useRoute();
  const { locale } = useI18n();

  return {
    fetch: async () => {
      const path = normalizePath(route.path, locale.value).replace(
        '/index',
        ''
      );
      const { title, components, routeParams } = await queryContent(
        path
      ).findOne();
      return {
        components,
        pageMeta: { title, nuxtI18n: routeParams }
      };
    }
  };
}

function normalizePath(path, locale) {
  path = path
    .replace(/^\//, '')
    .replace(locale, '')
    .replace(/^[\\/]?/, '')
    .replace(/^\//, '');
  return `${locale}/${path || 'index'}`;
}
