import { useState } from 'react';
import styled from 'styled-components';
import AgentHome from './AgentHome';
import ClientHome from './ClientHome';

const StyledHome = styled.div`
  section {
    min-height: 500px;
    padding: 40px 100px;

    > * {
      max-width: 1000px;
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
    }

    h4 {
      margin-bottom: 15px;
    }
  }
`;

const Home = () => {
  // TODO:: just a placeholder
  const [role, setRole] = useState('agent');

  return (
    <StyledHome>
      {role === 'client' && <ClientHome />}
      {role === 'agent' && <AgentHome />}
    </StyledHome>
  );
};

export default Home;
