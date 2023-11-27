import { fetchMovieRewiews } from 'api';
import { useParams } from 'react-router-dom';
import {
  NoReviewsMessage,
  ReviewItem,
  ReviewsContainer,
  ReviewsList,
} from './Review.styled';
import { Loader } from 'components/Loader/Loader';
import { useMovieData } from 'hooks/useMovieData';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';


export const Review = () => {
  const params = useParams();
  const { data: reviews, loading } = useMovieData(fetchMovieRewiews, params.id);

  return (
    <ReviewsContainer>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <b>
                Author: <span>{review.author}</span>
              </b>
              <p>{review.content}</p>
            </ReviewItem>
          ))}
        </ReviewsList>
      ) : (
        <NoReviewsMessage>
          <img src={defaultImg} width={250} alt="Default" />
        </NoReviewsMessage>
      )}
      {loading && <Loader />}
    </ReviewsContainer>
  );
};
