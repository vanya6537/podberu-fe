import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useCallback, useContext, useEffect, useState } from 'react';
import { SmallCard } from '../../components/Card';
import { ROUTES } from '../../utilities/constants';
import { OfferType } from '../../utilities/models';
import { getOffersTypes } from '../../api';
import { AuthContext } from '../../context/AuthContext';

// const perChunk = 3;
// const chunkArray = (arr: OfferType[]): OfferType[][] =>
//   arr.reduce((resultArray, item, index) => {
//     const chunkIndex = Math.floor(index / perChunk);
//
//     if (!resultArray[chunkIndex]) {
//       // eslint-disable-next-line no-param-reassign
//       resultArray[chunkIndex] = []; // start a new chunk
//     }
//
//     resultArray[chunkIndex].push(item);
//
//     return resultArray;
//   }, [] as OfferType[][]);

export const getIcon = (typeName: string) => {
  switch (typeName) {
    case 'rko':
      return 'credits';
    case 'mfo':
      return 'microzaim';
    case 'credit':
      return 'cards';
    case 'debit':
      return 'cards';
    case 'business_credit':
      return 'finance';
    default:
      return 'cards';
  }
};

const AgentHome = () => {
  const history = useHistory();
  const { user }: any = useContext(AuthContext);

  // const openDebit = useCallback(()) => {
  //   history.push(ROUTES.DEBIT.path);
  // },[]);

  const [offers, setOffers] = useState<OfferType[] | null>(null);

  const openOffersByType = useCallback(
    (offerType) => () => {
      // console.log(e.target);
      history.push({
        pathname: ROUTES.OFFERS_BY_TYPE.path.replace(':offerType', offerType),
      });
    },
    []
  );
  useEffect(() => {
    getOffersTypes()
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

  return (
    <section>
      <h2 style={{ marginTop: 56, marginBottom: 24, fontSize: 48, fontWeight: 700 }}>
        Добрый день{user?.fullName ? `, ${user.fullName}` : ''}!
      </h2>
      <p style={{ marginBottom: 48, fontSize: 36, textAlign: 'center' }}>
        Выберите продукт, чтобы предложить клиенту
      </p>

      <Row>
        {offers &&
          offers.map(({ id, name, header, description, type }) => (
            <Col key={type} md={4} style={{ marginBottom: 24, padding: '0 12px' }}>
              <SmallCard
                title={name}
                subtitle={[description]}
                icon={getIcon(type)}
                onClick={openOffersByType(type)}
              />
            </Col>
          ))}
      </Row>
    </section>
  );
};

export default AgentHome;
