<template>
  <select
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option
      v-for="timeSignature in timeSignatures"
      :key="timeSignature"
      :value="timeSignature"
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
    modelValue: String,
  },
  emits: ['update:modelValue'],
};
</script>
