import { KeyboardEvent, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

enum KeyName {
  Enter = 'Enter',
}

type InputFieldProps = {
  onComplete: (val: string) => void;
  debounce?: number;
  onEnter?: (val: string) => void;
  className?: string;
  placeholder?: string;
};

export default function InputField(props: InputFieldProps) {
  const { onComplete, debounce = 0, onEnter, className, placeholder } = props;

  const [value, setValue] = useState('');
  const [completeValue] = useDebounce(value, debounce);

  useEffect(() => {
    onComplete(completeValue);
  }, [completeValue, onComplete]);

  const onKeyUp = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && key === KeyName.Enter) {
      onEnter(completeValue);
    }
  };

  return (
    <input
      data-testid="InputField"
      placeholder={placeholder}
      onKeyUp={onKeyUp}
      onChange={({ target: { value } }) => setValue(value)}
      className={className}
    />
  );
}
