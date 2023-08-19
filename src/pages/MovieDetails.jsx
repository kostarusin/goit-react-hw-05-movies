import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import MovieDetailsList from 'components/moviedetailslist/MovieDetailsList';
import Loader from 'components/loader/Loader';
import { fetchMovieById } from 'API';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const locationState = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setIsloading(true);
    fetchMovieById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(setIsloading(false));
  }, [movieId, error]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && (
        <p
          style={{
            fontSize: 'xx-large',
            textAlign: 'center',
          }}
        >
          Sorry. {error} 😭
        </p>
      )}
      <Link to={locationState.current}>Go back</Link>
      {movie && <MovieDetailsList movie={movie} />}
      {!error && (
        <>
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
        </>
      )}
    </div>
  );
};

export default MovieDetails;
