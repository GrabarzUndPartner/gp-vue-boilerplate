import { useRoute, queryCollection, useSetI18nParams } from '#imports';

export function usePageContent() {
  const route = useRoute();
  const setI18nParams = useSetI18nParams({});

  return {
    fetch: async () => {
      try {
        const path = `/pages${normalizePath(route.path).replace('/index', '')}`;
        const { components, i18nParams, ...meta } = await queryCollection(
          'page'
        )
          .path(path)
          .first()
          .then(({ body }) => body);

        if (!import.meta.server) {
          setI18nParams(i18nParams);
        }

        return {
          components,
          ...meta
        };
      } catch (error) {
        console.error(error);
      }
    }
  };
}

function normalizePath(path) {
  return `${path || 'index'}`;
}
