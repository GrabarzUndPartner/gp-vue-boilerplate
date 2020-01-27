
export const state = () => ({
  modals: []
});

export const mutations = {
  toggleModal (state, options) {
    const modal = state.modals.find(modal => modal.name === options.name);
    if (modal) {
      modal.opened = options.flag !== undefined ? options.flag : !modal.opened;
    }
    this.dispatch('layout/togglePreventScrolling', !!state.modals.find(modal => modal.opened));
  },
  add (state, modal) {
    state.modals.push(modal);
  },
  remove (state, modal) {
    state.modals.splice(state.modals.indexOf(modal), 1);
  }
};

export const getters = {
  getModal (state) {
    return name => getModal(state.modals, name);
  },
  isModelOpened (state) {
    return name => (getModal(state.modals, name) || { opened: false }).opened;
  }
};

export const actions = {
  registerModal (context, options) {
    context.commit('add', Object.assign({ name: null, opened: false }, options));
  },
  unregisterModal (context, modal) {
    context.commit('remove', modal);
  },

  toggleModal (context, options) {
    context.commit('toggleModal', options);
  }
};

function getModal (modals, name) {
  return modals.find(modal => modal.name === name);
}
