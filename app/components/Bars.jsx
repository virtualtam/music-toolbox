import React from 'react';
import PropTypes from 'prop-types';

export default function Bars(props) {
  return (
    <select id="nBars">
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

Bars.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.number),
};

Bars.defaultProps = {
  bars: [],
};
