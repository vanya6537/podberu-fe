import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { SmallCard } from '../../components/Card';
import { ROUTES } from '../../utilities/constants';

const AgentHome = () => {
  const history = useHistory();

  const openDebit = () => {
    history.push(ROUTES.DEBIT.path);
  };

  return (
    <section>
      <h2>Добрый день, Максим Юрьевич!</h2>
      <p style={{ marginBottom: 25, marginTop: -10, fontSize: 20, textAlign: 'center' }}>
        Выберите продукт, чтобы предложить клиенту
      </p>

      <Row>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="Кредиты"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="justice"
            onClick={openDebit}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="Микрозаймы"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="microzaim"
            onClick={openDebit}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="РКО"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="credits"
            onClick={openDebit}
          />
        </Col>
      </Row>
      <Row>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="Кредитные карты"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="cards"
            onClick={openDebit}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="Для бизнеса"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="finance"
            onClick={openDebit}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="Дебетовые карты"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="cards"
            onClick={openDebit}
          />
        </Col>
      </Row>
      <Row>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="КАСКО"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="shield"
            onClick={openDebit}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="ОСАГО"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="shield"
            onClick={openDebit}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="Вклады"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="bank"
            onClick={openDebit}
          />
        </Col>
      </Row>
    </section>
  );
};

export default AgentHome;
