import React from 'react';
import PropTypes from 'prop-types';

import Bars from './Bars';
import Pattern from './Pattern';
import TimeSignatures from './TimeSignatures';

export default function ScoreControls(props) {
  return (
    <form action="#" className="pure-form pure-form-stacked" id="scoreControls">
      <fieldset>
        <label htmlFor="timeSignature">Time signature</label>
        <TimeSignatures signatures={props.signatures} />

        <label htmlFor="nBars">Bars</label>
        <Bars bars={props.bars} />

        {props.patterns.map(
          pattern =>
            <Pattern key={pattern} pattern={pattern} />,
        )}
      </fieldset>
    </form>
  );
}

ScoreControls.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.number),
  patterns: PropTypes.arrayOf(PropTypes.string),
  signatures: PropTypes.arrayOf(PropTypes.string),
};

ScoreControls.defaultProps = {
  bars: [],
  patterns: [],
  signatures: [],
};
