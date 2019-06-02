import React from 'react';
import PropTypes from 'prop-types';

import VexPattern from './VexPattern';


/**
 * Pattern toggle button
 */
export default function PatternButton(props) {
  const patternId = props.pattern.replace(' ', '');
  const klazz = props.active ? 'pure-button-active' : '';

  return (
    <button
      id={patternId}
      type="button"
      className={`${klazz} pure-button`}
      value={props.pattern}
      onClick={event => props.onClick(event)}
    >
      <VexPattern pattern={props.pattern} />
    </button>
  );
}

PatternButton.propTypes = {
  active: PropTypes.bool.isRequired,
  pattern: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
