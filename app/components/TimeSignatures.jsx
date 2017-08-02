import React from 'react';
import PropTypes from 'prop-types';

export default function TimeSignatures(props) {
  return (
    <select id="timeSignature">
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

TimeSignatures.propTypes = {
  signatures: PropTypes.arrayOf(PropTypes.string),
};

TimeSignatures.defaultProps = {
  signatures: [],
};
