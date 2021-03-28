import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Tabs from '../../components/Tabs';
import Image from '../../components/Image';
import CreditCards from './components/CreditCards';
import ICCardsImage from '../../assets/images/ic_cards.png';
import { LargeCard, SmallCard, IconCard } from '../../components/Card';
import { ROUTES } from '../../utilities/constants';

const ClientHome = () => {
  const history = useHistory();

  const openDebit = () => {
    history.push(ROUTES.DEBIT.path);
  };

  return (
    <>
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

      <section style={{ minHeight: 100 }}>
        <h2>Лучшие предложения</h2>
        <Row>
          <Col>
            <Tabs
              header={[
                { value: 0, label: 'Кредитные карты' },
                { value: 1, label: 'Дебетовые карты' },
                { value: 2, label: 'Кредиты' },
                { value: 3, label: 'Микрозаймы' },
                { value: 4, label: 'Все предложения' },
              ]}
              data={{
                0: <CreditCards />,
                1: 'Дебетовые карты',
                2: 'Кредиты',
                3: 'Микрозаймы',
                4: 'Все предложения',
              }}
            />
          </Col>
        </Row>
      </section>

      <section style={{ minHeight: 100 }}>
        <h2>Наши партнёры</h2>
        <Row>
          <Col>
            <IconCard icon="typography" />
          </Col>
          <Col>
            <IconCard icon="typography" />
          </Col>
          <Col>
            <IconCard icon="typography" />
          </Col>
          <Col>
            <IconCard icon="typography" />
          </Col>
        </Row>
        <div style={{ textAlign: 'center' }}>Посмотреть всех</div>
      </section>

      <section style={{ minHeight: 100 }}>
        <h2>НО проекте</h2>
        <Row>
          <Col>
            <SmallCard
              title={
                <>
                  <Image
                    src={ICCardsImage}
                    name="logo"
                    width={40}
                    margin={[0, 'auto', 15, 'auto']}
                  />
                  Название
                </>
              }
              body={[
                'Описание описание',
                'Описание описание описание',
                'Описание описание описание',
                'Описание описание описание',
                'Описание описание описание',
                'Описание описание описание',
              ]}
              centerText
            />
          </Col>
          <Col>
            <SmallCard
              title={
                <>
                  <Image
                    src={ICCardsImage}
                    name="logo"
                    width={40}
                    margin={[0, 'auto', 15, 'auto']}
                  />
                  Название
                </>
              }
              body={[
                'Описание описание',
                'Описание описание описание',
                'Описание описание описание',
                'Описание описание описание',
                'Описание описание описание',
                'Описание описание описание',
              ]}
              centerText
            />
          </Col>
          <Col>
            <SmallCard
              title={
                <>
                  <Image
                    src={ICCardsImage}
                    name="logo"
                    width={40}
                    margin={[0, 'auto', 15, 'auto']}
                  />
                  Название
                </>
              }
              body={[
                'Описание описание',
                'Описание описание описание',
                'Описание описание описание',
                'Описание описание описание',
                'Описание описание описание',
                'Описание описание описание',
              ]}
              centerText
            />
          </Col>
        </Row>
      </section>

      <section style={{ minHeight: 100 }}>
        <h2>Полезная информация</h2>
        <Row>
          <Col style={{ marginBottom: 20 }}>
            <h4>Кредиты</h4>
            <small>
              <div>Без справок о доходах</div>
              <div>В день обращения</div>
              <div>Самые выгодные</div>
              <div>Наличными</div>
            </small>
          </Col>
          <Col style={{ marginBottom: 20 }}>
            <h4>Карты</h4>
            <small>
              <div>БС овердрафтом</div>
              <div>Бесплатные</div>
              <div>С кэшбэком</div>
              <div>Доходные</div>
            </small>
          </Col>
          <Col style={{ marginBottom: 20 }}>
            <h4>Микрозаймы</h4>
            <small>
              <div>На карту</div>
              <div>Под ПТС</div>
              <div>Без процентов</div>
              <div>На Киви</div>
            </small>
          </Col>
          <Col style={{ marginBottom: 20 }}>
            <h4>Страхование</h4>
            <small>
              <div>ОСАГО онлайн</div>
              <div>КАСКО</div>
              <div>Страхование для путешественников</div>
              <div>Страхование ипотеки</div>
              <div>Страхование недвижимости</div>
              <div>Страхование от несчастных случаев</div>
            </small>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: 20 }}>
            <h4>Вклады</h4>
            <small>
              <div>Мультивалютные</div>
              <div>Самые выгодные</div>
              <div>С пополнением</div>
              <div>Пенсионные</div>
            </small>
          </Col>
          <Col style={{ marginBottom: 20 }}>
            <h4>Вклады</h4>
            <small>
              <div>Мультивалютные</div>
              <div>Самые выгодные</div>
              <div>С пополнением</div>
              <div>Пенсионные</div>
            </small>
          </Col>
          <Col style={{ marginBottom: 20 }}>
            <h4>Вклады</h4>
            <small>
              <div>Мультивалютные</div>
              <div>Самые выгодные</div>
              <div>С пополнением</div>
              <div>Пенсионные</div>
            </small>
          </Col>
          <Col style={{ marginBottom: 20 }}>
            <h4>Продукты в банках</h4>
            <small>
              <div>Вклады в банках</div>
              <div>Кредиты в банках</div>
              <div>Ипотека в банках</div>
              <div>Кредитные карты в банках</div>
              <div>Дебетовые карты в банках</div>
              <div>Автокредиты в банках</div>
            </small>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ClientHome;
