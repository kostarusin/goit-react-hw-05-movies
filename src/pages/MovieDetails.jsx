import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieDetailsList from 'components/moviedetailslist/MovieDetailsList';
import Loader from 'components/loader/Loader';
import { fetchMovieById } from 'API';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const { movieId } = useParams();

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

      {movie && <MovieDetailsList movie={movie} />}
    </div>
  );
};

export default MovieDetails;
