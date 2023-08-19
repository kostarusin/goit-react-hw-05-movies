import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import MovieDetailsList from 'components/moviedetailslist/MovieDetailsList';
import { fetchMovieById } from 'API';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const locationState = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;
    fetchMovieById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      <Link to={locationState.current}>Go back</Link>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
