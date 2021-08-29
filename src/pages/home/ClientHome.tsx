import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Tabs from '../../components/Tabs';
import CreditCards from './components/CreditCards';
import { IconCard, LargeCard, SmallCard } from '../../components/Card';
import { ROUTES } from '../../utilities/constants';
import InfoColumn from './components/InfoColumn';

type UsefulInfo = {
  title: string;
  links: string[];
}[];

// Multiple rows
const usefulInfo: UsefulInfo[] = [
  [
    {
      title: 'Кредиты',
      links: ['Без справок о доходах', 'В день обращения', 'Самые выгодные', 'Наличными'],
    },
    {
      title: 'Карты',
      links: ['БС овердрафтом', 'Бесплатные', 'С кэшбэком', 'Доходные'],
    },
    {
      title: 'Микрозаймы',
      links: ['На карту', 'Под ПТС', 'Без процентов', 'На Киви'],
    },
    {
      title: 'Страхование',
      links: [
        'ОСАГО онлайн',
        'КАСКО',
        'Страхование для путешественников',
        'Страхование ипотеки',
        'Страхование недвижимости',
        'Страхование от несчастных случаев',
      ],
    },
  ],
  [
    {
      title: 'Вклады',
      links: ['Мультивалютные', 'Самые выгодные', 'С пополнением', 'Пенсионные'],
    },
    {
      title: 'Карты',
      links: ['БС овердрафтом', 'Бесплатные', 'С кэшбэком', 'Доходные'],
    },
    {
      title: 'Микрозаймы',
      links: ['На карту', 'Под ПТС', 'Без процентов', 'На Киви'],
    },
    {
      title: 'Продукты в банках',
      links: [
        'Вклады в банках',
        'Кредиты в банках',
        'Ипотека в банках',
        'Кредитные карты в банках',
        'Дебетовые карты в банках',
        'Автокредиты в банках',
      ],
    },
  ],
];

const ClientHome = () => {
  const history = useHistory();

  const openDebit = () => {
    history.push(ROUTES.DEBIT.path);
  };
  const defaultColStyles = { marginBottom: 24 };
  const infoColStyles = { marginBottom: 48 };
  const sectionStyle = { padding: '32px 0' };

  return (
    <>
      <section style={sectionStyle}>
        <h2>Добрый день!</h2>
        <Row>
          <Col md={6} style={defaultColStyles}>
            <LargeCard
              title="Дебетовые карты"
              subtitle="Сегодня оформить дебетовую карту предлагает своим клиентам практически любой банк."
              button={{ value: 'Смотреть предложения', group: 'purple' }}
              icon="cards"
            />
          </Col>
          <Col md={6} style={defaultColStyles}>
            <LargeCard
              title="Микрозаймы"
              subtitle="Выгодные займы с онлайн заявкой! Одобрение за 5 минут! Минимальный пакет документов!"
              button={{ value: 'Смотреть предложения', group: 'green' }}
              icon="microzaim"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} style={defaultColStyles}>
            <LargeCard
              title="Кредитные карты"
              subtitle="Сегодня оформить кредитную карту предлагает своим клиентам практически любой банк."
              button={{ value: 'Смотреть предложения', group: 'purple' }}
              icon="cards"
            />
          </Col>
          <Col md={6} style={defaultColStyles}>
            <LargeCard
              title="РКО"
              subtitle="Комплекс услуг, которые предлагаются при открытии расчетного счета для бизнесменов."
              button={{ value: 'Смотреть предложения', group: 'orange' }}
              icon="credits"
            />
          </Col>
        </Row>
      </section>

      <section style={sectionStyle}>
        <h2>Список продуктов</h2>
        <Row>
          <Col md={4} style={defaultColStyles}>
            <SmallCard
              title="Кредиты"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="justice"
              onClick={openDebit}
            />
          </Col>
          <Col md={4} style={defaultColStyles}>
            <SmallCard
              title="Микрозаймы"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="microzaim"
              onClick={openDebit}
            />
          </Col>
          <Col md={4} style={defaultColStyles}>
            <SmallCard
              title="РКО"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="credits"
              onClick={openDebit}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} style={defaultColStyles}>
            <SmallCard
              title="Кредитные карты"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="cards"
              onClick={openDebit}
            />
          </Col>
          <Col md={4} style={defaultColStyles}>
            <SmallCard
              title="Для бизнеса"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="finance"
              onClick={openDebit}
            />
          </Col>
          <Col md={4} style={defaultColStyles}>
            <SmallCard
              title="Дебетовые карты"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="cards"
              onClick={openDebit}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} style={defaultColStyles}>
            <SmallCard
              title="КАСКО"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="shield"
              onClick={openDebit}
            />
          </Col>
          <Col md={4} style={defaultColStyles}>
            <SmallCard
              title="ОСАГО"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="shield"
              onClick={openDebit}
            />
          </Col>
          <Col md={4} style={defaultColStyles}>
            <SmallCard
              title="Вклады"
              subtitle={['Описание продукта.', ' Преимущества.']}
              icon="bank"
              onClick={openDebit}
            />
          </Col>
        </Row>
      </section>

      <section style={{ minHeight: 100, ...sectionStyle }}>
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

      <section style={{ minHeight: 100, ...sectionStyle }}>
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
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <a>Посмотреть всех</a>
        </div>
      </section>

      <section style={{ minHeight: 100 }} className="useful-info">
        <h2>Полезная информация</h2>
        {usefulInfo.map((rowItems, rowIndex) => (
          <Row>
            {rowItems.map(({ title, links }) =>
              // Last row is without bottom margins
              usefulInfo.length - 1 === rowIndex ? (
                <Col>
                  <InfoColumn headingText={title} links={links} />
                </Col>
              ) : (
                <Col style={infoColStyles}>
                  <InfoColumn headingText={title} links={links} />
                </Col>
              )
            )}
          </Row>
        ))}
      </section>
    </>
  );
};

export default ClientHome;
