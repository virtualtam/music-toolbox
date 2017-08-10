import React from 'react';

export default function TimeSignatures(props) {
  return (
    <select
      value={props.value}
      onChange={event => props.onChange(event)}
    >
      {props.signatures.map(
        signature => (
          <option value={signature} key={signature}>
            {signature}
          </option>
        ),
      )}
    </select>
  );
}
