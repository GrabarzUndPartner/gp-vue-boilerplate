import { useRoute, queryContent } from '#imports';

export function usePageContent() {
  const route = useRoute();

  return {
    fetch: async () => {
      const path = normalizePath(route.path).replace('/index', '');
      const { title, components } = await queryContent(path).findOne();
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
