import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export function SideBar({ toggleSideBar, toggled, search }) {
  const className = classnames({
    filter: true,
    'filter-is-visible': toggled
  });

  return (
    <>
      <div className={className}>
        <form>
          <div className="filter-block">
            <h4>Search</h4>
            <div className="filter-content">
              <input type="search" placeholder="title" onInput={search} />
            </div>
          </div>
        </form>
      </div>

      <a href className="hand-cursor filter-trigger" onClick={toggleSideBar}>
        {toggled ? 'Close filters' : 'Open filters'}
      </a>
    </>
  );
}

SideBar.protoTypes = {
  toggleSideBar: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  toggled: PropTypes.bool.isRequired
};
