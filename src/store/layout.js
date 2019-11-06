
export const state = () => ({
  modals: [],
  overlayOpened: false,
  preventScrolling: false,
  toggleDirection: false
});

export const mutations = {
  overlayOpened (state, data) {
    state.overlayOpened = Boolean(data);
  },
  preventScrolling (state, data) {
    state.preventScrolling = Boolean(data);
  },
  toggleDirection (state, data) {
    state.toggleDirection = Boolean(data);
  },
  toggleModal (state, name, value) {
    const modal = state.modals.find(modal => modal.name === name);
    if (modal) {
      modal.opened = value != undefined ? value : !modal.opened;
    }
    state.preventScrolling = !!state.modals.find(modal => modal.opened);
  },
  registerModal (state, modal) {
    state.modals.push(modal);
  },
  unregisterModal (state, modal) {
    state.modals.splice(state.modals.indexOf(modal), 1);
  }
};

export const getters = {
  getModal (state) {
    return name => getModal(state.modals, name);
  },
  isModelOpened (state) {
    return name => (getModal(state.modals, name) || { opened: false }).opened;
  },
  overlayOpened (state) {
    return state.overlayOpened;
  },
  preventScrolling (state) {
    return state.preventScrolling;
  },
  toggleDirection (state) {
    return state.toggleDirection;
  }
};

export const actions = {
  registerModal (context, name) {
    context.commit('registerModal', { name, opened: false });
  },
  unregisterModal (context, modal) {
    context.commit('unregisterModal', modal);
  },

  toggleModal (context, name, value) {
    context.commit('toggleModal', name, value);
  },

  toggleDirection (context, value) {
    context.commit('toggleDirection', value);
  },

  toggleOverlay (context, visible) {
    let toggle = !context.getters.overlayOpened;
    if (visible !== undefined) {
      toggle = visible;
    }
    context.commit('preventScrolling', toggle);
    context.commit('overlayOpened', toggle);
  },

  togglePreventScrolling (context, preventScrolling) {
    let toggle = !context.getters.preventScrolling;
    if (preventScrolling !== undefined) {
      toggle = preventScrolling;
    }
    context.commit('preventScrolling', toggle);
  }
};

function getModal (modals, name) {
  return modals.find(modal => modal.name === name);
}
