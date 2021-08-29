import { useQuery } from 'react-query';
import httpRequest from '../../config/service/HttpRequest';

type UserGist = {
  id: string;
  description?: string;
  html_url: string;
  files: object;
  forks_url: string;
};

export type User = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export type UserGistWithForkUsers = UserGist & { forkedUsers: User[] };

export function fetchUserGists(userName: string) {
  return httpRequest({ method: 'GET', url: `/users/${userName}/gists` });
}

export const getUserGists = async (userName: string): Promise<UserGistWithForkUsers[]> => {
  const gists: UserGist[] = await fetchUserGists(userName);

  const gistWithUserInfo: UserGistWithForkUsers[] = [];

  for (let gist of gists) {
    const forks: { owner: User; html_url: string }[] = await httpRequest({
      method: 'GET',
      url: `/gists/${gist.id}/forks`,
    });

    const forkedUsers = forks.slice(0, 3).map(({ owner: { login, avatar_url }, html_url }) => ({
      login,
      avatar_url,
      html_url,
    }));

    gistWithUserInfo.push({ ...gist, forkedUsers });
  }

  return gistWithUserInfo;
};

export default function useFetchUserGists(userName: string) {
  return useQuery(
    ['posts', userName],
    () => {
      if (!userName) return;

      return getUserGists(userName);
    },
    {
      refetchOnWindowFocus: false,
      enabled: false,
    },
  );
}
