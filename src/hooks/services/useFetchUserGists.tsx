import { useInfiniteQuery } from 'react-query';
import httpRequest from '../../config/service/HttpRequest';

export type UserGist = {
  id: string;
  description?: string;
  html_url: string;
  files: object;
  forks_url: string;
};

type Pagination = {
  per_page: number;
  page: number;
};

export function fetchUserGists(userName: string, params?: Partial<Pagination>): Promise<UserGist[]> {
  let per_page = 10;
  let page = 1;

  if (params) {
    per_page = params.per_page || per_page;
    page = params.page || page;
  }

  return httpRequest({ method: 'GET', url: `/users/${userName}/gists`, params: { per_page, page } });
}

export default function useFetchUserGists(userName: string, params?: Partial<Pagination>) {
  return useInfiniteQuery(
    ['userGits', userName, params],
    () => {
      if (!userName) return;

      return fetchUserGists(userName, params);
    },
    {
      refetchOnWindowFocus: false,
      enabled: false,
      keepPreviousData: true,
      getNextPageParam: (lastPage) => lastPage?.length === 10,
      getPreviousPageParam: () => params?.page,
    },
  );
}
