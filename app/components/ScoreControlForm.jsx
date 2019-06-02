import React from 'react';
import PropTypes from 'prop-types';

import BarSelect from './BarSelect';
import PatternButton from './PatternButton';
import TimeSignatureSelect from './TimeSignatureSelect';


/**
 * VexFlow score generation settings
 */
export default class ScoreControlForm extends React.Component {
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
    const { checkedPatterns } = this.state;
    const pattern = event.target.value;

    if (checkedPatterns.has(pattern)) {
      checkedPatterns.delete(pattern);
    } else {
      checkedPatterns.add(pattern);
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
          <legend>Settings</legend>

          <div className="pure-g">
            <div className="pure-u-1-2">
              <label htmlFor="timeSignature">Time signature</label>
              <TimeSignatureSelect
                signatures={this.props.signatures}
                value={this.state.timeSignature}
                onChange={event => this.handleChangeTimeSignature(event)}
              />
            </div>
            <div className="pure-u-1-2">
              <label htmlFor="nBars">Bars</label>
              <BarSelect
                bars={this.props.bars}
                value={this.state.nBars}
                onChange={event => this.handleChangeBar(event)}
              />
            </div>
          </div>

          {this.props.patterns.map(
            pattern => (
              <PatternButton
                key={pattern}
                pattern={pattern}
                active={this.state.checkedPatterns.has(pattern)}
                onClick={event => this.handleChangePattern(event)}
              />
            ),
          )}

          <br />

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

ScoreControlForm.propTypes = {
  defaultBars: PropTypes.number.isRequired,
  checkedPatterns: PropTypes.instanceOf(Set).isRequired,
  defaultTimeSignature: PropTypes.string.isRequired,
  bars: PropTypes.arrayOf(PropTypes.number).isRequired,
  patterns: PropTypes.arrayOf(PropTypes.string).isRequired,
  signatures: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
