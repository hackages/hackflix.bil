import React from 'react';
import PropTypes from 'prop-types';
import '../css/movie.css';
import { PICTURES_CDN_URL } from '../constants/urls';

export function Movie({ movie, selectMovie }) {
  return (
    <div onClick={() => selectMovie(movie)} className="movie">
      <img
        alt={`${movie.title}'s cover`}
        src={PICTURES_CDN_URL + movie.poster_path}
      />
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  selectMovie: PropTypes.func.isRequired
};
