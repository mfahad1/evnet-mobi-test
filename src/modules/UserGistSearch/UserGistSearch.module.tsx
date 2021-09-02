import { useEffect, useState } from 'react';
import useFetchUserGists from '../../hooks/services/useFetchUserGists';
import UserGistListView from './components/UserGistListView';
import UserGistSearcher from './components/UserGistSearcher';

export default function UserGistSearch() {
  const [userName, setUserName] = useState('');
  const [page, setPage] = useState(1);
  const { data, error, isLoading, hasNextPage, isFetchingNextPage, refetch, isFetchingPreviousPage } =
    useFetchUserGists(userName, { page });

  useEffect(() => {
    refetch();
  }, [userName, refetch, page]);

  useEffect(() => {
    setPage(1);
  }, [userName]);

  const onScrollEnd = () => {
    if (isFetchingNextPage || !hasNextPage) return;

    setPage(page + 1);
  };

  const onScrollStart = () => {
    if (isFetchingPreviousPage || page === 0) return;

    setPage(page - 1);
  };

  return (
    <div>
      <UserGistSearcher onComplete={setUserName} />
      <UserGistListView
        gists={data?.pages[0]}
        loading={isLoading}
        error={!!error}
        onScrollEnd={onScrollEnd}
        onScrollStart={onScrollStart}
      />
    </div>
  );
}
