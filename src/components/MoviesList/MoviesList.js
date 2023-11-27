import React from 'react';

import { MovieForm } from 'components/MovieForm/MovieForm';
import { SearchedContainer, SearchedItem, SearchedLink, SearchedList, TrendingContainer, TrendingItem, TrendingLink, TrendingList, TrendingTitle } from './MoviesList.styled';


const MoviesList = ({ title, movies, location, onSubmit }) => {
  return (
    <>
      {title === 'Trending Today' ? (
        <TrendingContainer>
          <TrendingTitle>{title}</TrendingTitle>
          <TrendingList>
            {movies.map(movie => (
              <TrendingItem key={movie.id}>
                <TrendingLink
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.title || movie.name}
                </TrendingLink>
              </TrendingItem>
            ))}
          </TrendingList>
        </TrendingContainer>
      ) : (
        <SearchedContainer>
          <MovieForm submitClick={onSubmit} />
          <SearchedList>
            {movies.map(movie => (
              <SearchedItem key={movie.id}>
                <SearchedLink
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.title || movie.name}
                </SearchedLink>
              </SearchedItem>
            ))}
          </SearchedList>
        </SearchedContainer>
      )}
    </>
  );
};

export default MoviesList;
