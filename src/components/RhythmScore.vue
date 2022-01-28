<template>
  <div class="container">
    <h1 class="title">
      Rhythm Sheet Generator
    </h1>
    <div class="columns">
      <div class="column is-three-fifths">
        <VexScore
          :key="scoreKey"
          :n-bars="nBars"
          :patterns="checkedPatterns"
          :time-signature="timeSignature"
        />
      </div>
      <div class="column">
        <ScoreControlForm
          :bars="bars"
          :initial-n-bars="nBars"
          :patterns="patterns"
          :initial-checked-patterns="initialCheckedPatterns"
          :initial-time-signature="initialTimeSignature"
          :time-signatures="timeSignatures"
          :time-signature="timeSignature"
          @generate-score="onGenerateScore"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ScoreControlForm from './ScoreControlForm.vue';
import VexScore from './VexScore.vue';

const BARS = [9, 12, 16];
const PATTERNS = [
  '1',
  '1r',
  '2',
  '2r',
  '4',
  '4r',
  '8 8',
  '8 8r',
  '8r 8',
  '8r 16 16',
  '16 16 8r',
  '16 16 16 16',
  '16 16 8',
  '16 8 16',
  '8 16 16',
  '16r 16 16 16',
  '16 16r 16 16',
  '16 16 16r 16',
  '16 16 16 16r',
];
const TIME_SIGNATURES = ['2/4', '3/4', '4/4', '6/8'];

export default {
  name: 'RhythmScore',
  components: {
    ScoreControlForm,
    VexScore,
  },
  props: {
    initialCheckedPatterns: {
      type: Array,
      default() {
        return PATTERNS.slice(4, 9);
      },
    },
    initialNBars: {
      type: Number,
      default() {
        return BARS[1];
      },
    },
    initialTimeSignature: {
      type: String,
      default() {
        return TIME_SIGNATURES[2];
      },
    },
  },
  data() {
    return {
      bars: BARS,
      nBars: this.initialNBars,
      checkedPatterns: this.initialCheckedPatterns,
      patterns: PATTERNS,
      scoreKey: 0,
      timeSignature: this.initialTimeSignature,
      timeSignatures: TIME_SIGNATURES,
    };
  },
  methods: {
    onGenerateScore(nBars, patterns, timeSignature) {
      this.nBars = nBars;
      this.checkedPatterns = patterns;
      this.timeSignature = timeSignature;
      this.scoreKey += 1;
    },
  },
};
</script>
