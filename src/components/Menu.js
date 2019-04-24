import React from 'react';
import PropTypes from 'prop-types';
import { MenuItems } from './MenuItems';
import { Counter } from './Counter';

export function Menu({ items, counter, selectTab }) {
  return (
    <div className="tab-filter-wrapper">
      <div className="tab-filter">
        <MenuItems items={items} selectTab={selectTab} />
        <Counter value={counter} />
      </div>
    </div>
  );
}

Menu.propTypes = {
  items: PropTypes.arrayOf({
    name: PropTypes.string,
    selected: PropTypes.bool
  }).isRequired,
  selectTab: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};
