import React from 'react';

import VexPattern from './VexPattern';

export default function PatternButton(props) {
  const patternId = props.pattern.replace(' ', '');
  const klazz = props.active ? 'pure-button-active' : '';

  return (
    <button
      id={patternId}
      type="button"
      className={klazz + ' pure-button'}
      value={props.pattern}
      onClick={(event, pattern) => props.onClick(event, pattern)}
    >
      <VexPattern pattern={props.pattern} />
    </button>
  );
}
