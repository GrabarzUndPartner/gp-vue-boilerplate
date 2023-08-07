import { useRoute, useI18n, queryContent, useNuxtApp } from '#imports';
import speedkitHydrate from '#speedkit/hydrate';

export function usePageContent() {
  registerGlobalComponents();

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

function registerGlobalComponents() {
  const { vueApp } = useNuxtApp();

  const globalComponents = {
    StagePicture: speedkitHydrate(() =>
      import('@/components/modules/StagePicture')
    ),
    StageVideo: speedkitHydrate(() =>
      import('@/components/modules/StageVideo')
    ),
    FullText: speedkitHydrate(() => import('@/components/modules/FullText')),
    TextImage: speedkitHydrate(() => import('@/components/modules/TextImage')),
    SinglePicture: speedkitHydrate(() =>
      import('@/components/modules/SinglePicture')
    ),
    SingleVideo: speedkitHydrate(() =>
      import('@/components/modules/SingleVideo')
    )
  };

  Object.entries(globalComponents).forEach(([name, component]) => {
    vueApp.component(name, component);
  });
}

function normalizePath(path, locale) {
  path = path
    .replace(/^\//, '')
    .replace(locale, '')
    .replace(/^[\\/]?/, '')
    .replace(/^\//, '');
  return `${locale}/${path || 'index'}`;
}
