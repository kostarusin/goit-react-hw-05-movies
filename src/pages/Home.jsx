import { useState, useEffect } from 'react';
import { fetchMovies } from 'API';
import MoviesList from 'components/movieslist/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
