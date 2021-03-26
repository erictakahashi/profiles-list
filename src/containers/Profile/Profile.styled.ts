import styled from 'styled-components';

import Button from '../../components/UI/Button/Button';
import FormInput from '../../components/Form/Input/Input';
import NavbarComp from '../../components/Navbar/Navbar';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const Navbar = styled(NavbarComp)``;

const Container = styled.section`
  ${mixins.container}
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Form = styled.div`
  ${mixins.grid}
`;

const Input = styled(FormInput)`
  grid-column: span 6;
  margin-bottom: 10px;

  ${theme.responsive.isMobile} {
    grid-column: span 12;
  }
`;

const ActionBar = styled.div`
  grid-column: span 12;
  display: flex;
  justify-content: flex-end;

  ${theme.responsive.isMobile} {
    justify-content: center;
  }
`;

const SaveButton = styled(Button)``;

const Styled = {
  ActionBar,
  Container,
  Form,
  Input,
  Navbar,
  SaveButton
};

export default Styled;
