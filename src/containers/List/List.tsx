import { Fragment, FC } from 'react';

import Styled from './List.styled';

/**
 * List page container.
 */
const List: FC = () => (
  <Fragment>
    <Styled.Navbar />

    <Styled.Container>
      List
    </Styled.Container>
  </Fragment>
);

export default List;
