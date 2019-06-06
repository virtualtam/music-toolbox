<template>
  <div id="score"/>
</template>

<script>
import generateSvgScore from '../VexUtils';

export default {
  name: 'VexScore',
  props: {
    nBars: Number,
    patterns: Array,
    timeSignature: String,
  },
  mounted() {
    this.render();
  },
  updated() {
    this.render();
  },
  methods: {
    render() {
      const scoreDiv = document.getElementById('score');
      scoreDiv.innerHTML = '';
      scoreDiv.appendChild(generateSvgScore(this.nBars, this.patterns, this.timeSignature));
    },
  },
};
</script>
