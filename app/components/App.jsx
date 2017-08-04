import 'purecss';
import React from 'react';
import Score from './Score';
import ScoreControls from './ScoreControls';

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
const BAR_WIDTH = 280;
const BAR_HEIGHT = 100;
const BARS_PER_ROW = 2;

// const NOTE = 'b/4';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: 'dummy',
    };
  }

  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-4">
          <ScoreControls
            bars={BARS}
            patterns={AVAILABLE_PATTERNS}
            signatures={TIME_SIGNATURES}
          />
        </div>
        <div className="pure-u-3-4">
          <Score
            barsPerRow={BARS_PER_ROW}
            barHeight={BAR_HEIGHT}
            barWidth={BAR_WIDTH}
            nBars="9"
          />
        </div>
      </div>
    );
  }
}

export default App;
