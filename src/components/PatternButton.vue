<template>
  <button
    :id=patternId
    :class="klazz"
    :value=pattern
    @click="$emit('click', pattern)"
    type="button"
  >
    <VexPattern :pattern="pattern" />
  </button>
</template>

<script>
import VexPattern from './VexPattern.vue';

export default {
  name: 'PatternButton',
  components: {
    VexPattern,
  },
  props: {
    active: Boolean,
    pattern: String,
  },
  computed: {
    patternId() {
      return this.pattern.replace(/ /g, '');
    },
    klazz() {
      const cls = this.active ? 'is-warning is-active' : '';
      return `${cls} button`;
    },
  },
};
</script>

<style scoped>
button > * {
  pointerEvents: 'none';
}
</style>
