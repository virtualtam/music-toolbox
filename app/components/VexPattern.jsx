import React from 'react';

import { generateSvgPattern } from '../VexUtils';


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
