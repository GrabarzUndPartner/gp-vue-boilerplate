<template>
  <h1>
    <slot />
  </h1>
</template>

<script>
export default {
  created () {
    console.log('HEADLINE');
  }
};
</script>

<style lang="postcss">
h1 {
  font-family: serif;
  font-weight: 700;
}

.wf-amaticsc-n7-active h1 {
  font-family: "Amatic SC", serif;
}
</style>
