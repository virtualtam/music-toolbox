<template>
  <form
    id="scoreControls"
    class="box"
  >
    <fieldset>
      <div class="field">
        <label
          class="label"
          htmlFor="timeSignature"
        >Time signature</label>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <TimeSignatureSelect
                  v-model="timeSignature"
                  :initial-time-signature="initialTimeSignature"
                  :time-signatures="timeSignatures"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <label
          class="label"
          htmlFor="nBars"
        >Bars</label>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <BarSelect
                  v-model.number="nBars"
                  :bars="bars"
                  :initial-n-bars="initialNBars"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Patterns</label>
        <div class="buttons are-large">
          <PatternButton
            v-for="buttonState in patternButtonStates"
            :key="buttonState.pattern"
            :active="buttonState.active"
            :pattern="buttonState.pattern"
            @click="onPatternClick"
          />
        </div>
      </div>

      <button
        type="button"
        class="button is-primary is-medium"
        @click="$emit('generate-score', nBars, checkedPatterns, timeSignature)"
      >
        Generate!
      </button>
    </fieldset>
  </form>
</template>

<script>
import BarSelect from './BarSelect.vue';
import PatternButton from './PatternButton.vue';
import TimeSignatureSelect from './TimeSignatureSelect.vue';

export default {
  name: 'ScoreControlForm',
  components: {
    BarSelect,
    PatternButton,
    TimeSignatureSelect,
  },
  props: {
    bars: {
      type: Array,
      required: true,
    },
    initialNBars: {
      type: Number,
      required: true,
    },
    initialCheckedPatterns: {
      type: Array,
      required: true,
    },
    patterns: {
      type: Array,
      required: true,
    },
    initialTimeSignature: {
      type: String,
      required: true,
    },
    timeSignatures: {
      type: Array,
      required: true,
    },
  },
  emits: ['generate-score'],
  data() {
    return {
      checkedPatterns: this.initialCheckedPatterns,
      nBars: this.initialNBars,
      timeSignature: this.initialTimeSignature,
    };
  },
  computed: {
    patternButtonStates() {
      return this.patterns.map(
        (p) => (
          {
            pattern: p,
            active: this.checkedPatterns.includes(p),
          }
        ),
      );
    },
  },
  methods: {
    onPatternClick(pattern) {
      if (this.checkedPatterns.includes(pattern)) {
        this.checkedPatterns = this.checkedPatterns.filter((item) => item !== pattern);
      } else {
        this.checkedPatterns.push(pattern);
      }
    },
  },
};
</script>
