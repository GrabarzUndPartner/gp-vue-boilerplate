<template>
  <div>
    <label>{{ prop }}</label>
    <el-slider
      v-model="value"
      :max="max"
      range
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
    default: {
      type: Array,
      default() {
        return [25, 75];
      }
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    prop: {
      type: String,
      default: 'value'
    }
  },

  data() {
    return {
      value: this.default
    };
  },

  mounted() {
    this.changeFilter(this.value);
  },

  methods: {
    changeFilter(e) {
      console.log(e);
      this.$parent.$emit('change', { [this.name]: { [this.prop]: e } });
    }
  }
};
</script>

<style lang="postcss">
</style>
