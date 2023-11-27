
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { useHomeOrSearch } from 'hooks/useHomeOrSearch';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'api';

export default function HomePage() {
  const location = useLocation();

  const {
    data: movies,
    error,
    loading,
  } = useHomeOrSearch(fetchTrendingMovies, '');

  return (
    <>
      {!error ? (
        <MoviesList
          title="Trending Today"
          movies={movies}
          location={location}
        />
      ) : (
        <p style={{ color: ' #bdc3c7' }}>Try to reload page</p>
      )}

      {loading && <Loader />}
    </>
  );
}
