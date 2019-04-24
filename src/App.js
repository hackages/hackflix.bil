import React, { Component } from 'react';

// Components
import { Header, Menu, MovieList, MovieDetail, SideBar } from './components';

// Mock data
import mockCategories from './mocks/categories';
import mockMovies from './mocks/movies';

import logo from './images/hackflix_logo.svg';
import './css/Header.css';

// Helper functions
import { filterByCategory, filterByTitle } from './libs/utils';

export class App extends Component {
  state = {
    movies: mockMovies,
    categories: mockCategories,
    toggled: false,
    selectedMovie: null,
    selectedCategoryName: 'All',
    searchTerm: ''
  };

  selectTab = categoryName => {
    // We need to update the `selected` property of the clicked category to be true.
    // We should also filter the movies which are passed to the movie list
    const categories = mockCategories.map(category => ({
      ...category,
      selected: category.name === categoryName
    }));

    this.setState({ categories, selectedCategoryName: categoryName }, () => {
      this.fitlermMovies();
    });
  };

  fitlermMovies = () => {
    const { selectedCategoryName, searchTerm } = this.state;

    const movies = mockMovies.filter(movie => {
      return (
        filterByCategory(movie, selectedCategoryName) &&
        filterByTitle(movie, searchTerm)
      );
    });

    this.setState({ movies });
  };

  toggleSideBar = () => {
    // We need to toggle the state of the sidebar here
    this.setState({ toggled: !this.state.toggled });
  };

  search = event => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.fitlermMovies();
    });
  };

  selectMovie = movie => {
    this.setState({ selectedMovie: movie });
  };

  render() {
    const { movies, categories, toggled, selectedMovie } = this.state;
    return (
      <>
        <Header logo={logo} />

        {selectedMovie ? (
          <MovieDetail movie={selectedMovie} selectMovie={this.selectMovie} />
        ) : (
          <>
            <main className="main-content">
              <Menu
                items={categories}
                counter={movies.length}
                selectTab={this.selectTab}
              />
              <MovieList
                movies={movies}
                toggled={toggled}
                selectMovie={this.selectMovie}
              />
              <SideBar
                toggled={toggled}
                toggleSideBar={this.toggleSideBar}
                search={this.search}
              />
            </main>
          </>
        )}
      </>
    );
  }
}
