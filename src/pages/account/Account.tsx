import { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import Tabs from '../../components/Tabs';
import Settings from './components/Settings';
import Withdraw from './components/Withdraw';
import Documents from './components/Documents';
import ProfileCard from './components/ProfileCard';
import Applications from './components/Applications';
import { AuthContext } from '../../context/AuthContext';
import { ROLES } from '../../utilities/constants';

const StyledAccount = styled.div`
  section {
    min-height: 500px;
    padding: 96px 24px;

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

const Account = () => {
  const { user }: any = useContext(AuthContext);

  const data = useMemo(() => {
    if (user.role === ROLES.AGENT) {
      return {
        header: [
          { value: 0, label: 'Мои заявки' },
          { value: 1, label: 'Мои документы' },
          { value: 2, label: 'Вывод средств' },
          { value: 3, label: 'Настройки' },
        ],
        data: {
          0: <Applications />,
          1: <Documents />,
          2: <Withdraw />,
          3: <Settings />,
        },
      };
    }
    return {
      header: [
        { value: 0, label: 'Мои заявки' },
        { value: 1, label: 'Мои документы' },
        { value: 3, label: 'Настройки' },
      ],
      data: {
        0: <Applications />,
        1: <Documents />,
        3: <Settings />,
      },
    };
  }, [user.role]);

  return (
    <StyledAccount>
      <section>
        <h2 style={{ fontSize: 48, fontWeight: 700, textAlign: 'center', marginBottom: 48 }}>
          Добро пожаловать в личный кабинет!
        </h2>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <ProfileCard />
          </Col>
        </Row>

        <Row>
          <Col>
            <Tabs header={data.header} data={data.data} />
          </Col>
        </Row>
      </section>
    </StyledAccount>
  );
};

export default Account;
