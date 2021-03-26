import { FC, Fragment } from 'react';

import Styled from './Profile.styled';

/**
 * Profile page container.
 */
const Profile: FC = () => {
  return (
    <Fragment>
      <Styled.Navbar />

      <Styled.Container>
        <Styled.Form>
          <Styled.Input label="Name" />
          <Styled.Input label="E-mail" />
          <Styled.Input label="CPF" />
          <Styled.Input label="Phone" />

          <Styled.ActionBar>
            <Styled.SaveButton>
              Save Profile
            </Styled.SaveButton>
          </Styled.ActionBar>
        </Styled.Form>
      </Styled.Container>
    </Fragment>
  );
};

export default Profile;
