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
  font-weight: 600;
}

.visible h2 {
  font-family: "Raleway", serif;
}
</style>
