import React from 'react';
import Vex from 'vexflow';

const VF = Vex.Flow;

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.context = null;
    this.scoreRef = null;
  }

  componentDidMount() {
    const chord = new VF.StaveNote({
      keys: ['c/0', 'e/4', 'g#/8'],
      duration: 'w',
    }).addAccidental(0, new VF.Accidental('bb'))
      .addAccidental(2, new VF.Accidental('#'));

    const svgContainer = document.createElement('div');
    const renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
    const ctx = renderer.getContext();

    const stave = new VF.Stave(0, 0, 100);
    stave.setContext(ctx).draw();
    VF.Formatter.FormatAndDraw(ctx, stave, [chord]);

    this.scoreRef.appendChild(svgContainer);
  }

  render() {
    return <div ref={(el) => { this.scoreRef = el; }} />;
  }
}
