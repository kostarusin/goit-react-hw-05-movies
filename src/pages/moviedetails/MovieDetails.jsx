import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieDetailsList from 'components/moviedetailslist/MovieDetailsList';
import { fetchMovieById } from 'API';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <main>
      <button>Go back</button>
      {movie && <MovieDetailsList movie={movie} />}
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet movieId={movieId} />
    </main>
  );
};

export default MovieDetails;
