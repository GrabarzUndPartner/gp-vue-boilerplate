<template>
  <h5>
    <slot />
  </h5>
</template>

<script>
export default {

};
</script>

<style lang="postcss">
h5 {
  font-family: serif;
  font-weight: 400;
}

.visible h5 {
  font-family: "Amatic SC", serif;
}

.font_amatic-sc_400 .visible h5 {
  /* font will be preloaded */
}
</style>
