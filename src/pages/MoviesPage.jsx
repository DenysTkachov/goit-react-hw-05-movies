
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

import { useHomeOrSearch } from 'hooks/useHomeOrSearch';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'api';

export default function MoviesPage() {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const queryNew = searchParams.get('query') ?? '';
  const {
    data: movies,
    error,
    loading,
  } = useHomeOrSearch(fetchSearchMovie, queryNew.trim());

  const onSubmit = searchedQuery => {
    setSearchParams({ query: `${Date.now()}/${searchedQuery.title}` });
  };

  return (
    <>
      {!error ? (
        <MoviesList
          title="Searched Movies"
          onSubmit={onSubmit}
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
