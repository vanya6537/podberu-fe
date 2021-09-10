import { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { AuthContext } from '../context/AuthContext';
import { ROUTES } from '../utilities/constants';

const StyledHeader = styled.header`
  background-color: #09244c;
  display: flex;
  align-items: center;
  min-height: 120px;
  padding: 36px 24px;
  justify-content: space-between;
`;

const Header = () => {
  const { isSignedIn }: any = useContext(AuthContext);
  const history = useHistory();

  const goHome = () => {
    history.push(ROUTES.HOME.path);
  };

  // const goLanding = () => {
  //   history.push(ROUTES.LANDING.path);
  // };

  const goToProfile = () => {
    history.push(ROUTES.ACCOUNT.path);
  };

  const goToLogIn = () => {
    history.push(ROUTES.SIGN_IN.path);
  };

  return (
    <StyledHeader>
      <Icon name="logo" height={48} onClick={goHome} />
      {isSignedIn ? (
        <Button size="lg" value="Профиль" onClick={goToProfile} />
      ) : (
        <Button size="lg" value="Войти" onClick={goToLogIn} />
      )}
      {/* <Button value="Оформить заявку" /> */}
    </StyledHeader>
  );
};

export default Header;
