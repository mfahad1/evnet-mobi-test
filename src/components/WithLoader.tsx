type WithLoaderProps = {
  loading: boolean;
  error: boolean;
  children: React.ReactElement;
};

export enum WithLoaderMessage {
  error = 'An Error Occurred',
  loading = 'Loading',
}

export function WithLoader({ loading, error, children }: WithLoaderProps) {
  if (loading || error) {
    return <p data-testid="WithLoader_Message"> {error ? WithLoaderMessage.error : WithLoaderMessage.loading} </p>;
  }

  return children;
}
