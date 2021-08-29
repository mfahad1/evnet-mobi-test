import { useEffect, useState } from 'react';
import useFetchUserGists from '../../hooks/services/useFetchUserGists';
import UserGistListView from './components/UserGistListView';
import UserGistSearcher from './components/UserGistSearcher';

export default function UserGistSearch() {
  const [userName, setUserName] = useState('');
  const { data, error, isFetching, refetch } = useFetchUserGists(userName);

  useEffect(() => {
    refetch();
  }, [userName, refetch]);

  return (
    <div>
      <UserGistSearcher onComplete={setUserName} />
      <UserGistListView gists={data} loading={isFetching} error={!!error} />
    </div>
  );
}
