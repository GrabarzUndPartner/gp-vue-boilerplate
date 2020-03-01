
import layoutData from '@/locales/layout.json';

export const actions = {
  nuxtServerInit ({ dispatch }) {
    dispatch('layout/setData', layoutData);
  }
};
