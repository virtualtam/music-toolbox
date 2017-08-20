import React from 'react';
import PropTypes from 'prop-types';


import { generateSvgPattern } from '../VexUtils';


/**
 * VexFlow SVG container for a single pattern
 */
export default class VexPattern extends React.Component {
  constructor(props) {
    super(props);
    this.patternRef = null;
  }

  componentDidMount() {
    this.patternRef.appendChild(generateSvgPattern(
      this.props.pattern,
      70,
      60,
    ));
  }

  render() {
    return <span ref={(el) => { this.patternRef = el; }} />;
  }
}

VexPattern.propTypes = {
  pattern: PropTypes.string.isRequired,
};
