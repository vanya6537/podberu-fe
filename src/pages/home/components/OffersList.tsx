import { ButtonProps, Col, Row } from 'react-bootstrap';
import { createRef, useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SmallCard } from '../../../components/Card';
import { OfferType } from '../../../utilities/models';
import { getStaticContentUrl, ROUTES } from '../../../utilities/constants';

export type DebitCard = {
  title: string;
  subtitle: string;
  body: string | string[];
  subtitleTextColor?: string;
  icon?: string;
  button?: ButtonProps;
};
export type OffersListProps = { cards: OfferType[] | null; offerType: string };

const OffersList = ({ cards, offerType }: OffersListProps) => {
  const [maxHeight, setMaxHeight] = useState(0);
  const refs = useMemo(
    () => (cards ? new Array(cards.length).fill(null).map(() => createRef<HTMLDivElement>()) : []),
    [cards]
  );
  const data = useMemo(
    () => (cards ? cards.map((info, index) => ({ ...info, ref: refs[index] })) : []),
    [cards, refs]
  );
  const history = useHistory();

  useEffect(() => {
    const cardHeights = refs.map((ref) =>
      ref.current ? ref.current.getElementsByClassName('card')[0].clientHeight : 0
    );
    setMaxHeight(Math.max(...cardHeights));
  }, [refs, setMaxHeight]);

  const registerDeal = useCallback(
    (bankName) => (e: any) => {
      // eslint-disable-next-line no-console
      console.log(e);
      history.push({
        pathname: ROUTES.REGISTER.path
          .replace(':offerType', offerType)
          .replace(':bankName', bankName),
      });
    },
    [offerType]
  );

  return (
    <Row style={{ flexWrap: 'wrap' }}>
      {data &&
        data.map(({ name, header, description, ref, thumbnail }) => (
          <Col md={4} style={{ marginBottom: 10 }} ref={ref}>
            <SmallCard
              title={name}
              subtitle={header}
              body={description}
              // icon="typography"
              src={getStaticContentUrl(thumbnail)}
              button={{
                value: 'Подробнее',
                size: 'md',
                onClick: registerDeal(name),
                margin: [24, 0, 0, 0],
                padding: [0, 24],
                display: 'absolute',
                bottom: 0,
                // fontSize: 18,
              }}
              styleBody={{ minHeight: maxHeight }}
            />
          </Col>
        ))}
    </Row>
  );
};

export default OffersList;
