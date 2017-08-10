import React from 'react';


export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.scoreRef = null;
  }

  componentDidMount() {
    this.scoreRef.appendChild(this.props.svgScore);
  }

  render() {
    return <div ref={(el) => { this.scoreRef = el; }} />;
  }
}
