<template>
  <select
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option
      v-for="nBars in bars"
      :value="nBars"
      :key="nBars"
    >
      {{ nBars }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'BarSelect',
  emits: ['update:modelValue'],
  props: {
    bars: Array,
    modelValue: Number,
  },
};
</script>
