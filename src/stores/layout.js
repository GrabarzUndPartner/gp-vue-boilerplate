import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
  const preventScrolling = ref(false);
  const scrollDirection = ref(false);

  const togglePreventScrolling = value => {
    let toggle = !preventScrolling.value;
    if (value !== undefined) {
      toggle = value;
    }
    preventScrolling.value = toggle;
  };

  const toggleScrollDirection = value => {
    scrollDirection.value = value;
  };

  return {
    preventScrolling,
    scrollDirection,
    togglePreventScrolling,
    toggleScrollDirection
  };
});

export const useModalStore = defineStore('modal', () => {
  const modals = ref([]);

  const layoutStore = useLayoutStore();

  const registerModal = modal => {
    modals.value.push(modal);
  };
  const unregisterModal = name => {
    modals.value.splice(modals.value.indexOf(_getModal(modals, name)), 1);
  };
  const closeModal = ({ name }) => {
    const modal = _getModal(modals, name);
    if (modal) {
      modal.opened = false;
    }
    layoutStore.togglePreventScrolling(
      !!modals.value.find(modal => modal.opened)
    );
  };
  const toggleModal = ({ name, flag }) => {
    const modal = _getModal(modals, name);
    if (modal) {
      modal.opened = flag !== undefined ? flag : !modal.opened;
    }
    layoutStore.togglePreventScrolling(
      !!modals.value.find(modal => modal.opened)
    );
  };

  const getModal = computed(() => name => _getModal(modals, name));
  const isModalOpened = computed(() => {
    return name => (_getModal(modals, name) || { opened: false }).opened;
  });

  return {
    modals,
    isModalOpened,
    getModal,
    registerModal,
    unregisterModal,
    toggleModal,
    closeModal
  };
});

function _getModal(modals, name) {
  return modals.value.find(modal => modal.name === name);
}
