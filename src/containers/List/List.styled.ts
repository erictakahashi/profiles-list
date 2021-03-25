import styled from 'styled-components';

import NavbarComp from '../../components/Navbar/Navbar';
import mixins from '../../styles/mixins';

import ListHeader from './components/ListHeader/ListHeader';
import ProfilesList from './components/ProfilesList/ProfilesList';

const Navbar = styled(NavbarComp)``;

const Container = styled.section`
  ${mixins.container}
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Header = styled(ListHeader)``;

const List = styled(ProfilesList)``;

const Styled = {
  Container,
  Header,
  List,
  Navbar
};

export default Styled;
