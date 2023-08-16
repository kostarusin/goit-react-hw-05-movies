import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { fetchMoviesByQuery } from 'API';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = event => {
    const newQuery = event.target.value;
    if (newQuery === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: newQuery });
  };

  const searchMovies = event => {
    event.preventDefault();
    fetchMoviesByQuery(query)
      .then(data => {
        console.log(data.results);
        setMovies(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <form onSubmit={searchMovies}>
        <input type="text" value={query} onChange={updateQueryString} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
