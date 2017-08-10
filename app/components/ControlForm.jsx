import React from 'react';

import Bars from './Bars';
import Pattern from './Pattern';
import TimeSignatures from './TimeSignatures';


export default class ControlForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nBars: props.defaultBars,
      patterns: props.defaultPatterns,
      timeSignature: props.defaultTimeSignature,
    };
  }

  render() {
    return (
      <form className="pure-form pure-form-stacked" id="scoreControls">
        <fieldset>
          <label htmlFor="timeSignature">Time signature</label>
          <TimeSignatures signatures={this.props.signatures} />

          <label htmlFor="nBars">Bars</label>
          <Bars bars={this.props.bars} />

          {this.props.patterns.map(
            pattern =>
              <Pattern key={pattern} pattern={pattern} />,
          )}

          <button
            className="pure-button pure-button-primary"
            onClick={this.props.onClick}
          >
            Generate!
          </button>
        </fieldset>
      </form>
    );
  }
}
