import { defineNuxtPlugin, useBoosterHydrate } from '#imports';
const hydrate = useBoosterHydrate();

export default defineNuxtPlugin(nuxtApp => {
  const { vueApp } = nuxtApp;

  const globalComponents = {
    StagePicture: hydrate(() => import('@/components/module/StagePicture')),
    StageVideo: hydrate(() => import('@/components/module/StageVideo')),
    FullText: hydrate(() => import('@/components/module/FullText')),
    TextImage: hydrate(() => import('@/components/module/TextImage')),
    SinglePicture: hydrate(() => import('@/components/module/SinglePicture')),
    SingleVideo: hydrate(() => import('@/components/module/SingleVideo'))
  };

  Object.entries(globalComponents).forEach(([name, component]) => {
    vueApp.component(name, component);
  });
});
