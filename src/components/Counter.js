import React from 'react';
import PropTypes from 'prop-types';

export function Counter({ value }) {
  return (
    <ul className="misc">
      <li className="counter">
        <a href>{value}</a>
      </li>
    </ul>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired
};
