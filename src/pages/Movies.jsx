import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from 'API';
import MoviesList from 'components/movieslist/MoviesList';
import MoviesSearchForm from 'components/moviessearchform/MovieSearchForm';
import Loader from 'components/loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!formSubmitted) {
      setIsloading(true);
      fetchMovies(query);
      setFormSubmitted(true);
    }
  }, [query, formSubmitted]);

  const fetchMovies = query => {
    fetchMoviesByQuery({ query })
      .then(({ results }) => {
        if (results.length === 0 && query !== '') {
          setIsEmpty(true);
          return;
        }
        setMovies(results);
      })

      .catch(error => {
        setError(error.message);
      })
      .finally(setIsloading(false));
  };

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
    if (!query) {
      alert('Insert serch word');
      setIsEmpty(false);
      return;
    }
    setFormSubmitted(false);
    setError(null);
    setIsEmpty(false);
  };

  return (
    <div>
      <MoviesSearchForm
        onSearchSubmit={onHadleSubmit}
        query={query}
        onQueryChange={onQueryChange}
      />
      {isLoading && <Loader />}
      {error && (
        <p
          style={{
            fontSize: 'large',
          }}
        >
          Sorry. {error} 😭
        </p>
      )}
      {isEmpty && (
        <p
          style={{
            fontSize: 'large',
          }}
        >
          Sorry. We found no movies, try again.
        </p>
      )}
      <ul>
        <MoviesList movies={movies} />
      </ul>
    </div>
  );
};

export default Movies;
