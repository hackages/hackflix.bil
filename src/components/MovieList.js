import React from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Movie';

import classnames from 'classnames';

export function MovieList({ movies, toggled, selectMovie }) {
  const className = classnames({
    gallery: true,
    'filter-is-visible': toggled
  });

  return (
    <section className={className}>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} selectMovie={selectMovie} />
      ))}
    </section>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf({ title: PropTypes.string.isRequired }).isRequired,
  toggled: PropTypes.bool.isRequired
};
