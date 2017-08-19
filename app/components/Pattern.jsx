import React from 'react';

export default function Pattern(props) {
  const patternId = props.pattern.replace(' ', '');

  return (
    <label
      htmlFor={patternId}
      className="pure-checkbox"
    >
      <input
        id={patternId}
        value={props.pattern}
        type="checkbox"
        checked={props.checked}
        onChange={(event, pattern) => props.onChange(event, pattern)}
      />
      {props.pattern}
    </label>
  );
}
