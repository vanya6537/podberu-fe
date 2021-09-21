import { Col, Row } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Tabs from '../../components/Tabs';
import { IconCard, LargeCard } from '../../components/Card';
import { ORDER_TYPES, ROUTES } from '../../utilities/constants';
import InfoColumn from './components/InfoColumn';
import { OfferType } from '../../utilities/models';
import { getOffersByType, getOffersTypes } from '../../api';
import OffersTypesRow from './components/OffersTypesRow';
import OffersList from './components/OffersList';

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
  // const history = useHistory();

  const defaultColStyles = { marginBottom: 24 };
  const infoColStyles = { marginBottom: 48 };
  const sectionStyle = { padding: '32px 0' };
  const history = useHistory();

  const [offers, setOffers] = useState<OfferType[] | null>(null);
  const [offersTypes, setOffersTypes] = useState<OfferType[] | null>(null);
  const handleTabSelect = useCallback((offerType) => {
    getOffersByType(offerType)
      .then((responseInfo) => {
        // const { response, message, status, error } = data;
        const { data }: { data: OfferType[] } = responseInfo;
        // console.log(response);
        // eslint-disable-next-line no-console
        setOffers(data);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getOffersByType(ORDER_TYPES.CREDIT)
      .then((responseInfo) => {
        // const { response, message, status, error } = data;
        const { data }: { data: OfferType[] } = responseInfo;
        // console.log(response);
        // eslint-disable-next-line no-console
        setOffers(data);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    getOffersTypes()
      .then((responseInfo) => {
        // const { response, message, status, error } = data;
        const { data }: { data: OfferType[] } = responseInfo;
        // console.log(response);
        // eslint-disable-next-line no-console
        setOffersTypes(data);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);

  const openOffersByType = useCallback(
    (offerType, id = null) =>
      (e: any) => {
        history.push({
          pathname: ROUTES.OFFERS_BY_TYPE.path
            .replace(':offerType', offerType)
            .replace(':id', id || ''),
        });
      },
    []
  );

  return (
    <>
      <section style={sectionStyle}>
        <h2>Добрый день!</h2>
        <Row>
          <Col md={6} style={defaultColStyles}>
            <LargeCard
              title="Дебетовые карты"
              subtitle="Сегодня оформить дебетовую карту предлагает своим клиентам практически любой банк."
              button={{
                onClick: openOffersByType(ORDER_TYPES.DEBIT),
                value: 'Смотреть предложения',
                group: 'purple',
              }}
              icon="cards"
            />
          </Col>
          <Col md={6} style={defaultColStyles}>
            <LargeCard
              title="Микрозаймы"
              subtitle="Выгодные займы с онлайн заявкой! Одобрение за 5 минут! Минимальный пакет документов!"
              button={{
                onClick: openOffersByType(ORDER_TYPES.MFO),
                value: 'Смотреть предложения',
                group: 'green',
              }}
              icon="microzaim"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} style={defaultColStyles}>
            <LargeCard
              title="Кредитные карты"
              subtitle="Сегодня оформить кредитную карту предлагает своим клиентам практически любой банк."
              button={{
                onClick: openOffersByType(ORDER_TYPES.CREDIT),
                value: 'Смотреть предложения',
                group: 'purple',
              }}
              icon="cards"
            />
          </Col>
          <Col md={6} style={defaultColStyles}>
            <LargeCard
              title="РКО"
              subtitle="Комплекс услуг, которые предлагаются при открытии расчетного счета для бизнесменов."
              button={{
                onClick: openOffersByType(ORDER_TYPES.RKO),
                value: 'Смотреть предложения',
                group: 'orange',
              }}
              icon="credits"
            />
          </Col>
        </Row>
      </section>

      <section style={sectionStyle}>
        <h2>Список продуктов</h2>
        <OffersTypesRow onClick={openOffersByType} cards={offersTypes} />
      </section>

      <section style={{ minHeight: 100, ...sectionStyle }}>
        <h2>Лучшие предложения</h2>
        <Row>
          <Col>
            <Tabs
              header={[
                { value: ORDER_TYPES.CREDIT, label: 'Кредитные карты' },
                { value: ORDER_TYPES.DEBIT, label: 'Дебетовые карты' },
                { value: ORDER_TYPES.BUSINESS_CREDIT, label: 'Кредиты' },
                { value: ORDER_TYPES.MFO, label: 'Микрозаймы' },
                // { value: 4, label: 'Все предложения' },
              ]}
              data={{
                [ORDER_TYPES.CREDIT]: <OffersList cards={offers} offerType={ORDER_TYPES.DEBIT} />,

                [ORDER_TYPES.DEBIT]: <OffersList cards={offers} offerType={ORDER_TYPES.DEBIT} />,
                [ORDER_TYPES.BUSINESS_CREDIT]: (
                  <OffersList cards={offers} offerType={ORDER_TYPES.BUSINESS_CREDIT} />
                ),
                [ORDER_TYPES.MFO]: <OffersList cards={offers} offerType={ORDER_TYPES.MFO} />,
                // 4: 'Все предложения',
              }}
              onSelect={handleTabSelect}
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
