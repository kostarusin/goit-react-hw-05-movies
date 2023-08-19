import { useState, useEffect } from 'react';
import { fetchMovies } from 'API';
import MoviesList from 'components/movieslist/MoviesList';
import Loader from 'components/loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsloading(true);
    fetchMovies()
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(setIsloading(false));
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
      {error && (
        <p
          style={{
            fontSize: 'large',
          }}
        >
          Sorry. {error} 😭
        </p>
      )}
    </div>
  );
};

export default Home;
