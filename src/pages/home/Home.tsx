import { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../context/AuthContext';
// import { ROLES } from '../../utilities/constants';
import AgentHome from './AgentHome';
import ClientHome from './ClientHome';

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
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 34px;
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
  const { user }: any = useContext(AuthContext);
  console.log(user);
  return (
    <StyledHome>
      {/* {user.role === ROLES.CLIENT && <ClientHome />} */}
      {/* {user.role === ROLES.AGENT && <AgentHome />} */}
      <AgentHome />
      <p>-----Дальше главная страница клиентов-----</p>
      <ClientHome />
    </StyledHome>
  );
};

export default Home;
