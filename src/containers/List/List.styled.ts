import styled from 'styled-components';

import NavbarComp from '../../components/Navbar/Navbar';
import mixins from '../../styles/mixins';

const Navbar = styled(NavbarComp)``;

const Container = styled.section`
  ${mixins.grid}
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Styled = {
  Container,
  Navbar
};

export default Styled;
