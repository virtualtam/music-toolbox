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
    bars: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Number,
      required: true,
    },
  },
  emits: ['update:modelValue'],
};
</script>
