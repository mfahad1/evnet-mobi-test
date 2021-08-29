import axiosRequest from './axios';

const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
const baseURL = process.env.REACT_APP_API_URL;

const getHeader = <T>(header: T) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Authorization: `token ${githubToken}`,
  };

  if (header) return { ...defaultHeaders, ...header };

  return defaultHeaders;
};

type Request<P, D, H> = {
  method: 'POST' | 'PUT' | 'GET' | 'PATCH';
  url: string;
  params?: P;
  data?: D;
  header?: H;
};

const httpRequest = <P, D, H>({ method, url, params, data, header }: Request<P, D, H>) =>
  axiosRequest({
    baseURL,
    method,
    url,
    params,
    data,
    headers: getHeader(header),
  });

export default httpRequest;
