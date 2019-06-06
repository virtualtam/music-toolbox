<template>
  <form class="box" id="scoreControls">
    <fieldset>
      <div class="field">
        <label class="label" htmlFor="timeSignature">Time signature</label>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <TimeSignatureSelect
                  v-model="timeSignature"
                  :initialTimeSignature="initialTimeSignature"
                  :timeSignatures="timeSignatures"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label" htmlFor="nBars">Bars</label>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <BarSelect
                  v-model.number="nBars"
                  :bars="bars"
                  :initialNBars="initialNBars"
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
            @click="onPatternClick"
            :key="buttonState.pattern"
            :active="buttonState.active"
            :pattern="buttonState.pattern"
          />
        </div>
      </div>

      <button
        @click="$emit('generate-score', nBars, checkedPatterns, timeSignature)"
        type="button"
        class="button is-primary is-medium"
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
    bars: Array,
    initialNBars: Number,
    initialCheckedPatterns: Array,
    patterns: Array,
    initialTimeSignature: String,
    timeSignatures: Array,
  },
  computed: {
    patternButtonStates() {
      return this.patterns.map(
        p => (
          {
            pattern: p,
            active: this.checkedPatterns.includes(p),
          }
        ),
      );
    },
  },
  data() {
    return {
      checkedPatterns: this.initialCheckedPatterns,
      nBars: this.initialNBars,
      timeSignature: this.initialTimeSignature,
    };
  },
  methods: {
    onPatternClick(pattern) {
      if (this.checkedPatterns.includes(pattern)) {
        this.checkedPatterns = this.checkedPatterns.filter(item => item !== pattern);
      } else {
        this.checkedPatterns.push(pattern);
      }
    },
  },
};
</script>
