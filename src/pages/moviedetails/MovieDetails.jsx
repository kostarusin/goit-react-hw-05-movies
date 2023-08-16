import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieDetailsList from 'components/moviedetailslist/MovieDetailsList';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDI5ZGVlOTNiZTJjYThhZDQ2YmYyMWRlMTQ5ZWU1MiIsInN1YiI6IjY0ZGI0NGQ1ZjQ5NWVlMDI5MzU2OTE1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X9DeGRwHeq0vI0Xl8w9Nwm04Y3Uo2f5aEe62rr6KFDE',
      },
    };
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      )
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <main>
      <button>Go back</button>
      {movie && <MovieDetailsList movie={movie} />}
    </main>
  );
};

export default MovieDetails;
