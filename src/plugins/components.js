import speedkitHydrate from '#speedkit/hydrate';

export default defineNuxtPlugin(nuxtApp => {
  const { vueApp } = nuxtApp;

  const globalComponents = {
    StagePicture: speedkitHydrate(
      () => import('@/components/modules/StagePicture')
    ),
    StageVideo: speedkitHydrate(
      () => import('@/components/modules/StageVideo')
    ),
    FullText: speedkitHydrate(() => import('@/components/modules/FullText')),
    TextImage: speedkitHydrate(() => import('@/components/modules/TextImage')),
    SinglePicture: speedkitHydrate(
      () => import('@/components/modules/SinglePicture')
    ),
    SingleVideo: speedkitHydrate(
      () => import('@/components/modules/SingleVideo')
    )
  };

  Object.entries(globalComponents).forEach(([name, component]) => {
    vueApp.component(name, component);
  });
});
