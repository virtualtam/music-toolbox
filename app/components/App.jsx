import 'purecss';
import React from 'react';

import Score from './Score';
import ControlForm from './ControlForm';


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

  handleClick(event, props) {
    this.setState(props);
  }

  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-4">
          <ControlForm
            bars={BARS}
            defaultBars={BARS[1]}
            patterns={PATTERNS}
            defaultPatterns={PATTERNS}
            signatures={TIME_SIGNATURES}
            defaultTimeSignature={TIME_SIGNATURES[2]}
            onClick={(event, props) => this.handleClick(event, props)}
          />
        </div>
        <div className="pure-u-3-4">
          <Score
            nBars={this.state.nBars}
            patterns={this.state.patterns}
            timeSignature={this.state.timeSignature}
          />
        </div>
      </div>
    );
  }
}
