import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReview } from 'API';
import Loader from 'components/loader/Loader';

const Rewiews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchMovieReview(movieId)
      .then(({ results }) => {
        if (results.length === 0) {
          setIsEmpty(true);
          return;
        }
        setReviews(results);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(setIsloading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {isEmpty && <p>Sorry, there is no reviews.</p>}
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
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              {review.content}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Rewiews;
