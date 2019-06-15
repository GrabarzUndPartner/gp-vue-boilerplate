<template>
  <h4>
    <slot />
  </h4>
</template>

<script>
export default {
  created () {
    console.log('SUBLINE');
  }
};
</script>

<style lang="postcss">
h4 {
  font-family: "Amatic SC", serif;
  font-weight: 400;
}
</style>
