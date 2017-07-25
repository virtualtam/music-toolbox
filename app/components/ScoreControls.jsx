import React from 'react';
import { Bars } from './Bars';
import { Pattern } from './Pattern';
import { TimeSignatures } from './TimeSignatures';

export function ScoreControls(props) {
  return (
    <form action="#" className="pure-form pure-form-stacked" id="scoreControls">
      <fieldset>
        <label htmlFor="timeSignature">Time signature</label>
        <TimeSignatures signatures={props.signatures} />

        <label htmlFor="nBars">Bars</label>
        <Bars bars={props.bars} />

        {props.patterns.map(
          pattern =>
            <Pattern pattern={pattern} />
        )}
      </fieldset>
    </form>
  );
}
