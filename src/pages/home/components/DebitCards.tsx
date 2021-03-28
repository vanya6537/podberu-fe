import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Back from '../../../components/Back';
import { SmallCard } from '../../../components/Card';
import Pagination from '../../../components/Pagination';
import { ROUTES } from '../../../utilities/constants';

const StyledDebitCards = styled.div`
  section {
    min-height: 500px;
    padding: 70px;

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
      position: relative;
      > div {
        position: absolute;
        top: 10px;
      }
    }
  }
`;

const DebitCards = () => {
  const history = useHistory();

  const registerDeal = () => {
    history.push(ROUTES.REGISTER.path);
  };

  return (
    <StyledDebitCards>
      <section className="secondary">
        <h2>
          <Back />
          Дебетовые карты
        </h2>
        <Row>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="Альфа-банк"
              subtitle="Описание предложенного бренда."
              body={[
                'Преимущества:',
                '•бесплатное обслуживание;',
                '•до 100 дней без процентов;',
                '•0% за снятие наличных;',
                '•бесплатное пополнение с ',
                'карт любых банков.',
              ]}
              icon="typography"
              button={{ value: 'Подробнее', size: 'sm', onClick: registerDeal }}
            />
          </Col>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="Альфа-банк"
              subtitle="Описание предложенного бренда."
              body={[
                'Преимущества:',
                '•бесплатное обслуживание;',
                '•до 100 дней без процентов;',
                '•0% за снятие наличных;',
                '•бесплатное пополнение с ',
                'карт любых банков.',
              ]}
              icon="typography"
              button={{ value: 'Подробнее', size: 'sm', onClick: registerDeal }}
            />
          </Col>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="Альфа-банк"
              subtitle="Описание предложенного бренда."
              body={[
                'Преимущества:',
                '•бесплатное обслуживание;',
                '•до 100 дней без процентов;',
                '•0% за снятие наличных;',
                '•бесплатное пополнение с ',
                'карт любых банков.',
              ]}
              icon="typography"
              button={{ value: 'Подробнее', size: 'sm', onClick: registerDeal }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="Альфа-банк"
              subtitle="Описание предложенного бренда."
              body={[
                'Преимущества:',
                '•бесплатное обслуживание;',
                '•до 100 дней без процентов;',
                '•0% за снятие наличных;',
                '•бесплатное пополнение с ',
                'карт любых банков.',
              ]}
              icon="typography"
              button={{ value: 'Подробнее', size: 'sm', onClick: registerDeal }}
            />
          </Col>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="Альфа-банк"
              subtitle="Описание предложенного бренда."
              body={[
                'Преимущества:',
                '•бесплатное обслуживание;',
                '•до 100 дней без процентов;',
                '•0% за снятие наличных;',
                '•бесплатное пополнение с ',
                'карт любых банков.',
              ]}
              icon="typography"
              button={{ value: 'Подробнее', size: 'sm', onClick: registerDeal }}
            />
          </Col>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="Альфа-банк"
              subtitle="Описание предложенного бренда."
              body={[
                'Преимущества:',
                '•бесплатное обслуживание;',
                '•до 100 дней без процентов;',
                '•0% за снятие наличных;',
                '•бесплатное пополнение с ',
                'карт любых банков.',
              ]}
              icon="typography"
              button={{ value: 'Подробнее', size: 'sm', onClick: registerDeal }}
            />
          </Col>
        </Row>
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '10px auto', opacity: 0.8 }}
        >
          Показать ещё
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '30px 0' }}>
          <Pagination />
        </div>
      </section>
    </StyledDebitCards>
  );
};

export default DebitCards;
