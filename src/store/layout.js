
export const state = () => ({
  preventScrolling: false,
  toggleDirection: false
});

export const mutations = {
  preventScrolling (state, data) {
    state.preventScrolling = Boolean(data);
  },
  toggleDirection (state, data) {
    state.toggleDirection = Boolean(data);
  }
};

export const getters = {
  preventScrolling (state) {
    return state.preventScrolling;
  },
  toggleDirection (state) {
    return state.toggleDirection;
  }
};

export const actions = {

  toggleDirection (context, value) {
    context.commit('toggleDirection', value);
  },
  togglePreventScrolling (context, preventScrolling) {
    let toggle = !context.getters.preventScrolling;
    if (preventScrolling !== undefined) {
      toggle = preventScrolling;
    }
    context.commit('preventScrolling', toggle);
  }
};
