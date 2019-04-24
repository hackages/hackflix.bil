import React from 'react';
import PropTypes from 'prop-types';

export function Header({ logo }) {
  return (
    <header>
      <img src={logo} alt="hackflix logo" />
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired
};
