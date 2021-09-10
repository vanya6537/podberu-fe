import { Row, Col, ButtonProps } from 'react-bootstrap';
import { SmallCard } from '../../../components/Card';

export type DebitCard = {
  title: string;
  subtitle: string;
  body: string | string[];
  subtitleTextColor?: string;
  icon?: string;
  button?: ButtonProps;
};
export type CardsRowProps = { cardsInfo: DebitCard[] };

const CardsRow = ({ cardsInfo }: CardsRowProps) => {
  const defaultSubtitleColor = '#272E3E';
  return (
    <Row>
      {cardsInfo &&
        cardsInfo.map(({ title, subtitle, body, icon, subtitleTextColor, button }) => (
          <Col md={4}>
            <SmallCard
              title={title}
              subtitle={subtitle}
              body={body}
              subtitleTextColor={subtitleTextColor || defaultSubtitleColor}
              icon={icon || 'typography'}
              button={button}
            />
          </Col>
        ))}
    </Row>
  );
};

export default CardsRow;
