import styled from 'styled-components';

import mixins from '../../../../styles/mixins';
import theme from '../../../../styles/theme';

const Error = styled.p`
  text-align: center;
  font-size: 20px;
  color: ${theme.colors.red};
`;

const List = styled.ul`
  ${mixins.grid}
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 20px 0;
`;

const ListItem = styled.li`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 4px;
  padding: 20px;
  list-style-type: none;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;

const Title = styled.h3`
  margin: 0 0 10px;
`;

const Text = styled.p`
  margin: 0;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Styled = {
  Error,
  Label,
  List,
  ListItem,
  Text,
  Title
};

export default Styled;
