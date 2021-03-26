import styled from 'styled-components';

import theme from '../../../styles/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 15px;
  color: ${theme.colors.black3};
`;

const Input = styled.input`
  outline: none;
  border: 0;
  border-bottom: 1px solid ${theme.colors.black3};
  padding: 10px 0;
  font-size: 20px;
  color: ${theme.colors.black3};

  &:focus {
    border-bottom: 1px solid ${theme.colors.black5};
    color: ${theme.colors.black5};
  }
`;

const Styled = {
  Label,
  Input,
  Wrapper
};

export default Styled;
