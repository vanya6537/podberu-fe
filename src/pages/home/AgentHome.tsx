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
      <h2 style={{ marginTop: 56, marginBottom: 24, fontSize: 48, fontWeight: 700 }}>
        Добрый день, Максим Юрьевич!
      </h2>
      <p style={{ marginBottom: 48, fontSize: 36, textAlign: 'center' }}>
        Выберите продукт, чтобы предложить клиенту
      </p>

      <Row>
        <Col md={4} style={{ marginBottom: 24, padding: '0 12px' }}>
          <SmallCard
            title="Кредиты"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="justice"
            onClick={openDebit}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 24, padding: '0 12px' }}>
          <SmallCard
            title="Микрозаймы"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="microzaim"
            onClick={openDebit}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 24, padding: '0 12px' }}>
          <SmallCard
            title="РКО"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="credits"
            onClick={openDebit}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 24, padding: '0 12px' }}>
          <SmallCard
            title="Кредитные карты"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="cards"
            onClick={openDebit}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 24, padding: '0 12px' }}>
          <SmallCard
            title="Для бизнеса"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="finance"
            onClick={openDebit}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 24, padding: '0 12px' }}>
          <SmallCard
            title="Дебетовые карты"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="cards"
            onClick={openDebit}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 24, padding: '0 12px' }}>
          <SmallCard
            title="КАСКО"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="shield"
            onClick={openDebit}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 24, padding: '0 12px' }}>
          <SmallCard
            title="ОСАГО"
            subtitle={['Описание продукта.', ' Преимущества.']}
            icon="shield"
            onClick={openDebit}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 24, padding: '0 12px' }}>
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
