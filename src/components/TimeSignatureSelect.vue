<template>
  <select
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
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
  emits: ['update:modelValue'],
  props: {
    timeSignatures: Array,
    modelValue: String,
  },
};
</script>
