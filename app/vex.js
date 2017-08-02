/**
 * Random rhythm sheet generator
 */
const Vex = require('vexflow');

const VF = Vex.Flow;

const BAR_WIDTH = 280;
const BAR_HEIGHT = 100;
const BARS_PER_ROW = 2;

// const CLEF = 'treble';
const NOTE = 'b/4';

const AVAILABLE_PATTERNS = [
  '1', '1r',
  '2', '2r',
  '4', '4r',
  '8 8', '8 8r', '8r 8',
  '16 16 16 16', '16 16 8', '16 8 16', '8 16 16',
  '16r 16 16 16', '16 16r 16 16', '16 16 16r 16', '16 16 16 16r',
];

function showAvailablePatterns() {
  AVAILABLE_PATTERNS.forEach((pattern) => {
    $('<input />', {
      type: 'checkbox',
      name: 'patterns',
      id: 'pattern' + pattern.replace(' ', ''),
      value: pattern,
      checked: true
    }).appendTo("#allPatterns");
    $('#allPatterns').append(document.createTextNode(pattern));
    $('#allPatterns').append('<br>')
  });
}

function getCheckedPatterns() {
  return $('#allPatterns').children('input:checked').map(function() {
    return this.value;
  }).get();
}

function generateScore() {
  $('#vex').empty();
  var timeSignature = $("#timeSignature").val();
  var nBars = $("#nBars").val();

  var renderer = new VF.Renderer('vex', VF.Renderer.Backends.SVG);
  renderer.resize(
    BARS_PER_ROW * BAR_WIDTH + 20,
    Math.floor(nBars / BARS_PER_ROW) * BAR_HEIGHT + 20
  );
  var context = renderer.getContext();
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

  for (i = 0; i < nBars; i++) {
    var stave = new VF.Stave(
      (i % BARS_PER_ROW) * BAR_WIDTH,
      Math.floor(i / BARS_PER_ROW) * BAR_HEIGHT,
      BAR_WIDTH
    );
    if (i === 0) {
      stave.addTimeSignature(timeSignature);
    } else if (i == nBars - 1) {
      stave.setEndBarType(VF.Barline.type.END);
    }
    stave.setContext(context).draw();

    var notes = randomNotes(getCheckedPatterns(), timeSignature);
    var beams = VF.Beam.generateBeams(notes, {
      beam_rests: true,
      beam_middle_only: true
    });
    VF.Formatter.FormatAndDraw(context, stave, notes);
    beams.forEach(function(beam) {
      beam.setContext(context).draw();
    });
  }
}

function randomPattern(patterns, maxDuration) {
  var suitablePatterns = patterns.filter(function (pattern) {
    duration = 0;
    pattern.split().forEach(function(note) {
      duration = duration + 1 / parseInt(note.replace('r', ''));
    });
    return duration <= maxDuration;
  });
  return suitablePatterns[Math.floor((Math.random() * suitablePatterns.length))];
}

function randomNotes(patterns, timeSignature) {
  const noteAmount = parseInt(timeSignature.split('/')[0], 10);
  const noteType = parseInt(timeSignature.split('/')[1], 10);
  const notes = [];
  let remainingDuration = noteAmount / noteType;

  while (remainingDuration > 0) {
    const pattern = randomPattern(patterns, remainingDuration);
    pattern.split(' ').forEach((note) => {
      notes.push(
        new VF.StaveNote({ keys: [NOTE], duration: note, stem_direction: -1 }),
      );
      remainingDuration -= 1 / parseInt(note.replace('r', ''), 10);
    });
  }
  return notes;
}

showAvailablePatterns();
