import styled from 'styled-components';

import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const Wrapper = styled.header`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.black0};
`;

const Container = styled.div`
  ${mixins.grid}
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Title = styled.h1`
  grid-column: span 12;
  margin: 0;
`;

const Styled = {
  Container,
  Title,
  Wrapper
};

export default Styled;
