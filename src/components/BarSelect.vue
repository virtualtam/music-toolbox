<template>
  <select
    :value="value"
    @input="$emit('input', $event.target.value)"
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
  props: {
    bars: Array,
    value: Number,
  },
};
</script>
