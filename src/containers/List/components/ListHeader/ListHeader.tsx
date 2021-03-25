import { FC } from 'react';

import Styled from './ListHeader.styled';

interface IListHeaderProps {
  /** Total profiles count. */
  count?: Number
}

/**
 * List header.
 */
const ListHeader: FC<IListHeaderProps> = (props: IListHeaderProps) => {
  const {
    count = 0
  } = props;

  return (
    <Styled.Header>
      <Styled.Title>
        Profiles
        <Styled.Count>{count}</Styled.Count>
      </Styled.Title>

      <Styled.CreateButton>
        New Profile
      </Styled.CreateButton>
    </Styled.Header>
  );
};

export default ListHeader;
