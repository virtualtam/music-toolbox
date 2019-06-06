<template>
  <div id="app">
    <RhythmScore/>
  </div>
</template>

<script>
import RhythmScore from './components/RhythmScore.vue';

require('bulma/css/bulma.css');

export default {
  name: 'app',
  components: {
    RhythmScore,
  },
};
</script>
