import { useQuery } from 'react-query';

import httpRequest from '../../config/service/HttpRequest';

export type UserInfo = {
  html_url: string;
  updated_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
};

function fetchForkUserInfo(gistId: string): Promise<UserInfo[]> {
  return httpRequest({ method: 'GET', url: `/gists/${gistId}/forks` });
}

export default function useFetchForkUser(gistId: string) {
  return useQuery([`fetchForkUserInfo-${gistId}`, gistId], () => {
    if (!gistId) return;

    return fetchForkUserInfo(gistId);
  });
}
