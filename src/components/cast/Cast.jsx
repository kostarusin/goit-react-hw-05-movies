import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'API';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  const defaultImg = `https://i.pinimg.com/564x/01/0c/b2/010cb2c89b8924d966b4369c0142a6cd.jpg`;

  useEffect(() => {
    if (!movieId) return;
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
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                  : defaultImg
              }
              width={250}
              alt={`${cast.name}`}
            />
            {!cast.profile_path && <p>Sorry, we didn't find a photo.</p>}
            {cast.name}
          </li>
        ))}
    </ul>
  );
};

export default Cast;
