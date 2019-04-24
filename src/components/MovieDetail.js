import React from 'react';
import PropTypes from 'prop-types';
import { BACKDROP_URL_780 } from '../constants/urls';

export function MovieDetail({ movie, selectMovie }) {
  const { title, backdrop_path, overview, release_date, vote_average } = movie;
  return (
    <div>
      <div className="card mb-3 movie-card">
        <div className="card-block">
          <div className="card-bkg">
            <div className="hero-vignette" />
            <img
              alt="Movie Cover"
              className="card-imt-top"
              src={BACKDROP_URL_780 + backdrop_path}
            />
          </div>
          <div className="card-block-detail">
            <h1 className="black">{title}</h1>
            <p className="rating">
              <span>{vote_average}</span> / 10
            </p>
            <p className="date">{release_date}</p>
            <p>{overview}</p>
            <button
              className="btn btn-primary"
              onClick={() => selectMovie(null)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  movieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectMovie: PropTypes.func.isRequired
};
