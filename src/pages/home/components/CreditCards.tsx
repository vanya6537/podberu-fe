import { Row, Col } from 'react-bootstrap';
import { SmallCard } from '../../../components/Card';

const CreditCards = () => {
  return (
    <Row>
      <Col md={4} style={{ marginBottom: 10 }}>
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
          icon="typography"
          button={{ value: 'Подробнее', size: 'sm' }}
        />
      </Col>
      <Col md={4} style={{ marginBottom: 10 }}>
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
          icon="typography"
          button={{ value: 'Подробнее', size: 'sm' }}
        />
      </Col>
      <Col md={4} style={{ marginBottom: 10 }}>
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
          icon="typography"
          button={{ value: 'Подробнее', size: 'sm' }}
        />
      </Col>
    </Row>
  );
};

export default CreditCards;
