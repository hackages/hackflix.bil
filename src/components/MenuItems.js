import React from 'react';
import PropTypes from 'prop-types';

export function MenuItems({ items, selectTab }) {
  return (
    <div className="filters">
      <ul className="filters-list">
        {items.map(item => (
          <li key={item.name} onClick={() => selectTab(item.name)}>
            <a href className={item.selected ? 'selected' : ''}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

MenuItems.propTypes = {
  items: PropTypes.arrayOf({ name: PropTypes.string, selected: PropTypes.bool })
    .isRequired,
  selectTab: PropTypes.func.isRequired
};
