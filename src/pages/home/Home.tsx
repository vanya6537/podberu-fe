import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { LargeCard, SmallCard } from './components/Cards';

const StyledHome = styled.div`
  section {
    min-height: 500px;
    padding: 40px 100px;

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
  }
`;

const Home = () => {
  // TODO:: just a placeholder
  return (
    <StyledHome>
      <section>
        <h2>Добрый день!</h2>
        <Row>
          <Col md={6} style={{ marginBottom: 20 }}>
            <LargeCard
              title="Дебетовые карты"
              subtitle="Сегодня оформить дебетовую карту предлагает своим клиентам практически любой банк."
              button={{ value: 'Смотреть предложения', group: 'purple' }}
              icon="cards"
            />
          </Col>
          <Col md={6} style={{ marginBottom: 20 }}>
            <LargeCard
              title="Микрозаймы"
              subtitle="Выгодные займы с онлайн заявкой! Одобрение за 5 минут! Минимальный пакет документов!"
              button={{ value: 'Смотреть предложения', group: 'green' }}
              icon="microzaim"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} style={{ marginBottom: 20 }}>
            <LargeCard
              title="Кредитные карты"
              subtitle="Сегодня оформить кредитную карту предлагает своим клиентам практически любой банк."
              button={{ value: 'Смотреть предложения', group: 'purple' }}
              icon="cards"
            />
          </Col>
          <Col md={6} style={{ marginBottom: 20 }}>
            <LargeCard
              title="РКО"
              subtitle="Комплекс услуг, которые предлагаются при открытии расчетного счета для бизнесменов."
              button={{ value: 'Смотреть предложения', group: 'orange' }}
              icon="credits"
            />
          </Col>
        </Row>
      </section>

      <section>
        <h2>Список продуктов</h2>
        <Row>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="Кредиты"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="justice"
            />
          </Col>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="Микрозаймы"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="microzaim"
            />
          </Col>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="РКО"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="credits"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="Кредитные карты"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="cards"
            />
          </Col>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="Для бизнеса"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="finance"
            />
          </Col>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="Дебетовые карты"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="cards"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="КАСКО"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="shield"
            />
          </Col>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="ОСАГО"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="shield"
            />
          </Col>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="Вклады"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="bank"
            />
          </Col>
        </Row>
      </section>

      <section>
        <h2>Лучшие предложения</h2>
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
    </StyledHome>
  );
};

export default Home;
