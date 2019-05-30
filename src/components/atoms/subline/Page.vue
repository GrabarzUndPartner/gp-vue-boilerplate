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
</style>
