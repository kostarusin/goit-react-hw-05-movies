import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from 'API';
import MoviesList from 'components/movieslist/MoviesList';
import MoviesSearchForm from 'components/moviessearchform/MovieSearchForm';
import Loader from 'components/loader/Loader';

const Movies = () => {
  const [selectedMovies, setSelectedMovies] = useState('');
  const [movies, setMovies] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    setIsloading(true);
    fetchMoviesByQuery({ query })
      .then(({ results }) => {
        if (results.length === 0) {
          setIsEmpty(true);
          setMovies([]);
          return;
        }
        setMovies(results);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(setIsloading(false));
  }, [query]);

  const onQueryChange = event => {
    setSelectedMovies(event.target.value);
    setIsEmpty(false);
  };

  const onHadleSubmit = event => {
    event.preventDefault();
    if (!selectedMovies) {
      alert('Insert serch word');
      return;
    }
    handleSubmit(selectedMovies);
    setSelectedMovies('');
  };

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <div>
      {isLoading && <Loader />}
      <MoviesSearchForm
        onSearchSubmit={onHadleSubmit}
        selectedMovies={selectedMovies}
        onQueryChange={onQueryChange}
      />
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

      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
