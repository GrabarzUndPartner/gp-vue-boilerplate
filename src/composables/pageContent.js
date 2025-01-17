import { useRoute, queryCollection, useSetI18nParams } from '#imports';

export function usePageContent() {
  const route = useRoute();
  const setI18nParams = useSetI18nParams({});

  return {
    fetch: async () => {
      try {
        const path = `/pages${normalizePath(route.path).replace('/index', '')}`;
        const {
          body: { title, components, i18nParams }
        } = await queryCollection('page').path(path).first();

        if (!import.meta.server) {
          setI18nParams(i18nParams);
        }

        return {
          components,
          pageMeta: { title }
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
