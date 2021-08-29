import { render } from '@testing-library/react';
import { WithLoader, WithLoaderMessage } from './WithLoader';

const setup = ({
  loading,
  error,
  testId = 'WithLoader_Message',
}: {
  loading: boolean;
  error: boolean;
  testId?: string;
}) => {
  const utils = render(
    <WithLoader loading={loading} error={error}>
      <p data-testid="WithLoader_Children">Test</p>
    </WithLoader>,
  );
  const element = utils.getByTestId(testId);
  return {
    element,
    ...utils,
  };
};

describe('WithLoader', () => {
  it('should display loading message', () => {
    const { element } = setup({ loading: true, error: false });

    expect(element).toHaveTextContent(WithLoaderMessage.loading);
  });

  it('should display error message', () => {
    const { element } = setup({ loading: false, error: true });

    expect(element).toHaveTextContent(WithLoaderMessage.error);
  });

  it('should return children', () => {
    const { element } = setup({
      loading: false,
      error: false,
      testId: 'WithLoader_Children',
    });

    expect(element).toHaveTextContent('Test');
  });
});
