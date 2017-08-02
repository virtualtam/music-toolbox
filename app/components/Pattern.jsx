import React from 'react';
import PropTypes from 'prop-types';


export default function Pattern(props) {
  const patternId = props.pattern.replace(' ', '');

  return (
    <label
      htmlFor={patternId}
      className="pure-checkbox"
    >
      <input
        id={patternId}
        type="checkbox"
        checked="true"
      />
      {props.pattern}
    </label>
  );
}

Pattern.propTypes = {
  pattern: PropTypes.string,
};

Pattern.defaultProps = {
  pattern: '',
};
