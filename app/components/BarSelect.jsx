import React from 'react';

export default function BarSelect(props) {
  return (
    <select
      value={props.value}
      onChange={event => props.onChange(event)}
    >
      {props.bars.map(nBars =>
        (
          <option value={nBars} key={nBars}>
            {nBars}
          </option>
        ),
      )}
    </select>
  );
}
