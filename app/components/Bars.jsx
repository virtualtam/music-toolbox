import React from 'react';

export function Bars(props) {
  return (
    <select id="nBars">
      {props.bars.map(
        nBars =>
          <option value={nBars} key={nBars}>
              {nBars}
            </option>
      )}
    </select>
  );
}
