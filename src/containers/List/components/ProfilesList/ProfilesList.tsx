import { FC } from 'react';

import Styled from './ProfilesList.styled';

interface IProfile {
  cpf?: string,
  email?: string,
  name?: string,
  phone?: string
}

interface IProfilesListProps {
  /** Array of profiles to feed the list. */
  profiles?: Array<IProfile>
}

interface IListItemProps {
  /** Profile object. */
  profile?: IProfile
}

/**
 * The list of profiles.
 */
const ProfilesList: FC<IProfilesListProps> = (props: IProfilesListProps) => {
  const {
    profiles
  } = props;


  if (!profiles || !profiles.length) return (
    <Styled.Error>
      There are no profiles.
    </Styled.Error>
  );

  return (
    <Styled.List>
      {profiles.map(profile => (
        <ListItem
          key={profile.email}
          profile={profile}
        />
      ))}
    </Styled.List>
  );
};

export default ProfilesList;

export const ListItem: FC<IListItemProps> = (props: IListItemProps) => {
  const { profile } = props;

  const {
    cpf,
    email,
    name,
    phone
  } = profile || {};

  return (
    <Styled.ListItem>
      <Styled.Title>{name}</Styled.Title>
      <Styled.Text><Styled.Label>Email:</Styled.Label> {email}</Styled.Text>
      <Styled.Text><Styled.Label>CPF:</Styled.Label> {cpf}</Styled.Text>
      <Styled.Text><Styled.Label>Phone:</Styled.Label> {phone}</Styled.Text>
    </Styled.ListItem>
  );
};
