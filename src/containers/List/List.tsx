import { Fragment, FC } from 'react';

import Styled from './List.styled';
import { useList } from './useList';

/**
 * List page container.
 */
const List: FC = () => {
  const {
    profiles = []
  } = useList() || {};

  return (
    <Fragment>
      <Styled.Navbar />

      <Styled.Container>
        <Styled.Header count={profiles.length} />

        <Styled.List profiles={profiles} />
      </Styled.Container>
    </Fragment>
  );
};

export default List;
