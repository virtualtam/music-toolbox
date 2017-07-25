import React from 'react';

export function TimeSignatures(props) {
  return (
    <select id="timeSignature">
      {props.signatures.map(
        signature =>
          <option value={signature} key={signature}>
              {signature}
            </option>
      )}
    </select>
  );
}
