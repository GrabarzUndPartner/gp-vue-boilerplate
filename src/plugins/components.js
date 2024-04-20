import boosterHydrate from '#booster/hydrate';

export default defineNuxtPlugin(nuxtApp => {
  const { vueApp } = nuxtApp;

  const globalComponents = {
    StagePicture: boosterHydrate(
      () => import('@/components/modules/StagePicture')
    ),
    StageVideo: boosterHydrate(() => import('@/components/modules/StageVideo')),
    FullText: boosterHydrate(() => import('@/components/modules/FullText')),
    TextImage: boosterHydrate(() => import('@/components/modules/TextImage')),
    SinglePicture: boosterHydrate(
      () => import('@/components/modules/SinglePicture')
    ),
    SingleVideo: boosterHydrate(
      () => import('@/components/modules/SingleVideo')
    )
  };

  Object.entries(globalComponents).forEach(([name, component]) => {
    vueApp.component(name, component);
  });
});
