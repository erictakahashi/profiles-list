import styled from 'styled-components';

import Button from '../../../../components/UI/Button/Button';
import theme from '../../../../styles/theme';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.black4};
  padding: 20px 0;
`;

const Title = styled.h2`
  margin: 0;
  color: ${theme.colors.black5};
`;

const Count = styled.span`
  margin: 0 10px;
  font-weight: normal;
`;

const CreateButton = styled(Button)``;

const Styled = {
  Count,
  CreateButton,
  Header,
  Title
};

export default Styled;
