import { FC } from 'react';

import Styled from './Navbar.styled';

/**
 * Application navbar.
 */
const Navbar: FC = () => (
  <Styled.Wrapper>
    <Styled.Container>
      <Styled.Title>Profiles List</Styled.Title>
    </Styled.Container>
  </Styled.Wrapper>
);

export default Navbar;
