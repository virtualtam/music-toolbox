<template>
  <button
    :id="patternId"
    :class="klazz"
    :value="pattern"
    type="button"
    @click="$emit('click', pattern)"
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
    active: {
      type: Boolean,
      default: false,
    },
    pattern: {
      type: String,
      required: true,
    }
  },
  emits: ['click'],
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
