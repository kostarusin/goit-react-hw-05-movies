import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

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

  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDI5ZGVlOTNiZTJjYThhZDQ2YmYyMWRlMTQ5ZWU1MiIsInN1YiI6IjY0ZGI0NGQ1ZjQ5NWVlMDI5MzU2OTE1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X9DeGRwHeq0vI0Xl8w9Nwm04Y3Uo2f5aEe62rr6KFDE',
    },
  };

  const searchMovies = event => {
    event.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
      )
      .then(response => {
        console.log(response.data.results);
        setMovies(response.data.results);
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
