import 'purecss';
import React from 'react';
import { Score } from './Score';
import { ScoreControls } from './ScoreControls';

const AVAILABLE_PATTERNS = [
  '1', '1r',
  '2', '2r',
  '4', '4r',
  '8 8', '8 8r', '8r 8',
  '16 16 16 16', '16 16 8', '16 8 16', '8 16 16',
  '16r 16 16 16', '16 16r 16 16', '16 16 16r 16', '16 16 16 16r',
];

const TIME_SIGNATURES = ['2/4', '3/4', '4/4', '6/8'];

const BARS = [9, 12];

export class App extends React.Component {
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-4">
          <ScoreControls bars={BARS}
                         patterns={AVAILABLE_PATTERNS}
                         signatures={TIME_SIGNATURES} />
        </div>
        <div className="pure-u-3-4">
          <Score />
        </div>
      </div>
    );
  }
}
