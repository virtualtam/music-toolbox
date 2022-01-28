<template>
  <span :id="patternId" />
</template>

<script>
import { generateSvgPattern } from '../VexUtils';

export default {
  name: 'VexPattern',
  props: {
    pattern: String,
  },
  data() {
    return {
      height: 60,
      width: 70,
    };
  },
  computed: {
    patternId() {
      return `pattern ${this.pattern.replace(/ /g, '')}`;
    },
  },
  mounted() {
    this.render();
  },
  updated() {
    this.render();
  },
  methods: {
    render() {
      const patternSpan = document.getElementById(this.patternId);
      patternSpan.innerHTML = '';
      patternSpan.appendChild(generateSvgPattern(this.pattern, this.width, this.height));
    },
  },
};
</script>
