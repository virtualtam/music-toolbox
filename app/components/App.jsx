import 'purecss';
import React from 'react';

import Score from './Score';
import ControlForm from './ControlForm';

import generateSvgScore from '../VexUtils';

/* Score properties */
const BARS = [9, 12];
const PATTERNS = [
  '1', '1r',
  '2', '2r',
  '4', '4r',
  // '8 8', '8 8r', '8r 8',
  // '16 16 16 16', '16 16 8', '16 8 16', '8 16 16',
  // '16r 16 16 16', '16 16r 16 16', '16 16 16r 16', '16 16 16 16r',
];
const TIME_SIGNATURES = ['2/4', '3/4', '4/4', '6/8'];


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nBars: BARS[1],
      patterns: PATTERNS,
      timeSignature: TIME_SIGNATURES[2],
    };
  }

  generateScore() {
    return generateSvgScore(
      this.state.nBars,
      this.state.patterns,
      this.state.timeSignature,
    );
  }

  handleClick() {
    console.log('click!');
  }

  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-4">
          <ControlForm
            bars={BARS}
            patterns={PATTERNS}
            signatures={TIME_SIGNATURES}
            onClick={this.handleClick}
          />
        </div>
        <div className="pure-u-3-4">
          <Score svgScore={this.generateScore()} />
        </div>
      </div>
    );
  }
}
