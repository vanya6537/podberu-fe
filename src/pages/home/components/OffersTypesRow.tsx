import { Col, Row } from 'react-bootstrap';
import { createRef, useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SmallCard } from '../../../components/Card';
import { getIcon } from '../AgentHome';
import { OfferType } from '../../../utilities/models';
import { ROUTES } from '../../../utilities/constants';

export type CardsRowProps = { cards: OfferType[] | null };

const OffersTypesRow = ({ cards }: CardsRowProps) => {
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
      ref.current ? ref.current.getElementsByClassName('card')[0].clientHeight - 28 : 0
    );
    setMaxHeight(Math.max(...cardHeights));
  }, [refs, setMaxHeight]);

  const openOffersByType = useCallback(
    (offerType) => (e: any) => {
      // eslint-disable-next-line no-console
      console.log(e.target);
      history.push({
        pathname: ROUTES.OFFERS_BY_TYPE.path.replace(':offerType', offerType),
      });
    },
    []
  );
  return (
    <Row>
      {data &&
        data.map(({ id, name, description, type, ref }) => (
          <Col ref={ref} key={type} md={4} style={{ marginBottom: 24, padding: '0 12px' }}>
            <SmallCard
              key={`${type}-${id}`}
              title={name}
              subtitle={[description]}
              icon={getIcon(type)}
              onClick={openOffersByType(type)}
              styleBody={{ minHeight: maxHeight }}
            />
          </Col>
        ))}
    </Row>
  );
};

export default OffersTypesRow;
