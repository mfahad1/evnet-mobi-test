import { useQuery } from 'react-query';
import httpRequest from '../../config/service/HttpRequest';

export type UserGist = {
  id: string;
  description?: string;
  html_url: string;
  files: object;
  forks_url: string;
};

export function fetchUserGists(userName: string): Promise<UserGist[]> {
  return httpRequest({ method: 'GET', url: `/users/${userName}/gists` });
}

export default function useFetchUserGists(userName: string) {
  return useQuery(
    ['userGits', userName],
    () => {
      if (!userName) return;

      return fetchUserGists(userName);
    },
    {
      refetchOnWindowFocus: false,
      enabled: false,
    },
  );
}
