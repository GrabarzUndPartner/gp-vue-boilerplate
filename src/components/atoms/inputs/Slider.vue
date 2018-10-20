<template>
  <div>
    <label>{{ prop }}</label>
    <el-slider
      v-model="value"
      :max="max"
      label="hello"
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
    },
    prop: {
      type: String,
      default: 'value'
    }
  },

  data() {
    return {
      value: 35
    };
  },

  mounted() {
    this.changeFilter(this.value);
  },

  methods: {
    changeFilter(e) {
      this.$parent.$emit('change', { [this.name]: { [this.prop]: e } });
    }
  }
};
</script>

<style lang="postcss">
</style>
