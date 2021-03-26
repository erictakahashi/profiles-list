import { FC, InputHTMLAttributes, useCallback, useEffect, useState } from 'react';

import Styled from './Input.styled';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** The class name applied to the containing node. */
  className?: string,
  /** Field label. */
  label?: string
}

/**
 * Input field component.
 */
const Input: FC<IInputProps> = (props: IInputProps) => {
  const {
    className,
    label,
    onChange,
    value,
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (inputValue !== value) setInputValue(value);
  }, [inputValue, value]);

  const handleChanged = useCallback((e: any) => {
    const fieldValue = e?.target?.value;

    if (inputValue !== fieldValue) setInputValue(fieldValue);

    if (onChange) onChange(e);
  }, [inputValue, onChange, setInputValue]);

  return (
    <Styled.Wrapper className={className}>
      {label && (
        <Styled.Label>{label}</Styled.Label>
      )}

      <Styled.Input
        {...rest}
        onChange={handleChanged}
      />
    </Styled.Wrapper>
  );
};

export default Input;
