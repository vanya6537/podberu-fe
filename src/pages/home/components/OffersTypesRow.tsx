import { Col, Row } from 'react-bootstrap';
import { createRef, useEffect, useMemo, useState } from 'react';
import { SmallCard } from '../../../components/Card';
import { getIcon } from '../AgentHome';
import { OfferType } from '../../../utilities/models';

export type CardsRowProps = { cards: OfferType[] | null; onClick: any };

const OffersTypesRow = ({ onClick, cards }: CardsRowProps) => {
  const [maxHeight, setMaxHeight] = useState(0);
  const refs = useMemo(
    () => (cards ? new Array(cards.length).fill(null).map(() => createRef<HTMLDivElement>()) : []),
    [cards]
  );
  const data = useMemo(
    () => (cards ? cards.map((info, index) => ({ ...info, ref: refs[index] })) : []),
    [cards, refs]
  );

  useEffect(() => {
    const cardHeights = refs.map((ref) =>
      ref.current ? ref.current.getElementsByClassName('card')[0].clientHeight - 28 : 0
    );
    setMaxHeight(Math.max(...cardHeights));
  }, [refs, setMaxHeight]);

  return (
    <Row>
      {data &&
        data.map(({ id, name, description, type, ref }) => (
          <Col
            ref={ref}
            key={`${type}_${id}`}
            md={4}
            style={{ marginBottom: 24, padding: '0 12px' }}
          >
            <SmallCard
              key={`${type}-${id}`}
              title={name}
              subtitle={[description]}
              icon={getIcon(type)}
              onClick={onClick(type, id)}
              styleBody={{ minHeight: maxHeight }}
            />
          </Col>
        ))}
    </Row>
  );
};

export default OffersTypesRow;
