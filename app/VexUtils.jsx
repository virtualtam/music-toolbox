import Vex from 'vexflow';

const VF = Vex.Flow;

/* Vexflow render properties */
const BAR_WIDTH = 280;
const BAR_HEIGHT = 100;
const BARS_PER_ROW = 2;
// const CLEF = 'treble';
const NOTE = 'b/4';


/**
 * Pick a suitable pattern from a list of items
 */
function randomPattern(patterns, maxDuration) {
  const suitablePatterns = patterns.filter((pattern) => {
    let duration = 0;
    pattern.split().forEach((note) => {
      duration += 1 / parseInt(note.replace('r', ''), 10);
    });
    return duration <= maxDuration;
  });
  return suitablePatterns[Math.floor((Math.random() * suitablePatterns.length))];
}


/**
 * Fill a stave bar with randomly chosen patterns
 */
function randomNotes(patterns, timeSignature) {
  const noteAmount = parseInt(timeSignature.split('/')[0], 10);
  const noteType = parseInt(timeSignature.split('/')[1], 10);
  const notes = [];
  let remainingDuration = noteAmount / noteType;

  while (remainingDuration > 0) {
    const pattern = randomPattern(patterns, remainingDuration);
    pattern.split(' ').forEach((note) => { // eslint-disable-line no-loop-func
      notes.push(
        new VF.StaveNote({ keys: [NOTE], duration: note, stem_direction: -1 }),
      );
      remainingDuration -= 1 / parseInt(note.replace('r', ''), 10);
    });
  }
  return notes;
}


/**
 * Generate and render a rhythm score
 */
export default function generateSvgScore(nBars, patterns, timeSignature) {
  const svgContainer = document.createElement('div');
  const renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
  renderer.resize(
    (BARS_PER_ROW * BAR_WIDTH) + 20,
    (Math.ceil(nBars / BARS_PER_ROW) * BAR_HEIGHT) + 20,
  );
  const context = renderer.getContext();
  context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed');

  for (let i = 0; i < nBars; i++) {
    const stave = new VF.Stave(
      (i % BARS_PER_ROW) * BAR_WIDTH,
      Math.floor(i / BARS_PER_ROW) * BAR_HEIGHT,
      BAR_WIDTH,
    );
    if (i === 0) {
      stave.addTimeSignature(timeSignature);
    } else if (i === nBars - 1) {
      stave.setEndBarType(VF.Barline.type.END);
    }
    stave.setContext(context).draw();

    const notes = randomNotes(patterns, timeSignature);
    const beams = VF.Beam.generateBeams(notes, {
      beam_rests: true,
      beam_middle_only: true,
    });
    VF.Formatter.FormatAndDraw(context, stave, notes);
    beams.forEach((beam) => {
      beam.setContext(context).draw();
    });
  }

  return svgContainer;
}


/**
 * Generate and render a single rhythm pattern
 */
export function generateSvgPattern(pattern, width, height) {
  const svgContainer = document.createElement('span');
  const renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
  renderer.resize(width, height);
  const context = renderer.getContext();

  const notes = [];
  pattern.split(' ').forEach((note) => {
    notes.push(
      new VF.StaveNote({ keys: [NOTE], duration: note, stem_direction: -1 }),
    );
  });
  const beams = VF.Beam.generateBeams(notes, {
    beam_rests: true,
    beam_middle_only: true,
  });
  const stave = new VF.Stave(
    0,
    0,
    width - 5,
    {
      num_lines: 0,
      left_bar: false,
      right_bar: false,
      space_above_staff_ln: 0,
      space_below_staff_ln: 0,
    },
  );
  stave.setContext(context).draw();
  VF.Formatter.FormatAndDraw(context, stave, notes);
  beams.forEach((beam) => {
    beam.setContext(context).draw();
  });
  return svgContainer;
}
