<template>
  <div>
    <slot
      :options="config"
      name="canvas"/>
    <el-slider
      v-model="value"
      :max="max"
      @change="changeFilter"/>
  </div>
</template>

<script>

export default {

  props: {
    name: {
      type: String,
      default: null
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10
    }
  },

  data() {
    return {
      value: 35,
      config: {}
    };
  },

  mounted() {
    this.config = { [this.name]: { threshold: this.value } };
  },

  methods: {
    changeFilter(e) {
      this.config = { [this.name]: { threshold: e } };
    }
  }
};
</script>

<style lang="postcss">
</style>
