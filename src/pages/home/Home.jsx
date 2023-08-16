import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'API';

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
    <main>
      <h1>Trending Today</h1>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
