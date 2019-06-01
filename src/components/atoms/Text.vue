<template>
  <p>
    <slot />
  </p>
</template>

<script>
export default {
  created () {
    console.log('TEXT');
  }
};
</script>

<style lang="postcss">
p {
  font-family: serif;
  font-weight: 400;
}

.wf-raleway-n4-active p {
  font-family: "Raleway", serif;
}
</style>
