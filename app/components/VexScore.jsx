import React from 'react';
import PropTypes from 'prop-types';

import generateSvgScore from '../VexUtils';


/**
 * VexFlow SVG container for a whole score
 */
export default class VexScore extends React.Component {
  constructor(props) {
    super(props);
    this.scoreRef = null;
  }

  componentDidMount() {
    this.scoreRef.appendChild(generateSvgScore(
      this.props.nBars,
      this.props.patterns,
      this.props.timeSignature,
    ));
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps;
    this.scoreRef.innerHTML = '';
    this.scoreRef.appendChild(generateSvgScore(
      this.props.nBars,
      this.props.patterns,
      this.props.timeSignature,
    ));
  }

  render() {
    return <div ref={(el) => { this.scoreRef = el; }} />;
  }
}

VexScore.propTypes = {
  nBars: PropTypes.number.isRequired,
  patterns: PropTypes.arrayOf(PropTypes.string).isRequired,
  timeSignature: PropTypes.string.isRequired,
};
