<template>
  <div id="score" />
</template>

<script>
import generateSvgScore from '../VexUtils';

export default {
  name: 'VexScore',
  props: {
    nBars: {
      type: Number,
      required: true
    },
    patterns: {
      type: Array,
      required: true
    },
    timeSignature: {
      type: String,
      required: true
    }
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
