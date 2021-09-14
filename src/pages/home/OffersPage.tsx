import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import Back from '../../components/Back';
import Pagination from '../../components/Pagination';
import { getTitle } from '../../utilities/constants';
import { getOffersByType } from '../../api';
import { OfferType } from '../../utilities/models';
import OffersList from './components/OffersList';

const StyledDebitCards = styled.div`
  section {
    min-height: 500px;
    padding: 70px;

    > * {
      max-width: 1156px;
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
      width: 100%;

      > div {
        position: absolute;
        top: 10px;
      }
    }
  }
`;
// export type OffersPageProps = { cardsType: string | undefined; bankName: string | undefined };

const OffersPage = () => {
  // const history = useHistory();
  const { offerType } = useParams<{ offerType: string }>();
  const title = useMemo(() => getTitle(offerType), [offerType]);

  const [offers, setOffers] = useState<OfferType[] | null>(null);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
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

  return (
    <StyledDebitCards>
      <section className="secondary">
        <h2>
          <Back />
          {title}
        </h2>
        <OffersList cards={offers} offerType={offerType} />
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

export default OffersPage;
