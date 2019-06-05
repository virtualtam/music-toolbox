import 'bulma/css/bulma.css';
import React from 'react';

import VexScore from './VexScore';
import ScoreControlForm from './ScoreControlForm';


/* Score properties */
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

/**
 * Random VexFlow Rhythm Sheet Generator
 */
export default class RhythmScoreApp extends React.Component {
  constructor() {
    super();
    this.state = {
      nBars: BARS[1],
      patterns: PATTERNS,
      checkedPatterns: PATTERNS.slice(4, 9),
      timeSignature: TIME_SIGNATURES[2],
    };
  }

  handleClick(event, props) {
    this.setState(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Rhythm Sheet Generator</h1>
        <div className="columns">
          <div className="column is-three-fifths">
            <VexScore
              nBars={this.state.nBars}
              patterns={Array.from(this.state.checkedPatterns)}
              timeSignature={this.state.timeSignature}
            />
          </div>
          <div className="column">
            <ScoreControlForm
              bars={BARS}
              defaultBars={BARS[1]}
              patterns={this.state.patterns}
              checkedPatterns={new Set(this.state.checkedPatterns)}
              signatures={TIME_SIGNATURES}
              defaultTimeSignature={TIME_SIGNATURES[2]}
              onClick={(event, props) => this.handleClick(event, props)}
            />
          </div>
        </div>
      </div>
    );
  }
}
