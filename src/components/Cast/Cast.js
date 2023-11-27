import { fetchMovieCredits } from 'api';

import { useParams } from 'react-router-dom';
import { CastItem, CastList, NoImage } from './Cast.styled';
import { NoReviewsMessage } from 'components/Review/Review.styled';
import { Loader } from 'components/Loader/Loader';
import { useMovieData } from 'hooks/useMovieData';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';


export const Cast = () => {
  const params = useParams();
  const { data: cast, loading } = useMovieData(fetchMovieCredits, params.id);

  return (
    <>
      {cast.length > 0 ? (
        <CastList>
          {cast.slice(0, 8).map(actor => {
            return (
              <CastItem key={actor.id}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={`${actor.name}`}
                  />
                ) : (
                  <NoImage>
                    <img src={defaultImg} width={250} alt="Default" />
                  </NoImage>
                )}
                <b>{actor.name}</b>
                <p>
                  Chatacter: <span>{actor.character}</span>
                </p>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <NoReviewsMessage>No cast available</NoReviewsMessage>
      )}
      {loading && <Loader />}
    </>
  );
};
