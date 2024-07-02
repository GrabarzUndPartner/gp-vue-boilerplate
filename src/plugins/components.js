import boosterHydrate from '#booster/hydrate';

export default defineNuxtPlugin(nuxtApp => {
  const { vueApp } = nuxtApp;

  const globalComponents = {
    StagePicture: boosterHydrate(
      () => import('@/components/module/StagePicture')
    ),
    StageVideo: boosterHydrate(() => import('@/components/module/StageVideo')),
    FullText: boosterHydrate(() => import('@/components/module/FullText')),
    TextImage: boosterHydrate(() => import('@/components/module/TextImage')),
    SinglePicture: boosterHydrate(
      () => import('@/components/module/SinglePicture')
    ),
    SingleVideo: boosterHydrate(() => import('@/components/module/SingleVideo'))
  };

  Object.entries(globalComponents).forEach(([name, component]) => {
    vueApp.component(name, component);
  });
});
