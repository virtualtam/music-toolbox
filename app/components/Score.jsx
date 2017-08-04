import React from 'react';
import Vex from 'vexflow';

const VF = Vex.Flow;

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.context = null;
  }

  handleProps() {
    this.context = VF.Renderer.getSVGContext(
      { React: React },
      this.props.barsPerRow * this.props.barWidth + 20,
      (Math.floor(this.props.nBars / this.props.barsPerRow) * this.props.barHeight) + 20,
    );
    const stave = VF.Stave(0, 0, this.props.barWidth);
    const notes = [];
    notes.push(
      new VF.StaveNote({ keys: ['b/4'], duration: '1' }),
    );
    VF.FormatAndDraw(this.context, stave, notes);
  }

  render() {
    this.handleProps();
    return <div>{this.context.toSVG()}</div>;
  }
}

export default Score;
