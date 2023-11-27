import { Suspense, lazy } from 'react';

import {
  BackPageLink,
  Genres,
  GenresItem,
  GenresList,
  InfoContainer,
  MovieContainer,
  MovieImage,
  MovieLink,
  MovieTitle,
  NavList,
  Overview,
  UserScore,
} from './MovieInfo.styled';

const Cast = lazy(() => import('../Cast/Cast.js'));
const Review = lazy(() => import('../Review/Review.js'));

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MovieInfo = ({
  moviePoster,
  title,
  name,
  overview,
  genres,
  score,
  location,
}) => {
  return (
    <>
      <BackPageLink to={location?.from ?? '/'}>Back</BackPageLink>
      <MovieContainer>
        {moviePoster ? (
          <MovieImage
            src={`https://image.tmdb.org/t/p/w500${moviePoster}`}
            alt="Movie Poster"
          />
        ) : (
          <span>
            <img src={defaultImg} width={250} alt="Default" />
          </span>
        )}
        <InfoContainer>
          <MovieTitle>{title || name}</MovieTitle>
          <UserScore>User Score: {(score * 10).toFixed(0)}%</UserScore>
          <Overview>Overview: {overview}</Overview>
          <Genres>Genres</Genres>
          <GenresList>
            {genres &&
              genres.map(genre => (
                <GenresItem key={genre.id}>{genre.name}</GenresItem>
              ))}
          </GenresList>
          <NavList>
            <li>
              <MovieLink to="/credits">
                <Suspense fallback={<div>Loading Cast...</div>}>
                  <Cast />
                </Suspense>
              </MovieLink>
            </li>
            <li>
              <MovieLink to="/reviews">
                <Suspense fallback={<div>Loading Reviews...</div>}>
                  <Review />
                </Suspense>
              </MovieLink>
            </li>
          </NavList>
        </InfoContainer>
      </MovieContainer>
    </>
  );
};
