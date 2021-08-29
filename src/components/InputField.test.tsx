import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputField from './InputField';

const setup = () => {
  const utils = render(<InputField onComplete={jest.fn} onEnter={jest.fn} />);
  const input = utils.getByTestId('InputField') as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

describe('InputField', () => {
  it('should have empty value', () => {
    const { input } = setup();

    expect(input.value).toBe('');
  });

  it('should trigger enter', () => {
    const { input } = setup();

    userEvent.type(input, 'testing{enter}');
    fireEvent.keyUp(input, { key: 'Enter', code: 13 });

    expect(input.value).toBe('testing');
  });
});
