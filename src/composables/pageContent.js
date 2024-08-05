import { useRoute, queryContent, useSetI18nParams } from '#imports';

export function usePageContent() {
  const route = useRoute();
  const setI18nParams = useSetI18nParams({});

  return {
    fetch: async () => {
      const path = normalizePath(route.path).replace('/index', '');
      const { title, components, i18nParams } = await queryContent(
        'pages',
        path
      ).findOne();

      setI18nParams(i18nParams);

      return {
        components,
        pageMeta: { title }
      };
    }
  };
}

function normalizePath(path) {
  return `${path || 'index'}`;
}
