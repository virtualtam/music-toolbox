import React from 'react';
import PropTypes from 'prop-types';

/**
 * Number of generated bars' selection
 */
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

BarSelect.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.number).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
