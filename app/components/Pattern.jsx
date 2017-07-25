import React from 'react';

export function Pattern(props) {
  const patternId = props.pattern.replace(' ', '');

  return (
    <label htmlFor={patternId}
           className="pure-checkbox">
        <input id={patternId}
               type="checkbox"
               checked="true" />
        {props.pattern}
    </label>
  );
}
