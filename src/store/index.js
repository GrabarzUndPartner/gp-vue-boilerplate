
import layoutData from '@/content/layout.json';

export const actions = {
  nuxtServerInit ({ dispatch }) {
    dispatch('layout/setData', layoutData);
  }
};
