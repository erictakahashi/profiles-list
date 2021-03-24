import { FC, HTMLAttributes } from 'react';

import Styled from './Button.styled';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Button children content. */
  children?: any
}

const Button: FC<IButtonProps> = (props: IButtonProps) => {
  const {
    children,
    ...rest
  } = props;

  return (
    <Styled.Button {...rest}>
      {children}
    </Styled.Button>
  );
};

export default Button;
