import { ButtonProps, Col, Row } from 'react-bootstrap';
import { createRef, useEffect, useMemo, useState } from 'react';
import { SmallCard } from '../../../components/Card';

export type DebitCard = {
  title: string;
  subtitle: string;
  body: string | string[];
  subtitleTextColor?: string;
  icon?: string;
  button?: ButtonProps;
};
export type CardsRowProps = { cards: DebitCard[] };

const CardsRow = ({ cards }: CardsRowProps) => {
  const defaultSubtitleColor = '#272E3E';

  const [maxHeight, setMaxHeight] = useState(131);
  const refs = useMemo(() => (cards ? new Array(cards.length).fill(createRef()) : []), [cards]);
  const data = useMemo(
    () => (cards ? cards.map((info, index) => ({ ...info, ref: refs[index] })) : []),
    [cards, refs]
  );
  // const history = useHistory();

  useEffect(() => {
    // eslint-disable-next-line no-restricted-syntax
    // for (const childRef of refs) {
    //   console.log(childRef.current.getElementsByClassName('card')[0].clientHeight);
    // childRef.current.style.height = maxHeight;
    // }
    setMaxHeight(
      refs.reduce(
        (localMaxHeight, ref) =>
          ref.current.getElementsByClassName('card')[0].clientHeight > localMaxHeight
            ? ref.current.getElementsByClassName('card')[0].clientHeight
            : localMaxHeight,
        0
      )
    );

    // console.log(refs);
  }, [refs, setMaxHeight]);

  return (
    <Row style={{ flexWrap: 'wrap' }}>
      {data &&
        data.map(({ title, subtitle, body, icon, subtitleTextColor, button, ref }) => (
          <Col md={4} ref={ref}>
            <SmallCard
              title={title}
              subtitle={subtitle}
              body={body}
              subtitleTextColor={subtitleTextColor || defaultSubtitleColor}
              icon={icon || 'typography'}
              button={button}
              styleBody={{ minHeight: maxHeight }}
            />
          </Col>
        ))}
    </Row>
  );
};

export default CardsRow;
