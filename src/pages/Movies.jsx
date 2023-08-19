import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from 'API';
import MoviesList from 'components/movieslist/MoviesList';
import MoviesSearchForm from 'components/moviessearchform/MovieSearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const fetchMovies = query => {
    fetchMoviesByQuery({ query })
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (!formSubmitted) {
      fetchMovies(query);
      setFormSubmitted(true);
    }
  }, [query, formSubmitted]);

  const onQueryChange = event => {
    const newQuery = event.target.value;
    if (newQuery === '') {
      setSearchParams({});
    } else {
      setSearchParams({ query: newQuery });
    }
  };

  const onHadleSubmit = event => {
    event.preventDefault();
    setFormSubmitted(false);
  };

  return (
    <div>
      <MoviesSearchForm
        onSearchSubmit={onHadleSubmit}
        query={query}
        onQueryChange={onQueryChange}
      />
      <ul>
        <MoviesList movies={movies} />
      </ul>
    </div>
  );
};

export default Movies;
