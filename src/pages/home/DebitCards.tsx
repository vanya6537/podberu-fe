import { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Back from '../../components/Back';
import { SmallCard } from './components/Cards';

const StyledDebitCards = styled.div`
  section {
    min-height: 500px;
    padding: 70px;

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
  // TODO:: just a placeholder
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <StyledDebitCards>
      {!submitted && (
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
                button={{ value: 'Подробнее', size: 'sm' }}
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
                button={{ value: 'Подробнее', size: 'sm' }}
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
                button={{ value: 'Подробнее', size: 'sm' }}
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
                button={{ value: 'Подробнее', size: 'sm' }}
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
                button={{ value: 'Подробнее', size: 'sm' }}
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
                button={{ value: 'Подробнее', size: 'sm' }}
              />
            </Col>
          </Row>
        </section>
      )}
    </StyledDebitCards>
  );
};

export default DebitCards;
