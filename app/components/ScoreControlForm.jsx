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
      <form className="box" id="scoreControls">
        <fieldset>
          <div className="field">
            <label className="label" htmlFor="timeSignature">Time signature</label>
            <div className="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <div class="select is-fullwidth">
                    <TimeSignatureSelect
                      signatures={this.props.signatures}
                      value={this.state.timeSignature}
                      onChange={event => this.handleChangeTimeSignature(event)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="nBars">Bars</label>
            <div className="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <div class="select is-fullwidth">
                    <BarSelect
                      bars={this.props.bars}
                      value={this.state.nBars}
                      onChange={event => this.handleChangeBar(event)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Patterns</label>
            <div className="buttons are-large">
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
            </div>
          </div>

          <button
            type="button"
            className="button is-primary is-medium"
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
