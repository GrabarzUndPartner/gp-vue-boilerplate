<template>
  <h2>
    <slot />
  </h2>
</template>

<script>
export default {

};
</script>

<style lang="postcss">
h2 {
  font-family: serif;
  font-weight: 400;
}

.font_amatic-sc .visible h2 {
  font-family: "Amatic SC", serif;
}

.font_amatic-sc_700 .visible h2 {
  font-weight: 700;
}
</style>
