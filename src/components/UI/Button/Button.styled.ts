import styled from 'styled-components';

import theme from '../../../styles/theme';

const Button = styled.button`
  border: 0;
  border-radius: 30px;
  padding: 15px;
  background-color: ${theme.colors.primary};
  font-size: 15px;
  font-weight: bold;
  color: ${theme.colors.black0};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    background-color: ${theme.colors.black1};
    color: ${theme.colors.black2};
  }
`;

const Styled = {
  Button
};

export default Styled;
