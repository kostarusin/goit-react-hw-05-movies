import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReview } from 'API';

const Rewiews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchMovieReview(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <ul>
      {reviews &&
        reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            {review.content}
          </li>
        ))}
    </ul>
  );
};

export default Rewiews;
