import React from 'react';
import PropTypes from 'prop-types';


export default function TimeSignatureSelect(props) {
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

TimeSignatureSelect.propTypes = {
  signatures: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
