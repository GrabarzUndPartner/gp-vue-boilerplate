
import {
  hydrateWhenIdle,
  hydrateWhenVisible
} from 'vue-lazy-hydration';

export function getAsyncComponents (componentsData, initialVisibleComponents = 1) {
  return componentsData.map((item, index) => {
    const asyncLoad = () => import('@/components/organisms/' + item.component);
    item.data.options = item.data.options || {};
    if (index >= initialVisibleComponents) {
      return {
        asyncComponent: hydrateWhenVisible(
          asyncLoad,
          { observerOptions: { rootMargin: '100px' } }
        ),
        data: item.data
      };
    }
    item.data.options = Object.assign(item.data.options, {
      visible: true
    });
    return {
      asyncComponent: hydrateWhenIdle(asyncLoad),
      data: item.data
    };
  });
}
