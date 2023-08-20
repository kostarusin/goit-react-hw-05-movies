import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'API';
import Loader from 'components/loader/Loader';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const defaultImg = `https://i.pinimg.com/564x/01/0c/b2/010cb2c89b8924d966b4369c0142a6cd.jpg`;

  useEffect(() => {
    if (!movieId) return;
    fetchMovieCast(movieId)
      .then(({ cast }) => {
        if (cast.length === 0) {
          setIsEmpty(true);
          return;
        }
        setCasts(cast);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(setIsloading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {isEmpty && <p>Sorry, there is no cast.</p>}
      {error && (
        <p
          style={{
            fontSize: 'large',
          }}
        >
          Sorry. {error} 😭
        </p>
      )}
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
    </>
  );
};

export default Cast;
