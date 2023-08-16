import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'API';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(data => {
        setCasts(data.cast);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <ul>
      {casts &&
        casts.map(cast => (
          <li key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
              alt={cast.name}
            />
            {cast.name}
          </li>
        ))}
    </ul>
  );
};

export default Cast;
