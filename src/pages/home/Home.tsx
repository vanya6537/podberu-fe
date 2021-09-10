import { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../context/AuthContext';
import AgentHome from './AgentHome';
import ClientHome from './ClientHome';
import { ROLES } from '../../utilities/constants';

const StyledHome = styled.div`
  section {
    min-height: 500px;
    padding: 40px 100px;

    > * {
      max-width: 1156px;
      margin: auto;
    }

    @media only screen and (max-width: 767px) {
      padding: 40px;
    }

    > h2 {
      font-size: 48px;
      font-weight: 500;
      margin-bottom: 48px;
      text-align: center;
      line-height: 1.4;
      width: 100%;
    }

    h4 {
      margin-bottom: 15px;
    }
  }
`;

const Home = () => {
  const { user, isSignedIn }: any = useContext(AuthContext);
  // eslint-disable-next-line no-console
  console.log(user);
  return (
    <StyledHome>
      {(!isSignedIn || user.is_agent) && <ClientHome />}
      {isSignedIn && user.role === ROLES.AGENT && <AgentHome />}
      {/* <AgentHome /> */}
      {/* <ClientHome /> */}
    </StyledHome>
  );
};

export default Home;
