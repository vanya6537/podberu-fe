import { useHistory } from 'react-router-dom';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ROUTES } from '../../utilities/constants';
import { OfferType } from '../../utilities/models';
import { getOffersTypes } from '../../api';
import { AuthContext } from '../../context/AuthContext';
import OffersTypesRow from './components/OffersTypesRow';

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

const AgentHome = () => {
  const history = useHistory();
  const { user }: any = useContext(AuthContext);

  // const openDebit = useCallback(()) => {
  //   history.push(ROUTES.DEBIT.path);
  // },[]);

  const [offers, setOffers] = useState<OfferType[] | null>(null);

  const openOffersByType = useCallback(
    (offerType, id = null) => (e: any) => {
      // eslint-disable-next-line no-console
      // console.log(e.target);
      history.push({
        pathname: ROUTES.OFFERS_BY_TYPE.path
          .replace(':offerType', offerType)
          .replace(':id', id || ''),
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
      <OffersTypesRow onClick={openOffersByType} cards={offers} />
    </section>
  );
};

export default AgentHome;
