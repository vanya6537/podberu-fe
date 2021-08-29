import { Row, Col } from 'react-bootstrap';
import { SmallCard } from '../../../components/Card';

const CreditCards = () => {
  const defaultSubtitleColor = '#272E3E';
  return (
    <Row>
      <Col md={4}>
        <SmallCard
          title="Альфа-банк"
          subtitle="Описание предложенного бренда."
          body={[
            'Преимущества:',
            '•бесплатное обслуживание;',
            '•до 100 дней без процентов;',
            '•0% за снятие наличных;',
            '•бесплатное пополнение с ',
            'карт любых банков.',
          ]}
          subtitleTextColor={defaultSubtitleColor}
          icon="typography"
        />
      </Col>
      <Col md={4}>
        <SmallCard
          title="Альфа-банк"
          subtitle="Описание предложенного бренда."
          body={[
            'Преимущества:',
            '•бесплатное обслуживание;',
            '•до 100 дней без процентов;',
            '•0% за снятие наличных;',
            '•бесплатное пополнение с ',
            'карт любых банков.',
          ]}
          subtitleTextColor={defaultSubtitleColor}
          icon="typography"
        />
      </Col>
      <Col md={4}>
        <SmallCard
          title="Альфа-банк"
          subtitle="Описание предложенного бренда."
          body={[
            'Преимущества:',
            '•бесплатное обслуживание;',
            '•до 100 дней без процентов;',
            '•0% за снятие наличных;',
            '•бесплатное пополнение с ',
            'карт любых банков.',
          ]}
          subtitleTextColor={defaultSubtitleColor}
          icon="typography"
        />
      </Col>
    </Row>
  );
};

export default CreditCards;
