import React, { useState, useEffect } from 'react';

// Components
import { Header, Menu, MovieList, MovieDetail, SideBar } from './components';

// Mock data
import mockCategories from './mocks/categories';
import mockMovies from './mocks/movies';

import logo from './images/hackflix_logo.svg';
import './css/Header.css';

// Helper functions
import { fitlerMovies, selectCatgory } from './libs/utils';

export function App() {
  const initialState = {
    movies: mockMovies,
    categories: mockCategories,
    toggled: false,
    selectedMovie: null,
    selectedCategoryName: 'All',
    searchTerm: ''
  };

  const [state, setState] = useState(initialState);

  useEffect(
    () => {
      setState({
        ...state,
        movies: fitlerMovies(state, mockMovies)
      });
    },
    [state.searchTerm, state.selectedCategoryName]
  );

  const toggleSideBar = () => {
    // We need to toggle the state of the sidebar here
    setState({ ...state, toggled: !state.toggled });
  };

  const selectTab = categoryName => {
    setState({
      ...state,
      selectedCategoryName: categoryName,
      categories: selectCatgory(categoryName, categories)
    });
  };

  const search = event => {
    setState({ ...state, searchTerm: event.target.value });
  };

  const selectMovie = movie => {
    setState({ ...state, selectedMovie: movie });
  };

  const { movies, categories, toggled, selectedMovie } = state;

  return (
    <>
      <Header logo={logo} />

      {selectedMovie ? (
        <MovieDetail movie={selectedMovie} selectMovie={selectMovie} />
      ) : (
        <>
          <main className="main-content">
            <Menu
              items={categories}
              counter={movies.length}
              selectTab={selectTab}
            />
            <MovieList
              movies={movies}
              toggled={toggled}
              selectMovie={selectMovie}
            />
            <SideBar
              toggled={toggled}
              toggleSideBar={toggleSideBar}
              search={search}
            />
          </main>
        </>
      )}
    </>
  );
}
