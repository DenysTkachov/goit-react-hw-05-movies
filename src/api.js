import axios from 'axios';

const ApiKey = 'b77cad9228a707cfdd5acd6de9da1242';

axios.defaults.baseURL = `
https://api.themoviedb.org/`;

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`3/trending/all/week?api_key=${ApiKey}`);
  return response.data.results;
};

export const fetchSearchMovie = async query => {
  const response = await axios.get(
    `3/search/movie?api_key=${ApiKey}&query=${query}&include_adult=false&language=en-US`
  );
  return response.data.results;
};

export const fetchMovie = async movieId => {
  const response = await axios.get(
    `3/movie/${movieId}?api_key=${ApiKey}&append_to_response=videos,images,credits&language=en-US`
  );
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(
    `3/movie/${movieId}/credits?api_key=${ApiKey}&append_to_response=videos,images,credits&language=en-US`
  );
  return response.data.cast;
};

export const fetchMovieRewiews = async movieId => {
  const response = await axios.get(
    `3/movie/${movieId}/reviews?api_key=${ApiKey}&append_to_response=videos,images,credits&language=en-US`
  );
  return response.data.results;
};