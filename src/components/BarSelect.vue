<template>
  <select
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option
      v-for="nBars in bars"
      :key="nBars"
      :value="nBars"
    >
      {{ nBars }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'BarSelect',
  props: {
    bars: Array,
    modelValue: Number,
  },
  emits: ['update:modelValue'],
};
</script>
