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
    timeSignatures: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
};
</script>
