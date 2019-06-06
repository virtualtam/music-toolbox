<template>
  <select
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
    <option
      v-for="timeSignature in timeSignatures"
      :value="timeSignature"
      :key="timeSignature"
    >
      {{ timeSignature }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'TimeSignatureSelect',
  props: {
    timeSignatures: Array,
    value: String,
  },
};
</script>
