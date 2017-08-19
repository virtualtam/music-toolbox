import React from 'react';

import Bars from './Bars';
import Pattern from './Pattern';
import TimeSignatures from './TimeSignatures';


export default class ControlForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nBars: props.defaultBars,
      checkedPatterns: props.checkedPatterns,
      timeSignature: props.defaultTimeSignature,
    };
  }

  handleChangeTimeSignature(event) {
    this.setState({ timeSignature: event.target.value });
  }

  handleChangeBar(event) {
    this.setState({ nBars: event.target.value });
  }

  handleChangePattern(event) {
    const checkedPatterns = this.state.checkedPatterns;

    if (event.target.checked) {
      checkedPatterns.add(event.target.value);
    } else {
      checkedPatterns.delete(event.target.value);
    }

    this.setState(checkedPatterns);
  }

  handleClick(event) {
    this.props.onClick(event, this.state);
  }

  render() {
    return (
      <form className="pure-form pure-form-stacked" id="scoreControls">
        <fieldset>
          <label htmlFor="timeSignature">Time signature</label>
          <TimeSignatures
            signatures={this.props.signatures}
            value={this.state.timeSignature}
            onChange={event => this.handleChangeTimeSignature(event)}
          />

          <label htmlFor="nBars">Bars</label>
          <Bars
            bars={this.props.bars}
            value={this.state.nBars}
            onChange={event => this.handleChangeBar(event)}
          />

          {this.props.patterns.map(
            pattern =>
              <Pattern
                key={pattern}
                pattern={pattern}
                checked={this.state.checkedPatterns.has(pattern)}
                onChange={event => this.handleChangePattern(event)}
              />,
          )}

          <button
            type="button"
            className="pure-button pure-button-primary"
            onClick={event => this.handleClick(event)}
          >
            Generate!
          </button>
        </fieldset>
      </form>
    );
  }
}