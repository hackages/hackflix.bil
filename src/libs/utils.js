import mockGenres from '../mocks/genres';
export const getGenreName = (id, genres) =>
  genres
    .filter(genre => genre.id === id)
    .map(({ name }) => name)
    .join('');
export const getGenreId = (name, genres = mockGenres) =>
  parseInt(
    genres
      .filter(genre => genre.name === name)
      .map(({ id }) => id)
      .join(''),
    10
  );

export const movieContainsGenre = (movie, genre_id) =>
  movie.genre_ids.reduce(
    (contains, next) => (contains ? contains : next === genre_id),
    false
  );

export const filterMoviesByCat = (movies, genre_id) =>
  movies.filter(movie => movieContainsGenre(movie, genre_id));

export const getPopularFilters = (genres, movies) =>
  genres
    .map(({ id }) => id)
    .map(id => ({
      name: getGenreName(id),
      movies: filterMoviesByCat(movies, id)
    }))
    .sort((a, b) => b.movies.length - a.movies.length)
    .map(({ name }) => name)
    .map(category => ({
      category,
      selected: false
    }))
    .slice(0, 5)
    .reduce((genres, nextGenre) => [...genres, nextGenre], [
      { category: 'All', selected: true }
    ]);

export const filterByCategory = (movie, categoryName) =>
  categoryName === 'All' || movieContainsGenre(movie, getGenreId(categoryName));

export const filterByTitle = (movie, title) =>
  movie.title.toLowerCase().includes(title.toLowerCase());

export const selectCatgory = (categoryName, categories) => {
  // We need to update the `selected` property of the clicked category to be true.
  // We should also filter the movies which are passed to the movie list
  return categories.map(category => ({
    ...category,
    selected: category.name === categoryName
  }));
};

export const fitlerMovies = (state, movies) => {
  const { selectedCategoryName, searchTerm } = state;

  return movies.filter(movie => {
    return (
      filterByCategory(movie, selectedCategoryName) &&
      filterByTitle(movie, searchTerm)
    );
  });
};
